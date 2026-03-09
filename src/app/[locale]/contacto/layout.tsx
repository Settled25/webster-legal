import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs ? "Contacto | Webster" : "Contact | Webster",
    description: isEs
      ? "Contáctanos para una consulta gratuita. Webster es una firma de abogados en Puerto Rico especializada en cobro comercial."
      : "Contact us for a free consultation. Webster is a law firm in Puerto Rico specialized in commercial debt collection.",
    alternates: {
      canonical: isEs ? "/contacto" : "/en/contacto",
      languages: {
        es: "https://www.webster.legal/contacto",
        en: "https://www.webster.legal/en/contacto",
      },
    },
    openGraph: {
      title: isEs ? "Contacto | Webster" : "Contact | Webster",
      description: isEs
        ? "Consulta gratuita con Webster. Firma de abogados en Puerto Rico que recupera tus cuentas por cobrar comerciales."
        : "Free consultation with Webster. Law firm in Puerto Rico that recovers your commercial accounts receivable.",
      url: isEs
        ? "https://www.webster.legal/contacto"
        : "https://www.webster.legal/en/contacto",
    },
  };
}

export default async function ContactoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return children;
}
