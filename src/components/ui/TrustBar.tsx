"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { staggerContainer, fadeIn } from "@/lib/animations";

export function TrustBar() {
  const t = useTranslations("trustBar");
  const signals = [t("signal1"), t("signal2"), t("signal3")];

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
