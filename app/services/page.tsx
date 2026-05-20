import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
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

export default function ServicesPage() {
    return (
        <main className="flex-1 w-full bg-white font-cormorant">
            <section className="relative flex max-w-[1920px] mx-auto h-[700px] lg:h-[800px] w-full items-center overflow-hidden bg-[#1D2B24]">
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
                            {servicesPageConfig.hero.tagline}
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-medium leading-[1.1] text-white mb-2">
                            {servicesPageConfig.hero.headingLine1} <br />
                            <span className="text-[#D4AF37] italic">{servicesPageConfig.hero.headingLine2Highlight}</span>
                        </h1>
                        <p className="mt-6 md:mt-8 text-lg md:text-[19px] text-white/90 max-w-2xl leading-relaxed font-outfit font-medium">
                            {servicesPageConfig.hero.description}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4 font-outfit">
                            <Link href="/contact" className="flex items-center gap-2 bg-[#1A6B3A] hover:bg-[#13522C] text-white px-8 py-3.5 rounded-md transition-all duration-300 font-medium">
                                {servicesPageConfig.hero.primaryButton} {arrowIcon}
                            </Link>
                            <Link href="#services-list" className="flex items-center gap-2 bg-transparent border border-white/60 hover:border-white hover:bg-white/5 text-white px-8 py-3.5 rounded-md transition-all duration-300 font-medium">
                                {servicesPageConfig.hero.secondaryButton} {arrowIcon}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Video Section */}
            <section className="w-full bg-[#FFFDF5] py-24 lg:py-32">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="max-w-xl">
                            <p className="text-[#C8920A] tracking-wider text-sm font-semibold mb-6 flex items-center gap-2 font-outfit">
                                <span className="w-6 h-[1.5px] bg-[#C8920A]"></span>
                                How Our Services Work
                            </p>
                            <h2 className="text-5xl lg:text-[64px] font-medium leading-[1.1] text-[#162018] mb-8 font-cormorant">
                                12 services. <br />
                                <span className="text-[#C8920A] italic">One accountable team.</span>
                            </h2>
                            <p className="text-[17px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                See how our specialty-organized billing teams manage the complete revenue cycle — from coding and claims through denial management, IDR, and arbitration — all in-house.
                            </p>
                        </div>
                        <div className="relative w-full rounded-[24px] overflow-hidden shadow-xl">
                            <Image
                                src="/images/service 1.jpg"
                                alt="Services Breakdown"
                                width={800}
                                height={500}
                                className="w-full h-auto object-cover aspect-[16/10] opacity-90"
                            />
                            <button className="absolute inset-0 flex items-center justify-center group" aria-label="Play video">
                                <div className="absolute inset-0 bg-[#162018]/10 group-hover:bg-[#162018]/20 transition-colors duration-300"></div>
                                <div className="w-[100px] h-[100px] bg-black/20 rounded-full flex items-center justify-center backdrop-blur-md relative z-10">
                                    <div className="w-[64px] h-[64px] bg-[#C8920A] group-hover:bg-[#E0A800] transition-colors duration-300 rounded-full flex items-center justify-center shadow-lg">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                            <path d="M5 3l14 9-14 9V3z" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services-list" className="w-full bg-[#fcfbf5] py-20 sm:py-28">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-[1400px]">
                    <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
                        <p className="text-[#C8920A] tracking-wider text-sm font-semibold mb-6 flex items-center justify-center gap-2 font-outfit">
                            <span className="w-6 h-[1.5px] bg-[#C8920A]"></span>
                            {servicesPage.scope.tagline}
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.1] text-[#162018] mb-6 font-cormorant">
                            {servicesPage.scope.headingPart1} <span className="text-[#C8920A] italic">{servicesPage.scope.headingHighlight}</span>
                        </h2>
                        <p className="text-[17px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                            {servicesPage.scope.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {servicesPage.scope.cards.map((card, idx) => {
                            if (card.style === "list") {
                                return (
                                    <article
                                        key={idx}
                                        className="group rounded-2xl border border-[#D1D1C7]/60 bg-[#FAFAEE] p-6 lg:p-8 flex flex-col cursor-pointer hover:-translate-y-2 hover:border-[#C8920A]/50 transition-all duration-500 ease-out h-[480px] lg:h-[520px]"
                                    >
                                        {/* Badge */}
                                        <div className="mb-6 inline-flex w-fit bg-[#C8920A] rounded-full px-3 py-1 items-center gap-2 group-hover:bg-[#162018] transition-colors duration-400">
                                            <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
                                            <span className="text-xs font-bold text-white tracking-wide font-outfit">
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
                                    className="group rounded-2xl border border-[#D1D1C7]/60 bg-white hover:bg-[#FAFAEE] p-6 lg:p-8 flex flex-col cursor-pointer hover:-translate-y-2 hover:border-[#C8920A]/40 transition-all duration-500 ease-out overflow-hidden h-[480px] lg:h-[520px]"
                                >
                                    {/* Collapsing Image Section */}
                                    <div className="transition-all duration-500 ease-in-out h-[240px] mb-6 group-hover:h-0 group-hover:mb-0 group-hover:opacity-0 overflow-hidden rounded-xl shrink-0">
                                        <div className="relative w-full h-[240px]">
                                            <Image
                                                src={card.image!}
                                                alt={card.title}
                                                fill
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                                            
                                            <div className="absolute bottom-4 left-4 bg-[#C8920A] rounded-full px-3 py-1 flex items-center gap-2 transition-opacity duration-300 group-hover:opacity-0">
                                                <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
                                                <span className="text-xs font-bold text-white tracking-wide font-outfit shadow-sm">
                                                    {card.badge}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanding Content Section */}
                                    <div className="flex flex-col flex-1 transition-all duration-500">
                                        {/* Hover Badge (expands and fades in) */}
                                        <div className="transition-all duration-500 ease-in-out grid grid-rows-[0fr] group-hover:grid-rows-[1fr]">
                                            <div className="overflow-hidden">
                                                <div className="mb-4 inline-flex w-fit bg-[#C8920A] rounded-full px-3 py-1 items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                    <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
                                                    <span className="text-xs font-bold text-white tracking-wide font-outfit">
                                                        {card.badge}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-[24px] group-hover:text-[26px] font-medium text-[#162018] mb-3 group-hover:mb-4 font-cormorant leading-tight group-hover:text-[#C8920A] transition-all duration-500">
                                            {card.title}
                                        </h3>
                                        
                                        <p className="text-[14px] text-[#162018]/70 group-hover:text-[#162018]/80 leading-relaxed font-outfit font-medium transition-colors duration-500">
                                            {card.description}
                                        </p>

                                        {/* Hover List Items (expands and fades in) */}
                                        <div className="transition-all duration-500 ease-in-out grid grid-rows-[0fr] group-hover:grid-rows-[1fr] mt-auto">
                                            <div className="overflow-hidden">
                                                <ul className="flex flex-col gap-4 pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 font-outfit">
                                                    {card.listItems?.map((item: string, i: number) => (
                                                        <li key={i} className="flex gap-3 text-[13px] text-[#162018]/80 leading-relaxed font-semibold">
                                                            <span className="mt-[6px] shrink-0 w-2 h-2 rounded-full bg-[#C8920A] group-hover:scale-125 transition-transform duration-300 delay-200"></span>
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
