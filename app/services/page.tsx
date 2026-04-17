import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import TourSection from "@/components/sections/TourSection";

export const metadata: Metadata = {
    title: "Services | Me Billing",
};

const services = [
    {
        image: "/images/service 1.jpg",
        tag: "EMR",
        title: "Revenue Optimization",
        description:
            "We strengthen your financial performance through strategic pricing, smarter workflows, and data-driven insights that maximize revenue potential.",
    },
    {
        image: "/images/service 2.jpg",
        tag: "EMR",
        title: "Medical Billing & Coding",
        description:
            "Certified billing specialists and coders ensure accuracy, compliance, and improved claim acceptance rates.",
    },
    {
        image: "/images/service 3.jpg",
        tag: "EMR",
        title: "Medical Practice Analytics",
        description:
            "Real-time reporting and performance insights help you understand trends, identify gaps, and make smarter financial decisions.",
    },
    {
        image: "/images/service 4.jpg",
        tag: "EMR",
        title: "Credentialing & Contracting",
        description:
            "We manage provider enrollment and payer contracts to ensure compliance, smooth approvals, and optimized reimbursement agreements.",
    },
    {
        image: "/images/doc 2.png",
        tag: "EMR",
        title: "Patient Eligibility Checks",
        description:
            "Verify coverage early to reduce denials, streamline intake, and accelerate collections with accurate eligibility checks.",
    },
    {
        image: "/images/Hero .jpg",
        tag: "EMR",
        title: "Claims Follow-up",
        description:
            "Dedicated follow-up keeps claims moving, shortens payment cycles, and strengthens your overall cash flow.",
    },
];

export default function ServicesPage() {
    return (
        <main className="flex-1 w-full bg-white">
            <section className="relative flex min-h-[460px] w-full items-center overflow-hidden bg-[#09A8D4] py-20 sm:min-h-[440px] sm:py-28">
                <div className="absolute inset-0">
                    <Image
                        src="/images/sevice bg.jpg"
                        alt=""
                        fill
                        className="object-cover opacity-60"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#09A8D4]/80" />
                </div>
                <div className="relative z-10 container mx-auto max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-semibold sm:text-4xl">Our Services</h1>
                    <p className="mt-3 text-sm text-white/90 sm:text-base">
                        Smart, secure billing solutions built for doctors, clinics, and healthcare teams.
                    </p>
                </div>
            </section>

            <section className="w-full bg-white py-16 sm:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {services.map((service) => (
                            <article
                                key={service.title}
                                className="rounded-2xl border border-[#00495233] bg-[#F9F7FC] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                            >
                                <div className="relative overflow-hidden rounded-2xl">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={640}
                                        height={360}
                                        className="h-56 w-full object-cover"
                                    />
                                    <button
                                        type="button"
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                        aria-label={`Play ${service.title} video`}
                                    >
                                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/90 text-white shadow-lg backdrop-blur ring-8 ring-brand/20">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M5 3l14 9-14 9V3z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>

                                <div className="mt-4">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                                        {service.tag}
                                    </span>
                                    <h3 className="mt-2 text-lg font-semibold text-slate-900">{service.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center gap-3 rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand/5"
                                    >
                                        Explore More
                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/10">
                                            <Image src="/images/service iocn.svg" alt="" width={30} height={20} />
                                        </span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <TourSection />
        </main>
    );
}
