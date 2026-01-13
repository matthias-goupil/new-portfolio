import type { Metadata } from "next";
import {Gabarito, Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gabarito = Gabarito({
    variable: "--font-gabarito",
})

export const metadata: Metadata = {
  title: "Matthias Goupil | Portfolio",
  description: "Portfolio de Matthias Goupil, Développeur web fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gabarito.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
