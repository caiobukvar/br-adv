import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Chakra } from "../components/Chakra";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Bianca Rocha Advocacia",
  description: "Advocacia especializada e sob demanda",
};

export default function RootLayout({
  children,
  isDashboardRoute,
}: {
  children: React.ReactNode;
  isDashboardRoute: boolean;
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
          {!isDashboardRoute && <Footer />}
          <Analytics />
        </Chakra>
      </body>
    </html>
  );
}
