import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Webster",
  description:
    "Conoce al equipo detrás de Webster, la firma de abogados AI-native en Puerto Rico.",
  alternates: {
    canonical: "/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre Nosotros | Webster",
    description:
      "Conoce al equipo detrás de Webster, la firma de abogados AI-native en Puerto Rico especializada en cobro comercial.",
    url: "https://www.webster.legal/sobre-nosotros",
  },
};

export default function SobreNosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
