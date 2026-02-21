"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

const signals = [
  "Redactado por abogados licenciados",
  "Respaldado por inteligencia artificial",
  "Sin costo si no cobramos",
];

export function TrustBar() {
  return (
    <div className="bg-[#09090B] h-14 flex items-center justify-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-3 px-6"
      >
        {signals.map((text, i) => (
          <motion.span
            key={i}
            variants={fadeIn}
            className="font-body text-sm text-white text-center"
          >
            {i > 0 && <span className="text-zinc-600 mr-3">&middot;</span>}
            {text}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
