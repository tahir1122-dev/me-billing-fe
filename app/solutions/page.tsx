import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import seoContent from "@/data/seo-content.json";

export const metadata: Metadata = {
    title: "Bundled Solutions | Me Billing",
    description: "Six Solutions Built Around the Outcome You Need. Engage exactly what your revenue cycle requires.",
};

const { bundledSolutions } = seoContent;

export default function BundledSolutionsPage() {
    const { hero, walkthrough, packagesSection } = bundledSolutions;

    return (
        <main className="flex-1 w-full bg-white font-outfit">
            {/* Hero Section matching Reference Image 2 exactly */}
            <section className="relative flex max-w-[1920px] mx-auto h-[700px] lg:h-[800px] w-full items-center overflow-hidden bg-[#162018]">
                {/* Background Image with soft overlay applied ONLY to background */}
                <div className="absolute inset-0">
                    <Image
                        src={hero.image}
                        alt="Bundled Solutions Background"
                        fill
                        className="object-cover opacity-40"
                        sizes="100vw"
                        priority
                    />
                    {/* Soft dark green overlay overlaying the background image for high contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111A13]/90 via-[#111A13]/80 to-[#111A13]/40" />
                </div>

                {/* Content Container keeps text fully visible and high contrast */}
                <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-20 text-white">
                    <div className="max-w-4xl">
                        {/* Tagline */}
                        <p className="text-[#C8920A] tracking-wider text-sm md:text-base font-semibold mb-6 flex items-center gap-2 font-outfit">
                            <span className="w-6 h-[1.5px] bg-[#C8920A]"></span>
                            {hero.tagline.replace("—", "").trim()}
                        </p>

                        {/* Main Heading with Cormorant Garamond */}
                        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-medium leading-[1.1] text-white mb-8 font-cormorant">
                            {hero.titlePart1} <br />
                            <span className="text-[#C8920A] italic">{hero.titleHighlight}</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-[19px] text-white/95 max-w-3xl leading-relaxed font-outfit font-medium">
                            {hero.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Block 1: Walkthrough Section (#FFFDF5 Background) */}
            <section className="w-full bg-[#FFFDF5] py-20 lg:py-28 border-b border-gray-100/60">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Side: Video/Walkthrough Image with Play Button Overlay */}
                        <div className="relative w-full rounded-[24px] overflow-hidden shadow-xl aspect-[16/10]">
                            <Image
                                src={walkthrough.image}
                                alt="Walkthrough demo"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-[#162018]/10 hover:bg-[#162018]/20 transition-colors duration-300"></div>

                            {/* Centered Play Button wrapper mimicking reference screenshot exactly */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-[100px] h-[100px] bg-black/30 rounded-full flex items-center justify-center backdrop-blur-xs relative z-10">
                                    <button
                                        type="button"
                                        className="w-[64px] h-[64px] bg-[#C8920A] hover:bg-[#E0A800] transition-colors duration-300 rounded-full flex items-center justify-center shadow-lg pointer-events-auto"
                                        aria-label="Play walkthrough"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                            <path d="M5 3l14 9-14 9V3z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Content */}
                        <div className="max-w-xl">
                            <p className="text-[#C8920A] tracking-wider text-sm font-semibold mb-3 block font-outfit">
                                {walkthrough.tagline}
                            </p>
                            <h2 className="text-4xl lg:text-5xl font-medium leading-tight text-[#162018] mb-6 font-cormorant">
                                {walkthrough.titlePart1} <span className="text-[#C8920A] italic">{walkthrough.titleHighlight}</span>
                            </h2>
                            <p className="text-[16px] text-[#162018]/80 leading-relaxed font-outfit font-medium mb-8">
                                {walkthrough.description}
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-[#1A6B3A] hover:bg-[#13522C] text-white px-7 py-3.5 rounded-md font-medium text-[16px] transition-colors shadow-sm"
                            >
                                {walkthrough.buttonText.replace("→", "").trim()}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: Solution Packages Section (#FCFBF5 lighter background variant) */}
            <section className="w-full bg-[#FCFBF5] py-20 lg:py-28">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-7xl">
                    {/* Header Section */}
                    <div className="flex flex-col items-center text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
                        <p className="text-[#C8920A] tracking-wider text-sm font-semibold mb-3 block font-outfit">
                            {packagesSection.tagline}
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-medium leading-tight text-[#162018] mb-4 font-cormorant">
                            {packagesSection.titlePart1} <span className="text-[#C8920A] italic">{packagesSection.titleHighlight}</span>
                        </h2>
                        <p className="text-[16px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                            {packagesSection.description}
                        </p>
                    </div>

                    {/* Solution Packages Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {packagesSection.packages.map((pkg: any, idx: number) => (
                            <article
                                key={idx}
                                className="flex flex-col bg-white border border-[#E0E0D4] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Header Section */}
                                <div className="bg-[#1A261D] p-8 pb-10 relative overflow-hidden flex flex-col">
                                    {/* Circle & Number */}
                                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full flex items-center justify-center pointer-events-none">
                                        <span className="text-6xl font-cormorant text-white/10 mt-6 mr-6 select-none">
                                            {pkg.number}
                                        </span>
                                    </div>

                                    <div className="relative z-10">
                                        {pkg.badge && (
                                            <span className="text-[#1A6B3A] text-xs font-bold mb-1 block font-outfit">
                                                {pkg.badge}
                                            </span>
                                        )}
                                        <span className="text-[#C8920A] text-[11px] font-bold tracking-widest uppercase mb-4 block font-outfit">
                                            {pkg.tag}
                                        </span>
                                        {/* Brighter title color for readability on dark header */}
                                        <h3 className="text-[32px] font-medium text-[#F2E9D8] mb-4 font-cormorant leading-[1.1]">
                                            {pkg.title}
                                        </h3>
                                        <p className="text-[15px] font-outfit font-medium italic text-white/80 leading-relaxed">
                                            {pkg.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Body Section */}
                                <div className="p-8 flex flex-col flex-1">
                                    <p className="text-[14px] text-[#162018]/70 leading-relaxed font-outfit font-medium mb-10">
                                        {pkg.description}
                                    </p>

                                    <div className="mt-auto">
                                        <span className="text-[#1A6B3A] text-[11px] font-bold tracking-widest uppercase mb-5 block font-outfit">
                                            {pkg.includedTitle}
                                        </span>

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 font-outfit">
                                            {pkg.includedItems.map((item: string, i: number) => (
                                                <li key={i} className="flex items-start gap-3 text-[13px] text-[#162018]/80 font-medium leading-snug">
                                                    <div className="w-1 h-1 rounded-full bg-[#162018]/40 shrink-0 mt-2"></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Footer Section */}
                                <div className="bg-[#FAFAEE] m-8 mt-0 p-5 rounded-xl flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                                    <span className="text-[12px] font-bold text-[#162018] shrink-0 font-outfit">
                                        {pkg.bestForLabel}
                                    </span>
                                    <span className="text-[12px] italic text-[#162018]/70 font-outfit font-medium">
                                        {pkg.bestForText}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
