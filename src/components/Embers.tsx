import { memo } from "react";

export const Embers = memo(function Embers({ count = 8 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 97) % 100;
        const delay = (i * 0.7) % 5;
        const duration = 4 + ((i * 1.3) % 4);
        return (
          <span
            key={i}
            className="ember"
            style={{
              left: `${left}%`,
              bottom: `${(i * 13) % 30}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
});
