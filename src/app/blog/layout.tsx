import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Webster",
  description:
    "Actualizaciones legales, estrategias de cobro y noticias del derecho comercial en Puerto Rico.",
  openGraph: {
    title: "Blog | Webster",
    description:
      "Recursos para dueños de negocio: estrategias de cobro, actualizaciones legales y noticias del derecho comercial en Puerto Rico.",
    url: "https://webster.legal/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
