import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    metadataBase: new URL("https://www.webster.legal"),
    title: isEs
      ? "Webster | Recupera tus cuentas por cobrar"
      : "Webster | Get Paid for Your Work",
    description: isEs
      ? "Webster es una firma de abogados en Puerto Rico que utiliza inteligencia artificial para recuperar cuentas comerciales por cobrar."
      : "Webster is a law firm in Puerto Rico that uses AI to recover unpaid B2B invoices. You only pay when we collect.",
    alternates: {
      canonical: isEs ? "/" : "/en",
      languages: {
        es: "https://www.webster.legal/",
        en: "https://www.webster.legal/en",
      },
    },
    openGraph: {
      title: isEs
        ? "Webster | Recupera tus cuentas por cobrar"
        : "Webster | Get Paid for Your Work",
      description: isEs
        ? "Recuperamos tus cuentas por cobrar comerciales de hasta $15K. Solo cobramos si tú cobras."
        : "We recover unpaid B2B invoices up to $15K. You only pay when we collect.",
      url: isEs ? "https://www.webster.legal" : "https://www.webster.legal/en",
      siteName: "Webster",
      locale: isEs ? "es_PR" : "en_US",
      type: "website",
      images: [
        {
          url: "https://www.webster.legal/og-image.jpg",
          width: 1024,
          height: 1024,
          alt: isEs
            ? "Webster - Recupera tus cuentas por cobrar"
            : "Webster - Get Paid for Your Work",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Webster",
            description:
              "Firma de abogados en Puerto Rico especializada en recuperación de cuentas por cobrar comerciales.",
            url: "https://www.webster.legal",
            telephone: "+19393530566",
            email: "info@webster.legal",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "1519 Ave. Ponce de Leon Suite 717, Cond. 1st Federal Saving Building",
              addressLocality: "San Juan",
              addressRegion: "PR",
              postalCode: "00909-1718",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 18.4505,
              longitude: -66.0726,
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Puerto Rico",
            },
            priceRange: "Solo cobramos si tú cobras",
            serviceType: [
              "Debt Collection",
              "Commercial Debt Recovery",
              "Cobro de deudas comerciales",
            ],
            knowsLanguage: ["es", "en"],
            founder: {
              "@type": "Person",
              name: "Adrián Jiménez",
              jobTitle: "Abogado",
            },
          }),
        }}
      />
      <Providers>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </Providers>
    </NextIntlClientProvider>
  );
}
