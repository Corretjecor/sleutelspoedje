import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sleutelspoedje - 24/7 Slotenmaker | Binnen 30 Minuten",
  description: "Buitengesloten? Sleutelspoedje is er binnen 30 minuten! Professionele slotenmaker service 24/7. Vaste prijzen, geen voorrijkosten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
