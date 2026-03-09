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
    title: isEs ? "Para Contadores | Webster" : "For Accountants | Webster",
    description: isEs
      ? "Webster ayuda a los clientes de contadores a recuperar facturas comerciales impagas. Recomiéndanos cuando un cliente tenga cuentas por cobrar sin moverse."
      : "Webster helps accountants' clients recover unpaid commercial invoices. Refer us when a client has stale accounts receivable.",
    alternates: {
      canonical: isEs ? "/contadores" : "/en/contadores",
      languages: {
        es: "https://www.webster.legal/contadores",
        en: "https://www.webster.legal/en/contadores",
      },
    },
    openGraph: {
      title: isEs ? "Para Contadores | Webster" : "For Accountants | Webster",
      description: isEs
        ? "Cuando las cuentas por cobrar de un cliente llevan meses sin moverse, recomiéndanos. Webster recupera facturas B2B impagas con respaldo legal real."
        : "When a client's accounts receivable have stalled for months, refer us. Webster recovers unpaid B2B invoices with real legal backing.",
      url: isEs
        ? "https://www.webster.legal/contadores"
        : "https://www.webster.legal/en/contadores",
      siteName: "Webster",
      locale: isEs ? "es_PR" : "en_US",
      type: "website",
    },
  };
}

export default async function ContadoresLayout({
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
