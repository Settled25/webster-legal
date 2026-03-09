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
    title: isEs ? "Sobre Nosotros | Webster" : "About Us | Webster",
    description: isEs
      ? "Conoce al equipo detrás de Webster, la firma de abogados AI-native en Puerto Rico."
      : "Meet the team behind Webster, the AI-native law firm in Puerto Rico.",
    alternates: {
      canonical: isEs ? "/sobre-nosotros" : "/en/sobre-nosotros",
      languages: {
        es: "https://www.webster.legal/sobre-nosotros",
        en: "https://www.webster.legal/en/sobre-nosotros",
      },
    },
    openGraph: {
      title: isEs ? "Sobre Nosotros | Webster" : "About Us | Webster",
      description: isEs
        ? "Conoce al equipo detrás de Webster, la firma de abogados AI-native en Puerto Rico especializada en cobro comercial."
        : "Meet the team behind Webster, the AI-native law firm in Puerto Rico specialized in commercial debt collection.",
      url: isEs
        ? "https://www.webster.legal/sobre-nosotros"
        : "https://www.webster.legal/en/sobre-nosotros",
    },
  };
}

export default async function SobreNosotrosLayout({
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
