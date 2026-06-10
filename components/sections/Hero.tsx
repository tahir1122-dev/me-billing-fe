"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ─── Hero data ────────────────────────────────────────────────────────────────
const heroData = {
    tagline1: "— U.S. Healthcare Revenue Cycle Specialists —",
    tagline2: "Established in 2015 · Houston, TX",
    headingLine1: "Your practice",
    headingLine2: "is ",
    headingHighlight: "leaving money",
    headingLine3: " on the table.",
    body: "Denied claims, underpayments, and payer complexity quietly reduce revenue every month. MeBilling helps practices recover more with expert-led medical billing solutions.",
    cta1: { label: "Schedule a Consultation", href: "/contact" },
    cta2: { label: "See How We Work", href: "/solutions" },
    badges: [
        "CPMA & CPC Certified",
        "No Subcontracting",
        "HIPAA Compliant",
        "90+ Payer Networks",
    ],
    statCard: {
        label: "WHAT MEBILLING CLIENTS EXPERIENCE",
        stat: "5%",
        description: "Denial rate vs. industry average of 10–15%.",
        industryLabel: "Industry: 10–15%",
        mebillingLabel: "MeBilling: 5%",
    },
    specialtyGroups: [
        { name: "Surgical Care", icon: "⚕️" },
        { name: "Primary Care", icon: "👨‍⚕️" },
        { name: "Therapy", icon: "🏃" },
        { name: "Laboratory", icon: "🔬" }
    ]
};

export default function Hero({ data = {} }: { data?: any }) {
    const [showStatCard, setShowStatCard] = useState(false);

    // Merge data from props with the local default heroData
    const content = { ...heroData, ...data };

    useEffect(() => {
        const statTimer = setTimeout(() => setShowStatCard(true), 2000);
        return () => clearTimeout(statTimer);
    }, []);

    return (
        <section
            className="relative w-full overflow-hidden font-outfit"
            style={{
                backgroundImage: "url('/images/banner.png')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
            }}
        >
            {/* Deep dark overlay for text readability matching reference screenshot */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to right, rgba(10,22,12,0.92) 0%, rgba(10,22,12,0.82) 42%, rgba(10,22,12,0.55) 70%, rgba(10,22,12,0.30) 100%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-start gap-16 lg:gap-12">

                {/* ── Left column ── */}
                <div className="w-full lg:w-[52%] flex flex-col">
                    {/* Tagline block */}
                    <div className="mb-8">
                        <p className="text-[#C8920A] text-xs font-bold tracking-wider font-outfit">
                            {content.tagline1}
                        </p>
                        <p className="text-[#C8920A] text-xs font-bold tracking-wider font-outfit">
                            {content.tagline2}
                        </p>
                    </div>

                    {/* Main heading — large Cormorant Garamond matching screenshot */}
                    <h1 className="font-cormorant font-medium text-white leading-[1.05] text-[56px] sm:text-[68px] lg:text-[80px] mb-7">
                        {content.headingLine1}
                        <br />
                        {content.headingLine2}
                        <span className="text-[#C8920A] italic">{content.headingHighlight}</span>
                        <br />
                        {content.headingLine3}
                    </h1>

                    {/* Body text */}
                    <p className="text-white/80 text-[15px] leading-relaxed max-w-[480px] mb-10 font-outfit">
                        {content.body}
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 max-w-sm sm:max-w-none">
                        <Link
                            href={content.cta1.href}
                            className="inline-flex items-center justify-center gap-3 bg-[#1A6B3A] hover:bg-[#155a30] text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all font-outfit w-full sm:w-auto"
                        >
                            {content.cta1.label}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                            </svg>
                        </Link>
                        <Link
                            href={content.cta2.href}
                            className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white font-bold text-sm px-7 py-3.5 rounded-lg border border-white/40 transition-all font-outfit w-full sm:w-auto"
                        >
                            {content.cta2.label}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                            </svg>
                        </Link>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {content.badges.map((badge: any) => (
                            <div key={badge} className="flex items-center gap-2 text-white/80 text-[13px] font-outfit">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C8920A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right column: Stat card matching screenshot exactly ── */}
                <div className={`w-full lg:w-[42%] lg:mt-16 transition-all duration-1000 ease-out transform ${showStatCard ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-md'}`}>
                    <div
                        className="rounded-2xl p-8 border border-[#C8920A]/40"
                        style={{ backgroundColor: "rgba(12, 51, 24, 0.75)", backdropFilter: "blur(8px)" }}
                    >
                        <p className="text-[#C8920A] font-bold text-[11px] tracking-widest uppercase mb-6 font-outfit">
                            {content.statCard.label}
                        </p>

                        <p className="font-cormorant text-[#C8920A] font-medium leading-none mb-5" style={{ fontSize: "88px" }}>
                            {content.statCard.stat}
                        </p>

                        <p className="text-white/70 text-[15px] leading-relaxed mb-8 font-outfit">
                            {content.statCard.description}
                        </p>

                        {/* Comparison bar */}
                        <div className="border-t border-white/10 pt-5">
                            <div className="flex items-center justify-between text-[13px] font-outfit">
                                <span className="text-white/50">{content.statCard.industryLabel}</span>
                                <div className="flex-1 mx-4 h-[2px] bg-[#C8920A]/40 relative">
                                    <div className="absolute left-0 top-0 h-full bg-[#C8920A] w-[35%]" />
                                </div>
                                <span className="text-[#C8920A] font-bold">{content.statCard.mebillingLabel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom Static Specialty Groups ── */}
            <div className="absolute bottom-0 w-full border-t border-white/5 bg-[#101b12]/90 backdrop-blur-md py-5 overflow-hidden">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center opacity-80 hover:opacity-100 transition-opacity">
                        {content.specialtyGroups?.map((group: any, i: number) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className="text-xl">{group.icon}</span>
                                <span className="text-white hover:text-[#C8920A] transition-colors text-[13px] sm:text-[14px] font-medium tracking-wider font-outfit uppercase">
                                    {group.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
