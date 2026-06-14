import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

export function FadeInUp({ children, delay = 0, duration = 0.8, className, style }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration, delay, ease: EASE }} className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, duration = 0.8, className, style }: Props) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration, delay, ease: EASE }} className={className} style={style}>
      {children}
    </motion.div>
  );
}
