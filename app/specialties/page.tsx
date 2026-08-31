import Image from "next/image";
import Link from "next/link";

import { PageContentService } from "@/services/pageContent.service";
import { Metadata, ResolvingMetadata } from "next";
import { isEmbeddedVideo } from "@/utils/videoUtils";

export const dynamic = 'force-dynamic';
export async function generateMetadata(
    { params }: any,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const pageData = await PageContentService.getPage("specialties");
    return {
        title: pageData?.seo_title || "Our Specialties | Me Billing",
        description: pageData?.seo_description || "Specialty Depth That Changes Everything.",
    };
}
export const oldMetadata = {
    title: "Our Specialties | Me Billing",
    description: "Specialty Depth That Changes Everything. 24 clinical specialties and facility types.",
};



const arrowIconSVG = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

const playIconSVG = (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);

export default async function SpecialtiesPage() {
    const pageData = await PageContentService.getPage("specialties");
    const sections = pageData?.sections || {};
    const hero = sections["Hero"] || {};
    const stats = sections["Stats"] || {};
    const groupBilling = sections["GroupBilling"] || {};
    const walkthrough = sections["Walkthrough"] || {};
    const institutionalBilling = sections["InstitutionalBilling"] || {};
    const labSpecialties = sections["LabSpecialties"] || {};
    if (!pageData) return null;

    

    return (
        <main className="flex-1 w-full bg-white font-outfit">
            {/* Main Hero Section */}
            <section className="relative flex max-w-[1920px] mx-auto h-[500px] md:h-[600px] lg:h-[800px] w-full items-center overflow-hidden bg-[#162018]">
                {/* Full-page background loaded with the correct file name */}
                <div className="absolute inset-0">
                    <Image
                        src={hero.image}
                        alt="Specialties Background"
                        fill
                        className="object-cover opacity-50"
                        sizes="100vw"
                        priority
                    />
                    {/* Soft overlay applied for readability while keeping right foreground content beautiful */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111A13]/95 via-[#111A13]/85 to-[#111A13]/40" />
                </div>

                {/* Content Container keeps text fully readable without applying opacity to content */}
                <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-20 text-white">
                    <div className="max-w-4xl">
                        {/* Tagline */}
                        <p className="text-[#C8920A] tracking-wider text-sm md:text-base font-semibold mb-6 flex items-center gap-2 font-outfit">
                            <span className="w-6 h-[1.5px] bg-[#C8920A]"></span>
                            {hero.tagline.replace("—", "").trim()}
                        </p>

                        {/* Main Heading with Cormorant Garamond */}
                        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-medium leading-[1.1] text-white mb-6 font-cormorant">
                            {hero.titlePart1} <br />
                            <span className="text-[#C8920A] italic">{hero.titleHighlight}</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-[19px] text-white/95 max-w-3xl leading-relaxed font-outfit font-medium mb-10">
                            {hero.description}
                        </p>

                        {/* Buttons Block */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-sm sm:max-w-none font-outfit">
                            <Link
                                href="/contact"
                                className="inline-flex justify-center items-center gap-2 bg-[#1A6B3A] hover:bg-[#13522C] text-white px-7 py-3.5 rounded-md font-medium text-base transition-all shadow-sm w-full sm:w-[220px]"
                            >
                                {hero.buttonPrimary.replace("→", "").trim()}
                                {arrowIconSVG}
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex justify-center items-center gap-2 bg-transparent border border-white/60 hover:border-white text-white px-7 py-3.5 rounded-md font-medium text-base transition-all w-full sm:w-[220px]"
                            >
                                {hero.buttonSecondary.replace("→", "").trim()}
                                {arrowIconSVG}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1 under main section: Physician & Specialty Group Billing */}
            <section className="w-full bg-[#FCFBF5]">
                {/* Top Statistics Bar exactly replicating the screenshot structure and separators */}
                <div className="w-full border-b border-gray-200/70">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 lg:grid-cols-5 py-8 lg:py-10 gap-y-6">
                            {stats?.map((stat: any, idx: number) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col items-center justify-center text-center px-2 ${idx < stats.length - 1 ? "lg:border-r lg:border-gray-200/70" : ""
                                        } ${idx % 2 === 0 && idx < stats.length - 1 ? "border-r border-gray-200/70 lg:border-r-0" : ""}`}
                                >
                                    <span className="text-[#1A6B3A] text-5xl lg:text-6xl font-medium font-cormorant mb-5">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs font-bold text-[#162018] tracking-wide block font-outfit leading-snug">
                                        {stat.labelPart1} <br /> {stat.labelPart2}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content & Specialty Cards Grid Area */}
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
                    {/* Section Header exactly replicating alignment, text styling, and hierarchy */}
                    <div className="max-w-4xl mb-12 lg:mb-16">
                        <p className="text-[#C8920A] tracking-wider text-xs font-bold uppercase mb-2 block font-outfit">
                            {groupBilling.tagline}
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#162018] leading-tight mb-4 font-cormorant">
                            {groupBilling.titlePart1} <span className="text-[#C8920A] italic">{groupBilling.titleHighlight}</span>
                        </h2>
                        <p className="text-[15px] text-[#162018]/80 leading-relaxed font-outfit font-medium max-w-3xl">
                            {groupBilling.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {groupBilling.cards?.map((card: any, idx: number) => {
                            const isGoldBorder = idx % 3 === 1;
                            const cardNumber = String(idx + 1).padStart(2, "0");
                            return (
                                <article
                                    key={idx}
                                    className={`relative bg-white rounded-[24px] shadow-[0_4px_25px_-5px_rgba(26,107,58,0.06)] flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_-5px_rgba(26,107,58,0.12)] transition-all duration-300 ${isGoldBorder ? "border-2 border-[#C8920A]" : "border border-[#D1D1C7]"
                                        }`}
                                >
                                    {/* Gradient header strip exactly matching reference design requirements */}
                                    <div className="absolute top-0 inset-x-0 h-[4.5px] bg-gradient-to-r from-[#1A6B3A] to-[#C8920A] shadow-[0_2px_6px_rgba(26,107,58,0.3)] z-10" />

                                    {/* Card Body */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        {/* Large Faint Gold Number */}
                                        <div className="font-cormorant text-4xl md:text-[54px] font-medium text-[#e6bc4c] leading-none mb-1 select-none">
                                            {cardNumber}
                                        </div>

                                        {/* Professional Category Pill */}
                                        <span className="inline-block bg-[#FAF3E0] text-[#C8920A] text-[9.5px] font-bold tracking-widest px-3 py-1 rounded-full uppercase mb-4 w-fit font-outfit">
                                            {card.category || "PROFESSIONAL"}
                                        </span>

                                        {/* Card Heading */}
                                        <h3 className="text-2xl font-semibold text-[#162018] mb-3 font-cormorant leading-snug">
                                            {card.title}
                                        </h3>

                                        {/* Description text */}
                                        <p className="text-[13.5px] text-[#162018]/75 leading-relaxed font-outfit font-medium mb-6 flex-grow">
                                            {card.description}
                                        </p>

                                        {/* Tag / Badge items arranged perfectly */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {card.badges?.map((badge: any, bIdx: number) => (
                                                <span
                                                    key={bIdx}
                                                    className="bg-[#E6F0EB] text-[#1A6B3A] text-[11px] font-semibold px-2.5 py-1.5 rounded font-outfit whitespace-nowrap"
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Section 2 under previous one: Walkthrough Feature Block exactly matching Screenshot 1 */}
            <section className="w-full bg-[#FFFDF5] py-12 md:py-16 lg:py-24 border-t border-b border-gray-100/60">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Video Thumbnail block perfectly modeled after Screenshot 1 */}
                        <div className="relative rounded-2xl overflow-hidden shadow-md max-w-xl mx-auto lg:mx-0 w-full aspect-[640/380] bg-[#162018]">
                            {isEmbeddedVideo(walkthrough.video || "https://ccbtiisgqfffxfkgpaon.supabase.co/storage/v1/object/public/assets/video%2015.mp4") ? (
                                <iframe
                                    src={walkthrough.video || "https://ccbtiisgqfffxfkgpaon.supabase.co/storage/v1/object/public/assets/video%2015.mp4"}
                                    className="!w-full !h-full object-cover specialties-tab"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <video
                                    src={walkthrough.video || "https://ccbtiisgqfffxfkgpaon.supabase.co/storage/v1/object/public/assets/video%2015.mp4"}
                                    poster=""
                                    controls
                                    className="!w-full !h-full object-cover specialties-tab"
                                />
                            )}
                        </div>

                        {/* Right Text Block matching hierarchy and spacing exactly */}
                        <div className="max-w-xl">
                            <p className="text-[#C8920A] tracking-wider text-xs font-bold uppercase mb-2 block font-outfit">
                                {walkthrough.tagline}
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#162018] leading-tight mb-4 font-cormorant">
                                {walkthrough.titlePart1}{" "}
                                <span className="text-[#C8920A] italic">{walkthrough.titleHighlight}</span>
                            </h2>
                            <p className="text-[15px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                {walkthrough.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Facility & Institutional Specialties Block with semi-transparent rgba(26, 107, 58, 0.5) cards */}
            <section className="w-full bg-[#FCFBF5] py-12 md:py-16 lg:py-24">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Horizontally centered Header matching reference exactly */}
                    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                        <p className="text-[#C8920A] tracking-wider text-xs font-bold uppercase mb-2 block font-outfit">
                            {institutionalBilling.tagline}
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#162018] leading-tight mb-4 font-cormorant">
                            {institutionalBilling.titlePart1}{" "}
                            <span className="text-[#C8920A] italic">{institutionalBilling.titleHighlight}</span>
                        </h2>
                        <p className="text-[15px] text-[#162018]/80 leading-relaxed font-outfit font-medium mx-auto max-w-2xl">
                            {institutionalBilling.description}
                        </p>
                    </div>

                    {/* Perfectly structured dual-grid layout achieving exact centered expansion bounds shown in Screenshot 2 */}
                    <div className="flex flex-col gap-6 lg:gap-8 max-w-7xl mx-auto">
                        {/* Top row: 3 cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {institutionalBilling.cards.slice(0, 3)?.map((card: any, idx: number) => (
                                <article
                                    key={idx}
                                    style={{ backgroundColor: "#0C3318" }}
                                    className="rounded-[24px] border border-[#1A6B3A]/30 backdrop-blur-md p-6 lg:p-8 flex flex-col justify-between hover:border-[#1A6B3A]/50 transition-all duration-300 shadow-sm"
                                >
                                    <div>
                                        {/* Card Header Flex with Icon mapped precisely */}
                                        <div className="flex items-center gap-3.5 mb-4">
                                            <div className="w-10 h-10 flex items-center justify-center shrink-0">
                                                <Image
                                                    src={card.icon}
                                                    alt={card.title}
                                                    width={40}
                                                    height={40}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div>
                                                <span className="text-[#C8920A] text-[10.5px] font-bold tracking-wider block font-outfit uppercase">
                                                    {card.category}
                                                </span>
                                                <h3 className="text-xl lg:text-2xl font-medium text-white font-cormorant leading-tight">
                                                    {card.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[13.5px] text-white/85 leading-relaxed font-outfit font-medium mb-6">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Dark green pill badges matching reference screenshot */}
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {card.badges?.map((badge: any, bIdx: number) => (
                                            <span
                                                key={bIdx}
                                                className="bg-[#113B1D]/90 text-[#C8920A] text-[11px] font-medium px-2.5 py-1 rounded font-outfit border border-white/5"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Bottom row: 2 wider cards expanding perfectly to fit matching bounds */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {institutionalBilling.cards.slice(3, 5)?.map((card: any, idx: number) => (
                                <article
                                    key={idx}
                                    style={{ backgroundColor: "#0C3318" }}
                                    className="rounded-[24px] border border-[#1A6B3A]/30 backdrop-blur-md p-6 lg:p-8 flex flex-col justify-between hover:border-[#1A6B3A]/50 transition-all duration-300 shadow-sm"
                                >
                                    <div>
                                        {/* Card Header Flex with Icon mapped precisely */}
                                        <div className="flex items-center gap-3.5 mb-4">
                                            <div className="w-10 h-10 flex items-center justify-center shrink-0">
                                                <Image
                                                    src={card.icon}
                                                    alt={card.title}
                                                    width={40}
                                                    height={40}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div>
                                                <span className="text-[#C8920A] text-[10.5px] font-bold tracking-wider block font-outfit uppercase">
                                                    {card.category}
                                                </span>
                                                <h3 className="text-xl lg:text-2xl font-medium text-white font-cormorant leading-tight">
                                                    {card.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[13.5px] text-white/85 leading-relaxed font-outfit font-medium mb-6">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Dark green pill badges matching reference screenshot */}
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {card.badges?.map((badge: any, bIdx: number) => (
                                            <span
                                                key={bIdx}
                                                className="bg-[#113B1D]/90 text-[#C8920A] text-[11px] font-medium px-2.5 py-1 rounded font-outfit border border-white/5"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Lab Billing Specialties exactly matching the provided reference screenshot */}
            <section className="w-full bg-[#FAF9F0] py-12 md:py-16 lg:py-24 border-t border-gray-100/60">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Left-aligned Header exactly replicating screenshot structure and typography */}
                    <div className="max-w-4xl mb-12 lg:mb-16">
                        <p className="text-[#C8920A] tracking-wider text-xs font-bold uppercase mb-2 block font-outfit">
                            {labSpecialties.tagline}
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#162018] leading-tight mb-4 font-cormorant">
                            {labSpecialties.titlePart1}{" "}
                            <span className="text-[#C8920A] italic">{labSpecialties.titleHighlight}</span>
                        </h2>
                        <p className="text-[15px] text-[#162018]/75 leading-relaxed font-outfit font-medium max-w-3xl">
                            {labSpecialties.description}
                        </p>
                    </div>

                    {/* 2x2 Grid exactly matching card sizing, equal spacing, and pill layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl">
                        {labSpecialties.cards?.map((card: any, idx: number) => {
                            // Assign matching premium inline SVG style icons for each title based on reference style
                            let iconSVG = null;
                            if (idx === 0) {
                                // Toxicology: Chemical testing/flask setup
                                iconSVG = (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10 2v7.31l-6.5 10A2 2 0 0 0 5.18 22h13.64a2 2 0 0 0 1.68-3.04L14 9.31V2" />
                                        <path d="M8.5 2h7" />
                                        <path d="M14 16.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                        <path d="M6 14h12" />
                                    </svg>
                                );
                            } else if (idx === 1) {
                                // Pathology: Microscope apparatus
                                iconSVG = (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 18h8" />
                                        <path d="M3 22h18" />
                                        <path d="M14 22a7 7 0 1 0 0-14h-1" />
                                        <path d="M9 14h2" />
                                        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
                                        <path d="M12 2v4" />
                                    </svg>
                                );
                            } else if (idx === 2) {
                                // Genetic Labs: DNA double-helix spiral
                                iconSVG = (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 2v20" />
                                        <path d="M9 2v20" />
                                        <path d="M6 6h12" />
                                        <path d="M6 12h12" />
                                        <path d="M6 18h12" />
                                        <circle cx="15" cy="6" r="2" fill="currentColor" />
                                        <circle cx="9" cy="12" r="2" fill="currentColor" />
                                        <circle cx="15" cy="18" r="2" fill="currentColor" />
                                    </svg>
                                );
                            } else {
                                // Radiology: MRI Scanner circular tunnel ring
                                iconSVG = (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="8" />
                                        <circle cx="12" cy="12" r="4" />
                                        <path d="M12 2v2" />
                                        <path d="M12 20v2" />
                                        <path d="M2 12h2" />
                                        <path d="M20 12h2" />
                                        <path d="M5 19h14" />
                                    </svg>
                                );
                            }

                            return (
                                <article
                                    key={idx}
                                    className="bg-[#FCFBF5] rounded-[24px] border border-[#1A6B3A]/20 p-6 lg:p-8 flex flex-col justify-between hover:border-[#1A6B3A]/40 hover:shadow-sm transition-all duration-300"
                                >
                                    <div>
                                        {/* Header Flex */}
                                        <div className="flex items-center gap-3.5 mb-4">
                                            {/* Soft green rounded box holding custom matching SVG icon */}
                                            <div className="w-12 h-12 rounded-xl bg-[#E6F0EB] border border-[#1A6B3A]/10 flex items-center justify-center shrink-0 text-[#1A6B3A]">
                                                {iconSVG}
                                            </div>
                                            <div>
                                                <span className="text-[#C8920A] text-xs font-bold tracking-wide block font-outfit">
                                                    {card.category}
                                                </span>
                                                <h3 className="text-xl lg:text-2xl font-medium text-[#162018] font-cormorant leading-tight">
                                                    {card.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Medium gray paragraph text */}
                                        <p className="text-[13.5px] text-[#162018]/75 leading-relaxed font-outfit font-medium mb-6">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Subtle internal divider line and chips container exactly replicating reference */}
                                    <div className="pt-4 border-t border-gray-200/50 mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {card.badges?.map((badge: any, bIdx: number) => (
                                                <span
                                                    key={bIdx}
                                                    className="bg-[#FAF3E0] text-[#C8920A] text-[11px] font-medium px-2.5 py-1 rounded-md font-outfit"
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
