"use client";

import { useCallback, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Magnetic({
  children,
  strength = 0.25,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion()) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setPos({
        x: (e.clientX - rect.left - rect.width / 2) * strength,
        y: (e.clientY - rect.top - rect.height / 2) * strength,
      });
    },
    [strength]
  );

  const handleLeave = useCallback(() => setPos({ x: 0, y: 0 }), []);
  const settled = pos.x === 0 && pos.y === 0;

  const style: CSSProperties = {
    display: "inline-block",
    transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
    transition: settled ? "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)" : "transform 0.1s linear",
    willChange: "transform",
  };

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} style={style} className={className}>
      {children}
    </div>
  );
}

export function Tilt({
  children,
  max = 6,
  className,
}: {
  children: ReactNode;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion()) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ rx: -py * max * 2, ry: px * max * 2 });
    },
    [max]
  );

  const handleLeave = useCallback(() => setTilt({ rx: 0, ry: 0 }), []);
  const settled = tilt.rx === 0 && tilt.ry === 0;

  const style: CSSProperties = {
    transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
    transition: settled ? "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" : "transform 0.1s linear",
    willChange: "transform",
  };

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} style={style} className={className}>
      {children}
    </div>
  );
}
