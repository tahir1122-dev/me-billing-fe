"use client";

import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────
const defaultData = {
    tagline: "— Trust & Protection",
    heading1: "Security &",
    headingHighlight: "Compliance",
    body: "The HIPAA Security Rule requires administrative, physical, and technical safeguards to protect ePHI. Here is how we ensure your data remains secure.",
    items: [
        {
            title: "HIPAA Security Rule Aligned",
            description: "Safeguards strictly follow HHS requirements.",
            icon: "🛡️"
        },
        {
            title: "Business Associate Agreements",
            description: "Signed BAA is required before any PHI access.",
            icon: "📜"
        },
        {
            title: "Role-Based Access",
            description: "Strict controls ensure access is granted only as needed.",
            icon: "🔐"
        },
        {
            title: "MFA for Remote Access",
            description: "Multi-factor authentication secures all remote connections.",
            icon: "📱"
        },
        {
            title: "Encryption",
            description: "Data is encrypted both in transit and at rest.",
            icon: "🔒"
        },
        {
            title: "Audit & Monitoring",
            description: "Continuous logging and access monitoring.",
            icon: "👁️"
        },
        {
            title: "Workforce Training",
            description: "Annual HIPAA training for all team members.",
            icon: "👨‍🏫"
        },
        {
            title: "No PHI on Website",
            description: "Our contact forms, pixels, and analytics do not collect PHI.",
            icon: "🚫"
        },
        {
            title: "Secure Channels",
            description: "Only client-approved secure channels used for PHI transfer.",
            icon: "✅"
        }
    ]
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function SecurityComplianceSection({ data = {} }: { data?: any }) {
    const content = { ...defaultData, ...data };

    return (
        <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-outfit bg-[#FFFDF5]">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-14 md:mb-20">
                    <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-4 font-outfit">
                        {content.tagline}
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium text-[#162018] leading-tight font-cormorant mb-6">
                        {content.heading1} <span className="text-[#C8920A] italic">{content.headingHighlight}</span>
                    </h2>
                    <p className="text-slate-500 text-[16px] max-w-2xl mx-auto font-outfit leading-relaxed">
                        {content.body}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {content.items.map((item: any, idx: number) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-8 border border-[#082610]/10 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#C8920A]/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#FAFAEE] border border-[#C8920A]/20 flex items-center justify-center text-2xl mb-6 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-[18px] font-semibold text-[#162018] mb-3 font-outfit">
                                {item.title}
                            </h3>
                            <p className="text-[14px] text-slate-500 leading-relaxed font-outfit">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
