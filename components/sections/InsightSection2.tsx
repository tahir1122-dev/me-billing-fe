import Link from "next/link";
import Image from "next/image";
import React from "react";
import { isEmbeddedVideo } from "@/utils/videoUtils";

export default function InsightSection2({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="w-full py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-outfit">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: image with badge */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video">
                        {data.video ? (
                            isEmbeddedVideo(data.video) ? (
                                <iframe 
                                    src={data.video} 
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen 
                                />
                            ) : (
                                <video
                                    src={data.video}
                                    poster={data.image}
                                    controls
                                    className="w-full h-full object-cover"
                                />
                            )
                        ) : (
                            <Image
                                src={data.image}
                                alt="The Revenue Gap"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        )}
                        {/* Badge overlay */}
                        <div className="absolute top-4 left-4 z-10">
                            <div className="inline-flex items-center gap-2 bg-[#C8920A] text-black text-xs font-bold px-4 py-2 rounded-full font-outfit">
                                <span className="w-2 h-2 rounded-full bg-black" />
                                {data.badgeLabel}
                            </div>
                        </div>
                    </div>

                    {/* Right: copy */}
                    <div>
                        <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-5 font-outfit">
                            {data.tagline}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#162018] leading-tight mb-5 font-cormorant">
                            {data.heading1} <br />
                            {data.heading2}
                            <span className="text-[#C8920A] italic">{data.headingHighlight}</span>
                            {data.heading3}
                        </h2>
                        <p className="text-slate-600 text-[15px] leading-relaxed mb-8 font-outfit max-w-lg">
                            {data.body}
                        </p>
                        <Link
                            href={data.cta.href}
                            className="inline-flex items-center gap-3 bg-[#1A6B3A] hover:bg-[#0a2a14] text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all font-outfit"
                        >
                            {data.cta.label}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
