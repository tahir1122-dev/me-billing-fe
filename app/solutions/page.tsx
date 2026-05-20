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

            {/* Block 1: Walkthrough Section */}
            <section className="w-full bg-[#FCFBF5] py-20 lg:py-24">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1150px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
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
                            <p className="text-[#C8920A] tracking-wider text-[13px] font-semibold mb-4 block font-outfit">
                                {walkthrough.tagline}
                            </p>
                            <h2 className="text-4xl lg:text-[46px] font-medium leading-[1.15] text-[#162018] mb-6 font-cormorant">
                                {walkthrough.titlePart1} <br />
                                <span className="text-[#C8920A] italic">{walkthrough.titleHighlight}</span>
                            </h2>
                            <p className="text-[15px] text-[#162018]/80 leading-relaxed font-outfit font-medium mb-8">
                                {walkthrough.description}
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-[#1A6B3A] hover:bg-[#13522C] text-white px-6 py-3.5 rounded-md font-medium text-[14.5px] transition-colors shadow-sm"
                            >
                                {walkthrough.buttonText.replace("→", "").trim()}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: Solution Packages Section */}
            <section className="w-full bg-[#F7F6EF] py-20 lg:py-28 border-t border-[#E8E6DD]/50">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1150px]">
                    {/* Header Section */}
                    <div className="flex flex-col items-start text-left mb-16 lg:mb-20 max-w-4xl">
                        <p className="text-[#C8920A] text-[13px] font-bold tracking-wide mb-4 block font-outfit">
                            {packagesSection.tagline}
                        </p>
                        <h2 className="text-4xl lg:text-[52px] font-medium leading-[1.1] text-[#162018] mb-5 font-cormorant">
                            {packagesSection.titlePart1} <span className="text-[#C8920A] italic">{packagesSection.titleHighlight}</span>
                        </h2>
                        <p className="text-[15px] text-[#162018]/70 leading-[1.7] font-outfit font-medium max-w-3xl">
                            {packagesSection.description}
                        </p>
                    </div>

                    {/* Solution Packages Grid */}
                    <div className="flex flex-col gap-16 lg:gap-24">
                        {packagesSection.packages.slice(0, 2).map((pkg: any, idx: number) => {
                            const isEven = idx % 2 === 1;
                            const imageIndex = (idx % 4) + 1; // 1 to 4
                            
                            // Title split logic: split last 2 words if length > 3, else last 1 word
                            const titleWords = pkg.title.split(' ');
                            const splitIndex = titleWords.length > 3 ? -2 : -1;
                            const firstPart = titleWords.slice(0, splitIndex).join(' ');
                            const lastPart = titleWords.slice(splitIndex).join(' ');

                            // Bullet point logic: split first item by ':'
                            const firstItemSplit = pkg.includedItems[0].split(':');
                            const highlightText = firstItemSplit[0].trim();
                            const firstBulletRaw = firstItemSplit[1]?.trim() || '';
                            const firstBullet = firstBulletRaw ? firstBulletRaw.charAt(0).toUpperCase() + firstBulletRaw.slice(1) : '';

                            const bulletPoints = [
                                ...(firstBullet ? [firstBullet] : []),
                                ...pkg.includedItems.slice(1)
                            ];

                            // Tag formatting logic (Title Case)
                            const formattedTag = pkg.tag.toLowerCase().replace(/\b\w/g, (c: string) => c.toUpperCase());

                            return (
                                <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-14 items-start`}>
                                    {/* Image Section */}
                                    <div className="w-full lg:w-1/2">
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[1/1.05] group">
                                            <Image
                                                src={`/images/service ${imageIndex}.jpg`}
                                                alt={pkg.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            {/* Floating Overlay Box */}
                                            <div className="absolute bottom-4 inset-x-4 bg-[#1A6B3A]/95 backdrop-blur-sm text-white px-4 py-3 text-center rounded-lg shadow-lg border border-white/10">
                                                <p className="text-[12.5px] font-outfit tracking-wide leading-snug">
                                                    <span className="font-bold">{pkg.bestForLabel} </span>
                                                    {pkg.bestForText}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text Section */}
                                    <div className="w-full lg:w-1/2 flex flex-col pt-2">
                                        <span className="text-[#C8920A] text-[12px] font-medium tracking-wide mb-3 block font-outfit">
                                            — {formattedTag}
                                        </span>
                                        <h3 className="text-[36px] lg:text-[40px] font-medium text-[#162018] mb-4 font-cormorant leading-[1.1]">
                                            {firstPart} <br className="hidden lg:block" />
                                            <span className="text-[#C8920A] italic">{lastPart}</span>
                                        </h3>
                                        <p className="text-[14px] text-[#162018]/80 leading-relaxed font-outfit font-medium mb-6">
                                            {pkg.description}
                                        </p>
                                        
                                        <div className="flex flex-col">
                                            <span className="text-[#1A6B3A] text-[13.5px] font-bold tracking-wide mb-3 block font-outfit">
                                                What's Included : <span className="font-medium normal-case">{highlightText}</span>
                                            </span>
                                            <ul className="flex flex-col gap-2.5 font-outfit">
                                                {bulletPoints.map((item: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-2.5 text-[12.5px] text-[#162018]/80 font-medium leading-snug">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1A6B3A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[3px]">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
