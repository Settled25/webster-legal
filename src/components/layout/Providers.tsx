"use client";
import { ModalProvider } from "@/context/ModalContext";
import { ConsultaModal } from "@/components/ui/ConsultaModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <ConsultaModal />
    </ModalProvider>
  );
}
