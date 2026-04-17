import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Me Billing",
  description: "Smart, secure billing solutions built for doctors, clinics, and healthcare teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-outfit text-slate-800 bg-white"
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
