import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Webster",
  description:
    "Contáctanos para una consulta gratuita. Webster es una firma de abogados en Puerto Rico especializada en cobro comercial.",
  openGraph: {
    title: "Contacto | Webster",
    description:
      "Consulta gratuita con Webster. Firma de abogados en Puerto Rico que recupera tus cuentas por cobrar comerciales.",
    url: "https://webster.legal/contacto",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
