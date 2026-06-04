"use client";

import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const practiceFinderData = {
    tagline: "— Find Your Starting Point",
    heading1: "What best describes your",
    headingHighlight: "practice right now?",
    subtext: "Select the situation that fits — we'll show you exactly how MeBilling addresses it.",
    cards: [
        {
            id: "hand-off-billing-1",
            badge: "Full Outsourcing",
            badgeColor: "#C8920A",
            image: "/images/service 2.jpg",
            title: "We want to hand off billing entirely",
            description: "One accountable partner for patient registration through final payment no vendors, no gaps.",
        },
        {
            id: "aged-ar",
            badge: "Revenue Recovery",
            badgeColor: "#C8920A",
            image: "/images/about us team.jpg",
            title: "We have aged A/R we can't seem to move",
            description: "Old claims recovery, denial management, and formal appeals that convert dormant receivables into deposits.",
        },
        {
            id: "audit-risk",
            badge: "Compliance & Risk",
            badgeColor: "#C8920A",
            image: "/images/service 3.jpg",
            title: "We're worried about an audit or recoupment",
            description: "Proactive coding audits, HCC validation, and CDI reviews — before a payer finds the gap.",
        },
        {
            id: "hand-off-billing-2",
            badge: "Provider Lifecycle",
            badgeColor: "#C8920A",
            image: "/images/bussines women.jpg",
            title: "We're onboarding providers and billing is stalling",
            description: "Enrollment across 90+ payer networks so credentialing gaps never become billing gaps.",
        },
        {
            id: "hand-off-billing-3",
            badge: "Complex Claims · Premium",
            badgeColor: "#C8920A",
            image: "/images/contact.jpg",
            title: "We have out-of-network or injury claim disputes",
            description: "Workers' comp, NSA IDR, claims negotiation, arbitration, and mediation — all in-house.",
        },
        {
            id: "hand-off-billing-4",
            badge: "Financial Accuracy",
            badgeColor: "#C8920A",
            image: "/images/doc 2.png",
            title: "We think payers are underpaying us",
            description: "Daily payment reconciliation against contracted rates — every variance identified and pursued.",
        },
    ],
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function PracticeFinderSection() {
    return (
        <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-outfit" style={{ backgroundColor: "#FFFDF5" }}>
            <div className="container mx-auto max-w-7xl">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-4 font-outfit">
                        {practiceFinderData.tagline}
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-medium text-[#162018] leading-tight font-cormorant mb-4">
                        {practiceFinderData.heading1} <br />
                        <span className="text-[#C8920A] italic">{practiceFinderData.headingHighlight}</span>
                    </h2>
                    <p className="text-slate-500 text-[15px] max-w-xl mx-auto font-outfit">
                        {practiceFinderData.subtext}
                    </p>
                </div>

                {/* 3×2 card grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {practiceFinderData.cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-[#FCFBF5] border border-[#082610]/12 rounded-2xl overflow-hidden hover:shadow-lg hover:ring-2 hover:ring-[#1A6B3A] hover:border-transparent transition-all duration-300 cursor-pointer group"
                        >
                            {/* Image with badge */}
                            <div className="relative h-44 overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Badge */}
                                <div className="absolute bottom-3 left-3">
                                    <span
                                        className="inline-flex items-center gap-1.5 text-[#162018] text-[11px] font-bold px-3 py-1.5 rounded-full font-outfit"
                                        style={{ backgroundColor: card.badgeColor }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#162018] opacity-80" />
                                        {card.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Text content */}
                            <div className="p-6">
                                <h3 className="text-[#162018] font-medium text-[17px] leading-snug mb-2 font-cormorant group-hover:text-[#1A6B3A] transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-slate-500 text-[13px] leading-relaxed font-outfit">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
