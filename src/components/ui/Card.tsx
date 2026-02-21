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
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className={`bg-white border border-zinc-200 rounded-card p-8 ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
