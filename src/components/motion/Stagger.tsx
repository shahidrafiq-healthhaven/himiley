"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  // SSR / pre-hydration: visible. Enable stagger only after mount.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <motion.div
      className={className}
      variants={groupVariants}
      initial={ready ? "hidden" : false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.05, margin: "0px 0px 0px 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
