"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <motion.div variants={fadeUp}>
      <span className="font-mono text-[64px] text-pine font-light leading-none">
        {number}
      </span>
      <h3 className="font-heading text-[22px] text-black mt-4">{title}</h3>
      <p className="font-body text-base text-zinc-600 leading-relaxed mt-3">
        {description}
      </p>
    </motion.div>
  );
}
