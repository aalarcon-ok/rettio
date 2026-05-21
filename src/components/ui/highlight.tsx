"use client";
import { useEffect, useRef, useState } from "react";

interface HighlightProps {
  children: React.ReactNode;
}

export function Highlight({ children }: HighlightProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} style={{ position: "relative", display: "inline", isolation: "isolate" }}>
      {/* Fondo ámbar — se dibuja de izquierda a derecha */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: "-2px -4px",
          borderRadius: "3px",
          background: "rgba(232,160,32,0.35)",
          zIndex: 0,
          transformOrigin: "left center",
          transform: active ? "scaleX(1)" : "scaleX(0)",
          transition: active ? "transform 600ms ease-out" : "none",
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </span>
  );
}
