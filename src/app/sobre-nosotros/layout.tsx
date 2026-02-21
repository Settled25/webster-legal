import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Webster",
  description:
    "Conoce al equipo detrás de Webster, la firma de abogados AI-native en Puerto Rico.",
};

export default function SobreNosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
