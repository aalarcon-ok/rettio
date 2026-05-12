"use client";
import * as React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span style={{ position: "relative", marginRight: "0.4rem", display: "inline-block" }}>
      <span style={{ position: "absolute", opacity: 0.15, color: "#FAF8F5" }}>{children}</span>
      <motion.span style={{ opacity, color: "#FAF8F5" }}>{children}</motion.span>
    </span>
  );
};

interface MagicTextProps {
  text: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: number;
  maxWidth?: string;
}

export const MagicText: React.FC<MagicTextProps> = ({
  text,
  fontSize = "clamp(18px, 2vw, 24px)",
  fontFamily = "'Poppins', sans-serif",
  fontWeight = 400,
  lineHeight = 1.6,
  maxWidth = "640px",
}) => {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.85", "start 0.3"],
  });
  const words = text.split(" ");

  return (
    <p
      ref={container}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        textAlign: "center",
        fontSize,
        fontFamily,
        fontWeight,
        lineHeight,
        maxWidth,
        margin: "0 auto",
      }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};
