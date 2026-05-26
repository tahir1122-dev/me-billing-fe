"use client";

import { useState } from "react";

interface Pillar {
    title: string;
    content: string;
}

export default function SalesPillarsAccordion({ pillars }: { pillars: Pillar[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="mt-8 space-y-0">
            {pillars.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={item.title}
                        className="border-b border-[#082610]/10 py-4 cursor-pointer group"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-base font-semibold text-[#162018] font-outfit group-hover:text-[#1A6B3A] transition-colors">
                                {item.title}
                            </span>
                            <span className="text-xl font-light text-[#C8920A] transition-transform duration-300">
                                {isOpen ? "−" : "+"}
                            </span>
                        </div>
                        <div
                            className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out font-outfit text-slate-600 ${isOpen ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0 mt-0"
                                }`}
                        >
                            <div className="overflow-hidden text-[15px] leading-relaxed pr-8">
                                {item.content}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
