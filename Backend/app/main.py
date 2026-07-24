"""
main.py — FastAPI application entry point

Phase 1: health check + layout generation.
No database, no storage, no rendering in this phase.
"""
from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import get_settings
from app.routers import layouts

# ---------------------------------------------------------------------------
# App
# ---------------------------------------------------------------------------

settings = get_settings()

app = FastAPI(
    title="Design My Plot API",
    description="AI Landscape Architect — spatial layout engine backend.",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# ---------------------------------------------------------------------------
# CORS — allow only the Next.js frontend origins
# ---------------------------------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Routers
# ---------------------------------------------------------------------------

app.include_router(layouts.router)

# ---------------------------------------------------------------------------
# Health
# ---------------------------------------------------------------------------


@app.get("/health", tags=["system"])
async def health() -> dict:
    """Unauthenticated liveness check."""
    return {"status": "ok", "version": app.version}
