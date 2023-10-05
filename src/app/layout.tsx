import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Chakra } from "../components/Chakra";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Analytics } from "@vercel/analytics/react";
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
    <html lang="en">
      <body className={inter.className}>
        <Chakra>
          <Navbar />
          {children}
          <FloatingContact />
          <Footer />
          <Analytics />
        </Chakra>
      </body>
    </html>
  );
}
