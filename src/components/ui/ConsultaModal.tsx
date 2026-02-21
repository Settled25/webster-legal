"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function ConsultaModal() {
  const { isOpen, close } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch("https://formspree.io/f/mzdaandk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Error al enviar. Intenta de nuevo.");
      }
    } catch {
      alert("Error de conexión. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    close();
    setTimeout(() => setSubmitted(false), 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm"
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-snow border border-zinc-200 rounded-card p-10 w-full max-w-lg pointer-events-auto relative shadow-lg">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 text-zinc-400 hover:text-black transition-colors duration-200"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-pine-light flex items-center justify-center mb-6">
                    <Check size={28} className="text-pine" />
                  </div>
                  <h3 className="font-heading text-[24px] text-black">
                    Mensaje recibido
                  </h3>
                  <p className="font-body text-base text-zinc-600 mt-3 max-w-sm">
                    Nos comunicaremos contigo dentro de 24 horas hábiles para
                    coordinar tu consulta gratuita.
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
        </>
      )}
    </AnimatePresence>
  );
}
