import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Somrani Olfa — Ingénieure Full-Stack",
  description: "Portfolio d'un ingénieure informatique Full-Stack basé en Tunisie.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${syne.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="font-inter bg-[#080c10] text-[#e8eaf0] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}