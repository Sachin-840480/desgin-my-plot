"""
dependencies.py — FastAPI dependency: verify Clerk session token (RS256 via JWKS)

Clerk's official recommendation for non-Node backends:
  • Tokens are signed RS256 with Clerk's private key.
  • Verify using the public JWKS at:
      https://<frontend-api>/.well-known/jwks.json
  • Validate: algorithm=RS256, expiry, nbf, and azp claim.

References:
  https://clerk.com/docs/backend-requests/handling/manual-jwt
"""
from __future__ import annotations

import time
from typing import Annotated

import httpx
from fastapi import Depends, HTTPException, Security, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import ExpiredSignatureError, JWTError, jwt
from jose.backends import RSAKey

from app.config import Settings, get_settings

# ---------------------------------------------------------------------------
# JWKS cache (simple in-memory, refreshed if key not found)
# ---------------------------------------------------------------------------
_jwks_cache: dict | None = None
_jwks_fetched_at: float = 0.0
_JWKS_TTL = 3600  # re-fetch every hour


async def _fetch_jwks(jwks_url: str) -> dict:
    global _jwks_cache, _jwks_fetched_at
    now = time.monotonic()
    if _jwks_cache is None or (now - _jwks_fetched_at) > _JWKS_TTL:
        async with httpx.AsyncClient() as client:
            resp = await client.get(jwks_url, timeout=10)
            resp.raise_for_status()
            _jwks_cache = resp.json()
            _jwks_fetched_at = now
    return _jwks_cache  # type: ignore[return-value]


# ---------------------------------------------------------------------------
# Bearer token extractor
# ---------------------------------------------------------------------------
_bearer = HTTPBearer(auto_error=True)


# ---------------------------------------------------------------------------
# Main dependency
# ---------------------------------------------------------------------------
async def verify_clerk_token(
    credentials: Annotated[HTTPAuthorizationCredentials, Security(_bearer)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> dict:
    """
    Verify a Clerk session JWT.

    Returns the decoded claims dict on success.
    Raises HTTP 401 on any failure.

    The returned dict always contains:
      sub   – Clerk user ID string, e.g. "user_2abc..."
      exp   – expiry unix timestamp
      (and any other Clerk session claims)
    """
    token = credentials.credentials
    _unauth = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid or expired authentication token.",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        # 1. Peek at the header to get the key ID (kid)
        unverified_header = jwt.get_unverified_header(token)
        kid = unverified_header.get("kid")
        alg = unverified_header.get("alg", "")

        if alg != "RS256":
            raise _unauth

        # 2. Fetch JWKS and find the matching key
        jwks = await _fetch_jwks(settings.clerk_jwks_url)
        matching_key = next(
            (k for k in jwks.get("keys", []) if k.get("kid") == kid),
            None,
        )
        if matching_key is None:
            # Key not in cache — force refresh once and retry
            global _jwks_cache
            _jwks_cache = None
            jwks = await _fetch_jwks(settings.clerk_jwks_url)
            matching_key = next(
                (k for k in jwks.get("keys", []) if k.get("kid") == kid),
                None,
            )
        if matching_key is None:
            raise _unauth

        # 3. Decode + verify signature, expiry, nbf
        claims = jwt.decode(
            token,
            matching_key,
            algorithms=["RS256"],
            options={"verify_aud": False},  # Clerk tokens don't always set aud
        )

        # 4. Validate azp (authorized party) — the origin that created the token
        azp = claims.get("azp")
        if azp and settings.allowed_origins_list and azp not in settings.allowed_origins_list:
            raise _unauth

        return claims

    except ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token has expired.",
            headers={"WWW-Authenticate": "Bearer"},
        )
    except JWTError:
        raise _unauth
    except HTTPException:
        raise
    except Exception:
        raise _unauth
