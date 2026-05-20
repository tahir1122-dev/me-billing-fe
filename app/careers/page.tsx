import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import seoContent from "@/data/seo-content.json";

export const metadata: Metadata = {
    title: "Careers | Me Billing",
    description: "Join a Team That Treats Revenue Like It's Theirs. MeBilling is hiring credentialed professionals."
};

export default function CareersPage() {
    // Safely extract the dynamically mapped items from central JSON store nested scope
    const whyItems = (seoContent as any).about?.careersPage?.whyMeBilling || (seoContent as any).careersPage?.whyMeBilling || [];

    return (
        <main className="flex-1 w-full bg-gradient-to-b from-[#FFFDF5] via-[#FFFDF5]/95 to-[#FFFDF5] font-outfit">
            {/* Hero Section exactly matching the provided screenshot layout */}
            <div className="w-full relative overflow-hidden bg-[#162018] font-cormorant">
                {/* Full-width premium background image loaded flawlessly */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/carrersbg.png"
                        alt="Careers at MeBilling Background"
                        fill
                        className="object-cover opacity-65"
                        sizes="100vw"
                        priority
                    />
                    {/* Deep gradient overlay to improve text readability and match site visual system */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111A13]/95 via-[#111A13]/85 to-[#111A13]/70 backdrop-blur-[1px]" />
                </div>

                {/* Hero Foreground Content exactly reflecting the screenshot */}
                <section className="relative z-10 w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-8 container mx-auto max-w-7xl text-white">
                    <div className="max-w-3xl font-outfit">
                        <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-3 uppercase font-outfit">
                            — Careers at MeBilling
                        </span>
                        <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-medium text-white leading-[1.08] mb-6 font-cormorant">
                            Join a Team That <br />
                            <span className="text-[#C8920A] italic">Treats Revenue Like It's Theirs.</span>
                        </h1>
                        <p className="text-white/95 text-lg sm:text-[19px] leading-relaxed max-w-3xl font-medium mb-10 font-outfit">
                            MeBilling is a growing, U.S.-based healthcare RCM firm where certified billing specialists, coders, and account managers do meaningful, high-impact work – and where their expertise is genuinely valued.
                        </p>

                        {/* Action buttons styled with premium tokens preserved cleanly in document flow */}
                        <div className="flex flex-wrap items-center gap-4 font-outfit">
                            <Link href="#openings" className="px-8 py-3.5 rounded-full bg-[#C8920A] hover:bg-[#b58308] text-black font-bold text-sm transition-all shadow-md shadow-[#C8920A]/10">
                                View Open Roles
                            </Link>
                            <Link href="/resume" className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold text-sm transition-all">
                                Send Us Your Resume
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            {/* WHY MEBILLING Section - matching reference screenshot layout exactly */}
            <section className="w-full py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    {/* Header matching reference: "— Professional Billing" style tagline */}
                    <div className="mb-12">
                        <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-3 font-outfit">
                            — Professional Billing
                        </span>
                        <h2 className="text-4xl sm:text-[48px] text-[#162018] font-medium leading-tight font-cormorant mb-4">
                            Physician &amp; Specialty <span className="text-[#C8920A] italic font-medium">Group Billing</span>
                        </h2>
                        <p className="text-slate-600 text-[15px] leading-relaxed max-w-2xl font-outfit">
                            15 professional billing specialties — each with a dedicated team that codes exclusively within that clinical discipline. No rotations, no generalists, no shared queues.
                        </p>
                    </div>

                    {/* 3×2 grid exactly replicating screenshot cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="p-8 bg-[#FCFBF5] border border-[#1A6B3A]/20 rounded-2xl flex flex-col hover:shadow-md transition-all duration-300 font-outfit">
                            <div className="mb-5">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1A6B3A]">
                                    <circle cx="20" cy="14" r="7" stroke="currentColor" strokeWidth="1.5"/>
                                    <circle cx="20" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M13 21L10 34L20 30L30 34L27 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 21L14 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M24 21L26 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 className="text-[19px] font-semibold text-[#162018] mb-3 font-cormorant leading-tight">Certified Expertise Valued</h3>
                            <p className="text-slate-500 text-[14px] leading-relaxed font-outfit">We invest in CPMA, CPC, and AAPC certifications for our team – and we structure roles to use that expertise, not bury it in administrative overhead</p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 bg-[#FCFBF5] border border-[#1A6B3A]/20 rounded-2xl flex flex-col hover:shadow-md transition-all duration-300 font-outfit">
                            <div className="mb-5">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1A6B3A]">
                                    <path d="M20 8C17 8 14 10 14 14C14 17 16 19.5 18 21L18 24L22 24L22 21C24 19.5 26 17 26 14C26 10 23 8 20 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                                    <path d="M18 24H22V27H18V24Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                                    <path d="M18 27H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <circle cx="28" cy="24" r="4" stroke="currentColor" strokeWidth="1.5"/>
                                    <circle cx="12" cy="24" r="4" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M16 24H24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5"/>
                                </svg>
                            </div>
                            <h3 className="text-[19px] font-semibold text-[#162018] mb-3 font-cormorant leading-tight">Specialty Depth</h3>
                            <p className="text-slate-500 text-[14px] leading-relaxed font-outfit">You will work within a specialty – oncology, behavioural health, cardiology – and develop deep domain knowledge that makes you genuinely better at your discipline.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 bg-[#FCFBF5] border border-[#1A6B3A]/20 rounded-2xl flex flex-col hover:shadow-md transition-all duration-300 font-outfit">
                            <div className="mb-5">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1A6B3A]">
                                    <circle cx="20" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                                    <circle cx="10" cy="28" r="4" stroke="currentColor" strokeWidth="1.5"/>
                                    <circle cx="30" cy="28" r="4" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M20 16V22M20 22L10 24M20 22L30 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-[19px] font-semibold text-[#162018] mb-3 font-cormorant leading-tight">Real Accountability, Real Autonomy</h3>
                            <p className="text-slate-500 text-[14px] leading-relaxed font-outfit">Our team members own their accounts. You are the point of contact, the expert, and the person who makes the difference for a real practice every day.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="p-8 bg-[#FCFBF5] border border-[#1A6B3A]/20 rounded-2xl flex flex-col hover:shadow-md transition-all duration-300 font-outfit">
                            <div className="mb-5">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1A6B3A]">
                                    <circle cx="20" cy="28" r="5" stroke="currentColor" strokeWidth="1.5"/>
                                    <circle cx="20" cy="28" r="1.5" fill="currentColor"/>
                                    <path d="M20 8V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M14 14L20 8L26 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 32C12 30 15 28 20 28C25 28 28 30 28 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M8 36C8 34 13 32 20 32C27 32 32 34 32 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 className="text-[19px] font-semibold text-[#162018] mb-3 font-cormorant leading-tight">Growth Without a Ceiling</h3>
                            <p className="text-slate-500 text-[14px] leading-relaxed font-outfit">From credentialing specialist to director of operations – we promote from within and build career paths around the skills our team members develop.</p>
                        </div>

                        {/* Card 5 */}
                        <div className="p-8 bg-[#FCFBF5] border border-[#1A6B3A]/20 rounded-2xl flex flex-col hover:shadow-md transition-all duration-300 font-outfit">
                            <div className="mb-5">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1A6B3A]">
                                    <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5"/>
                                    <circle cx="26" cy="14" r="5" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M6 32C6 27 9.5 24 14 24C18.5 24 22 27 22 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M22 28C22 26 24 24 26 24C30.5 24 34 27 34 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 className="text-[19px] font-semibold text-[#162018] mb-3 font-cormorant leading-tight">Collaborative Culture</h3>
                            <p className="text-slate-500 text-[14px] leading-relaxed font-outfit">Small enough to know every colleague. Structured enough to have clear roles. Growing fast enough that high performers get noticed quickly.</p>
                        </div>

                        {/* Card 6 */}
                        <div className="p-8 bg-[#FCFBF5] border border-[#1A6B3A]/20 rounded-2xl flex flex-col hover:shadow-md transition-all duration-300 font-outfit">
                            <div className="mb-5">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1A6B3A]">
                                    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M8 20H32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M20 8C20 8 15 13 15 20C15 27 20 32 20 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M20 8C20 8 25 13 25 20C25 27 20 32 20 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M9.5 13H30.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M9.5 27H30.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 className="text-[19px] font-semibold text-[#162018] mb-3 font-cormorant leading-tight">U.S. Operations + Global Delivery</h3>
                            <p className="text-slate-500 text-[14px] leading-relaxed font-outfit">Houston HQ with two global delivery centers. Opportunities for professionals at multiple levels across our operational footprint.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Openings Section */}
            <section id="openings" className="w-full py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50">
                <div className="container mx-auto max-w-5xl">
                    <div className="mb-12 font-outfit">
                        <span className="text-[#1A6B3A] font-bold tracking-wide text-xs block mb-3 font-outfit">
                            — Open Positions
                        </span>
                        <h2 className="text-4xl sm:text-5xl text-[#162018] font-medium leading-tight font-cormorant">
                            Current <span className="text-[#C8920A] italic font-medium">Openings</span>
                        </h2>
                    </div>

                    <div className="mt-12 flex flex-col gap-5">
                        <JobCard
                            department="Billing & Coding"
                            title="Certified Professional Coder (CPC)"
                            tags={["Full-Time", "Houston, TX / Remote", "Multi-Specialty"]}
                        />
                        <JobCard
                            department="Billing & Coding"
                            title="Medical Coding Auditor (CPMA)"
                            tags={["Full-Time", "Houston, TX", "Compliance"]}
                        />
                        <JobCard
                            department="Revenue Operations"
                            title="A/R Follow-Up Specialist"
                            tags={["Full-Time", "Remote Available", "Denial Management"]}
                        />
                        <JobCard
                            department="Account Management"
                            title="Client Account Manager - RCM"
                            tags={["Full-Time", "Houston, TX", "Client Facing"]}
                        />
                        <JobCard
                            department="Credentialing"
                            title="Provider Credentialing Specialist"
                            tags={["Full-Time", "Houston, TX / Remote", "Multi-Payer"]}
                        />
                        <JobCard
                            department="Dispute Resolution"
                            title="IDR & Appeals Specialist"
                            tags={["Full-Time", "Houston, TX", "NSA / Payer Disputes"]}
                        />
                        <JobCard
                            department="Operations"
                            title="Payment Posting & Reconciliation Associate"
                            tags={["Full-Time", "Remote Available", "ERA Processing"]}
                        />
                    </div>

                </div>
            </section>


        </main>
    );
}

// --- Reusable Components ---

interface JobCardProps {
    department: string;
    title: string;
    tags: string[];
}

function JobCard({ department, title, tags }: JobCardProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 bg-[#FCFBF5] border border-[#082610]/15 rounded-2xl shadow-sm hover:shadow-md hover:border-[#082610]/30 transition-all duration-300 group font-outfit">
            <div>
                <p className="text-[#C8920A] text-xs font-bold mb-2 font-outfit">{department}</p>
                <h3 className="text-xl sm:text-2xl font-medium text-[#162018] mb-4 group-hover:text-[#1A6B3A] transition-colors font-cormorant">{title}</h3>
                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="bg-[#1A6B3A]/5 text-[#1A6B3A] text-xs font-semibold px-3 py-1 rounded-md font-outfit">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="shrink-0">
                <Link href={`/resume?job=${encodeURIComponent(title)}`} className="w-full md:w-auto px-6 py-2.5 rounded-lg border border-[#C8920A] text-[#C8920A] font-bold text-sm hover:bg-[#C8920A] hover:text-white transition-all font-outfit inline-block text-center">
                    Apply now
                </Link>
            </div>
        </div>
    );
}
