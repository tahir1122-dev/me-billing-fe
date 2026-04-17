import Image from "next/image";

const testimonials = [
    {
        name: "James T.",
        role: "Hunt Regional Medical Center",
        quote:
            "MeBilling helped us increase collections and significantly reduce denials. Their team is professional, responsive, and truly committed to our success.",
        rating: 5,
    },
    {
        name: "Dr. Syed Khaja",
        role: "Southwest Medical Center, Houston, TX",
        quote:
            "Since partnering with MeBilling, our collections have exceeded expectations. Their professional approach and responsiveness make them easy to work with and highly reliable.",
        rating: 5,
    },
    {
        name: "James T.",
        role: "Hunt Regional Medical Center",
        quote:
            "MeBilling helped us increase collections and significantly reduce denials. Their team is professional, responsive, and truly committed to our success.",
        rating: 5,
    },
];

const avatar = "/images/testnomial.png";

const QuoteIcon = ({ className }: { className?: string }) => (
    <svg
        width="201"
        height="130"
        viewBox="0 0 201 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            opacity="0.08"
            d="M175.754 48.9442C183.17 51.4161 189.103 55.8656 193.552 62.2926C198.002 68.2253 200.226 74.8995 200.226 82.3153C200.721 89.7311 198.743 97.1469 194.294 104.563C190.339 111.484 183.912 117.417 175.013 122.361C160.675 129.776 148.069 131.754 137.192 128.293C126.316 124.338 118.653 118.405 114.203 110.495C111.731 106.54 109.754 101.102 108.271 94.1805C107.282 87.2591 106.787 80.0905 106.787 72.6747C107.282 64.7646 108.271 57.1016 109.754 49.6858C111.237 42.27 113.462 36.0902 116.428 31.1463C118.9 27.6856 121.866 23.9777 125.327 20.0226C128.293 16.5619 131.754 13.1012 135.709 9.64053C140.158 6.17983 145.102 2.96632 150.541 0L176.496 1.48316C173.035 5.43825 169.822 9.14614 166.855 12.6068C164.383 15.5732 162.159 18.2923 160.181 20.7642C158.204 23.2361 156.226 25.4609 154.248 27.4384C150.788 30.8991 148.069 34.3598 146.091 37.8205C144.114 40.7868 142.383 44.0004 140.9 47.4611C139.911 50.9218 139.911 54.3825 140.9 57.8432C147.327 50.9218 154.743 47.4611 163.147 47.4611C167.102 47.4611 171.305 47.9554 175.754 48.9442ZM73.4163 52.6521C80.3377 56.6072 85.2816 62.0455 88.2479 68.9669C91.7086 75.3939 92.9446 82.3153 91.9558 89.7311C90.967 97.1469 87.7535 104.068 82.3153 110.495C77.3714 116.922 69.9556 121.866 60.0679 125.327C44.7419 130.271 32.1351 130.024 22.2474 124.585C12.3596 118.653 5.68544 111.484 2.22474 103.079C0.741579 98.63 0 92.9446 0 86.0232C0 79.1018 0.741579 71.9332 2.22474 64.5174C3.7079 57.1016 5.68544 49.933 8.15737 43.0116C10.6293 36.0902 13.8428 30.4047 17.7979 25.9553C20.7642 22.4946 24.2249 19.2811 28.18 16.3147C31.6407 13.8428 35.5958 11.1237 40.0453 8.15737C44.9891 5.19105 50.4274 2.47193 56.36 0L82.3153 6.67421C78.3602 10.1349 74.6523 13.1012 71.1916 15.5732C68.2253 18.0451 65.5061 20.2698 63.0342 22.2474C60.5623 24.2249 58.0904 26.2025 55.6184 28.18C52.1577 31.1463 49.1914 34.1126 46.7195 37.079C44.2476 39.5509 42.0228 42.5172 40.0453 45.9779C38.0677 48.9442 37.3261 52.1577 37.8205 55.6184C41.7756 52.6521 45.7307 50.9218 49.6858 50.4274C54.1353 49.4386 58.0904 49.1914 61.5511 49.6858C65.5061 50.1802 69.4612 51.169 73.4163 52.6521Z"
            fill="#ffffff"
        />
    </svg>
);

function Stars({ value, isCentre }: { value: number; isCentre: boolean }) {
    return (
        <div className="flex gap-1" aria-label={`${value} star rating`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill={isCentre ? "#FFC54D" : "white"}
                    stroke={isCentre ? "#FFC54D" : "white"}
                    strokeWidth="0.5"
                >
                    <path d="M12 2l2.93 5.93L22 9l-5 4.87L18.18 22 12 18.77 5.82 22 7 13.87 2 9l7.07-1.07L12 2z" />
                </svg>
            ))}
        </div>
    );
}

export default function TestimonialsSection() {
    return (
        <section className="w-full bg-white py-16 sm:py-20">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center">
                    <span className="inline-flex items-center rounded-full bg-[#E6F6FB] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#09A8D4]">
                        Testimonials
                    </span>
                    <h2 className="mt-4 text-2xl font-semibold text-slate-800 sm:text-3xl">
                        Trusted by <span className="text-[#09A8D4]">15,000+</span> happy customers are using MeBilling
                    </h2>
                </div>

                {/* Cards */}
                <div className="relative mt-14 flex flex-wrap items-start justify-center gap-6 sm:gap-8">

                    {/* LEFT CARD */}
                    <div className="relative z-10 w-[300px] flex-shrink-0 sm:w-[320px] md:translate-x-6 md:translate-y-10 xl:w-[330px]">
                        <article
                            className="relative flex min-h-[420px] w-full flex-col overflow-hidden rounded-[28px] px-6 py-7"
                            style={{
                                background: "linear-gradient(135deg, #28353d 0%, #1c2a35 40%, #111e28 70%, #0d1822 100%)",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.30)",
                            }}
                        >
                            <div className="absolute right-3 top-3">
                                <QuoteIcon />
                            </div>
                            <div className="flex items-center gap-3 relative z-10">
                                <span className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/40">
                                    <Image src={avatar} alt={testimonials[0].name} width={48} height={48} className="h-full w-full object-cover" />
                                </span>
                                <div>
                                    <h3 className="text-base font-semibold text-white">{testimonials[0].name}</h3>
                                    <p className="text-xs text-white/55">{testimonials[0].role}</p>
                                </div>
                            </div>
                            <p className="relative z-10 mt-5 flex-1 text-sm leading-relaxed text-white/70">
                                {testimonials[0].quote}
                            </p>
                            <div className="relative z-10 mt-6">
                                <Stars value={testimonials[0].rating} isCentre={false} />
                            </div>
                        </article>
                    </div>

                    {/* CENTER CARD */}
                    <div className="relative z-20 w-[320px] flex-shrink-0 sm:w-[340px] xl:w-[360px]">
                        <article
                            className="relative flex min-h-[470px] w-full flex-col overflow-hidden rounded-[28px] px-7 py-8"
                            style={{
                                background: "#09A8D4",
                                boxShadow: "0 28px 70px rgba(9,168,212,0.40), 0 8px 24px rgba(9,168,212,0.25)",
                            }}
                        >
                            <div className="absolute right-3 top-3">
                                <QuoteIcon />
                            </div>
                            <div className="flex items-center gap-3 relative z-10">
                                <span className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/70">
                                    <Image src={avatar} alt={testimonials[1].name} width={48} height={48} className="h-full w-full object-cover" />
                                </span>
                                <div>
                                    <h3 className="text-base font-semibold text-white">{testimonials[1].name}</h3>
                                    <p className="text-xs text-white/80">{testimonials[1].role}</p>
                                </div>
                            </div>
                            <p className="relative z-10 mt-5 flex-1 text-sm leading-relaxed text-white/93">
                                {testimonials[1].quote}
                            </p>
                            <div className="relative z-10 mt-6">
                                <Stars value={testimonials[1].rating} isCentre={true} />
                            </div>
                        </article>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="relative z-10 w-[300px] flex-shrink-0 sm:w-[320px] md:-translate-x-6 md:translate-y-10 xl:w-[330px]">
                        <article
                            className="relative flex min-h-[420px] w-full flex-col overflow-hidden rounded-[28px] px-6 py-7"
                            style={{
                                background: "linear-gradient(225deg, #28353d 0%, #1c2a35 40%, #111e28 70%, #0d1822 100%)",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.30)",
                            }}
                        >
                            <div className="absolute right-3 top-3">
                                <QuoteIcon />
                            </div>
                            <div className="flex items-center gap-3 relative z-10">
                                <span className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/40">
                                    <Image src={avatar} alt={testimonials[2].name} width={48} height={48} className="h-full w-full object-cover" />
                                </span>
                                <div>
                                    <h3 className="text-base font-semibold text-white">{testimonials[2].name}</h3>
                                    <p className="text-xs text-white/55">{testimonials[2].role}</p>
                                </div>
                            </div>
                            <p className="relative z-10 mt-5 flex-1 text-sm leading-relaxed text-white/70">
                                {testimonials[2].quote}
                            </p>
                            <div className="relative z-10 mt-6">
                                <Stars value={testimonials[2].rating} isCentre={false} />
                            </div>
                        </article>
                    </div>

                </div>

                {/* Dots */}
                <div className="mt-12 flex justify-center gap-2">
                    {[0, 1, 2, 3].map((dot) => (
                        <span
                            key={dot}
                            className="h-2 rounded-full"
                            style={{
                                width: dot === 1 ? "24px" : "8px",
                                background: dot === 1 ? "#09A8D4" : "#e2e8f0",
                            }}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}