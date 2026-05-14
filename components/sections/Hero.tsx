import Link from "next/link";

// ─── Hero data ────────────────────────────────────────────────────────────────
const heroData = {
    tagline1: "— U.S. Healthcare Revenue Cycle Specialists —",
    tagline2: "Est. 2015, Houston TX",
    headingLine1: "Your practice",
    headingLine2: "is ",
    headingHighlight: "leaving money",
    headingLine3: " on the table.",
    body: "Not because of anything your clinicians are doing wrong. Because billing complexity payer policy changes, denial cycles, underpayment patterns compounds silently and continuously without a dedicated expert team built to stop it.",
    cta1: { label: "Let's Talk", href: "/contact" },
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
        description: "Average denial rate — against an industry average of 10–15%.",
        industryLabel: "Industry: 10–15%",
        mebillingLabel: "MeBilling: 5%",
    },
};

export default function Hero() {
    return (
        <section
            className="relative w-full overflow-hidden font-outfit"
            style={{
                backgroundImage: "url('/images/herobg.png')",
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
                            {heroData.tagline1}
                        </p>
                        <p className="text-[#C8920A] text-xs font-bold tracking-wider font-outfit">
                            {heroData.tagline2}
                        </p>
                    </div>

                    {/* Main heading — large Cormorant Garamond matching screenshot */}
                    <h1 className="font-cormorant font-medium text-white leading-[1.05] text-[56px] sm:text-[68px] lg:text-[80px] mb-7">
                        {heroData.headingLine1}
                        <br />
                        {heroData.headingLine2}
                        <span className="text-[#C8920A] italic">{heroData.headingHighlight}</span>
                        <br />
                        {heroData.headingLine3}
                    </h1>

                    {/* Body text */}
                    <p className="text-white/80 text-[15px] leading-relaxed max-w-[480px] mb-10 font-outfit">
                        {heroData.body}
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap items-center gap-4 mb-10">
                        <Link
                            href={heroData.cta1.href}
                            className="inline-flex items-center gap-3 bg-[#1A6B3A] hover:bg-[#155a30] text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all font-outfit"
                        >
                            {heroData.cta1.label}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                            </svg>
                        </Link>
                        <Link
                            href={heroData.cta2.href}
                            className="inline-flex items-center gap-3 bg-transparent hover:bg-white/10 text-white font-bold text-sm px-7 py-3.5 rounded-lg border border-white/40 transition-all font-outfit"
                        >
                            {heroData.cta2.label}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {heroData.badges.map((badge) => (
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
                <div className="w-full lg:w-[42%] lg:mt-16">
                    <div
                        className="rounded-2xl p-8 border border-[#C8920A]/40"
                        style={{ backgroundColor: "rgba(12, 51, 24, 0.75)", backdropFilter: "blur(8px)" }}
                    >
                        <p className="text-[#C8920A] font-bold text-[11px] tracking-widest uppercase mb-6 font-outfit">
                            {heroData.statCard.label}
                        </p>

                        <p className="font-cormorant text-[#C8920A] font-medium leading-none mb-5" style={{ fontSize: "88px" }}>
                            {heroData.statCard.stat}
                        </p>

                        <p className="text-white/70 text-[15px] leading-relaxed mb-8 font-outfit">
                            {heroData.statCard.description}
                        </p>

                        {/* Comparison bar */}
                        <div className="border-t border-white/10 pt-5">
                            <div className="flex items-center justify-between text-[13px] font-outfit">
                                <span className="text-white/50">{heroData.statCard.industryLabel}</span>
                                <div className="flex-1 mx-4 h-[2px] bg-[#C8920A]/40 relative">
                                    <div className="absolute left-0 top-0 h-full bg-[#C8920A] w-[35%]" />
                                </div>
                                <span className="text-[#C8920A] font-bold">{heroData.statCard.mebillingLabel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}