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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PQRJZBZP');`,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col font-outfit text-slate-800 bg-white"
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQRJZBZP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <MainLayoutWrapper footerData={footerData}>
          {children}
        </MainLayoutWrapper>
      </body>
    </html>
  );
}
