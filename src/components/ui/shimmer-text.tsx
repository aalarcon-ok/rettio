"use client";
import { motion } from "framer-motion";

interface ShimmerTextProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  style?: React.CSSProperties;
}

export function ShimmerText({ children, duration = 2, delay = 1, style }: ShimmerTextProps) {
  return (
    <motion.span
      style={{
        display: "inline-block",
        background: "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 35%, #197EA8 50%, #FFFFFF 65%, #FFFFFF 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
        ...style,
      }}
      initial={{ backgroundPositionX: "200%" }}
      animate={{ backgroundPositionX: ["-100%", "200%"] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}
