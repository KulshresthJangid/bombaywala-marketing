"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopLoader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const prevPathRef = useRef(pathname);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (prevPathRef.current === pathname) return;
    prevPathRef.current = pathname;

    // Clear any ongoing animation
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);

    setProgress(0);
    setVisible(true);

    let p = 0;
    intervalRef.current = setInterval(() => {
      // Ease-out-style increments: fast at first, slows toward 85%
      const remaining = 85 - p;
      const increment = Math.max(2, remaining * 0.18 + Math.random() * 6);
      p = Math.min(85, p + increment);
      setProgress(p);
      if (p >= 85) clearInterval(intervalRef.current!);
    }, 100);

    timerRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setProgress(100);
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 350);
    }, 700);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="top-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "3px",
            width: `${progress}%`,
            background: "linear-gradient(90deg, var(--color-orange-dark), var(--color-orange), var(--color-orange-light))",
            zIndex: 9999,
            pointerEvents: "none",
            transition: "width 0.1s linear",
            boxShadow: "0 0 8px rgba(255, 85, 0, 0.6)",
          }}
        />
      )}
    </AnimatePresence>
  );
}
