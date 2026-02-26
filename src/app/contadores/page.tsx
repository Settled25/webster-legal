"use client";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { StepCard } from "@/components/ui/StepCard";
import { ModalButton } from "@/components/ui/ModalButton";
import { fadeUp, staggerContainer, drawLine } from "@/lib/animations";

// ─── Data ────────────────────────────────────────────────────────────────────

const bullets = [
  {
    bold: "Una carta de abogado cambia la conversación.",
    rest: " Los deudores cooperan con los abogados porque quieren evitar problemas legales mayores.",
  },
  {
    bold: "Webster protege a tu cliente.",
    rest: " Webster vela por los intereses de tu cliente al tener deberes éticos más altos que una agencia de cobros.",
  },
  {
    bold: "Webster tiene varias herramientas a su disposición.",
    rest: " Webster puede utilizar el proceso judicial si el deudor se rehúsa a pagar.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tu cliente nos contacta.",
    description:
      "Dile que llame o llene el formulario en webster.legal. Nosotros nos encargamos del resto.",
  },
  {
    number: "02",
    title: "Evaluamos el caso con rapidez.",
    description:
      "Respuesta clara: qué podemos hacer, cuál es la estrategia, cuándo esperar resultados.",
  },
  {
    number: "03",
    title: "Recuperamos.",
    description:
      "La mayoría de los casos se resuelven antes de llegar a los tribunales con ambas partes contentas.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContadoresPage() {
  return (
    <main>

      {/* ── Section 1: Hero ───────────────────────────────────────────────── */}
      <section className="bg-white pt-[72px] relative overflow-hidden">
        {/* Dot grid — desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            backgroundImage: "radial-gradient(circle, #2D5E4A 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 25%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.03) 60%, transparent 72%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 25%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.03) 60%, transparent 72%)",
          }}
        />

        {/* Dot grid — mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.4 }}
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            backgroundImage: "radial-gradient(circle, #2D5E4A 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 40%, transparent 70%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 w-full py-24 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-mono text-xs text-pine uppercase tracking-[3px] mb-8"
            >
              Para Contadores · Webster Legal
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="font-heading text-[38px] sm:text-[52px] md:text-[64px] leading-[1.05] text-black"
            >
              Tú detectas el problema.{" "}
              <span className="text-pine">Webster lo resuelve.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="font-body text-xl text-zinc-600 mt-8 max-w-2xl leading-relaxed"
            >
              Cuando las cuentas por cobrar de un cliente llevan meses sin moverse,
              recomiéndanos. Webster recupera facturas B2B impagas con respaldo legal real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-10"
            >
              <ModalButton className="inline-flex items-center justify-center bg-pine text-white hover:bg-pine-dark transition-colors duration-200 rounded-btn h-14 px-8 font-body font-semibold text-[17px]">
                Envía a tu cliente aquí →
              </ModalButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Por qué Webster y no una agencia de cobros ─────────── */}
      <Section className="bg-snow">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[28px] md:text-[40px] text-black mb-12"
          >
            No es lo mismo una agencia de cobros que una firma de abogados.
          </motion.h2>

          <div className="space-y-6">
            {bullets.map((bullet, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex gap-4 items-start"
              >
                <span className="mt-[6px] flex-shrink-0 w-5 h-5 rounded-full bg-pine-light flex items-center justify-center">
                  <span className="text-pine text-[11px] font-bold">✓</span>
                </span>
                <p className="font-body text-lg text-zinc-700 leading-relaxed">
                  <strong className="font-semibold text-black">{bullet.bold}</strong>
                  {bullet.rest}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ── Section 3: Cómo funciona ──────────────────────────────────────── */}
      <Section className="bg-white">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="font-heading text-[28px] md:text-[40px] text-black text-center mb-16"
        >
          Sencillo para ti. Sencillo para tu cliente.
        </motion.h2>

        {/* Desktop */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="hidden md:grid grid-cols-3 gap-8 relative"
        >
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <StepCard {...step} />
              {i < steps.length - 1 && (
                <svg
                  className="absolute top-8 -right-4 w-8 h-px overflow-visible"
                  viewBox="0 0 32 1"
                >
                  <motion.line
                    x1="0" y1="0.5" x2="32" y2="0.5"
                    stroke="#D4D4D8"
                    strokeWidth="1"
                    variants={drawLine}
                  />
                </svg>
              )}
            </div>
          ))}
        </motion.div>

        {/* Mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="md:hidden relative pl-8"
        >
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute left-0 top-0 bottom-0 w-px bg-zinc-300 origin-top"
          />
          <div className="space-y-12">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ── Section 4: Final CTA ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#09090B]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <h2 className="font-heading text-[28px] md:text-[40px] text-white leading-snug">
            La próxima vez que un cliente te mencione o identifiques una factura impaga,
            ya sabes a quién recomendarle.
          </h2>
          <div className="mt-10">
            <ModalButton className="inline-flex items-center justify-center bg-white text-pine hover:bg-zinc-100 transition-colors duration-200 rounded-btn h-14 px-8 font-body font-semibold text-[17px]">
              Envía a tu cliente aquí →
            </ModalButton>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
