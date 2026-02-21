"use client";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      variants={prefersReducedMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } } : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`py-24 md:py-16 ${className ?? ""}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">{children}</div>
    </motion.section>
  );
}
