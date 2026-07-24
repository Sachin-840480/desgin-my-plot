"""
config.py — Application settings loaded from .env
All values are read once at startup via pydantic-settings.
"""
from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache


class Settings(BaseSettings):
    # --- Clerk ---
    # Frontend API hostname, e.g. "oriented-viper-85.clerk.accounts.dev"
    # Used to build the JWKS URL: https://<host>/.well-known/jwks.json
    clerk_frontend_api: str

    # Comma-separated allowed origins (azp claim validation)
    # e.g. "http://localhost:3000,https://your-domain.com"
    allowed_origins: str = "http://localhost:3000"

    # --- InsForge (server-side only) ---
    insforge_url: str = "https://guu2p5v2.ap-southeast.insforge.app"
    insforge_api_key: str = ""

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    @property
    def clerk_jwks_url(self) -> str:
        return f"https://{self.clerk_frontend_api}/.well-known/jwks.json"

    @property
    def allowed_origins_list(self) -> list[str]:
        return [o.strip() for o in self.allowed_origins.split(",") if o.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
