import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Webster",
  description:
    "Actualizaciones legales, estrategias de cobro y noticias del derecho comercial en Puerto Rico.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
