import Image from "next/image";
import Link from "next/link";

const steps = [
    {
        step: "Step 1",
        title: "Discovery",
        subtitle: "Assessment & Preparation",
        description:
            "We review your current workflows, identify gaps, and define the best-fit RCM strategy for your practice.",
        icon: "/images/process 1.png",
    },
    {
        step: "Step 2",
        title: "Planning",
        subtitle: "Tailored Roadmap",
        description:
            "Your onboarding plan is mapped with timelines, data requirements, and measurable targets.",
        icon: "/images/process 2.png",
    },
    {
        step: "Step 3",
        title: "Implementation",
        subtitle: "System Setup",
        description:
            "We configure integrations, train staff, and ensure a smooth transition with minimal disruption.",
        icon: "/images/process 3.png",
    },
    {
        step: "Step 4",
        title: "Optimization",
        subtitle: "Active Follow-Up",
        description:
            "Claims are monitored, denials are resolved, and performance is continuously improved.",
        icon: "/images/process 4.png",
    },
    {
        step: "Step 5",
        title: "Reporting",
        subtitle: "Transparent Results",
        description:
            "Clear dashboards and KPI reporting keep you in control of cash flow and outcomes.",
        icon: "/images/process 5.png",
    },
];

export default function ProcessSection() {
    return (
        <section className="w-full bg-[#E6F6FB] py-16 sm:py-20">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
                    <div className="max-w-xl lg:text-left">
                        <h2 className="text-3xl font-semibold text-slate-800 sm:text-4xl">
                            Our <span className="text-brand">Process</span>
                        </h2>

                    </div>
                    <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-700 sm:text-base lg:mx-0">
                        MeBilling provides cost-effective, HIPAA-compliant medical billing support for doctor offices,
                        group practices, and independent billers. Our process keeps your team aligned and your revenue
                        on track.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
                    {steps.map((step) => (
                        <article key={step.title} className="flex h-full flex-col items-center text-center lg:items-start lg:text-left">
                            <div className="flex h-25 w-25 items-center justify-center rounded-2xl bg-[#09A8D4] shadow-[0_12px_24px_rgba(9,168,212,0.25)]">
                                <Image src={step.icon} alt={step.title} width={80} height={80} />
                            </div>
                            <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#333333]">
                                {step.step}
                            </span>
                            <h3 className="mt-2 text-lg font-semibold text-slate-800">
                                {step.title}
                            </h3>
                            <p className="mt-2 text-sm font-semibold text-slate-700">
                                {step.subtitle}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                {step.description}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <Link
                        href="/tour"
                        className="group inline-flex items-center gap-3 rounded-full border border-[#09A8D4] px-6 py-3 text-sm font-semibold text-[#09A8D4] shadow-[0_10px_20px_rgba(9,168,212,0.15)] transition hover:-translate-y-0.5 hover:bg-[#09A8D4] hover:text-white"
                    >
                        Take a quick tour
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09A8D4] text-white transition group-hover:bg-white group-hover:text-[#09A8D4]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M9 7H17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
