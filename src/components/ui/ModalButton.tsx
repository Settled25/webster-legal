"use client";
import { useModal } from "@/context/ModalContext";

interface ModalButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ModalButton({ children, className, onClick }: ModalButtonProps) {
  const { open } = useModal();
  return (
    <button
      onClick={() => { open(); onClick?.(); }}
      className={className}
    >
      {children}
    </button>
  );
}
