import Image from "next/image";
import Link from "next/link";

const arrowIcon = (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.7513 20.4173L22.168 14.0007L15.7513 7.58399M20.7096 14.0007L5.54297 14.0007"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="square"
        />
    </svg>
);

export default function ContactSection() {
    return (
        <section className="w-full bg-white py-16 sm:py-20">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid overflow-hidden rounded-[28px] bg-[#222E34] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
                    <div className="p-8 sm:p-10">
                        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Get in Touch</h2>

                        <form className="mt-8 space-y-5">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="text-xs font-semibold uppercase tracking-wide text-white/80">
                                    First Name
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="mt-2 w-full rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
                                    />
                                </label>
                                <label className="text-xs font-semibold uppercase tracking-wide text-white/80">
                                    Last Name
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="mt-2 w-full rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
                                    />
                                </label>
                            </div>

                            <label className="text-xs font-semibold uppercase tracking-wide text-white/80">
                                Business Email
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="mt-2 w-full rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
                                />
                            </label>

                            <label className="text-xs font-semibold uppercase tracking-wide text-white/80">
                                Your Queries
                                <textarea
                                    name="message"
                                    placeholder="Your queries"
                                    rows={4}
                                    className="mt-2 w-full resize-none rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
                                />
                            </label>


                            <div className="flex items-center">
                                <Link
                                    href="/sales"
                                    className="group hidden md:flex items-center justify-center gap-3 bg-brand hover:bg-[#009bc2] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md shadow-brand/20 hover:shadow-brand/40"
                                >
                                    Submit                            <div className="bg-white rounded-full p-1.5 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                                            <path d="M5 12h14"></path>
                                            <path d="m12 5 7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </Link>

                                <button className="md:hidden ml-4 text-slate-800 hover:text-brand">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="relative min-h-[280px]">
                        <Image
                            src="/images/contact.jpg"
                            alt="Contact"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
