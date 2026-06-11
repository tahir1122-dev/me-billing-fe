import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import MainLayoutWrapper from "@/components/layout/MainLayoutWrapper";
import "./globals.css";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Me Billing",
  description: "Smart, secure billing solutions built for doctors, clinics, and healthcare teams.",
};

import { PageContentService } from "@/services/pageContent.service";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch home page data for the global footer
  const homeData = await PageContentService.getPage("home");
  const footerData = homeData?.sections?.["FooterSection"] || {};

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorantGaramond.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-outfit text-slate-800 bg-white"
        suppressHydrationWarning
      >
        <MainLayoutWrapper footerData={footerData}>
          {children}
        </MainLayoutWrapper>
      </body>
    </html>
  );
}
