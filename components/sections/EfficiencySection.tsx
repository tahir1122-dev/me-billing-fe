import Image from "next/image";

const items = ["Smart Claims", "Complete RCM", "Active Follow-Up"];

export default function EfficiencySection() {
    return (
        <section className=" container-fluid relative w-full overflow-visible py-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 ">
                <Image
                    src="/images/shape.png"
                    alt=""
                    width={2042}
                    height={1086}
                    className="shape-image "
                    priority={false}
                />
            </div>

            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-start">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-semibold text-slate-800 sm:text-4xl">
                            Minimize effort.
                            <br />
                            <span className="text-brand">Maximize efficiency.</span>
                        </h2>
                        <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-700 sm:text-base">
                            MeBilling is purpose-built to automate work, prioritize tasks, and
                            eliminate errors. Pervasive across the end-to-end software platform,
                            our AI solutions drive efficiency and yield meaningful results for
                            healthcare providers.
                        </p>

                        <div className="mt-8 space-y-4">
                            {items.map((item) => (
                                <div key={item} className="flex items-center justify-between border-b border-slate-200 pb-3">
                                    <span className="text-base font-semibold text-slate-800">
                                        {item}
                                    </span>
                                    <Image src="/images/Vector.svg" alt="" width={16} height={16} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="relative mx-auto h-[520px] w-full max-w-[800px] overflow-hidden rounded-[24px] border border-[#222E34] shadow-[0_0_30px_10px_rgba(0,0,0,0.1)] sm:h-[600px]">
                            <Image
                                src="/images/doc 2.png"
                                alt="Care professional with patient"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 800px"
                            />
                            <button
                                className="absolute z-20 transition-transform hover:scale-110"
                                style={{
                                    top: "50%",
                                    right: "26%",
                                    transform: "translate(-50%, -50%)",
                                    background: "none",
                                    border: "none",
                                    padding: 0,
                                    cursor: "pointer",
                                    /* Glow effect */
                                    filter: "drop-shadow(0 0 18px rgba(9, 168, 212, 0.7)) drop-shadow(0 0 36px rgba(9, 168, 212, 0.4))",
                                }}
                            >
                                <svg
                                    width="100"
                                    height="100"
                                    viewBox="0 0 168 168"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="84" cy="84" r="84" fill="#09A8D4" fillOpacity="0.4" />
                                    <rect x="66" y="63" width="42" height="44" fill="white" />
                                    <mask
                                        id="mask0_153_95"
                                        style={{ maskType: "luminance" }}
                                        maskUnits="userSpaceOnUse"
                                        x="34" y="34" width="100" height="100"
                                    >
                                        <path
                                            d="M84.0013 132.333C110.696 132.333 132.335 110.695 132.335 84.0001C132.335 57.3056 110.696 35.6667 84.0013 35.6667C57.3068 35.6667 35.668 57.3056 35.668 84.0001C35.668 110.695 57.3068 132.333 84.0013 132.333Z"
                                            fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"
                                        />
                                        <path
                                            d="M74.3359 84V67.2573L88.8359 75.6287L103.336 84L88.8359 92.3713L74.3359 100.743V84Z"
                                            fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round"
                                        />
                                    </mask>
                                    <g mask="url(#mask0_153_95)">
                                        <path d="M26 26H142V142H26V26Z" fill="#09A8D4" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
