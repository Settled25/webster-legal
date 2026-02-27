import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Para Contadores | Webster",
  description:
    "Webster ayuda a los clientes de contadores a recuperar facturas comerciales impagas. Recomiéndanos cuando un cliente tenga cuentas por cobrar sin moverse.",
  alternates: {
    canonical: "/contadores",
  },
  openGraph: {
    title: "Para Contadores | Webster",
    description:
      "Cuando las cuentas por cobrar de un cliente llevan meses sin moverse, recomiéndanos. Webster recupera facturas B2B impagas con respaldo legal real.",
    url: "https://www.webster.legal/contadores",
    siteName: "Webster",
    locale: "es_PR",
    type: "website",
  },
};

export default function ContadoresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
