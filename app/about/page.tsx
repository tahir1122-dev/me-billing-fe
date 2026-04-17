import Image from "next/image";
import type { Metadata } from "next";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
    title: "About Us | Me Billing",
};
const arrowIcon = (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19.8032 17.0756L19.6175 8.00301L10.5448 8.18877M18.6076 9.0551L8.10494 19.9968"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="square"
        />
    </svg>
);
export default function AboutPage() {
    return (
        <main className="flex-1 w-full bg-white">
            <section className="relative flex h-[460px] w-full items-center overflow-hidden bg-[#09A8D4]">
                <div className="absolute inset-0">
                    <Image
                        src="/images/about us bg .jpg"
                        alt=""
                        fill
                        className="object-cover opacity-60"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#09A8D4]/40" />
                </div>
                <div className="relative z-10 container mx-auto max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-semibold sm:text-4xl">About Us</h1>
                    <p className="mt-3 text-sm text-white/90 sm:text-base">
                        Protecting People with Emerging Technologies
                    </p>
                </div>
            </section>

            <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20">
                <div className="pointer-events-none absolute inset-0">
                    <Image
                        src="/images/shape.png"
                        alt=""
                        width={2042}
                        height={1086}
                        className="shape-image"
                        priority={false}
                    />
                </div>

                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-start">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl font-semibold text-slate-800 sm:text-4xl">
                                We love a <span className="text-brand">Good</span>
                                <br />
                                <span className="text-brand">Challenge.</span>
                            </h2>
                            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-700 sm:text-base">
                                Our team of specialists can handle any digital project or challenge thrown our way, and
                                we mean it. From high-performance websites to mobile apps and integrated marketing
                                campaigns, our work is beautiful, functional, and always focused on meeting your goals.
                            </p>
                            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-700 sm:text-base">
                                At MeBilling, we believe in partnerships and collaboration, pure and simple. Your goals
                                become our goals.Your frustrations become our opportunities. Together, we get results.
                            </p>

                            <button
                                type="button"
                                className="mt-8 inline-flex items-center gap-4 rounded-full bg-[#15ABD5] px-6 py-3 text-sm font-semibold text-white"
                            >
                                Take a demo
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#15ABD5]">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative mx-auto h-[520px] w-full max-w-[800px] overflow-hidden rounded-[24px] border border-[#222E34] shadow-[0_0_30px_10px_rgba(0,0,0,0.1)] sm:h-[600px]">
                                <Image
                                    src="/images/about us team.jpg"
                                    alt="Team collaboration"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 800px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#E6F6FB] py-16 sm:py-20">
                <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">We Believe In</h2>
                    </div>

                    <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-slate-800">
                            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M98.2422 35.1754C98.2422 16.749 83.2512 1.75801 64.8248 1.75801C46.3982 1.75801 31.407 16.749 31.407 35.1754C31.407 42.2818 33.6385 48.876 37.435 54.2977L31.2299 60.5027C29.318 59.858 27.1186 60.2951 25.5979 61.8154L3.35742 84.0561C2.32598 85.0873 1.75781 86.4629 1.75781 87.9295C1.75781 89.3959 2.32578 90.7715 3.35703 91.8029L8.19687 96.6426C9.22852 97.6742 10.6041 98.2422 12.0705 98.2422C13.5369 98.2422 14.9127 97.6742 15.9439 96.643L38.1848 74.4019C39.7053 72.8812 40.142 70.6818 39.4973 68.7701L45.7023 62.565C51.124 66.3617 57.7182 68.5932 64.8248 68.5932C83.2512 68.593 98.2422 53.6018 98.2422 35.1754ZM36.2512 72.4684L14.0104 94.7094C13.4955 95.2244 12.8066 95.5078 12.0705 95.5078C11.3344 95.5078 10.6455 95.2244 10.1307 94.7092L5.29082 89.8693C4.77559 89.3543 4.49219 88.6654 4.49219 87.9295C4.49219 87.1934 4.77559 86.5045 5.29082 85.9896L27.5314 63.7488C28.0662 63.2139 28.7688 62.9465 29.4713 62.9465C30.174 62.9465 30.8764 63.2139 31.4113 63.7488L36.2512 68.5885C37.3209 69.6582 37.3209 71.3988 36.2512 72.4684ZM37.965 66.4355L33.5648 62.0352L39.1084 56.4916C40.4361 58.0906 41.9098 59.5641 43.5086 60.8918L37.965 66.4355ZM64.8248 65.8586C47.9061 65.8586 34.1414 52.0939 34.1414 35.1752C34.1414 18.2566 47.9061 4.49219 64.8248 4.49219C81.7434 4.49238 95.5078 18.2568 95.5078 35.1754C95.5078 52.0941 81.7434 65.8586 64.8248 65.8586ZM85.999 30.0535C84.2047 30.0535 83.0832 28.8893 82.6318 27.7998C82.1805 26.7102 82.1504 25.0938 83.4191 23.825C83.9586 23.2855 84.2555 22.5682 84.2555 21.8055C84.2555 21.0424 83.9584 20.3252 83.4191 19.7861L80.2143 16.5809C79.1002 15.4672 77.2887 15.4674 76.175 16.5811C74.9064 17.8496 73.2898 17.8195 72.2004 17.3682C71.1107 16.9168 69.9465 15.7953 69.9465 14.001C69.9465 12.4264 68.6654 11.1451 67.0908 11.1451H62.5584C60.9838 11.1451 59.7025 12.4264 59.7025 14.001C59.7025 15.7955 58.5383 16.917 57.4486 17.3682C56.3592 17.8197 54.7428 17.8498 53.474 16.5809C52.9346 16.0414 52.2172 15.7445 51.4545 15.7445C50.6914 15.7445 49.9742 16.0416 49.435 16.5809L46.2299 19.7859C45.1166 20.8992 45.1166 22.7111 46.2301 23.825C47.4988 25.0936 47.4688 26.71 47.0172 27.7996C46.5658 28.8893 45.4443 30.0535 43.65 30.0535C42.0754 30.0535 40.7941 31.3348 40.7941 32.9094V37.4418C40.7941 39.0164 42.0754 40.2977 43.65 40.2977C45.4445 40.2977 46.566 41.4619 47.0172 42.5514C47.4688 43.641 47.4988 45.2572 46.2299 46.5262C45.1168 47.6396 45.1168 49.4516 46.2301 50.5652L49.435 53.7699C49.9742 54.3094 50.6914 54.6064 51.4545 54.6064C52.2172 54.6064 52.9346 54.3094 53.474 53.7701C54.7449 52.499 56.3617 52.5287 57.45 52.9793C58.5389 53.4303 59.7023 54.5527 59.7023 56.35C59.7023 57.9246 60.9836 59.2059 62.5582 59.2059H67.0906C68.6652 59.2059 69.9463 57.9246 69.9463 56.35C69.9463 54.5557 71.1105 53.4342 72.2 52.9828C73.29 52.5314 74.9062 52.5014 76.1748 53.7701C77.2889 54.8836 79.1004 54.8836 80.2141 53.7701L83.4189 50.5652C84.5324 49.4516 84.5324 47.6396 83.4189 46.526C82.1502 45.2574 82.1803 43.641 82.6316 42.5514C83.0832 41.4619 84.2047 40.2977 85.9988 40.2977C87.5734 40.2977 88.8547 39.0164 88.8547 37.4418V32.9094C88.8549 31.3348 87.5736 30.0535 85.999 30.0535Z" fill="#09A8D4" />
                            </svg>
                        </div>

                        <div className="max-w-md text-left">
                            <h3 className="text-lg font-semibold text-slate-900">Discovery</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                We analyze your financials, identify growth drivers, and prepare a market ready
                                package that maximizes appeal.
                            </p>
                        </div>

                        <div className="flex items-center gap-6">
                            <span className="h-10 w-px bg-slate-400" aria-hidden="true" />
                            <div className="text-sm text-slate-700">1 to 6</div>
                            <div className="flex items-center gap-2 text-slate-700">
                                <span className="text-xl">&#8592;</span>
                                <span className="text-xl">&#8594;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white py-16 sm:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                                Meet
                                <br />
                                <span className="text-brand">Our Team</span>
                            </h2>
                        </div>
                        <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                            Our team of specialists can handle any digital project or challenge thrown our way, and we
                            mean it. From high-performance websites to mobile apps and integrated marketing campaigns,
                            our work is beautiful, functional, and always focused on meeting your goals.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { image: "/images/team 1.jpg", name: "Ali Khan", role: "CEO & Chairman" },
                            { image: "/images/team 2.jpg", name: "Warmad Ilyas", role: "Chief Operating Officer" },
                            { textOnly: true, name: "Jnyn Hanna", role: "Vice President - USA" },
                            { image: "/images/team 3.jpg", name: "Awarew Edelstein", role: "Associate Director" },
                            { image: "/images/team 4.jpg", name: "Liz Marahall", role: "M&A Coordinator" },
                            { image: "/images/team 5 .jpg", name: "Chrlotte Fahy", role: "M&A Coordinator" },
                            { image: "/images/team 6.jpg", name: "Sue Robnson", role: "M&A Coordinator" },
                            { image: "/images/team 7.jpg", name: "Saantha Baker", role: "M&A Coordinator" },
                        ].map((member) => (
                            <article key={member.name} className="flex flex-col gap-3">
                                <div className="flex h-[400px] w-full max-w-[370px] items-center justify-center overflow-hidden rounded-[16px] bg-[#09A8D4]">
                                    {member.textOnly ? (
                                        <p className="px-6 text-sm leading-relaxed text-white">
                                            John Hanna is an experienced M&A strategist/advisor, CEO and Merchant Banker
                                            with a strong track record in building, acquiring, and scaling businesses.
                                            He has raised over $1.2 billion in debt and equity, led companies through
                                            public listings on Nasdaq and the NYSE, and successfully executed
                                            transactions across North America, Europe, the Middle East, and Asia.
                                        </p>
                                    ) : (
                                        <Image
                                            src={member.image || ""}
                                            alt={member.name}
                                            width={370}
                                            height={400}
                                            className="h-full w-full object-cover"
                                        />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-brand">{member.name}</h3>
                                    <p className="text-xs text-slate-500">{member.role}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#15ABD5] py-16 sm:py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                        <div className="order-1 text-left text-white">
                            <p className="text-lg font-semibold">Take a quick tour of</p>
                            <h2 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl">
                                mebilling EHR+ platform
                            </h2>
                            <p className="mt-4 max-w-lg text-sm text-white/90 sm:text-base">
                                See how our all-in-one EHR+ platform helps you save time, get paid faster, and grow your
                                practice.
                            </p>
                            <button
                                type="button"
                                className="mt-8 inline-flex items-center gap-4 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
                            >
                                Take a quick tour
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900">
                                    {arrowIcon}
                                </span>
                            </button>
                        </div>

                        <div className="order-2">
                            <Image
                                src="/images/EHR.png"
                                alt="MeBilling EHR dashboard"
                                width={860}
                                height={520}
                                className="h-auto w-full max-w-[620px]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            <FaqSection />
        </main>
    );
}
