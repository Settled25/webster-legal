import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Webster",
  description:
    "Contáctanos para una consulta gratuita. Webster es una firma de abogados en Puerto Rico especializada en cobro comercial.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
