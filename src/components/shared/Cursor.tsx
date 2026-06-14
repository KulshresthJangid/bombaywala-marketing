import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const ringX = useSpring(rawX, { stiffness: 120, damping: 18, mass: 0.6 });
  const ringY = useSpring(rawY, { stiffness: 120, damping: 18, mass: 0.6 });

  const [state, setState] = useState<"default" | "hover" | "drag">("default");
  const [visible, setVisible] = useState(false);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive = el.closest("a, button, [role='button'], input, select, textarea, label, [data-cursor='hover']");
      const drag = el.closest("[data-cursor='drag']");
      if (drag) setState("drag");
      else if (interactive) setState("hover");
      else setState("default");
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  const ringSize = state === "hover" ? 48 : state === "drag" ? 56 : 32;
  const ringOpacity = state === "hover" ? 0.6 : 0.35;
  const dotSize = state === "hover" ? 3 : 5;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 99998,
          pointerEvents: "none",
          width: ringSize,
          height: ringSize,
          borderRadius: "50%",
          border: `1.5px solid hsl(var(--orange))`,
          opacity: visible ? ringOpacity : 0,
          transition: "width 0.25s ease, height 0.25s ease, opacity 0.2s ease, border-color 0.2s ease",
          mixBlendMode: "normal",
        }}
        animate={{
          backgroundColor: state === "hover" ? "rgba(240,96,32,0.08)" : "transparent",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 99999,
          pointerEvents: "none",
          width: dotSize,
          height: dotSize,
          borderRadius: "50%",
          background: "hsl(var(--orange))",
          opacity: visible ? 1 : 0,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
        }}
      />
    </>
  );
}
