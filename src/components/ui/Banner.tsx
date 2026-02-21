"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface BannerProps {
  children: React.ReactNode;
}

export function Banner({ children }: BannerProps) {
  return (
    <div className="bg-[#09090B] py-16">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-12 h-px bg-pine mx-auto mb-8 origin-center"
        />
        {children}
      </motion.div>
    </div>
  );
}
