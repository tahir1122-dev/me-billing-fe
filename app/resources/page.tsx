import type { Metadata } from "next";
import ResourcesTabs from "@/components/sections/ResourcesTabs";
import Image from "next/image";
import { PageContentService } from "@/services/pageContent.service";

export const metadata: Metadata = {
    title: "Resources | Me Billing",
    description: "Insights, Research & Real-World Results. Case studies, industry articles, events, and press releases."
};

export default async function ResourcesPage() {
    const pageData = await PageContentService.getPage("resources");
    const resourcesTabsData = pageData?.sections?.ResourcesTabs || {};
    const featuredVideos = pageData?.sections?.FeaturedVideos || {};

    return (
        <main className="flex-1 w-full bg-gradient-to-b from-[#FFFDF5] via-[#FFFDF5]/95 to-[#FFFDF5] font-outfit">
            {/* Top Hero Section */}
            <div className="w-full relative overflow-hidden bg-[#162018] font-cormorant">
                {/* Background Image loaded with correct double-spaced path */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/resources  bg.jpg"
                        alt="Resources Background"
                        fill
                        className="object-cover opacity-60"
                        sizes="100vw"
                        priority
                    />
                    {/* Dark overlay with reduced opacity and blur effect to ensure excellent text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111A13]/95 via-[#111A13]/85 to-[#111A13]/70 backdrop-blur-[2px]" />
                </div>

                {/* Header Content Section */}
                <section className="relative z-10 w-full py-12 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 container mx-auto max-w-7xl text-white">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[2px] w-8 bg-[#C8920A]"></div>
                            <span className="text-[#C8920A] font-bold tracking-widest text-[13px] uppercase font-cormorant">
                                RESOURCES
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-medium text-white leading-[1.1] mb-6 font-cormorant">
                            Insights, Research & <br />
                            <span className="text-[#C8920A] italic">Real-World Results.</span>
                        </h1>
                        <p className="text-white/90 text-lg sm:text-[20px] leading-relaxed max-w-2xl font-medium font-cormorant">
                            Case studies, industry articles, events, and press releases – everything MeBilling publishes to help healthcare providers understand and improve their revenue cycle.
                        </p>
                    </div>
                </section>
            </div>

            {/* Featured Videos Section exactly replicating Screenshot 1 */}
            <section className="w-full py-12 md:py-16 lg:py-24 border-b border-gray-200/60">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-10 lg:mb-12">
                        <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-2 font-outfit">
                            {featuredVideos.tagline || "— Featured Videos"}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#162018] font-cormorant leading-tight">
                            {featuredVideos.titlePart1 || "Insights from our"} <span className="text-[#C8920A] italic">{featuredVideos.titleHighlight || "RCM specialists."}</span>
                        </h2>
                    </div>

                    {/* 3 Video Thumbnail Cards Grid exactly matching screenshot 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {featuredVideos.videos ? featuredVideos.videos.map((item: any, index: number) => (
                            <div 
                                key={index}
                                className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 aspect-[16/10] cursor-pointer group bg-[#162018]"
                            >
                                <video
                                    src={item.video}
                                    poster=""
                                    controls
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )) : [1, 2, 3].map((item, index) => (
                            <div 
                                key={item}
                                className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 aspect-[16/10] cursor-pointer group bg-[#162018]"
                            >
                                <video
                                    src={`https://ccbtiisgqfffxfkgpaon.supabase.co/storage/v1/object/public/assets/video 0${4 + index}.mp4`}
                                    poster=""
                                    controls
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wide Banner Section exactly replicating Screenshot 2 */}
            <section className="w-full py-8 lg:py-16">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[380px] rounded-[24px] overflow-hidden shadow-md group">
                        {/* High-resolution image covering banner full bleed */}
                        <Image
                            src="https://ccbtiisgqfffxfkgpaon.supabase.co/storage/v1/object/public/assets/resource_insight.webp"
                            alt="Practice Leaders Insight Banner"
                            fill
                            className="object-cover group-hover:scale-102 transition-transform duration-700"
                        />
                        {/* Subtle inner dark gradient on bottom left to make the button stand out beautifully */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                        {/* Bottom-left Overlaid Golden Pill Button exactly as shown in Screenshot 2 */}
                        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 z-10">
                            <div className="bg-[#C8920A] hover:bg-[#b58308] transition-colors cursor-pointer text-black px-6 py-3 rounded-full inline-flex items-center gap-3 shadow-lg">
                                <span className="w-2 h-2 rounded-full bg-black shrink-0"></span>
                                <span className="font-outfit text-sm sm:text-base font-bold tracking-wide">
                                    Insights for Practice Leaders
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section (Tabs and Grid) */}
            <section className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <ResourcesTabs data={resourcesTabsData} />
                </div>
            </section>
        </main>
    );
}
