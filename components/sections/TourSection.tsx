import Image from "next/image";

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

export default function TourSection() {
    return (
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
    );
}
