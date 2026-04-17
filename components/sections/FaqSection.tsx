"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
    {
        question: "What medical billing services do you offer?",
        answer:
            "We provide end-to-end medical billing services, including patient eligibility verification, medical coding, claim submission, payment posting, denial management, and accounts receivable follow-up.",
    },
    {
        question: "How can your services improve my revenue?",
        answer:
            "We reduce denials, speed up claim cycles, and improve collection workflows so you can increase cash flow and overall revenue performance.",
    },
    {
        question: "Do you work with all medical specialties?",
        answer:
            "Yes. Our team supports a wide range of medical specialties with tailored workflows and compliance-first billing processes.",
    },
    {
        question: "Senior-Level Representation and Expert Partner-Led Execution at Every Stage",
        answer:
            "You get dedicated experts who oversee every step of your billing process for consistent performance and accountability.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20">
            <div className="absolute inset-0">
                <Image
                    src="/images/hexagon pattern.png"
                    alt=""
                    fill
                    className="object-cover opacity-30"
                    sizes="100vw"
                />
            </div>

            <div className="relative z-10 container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                        Frequently Asked <span className="text-brand">Questions</span>
                    </h2>
                    <p className="mt-3 text-sm text-slate-600 sm:text-base">
                        Combining senior-led expertise with a global network of vetted buyers, we ensure your exit is
                        as rewarding as the business you&apos;ve built.
                    </p>
                </div>

                <div className="mt-10 space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={faq.question}
                                className={`rounded-xl border ${isOpen ? "border-[#15ABD5]" : "border-[#15ABD540]"
                                    } bg-white/90 px-5 py-4 shadow-[0_14px_30px_rgba(15,23,42,0.08)]`}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFaq(index)}
                                    className="flex w-full items-center justify-between gap-4 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-sm font-semibold text-slate-900 sm:text-base">
                                        {faq.question}
                                    </span>
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#15ABD5] text-[#15ABD5]">
                                        {isOpen ? "-" : "+"}
                                    </span>
                                </button>

                                {isOpen ? (
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
