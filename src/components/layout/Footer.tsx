"use client";
import { useTranslations } from "next-intl";
import { Linkedin } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");

  const navLinks = [
    { label: t("inicio"), href: "/" },
    { label: t("servicios"), href: "/#servicios" },
    { label: t("precios"), href: "/#precios" },
    { label: t("blog"), href: "/blog" },
    { label: t("nosotros"), href: "/sobre-nosotros" },
    { label: t("contacto"), href: "/contacto" },
    { label: t("contadores"), href: "/contadores" },
  ];

  return (
    <footer className="bg-[#09090B] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <span className="font-heading text-white text-[26px] font-semibold">Webster</span>
          </div>

          {/* Column 2 */}
          <div>
            <p className="font-body text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-4">
              {tf("navHeading")}
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-[15px] text-zinc-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <p className="font-body text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-4">
              {tf("contactHeading")}
            </p>
            <ul className="space-y-2 font-body text-[15px] text-zinc-300">
              <li>info@webster.legal</li>
              <li>(939) 353-0566</li>
              <li>1519 Ave. Ponce de León Suite 717<br />Cond. 1st Federal Saving Building<br />San Juan, P.R. 00909-1718</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <p className="font-body text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-4">
              {tf("followHeading")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/websterlegal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-600/20 mt-8 mb-6" />

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[13px] text-zinc-600">
            {tf("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
