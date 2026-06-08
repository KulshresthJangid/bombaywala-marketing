"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(target: number, duration: number, started: boolean): number {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, started]);

  return count;
}

interface CountUpStatProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function CountUpStat({ value, suffix = "", label, duration = 1800 }: CountUpStatProps) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, duration, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "3.5rem",
          fontWeight: 800,
          color: "var(--color-orange)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          fontWeight: 500,
          color: "var(--color-text-muted)",
          letterSpacing: "0.04em",
          textAlign: "center",
        }}
      >
        {label}
      </div>
    </div>
  );
}
