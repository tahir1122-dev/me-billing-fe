import Image from "next/image";
import Link from "next/link";

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
];

export default function ServicesSection() {
    return (
        <section className="w-full bg-white py-16 sm:py-20">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-3xl font-semibold text-slate-800 sm:text-4xl  ">Our
                            <span className="text-brand ml-2">Services</span>
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                            MeBilling is committed to providing cost-effective and HIPAA-compliant medical billing
                            solutions to doctors offices, group practices, and individual billers.
                        </p>
                    </div>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#009bc2]"
                    >
                        All Services
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#FCFDFD" />
                                <path d="M29.8032 27.0756L29.6175 18.003L20.5448 18.1888M28.6076 19.0551L18.1049 29.9968" stroke="#222E34" stroke-width="2" stroke-linecap="square" />
                            </svg>

                        </span>
                    </Link>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
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
                                <span className="text-xs font-semibold uppercase tracking-wide text-brand">{service.tag}</span>
                                <h3 className="mt-2 text-lg font-semibold text-slate-900">{service.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
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
    );
}
