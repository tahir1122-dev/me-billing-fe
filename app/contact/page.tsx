import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
    title: "Contact | Me Billing",
    description: "Let's Talk About What Your Revenue Cycle Should Be Doing."
};

export default function ContactPage() {
    return (
        <main className="flex-1 w-full bg-gradient-to-b from-[#FFFDF5] via-[#FFFDF5]/95 to-[#FFFDF5] font-outfit">
            {/* Top Hero Section — full-bleed background image matching reference screenshot */}
            <section
                className="relative w-full overflow-hidden py-24 lg:py-36 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage: "url('/images/ContactSection.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#162018",
                }}
            >
                {/* Deep gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#111A13]/95 via-[#111A13]/85 to-[#111A13]/70" />

                <div className="relative z-10 container mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-4 uppercase font-outfit">
                            — Contact MeBilling
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-[76px] font-medium text-white leading-[1.08] mb-6 font-cormorant">
                            Let's Talk About What <br />
                            Your Revenue Cycle <br />
                            <span className="text-[#C8920A] italic">Should Be Doing.</span>
                        </h1>
                        <p className="text-white/90 text-lg sm:text-[19px] leading-relaxed max-w-2xl font-medium font-outfit">
                            A direct conversation about where your billing process is performing, where it isn't, and what a partnership with MeBilling would actually look like for your practice.
                        </p>
                    </div>
                </div>
            </section>

            {/* Middle Section — 2-column layout matching screenshot */}
            <section className="relative w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* Left Column — Process steps */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-[#C8920A] font-bold tracking-wide text-xs font-outfit">— What to Expect</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-[44px] text-[#162018] font-medium leading-tight mb-2 font-cormorant">
                                A Structured Process.
                            </h2>
                            <p className="text-3xl sm:text-4xl md:text-[44px] text-[#C8920A] italic font-medium leading-tight mb-10 font-cormorant">
                                No Pressure.
                            </p>

                            <div className="flex flex-col gap-6 mb-10">
                                {[
                                    { n: "1", title: "One-business-day response", desc: "– from a real team member, not a form acknowledgement." },
                                    { n: "2", title: "A focused 30-minute consultation", desc: "on your practice type, billing environment, and current pain points." },
                                    { n: "3", title: "Honest assessment", desc: "of your denial patterns, A/R aging, and where revenue gaps most likely sit." },
                                    { n: "4", title: "Candid discussion", desc: "of where MeBilling can make a measurable impact – and where we can't." },
                                    { n: "5", title: "Transition plan", desc: "designed to be operationally invisible to your clinical staff from day one." },
                                ].map((step) => (
                                    <div key={step.n} className="flex gap-4 items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EDE8D8] text-[#C8920A] flex items-center justify-center font-bold text-sm font-outfit">
                                            {step.n}
                                        </div>
                                        <p className="text-slate-600 text-[15px] pt-1 font-outfit leading-relaxed">
                                            <strong className="text-[#162018] font-semibold">{step.title}</strong> {step.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Quote box — gold left border matching screenshot */}
                            <div className="border-l-4 border-[#C8920A] bg-[#FBF6E9] rounded-r-lg px-5 py-4">
                                <p className="text-[#8B6914] text-[14.5px] leading-relaxed font-outfit italic">
                                    You've built a practice worth being paid for. MeBilling makes sure it is.
                                </p>
                            </div>
                        </div>

                        {/* Right Column — Dark green "Get in Touch" form card matching screenshot exactly */}
                        <div
                            className="rounded-2xl p-8 sm:p-10"
                            style={{ backgroundColor: "#0C3318" }}
                        >
                            <h3 className="text-[28px] font-medium mb-7 font-cormorant" style={{ color: "#C8920A" }}>
                                Get in Touch
                            </h3>

                            <ContactForm />
                        </div>
                    </div>

                    {/* Contact Info Bar — 3 items matching screenshot bottom row */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#18532D] flex items-center justify-center flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <span className="text-[#162018] font-semibold text-[15px] font-outfit">346-616-0008</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#18532D] flex items-center justify-center flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </div>
                            <a href="mailto:info@mebilling.com" className="text-[#162018] font-semibold text-[15px] font-outfit hover:text-[#18532D] transition-colors">
                                Info@mebilling.com
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#18532D] flex items-center justify-center flex-shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <span className="text-[#162018] font-semibold text-[15px] font-outfit leading-snug">
                                100 Glenborough Dr, Suite<br />400 Houston, TX 77067
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

// --- Icons ---
function MapPinIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A6B3A]">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A6B3A]">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A6B3A]">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

// --- Components ---
function ProcessStep({ number, title, description }: { number: string, title: string, description: string }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A6B3A]/10 text-[#1A6B3A] flex items-center justify-center font-bold text-sm font-outfit">
                {number}
            </div>
            <p className="text-slate-600 text-[15px] pt-1 font-outfit">
                <strong className="text-[#162018] font-semibold">{title}</strong> {description}
            </p>
        </div>
    );
}

function ContactInfoItem({ icon, label, value, isLink = false }: { icon: React.ReactNode, label: string, value: string, isLink?: boolean }) {
    return (
        <div className="flex gap-4 items-center">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1A6B3A]/10 flex items-center justify-center">
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-bold tracking-widest text-[#C8920A] uppercase mb-0.5 font-outfit">{label}</p>
                {isLink ? (
                    <a href={`mailto:${value}`} className="text-[#162018] font-semibold text-[15px] hover:text-[#1A6B3A] transition-colors font-outfit">{value}</a>
                ) : (
                    <p className="text-[#162018] font-semibold text-[15px] font-outfit">{value}</p>
                )}
            </div>
        </div>
    );
}
