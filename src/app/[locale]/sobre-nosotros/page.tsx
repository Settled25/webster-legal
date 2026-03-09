"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeUp, fadeIn, slideFromLeft } from "@/lib/animations";
import { ModalButton } from "@/components/ui/ModalButton";

export default function SobreNosotrosPage() {
  const t = useTranslations("sobreNosotros");

  return (
    <main>
      {/* Section 1: Page Header */}
      <section className="bg-white pt-[120px] pb-8 md:pt-[100px]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="max-w-[1200px] mx-auto px-6 text-center"
        >
          <h1 className="font-heading text-[48px] text-black">
            {t("h1")}
          </h1>
          <p className="font-body text-lg text-zinc-600 text-center max-w-2xl mx-auto mt-4">
            {t("intro")}
          </p>
        </motion.div>
      </section>

      {/* Section 2: Attorney Biography */}
      <section className="bg-white py-24 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
          >
            <div className="rounded-card overflow-hidden w-full max-w-[400px] mx-auto md:mx-0">
              <Image
                src="/foto-profesional.jpg"
                alt="Adrián Jiménez, Abogado Fundador de Webster"
                width={412}
                height={467}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="font-heading text-[32px] text-black">
              {t("founderName")}
            </h2>
            <p className="font-body font-medium text-base text-pine mt-1">
              {t("founderTitle")}
            </p>
            <p className="font-body text-base text-zinc-600 mt-6 leading-relaxed">
              {t("founderBio")}
            </p>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Section 3: CTA */}
      <section className="bg-[#09090B] py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <h2 className="font-heading text-[36px] text-white">
            {t("ctaH2")}
          </h2>
          <p className="font-body text-lg text-white/70 mt-4">
            {t("ctaSubtitle")}
          </p>
          <div className="mt-8">
            <ModalButton className="inline-flex items-center justify-center bg-pine text-white hover:bg-pine-dark transition-colors duration-200 rounded-btn h-[52px] px-8 font-body text-[17px] font-semibold">
              {t("ctaButton")}
            </ModalButton>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
