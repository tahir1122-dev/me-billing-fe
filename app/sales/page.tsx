import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SalesContactForm from "@/components/forms/SalesContactForm";
import SalesPillarsAccordion from "@/components/sections/SalesPillarsAccordion";
import { PageContentService } from "@/services/pageContent.service";

export const metadata: Metadata = {
    title: "Get a Demo | Me Billing",
    description: "Get a personalized demo of MeBilling. Streamline practice operations, enhance patient care, and boost your bottom line.",
};

// ─── All page data stored in JSON-style objects ───────────────────────────────

const heroData = {
    tagline: "— Book Your Demo",
    heading: "Get a Personalized",
    headingHighlight: "Demo of MeBilling",
    subtext:
        "Streamline practice operations, enhance patient care, and boost your bottom line.",
    features: [
        "Get tailored pricing information",
        "Explore our intuitive EHR and practice management software",
        "Discover how 42K+ practices have simplified their workflows",
    ],
    contactItems: [
        {
            type: "phone",
            text: "346-616-0008",
        },
        {
            type: "email",
            text: "info@mebilling.com",
        },
        {
            type: "address",
            text: "100 Glenborough Dr, Suite 400 Houston, TX 77067",
        },
    ],
};

const pillarsData = {
    tagline: "— Core Platform",
    heading: "The 3 essential pillars of",
    headingHighlight: "healthcare software",
    description:
        "MeBilling is purpose-built to automate work, prioritize tasks, and eliminate errors. Pervasive across the end-to-end software platform, our AI solutions drive efficiency and yield meaningful results for healthcare providers.",
    pillars: [
        {
            title: "Deliver quality care",
            content: "Focus on what matters most—your patients. Our platform streamlines clinical workflows, reducing administrative burdens so you can spend more time providing exceptional care.",
        },
        {
            title: "Collect payments faster, effortlessly",
            content: "Automate your billing processes, minimize denials, and accelerate cash flow with our intelligent revenue cycle management tools designed for modern practices.",
        },
        {
            title: "Top off your quality care experience",
            content: "Enhance patient satisfaction with seamless scheduling, automated reminders, and intuitive patient portals that make managing healthcare a breeze.",
        },
    ],
};

const ctaData = {
    heading: "More than",
    headingHighlight: "42,000 practices",
    headingContinued: "in the United States",
    subheading: "are growing with MeBilling. Now it's your turn.",
    subtext: "Schedule a customized demo",
    items: [
        { text: "Pinpoint growth opportunities" },
        { text: "Spot gaps in your online presence" },
        { text: "No pressure, no commitment" },
    ],
    cta: "Take a quick tour",
};

// ─── SVG Icon helpers ─────────────────────────────────────────────────────────

function PhoneIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function PinIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
        </svg>
    );
}

function getContactIcon(type: string) {
    if (type === "phone") return <PhoneIcon />;
    if (type === "email") return <MailIcon />;
    return <PinIcon />;
}

function TrendIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M3 3v18h18" />
            <path d="M7 14l4-4 4 4 6-6" />
        </svg>
    );
}

function SearchIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
        </svg>
    );
}

function HandshakeIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
        </svg>
    );
}

const ctaIcons = [<TrendIcon key="trend" />, <SearchIcon key="search" />, <HandshakeIcon key="hand" />];

// ─── Page Component ───────────────────────────────────────────────────────────

export default async function SalesPage() {
    const pageData = await PageContentService.getPage("sales");
    const salesPillarsDataCMS = pageData?.sections?.SalesPillarsAccordion || pillarsData;
    const heroDataCMS = pageData?.sections?.Hero || heroData;

    return (
        <main className="flex-1 w-full bg-gradient-to-b from-[#FFFDF5] via-[#FFFDF5]/95 to-[#FFFDF5] font-outfit">

            {/* ── Hero Section ── */}
            <section className="w-full bg-[#0C3318] py-16 sm:py-20 font-outfit">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">

                        {/* Left: copy */}
                        <div className="text-white">
                            <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-4 uppercase font-outfit">
                                {heroDataCMS.tagline}
                            </span>
                            <h1 className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-tight font-cormorant mb-4">
                                {heroDataCMS.heading} <br />
                                <span className="text-[#C8920A] italic">{heroDataCMS.headingHighlight}</span>
                            </h1>
                            <p className="mt-2 max-w-lg text-white/80 text-[15px] leading-relaxed font-outfit">
                                {heroDataCMS.subtext}
                            </p>

                            {/* Feature checklist */}
                            <ul className="mt-7 space-y-3">
                                {heroDataCMS.features.map((item: string) => (
                                    <li key={item} className="flex items-start gap-3 text-[15px] text-white/90 font-outfit">
                                        <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#C8920A] text-black flex-shrink-0">
                                            <CheckIcon />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Contact info */}
                            <div className="mt-8 space-y-3 text-[14px] text-white/80">
                                {heroDataCMS.contactItems.map((item: any) => (
                                    <div key={item.text} className="flex items-center gap-3">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A6B3A] text-white flex-shrink-0">
                                            {getContactIcon(item.type)}
                                        </span>
                                        <span className="font-outfit">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: form card */}
                        <div className="rounded-2xl p-8 sm:p-10 shadow-2xl" style={{ backgroundColor: "#FCFBF5" }}>
                            <h2 className="text-3xl font-medium text-[#162018] mb-7 font-cormorant">
                                Get in <span className="text-[#C8920A] italic">Touch</span>
                            </h2>
                            <SalesContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Pillars Section ── */}
            <section className="relative w-full overflow-hidden py-20 sm:py-24 font-outfit">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-start">

                        {/* Left: copy */}
                        <div className="w-full lg:w-1/2">
                            <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-4 uppercase font-outfit">
                                {salesPillarsDataCMS.tagline}
                            </span>
                            <h2 className="text-3xl md:text-5xl text-[#162018] font-medium leading-tight font-cormorant mb-2">
                                {salesPillarsDataCMS.heading} <br />
                                <span className="text-[#C8920A] italic font-medium">{salesPillarsDataCMS.headingHighlight}</span>
                            </h2>
                            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-600 font-outfit">
                                {salesPillarsDataCMS.description}
                            </p>

                            <SalesPillarsAccordion pillars={salesPillarsDataCMS.pillars} />
                        </div>

                        {/* Right: video */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative mx-auto h-[440px] w-full max-w-[700px] overflow-hidden rounded-2xl shadow-lg bg-[#FCFBF5]">
                                <video
                                    src={salesPillarsDataCMS.video || "https://ccbtiisgqfffxfkgpaon.supabase.co/storage/v1/object/public/assets/video%2008.mp4"}
                                    controls
                                    className="object-cover w-full h-full"
                                    poster={salesPillarsDataCMS.poster || "/images/contact.jpg"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA Banner Section ── */}
            <section className="w-full py-16 sm:py-20 font-outfit">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl bg-[#0C3318] px-6 py-14 text-center sm:px-10">
                        <h2 className="text-2xl md:text-4xl font-medium text-white font-cormorant leading-tight">
                            {ctaData.heading}{" "}
                            <span className="text-[#C8920A] italic">{ctaData.headingHighlight}</span>{" "}
                            {ctaData.headingContinued}
                            <br />
                            <span className="text-white/90 text-2xl sm:text-3xl font-normal">{ctaData.subheading}</span>
                        </h2>
                        <p className="mt-3 text-white/60 text-sm font-outfit">{ctaData.subtext}</p>

                        <div className="mt-12 grid gap-8 sm:grid-cols-3">
                            {ctaData.items.map((item, idx) => (
                                <div key={item.text} className="flex flex-col items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-[#18532D] shadow-inner flex items-center justify-center">
                                        {ctaIcons[idx]}
                                    </div>
                                    <p className="text-sm font-semibold text-white/90 font-outfit">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#C8920A] bg-transparent hover:bg-[#C8920A]/10 px-7 py-3 text-sm font-bold text-[#C8920A] transition-all font-outfit"
                        >
                            {ctaData.cta}
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C8920A]">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
