import { ReactNode, useEffect, useState } from "react";
import { StageViewport, Stage } from "./DesktopStage.styles";

export const DESIGN_WIDTH = 1440;
export const DESIGN_HEIGHT = 900;

// Discrete zoom steps (largest first). We never upscale past 1 — big monitors
// show the desktop at native size, centred. Tweak these to change the jumps.
const ZOOM_STEPS = [1, 0.9, 0.8, 0.7, 0.6, 0.5];

function computeScale() {
  if (typeof window === "undefined") return 1;
  const fit = Math.min(
    window.innerWidth / DESIGN_WIDTH,
    window.innerHeight / DESIGN_HEIGHT
  );
  // Snap to the largest step that still fits (jumps rather than smooth shrink).
  return ZOOM_STEPS.find((step) => step <= fit) ?? ZOOM_STEPS[ZOOM_STEPS.length - 1];
}

/**
 * Wraps the desktop layout in a fixed 1440x900 canvas and scales it to fit the
 * viewport with CSS `zoom`, so the arrangement stays identical on any screen
 * size (never clips, never reflows) and dragging keeps working.
 */
export default function DesktopStage({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(computeScale);

  useEffect(() => {
    const onResize = () => setScale(computeScale());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <StageViewport>
      <Stage style={{ zoom: scale }}>{children}</Stage>
    </StageViewport>
  );
}
