"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const t = useTranslations("home");

  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  // ─── Data ──────────────────────────────────────────────────────────────────

  const steps = [
    {
      number: t("step1Number"),
      title: t("step1Title"),
      description: t("step1Description"),
    },
    {
      number: t("step2Number"),
      title: t("step2Title"),
      description: t("step2Description"),
    },
    {
      number: t("step3Number"),
      title: t("step3Title"),
      description: t("step3Description"),
    },
  ];

  const valueCards = [
    {
      icon: Wallet,
      title: t("why1Title"),
      body: t("why1Body"),
      tag: t("why1Tag"),
    },
    {
      icon: Inbox,
      title: t("why2Title"),
      body: t("why2Body"),
      tag: t("why2Tag"),
    },
    {
      icon: Scale,
      title: t("why3Title"),
      body: t("why3Body"),
      tag: t("why3Tag"),
    },
    {
      icon: Shield,
      title: t("why4Title"),
      body: t("why4Body"),
      tag: t("why4Tag"),
    },
  ];

  const faqItems = [
    { question: t("faq1Q"), answer: t("faq1A") },
    { question: t("faq2Q"), answer: t("faq2A") },
    { question: t("faq3Q"), answer: t("faq3A") },
    { question: t("faq4Q"), answer: t("faq4A") },
    { question: t("faq5Q"), answer: t("faq5A") },
    { question: t("faq6Q"), answer: t("faq6A") },
    { question: t("faq7Q"), answer: t("faq7A") },
    { question: t("faq8Q"), answer: t("faq8A") },
    { question: t("faq9Q"), answer: t("faq9A") },
  ];

  const ctaBtnClass =
    "inline-flex items-center justify-center bg-pine text-white hover:bg-pine-dark transition-colors duration-200 rounded-btn h-14 px-8 font-body font-semibold text-[17px]";

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
          aria-hidden="true"
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
          aria-hidden="true"
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
              {t("heroTagline")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="font-heading text-[38px] sm:text-[52px] md:text-[72px] leading-[1.05] text-black"
            >
              {t("heroH1Line1")}
              <br />
              <span className="text-pine">{t("heroH1Line2")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="font-body text-xl text-zinc-600 mt-8 max-w-2xl leading-relaxed"
            >
              {t("heroSubtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-10"
            >
              <ModalButton className={ctaBtnClass}>
                {t("heroCta")}
              </ModalButton>

              <a
                href="/#servicios"
                className="flex items-center gap-1.5 mt-4 font-body text-[15px] text-pine hover:text-pine-dark transition-colors duration-200 underline underline-offset-4 w-fit"
              >
                {t("heroHowItWorks")}
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
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs text-pine uppercase tracking-[3px] text-center mb-4"
          >
            {t("problemLabel")}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[28px] md:text-[40px] text-black text-center mb-12"
          >
            {t("problemH2")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: t("problem1Title"), body: t("problem1Body") },
              { title: t("problem2Title"), body: t("problem2Body") },
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
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs text-pine uppercase tracking-[3px] mb-4"
          >
            {t("howLabel")}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[28px] md:text-[40px] text-black"
          >
            {t("howH2")}
          </motion.h2>
        </motion.div>

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
            target="_blank"
            rel="noopener noreferrer"
            className={ctaBtnClass}
          >
            {t("qualify")}
          </a>
        </motion.div>
      </Section>

      {/* ── Section 4: Nuestro Proceso (legal escalation stages) ─────────── */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-pine uppercase tracking-[3px] mb-4">
            {t("processLabel")}
          </p>
          <h2 className="font-heading text-[28px] md:text-[40px] text-black">
            {t("processH2")}
          </h2>
          <p className="font-body text-lg text-zinc-600 mt-4 max-w-2xl mx-auto">
            {t("processSubtitle")}
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
                {t("stage1Badge")}
              </span>
              <h3 className="font-heading text-[28px] text-black">
                {t("stage1Title")}
              </h3>
              <p className="font-body text-base text-zinc-600 mt-3 leading-relaxed">
                {t("stage1Description")}
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
                  <p className="font-body text-sm font-semibold text-black">{t("mockupTitle")}</p>
                  <p className="font-mono text-[11px] text-zinc-400 truncate">{t("mockupSubtitle")}</p>
                </div>
              </div>
              {/* Messages */}
              <div className="px-5 py-5 space-y-4 bg-zinc-50">
                {/* Debtor message */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] bg-white border border-zinc-200 rounded-card px-4 py-3">
                    <p className="font-body text-sm text-zinc-600 leading-relaxed">
                      {t("mockupDebtorMessage")}
                    </p>
                    <p className="font-mono text-[10px] text-zinc-400 mt-2">{t("mockupDebtorSender")}</p>
                  </div>
                </div>
                {/* Webster message */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] bg-pine-light border border-pine/10 rounded-card px-4 py-3">
                    <p className="font-body text-sm text-zinc-700 leading-relaxed">
                      {t("mockupWebsterMessage")}
                    </p>
                    <p className="font-mono text-[10px] text-pine mt-2">Webster</p>
                  </div>
                </div>
              </div>
              {/* Status */}
              <div className="border-t border-zinc-100 px-5 py-3 flex items-center gap-2">
                <Check size={14} className="text-pine" />
                <span className="font-mono text-xs text-pine">{t("mockupStatus")}</span>
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
                {t("stage2Title")}
              </h3>
              <p className="font-body text-base text-zinc-500 mt-2 leading-relaxed">
                {t("stage2Description")}
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
                {t("stage3Title")}
              </h3>
              <p className="font-body text-base text-zinc-500 mt-2 leading-relaxed">
                {t("stage3Description")}
              </p>
            </div>
          </motion.div>

        </div>
      </Section>

      {/* ── Section 5: Value Propositions (2×2 grid) ─────────────────────── */}
      <Section className="bg-snow">
        <p className="font-mono text-xs text-pine uppercase tracking-[3px] text-center mb-4">
          {t("whyLabel")}
        </p>
        <h2 className="font-heading text-[28px] md:text-[40px] text-black text-center mb-16">
          {t("whyH2")}
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
            target="_blank"
            rel="noopener noreferrer"
            className={ctaBtnClass}
          >
            {t("whyCta")}
          </a>
        </motion.div>
      </Section>

      {/* ── Section 6: AI Section ─────────────────────────────────────────── */}
      <section
        className="py-14 md:py-20"
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
                {t("aiPullQuote")}
              </p>
            </div>

            {/* Right — cards (~60%) */}
            <div className="md:col-span-3">
              <p className="font-mono text-xs text-pine uppercase tracking-[3px] mb-6">
                {t("aiLabel")}
              </p>
              <h2 className="font-heading text-[26px] md:text-[32px] text-white leading-snug mb-6">
                {t("aiH2")}
              </h2>
              <div className="space-y-3">
                {[t("aiPoint1"), t("aiPoint2"), t("aiPoint3")].map((text) => (
                  <div
                    key={text}
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
        <p className="font-mono text-xs text-pine uppercase tracking-[3px] text-center mb-4">
          {t("pricingLabel")}
        </p>
        <h2 className="font-heading text-[28px] md:text-[40px] text-black text-center">
          {t("pricingH2")}
        </h2>
        <p className="font-body text-lg text-zinc-600 text-center mt-4">
          {t("pricingSubtitle")}
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {[
            { label: t("pricingStage1Label"), title: t("pricingStage1Title"), percentage: 15, featured: true },
            { label: t("pricingStage2Label"), title: t("pricingStage2Title"), percentage: 25, featured: false },
            { label: t("pricingStage3Label"), title: t("pricingStage3Title"), percentage: 33, featured: false },
          ].map((card) => (
            <motion.div key={card.label} variants={fadeUp}>
              <Card className={`text-center py-10 relative ${card.featured ? "border-pine bg-pine-light/30" : ""}`}>
                {card.featured && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center bg-pine text-white font-mono text-[11px] uppercase tracking-[2px] px-4 py-1 rounded-full">
                    {t("pricingBadge")}
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
                  {t("pricingRecovered")}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <p className="font-body text-[15px] text-zinc-600">
            {t("pricingDisclaimer")}
          </p>
          <div className="mt-8">
            <a
              href="https://form.jotform.com/260526971985067"
              target="_blank"
              rel="noopener noreferrer"
              className={ctaBtnClass}
            >
              {t("pricingCta")}
            </a>
          </div>
        </div>
      </Section>

      {/* ── Section 8: FAQ ────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <p className="font-mono text-xs text-pine uppercase tracking-[3px] text-center mb-4">
          {t("faqLabel")}
        </p>
        <h2 className="font-heading text-[28px] md:text-[40px] text-black text-center mb-12">
          {t("faqH2")}
        </h2>
        <Accordion items={faqItems} />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mt-12"
        >
          <a
            href="https://form.jotform.com/260526971985067"
            target="_blank"
            rel="noopener noreferrer"
            className={ctaBtnClass}
          >
            {t("faqCta")}
          </a>
        </motion.div>
      </Section>

      {/* ── Section 9: Final CTA ──────────────────────────────────────────── */}
      <section
        id="contacto"
        className="py-14 md:py-24"
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
            {t("ctaH2")}
          </h2>
          <p className="font-body text-lg text-white/70 mt-4">
            {t("ctaSubtitle")}
          </p>
          <div className="mt-8">
            <ModalButton className="inline-flex items-center justify-center bg-white text-pine hover:bg-zinc-100 transition-colors duration-200 rounded-btn h-14 px-8 font-body text-[17px] font-semibold">
              {t("ctaButton")}
            </ModalButton>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
