"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Check } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";

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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mzdaandk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // silent fail — form still shows
    }
    setLoading(false);
  };

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
            abogado. Sin compromiso, sin costo.
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

            {/* Right — consultation form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <div className="bg-snow border border-zinc-200 rounded-card p-10">
                {/* TODO: Replace with Jotform embed when ready */}
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-14 h-14 rounded-full bg-pine-light flex items-center justify-center mb-6">
                      <Check size={28} className="text-pine" />
                    </div>
                    <h3 className="font-heading text-[24px] text-black">
                      Mensaje recibido
                    </h3>
                    <p className="font-body text-base text-zinc-600 mt-3 max-w-sm">
                      Nos comunicaremos contigo lo antes posible para
                      coordinar tu consulta gratis.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-heading text-[24px] text-black">
                      Solicitar consulta gratuita
                    </h3>
                    <p className="font-body text-sm text-zinc-600 mt-2">
                      Completa el formulario y un abogado se comunicará contigo.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-body text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
                            Nombre
                          </label>
                          <input
                            type="text"
                            name="nombre"
                            required
                            placeholder="Tu nombre"
                            className="w-full h-11 border border-zinc-200 rounded-btn px-4 font-body text-base bg-white focus:ring-2 focus:ring-pine focus:border-pine focus:outline-none transition"
                          />
                        </div>
                        <div>
                          <label className="font-body text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
                            Empresa
                          </label>
                          <input
                            type="text"
                            name="empresa"
                            placeholder="Nombre de tu negocio"
                            className="w-full h-11 border border-zinc-200 rounded-btn px-4 font-body text-base bg-white focus:ring-2 focus:ring-pine focus:border-pine focus:outline-none transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-body text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
                          Correo electrónico
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="tu@correo.com"
                          className="w-full h-11 border border-zinc-200 rounded-btn px-4 font-body text-base bg-white focus:ring-2 focus:ring-pine focus:border-pine focus:outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="font-body text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          placeholder="(787) 000-0000"
                          className="w-full h-11 border border-zinc-200 rounded-btn px-4 font-body text-base bg-white focus:ring-2 focus:ring-pine focus:border-pine focus:outline-none transition"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-12 bg-pine text-white font-body font-semibold text-base rounded-btn hover:bg-pine-dark transition-colors duration-200 disabled:opacity-70"
                      >
                        {loading ? "Enviando..." : "Solicitar consulta gratuita →"}
                      </button>

                      <p className="font-body text-xs text-zinc-400 text-center">
                        Al enviar este formulario aceptas que un abogado de
                        Webster se comunique contigo para evaluar tu caso.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
