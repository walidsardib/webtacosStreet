import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Tacos Street — The Original French Tacos · Zaragoza",
  description:
    "Tacos Street: el taco francés original de Lyon, en Zaragoza. Fundado por Karim, Omar y Amin. Dos locales: Las Fuentes y Actur. Salsas importadas de Francia. #TacoJomudo",
  icons: { icon: "/img/web/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${anton.variable} ${spaceGrotesk.variable}`} style={{ fontFamily: "var(--font-space)" }}>
        {children}
      </body>
    </html>
  );
}
