import { useEffect, useRef, useState } from "react";
import { SparkleLayer, Sparkle } from "./SparkleCursor.styles";

type SparkleType = {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
};

type SparkleCursorProps = {
  colors?: string[];
};

export default function SparkleCursor({
  colors = ["#ffd700", "#ffffff", "#fff4b8"],
}: SparkleCursorProps) {
  const [sparkles, setSparkles] = useState<SparkleType[]>([]);
  const nextId = useRef(0);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const now = performance.now();
      // throttle so we don't flood the DOM on fast movement
      if (now - lastSpawn.current < 40) return;
      lastSpawn.current = now;

      const id = nextId.current++;
      const sparkle: SparkleType = {
        id,
        x: e.clientX + (Math.random() * 16 - 8),
        y: e.clientY + (Math.random() * 16 - 8),
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 12 + Math.random() * 10,
      };
      setSparkles((prev) => [...prev, sparkle]);

      // remove after the fade animation finishes
      window.setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 800);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [colors]);

  return (
    <SparkleLayer>
      {sparkles.map((s) => (
        <Sparkle
          key={s.id}
          style={{
            left: s.x,
            top: s.y,
            fontSize: s.size,
            color: s.color,
          }}
        >
          ✦
        </Sparkle>
      ))}
    </SparkleLayer>
  );
}
