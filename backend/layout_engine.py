"""
Layer 1: Spatial Layout Intelligence Engine
--------------------------------------------
This is the core differentiator. Takes plot dimensions + requirements,
outputs a STRUCTURED layout (zone coordinates) using constraint rules,
NOT an image. This runs BEFORE any diffusion model touches the design.

v0: rule-based placement + scoring (fast, explainable, no training data needed).
Upgrade path: swap `place_zones()` internals with OR-Tools CP-SAT or a
genetic algorithm once we want multi-objective optimization across many
candidate layouts instead of a single deterministic pass.
"""

from dataclasses import dataclass, field, asdict
import json
import math


DECIMAL_TO_SQFT = 435.6  # 1 decimal = 435.6 sqft (Indian land unit)


@dataclass
class Zone:
    type: str
    x: float
    y: float
    width: float
    height: float

    def center(self):
        return (self.x + self.width / 2, self.y + self.height / 2)

    def distance_to(self, other_center):
        cx, cy = self.center()
        ox, oy = other_center
        return math.hypot(cx - ox, cy - oy)


@dataclass
class PlotRequest:
    plot_width_ft: float
    plot_length_ft: float
    road_side: str          # "north" | "south" | "east" | "west"
    requirements: list = field(default_factory=list)  # e.g. ["garage", "pool", "garden", "pond"]
    setback_ft: float = 5.0


class LayoutEngine:
    def __init__(self, request: PlotRequest):
        self.req = request
        self.zones = []
        self.plot_w = request.plot_width_ft
        self.plot_l = request.plot_length_ft
        self.road_side = request.road_side
        self.setback = request.setback_ft

    def _road_edge_point(self):
        """Return the point on the plot boundary closest to the road."""
        if self.road_side == "north":
            return (self.plot_w / 2, 0)
        if self.road_side == "south":
            return (self.plot_w / 2, self.plot_l)
        if self.road_side == "west":
            return (0, self.plot_l / 2)
        return (self.plot_w, self.plot_l / 2)  # east default

    def place_zones(self):
        road_pt = self._road_edge_point()
        s = self.setback

        # --- House: place roughly centered, respecting setbacks on all sides ---
        house_w = min(self.plot_w * 0.45, 40)
        house_l = min(self.plot_l * 0.4, 45)
        house_x = self.plot_w / 2 - house_w / 2
        house_y = self.plot_l * 0.35  # slightly back from road for driveway run
        self.zones.append(Zone("house", house_x, house_y, house_w, house_l))

        # --- Garage: HARD RULE -> closest to road, aligned to road entry point ---
        garage_w, garage_l = 20, 20
        rx, ry = road_pt
        if self.road_side in ("north", "south"):
            garage_x = max(s, min(self.plot_w - garage_w - s, rx - garage_w / 2))
            garage_y = s if self.road_side == "north" else self.plot_l - garage_l - s
        else:
            garage_x = s if self.road_side == "west" else self.plot_w - garage_w - s
            garage_y = max(s, min(self.plot_l - garage_l - s, ry - garage_l / 2))
        self.zones.append(Zone("garage", garage_x, garage_y, garage_w, garage_l))

        # --- Pool: HARD RULE -> maximize distance from road (privacy) ---
        pool_w, pool_l = 25, 15
        if self.road_side == "north":
            pool_x, pool_y = self.plot_w - pool_w - s, self.plot_l - pool_l - s
        elif self.road_side == "south":
            pool_x, pool_y = self.plot_w - pool_w - s, s
        elif self.road_side == "west":
            pool_x, pool_y = self.plot_w - pool_w - s, self.plot_l - pool_l - s
        else:
            pool_x, pool_y = s, self.plot_l - pool_l - s
        if "pool" in self.req.requirements:
            self.zones.append(Zone("pool", pool_x, pool_y, pool_w, pool_l))

        # --- Pond: safe distance from house, opposite side from pool ---
        if "pond" in self.req.requirements:
            pond_w, pond_l = 12, 10
            # place opposite side from garage's road-facing edge to avoid overlap
            if self.road_side in ("north", "south"):
                pond_x = self.plot_w - pond_w - s
                pond_y = s if self.road_side == "north" else self.plot_l - pond_l - s
            else:
                pond_x = s if self.road_side == "west" else self.plot_w - pond_w - s
                pond_y = self.plot_l - pond_l - s
            self.zones.append(Zone("pond", pond_x, pond_y, pond_w, pond_l))

        # --- Garden: fills remaining open area (simplified as front strip) ---
        if "garden" in self.req.requirements:
            pond_w = 12 if "pond" in self.req.requirements else 0
            garden_w = self.plot_w - garage_w - pond_w - 3 * s
            garden_l = house_y - s
            garden_x = garage_w + s
            garden_y = s
            if garden_w > 5 and garden_l > 5:
                self.zones.append(Zone("garden", garden_x, garden_y, garden_w, garden_l))

        return self.zones

    # ---------- Scoring (0-100 each) ----------
    def score_privacy(self):
        road_pt = self._road_edge_point()
        pool = next((z for z in self.zones if z.type == "pool"), None)
        if not pool:
            return None
        d = pool.distance_to(road_pt)
        max_d = math.hypot(self.plot_w, self.plot_l)
        return round(min(100, (d / max_d) * 130), 1)  # scaled, capped at 100

    def score_vehicle_access(self):
        road_pt = self._road_edge_point()
        garage = next((z for z in self.zones if z.type == "garage"), None)
        if not garage:
            return None
        d = garage.distance_to(road_pt)
        max_reasonable = 30  # ft; beyond this, access is considered poor
        return round(max(0, 100 - (d / max_reasonable) * 100), 1)

    def score_land_usage(self):
        used = sum(z.width * z.height for z in self.zones)
        total = self.plot_w * self.plot_l
        return round((used / total) * 100, 1)

    def score_green_coverage(self):
        green_types = {"garden", "pond"}
        green = sum(z.width * z.height for z in self.zones if z.type in green_types)
        total = self.plot_w * self.plot_l
        return round((green / total) * 100, 1)

    def to_json(self):
        return {
            "plot": {
                "width_ft": self.plot_w,
                "length_ft": self.plot_l,
                "road_side": self.road_side,
            },
            "zones": [asdict(z) for z in self.zones],
            "scores": {
                "privacy": self.score_privacy(),
                "vehicle_access": self.score_vehicle_access(),
                "land_usage": self.score_land_usage(),
                "green_coverage": self.score_green_coverage(),
            },
        }


def decimals_to_sqft_square(decimals: float):
    """Rough helper: convert decimal land unit to an approx square plot side length in ft."""
    sqft = decimals * DECIMAL_TO_SQFT
    side = math.sqrt(sqft)
    return round(side, 1)


if __name__ == "__main__":
    # Example: 20-decimal plot, road on north side, wants garage+pool+garden+pond
    side = decimals_to_sqft_square(20)  # ~93 ft square
    req = PlotRequest(
        plot_width_ft=side,
        plot_length_ft=side,
        road_side="north",
        requirements=["garage", "pool", "garden", "pond"],
    )
    engine = LayoutEngine(req)
    engine.place_zones()
    result = engine.to_json()
    print(json.dumps(result, indent=2))
