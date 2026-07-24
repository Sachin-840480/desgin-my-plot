"""
Quick top-down diagram renderer.
Purpose: visually SANITY-CHECK the structured layout engine's output
before any money is spent on Gemini/diffusion calls. Not the final
product visual — that's Layer 2's job.
"""
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from layout_engine import LayoutEngine, PlotRequest, decimals_to_sqft_square

COLORS = {
    "house": "#c97b4a",
    "garage": "#8a8a8a",
    "pool": "#4ea5d9",
    "pond": "#2f7ea6",
    "garden": "#6faa4a",
}


def render(engine: LayoutEngine, out_path: str):
    fig, ax = plt.subplots(figsize=(7, 7))
    ax.add_patch(patches.Rectangle((0, 0), engine.plot_w, engine.plot_l,
                                    fill=False, edgecolor="black", linewidth=2))

    for z in engine.zones:
        color = COLORS.get(z.type, "#999999")
        ax.add_patch(patches.Rectangle((z.x, z.y), z.width, z.height,
                                        facecolor=color, edgecolor="black", alpha=0.85))
        cx, cy = z.center()
        ax.text(cx, cy, z.type.upper(), ha="center", va="center", fontsize=9, weight="bold")

    # road indicator
    road_pt = engine._road_edge_point()
    ax.annotate("ROAD", xy=road_pt, xytext=(road_pt[0], road_pt[1] - 8 if engine.road_side == "north" else road_pt[1]),
                ha="center", fontsize=10, color="red", weight="bold")

    ax.set_xlim(-5, engine.plot_w + 5)
    ax.set_ylim(-5, engine.plot_l + 5)
    ax.set_aspect("equal")
    ax.invert_yaxis()
    scores = engine.to_json()["scores"]
    ax.set_title(f"Iteration 1.0 — Privacy {scores['privacy']} | Access {scores['vehicle_access']} | "
                  f"Usage {scores['land_usage']} | Green {scores['green_coverage']}", fontsize=10)
    plt.savefig(out_path, dpi=150, bbox_inches="tight")
    print(f"Saved: {out_path}")


if __name__ == "__main__":
    side = decimals_to_sqft_square(20)
    req = PlotRequest(
        plot_width_ft=side,
        plot_length_ft=side,
        road_side="north",
        requirements=["garage", "pool", "garden", "pond"],
    )
    engine = LayoutEngine(req)
    engine.place_zones()
    render(engine, "/home/claude/plot-optimizer/example_layout.png")
