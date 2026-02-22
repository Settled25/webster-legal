interface ModalButtonProps {
  children: React.ReactNode;
  className?: string;
}

const JOTFORM_URL = "https://form.jotform.com/260526971985067";

export function ModalButton({ children, className }: ModalButtonProps) {
  return (
    <a
      href={JOTFORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
