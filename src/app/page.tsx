"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Scale,
  Wallet,
  Inbox,
  Mail,
  Check,
  ChevronDown,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { StepCard } from "@/components/ui/StepCard";
import { fadeUp, staggerContainer, fadeIn, drawLine } from "@/lib/animations";
import { ModalButton } from "@/components/ui/ModalButton";
import { Accordion } from "@/components/ui/Accordion";

// ─── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Cuéntanos tu caso",
    description:
      "Coordinamos una breve consulta para evaluar tu caso y definir la estrategia de cobro.",
  },
  {
    number: "02",
    title: "Envía tus documentos",
    description:
      "Envíanos por email, WhatsApp o mensaje de texto tus facturas, contratos y cualquier evidencia relacionada a la deuda.",
  },
  {
    number: "03",
    title: "Actuamos por ti",
    description:
      "Webster se encarga del resto. Te consultamos sobre las ofertas del deudor y te preguntamos antes de escalar el proceso.",
  },
];

const valueCards = [
  {
    icon: Wallet,
    title: "Recupera tu dinero",
    body: "Bríndale aire a tu negocio recuperando todo el dinero que tiene regado entre clientes.",
    tag: "Dinero para operar",
  },
  {
    icon: Inbox,
    title: "Enfócate en tu negocio",
    body: "Para de perseguir a tus clientes para que te paguen.",
    tag: "No pierdas el tiempo",
  },
  {
    icon: Scale,
    title: "Demuestra profesionalismo",
    body: "Impresiona a tus clientes demostrando que tu compañía tiene los mejores recursos para operar.",
    tag: "Luce profesional",
  },
  {
    icon: Shield,
    title: "Protegemos tu reputación",
    body: "Tus clientes estarán contentos de pagarte. Sorprende con un abogado firme, pero respetuoso, que hace fácil pagar.",
    tag: "Protección de marca",
  },
];

const faqItems = [
  {
    question: "¿Webster es una agencia de cobro?",
    answer: "No. Webster es una firma de abogados, no una agencia de cobro. Velamos por la preservación de tu relación comercial durante el proceso antes de tomar alguna acción legal seria.",
  },
  {
    question: "¿Cuál es la deuda mínima para trabajar con Webster?",
    answer: "Webster trabaja con deudas comerciales de $1,000 a $15,000. Si tu deuda no está dentro de este rango, te lo haremos saber en la consulta gratuita y te orientaremos sobre tus opciones.",
  },
  {
    question: "¿Cómo funciona el modelo de honorarios?",
    answer: "Webster trabaja con honorarios de contingencia. Solo cobramos un porcentaje de lo que recuperamos para ti. Si no recuperamos nada, no debes nada.",
  },
  {
    question: "¿Cuánto tiempo toma el proceso de cobro?",
    answer: "Depende de la complejidad del caso y la respuesta del deudor. Muchas gestiones de prelitigio se resuelven en las primeras dos a cuatro semanas. Los casos que requieren litigio pueden tomar varios meses.",
  },
  {
    question: "¿Qué documentos necesito para comenzar?",
    answer: "Generalmente necesitamos: la factura o contrato original, evidencia de la deuda (correos electrónicos, órdenes de compra, recibos de entrega), y cualquier comunicación previa con el deudor. En la consulta inicial te indicamos exactamente qué aplica a tu caso.",
  },
  {
    question: "¿Puedo enviar más de una factura?",
    answer: "Sí. Muchos negocios tienen varias cuentas por cobrar pendientes. Evaluamos cada una y te damos una estrategia completa.",
  },
  {
    question: "¿El deudor sabrá que contraté a Webster?",
    answer: "Sí. Nos comunicamos directamente con el deudor en tu representación. Toda comunicación es profesional, clara y respaldada por un abogado.",
  },
  {
    question: "¿Webster maneja cobros fuera de Puerto Rico?",
    answer: "Actualmente nos enfocamos en deudas comerciales bajo las leyes de Puerto Rico. Si tienes una deuda con nexo a otra jurisdicción, podemos evaluarlo en la consulta gratuita.",
  },
  {
    question: "¿Qué pasa si el deudor no tiene dinero para pagar?",
    answer: "En la consulta inicial evaluamos la viabilidad del cobro. Si determinamos que el deudor no tiene capacidad de pago o que la recuperación es improbable, te lo comunicamos con transparencia antes de proceder. No tomamos casos que no tienen probabilidades razonables de éxito.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>

      {/* ── Section 1: Hero ───────────────────────────────────────────────── */}
      <section className="bg-white min-h-[90vh] flex flex-col justify-center pt-[72px] relative overflow-hidden">
        {/* Dot grid — desktop: fades from right to left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            backgroundImage: "radial-gradient(circle, #2D5E4A 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 25%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.03) 60%, transparent 72%)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 25%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.03) 60%, transparent 72%)",
          }}
        />

        {/* Dot grid — mobile: simplified, lower opacity, fades from bottom-right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.4 }}
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            backgroundImage: "radial-gradient(circle, #2D5E4A 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 40%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 40%, transparent 70%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 w-full py-24 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-mono text-xs text-pine uppercase tracking-[3px] mb-8"
            >
              Firma de Abogados · Puerto Rico
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="font-heading text-[38px] sm:text-[52px] md:text-[72px] leading-[1.05] text-black"
            >
              Cobra lo que te deben.
              <br />
              <span className="text-pine">Protege tu flujo de dinero y reputación.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="font-body text-xl text-zinc-600 mt-8 max-w-2xl leading-relaxed"
            >
              Recuperamos tus cuentas por cobrar comerciales de hasta $15K. Solo cobramos si tú cobras.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-10"
            >
              <ModalButton className="inline-flex items-center justify-center bg-pine text-white hover:bg-pine-dark transition-colors duration-200 rounded-btn h-14 px-8 font-body font-semibold text-[17px]">
                Consulta gratis →
              </ModalButton>
              <a
                href="/#servicios"
                className="inline-flex items-center gap-1.5 mt-4 font-body text-[15px] text-pine hover:text-pine-dark transition-colors duration-200 underline underline-offset-4"
              >
                Ver cómo funciona
                <ChevronDown size={15} className="flex-shrink-0" aria-hidden />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Problem Statement ──────────────────────────────────── */}
      <Section className="bg-snow">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[28px] md:text-[40px] text-black text-center mb-12"
          >
            Las deudas pequeñas se quedan sin cobrar.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Tu flujo de efectivo absorbe el golpe",
                body: "Completaste un trabajo de $5,000 como subcontratista. El contratista te promete pagar, pero luego te ignora. Esos $5,000 los necesitas para materiales, nómina y tu próximo proyecto.",
              },
              {
                title: "Cobrar por tu cuenta te debilita",
                body: "Llevas meses persiguiendo a tu cliente con la factura de tus servicios de contabilidad. Cada intento ignorado te quita tiempo de servir a clientes que sí pagan a tiempo.",
              },
            ].map((card) => (
              <motion.div key={card.title} variants={fadeUp}>
                <Card className="h-full flex flex-col border-zinc-200">
                  <h3 className="font-heading text-[22px] text-black">
                    {card.title}
                  </h3>
                  <p className="font-body text-base text-zinc-600 mt-3 leading-relaxed">
                    {card.body}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ── Section 3: Cómo funciona (client intake steps) ───────────────── */}
      <Section className="bg-snow" id="servicios">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="font-heading text-[28px] md:text-[40px] text-black text-center mb-16"
        >
          Cómo funciona
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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mt-16"
        >
          <a
            href="https://form.jotform.com/260526971985067"
            className="inline-flex items-center justify-center bg-pine text-white hover:bg-pine-dark transition-colors duration-200 rounded-btn h-14 px-8 font-body font-semibold text-[17px]"
          >
            ¿Califico? →
          </a>
        </motion.div>
      </Section>

      {/* ── Section 4: Nuestro Proceso (legal escalation stages) ─────────── */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[28px] md:text-[40px] text-black">
            Un proceso diseñado para resolver tu caso.
          </h2>
          <p className="font-body text-lg text-zinc-600 mt-4 max-w-2xl mx-auto">
            Solo escalamos cuando es necesario y tú lo apruebas.
          </p>
        </div>

        <div className="flex flex-col items-center max-w-3xl mx-auto">

          {/* ── Stage 1 — Dominant ──────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center w-full"
          >
            {/* Circle */}
            <div className="w-[40px] h-[40px] rounded-full bg-pine text-white flex items-center justify-center font-mono text-sm font-bold z-10">
              1
            </div>
            <div className="w-px h-6 bg-zinc-200" />

            {/* Content */}
            <div className="text-center max-w-xl">
              <span className="inline-flex items-center gap-1.5 bg-pine-light text-pine font-mono text-[11px] uppercase tracking-[2px] px-3 py-1 rounded-full mb-4">
                Mayoría de casos
              </span>
              <h3 className="font-heading text-[28px] text-black">
                Reclamación formal
              </h3>
              <p className="font-body text-base text-zinc-600 mt-3 leading-relaxed">
                Evaluamos tu situación y decidimos juntos el mejor enfoque, desde un recordatorio amistoso hasta una carta formal de reclamación. Negociamos directamente con el deudor y te mantenemos informado. La mayoría de los casos se resuelven aquí.
              </p>
            </div>

            {/* Communication Mockup */}
            <div className="w-full max-w-lg mt-8 border border-zinc-200 rounded-card bg-white shadow-sm overflow-hidden">
              {/* Header */}
              <div className="border-b border-zinc-100 px-5 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-pine-light flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-pine" />
                </div>
                <div className="min-w-0">
                  <p className="font-body text-sm font-semibold text-black">Comunicación con Acme Corp.</p>
                  <p className="font-mono text-[11px] text-zinc-400 truncate">Factura #1247 · $8,400 pendiente desde octubre</p>
                </div>
              </div>
              {/* Messages */}
              <div className="px-5 py-5 space-y-4 bg-zinc-50">
                {/* Debtor message */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] bg-white border border-zinc-200 rounded-card px-4 py-3">
                    <p className="font-body text-sm text-zinc-600 leading-relaxed">
                      Saludos, recibimos su comunicación. No vamos a pagar. Los productos llegaron defectuosos.
                    </p>
                    <p className="font-mono text-[10px] text-zinc-400 mt-2">Acme Corp.</p>
                  </div>
                </div>
                {/* Webster message */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] bg-pine-light border border-pine/10 rounded-card px-4 py-3">
                    <p className="font-body text-sm text-zinc-700 leading-relaxed">
                      Gracias por responder nuestro correo. Revisamos la documentación de esta transacción. Adjuntamos un acuse de recibo firmado por su personal confirmando que los productos se recibieron en buen estado. ¿Tiene alguna prueba que nos pueda enviar que establezca que los productos llegaron defectuosos?
                    </p>
                    <p className="font-mono text-[10px] text-pine mt-2">Webster</p>
                  </div>
                </div>
              </div>
              {/* Status */}
              <div className="border-t border-zinc-100 px-5 py-3 flex items-center gap-2">
                <Check size={14} className="text-pine" />
                <span className="font-mono text-xs text-pine">Pago procesado</span>
              </div>
            </div>
          </motion.div>

          {/* Connecting line */}
          <div className="w-px h-10 bg-zinc-200" />

          {/* ── Stage 2 ────────────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center w-full"
          >
            <div className="w-[40px] h-[40px] rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center font-mono text-sm font-bold z-10 border border-zinc-200">
              2
            </div>
            <div className="w-px h-6 bg-zinc-200" />
            <div className="text-center max-w-xl">
              <h3 className="font-heading text-[22px] text-black">
                Acción legal
              </h3>
              <p className="font-body text-base text-zinc-500 mt-2 leading-relaxed">
                Si la gestión directa no es suficiente, presentamos una acción sumaria de cobro ante el tribunal para obtener sentencia a tu favor.
              </p>
            </div>
          </motion.div>

          {/* Connecting line */}
          <div className="w-px h-10 bg-zinc-200 mt-6" />

          {/* ── Stage 3 ────────────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center w-full"
          >
            <div className="w-[40px] h-[40px] rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center font-mono text-sm font-bold z-10 border border-zinc-200">
              3
            </div>
            <div className="w-px h-6 bg-zinc-200" />
            <div className="text-center max-w-xl">
              <h3 className="font-heading text-[22px] text-black">
                Ejecución
              </h3>
              <p className="font-body text-base text-zinc-500 mt-2 leading-relaxed">
                De ser necesario, evaluamos y ejecutamos procedimientos de embargo u otros mecanismos legales para hacer efectiva la sentencia obtenida.
              </p>
            </div>
          </motion.div>

        </div>
      </Section>

      {/* ── Section 5: Value Propositions (2×2 grid) ─────────────────────── */}
      <Section className="bg-snow">
        <h2 className="font-heading text-[28px] md:text-[40px] text-black text-center mb-16">
          ¿Por qué Webster?
        </h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {valueCards.map((card) => (
            <motion.div key={card.title} variants={fadeUp} className="h-full">
              <Card className="h-full flex flex-col">
                <card.icon size={24} className="text-pine" />
                <h3 className="font-heading text-[20px] text-black mt-4">
                  {card.title}
                </h3>
                <p className="font-body text-base text-zinc-600 mt-3 leading-relaxed flex-1">
                  {card.body}
                </p>
                <div className="mt-5 pt-4 border-t border-zinc-100">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-pine uppercase tracking-[1.5px]">
                    <span className="text-pine">✓</span> {card.tag}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mt-16"
        >
          <a
            href="https://form.jotform.com/260526971985067"
            className="inline-flex items-center justify-center bg-pine text-white hover:bg-pine-dark transition-colors duration-200 rounded-btn h-14 px-8 font-body font-semibold text-[17px]"
          >
            Empieza a cobrar →
          </a>
        </motion.div>
      </Section>

      {/* ── Section 6: AI Section ─────────────────────────────────────────── */}
      <section
        className="py-24 md:py-16"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, #17171a 0%, #09090B 55%, #040406 100%)",
        }}
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-[1200px] mx-auto px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
            {/* Left — pull quote (~40%) */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-12 h-px bg-pine mb-8 origin-left"
              />
              <p className="font-heading text-[26px] md:text-[32px] text-white leading-tight">
                La solidez de una firma. La velocidad de la tecnología.
              </p>
            </div>

            {/* Right — cards (~60%) */}
            <div className="md:col-span-3">
              <p className="font-mono text-xs text-pine uppercase tracking-[3px] mb-6">
                Inteligencia Artificial
              </p>
              <h2 className="font-heading text-[26px] md:text-[32px] text-white leading-snug mb-6">
                Procesos automatizados. Criterio humano.
              </h2>
              <div className="space-y-3">
                {[
                  "Utilizamos IA para redactar documentos legales, analizar tu documentación y coordinar cada etapa del proceso de cobro.",
                  "La IA garantiza consistencia y precisión en cada gestión, eliminando los errores que encarecen y retrasan el proceso tradicional.",
                  "Cada documento es revisado y firmado por un abogado antes de enviarse.",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="rounded-card px-5 py-4 font-body text-base text-zinc-300 leading-relaxed"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Section 7: Pricing ────────────────────────────────────────────── */}
      <Section className="bg-snow" id="precios">
        <h2 className="font-heading text-[28px] md:text-[40px] text-black text-center">
          Precios transparentes.
        </h2>
        <p className="font-body text-lg text-zinc-600 text-center mt-4">
          Solo cobramos si tú cobras.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {[
            { label: "Etapa 1", title: "Reclamación formal", percentage: 15, featured: true },
            { label: "Etapa 2", title: "Acción legal", percentage: 25, featured: false },
            { label: "Etapa 3", title: "Ejecución", percentage: 33, featured: false },
          ].map((card) => (
            <motion.div key={card.label} variants={fadeUp}>
              <Card className={`text-center py-10 relative ${card.featured ? "border-pine bg-pine-light/30" : ""}`}>
                {card.featured && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center bg-pine text-white font-mono text-[11px] uppercase tracking-[2px] px-4 py-1 rounded-full">
                    Mayoría de casos
                  </span>
                )}
                <p className="font-mono text-xs text-pine uppercase tracking-[2px]">
                  {card.label}
                </p>
                <h3 className="font-heading text-[20px] text-black mt-2">
                  {card.title}
                </h3>
                <p className="font-heading text-[56px] text-pine mt-4 leading-none">
                  {card.percentage}%
                </p>
                <p className="font-body text-sm text-zinc-500 mt-2">
                  de la cantidad recuperada
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <p className="font-body text-[15px] text-zinc-600">
            Webster trabaja con deudas comerciales de $1,000 a $15,000.
          </p>
        </div>
      </Section>

      {/* ── Section 8: FAQ ────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <h2 className="font-heading text-[28px] md:text-[40px] text-black text-center mb-12">
          Preguntas frecuentes
        </h2>
        <Accordion items={faqItems} />
      </Section>

      {/* ── Section 9: Final CTA ──────────────────────────────────────────── */}
      <section
        id="contacto"
        className="py-24"
        style={{
          background: "radial-gradient(ellipse at 50% 35%, #3d7560 0%, #2D5E4A 50%, #1c3e30 100%)",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <h2 className="font-heading text-[28px] md:text-[40px] text-white">
            Deja de perseguir. Empieza a cobrar.
          </h2>
          <p className="font-body text-lg text-white/70 mt-4">
            Consulta gratuita con un abogado.
          </p>
          <div className="mt-8">
            <ModalButton className="inline-flex items-center justify-center bg-white text-pine hover:bg-zinc-100 transition-colors duration-200 rounded-btn h-14 px-8 font-body text-[17px] font-semibold">
              Habla con un abogado →
            </ModalButton>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
