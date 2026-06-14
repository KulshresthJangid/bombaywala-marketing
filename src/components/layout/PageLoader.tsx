import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PageLoader() {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "gone">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 700);
    const t2 = setTimeout(() => setPhase("out"),  1600);
    const t3 = setTimeout(() => setPhase("gone"), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "gone" && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "out" ? 0 : 1 }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ position: "fixed", inset: 0, background: "hsl(var(--background))", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
            <motion.img
              src="/bombaywala-logo.png"
              alt="Bombaywala Marketing"
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.65, ease: EASE }}
              style={{ width: "96px", height: "96px", objectFit: "contain" }}
            />
            <div style={{ display: "flex", gap: "0.1em", overflow: "hidden" }}>
              {"BOMBAYWALA".split("").map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.04, ease: EASE }}
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.26em", color: "hsl(var(--muted-foreground))", textTransform: "uppercase" }}
                >
                  {l}
                </motion.span>
              ))}
            </div>
          </div>

          <div style={{ width: "100px", height: "1px", background: "rgba(255,248,235,0.1)", position: "relative", overflow: "hidden" }}>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.15 }}
              style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg, hsl(var(--orange-dark)), hsl(var(--orange)), var(--gold))` }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: EASE }}
            style={{ fontFamily: "var(--font-script)", fontSize: "0.9rem", color: "hsl(var(--muted-foreground))" }}
          >
            We Drive Results.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
