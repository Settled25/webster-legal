import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webster.legal"),
  title: "Webster | Recupera tus cuentas por cobrar",
  description:
    "Webster es una firma de abogados en Puerto Rico que utiliza inteligencia artificial para recuperar cuentas comerciales por cobrar.",
  openGraph: {
    title: "Webster | Recupera tus cuentas por cobrar",
    description:
      "Recuperamos tus cuentas por cobrar comerciales de hasta $15K. Solo cobramos si tú cobras.",
    url: "https://webster.legal",
    siteName: "Webster",
    locale: "es_PR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${instrumentSerif.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Webster",
              description:
                "Firma de abogados en Puerto Rico especializada en recuperación de cuentas por cobrar comerciales.",
              url: "https://webster.legal",
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
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
