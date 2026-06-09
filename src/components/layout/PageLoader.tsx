"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PageLoader() {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "gone">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 700);
    const t2 = setTimeout(() => setPhase("out"), 1600);
    const t3 = setTimeout(() => setPhase("gone"), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <AnimatePresence>
      {(phase === "in" || phase === "hold" || phase === "out") && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "out" ? 0 : 1 }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{
            position: "fixed", inset: 0,
            background: "var(--color-bg)",
            zIndex: 9998,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {/* Signature mark */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.65, ease: EASE }}
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "5rem",
                fontWeight: 700,
                color: "var(--color-orange)",
                lineHeight: 1,
                letterSpacing: "-0.01em",
              }}
            >
              bw
            </motion.div>

            {/* BOMBAYWALA — letters stagger in */}
            <div style={{ display: "flex", gap: "0.1em", overflow: "hidden" }}>
              {"BOMBAYWALA".split("").map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.04, ease: EASE }}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.26em",
                    color: "var(--color-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  {l}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div
            style={{
              width: "100px", height: "1px",
              background: "var(--color-border-light)",
              position: "relative", overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.15 }}
              style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(90deg, var(--color-orange-dark), var(--color-orange), var(--color-gold))",
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: EASE }}
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "0.9rem",
              fontWeight: 400,
              color: "var(--color-muted)",
              letterSpacing: "0.04em",
            }}
          >
            We Drive Results.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
