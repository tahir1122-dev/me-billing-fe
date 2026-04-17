import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sales | Me Billing",
};

const features = [
    "Get tailored pricing information",
    "Explore our intuitive EHR and practice management software",
    "Discover how 42K+ practices have simplified their workflows",
];

const contactItems = [
    { icon: "/images/call.svg", text: "0092346616008" },
    { icon: "/images/Icons.svg", text: "info@mebilling.com" },
    { icon: "/images/loc.svg", text: "100 Glenborough Dr, Suite 400 Houston, TX 77067" },
];

export default function SalesPage() {
    return (
        <main className="flex-1 w-full bg-white">
            <section className="w-full bg-[#15ABD5] py-16 sm:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
                        <div className="text-white">
                            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
                                Get a personalized
                                <br />
                                demo of mebilling
                            </h1>
                            <p className="mt-4 max-w-lg text-sm text-white/90 sm:text-base">
                                Streamline practice operations, enhance patient care, and boost your bottom line.
                            </p>

                            <ul className="mt-6 space-y-3 text-sm sm:text-base">
                                {features.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#15ABD5]">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                                            </svg>
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 space-y-3 text-sm text-white/90">
                                {contactItems.map((item) => (
                                    <div key={item.text} className="flex items-center gap-3">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                                            <Image src={item.icon} alt="" width={16} height={16} />
                                        </span>
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[28px] bg-white p-6 shadow-[0_30px_60px_rgba(15,23,42,0.2)] sm:p-8">
                            <h2 className="text-2xl font-semibold text-slate-900">Get in Touch</h2>
                            <form className="mt-6 space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                                        First Name
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#15ABD5] focus:outline-none"
                                        />
                                    </label>
                                    <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                                        Last Name
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#15ABD5] focus:outline-none"
                                        />
                                    </label>
                                </div>

                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                                    Business Email
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#15ABD5] focus:outline-none"
                                    />
                                </label>

                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                                    Your Queries
                                    <textarea
                                        name="message"
                                        placeholder="Your queries"
                                        rows={4}
                                        className="mt-2 w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#15ABD5] focus:outline-none"
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-3 rounded-full bg-[#15ABD5] px-6 py-3 text-sm font-semibold text-white"
                                >
                                    Submit
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
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
                                The 3 essential pillars of
                                <br />
                                <span className="text-brand">healthcare software</span>
                            </h2>
                            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-700 sm:text-base">
                                MeBilling is purpose-built to automate work, prioritize tasks, and eliminate errors.
                                Pervasive across the end-to-end software platform, our AI solutions drive efficiency
                                and yield meaningful results for healthcare providers.
                            </p>

                            <div className="mt-8 space-y-4">
                                {[
                                    "Deliver quality care",
                                    "Collect payments faster, effortlessly",
                                    "Top off your quality care experience",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center justify-between border-b border-slate-200 pb-3"
                                    >
                                        <span className="text-base font-semibold text-slate-800">{item}</span>
                                        <span className="text-xl text-brand">+</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative mx-auto h-[520px] w-full max-w-[800px] overflow-hidden rounded-[24px] sm:h-[600px]">
                                <Image
                                    src="/images/sales.png"
                                    alt="Sales preview"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 800px"
                                />
                                <button
                                    type="button"
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#15ABD5]/90 p-4 text-white shadow-[0_20px_40px_rgba(21,171,213,0.45)]"
                                    aria-label="Play video"
                                >
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M5 3l14 9-14 9V3z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white py-16 sm:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[28px] bg-[#E6F6FB] px-6 py-12 text-center sm:px-10">
                        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                            More than <span className="text-brand">42,000 practices</span> in the United States
                            <br />
                            are growing with mebilling. Now it&apos;s your turn.
                        </h2>
                        <p className="mt-3 text-sm text-slate-600 sm:text-base">Schedule a customized demo</p>

                        <div className="mt-10 grid gap-8 sm:grid-cols-3">
                            {[
                                { icon: "/images/growth.svg", text: "Pinpoint growth opportunities" },
                                { icon: "/images/gaps.svg", text: "Spot gaps in your online presence" },
                                { icon: "/images/hand shaek.svg", text: "No pressure, no commitment" },
                            ].map((item) => (
                                <div key={item.text} className="flex flex-col items-center gap-3">
                                    <Image src={item.icon} alt="" width={32} height={32} />
                                    <p className="text-sm font-semibold text-slate-700">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#15ABD5] bg-white px-6 py-2.5 text-sm font-semibold text-[#15ABD5]"
                        >
                            Take a quick tour
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#09A8D4]">
                                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24" cy="24" r="24" fill="#09A8D4" />
                                    <path
                                        d="M29.8032 27.0756L29.6175 18.003L20.5448 18.1888M28.6076 19.0551L18.1049 29.9968"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="square"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
