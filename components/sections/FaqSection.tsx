"use client";

import { useState } from "react";
import Image from "next/image";

const faqData = {
    heading: "Frequently Asked",
    headingHighlight: "Questions",
    subtext: "Combining senior-led expertise with a global network of vetted buyers, we ensure your exit is as rewarding as the business you've built.",
    faqs: [
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
    ]
};

export default function FaqSection({ data = {} }: { data?: any }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const content = { ...faqData, ...data };

    const toggleFaq = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 font-outfit">
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
                    <h2 className="text-3xl md:text-5xl font-medium text-[#162018] leading-tight font-cormorant mb-4">
                        {content.heading} <span className="text-[#C8920A] italic">{content.headingHighlight}</span>
                    </h2>
                    <p className="mt-3 text-[15px] max-w-xl mx-auto font-outfit text-slate-500">
                        {content.subtext}
                    </p>
                </div>

                <div className="mt-10 space-y-4">
                    {content.faqs.map((faq: any, index: number) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={faq.question}
                                className={`rounded-xl border ${isOpen ? "border-[#C8920A]" : "border-[#082610]/12"
                                    } bg-white/90 px-5 py-4 shadow-[0_14px_30px_rgba(15,23,42,0.08)]`}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFaq(index)}
                                    className="flex w-full items-center justify-between gap-4 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-sm font-semibold text-[#162018] sm:text-base font-outfit">
                                        {faq.question}
                                    </span>
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C8920A] text-[#C8920A]">
                                        {isOpen ? "-" : "+"}
                                    </span>
                                </button>

                                {isOpen ? (
                                    <p className="mt-3 text-[13px] leading-relaxed text-slate-500 font-outfit">{faq.answer}</p>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
