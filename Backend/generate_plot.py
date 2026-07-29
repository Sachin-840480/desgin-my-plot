"""
generate_plot.py
================
Generates a photorealistic hand-drawn architectural land map using Gemini's
image generation model (nano-banana-pro-preview), matching the style shown
in backend/example/Gemini_Generated_Image_m0hrnwm0hrnwm0hr.png.

The prompt is crafted from the same conversation style used in backend/example/chat.txt
that produced the reference image in Gemini Chat.

Output (all inside backend/export/):
  generation_1.png  — the generated plot map image
  generation_1.md   — detailed report for this generation

IMPORTANT — API KEY BILLING:
  The image generation models (nano-banana-pro-preview, gemini-2.5-flash-image, etc.)
  require billing to be enabled on your Google AI Studio account.
  The free tier has limit: 0 for these models.

  To enable billing:
  1. Go to https://aistudio.google.com/
  2. Click your profile -> Billing
  3. Link a Google Cloud billing account
  4. Then re-run this script.

Usage:
  cd backend && python generate_plot.py
"""

import os
import sys
import time
import re
import textwrap
from pathlib import Path
from datetime import datetime

# ── Paths ─────────────────────────────────────────────────────────────────────
SCRIPT_DIR = Path(__file__).resolve().parent   # backend/
EXPORT_DIR = SCRIPT_DIR / "export"
ENV_FILE   = SCRIPT_DIR / ".env"
EXPORT_DIR.mkdir(exist_ok=True)

# ── Load .env ─────────────────────────────────────────────────────────────────
from dotenv import load_dotenv
load_dotenv(dotenv_path=ENV_FILE)

GEMINI_API_KEY = os.getenv("GEMINI_NANO_BANANA_KEY", "")
if not GEMINI_API_KEY:
    sys.exit(f"ERROR: GEMINI_NANO_BANANA_KEY not found in {ENV_FILE}")

# ── google-genai SDK ──────────────────────────────────────────────────────────
try:
    from google import genai
    from google.genai import types
except ImportError:
    sys.exit("ERROR: Run:  pip install google-genai")

# ── Pillow for image saving ───────────────────────────────────────────────────
try:
    from PIL import Image
    import io as _io
    PIL_AVAILABLE = True
except ImportError:
    PIL_AVAILABLE = False

# ── Model config ──────────────────────────────────────────────────────────────
# nano-banana-pro-preview == Gemini Nano Banana 2.1 (the image model referenced in .env)
# Fallback chain in case the primary is unavailable
IMAGE_MODELS = [
    "nano-banana-pro-preview",
    "gemini-2.5-flash-image",
    "gemini-3.1-flash-image",
    "gemini-3-pro-image",
]

MAX_RETRIES  = 3
BASE_WAIT_S  = 35


# ── Design brief ──────────────────────────────────────────────────────────────
# Based on the same requirements from backend/example/chat.txt (Iteration 1)
GENERATION = {
    "id": 1,
    "title": "20 Decimal Plot — Ranchi, India",
    "iteration": "Iteration 1: Enhanced Privacy & Dedicated Water Features",
    "plot_size": "20 decimal (~8,712 sq ft), approx 93 ft × 93 ft",
    "road_facing": "North",
    "description": (
        "A beautiful 20 decimal residential plot in Ranchi, India. "
        "The design emphasises maximum privacy with dense perimeter hedging, "
        "a mix of garden styles, dedicated water features (both pond and swimming pool), "
        "and a spacious centrally-placed bungalow."
    ),
    "features": [
        "Main gate with ornate pillars on the north side leading to a cobblestone driveway",
        "Car garage on the left (west) side of the driveway",
        "Front garden: manicured lawn, flowering shrubs, stone path to main entrance",
        "Central 3-4 bedroom bungalow with terracotta tiled roof, veranda at front",
        "Large backyard lawn (main residence area)",
        "Swimming pool on the left (west) side with lounging deck",
        "Serene decorative pond with water lilies on the right (east/south-east) side",
        "BBQ / outdoor kitchen area near the pond",
        "Seating gazebo / pergola area",
        "Mango, Guava, and Lemon fruit trees along the right boundary",
        "Winding gravel/stone walking paths throughout the garden",
        "Dense tall hedgerows on ALL four boundary sides for maximum privacy",
        "Mixed flower beds with seasonal and perennial blooms throughout",
    ],
}


# ── Prompt (matches the Gemini Chat style that produced the reference image) ──
def build_prompt(gen: dict) -> str:
    features_text = "\n".join(f"- {f}" for f in gen["features"])
    return textwrap.dedent(f"""
        Generate a beautiful, detailed, top-down architectural land map / site plan illustration
        for a residential plot in India.

        Style requirements:
        - Hand-drawn architectural illustration style
        - Cream/beige graph-paper or blueprint grid background (like an architectural drawing sheet)
        - Coloured pencil / watercolour wash look for all elements
        - Top-down bird's-eye view of the entire plot
        - Dimension measurements labelled on all four edges (e.g. "93ft", "45ft", etc.)
        - North compass rose in the top-left corner
        - Title "{gen['iteration']}" at the top centre in bold architectural lettering
        - All zones clearly labelled with text directly on the map
        - Rich detail: textured tree canopies, tiled house roof, paved paths, water shimmer

        Plot Details:
        - Location: Ranchi, Jharkhand, India
        - Plot size: {gen['plot_size']}
        - Road facing: {gen['road_facing']} (road runs along the top edge)
        - Description: {gen['description']}

        Required zones and features (place ALL of these in their correct positions):
{features_text}

        The output should look exactly like a professional architectural site plan drawn by a
        landscape architect — similar to the coloured hand-drawn garden plans seen in
        architectural magazines or Gemini AI generated land maps.
        Include realistic plant textures, tree canopy shapes, water reflections in pool and pond,
        roof texture on the house, and material textures on paths and driveway.
    """).strip()


# ── Image save helper ─────────────────────────────────────────────────────────
def save_image_from_response(response, image_path: Path) -> bool:
    """Extract inline image bytes from Gemini response and save as PNG."""
    for part in response.candidates[0].content.parts:
        if hasattr(part, "inline_data") and part.inline_data is not None:
            raw = part.inline_data.data
            if PIL_AVAILABLE:
                img = Image.open(_io.BytesIO(raw))
                img.save(str(image_path), "PNG")
            else:
                with open(image_path, "wb") as f:
                    f.write(raw)
            return True
    # SDK helper fallback
    for part in response.candidates[0].content.parts:
        if hasattr(part, "as_image"):
            try:
                img = part.as_image()
                img.save(str(image_path), "PNG")
                return True
            except Exception:
                pass
    return False


# ── Retry-aware Gemini call ───────────────────────────────────────────────────
def _get_retry_wait(err: str) -> float:
    m = re.search(r"retry in (\d+(?:\.\d+)?)s", err)
    return float(m.group(1)) + 3 if m else BASE_WAIT_S


def call_image_model(client, prompt: str) -> tuple:
    """
    Try each image model in priority order.
    Returns (response, model_name) on success.
    Raises RuntimeError if all models fail.
    """
    last_error = ""
    for model in IMAGE_MODELS:
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                print(f"  [{model}] Attempt {attempt}/{MAX_RETRIES} ...")
                response = client.models.generate_content(
                    model=model,
                    contents=prompt,
                    config=types.GenerateContentConfig(
                        response_modalities=["IMAGE", "TEXT"],
                    ),
                )
                return response, model
            except Exception as e:
                last_error = str(e)
                if "429" in last_error and attempt < MAX_RETRIES:
                    wait = _get_retry_wait(last_error)
                    print(f"  Rate limited. Waiting {wait:.0f}s ...")
                    time.sleep(wait)
                elif "limit: 0" in last_error:
                    # Hard quota limit — billing required, no point retrying this model
                    print(f"  [{model}] QUOTA LIMIT: 0 (billing required) — trying next model")
                    break
                elif "404" in last_error:
                    print(f"  [{model}] Not found — trying next model")
                    break
                else:
                    print(f"  [{model}] Error: {last_error[:120]}")
                    break

    raise RuntimeError(
        f"All image models failed.\n"
        f"Last error: {last_error[:400]}\n\n"
        f"ACTION REQUIRED: Enable billing on your Google AI Studio account:\n"
        f"  1. Visit: https://aistudio.google.com/\n"
        f"  2. Go to Settings -> Billing -> Link a Google Cloud billing account\n"
        f"  3. Re-run this script after billing is enabled.\n"
        f"\nThe free tier has limit: 0 for image generation models."
    )


# ── Markdown report ───────────────────────────────────────────────────────────
def write_report(gen: dict, image_path: Path, prompt: str,
                 elapsed: float, success: bool,
                 used_model: str = "—", error: str = "") -> Path:
    ts       = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    status   = "Success" if success else f"Failed — {error[:200]}"
    features = "\n".join(f"- {f}" for f in gen["features"])
    img_line = f"![{gen['title']}](./{image_path.name})" if success else "_Image not generated._"

    md = textwrap.dedent(f"""
        # Generation {gen['id']} — Plot Design Report

        **{gen['title']}**
        _{gen['iteration']}_

        | Field | Value |
        |-------|-------|
        | Generated | {ts} |
        | Status | {status} |
        | Time | {elapsed:.1f}s |
        | Model | `{used_model}` |
        | Reference style | `backend/example/Gemini_Generated_Image_m0hrnwm0hrnwm0hr.png` |
        | API Key | `GEMINI_NANO_BANANA_KEY` |

        ---

        ## Plot Specifications

        | Parameter | Value |
        |-----------|-------|
        | Location | Ranchi, Jharkhand, India |
        | Plot Size | {gen['plot_size']} |
        | Road Facing | {gen['road_facing']} |

        ## Design Requirements

        {features}

        ## Prompt Sent to Gemini

        ```
        {prompt}
        ```

        ## Generated Image

        {img_line}
    """).strip()

    report_path = EXPORT_DIR / f"generation_{gen['id']}.md"
    report_path.write_text(md, encoding="utf-8")
    return report_path


# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    import time as _time

    print(f"\n{'='*60}")
    print("  Design My Plot — Gemini Image Generation")
    print(f"{'='*60}")
    print(f"  Target style : backend/example/*.png (hand-drawn plan)")
    print(f"  Models tried : {', '.join(IMAGE_MODELS[:2])} ...")
    print(f"  Export dir   : backend/export/")
    print(f"{'='*60}\n")

    gen        = GENERATION
    image_path = EXPORT_DIR / f"generation_{gen['id']}.png"
    prompt     = build_prompt(gen)
    client     = genai.Client(api_key=GEMINI_API_KEY)

    print(f"Plot: {gen['title']}")
    print(f"Style: {gen['iteration']}\n")

    t0         = _time.time()
    success    = False
    used_model = "—"
    error      = ""

    try:
        response, used_model = call_image_model(client, prompt)
        print(f"\n  Model responded: {used_model}")

        if save_image_from_response(response, image_path):
            success = True
            size_kb = image_path.stat().st_size // 1024
            print(f"  Image saved -> backend/export/{image_path.name}  ({size_kb} KB)")
        else:
            error = "Response contained no image data"
            print(f"  No image in response.")
            for part in response.candidates[0].content.parts:
                if hasattr(part, "text") and part.text:
                    print(f"  Text: {part.text[:300]}")

    except RuntimeError as exc:
        error = str(exc)
        print(f"\n{error}")
    except Exception as exc:
        error = str(exc)[:400]
        print(f"\n  ERROR: {error}")

    elapsed     = _time.time() - t0
    report_path = write_report(gen, image_path, prompt, elapsed, success, used_model, error)
    print(f"  Report saved -> backend/export/{report_path.name}")

    print(f"\n{'='*60}")
    print(f"  {'SUCCESS' if success else 'FAILED'}  |  {elapsed:.1f}s")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
