"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const letters = "BOMBAYWALA".split("");

export default function PageLoader() {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "gone">("in");

  useEffect(() => {
    // Phase timeline: in → hold → out → gone
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("out"), 1400);
    const t3 = setTimeout(() => setPhase("gone"), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {(phase === "in" || phase === "hold" || phase === "out") && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "out" ? 0 : 1 }}
          transition={{ duration: 0.45, ease: EASE }}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--color-bg)",
            zIndex: 9998,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {/* ── Brand mark ── */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            {/* "bw" logotype */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "3.5rem",
                fontWeight: 900,
                color: "var(--color-orange)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              bw
            </motion.div>

            {/* "BOMBAYWALA" — letters stagger in */}
            <div style={{ display: "flex", gap: "0.05em", overflow: "hidden" }}>
              {letters.map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.04, ease: EASE }}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: "var(--color-text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  {l}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ── Progress bar ── */}
          <div
            style={{
              width: "120px",
              height: "2px",
              background: "var(--color-border-light)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(90deg, var(--color-orange-dark), var(--color-orange), var(--color-orange-light))",
              }}
            />
          </div>

          {/* ── Tagline ── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
            }}
          >
            We Drive Results.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
