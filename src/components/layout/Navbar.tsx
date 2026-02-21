"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/animations";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Precios", href: "/#precios" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const darkHero = pathname === "/contacto";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg border-b border-zinc-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          <Link
            href="/"
            className={`font-heading text-[26px] tracking-wide font-semibold transition-colors duration-300 ${
              scrolled || !darkHero ? "text-black" : "text-white"
            }`}
          >
            Webster
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-body text-[15px] transition-colors duration-200 ${
                  scrolled || !darkHero
                    ? "text-zinc-600 hover:text-black"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden transition-colors duration-300 ${scrolled || !darkHero ? "text-black" : "text-white"}`}
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between w-full">
              <Link
                href="/"
                className="font-heading text-[26px] text-black tracking-wide font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Webster
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-black"
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex-1 flex flex-col items-center justify-center gap-8"
            >
              {links.map((link) => (
                <motion.div key={link.label} variants={fadeUp}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-body text-2xl text-zinc-600 hover:text-black transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {/* Subscribe button removed */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
