"use client";
import { useState } from "react";
import { Check } from "lucide-react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 mt-6"
    >
      <input
        type="email"
        placeholder="Tu correo electr&oacute;nico"
        required
        className="font-body text-base border border-zinc-200 rounded-btn h-12 px-4 bg-white focus:ring-2 focus:ring-pine focus:border-pine focus:outline-none transition flex-1"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-btn h-12 px-6 font-body font-semibold text-base bg-pine text-white hover:bg-pine-dark transition-colors duration-200 whitespace-nowrap"
      >
        {submitted ? (
          <>
            <Check size={18} />
            Suscrito
          </>
        ) : (
          "Suscribirme →"
        )}
      </button>
    </form>
  );
}
