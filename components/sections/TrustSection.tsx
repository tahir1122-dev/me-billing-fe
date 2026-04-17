import Image from "next/image";

const stats = [
    {
        icon: "/images/Icon.svg",
        value: "99%",
        title: "First-Pass Claim Acceptance",
        description:
            "Accurate coding and intelligent claim validation ensure approvals on the first submission.",
    },
    {
        icon: "/images/Icon%20(1).svg",
        value: "+5%",
        title: "Lower AR",
        description: "Shorten your AR cycle with proactive follow-ups.",
    },
    {
        icon: "/images/Frame.svg",
        value: "32%",
        title: "More Revenue",
        description: "Optimize reimbursements, reduce missed charges.",
    },
    {
        icon: "/images/Group.svg",
        value: "55%",
        title: "Lower Operational Costs",
        description:
            "Accurate coding and intelligent claim validation ensure approvals on the first submission.",
    },
];

export default function TrustSection() {
    return (
        <section className="w-full bg-white py-16 sm:py-20">
            <div className="container mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-slate-800 sm:text-4xl">
                        Why Providers Trust <span className="text-brand">me billing</span> system
                    </h2>
                    <p className="mt-3 text-base text-slate-600 sm:text-lg">
                        AI-driven reconciliation. 98% faster collections.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item) => (
                        <div
                            key={item.title}
                            className="w-full rounded-2xl bg-white px-6 py-6 shadow-[0_0_25px_2px_rgba(0,0,0,0.1)]"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#1BDCB6]/10">
                                    <Image src={item.icon} alt="" width={30} height={30} />
                                </div>
                                <div className="text-brand text-right font-bold text-4xl sm:text-5xl">
                                    {item.value}
                                </div>
                            </div>
                            <h3 className="mt-4 text-sm font-semibold text-slate-900 sm:text-base">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <a
                        href="/tour"
                        className="group flex items-center gap-3 rounded-full border-2 border-brand px-7 py-3 text-base font-semibold text-brand transition hover:bg-brand/5"
                    >
                        Take a quick tour
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white transition-transform group-hover:rotate-45">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
