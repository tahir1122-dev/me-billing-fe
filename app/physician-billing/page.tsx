import Image from "next/image";
import type { Metadata } from "next";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
    title: "Physician Billing | Me Billing",
};

const arrowIcon = (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19.8032 17.0756L19.6175 8.00301L10.5448 8.18877M18.6076 9.0551L8.10494 19.9968"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="square"
        />
    </svg>
);

export default function PhysicianBillingPage() {
    return (
        <main className="flex-1 w-full ">
            <section className="relative flex min-h-[460px] w-full items-center overflow-hidden bg-[#09A8D4] py-16 sm:py-20">
                <div className="absolute inset-0">
                    <Image
                        src="/images/physical.jpg"
                        alt=""
                        fill
                        className="object-cover opacity-60"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#09A8D4]/70" />
                </div>
                <div className="relative z-10 container mx-auto max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-semibold sm:text-4xl">Physician Billing</h1>
                    <p className="mt-3 text-sm text-white/90 sm:text-base">
                        Smart, secure billing solutions built for doctors, clinics, and healthcare teams.
                    </p>
                </div>
            </section>

            <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20">
                <div className="pointer-events-none absolute inset-0">
                    <Image
                        src="/images/shape.png"
                        alt=""
                        width={2042}
                        height={1086}
                        className="shape-image"
                        priority={false}
                    />
                </div>

                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-start">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl font-semibold text-slate-800 sm:text-4xl">
                                Built for Modern
                                <br />
                                <span className="text-brand">Medical Practices</span>
                            </h2>
                            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-700 sm:text-base">
                                Every practice has unique challenges, from coding accuracy to payer requirements. Our
                                billing solutions are tailored specifically for physicians, helping reduce claim errors,
                                improve turnaround time, and increase overall revenue performance.
                            </p>
                            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-700 sm:text-base">
                                By combining experienced billing specialists with efficient processes, we ensure your
                                claims are handled correctly from the start, minimizing delays and maximizing
                                reimbursements.
                            </p>

                            <button
                                type="button"
                                className="mt-8 inline-flex items-center gap-4 rounded-full bg-[#15ABD5] px-6 py-3 text-sm font-semibold text-white"
                            >
                                Take a demo
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#15ABD5]">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative mx-auto h-[520px] w-full max-w-[800px] overflow-hidden rounded-[24px] sm:h-[600px]">
                                <Image
                                    src="/images/billing hub.png"
                                    alt="Billing hub dashboard"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 800px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#E6F6FB] pb-20 pt-4 sm:pb-28 sm:pt-6">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
                        <article className="rounded-[22px] border border-[#0049521F] bg-white p-5 shadow-[0_20px_40px_rgba(15,23,42,0.08)] sm:p-6">
                            <div className="overflow-hidden rounded-[18px]">
                                <Image
                                    src="/images/bussines women.jpg"
                                    alt="Billing specialist"
                                    width={560}
                                    height={420}
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                Practices outsourcing billing
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Mebilling connects you with trusted billing partners, so you can collect more without
                                handling claims yourself. You stay in your EHR. You keep full visibility over
                                performance and payments.
                            </p>
                        </article>

                        <div>
                            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                                End-to-End
                                <br />
                                <span className="text-brand">Physician Billing Support</span>
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
                                MeBilling is purpose-built to automate work, prioritize tasks, and eliminate errors.
                                Pervasive across the end-to-end software platform, our AI solutions drive efficiency
                                and yield meaningful results for healthcare providers.
                            </p>

                            <div className="mt-8 flex flex-col gap-4">
                                <button
                                    type="button"
                                    className="rounded-full border border-[#00495226] bg-transparent px-6 py-4 text-left text-base font-semibold text-slate-700"
                                >
                                    In-house billers
                                </button>
                                <button
                                    type="button"
                                    className="rounded-full border border-[#15ABD5] bg-[#9ED7EA] px-6 py-4 text-left text-base font-semibold text-slate-900"
                                >
                                    Practices outsourcing billing
                                </button>
                                <button
                                    type="button"
                                    className="rounded-full border border-[#00495226] bg-transparent px-6 py-4 text-left text-base font-semibold text-slate-700"
                                >
                                    Billing companies
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white py-16 sm:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                            Why Physicians Trust <span className="text-brand">Our Billing Services</span>
                        </h2>
                        <p className="mt-3 text-sm text-slate-600 sm:text-base">
                            Our goal is simple to help physicians operate more efficiently while increasing financial
                            performance without added stress.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-col items-center gap-12 sm:flex-row sm:flex-wrap sm:justify-center 2xl:flex-nowrap">
                        {[
                            "More time to focus on patient care",
                            "Faster reimbursements and improved cash flow",
                            "Fewer claim denials and billing errors",
                            "Full transparency with detailed reporting",
                            "Dedicated support from billing experts",
                        ].map((item, index) => {
                            const isBlue = index === 1 || index === 3;
                            const offsetClass = index % 2 === 0 ? "2xl:-translate-y-12" : "2xl:translate-y-10";
                            return (
                                <div key={item} className={`flex flex-col items-center ${offsetClass}`}>
                                    <div
                                        className={`flex h-[220px] w-[220px] items-center justify-center rounded-full p-5 text-center text-xs font-semibold text-slate-700 sm:h-[240px] sm:w-[240px] sm:text-sm lg:h-[250px] lg:w-[250px] ${isBlue ? "bg-[#E6F6FB]" : "bg-[#F9F9F9]"
                                            }`}
                                    >
                                        {item}
                                    </div>
                                    <span className="mt-6 h-10 w-px bg-slate-200" aria-hidden="true" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#15ABD5] py-16 sm:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                        <div className="order-1 text-left text-white">
                            <p className="text-lg font-semibold">Take a quick tour of</p>
                            <h2 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl">
                                mebilling EHR+ platform
                            </h2>
                            <p className="mt-4 max-w-lg text-sm text-white/90 sm:text-base">
                                See how our all-in-one EHR+ platform helps you save time, get paid faster, and grow your
                                practice.
                            </p>
                            <button
                                type="button"
                                className="mt-8 inline-flex items-center gap-4 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
                            >
                                Take a quick tour
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900">
                                    {arrowIcon}
                                </span>
                            </button>
                        </div>

                        <div className="order-2">
                            <Image
                                src="/images/EHR.png"
                                alt="MeBilling EHR dashboard"
                                width={860}
                                height={520}
                                className="h-auto w-full max-w-[620px]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            <FaqSection />
        </main>
    );
}
