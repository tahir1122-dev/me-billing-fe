import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="relative w-full overflow-hidden bg-white"
            style={{
                height: "936px",
                maxWidth: "1920px",
                margin: "0 auto",
            }}
        >
            {/* DOCTOR IMAGE — smaller, contained to right side */}
            <div
                className="absolute"
                style={{
                    top: "0",
                    bottom: "0",
                    right: "0",
                    width: "58%",
                }}
            >
                <Image
                    src="/images/Hero .jpg"
                    alt="Doctor holding mobile device"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "20% center" }}
                    priority
                />

                {/* Smooth fade into white on left edge */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.75) 12%, rgba(255,255,255,0.2) 26%, transparent 42%)",
                    }}
                />
            </div>

            {/* Solid white block — clean text background */}
            <div
                className="absolute top-0 bottom-0 left-0 bg-white"

            />

            {/* TEXT CONTENT */}
            <div
                className="relative z-10 flex items-center h-full"
                style={{ paddingLeft: "clamp(2rem, 6vw, 112px)" }}
            >
                <div
                    className="w-full max-w-[640px] bg-no-repeat bg-cover bg-right"
                    style={{
                        backgroundImage: "url('/images/backgroud%20image.png')",
                    }}
                >
                    <h1 className="font-semibold text-[#1a1c21] tracking-tight text-[38px] sm:text-[46px] lg:text-[56px] leading-[1.2]">
                        Streamline <span className="text-brand">Medical Billing</span>
                        <br />
                        and Maximize Your <span className="text-brand">Practice</span>
                        <br />
                        <span className="text-brand">Revenue</span>
                    </h1>

                    <p className="mt-5 text-slate-700 font-medium leading-relaxed text-[14px] sm:text-[16px] lg:text-[18px] max-w-[480px]">
                        Smart, secure billing solutions built for doctors, clinics, and
                        healthcare teams.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
                        <Link
                            href="/demo"
                            className="group flex items-center justify-center gap-4 bg-brand hover:bg-[#009bc2] text-white font-semibold transition-all w-full sm:w-auto"
                            style={{
                                padding: "13px 28px",
                                borderRadius: "9999px",
                                fontSize: "16px",
                            }}
                        >
                            Request Demo
                            <span className="bg-white rounded-full p-1.5 transition-transform group-hover:rotate-45">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="3">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </span>
                        </Link>

                        <Link
                            href="/tour"
                            className="group flex items-center justify-center gap-4 bg-white text-brand hover:bg-brand/5 font-semibold transition-all w-full sm:w-auto"
                            style={{
                                padding: "13px 28px",
                                borderRadius: "9999px",
                                fontSize: "16px",
                                border: "2.5px solid #00AEEF",
                            }}
                        >
                            Take a quick tour
                            <span className="bg-brand rounded-full p-1.5 transition-transform group-hover:rotate-45">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* GLOWING PLAY BUTTON SVG — positioned on doctor's chest */}
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
        </section>
    );
}