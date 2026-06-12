export const metadata = {
    title: "Cookie Policy | MeBilling",
    description: "Information about how we use cookies and tracking technologies.",
};
export const dynamic = 'force-dynamic';

export default function CookiePolicyPage() {
    return (
        <div className="bg-[#FFFDF5] min-h-screen py-24 font-outfit">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-4">
                        — PRIVACY
                    </span>
                    <h1 className="text-4xl md:text-5xl font-medium text-[#162018] leading-tight font-cormorant mb-6">
                        Cookie <span className="text-[#C8920A] italic">Policy</span>
                    </h1>
                </div>

                <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#082610]/10 shadow-sm prose prose-slate max-w-none">
                    {/* <p className="text-slate-500 mb-6">
                        <em>Last Updated: [Date]</em>
                    </p> */}
                    <p>
                        This is a placeholder for your official Cookie Policy. You must have your legal counsel provide the exact wording for this page, especially regarding HIPAA-compliant tracking for healthcare entities.
                    </p>
                    <h2 className="text-xl font-semibold text-[#162018] mt-8 mb-4">What Are Cookies?</h2>
                    <p>
                        Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember if you have been to the website before.
                    </p>
                    <h2 className="text-xl font-semibold text-[#162018] mt-8 mb-4">How We Use Cookies</h2>
                    <p>
                        We use cookies to improve your experience on our site, analyze website traffic, and understand where our audience is coming from. We do not use tracking pixels or cookies to collect or transmit Protected Health Information (PHI).
                    </p>

                    {/* <div className="mt-12 p-6 bg-[#FAFAEE] rounded-xl border border-[#C8920A]/20">
                        <p className="text-sm text-slate-600 m-0">
                            <strong>Note to Administrator:</strong> Please replace this text with your legally approved Cookie Policy, ensuring compliance with HHS guidelines on online tracking technologies.
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
