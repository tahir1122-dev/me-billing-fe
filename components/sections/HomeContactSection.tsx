"use client";

import Image from "next/image";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const homeContactData = {
    cta: {
        line1: "Every dollar you've earned",
        line2Highlight: "deserves to be collected.",
        line3: "Let's make sure it is.",
        body: "Tell us about your practice — your specialty, your volume, your current billing situation. We'll tell you exactly where revenue is leaving and what it takes to stop it.",
        buttons: [
            { label: "Schedule a Free Assessment", href: "/contact", primary: true },
            { label: "Explore Services & Solutions", href: "/solutions", primary: false },
        ],
    },
    form: {
        heading: "Get in Touch",
        fields: [
            { id: "firstName", label: "FIRST NAME", type: "text", placeholder: "First Name", half: true },
            { id: "lastName", label: "LAST NAME", type: "text", placeholder: "LAST Name", half: true },
            { id: "email", label: "BUSINESS EMAIL", type: "email", placeholder: "Email", half: false },
            { id: "queries", label: "YOUR QUERIES", type: "textarea", placeholder: "Your queries", half: false },
        ],
        submitLabel: "Submit",
        image: "/images/service 4.jpg",
        imageBadge: "The Revenue Gap",
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomeContactSection() {
    return (
        <div className="font-outfit">
            {/* ── CTA Banner ── */}
            <section
                className="w-full py-28 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
                style={{
                    backgroundImage: "url('/images/hero2nd.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#0C3318",
                }}
            >
                {/* Dark overlay to keep text readable over photo */}
                <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,30,14,0.82)" }} />
                <div className="relative z-10 container mx-auto max-w-3xl flex flex-col items-center">
                    <h2 className="font-cormorant text-5xl sm:text-6xl lg:text-[72px] font-medium text-white leading-[1.08] mb-6">
                        {homeContactData.cta.line1} <br />
                        <span className="text-[#C8920A] italic">{homeContactData.cta.line2Highlight}</span> <br />
                        {homeContactData.cta.line3}
                    </h2>
                    <p className="text-white/65 text-[15px] leading-relaxed max-w-xl mb-10 font-outfit">
                        {homeContactData.cta.body}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {homeContactData.cta.buttons.map((btn) =>
                            btn.primary ? (
                                <Link
                                    key={btn.label}
                                    href={btn.href}
                                    className="inline-flex items-center gap-3 bg-[#1A6B3A] hover:bg-[#155a30] text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all font-outfit border border-[#1A6B3A]"
                                >
                                    {btn.label}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                    </svg>
                                </Link>
                            ) : (
                                <Link
                                    key={btn.label}
                                    href={btn.href}
                                    className="inline-flex items-center gap-3 bg-transparent hover:bg-white/10 text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all font-outfit border border-white/30"
                                >
                                    {btn.label}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                    </svg>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* ── Get in Touch Card ── */}
            <section className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FFFDF5" }}>
                <div className="container mx-auto max-w-5xl">
                    <div
                        className="rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row"
                        style={{ minHeight: "480px" }}
                    >
                        {/* Left: dark green form */}
                        <div
                            className="w-full lg:w-[44%] p-8 sm:p-10 flex flex-col"
                            style={{ backgroundColor: "#0C3318" }}
                        >
                            <h3 className="font-cormorant text-[38px] font-medium mb-8" style={{ color: "#C8920A" }}>
                                {homeContactData.form.heading}
                            </h3>

                            <form className="flex flex-col gap-4 flex-1">
                                {/* Name row */}
                                <div className="grid grid-cols-2 gap-3">
                                    {homeContactData.form.fields
                                        .filter((f) => f.half)
                                        .map((field) => (
                                            <div key={field.id}>
                                                <label className="block text-[9px] font-bold tracking-widest mb-1.5 font-outfit" style={{ color: "rgba(255,255,255,0.5)" }}>
                                                    {field.label}
                                                </label>
                                                <input
                                                    type={field.type}
                                                    id={field.id}
                                                    name={field.id}
                                                    placeholder={field.placeholder}
                                                    className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-[#C8920A]/50 font-outfit"
                                                    style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                                                />
                                            </div>
                                        ))}
                                </div>

                                {/* Full-width fields */}
                                {homeContactData.form.fields
                                    .filter((f) => !f.half)
                                    .map((field) => (
                                        <div key={field.id}>
                                            <label className="block text-[9px] font-bold tracking-widest mb-1.5 font-outfit" style={{ color: "rgba(255,255,255,0.5)" }}>
                                                {field.label}
                                            </label>
                                            {field.type === "textarea" ? (
                                                <textarea
                                                    id={field.id}
                                                    name={field.id}
                                                    placeholder={field.placeholder}
                                                    rows={4}
                                                    className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-[#C8920A]/50 resize-none font-outfit"
                                                    style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                                                />
                                            ) : (
                                                <input
                                                    type={field.type}
                                                    id={field.id}
                                                    name={field.id}
                                                    placeholder={field.placeholder}
                                                    className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-[#C8920A]/50 font-outfit"
                                                    style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                                                />
                                            )}
                                        </div>
                                    ))}

                                {/* Submit */}
                                <div className="mt-auto pt-2">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-3 bg-[#1A6B3A] hover:bg-[#155a30] text-white font-bold text-sm px-6 py-3 rounded-lg transition-all font-outfit"
                                    >
                                        {homeContactData.form.submitLabel}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right: image with badge */}
                        <div className="w-full lg:w-[56%] relative min-h-[320px] lg:min-h-0">
                            <Image
                                src={homeContactData.form.image}
                                alt="Get in touch with MeBilling"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 56vw"
                            />
                            {/* Revenue Gap badge — bottom right */}
                            <div className="absolute bottom-5 right-5">
                                <span className="inline-flex items-center gap-2 bg-[#0C3318] text-white text-[12px] font-bold px-4 py-2.5 rounded-full font-outfit shadow-lg">
                                    <span className="w-2 h-2 rounded-full bg-[#C8920A]" />
                                    {homeContactData.form.imageBadge}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
