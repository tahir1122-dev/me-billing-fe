import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageContentService } from "@/services/pageContent.service";
import seoContent from "@/data/seo-content.json";

export const metadata: Metadata = {
    title: "Services | Me Billing",
};

const { servicesPage } = seoContent;

const arrowIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const servicesPageConfig = {
    hero: {
        tagline: "Core Service Lines",
        headingLine1: "Twelve Services.",
        headingLine2Highlight: "One Accountable Team.",
        description: "Every MeBilling service is staffed by certified specialists who work within your EMR, understand your payer landscape, and are held accountable to outcomes — not just activity metrics.",
        primaryButton: "Talk to Our Team",
        secondaryButton: "View Services"
    }
};

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
    const pageData = await PageContentService.getPage("services");
    const sections = pageData?.sections || {};
    const hero = sections["Hero"] || {};
    const scope = sections["Scope"] || {};
    const process = sections["Process"] || {};
    if (!pageData) return null;

    return (
        <main className="flex-1 w-full bg-white font-cormorant">
            <section className="relative flex max-w-[1920px] mx-auto h-[500px] md:h-[600px] lg:h-[800px] w-full items-center overflow-hidden bg-[#1D2B24]">
                <div className="absolute inset-0">
                    <Image
                        src="/images/Service Section Bg.png"
                        alt="Services Background"
                        fill
                        className="object-cover opacity-50"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#162018]/80 to-[#162018]/20" />
                </div>
                <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-20 text-white">
                    <div className="max-w-3xl">
                        <p className="text-[#D4AF37] tracking-wider uppercase text-sm md:text-base font-semibold mb-6 flex items-center gap-2 font-outfit">
                            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
                            {hero.tagline}
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-medium leading-[1.1] text-white mb-2 font-cormorant">
                            {hero.headingPart1} <br />
                            <span className="text-[#D4AF37] italic">{hero.headingHighlight}</span>
                        </h1>
                        <p className="mt-6 md:mt-8 text-lg md:text-[19px] text-white/90 max-w-2xl leading-relaxed font-outfit font-medium">
                            {hero.description}
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-sm sm:max-w-none font-outfit">
                            <Link href="/contact" className="flex justify-center items-center gap-2 bg-[#1A6B3A] hover:bg-[#13522C] text-white px-8 py-3.5 rounded-md transition-all duration-300 font-medium w-full sm:w-[220px]">
                                {hero.buttonPrimary} {arrowIcon}
                            </Link>
                            <Link href="#services-list" className="flex justify-center items-center gap-2 bg-transparent border border-white/60 hover:border-white hover:bg-white/5 text-white px-8 py-3.5 rounded-md transition-all duration-300 font-medium w-full sm:w-[220px]">
                                {hero.buttonSecondary} {arrowIcon}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Video Section */}
            <section className="w-full bg-[#FFFDF5] py-12 md:py-20 lg:py-32">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="max-w-xl">
                            <p className="text-[#C8920A] tracking-wider text-sm font-semibold mb-6 flex items-center gap-2 font-outfit">
                                <span className="w-6 h-[1.5px] bg-[#C8920A]"></span>
                                {process.tagline || "How Our Services Work"}
                            </p>
                            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-medium leading-[1.1] text-[#162018] mb-6 md:mb-8 font-cormorant">
                                {process.headingPart1 || "12 services."} <br />
                                <span className="text-[#C8920A] italic">{process.headingHighlight || "One accountable team."}</span>
                            </h2>
                            <p className="text-[17px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                {process.description || "See how our specialty-organized billing teams manage the complete revenue cycle — from coding and claims through denial management, IDR, and arbitration — all in-house."}
                            </p>
                        </div>
                        <div className="relative w-full rounded-[24px] overflow-hidden shadow-xl aspect-[16/10] bg-[#162018]">
                            <video
                                src={process.video || "https://ccbtiisgqfffxfkgpaon.supabase.co/storage/v1/object/public/assets/video%2002.mp4"}
                                poster={process.poster || "/images/service 2.jpg"}
                                controls
                                className="w-full h-full object-cover opacity-90"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="services-list" className="w-full bg-[#fcfbf5] py-12 sm:py-20 lg:py-28">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1400px]">
                    <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
                        <p className="text-[#C8920A] tracking-wider text-sm font-semibold mb-6 flex items-center justify-center gap-2 font-outfit">
                            <span className="w-6 h-[1.5px] bg-[#C8920A]"></span>
                            {scope.tagline}
                        </p>
                        <h2 className="text-3xl md:text-5xl lg:text-[64px] font-medium leading-[1.1] text-[#162018] mb-6 font-cormorant">
                            {scope.headingPart1} <span className="text-[#C8920A] italic">{scope.headingHighlight}</span>
                        </h2>
                        <p className="text-[17px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                            {scope.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {scope.cards?.map((card: any, idx: number) => {
                            if (card.style === "list") {
                                return (
                                    <article
                                        key={idx}
                                        className="group rounded-2xl border border-[#D1D1C7]/60 bg-[#FAFAEE] p-6 lg:p-8 flex flex-col cursor-pointer hover:-translate-y-2 hover:border-[#C8920A]/50 transition-all duration-500 ease-out h-[480px] lg:h-[520px]"
                                    >
                                        {/* Badge */}
                                        <div className="mb-6 inline-flex w-fit bg-[#C8920A] rounded-full px-3 py-1 items-center gap-2 group-hover:bg-[#162018] transition-colors duration-400">
                                            <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
                                            <span className="text-xs font-bold text-[#162018] tracking-wide font-outfit">
                                                {card.badge}
                                            </span>
                                        </div>
                                        <h3 className="text-[26px] font-medium text-[#162018] mb-4 font-cormorant leading-snug group-hover:text-[#C8920A] transition-colors duration-300">
                                            {card.title}
                                        </h3>
                                        <p className="text-[14px] text-[#162018]/80 leading-relaxed font-outfit font-medium mb-8">
                                            {card.description}
                                        </p>

                                        <ul className="flex flex-col gap-4 mt-auto font-outfit">
                                            {card.listItems?.map((item: string, i: number) => (
                                                <li key={i} className="flex gap-3 text-[13px] text-[#162018]/80 leading-relaxed font-semibold">
                                                    <span className="mt-[6px] shrink-0 w-2 h-2 rounded-full bg-[#C8920A] group-hover:scale-125 transition-transform duration-300"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                );
                            }

                            return (
                                <article
                                    key={idx}
                                    tabIndex={0}
                                    className="group rounded-2xl border border-[#D1D1C7]/60 bg-white hover:bg-[#FAFAEE] focus:bg-[#FAFAEE] focus:outline-none p-6 lg:p-8 flex flex-col cursor-pointer hover:-translate-y-2 focus:-translate-y-2 hover:border-[#C8920A]/40 focus:border-[#C8920A]/40 transition-all duration-500 ease-out overflow-hidden h-[500px] lg:h-[520px]"
                                >
                                    {/* Collapsing Image Section */}
                                    <div className="transition-all duration-500 ease-in-out h-[200px] sm:h-[240px] mb-6 group-hover:h-0 group-hover:mb-0 group-hover:opacity-0 group-focus:h-0 group-focus:mb-0 group-focus:opacity-0 overflow-hidden rounded-xl shrink-0">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={card.image!}
                                                alt={card.title}
                                                fill
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-focus:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0 group-focus:opacity-0" />
                                            
                                            <div className="absolute bottom-4 left-4 bg-[#C8920A] rounded-full px-3 py-1 flex items-center gap-2 transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0">
                                                <div className="w-[6px] h-[6px] rounded-full bg-[#162018]"></div>
                                                <span className="text-xs font-bold text-[#162018] tracking-wide font-outfit shadow-sm">
                                                    {card.badge}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanding Content Section */}
                                    <div className="flex flex-col flex-1 transition-all duration-500">
                                        {/* Hover Badge (expands and fades in) */}
                                        <div className="transition-all duration-500 ease-in-out grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr]">
                                            <div className="overflow-hidden">
                                                <div className="mb-4 hidden group-hover:inline-flex group-focus:inline-flex w-fit bg-[#C8920A] rounded-full px-3 py-1 items-center gap-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-100">
                                                    <div className="w-[6px] h-[6px] rounded-full bg-[#162018]"></div>
                                                    <span className="text-xs font-bold text-[#162018] tracking-wide font-outfit">
                                                        {card.badge}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-[24px] group-hover:text-[26px] group-focus:text-[26px] font-medium text-[#162018] mb-3 group-hover:mb-4 group-focus:mb-4 font-cormorant leading-tight group-hover:text-[#C8920A] group-focus:text-[#C8920A] transition-all duration-500">
                                            {card.title}
                                        </h3>
                                        
                                        <p className="text-[14px] text-[#162018]/70 group-hover:text-[#162018]/80 group-focus:text-[#162018]/80 leading-relaxed font-outfit font-medium transition-colors duration-500">
                                            {card.description}
                                        </p>

                                        {/* Hover List Items (expands and fades in) */}
                                        <div className="transition-all duration-500 ease-in-out grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr] mt-auto">
                                            <div className="overflow-hidden">
                                                <ul className="flex flex-col gap-4 pt-6 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-150 font-outfit">
                                                    {card.listItems?.map((item: string, i: number) => (
                                                        <li key={i} className="flex gap-3 text-[13px] text-[#162018]/80 leading-relaxed font-semibold">
                                                            <span className="mt-[6px] shrink-0 w-2 h-2 rounded-full bg-[#C8920A] group-hover:scale-125 group-focus:scale-125 transition-transform duration-300 delay-200"></span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
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
