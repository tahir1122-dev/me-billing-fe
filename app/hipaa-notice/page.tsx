import Link from "next/link";

export const metadata = {
    title: "HIPAA Notice & BAA Statement | MeBilling",
    description: "Information regarding our HIPAA compliance and Business Associate Agreements.",
};

export default function HipaaNoticePage() {
    return (
        <div className="bg-[#FFFDF5] min-h-screen py-24 font-outfit">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <span className="text-[#C8920A] font-bold tracking-wide text-xs block mb-4">
                        — COMPLIANCE
                    </span>
                    <h1 className="text-4xl md:text-5xl font-medium text-[#162018] leading-tight font-cormorant mb-6">
                        HIPAA Notice & <span className="text-[#C8920A] italic">BAA Statement</span>
                    </h1>
                </div>

                <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#082610]/10 shadow-sm prose prose-slate max-w-none">
                    <p className="text-slate-500 mb-6">
                        <em>Last Updated: [Date]</em>
                    </p>
                    <p>
                        This is a placeholder for your official HIPAA Notice of Privacy Practices and Business Associate Agreement (BAA) Statement. You must have your legal counsel provide the exact wording for this page.
                    </p>
                    <h2 className="text-xl font-semibold text-[#162018] mt-8 mb-4">Commitment to Privacy</h2>
                    <p>
                        MeBilling takes the protection of Protected Health Information (PHI) seriously. We comply with all applicable requirements of the Health Insurance Portability and Accountability Act (HIPAA), the Health Information Technology for Economic and Clinical Health (HITECH) Act, and related regulations.
                    </p>
                    <h2 className="text-xl font-semibold text-[#162018] mt-8 mb-4">Business Associate Agreements</h2>
                    <p>
                        As a vendor providing revenue cycle management services to covered entities, MeBilling acts as a Business Associate. We require a signed Business Associate Agreement (BAA) to be in place before we access, use, or disclose any PHI on your behalf.
                    </p>

                    {/* <div className="mt-12 p-6 bg-[#FAFAEE] rounded-xl border border-[#C8920A]/20">
                        <p className="text-sm text-slate-600 m-0">
                            <strong>Note to Administrator:</strong> Please replace this text with your legally approved HIPAA Notice and BAA policies.
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
