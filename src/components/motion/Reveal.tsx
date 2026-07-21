"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section";
  id?: string;
}

const OFFSET = 28;

function hiddenState(direction: Direction) {
  switch (direction) {
    case "down":
      return { opacity: 0, y: -OFFSET };
    case "left":
      return { opacity: 0, x: OFFSET };
    case "right":
      return { opacity: 0, x: -OFFSET };
    case "scale":
      return { opacity: 0, scale: 0.94 };
    case "up":
    default:
      return { opacity: 0, y: OFFSET };
  }
}

const visibleState = { opacity: 1, x: 0, y: 0, scale: 1 };

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  as = "div",
  id,
}: RevealProps) {
  const variants: Variants = {
    hidden: hiddenState(direction),
    visible: visibleState,
  };

  const MotionTag = as === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
