import Link from "next/link";
import React from "react";

export default function ApproachSection({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="w-full py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-outfit bg-[#0C3318]">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-4 font-outfit">
                        {data.tagline}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight font-cormorant mb-5">
                        {data.heading}
                        <span className="text-[#C8920A] italic">{data.headingHighlight}</span>
                        {data.heading2}
                    </h2>
                    <p className="text-white/70 text-[15px] leading-relaxed max-w-3xl mx-auto font-outfit">
                        {data.body}
                    </p>
                </div>

                {/* 3 pillar columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 md:mb-14">
                    {data.pillars.map((pillar: any) => (
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
                    {data.ctas.map((cta: any) => (
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
    );
}
