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
    title: "Blog | Webster",
    description: isEs
      ? "Actualizaciones legales, estrategias de cobro y noticias del derecho comercial en Puerto Rico."
      : "Legal updates, collection strategies and commercial law news in Puerto Rico.",
    alternates: {
      canonical: isEs ? "/blog" : "/en/blog",
      languages: {
        es: "https://www.webster.legal/blog",
        en: "https://www.webster.legal/en/blog",
      },
    },
    openGraph: {
      title: "Blog | Webster",
      description: isEs
        ? "Recursos para dueños de negocio: estrategias de cobro, actualizaciones legales y noticias del derecho comercial en Puerto Rico."
        : "Resources for business owners: collection strategies, legal updates and commercial law news in Puerto Rico.",
      url: isEs
        ? "https://www.webster.legal/blog"
        : "https://www.webster.legal/en/blog",
    },
  };
}

export default async function BlogLayout({
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
