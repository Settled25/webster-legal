"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import { useState } from "react";
import { Check } from "lucide-react";

const blogPosts = [
  {
    category: "COBRO COMERCIAL",
    title: "Cómo proteger tus cuentas por cobrar antes de que sea tarde",
    excerpt:
      "La prevención es la mejor estrategia de cobro. Aprende a estructurar tus contratos y procesos de facturación para minimizar el riesgo de impago.",
    date: "18 de febrero de 2026",
  },
  {
    category: "DERECHO EMPRESARIAL",
    title: "¿Qué hacer cuando un cliente no paga? Guía práctica",
    excerpt:
      "Una guía paso a paso sobre las opciones legales disponibles cuando un cliente comercial incumple con el pago de una factura.",
    date: "14 de febrero de 2026",
  },
  {
    category: "LITIGIO",
    title: "Prelitigio vs. litigio: cuándo escalar el cobro",
    excerpt:
      "No todos los casos requieren demanda. Explicamos cómo evaluar cuándo la gestión extrajudicial es suficiente y cuándo es necesario litigar.",
    date: "10 de febrero de 2026",
  },
  {
    category: "FLUJO DE CAJA",
    title: "El impacto de las cuentas incobrables en tu negocio",
    excerpt:
      "Las cuentas por cobrar vencidas afectan más que tu balance — afectan tu capacidad de operar, invertir y crecer.",
    date: "5 de febrero de 2026",
  },
  {
    category: "DERECHO EMPRESARIAL",
    title: "Contratos comerciales: cláusulas que protegen tu derecho al cobro",
    excerpt:
      "Las cláusulas correctas en tus contratos pueden ser la diferencia entre cobrar y absorber la pérdida. Estas son las esenciales.",
    date: "1 de febrero de 2026",
  },
  {
    category: "COBRO COMERCIAL",
    title:
      "Cobro comercial en Puerto Rico: lo que todo empresario debe saber",
    excerpt:
      "Una introducción al marco legal del cobro comercial en Puerto Rico, incluyendo plazos prescriptivos, jurisdicción y remedios disponibles.",
    date: "28 de enero de 2026",
  },
];

const categories = [
  "Cobro Comercial",
  "Derecho Empresarial",
  "Litigio",
  "Flujo de Caja",
];

function SidebarNewsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <Card className="p-6">
      <h3 className="font-body font-semibold text-base text-black">
        Newsletter
      </h3>
      <p className="font-body text-sm text-zinc-600 mt-2">
        Recibe artículos y actualizaciones legales directamente en tu correo.
      </p>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          placeholder="Tu correo electrónico"
          required
          className="w-full h-10 text-sm border border-zinc-200 rounded-btn px-3 bg-white focus:ring-2 focus:ring-pine focus:border-pine focus:outline-none transition font-body"
        />
        <button
          type="submit"
          className="w-full h-10 mt-2 bg-pine text-white text-sm font-body font-semibold rounded-btn hover:bg-pine-dark transition-colors duration-200 inline-flex items-center justify-center gap-2"
        >
          {submitted ? (
            <>
              <Check size={16} />
              Suscrito ✓
            </>
          ) : (
            "Suscribirme →"
          )}
        </button>
      </form>
    </Card>
  );
}

export default function BlogPage() {
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
          <h1 className="font-heading text-[48px] text-black">Blog</h1>
          <p className="font-body text-[17px] text-zinc-600 mt-2">
            Actualizaciones legales, estrategias de cobro y noticias del derecho
            comercial en Puerto Rico.
          </p>
        </motion.div>
      </section>

      {/* Section 2: Featured Post */}
      <section className="bg-white pt-8 pb-24 md:pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
        <Card className="p-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="bg-zinc-100 aspect-video md:aspect-auto md:h-full flex items-center justify-center min-h-[240px]">
              <span className="font-body text-zinc-600 text-sm">
                Imagen destacada
              </span>
            </div>
            <div className="p-10">
              <span className="font-mono text-xs text-pine uppercase tracking-[2px]">
                COBRO COMERCIAL
              </span>
              <h2 className="font-heading text-[28px] text-black mt-3">
                Cinco errores que cometen los negocios al cobrar facturas
                vencidas
              </h2>
              <p className="font-body text-base text-zinc-600 mt-4 leading-relaxed">
                Muchos negocios esperan demasiado para actuar cuando un cliente
                no paga. En este artículo explicamos los errores más comunes y
                cómo evitarlos para proteger tu flujo de caja.
              </p>
              <p className="font-body text-sm text-zinc-600 mt-4">
                18 de febrero de 2026
              </p>
              <a
                href="#"
                className="font-body font-medium text-base text-pine mt-4 inline-block hover:underline"
              >
                Leer más →
              </a>
            </div>
          </div>
        </Card>
        </div>
      </section>

      {/* Section 3: Post Grid + Sidebar */}
      <section className="bg-white pb-24 md:pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.map((post, i) => (
              <BlogPostCard key={i} {...post} />
            ))}
          </motion.div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            <SidebarNewsletter />
            <Card className="p-6">
              <h3 className="font-body font-semibold text-base text-black">
                Categorías
              </h3>
              <ul className="mt-3 space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a
                      href="#"
                      className="font-body text-[15px] text-zinc-600 hover:text-pine transition-colors duration-200"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
