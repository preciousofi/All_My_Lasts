import { useMemo } from "react";

export default function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${(index * 37 + 8) % 100}%`,
        delay: `${(index % 7) * -1.7}s`,
        duration: `${10 + (index % 6) * 2}s`,
        size: `${12 + (index % 4) * 7}px`,
        drift: `${(index % 2 === 0 ? 1 : -1) * (15 + index % 30)}px`,
      })),
    []
  );

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          className="floating-heart"
          key={heart.id}
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
            "--drift": heart.drift,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}