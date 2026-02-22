"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";

const JOTFORM_URL = "https://form.jotform.com/260526971985067";

const contactInfo = [
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "info@webster.legal",
    href: "mailto:info@webster.legal",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "(939) 353-0566",
    href: "tel:+19393530566",
  },
  {
    icon: Clock,
    label: "Horario de atención",
    value: "9:00 AM – 6:00 PM AST\nLunes – Viernes",
    href: null,
  },
];

export default function ContactoPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#09090B] pt-[120px] pb-20 md:pt-[100px]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="max-w-[1200px] mx-auto px-6"
        >
          <p className="font-mono text-xs text-pine uppercase tracking-[3px] mb-6">
            Webster — Puerto Rico
          </p>
          <h1 className="font-heading text-[56px] md:text-[40px] text-white leading-tight">
            Contáctanos
          </h1>
          <p className="font-body text-lg text-zinc-400 mt-4 max-w-xl">
            ¿Tienes cuentas por cobrar? Agenda una consulta gratuita con un
            abogado.
          </p>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — contact info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={fadeUp}>
                <h2 className="font-heading text-[28px] text-black">
                  Información de contacto
                </h2>
                <p className="font-body text-base text-zinc-600 mt-2 leading-relaxed">
                  Escríbenos o llámanos. Te responderemos lo antes posible.
                </p>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    className="flex gap-5 items-start"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-card bg-pine-light flex items-center justify-center">
                      <item.icon size={20} className="text-pine" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-body text-[17px] text-black mt-1 hover:text-pine transition-colors duration-200 whitespace-pre-line block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-[17px] text-black mt-1 whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>

            {/* Right — consultation CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <div className="bg-snow border border-zinc-200 rounded-card p-10 flex flex-col items-center justify-center text-center">
                <h3 className="font-heading text-[24px] text-black">
                  Solicitar consulta gratuita
                </h3>
                <p className="font-body text-sm text-zinc-600 mt-2">
                  Completa el formulario y un abogado se comunicará contigo.
                </p>
                <div className="mt-8">
                  <a
                    href={JOTFORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full h-12 bg-pine text-white font-body font-semibold text-base rounded-btn hover:bg-pine-dark transition-colors duration-200 px-8"
                  >
                    Solicitar consulta gratuita →
                  </a>
                </div>
                <p className="font-body text-xs text-zinc-400 text-center mt-5">
                  Al completar el formulario aceptas que un abogado de
                  Webster se comunique contigo para evaluar tu caso.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
