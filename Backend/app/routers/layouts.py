"""
routers/layouts.py — POST /generate-layout

Runs the LayoutEngine with the user's plot parameters and returns
the structured JSON (zones + scores). No database writes in Phase 1.

Request model mirrors PlotRequest from layout_engine.py exactly.
"""
from __future__ import annotations

from typing import Annotated, Any

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, Field, field_validator

from app.dependencies import verify_clerk_token
from app.engine.layout_engine import LayoutEngine, PlotRequest, decimals_to_sqft_square

router = APIRouter(prefix="/generate-layout", tags=["layouts"])

# ---------------------------------------------------------------------------
# Request / Response models
# ---------------------------------------------------------------------------

VALID_ROAD_SIDES = {"north", "south", "east", "west"}
VALID_REQUIREMENTS = {"garage", "pool", "garden", "pond"}


class LayoutRequest(BaseModel):
    """
    Input for the spatial layout engine.

    Provide dimensions either as raw feet OR as decimals (Indian land unit).
    If decimals is given, it overrides plot_width_ft / plot_length_ft and
    produces an approximate square plot.
    """

    # --- Direct foot dimensions ---
    plot_width_ft: float | None = Field(None, gt=0, description="Plot width in feet")
    plot_length_ft: float | None = Field(None, gt=0, description="Plot length in feet")

    # --- Indian land unit shortcut ---
    decimals: float | None = Field(
        None, gt=0, description="Plot size in decimals (overrides ft fields)"
    )

    road_side: str = Field(..., description="Which boundary faces the road: north|south|east|west")
    requirements: list[str] = Field(
        default_factory=list,
        description="Optional zones to include: garage, pool, garden, pond",
    )
    setback_ft: float = Field(5.0, gt=0, description="Mandatory setback from all boundaries (ft)")

    @field_validator("road_side")
    @classmethod
    def validate_road_side(cls, v: str) -> str:
        v = v.lower()
        if v not in VALID_ROAD_SIDES:
            raise ValueError(f"road_side must be one of {VALID_ROAD_SIDES}")
        return v

    @field_validator("requirements")
    @classmethod
    def validate_requirements(cls, v: list[str]) -> list[str]:
        v = [r.lower() for r in v]
        invalid = set(v) - VALID_REQUIREMENTS
        if invalid:
            raise ValueError(f"Unknown requirements: {invalid}. Valid: {VALID_REQUIREMENTS}")
        return v

    def resolved_width_ft(self) -> float:
        if self.decimals is not None:
            return decimals_to_sqft_square(self.decimals)
        if self.plot_width_ft is None:
            raise ValueError("Provide either decimals or plot_width_ft + plot_length_ft")
        return self.plot_width_ft

    def resolved_length_ft(self) -> float:
        if self.decimals is not None:
            return decimals_to_sqft_square(self.decimals)
        if self.plot_length_ft is None:
            raise ValueError("Provide either decimals or plot_width_ft + plot_length_ft")
        return self.plot_length_ft


class LayoutResponse(BaseModel):
    user_id: str
    plot: dict[str, Any]
    zones: list[dict[str, Any]]
    scores: dict[str, Any]


# ---------------------------------------------------------------------------
# Route
# ---------------------------------------------------------------------------

@router.post("", response_model=LayoutResponse, status_code=status.HTTP_200_OK)
async def generate_layout(
    body: LayoutRequest,
    claims: Annotated[dict, Depends(verify_clerk_token)],
) -> LayoutResponse:
    """
    Run the spatial layout engine and return structured zone data.

    Requires a valid Clerk session token in the Authorization header.
    The authenticated user's ID (Clerk sub) is echoed back in the response.
    """
    try:
        width = body.resolved_width_ft()
        length = body.resolved_length_ft()
    except ValueError as exc:
        raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail=str(exc))

    plot_request = PlotRequest(
        plot_width_ft=width,
        plot_length_ft=length,
        road_side=body.road_side,
        requirements=body.requirements,
        setback_ft=body.setback_ft,
    )

    engine = LayoutEngine(plot_request)
    engine.place_zones()
    result = engine.to_json()

    return LayoutResponse(
        user_id=claims["sub"],
        **result,
    )
