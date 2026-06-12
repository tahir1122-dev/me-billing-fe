import Link from "next/link";
export const dynamic = 'force-dynamic';

export const metadata = {
    title: "Pricing | MeBilling",
    description: "Transparent, flexible pricing for our Revenue Cycle Management services.",
};

export default function PricingPage() {
    return (
        <div className="bg-[#FFFDF5] min-h-screen py-24 font-outfit">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-4">
                        — PRICING
                    </span>
                    <h1 className="text-4xl md:text-6xl font-medium text-[#162018] leading-tight font-cormorant mb-6">
                        Customized to <span className="text-[#C8920A] italic">Your Practice</span>
                    </h1>
                    <p className="text-slate-500 text-[18px] max-w-2xl mx-auto leading-relaxed">
                        We don't believe in one-size-fits-all. Every practice is unique, and our pricing is tailored to match your specific specialty, volume, and needs.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-10 md:p-14 border border-[#082610]/10 shadow-sm text-center">
                    <h2 className="text-2xl font-semibold text-[#162018] mb-4">
                        Get a Free Revenue Assessment
                    </h2>
                    <p className="text-slate-500 mb-8 max-w-xl mx-auto leading-relaxed">
                        Contact us to discuss your current billing situation. We'll provide a comprehensive assessment and a custom pricing proposal that aligns with your financial goals.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3.5 bg-[#C8920A] hover:bg-[#b07f08] text-white rounded-lg transition-colors font-medium text-sm tracking-wide"
                    >
                        Request a Proposal
                    </Link>
                </div>
            </div>
        </div>
    );
}
