import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  href = "#",
  className = "",
  type,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-btn h-12 px-6 font-body font-semibold text-base transition-colors duration-200";
  const variants = {
    primary: "bg-pine text-white hover:bg-pine-dark",
    secondary:
      "bg-transparent border border-pine text-pine hover:bg-pine hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (type) {
    return (
      <button type={type} className={classes} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
