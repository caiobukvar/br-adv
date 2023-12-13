import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Chakra } from "../components/Chakra";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavbarMobile from "@/components/NavbarMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bianca Rocha Advocacia",
  description: "Advocacia especializada e sob demanda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <Chakra>
          <Navbar />
          <NavbarMobile />
          {children}
          <SpeedInsights />
          <FloatingContact />
          <Footer />
          <Analytics />
        </Chakra>
      </body>
    </html>
  );
}
