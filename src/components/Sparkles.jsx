import { useMemo } from "react";

export default function Sparkles() {
  const sparkles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        left: `${(index * 53 + 4) % 100}%`,
        top: `${(index * 31 + 9) % 100}%`,
        delay: `${(index % 8) * 0.45}s`,
        size: `${2 + (index % 3)}px`,
      })),
    []
  );

  return (
    <div className="sparkles" aria-hidden="true">
      {sparkles.map((sparkle) => (
        <span
          className="sparkle"
          key={sparkle.id}
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: sparkle.delay,
            width: sparkle.size,
            height: sparkle.size,
          }}
        />
      ))}
    </div>
  );
}