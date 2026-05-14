"use client";

// ─── Data ─────────────────────────────────────────────────────────────────────

const proofData = {
    tagline: "— The Proof",
    heading1: "Numbers our clients see",
    heading2: "on their dashboards ",
    headingHighlight: "every day.",
    body: "Not benchmarks. Not industry averages projected onto our model. These are the actual performance metrics MeBilling clients track in real time updated daily, visible always.",
    stats: [
        {
            id: "clean-claim",
            label: "CLEAN CLAIM RATE",
            value: "98% +",
            note: "INDUSTRY AVERAGE: 85–90%",
            highlighted: false,
        },
        {
            id: "days-ar",
            label: "DAYS IN A/R",
            value: "25",
            note: "INDUSTRY AVERAGE: 42+ DAYS",
            highlighted: true,
        },
        {
            id: "denial-rate",
            label: "DENIAL RATE",
            value: "< 5%",
            note: "INDUSTRY AVERAGE: 10–15%",
            highlighted: false,
        },
        {
            id: "processed",
            label: "PROCESSED",
            value: "$1.7B",
            note: "ACROSS 1.5M TRANSACTIONS — 2025",
            highlighted: false,
        },
    ],
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProofSection() {
    return (
        <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-outfit" style={{ backgroundColor: "#FFFDF5" }}>
            <div className="container mx-auto max-w-7xl">

                {/* Header — 2-col layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-14">
                    <div>
                        <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-5 font-outfit">
                            {proofData.tagline}
                        </span>
                        <h2 className="text-4xl sm:text-[48px] lg:text-[52px] font-medium text-[#162018] leading-[1.1] font-cormorant">
                            {proofData.heading1} <br />
                            {proofData.heading2}
                            <span className="text-[#C8920A] italic">{proofData.headingHighlight}</span>
                        </h2>
                    </div>
                    <div className="flex items-start lg:pt-16">
                        <p className="text-slate-500 text-[15px] leading-relaxed font-outfit">
                            {proofData.body}
                        </p>
                    </div>
                </div>

                {/* Stats row — 4 columns, matching screenshot exactly */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#082610]/10 border border-[#082610]/10 rounded-2xl overflow-hidden">
                    {proofData.stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col p-8 lg:p-10"
                            style={{
                                backgroundColor: stat.highlighted ? "#EDE8D8" : "#FCFBF5",
                            }}
                        >
                            <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-5 font-outfit">
                                {stat.label}
                            </p>
                            <p
                                className="font-cormorant font-medium leading-none mb-6"
                                style={{
                                    fontSize: "clamp(48px, 5vw, 68px)",
                                    color: "#C8920A",
                                }}
                            >
                                {stat.value}
                            </p>
                            <p
                                className="text-[10px] font-bold tracking-widest uppercase font-outfit mt-auto"
                                style={{ color: stat.highlighted ? "rgba(22,32,24,0.45)" : "rgba(100,116,139,0.8)" }}
                            >
                                {stat.note}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
