"use client";
import { motion } from "framer-motion";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
      whileHover={{
        y: -5,
        boxShadow: "0 12px 36px rgba(45,94,74,0.10), 0 3px 10px rgba(0,0,0,0.07)",
        borderColor: "rgba(45,94,74,0.22)",
        transition: { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] },
      }}
      className={`bg-white border border-zinc-200 rounded-card p-8 ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
