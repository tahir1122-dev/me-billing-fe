import React from "react";

export default function RevenueLeakSection({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="w-full py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-outfit bg-white/60">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#162018] leading-tight font-cormorant mb-4">
                        {data.heading}
                        <span className="text-[#C8920A] italic">{data.headingHighlight}</span>
                        {data.heading2}
                    </h2>
                    <p className="text-slate-500 text-[15px] max-w-2xl mx-auto font-outfit">
                        {data.subtext}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.items.map((item: any) => (
                        <div
                            key={item.title}
                            className="p-7 bg-[#FCFBF5] border border-[#082610]/12 rounded-2xl flex flex-col hover:shadow-md transition-all"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 rounded-lg bg-[#F5EEDC] flex items-center justify-center text-xl shadow-sm">
                                    {item.icon}
                                </div>
                                <p className="text-[#C8920A] font-cormorant font-medium text-4xl md:text-5xl leading-none -mt-2">{item.stat}</p>
                            </div>
                            <h3 className="text-[#162018] font-semibold text-[16px] mb-2 font-outfit">{item.title}</h3>
                            <p className="text-slate-500 text-[13px] leading-relaxed font-outfit">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
