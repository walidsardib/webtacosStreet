import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tacos Street — The Original French Tacos · Zaragoza",
  description: "Tacos Street: el taco francés original de Lyon, en Zaragoza. Fundado por Karim, Omar y Amin. Dos locales: Las Fuentes y Actur. Salsas importadas de Francia. #TacoJomudo",
  icons: { icon: "/img/web/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
