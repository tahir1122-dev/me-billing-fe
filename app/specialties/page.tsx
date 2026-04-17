import Image from "next/image";
import type { Metadata } from "next";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
    title: "Our Specialties | Me Billing",
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
const topSpecialties = [
    { icon: "/images/public icon .png", label: "Public Health" },
    { icon: "/images/Oncology.png", label: "Oncology" },
    { icon: "/images/gyne.png", label: "OB/GYN" },
    { icon: "/images/cardio.png", label: "Cardiology" },
];

const bottomSpecialties = [
    { icon: "/images/Dermatology.png", label: "Dermatology" },
    { icon: "/images/Internal Medicine.png", label: "Internal Medicine" },
    { icon: "/images/Urgent Care.png", label: "Urgent Care" },
    { icon: "/images/General Surgery.png", label: "General Surgery" },
];

const additionalSpecialties = [
    { icon: "/images/Hand Surgery.png", label: "Hand Surgery" },
    { icon: "/images/Infection.png", label: "Infectious Disease" },
    { icon: "/images/Neurology.png", label: "Neurology" },
    { icon: "/images/Orthopedics.png", label: "Orthopedics" },
    { icon: "/images/Otolaryngology.png", label: "Otolaryngology" },
    { icon: "/images/Pediatrics.png", label: "Pediatrics" },
    { icon: "/images/Pain Management.png", label: "Pain Management" },
    { icon: "/images/Ophthalmology.png", label: "Ophthalmology" },
];

export default function SpecialtiesPage() {
    return (
        <main className="flex-1 w-full bg-white">
            <section className="relative flex h-[460px] w-full items-center overflow-hidden bg-[#09A8D4] py-16 sm:py-20">
                <div className="absolute inset-0">
                    <Image
                        src="/images/sevice bg.jpg"
                        alt=""
                        fill
                        className="object-cover opacity-60"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#09A8D4]/40" />
                </div>
                <div className="relative z-10 container mx-auto max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-semibold sm:text-4xl">Our Specialties</h1>
                    <p className="mt-3 text-sm text-white/90 sm:text-base">
                        Our specialty-specific billing services and platform enables you to practice seamlessly allowing
                        you to deliver the best possible care to your patients
                    </p>
                </div>
            </section>

            <section className="w-full bg-white py-16 sm:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {topSpecialties.map((item, index) => (
                            <article
                                key={item.label}
                                className={`relative flex flex-col items-center gap-4 rounded-[16px] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] ${index === 0 ? "bg-[#E6F6FB]" : "bg-white"
                                    }`}
                            >
                                <Image src={item.icon} alt="" width={140} height={140} />
                                <h3 className="text-sm font-semibold text-slate-800">{item.label}</h3>
                                <Image
                                    src="/images/Card Icon .svg"
                                    alt=""
                                    width={18}
                                    height={18}
                                    className="absolute bottom-4 left-4"
                                />
                            </article>
                        ))}
                    </div>

                    <div className="mt-10">
                        <h2 className="text-lg font-semibold text-slate-900">Public Health</h2>
                        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600">
                            Public health focuses on improving the health and well-being of entire communities rather
                            than individual patients. It involves preventing diseases, promoting healthy lifestyles,
                            and ensuring access to essential healthcare services. Through research, education, and
                            policy, public health helps create safer and healthier environments for everyone.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {bottomSpecialties.map((item) => (
                            <article
                                key={item.label}
                                className="relative flex flex-col items-center gap-4 rounded-[16px] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                            >
                                <Image src={item.icon} alt="" width={140} height={140} />
                                <h3 className="text-sm font-semibold text-slate-800">{item.label}</h3>
                                <Image
                                    src="/images/Card Icon .svg"
                                    alt=""
                                    width={18}
                                    height={18}
                                    className="absolute bottom-4 left-4"
                                />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#E6F6FB] py-16 sm:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {additionalSpecialties.map((item) => (
                            <article
                                key={item.label}
                                className="relative flex flex-col items-center gap-4 rounded-[16px] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                            >
                                <Image src={item.icon} alt="" width={140} height={140} />
                                <h3 className="text-sm font-semibold text-slate-800">{item.label}</h3>
                                <Image
                                    src="/images/Card Icon .svg"
                                    alt=""
                                    width={18}
                                    height={18}
                                    className="absolute bottom-4 left-4"
                                />
                            </article>
                        ))}
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
