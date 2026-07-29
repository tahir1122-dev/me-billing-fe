"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// ─── JSON Data ────────────────────────────────────────────────────────────────
const defaultCta = {
    line1: "Ready to Work With a Team",
    line2Highlight: "Accountable for Your Revenue?",
    description: "Let's discuss what's limiting your revenue cycle and map out a path to better performance.",
    primaryButton: { label: "Talk to a Specialist", href: "/contact" },
    secondaryButton: { label: "View Solutions", href: "/solutions" }
};

const pageSpecificCtas: Record<string, typeof defaultCta> = {
    "/services": {
        line1: "Ready to build a Revenue Cycle",
        line2Highlight: "That Actually Performs? ",
        description: "Edit this description for the Services page.",
        primaryButton: { label: "Talk to a Specialist", href: "/contact" },
        secondaryButton: { label: "View Solutions", href: "/solutions" }
    },
    "/solutions": {
        line1: "Your revenue cycle should be",
        line2Highlight: "your strongest asset",
        description: "Edit this description for the Solutions page.",
        primaryButton: { label: "Talk to a Specialist", href: "/contact" },
        secondaryButton: { label: "View Solutions", href: "/solutions" }
    },
    "/specialties": {
        line1: "Don't See Your Specialty? ",
        line2Highlight: "Let's Talk.",
        description: "",
        primaryButton: { label: "Talk to a Specialist", href: "/contact" },
        secondaryButton: { label: "View Solutions", href: "/solutions" }
    },
    "/contact": {
        line1: "Your revenue cycle should be",
        line2Highlight: "your strongest asset",
        description: "",
        primaryButton: { label: "Talk to a Specialist", href: "/contact" },
        secondaryButton: { label: "View Solutions", href: "/solutions" }
    }
};

const footerData = {
    companyInfo: {
        logo: {
            src: "/images/Logo2.png",
            alt: "MeBilling Logo",
            width: 160,
            height: 50
        },
        description: "MeBilling provides end-to-end Revenue Cycle Management solutions for U.S. healthcare providers, including medical billing, coding, denial management, payment posting, A/R follow-up, credentialing, and compliance support. We currently serve clients in Texas, Louisiana, Arkansas, Oklahoma, Alabama, and New Jersey."
    },
    socialLinks: [
        { href: "https://www.linkedin.com/company/mebilling", label: "LinkedIn", icon: "/images/linkedin logo.svg" },
        { href: "https://www.facebook.com/MeBillingInc/", label: "Facebook", icon: "/images/facebook logo.svg" },
        { href: "https://www.instagram.com/mebillinginc/", label: "Instagram", icon: "/images/instagram logo.svg" },
    ],
    pageLinks: [
        { label: "Home", href: "/" },
        { label: "Our services", href: "/services" },
        { label: "Bundled Solutions", href: "/solutions" },
        { label: "Blog", href: "/resources" },
        { label: "About Us", href: "/about" },
    ],
    contactItems: [
        { icon: "/images/call.svg", text: "US: +1 (346) 616-0008", href: "tel:+13466160008" },
        // { icon: "/images/call.svg", text: "Global: +92 316 433 3497", href: "tel:+923164333497" },
        { icon: "/images/Icons.svg", text: "info@mebilling.com", href: "mailto:info@mebilling.com" },
        { icon: "/images/loc.svg", text: "100 Glenborough Dr, Suite 400\nHouston, TX 77067, USA" },
    ],
    bottomBar: {
        copyright: "© 2026 MeBilling Inc. All rights reserved.",
        badge: "HIPAA Compliant",
        links: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Use", href: "/terms-of-use" },
            { label: "Legal Disclaimer", href: "/legal-disclaimer" },
            { label: "HIPAA Notice", href: "/hipaa-notice" },
            { label: "Cookie Policy", href: "/cookie-policy" }
        ]
    }
};

export default function FooterSection({ data = {} }: { data?: any }) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const currentCta = pageSpecificCtas[pathname] || defaultCta;

    // Merge data from props with the local default footerData
    const content = { ...footerData, ...data };
    content.socialLinks = footerData.socialLinks;
    content.contactItems = footerData.contactItems;

    return (
        <footer className="w-full bg-[#112314] text-white relative overflow-hidden font-outfit">
            {/* Background Concentric Circles */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
                <div className="absolute inset-0 rounded-full border border-white/30 m-[50px]"></div>
                <div className="absolute inset-0 rounded-full border border-white/20 m-[150px]"></div>
                <div className="absolute inset-0 rounded-full border border-white/10 m-[250px]"></div>
                <div className="absolute inset-0 rounded-full border border-white/5 m-[350px]"></div>
            </div>

            {/* Top CTA Block — hidden on home page */}
            {!isHome && (
                <div className="relative pt-24 pb-16 px-6 sm:px-12 lg:px-20 text-center flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium text-white font-cormorant leading-tight mb-2">
                        {currentCta.line1}
                    </h2>
                    <h3 className="text-3xl md:text-5xl lg:text-[56px] font-medium text-[#C8920A] font-cormorant italic mb-8">
                        {currentCta.line2Highlight}
                    </h3>
                    <p className="text-[17px] text-white/90 font-outfit mb-12 max-w-2xl mx-auto font-medium">
                        {currentCta.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center w-full max-w-sm sm:max-w-none mx-auto">
                        <Link href={currentCta.primaryButton.href} className="bg-[#1A6B3A] hover:bg-[#13522C] text-white px-8 py-3.5 rounded-md font-medium flex items-center justify-center gap-2 transition-all w-full sm:w-auto">
                            {currentCta.primaryButton.label}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link href={currentCta.secondaryButton.href} className="bg-transparent border border-white/30 hover:border-white/60 text-white px-8 py-3.5 rounded-md font-medium flex items-center justify-center gap-2 transition-all w-full sm:w-auto">
                            {currentCta.secondaryButton.label}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            )}

            {/* Divider */}
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-20 hidden md:block">
                <div className="w-full h-px bg-white/10"></div>
            </div>

            {/* Footer Main Content */}
            <div className="relative container mx-auto px-6 sm:px-12 lg:px-20 max-w-7xl py-16">
                <div className="grid gap-12 lg:gap-8 lg:grid-cols-[1.5fr_1fr_1.2fr]">
                    <div className="space-y-6">
                        <Link href="/" className="inline-block relative">
                            <Image
                                src={content.companyInfo.logo.src}
                                alt={content.companyInfo.logo.alt}
                                width={content.companyInfo.logo.width}
                                height={content.companyInfo.logo.height}
                                className="h-auto w-auto object-contain object-left mb-2"
                            />
                        </Link>
                        <p className="max-w-[380px] text-[15px] leading-relaxed text-[#819E8C] font-medium pr-4">
                            {content.companyInfo.description}
                        </p>
                        <div className="flex items-center gap-5 pt-2">
                            {content.socialLinks.map((item: any) => {
                                return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    aria-label={item.label}
                                    target="_blank"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.label}
                                        width={16}
                                        height={16}
                                        className="h-4 w-4 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                                    />
                                </a>
                            )})}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[17px] font-bold text-[#C8920A] tracking-wide mb-6">Pages</h3>
                        <ul className="space-y-4 text-[15px] text-[#819E8C] font-medium">
                            {content.pageLinks.map((item: any) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="transition hover:text-white">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[17px] font-bold text-[#C8920A] tracking-wide mb-6">Contact Us</h3>
                        <ul className="space-y-5 text-[15px] text-[#819E8C] font-medium">
                            {content.contactItems.map((item: any, idx: number) => {
                                if(idx === 1) return
                                return (
                                <li key={idx} className="flex items-center gap-4">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#163620] border border-white/5">
                                        <Image
                                            src={item.icon}
                                            alt="Contact Icon"
                                            width={16}
                                            height={16}
                                            className="brightness-0 invert opacity-70"
                                        />
                                    </span>
                                    {item.href ? (
                                        <a href={item.href} className="whitespace-pre-line leading-relaxed hover:text-[#C8920A] transition-colors duration-200">
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span className="whitespace-pre-line leading-relaxed">{item.text}</span>
                                    )}
                                </li>
                            )})}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
                <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[14px] text-[#819E8C] font-medium">
                        {content.bottomBar.copyright}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] font-medium">
                        {content.bottomBar.links.map((lnk: any) => (
                            <Link key={lnk.label} href={lnk.href} className="text-[#819E8C] hover:text-white transition-colors">
                                {lnk.label}
                            </Link>
                        ))}
                        <div className="ml-2 bg-[#1B3A1C] border border-[#2B4B27] px-4 py-2 rounded-full hidden sm:block">
                            <span className="text-[#C8920A] font-bold text-[13px] tracking-wide">{content.bottomBar.badge}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
