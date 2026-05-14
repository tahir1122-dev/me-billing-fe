import Image from "next/image";
import type { Metadata } from "next";
import seoContent from "@/data/seo-content.json";

const { seo, content } = seoContent.about;

export const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: seo.openGraph,
    twitter: seo.twitter as Metadata["twitter"]
};

const arrowIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const aboutData = {
    buttons: {
        primary: "Talk to Our Team",
        secondary: "View Services"
    }
};

export default function AboutPage() {
    return (
        <main className="flex-1 w-full bg-white font-cormorant">
            {/* Hero Section */}
            <section className="relative flex max-w-[1920px] mx-auto h-[900px] w-full items-center overflow-hidden bg-[#1D2B24]">
                <div className="absolute inset-0">
                    <Image
                        src="/images/about Bg .png"
                        alt="About Background"
                        fill
                        className="object-cover opacity-50"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                </div>
                <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-20 text-white">
                    <div className="max-w-3xl">
                        <p className="text-[#D4AF37] tracking-wider uppercase text-sm md:text-base font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
                            {content.hero.heading}
                        </p>
                        <h1 className="text-5xl md:text-7xl font-medium leading-tight text-white mb-2">
                            The Team Behind <br />
                            <span className="text-[#D4AF37] italic">Your Cleaner Revenue.</span>
                        </h1>
                        <p className="mt-8 text-lg text-white/90 max-w-2xl leading-relaxed">
                            {content.hero.description}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button className="flex items-center gap-2 bg-[#1A6B3A] hover:bg-[#13522C] text-white px-8 py-4 rounded-md transition-all duration-300 font-medium">
                                {aboutData.buttons.primary} {arrowIcon}
                            </button>
                            <button className="flex items-center gap-2 bg-transparent border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-md transition-all duration-300 font-medium">
                                {aboutData.buttons.secondary} {arrowIcon}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="relative w-full overflow-hidden bg-[#F9F9F7] py-24 lg:py-32">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-7xl">
                    <div className="mb-14">
                        <p className="text-[#1A6B3A] font-semibold text-sm tracking-wider mb-6 font-outfit">
                            {content.mission.tagline}
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-[#162018] leading-tight font-cormorant">
                            {content.mission.headingPart1} <span className="text-[#C8920A] italic">{content.mission.headingHighlight}</span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24 items-center">
                        <div className="w-full lg:w-5/12 flex flex-col gap-10">
                            <p className="text-[17px] text-[#162018]/80 font-outfit leading-relaxed font-medium">
                                {content.mission.p1}
                            </p>
                            <div className="bg-[#EFEFE3]/50 p-8 border-l-[4px] border-[#C8920A]">
                                <p className="text-[#162018]/90 font-outfit leading-relaxed font-medium">
                                    {content.mission.quote}
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-7/12 relative h-[400px] lg:h-[480px]">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image src="/images/about us team.jpg" alt="Team collaboration" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
                            </div>
                            <div className="absolute -bottom-5 right-4 lg:bottom-6 lg:-right-8 bg-[#C8920A] py-3 lg:py-4 px-6 lg:px-8 rounded-full flex items-center gap-3 shadow-xl z-10 transition-transform hover:scale-105">
                                <span className="w-2 h-2 rounded-full bg-[#162018]"></span>
                                <span className="text-[#162018] font-bold text-sm lg:text-base font-outfit tracking-wide">
                                    {content.mission.badge}
                                </span >
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.mission.stats.map((stat: { number: string; label: string }, idx: number) => (
                            <div key={idx} className="bg-white/40 rounded-[20px] border border-slate-300/80 px-8 py-12 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:bg-white transition-colors duration-300">
                                <h3 className="text-5xl lg:text-[64px] font-medium text-[#1A6B3A] font-cormorant mb-6 tracking-tight">
                                    {stat.number}
                                </h3>
                                <p className="text-sm font-bold text-[#162018] font-outfit whitespace-pre-line">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="relative w-full overflow-hidden bg-[#FFFDF5] py-24 lg:py-32">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-7xl text-center">
                    <div className="mb-20">
                        <p className="text-[#1A6B3A] font-semibold text-sm tracking-wider mb-6 font-outfit">
                            {content.story.tagline}
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-[#162018] leading-tight font-cormorant">
                            {content.story.headingPart1} <span className="text-[#C8920A] italic">{content.story.headingHighlight}</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
                        <div className="flex flex-col gap-6 text-left">
                            {content.story.milestones.slice(0, 2).map((milestone: { year: string; description: string }, idx: number) => (
                                <div key={idx} className="bg-white rounded-xl border border-slate-200/80 p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-5xl font-medium text-[#C8920A] font-cormorant mb-6">
                                        {milestone.year}
                                    </h3>
                                    <p className="text-[15px] leading-relaxed text-[#162018]/80 font-outfit">
                                        {milestone.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="relative w-full lg:w-[380px] h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl order-first lg:order-none">
                            <Image src="/images/about us team.jpg" alt="Team connection" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 400px" />
                        </div>

                        <div className="flex flex-col gap-6 text-left">
                            {content.story.milestones.slice(2, 4).map((milestone: { year: string; description: string }, idx: number) => (
                                <div key={idx} className="bg-white rounded-xl border border-slate-200/80 p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-5xl font-medium text-[#C8920A] font-cormorant mb-6">
                                        {milestone.year}
                                    </h3>
                                    <p className="text-[15px] leading-relaxed text-[#162018]/80 font-outfit">
                                        {milestone.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="relative w-full overflow-hidden bg-[#F7F8F6] py-24 lg:py-32">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-7xl">
                    <div className="mb-16 md:mb-24">
                        <p className="text-[#1A6B3A] font-semibold text-sm tracking-wider mb-6 font-outfit">
                            {content.values.tagline}
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-[#162018] leading-tight font-cormorant">
                            {content.values.headingPart1} <span className="text-[#C8920A] italic">{content.values.headingHighlight}</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {content.values.items.map((item: { icon: string; title: string; description: string }, idx: number) => (
                            <div key={idx} className="bg-transparent rounded-2xl border border-[#D1D1C7]/60 p-8 lg:p-10 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group">
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-14 h-14 rounded-[14px] bg-[#1A6B3A] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <Image src={item.icon} alt={item.title} width={28} height={28} className="object-contain" />
                                    </div>
                                    <h3 className="text-2xl font-medium text-[#162018] font-cormorant">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-[#162018]/80 text-[15px] font-outfit leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance Section */}
            <section className="relative w-full overflow-hidden bg-[#FFFDF5] py-24 lg:py-32">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">
                        <div>
                            <div className="mb-12">
                                <p className="text-[#1A6B3A] font-semibold text-sm tracking-wider mb-6 font-outfit">
                                    {content.compliance.tagline}
                                </p>
                                <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-[#162018] leading-tight font-cormorant mb-6">
                                    {content.compliance.headingPart1} <span className="text-[#C8920A] italic">{content.compliance.headingHighlight}</span>
                                </h2>
                                <p className="text-[#162018]/80 text-[17px] font-outfit leading-relaxed font-medium max-w-2xl">
                                    {content.compliance.description}
                                </p>
                            </div>

                            <div className="flex flex-col gap-6 mb-12">
                                {content.compliance.certifications.map((cert: { badge: string; title: string; description: string }, idx: number) => (
                                    <div key={idx} className="bg-transparent rounded-2xl border border-[#D1D1C7]/60 p-6 lg:p-8 flex items-center gap-6 hover:bg-white hover:shadow-md transition-all duration-300">
                                        <div className="w-[72px] h-[72px] rounded-full bg-[#1A6B3A] flex items-center justify-center shrink-0 shadow-inner">
                                            <span className="text-white font-bold text-sm tracking-wider font-outfit">
                                                {cert.badge}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-[17px] font-bold text-[#162018] font-outfit">
                                                {cert.title}
                                            </h3>
                                            <p className="text-[15px] text-[#162018]/70 font-outfit font-medium">
                                                {cert.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap xl:flex-nowrap gap-3 lg:gap-4 w-full mt-auto">
                                {content.compliance.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="bg-[#EFEFE3]/70 px-3 xl:px-4 py-3 rounded-md flex items-center justify-center gap-2 w-full sm:w-[calc(50%-0.375rem)] xl:w-auto xl:flex-1 whitespace-nowrap">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 xl:w-[18px] xl:h-[18px]">
                                            <path d="M5 13L9 17L19 7" stroke="#C8920A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-[#C8920A] font-bold text-[13px] font-outfit">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative w-full max-w-[500px] mx-auto lg:w-[500px]">
                            <Image
                                src="/images/certificate.png"
                                alt="HIPAA Compliant Certificate"
                                width={500}
                                height={600}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
