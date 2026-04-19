import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

const SITE_URL = "https://tacosstreet.es";
const OG_IMAGE = `${SITE_URL}/img/uber/el-og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tacos Street — The Original French Tacos · Zaragoza",
    template: "%s | Tacos Street Zaragoza",
  },
  description:
    "Tacos Street: el taco francés auténtico de Lyon en Zaragoza. Salsas importadas de Francia, receta original. Dos locales: Las Fuentes (C/Minas 19) y El Actur (C/Gabriel Celaya 14). Pide en Uber Eats y Glovo. #TacoJomudo",
  keywords: [
    "tacos street", "taco francés zaragoza", "tacos zaragoza", "taco frances", "tacos street zaragoza",
    "taco jomudo", "comida francesa zaragoza", "uber eats zaragoza tacos", "glovo zaragoza tacos",
    "las fuentes restaurante", "actur restaurante", "tacos street las fuentes", "tacos street actur",
    "game changers zaragoza", "salsa algerienne", "merguez zaragoza", "taco xxl zaragoza",
  ],
  authors: [{ name: "Tacos Street", url: SITE_URL }],
  creator: "Tacos Street",
  publisher: "Tacos Street",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Tacos Street Zaragoza",
    title: "Tacos Street — The Original French Tacos · Zaragoza",
    description:
      "El taco francés auténtico de Lyon en Zaragoza. Salsas importadas de Francia, receta original. Dos locales: Las Fuentes y El Actur. Pide en Uber Eats y Glovo.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Tacos Street Zaragoza — The Original French Tacos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tacos Street — The Original French Tacos · Zaragoza",
    description:
      "El taco francés auténtico de Lyon en Zaragoza. Salsas importadas de Francia, receta original. #TacoJomudo",
    images: [OG_IMAGE],
    creator: "@tacosstreetes",
  },
  icons: {
    icon: "/img/SVG-WEB-TACOS-STREET/isotipo.svg",
    apple: "/img/SVG-WEB-TACOS-STREET/isotipo.svg",
  },
  manifest: "/manifest.json",
  verification: {},
  category: "restaurant",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Tacos Street",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/img/SVG-WEB-TACOS-STREET/logo-redondo.svg` },
      sameAs: [
        "https://www.instagram.com/tacosstreet.es/",
        "https://www.tiktok.com/@tacosstreet.es",
        "https://www.ubereats.com/es/store/tacos-street-las-fuentes/Tky_8BkAW6qgCsPNzrHEHg",
        "https://glovoapp.com/es/es/zaragoza/stores/tacos-street-zar",
      ],
      founders: [{ "@type": "Person", name: "Karim" }, { "@type": "Person", name: "Omar" }, { "@type": "Person", name: "Amin" }],
      foundingDate: "2025-02-21",
    },
    {
      "@type": "Restaurant",
      "@id": `${SITE_URL}/#restaurant-fuentes`,
      name: "Tacos Street — Las Fuentes",
      description: "El taco francés auténtico de los barrios de Lyon. Receta original. Salsas importadas de Francia.",
      url: SITE_URL,
      telephone: "+34643677898",
      image: `${SITE_URL}/img/nuevas/lasfuentes.jpg`,
      priceRange: "€",
      servesCuisine: ["French", "Tacos"],
      hasMenu: `${SITE_URL}/#carta`,
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "13:00",
        closes: "23:00",
      }],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle Minas, 19",
        addressLocality: "Zaragoza",
        addressRegion: "Aragón",
        postalCode: "50007",
        addressCountry: "ES",
      },
      geo: { "@type": "GeoCoordinates", latitude: 41.6396, longitude: -0.8752 },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", bestRating: "5", reviewCount: "200" },
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Restaurant",
      "@id": `${SITE_URL}/#restaurant-actur`,
      name: "Tacos Street — El Actur",
      description: "El taco francés auténtico de los barrios de Lyon. Receta original. Salsas importadas de Francia.",
      url: SITE_URL,
      telephone: "+34643677898",
      image: `${SITE_URL}/img/Emocionales/Emocional 2.jpg`,
      priceRange: "€",
      servesCuisine: ["French", "Tacos"],
      hasMenu: `${SITE_URL}/#carta`,
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "13:00",
        closes: "23:00",
      }],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle Gabriel Celaya, 14",
        addressLocality: "Zaragoza",
        addressRegion: "Aragón",
        postalCode: "50018",
        addressCountry: "ES",
      },
      geo: { "@type": "GeoCoordinates", latitude: 41.6665, longitude: -0.9003 },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", bestRating: "5", reviewCount: "200" },
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${anton.variable} ${spaceGrotesk.variable}`} style={{ fontFamily: "var(--font-space)" }}>
        {children}
      </body>
    </html>
  );
}
