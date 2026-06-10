import Hero from "@/components/sections/Hero";
import HomeContactSection from "@/components/sections/HomeContactSection";
import SecurityComplianceSection from "@/components/sections/SecurityComplianceSection";
import ProofSection from "@/components/sections/ProofSection";
import PracticeFinderSection from "@/components/sections/PracticeFinderSection";
import Link from "next/link";
import Image from "next/image";

// ─── Section data ─────────────────────────────────────────────────────────────

const insightSection1 = {
    tagline: "— The Insight",
    heading1: "Watch how MeBilling turns",
    headingHighlight: "billing complexity",
    heading2: "into clean cash flow.",
    body: "A 2-minute overview of how our specialty-organized teams, in-house dispute pathway, and real-time dashboards work together to protect every dollar your practice earns.",
    cta: { label: "Schedule a Free Assessment", href: "/contact" },
    image: "/images/service 1.jpg",
};

const insightSection2 = {
    tagline: "— The Insight",
    badgeLabel: "The Revenue Gap",
    heading1: "Many practices lose revenue through",
    heading2: " ",
    headingHighlight: "denials, underpayments,",
    heading3: " missed follow-up, and documentation gaps.",
    body: "MeBilling helps identify and recover that revenue. Not from poor clinical outcomes, but from billing complexity that compounds silently. Payer policy changes, denial cycles, underpayment patterns.",
    cta: { label: "See How We Fix It", href: "/solutions" },
    image: "/images/bussines women.jpg",
};

const revenueLeakData = {
    tagline: "— Revenue Pressure Points",
    heading: "Four places ",
    headingHighlight: "revenue",
    heading2: " usually slips away.",
    subtext: "These are the pressure points we prioritize first because they create the fastest path from insight to cash recovery.",
    items: [
        {
            stat: "65%",
            title: "Unappealed Denials",
            description: "Up to 65% of denied claims are recoverable if worked with the right documentation.",
            icon: "🔄",
        },
        {
            stat: "+5%",
            title: "Unreconciled Underpayments",
            description: "Payments posted below contracted rates and never questioned.",
            icon: "💰",
        },
        {
            stat: "90",
            title: "Aging A/R with No Follow-Up",
            description: "Claims past 90 days require a different recovery approach.",
            icon: "📅",
        },
        {
            stat: "75%",
            title: "Accumulated Compliance Risk",
            description: "Documentation gaps can silently accumulate until payers find them first.",
            icon: "⚠️",
        },
    ],
};

const approachData = {
    tagline: "— The Approach",
    heading: "Built differently. Accountable to ",
    headingHighlight: "outcomes,",
    heading2: " not activity.",
    body: "MeBilling is not a billing clearinghouse. It is a managed revenue cycle practice organized by clinical specialty, end-to-end dispute resolution pathway, and held accountable to the metrics your practice actually tracks.",
    pillars: [
        {
            number: "01",
            title: "Specialty-organized teams. Not shared queues.",
            body: "Every account is staffed by specialists who work within that clinical discipline every day — oncology coders code oncology, interventional pain coders code pain management. No rotation, no generalists, no knowledge spread thin.",
            note: "Applied across 15 professional billing specialties, 5 institutional types, and 4 laboratory billing tracks — 24 disciplines total.",
        },
        {
            number: "02",
            title: "In-house only. No subcontracting, ever.",
            body: "Every claim, every appeal, every IDR proceeding, every arbitration filing managed by our own CPMA and CPC-certified staff. No third-party handoffs, no accountability gaps. One team, one number to call.",
            note: "250+ certified billing specialists. 90+ payer networks. Houston HQ with two global delivery centers — all in-house.",
        },
        {
            number: "03",
            title: "The full dispute pathway, internally.",
            body: "Most billing companies stop at the appeal. MeBilling manages every stage: direct negotiation, formal appeals, Federal IDR (NSA), arbitration, and mediation — all in-house, without routing a single dispute to outside counsel.",
            note: "12 service lines covering the complete billing lifecycle — from pre-registration through formal dispute resolution.",
        },
    ],
    ctas: [
        { label: "View all services →", href: "/services" },
        { label: "View all solutions →", href: "/solutions" },
        { label: "View all resources →", href: "/resources" },
    ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

import { PageContentService } from "@/services/pageContent.service";

export default async function Home() {
    // Fetch dynamic content
    const pageData = await PageContentService.getPage("home");
    const sections = pageData?.sections || {};

    const heroData = sections["Hero"] || {};
    const practiceFinderData = sections["PracticeFinderSection"] || {};
    const homeContactData = sections["HomeContactSection"] || {};
    const proofData = sections["ProofSection"] || {};
    const securityData = sections["SecurityComplianceSection"] || {};

    return (
        <>
            <main className="flex-1 w-full relative" style={{ backgroundColor: "#FFFDF5" }}>
                <Hero data={heroData} />

                {/* ── Insight Section 1: Video + CTA ── */}
                <section className="w-full py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-outfit">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

                            {/* Left: copy */}
                            <div>
                                <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-5 font-outfit">
                                    {insightSection1.tagline}
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#162018] leading-tight mb-5 font-cormorant">
                                    {insightSection1.heading1} <br />
                                    <span className="text-[#C8920A] italic">{insightSection1.headingHighlight}</span>{" "}
                                    {insightSection1.heading2}
                                </h2>
                                <p className="text-slate-600 text-[15px] leading-relaxed mb-8 font-outfit max-w-lg">
                                    {insightSection1.body}
                                </p>
                                <Link
                                    href={insightSection1.cta.href}
                                    className="inline-flex items-center gap-3 bg-[#1A6B3A] hover:bg-[#0a2a14] text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all font-outfit"
                                >
                                    {insightSection1.cta.label}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Right: video */}
                            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video">
                                <video
                                    src="/vedios/video 01.mp4"
                                    poster={insightSection1.image}
                                    controls
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Insight Section 2: Image left, copy right ── */}
                <section className="w-full py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-outfit">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                            {/* Left: image with badge */}
                            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video">
                                <Image
                                    src={insightSection2.image}
                                    alt="The Revenue Gap"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                {/* Badge overlay */}
                                <div className="absolute top-4 left-4">
                                    <div className="inline-flex items-center gap-2 bg-[#C8920A] text-black text-xs font-bold px-4 py-2 rounded-full font-outfit">
                                        <span className="w-2 h-2 rounded-full bg-black" />
                                        {insightSection2.badgeLabel}
                                    </div>
                                </div>
                            </div>

                            {/* Right: copy */}
                            <div>
                                <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-5 font-outfit">
                                    {insightSection2.tagline}
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#162018] leading-tight mb-5 font-cormorant">
                                    {insightSection2.heading1} <br />
                                    {insightSection2.heading2}
                                    <span className="text-[#C8920A] italic">{insightSection2.headingHighlight}</span>
                                    {insightSection2.heading3}
                                </h2>
                                <p className="text-slate-600 text-[15px] leading-relaxed mb-8 font-outfit max-w-lg">
                                    {insightSection2.body}
                                </p>
                                <Link
                                    href={insightSection2.cta.href}
                                    className="inline-flex items-center gap-3 bg-[#1A6B3A] hover:bg-[#0a2a14] text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all font-outfit"
                                >
                                    {insightSection2.cta.label}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Revenue Leak Section ── */}
                <section className="w-full py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-outfit bg-white/60">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-10 md:mb-14">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#162018] leading-tight font-cormorant mb-4">
                                {revenueLeakData.heading}
                                <span className="text-[#C8920A] italic">{revenueLeakData.headingHighlight}</span>
                                {revenueLeakData.heading2}
                            </h2>
                            <p className="text-slate-500 text-[15px] max-w-2xl mx-auto font-outfit">
                                {revenueLeakData.subtext}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {revenueLeakData.items.map((item) => (
                                <div
                                    key={item.title}
                                    className="p-7 bg-[#FCFBF5] border border-[#082610]/12 rounded-2xl flex flex-col hover:shadow-md transition-all"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#F5EEDC] flex items-center justify-center text-xl shadow-sm">
                                            {item.icon}
                                        </div>
                                        <p className="text-[#C8920A] font-cormorant font-medium text-4xl md:text-5xl leading-none -mt-2">{item.stat}</p>
                                    </div>
                                    <h3 className="text-[#162018] font-semibold text-[16px] mb-2 font-outfit">{item.title}</h3>
                                    <p className="text-slate-500 text-[13px] leading-relaxed font-outfit">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Approach Section ── */}
                <section className="w-full py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-outfit bg-[#0C3318]">
                    <div className="container mx-auto max-w-7xl">
                        {/* Header */}
                        <div className="text-center mb-10 md:mb-16">
                            <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-4 font-outfit">
                                {approachData.tagline}
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight font-cormorant mb-5">
                                {approachData.heading}
                                <span className="text-[#C8920A] italic">{approachData.headingHighlight}</span>
                                {approachData.heading2}
                            </h2>
                            <p className="text-white/70 text-[15px] leading-relaxed max-w-3xl mx-auto font-outfit">
                                {approachData.body}
                            </p>
                        </div>

                        {/* 3 pillar columns */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 md:mb-14">
                            {approachData.pillars.map((pillar) => (
                                <div key={pillar.number} className="flex flex-col p-6 md:p-8 rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
                                    <p className="text-white/20 font-cormorant font-medium text-5xl md:text-7xl leading-none mb-4 md:mb-6">{pillar.number}</p>
                                    <h3 className="text-white text-xl font-medium leading-snug mb-4 font-cormorant">{pillar.title}</h3>
                                    <p className="text-white/65 text-[14px] leading-relaxed mb-6 font-outfit flex-1">{pillar.body}</p>
                                    <p className="text-[#C8920A] text-[12.5px] leading-relaxed font-outfit border-t pt-4" style={{ borderColor: "rgba(200,146,10,0.25)" }}>{pillar.note}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA row */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {approachData.ctas.map((cta) => (
                                <Link
                                    key={cta.label}
                                    href={cta.href}
                                    className="px-7 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 font-semibold text-sm transition-all font-outfit"
                                >
                                    {cta.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <ProofSection data={proofData} />
                <SecurityComplianceSection data={securityData} />
                <PracticeFinderSection data={practiceFinderData} />
                <HomeContactSection data={homeContactData} />
            </main>
        </>
    );
}
