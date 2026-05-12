"use client";
import { motion } from "framer-motion";

interface AnimatedUnderlineProps {
  children: React.ReactNode;
  color?: string;
}

export function AnimatedUnderline({ children, color = "#C9A84C" }: AnimatedUnderlineProps) {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span>{children}</span>
      <motion.svg
        viewBox="0 0 300 12"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          left: 0,
          bottom: "-6px",
          width: "100%",
          height: "10px",
          overflow: "visible",
        }}
      >
        <motion.path
          d="M 2,8 Q 75,2 150,6 Q 225,10 298,4"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
        />
      </motion.svg>
    </span>
  );
}
