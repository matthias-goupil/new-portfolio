import type { Metadata } from "next";
import {Gabarito, Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Menu from "@/components/ui/menu";
import Image from "next/image"

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gabarito.variable} antialiased`}
      >
      <header className="w-full p-8 flex justify-between fixed items-center z-10">
          <div className="flex items-center gap-1">
              <img src="/logo.jpg" alt={"Matthias Goupil"} className='h-8'/>
              <div>
                  <p className="font-title font-light text-sm mb-0">Matthias Goupil</p>
                  <p className="text-xs text-gray-500">Portfolio</p>
              </div>
          </div>
          <Menu />
      </header>
        {children}
      </body>
    </html>
  );
}
