import React from "react";
import Link from "next/link";
export const dynamic = 'force-dynamic';

export const metadata = {
    title: "Terms & Conditions | MeBilling",
    description: "Terms and Conditions governing MeBilling Inc.'s services and client relationships.",
};

export default function TermsAndConditionsPage() {
    const tableOfContents = [
        { id: "section-1", title: "1. Parties & Acceptance" },
        { id: "section-2", title: "2. Definitions" },
        { id: "section-3", title: "3. Services & Scope" },
        { id: "section-4", title: "4. Client Obligations" },
        { id: "section-5", title: "5. HIPAA & Compliance" },
        { id: "section-6", title: "6. Healthcare Fraud & Abuse Laws" },
        { id: "section-7", title: "7. No Surprises Act / IDR" },
        { id: "section-8", title: "8. Fees & Payment" },
        { id: "section-9", title: "9. Confidentiality" },
        { id: "section-10", title: "10. Intellectual Property" },
        { id: "section-11", title: "11. Representations & Warranties" },
        { id: "section-12", title: "12. Limitation of Liability" },
        { id: "section-13", title: "13. Indemnification" },
        { id: "section-14", title: "14. Term & Termination" },
        { id: "section-15", title: "15. Dispute Resolution" },
        { id: "section-16", title: "16. Governing Law" },
        { id: "section-17", title: "17. General Provisions" },
        { id: "section-18", title: "18. Contact" },
    ];

    return (
        <main className="min-h-screen bg-[#FDFCF8] font-outfit text-[#162018]">

            {/* Hero Section */}
            <section className="bg-[#112314] pt-36 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1A6B3A]/5 blur-[100px] pointer-events-none rounded-bl-full"></div>
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-6xl relative z-10">
                    <p className="text-[#C8920A] tracking-wider text-[13px] font-bold uppercase mb-4 font-outfit">
                        Legal · Contract
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-[72px] font-medium text-white mb-8 font-cormorant leading-[1.1]">
                        Terms &amp; Conditions
                    </h1>
                    <div className="flex flex-col gap-2 text-[15px] text-white/70 font-medium font-outfit border-l-2 border-[#C8920A] pl-4">
                        <p>MeBilling Inc. — 100 Glenborough Dr, Houston, TX 77067 — legal@mebilling.com</p>
                        <p>Effective: January 1, 2025  |  Last Revised: May 1, 2026</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-6xl">

                    {/* Intro paragraph */}
                    <div className="max-w-4xl mb-16 text-[16px] lg:text-[18px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                        <p>These Terms and Conditions ("Terms") govern the contractual relationship between MeBilling Inc. and its clients. They should be read in conjunction with the executed Service Agreement and Business Associate Agreement applicable to your engagement. In the event of a conflict between these Terms and an executed Service Agreement, the Service Agreement shall control for the subject matter of that conflict.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 relative">

                        {/* Sticky Table of Contents */}
                        <aside className="hidden lg:block w-1/4 shrink-0">
                            <div className="sticky top-32 bg-[#F7F6EF] p-8 rounded-2xl border border-[#E8E6DD]/60 shadow-sm">
                                <h3 className="text-[#1A6B3A] font-bold text-[14px] uppercase tracking-wider mb-6">Contents</h3>
                                <ul className="flex flex-col gap-3 text-[14px] font-medium text-[#162018]/70">
                                    {tableOfContents.map((item) => (
                                        <li key={item.id}>
                                            <a href={`#${item.id}`} className="hover:text-[#C8920A] transition-colors leading-snug block">
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>

                        {/* Main Legal Content */}
                        <article className="w-full lg:w-3/4 flex flex-col gap-16 lg:gap-20">

                            {/* Section 01 */}
                            <div id="section-1" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 01</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Parties &amp; Acceptance</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>These Terms constitute a binding legal agreement between <strong>MeBilling Inc.</strong>, a Texas corporation ("MeBilling," "we," "us"), and the healthcare provider, physician group, facility, or organisation ("Client," "you") that engages MeBilling's services. By signing a Service Agreement, submitting a request for services, or transmitting data to MeBilling, the Client accepts these Terms in full.</p>
                                    <p>These Terms apply to all services provided by MeBilling, including but not limited to Revenue Cycle Management, medical coding, billing and coding audits, enrollment and credentialing, Federal IDR proceedings under the No Surprises Act, old claims recovery, payment posting and reconciliation, injury claims management, claims negotiation, appeals and reconsideration, arbitration support, and state reporting services.</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 02 */}
                            <div id="section-2" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 02</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Definitions</h2>
                                <div className="rounded-xl border border-[#E8E6DD] overflow-hidden">
                                    {[
                                        { term: "Service Agreement", def: "The written contract executed between MeBilling and the Client specifying the particular services, fees, performance standards, and term of engagement." },
                                        { term: "BAA", def: "Business Associate Agreement, required under 45 CFR § 164.504(e), executed separately between the parties before any services involving PHI commence." },
                                        { term: "PHI", def: "Protected Health Information as defined under HIPAA and the Texas Medical Records Privacy Act." },
                                        { term: "Covered Services", def: "The Revenue Cycle Management and related services described in the applicable Service Agreement and Section 3 of these Terms." },
                                        { term: "Net Collections", def: "Actual cash received by Client from payers and patients for services billed by MeBilling, after write-offs and contractual adjustments, used where fees are calculated on a percentage-of-collections basis." },
                                        { term: "Force Majeure Event", def: "Events beyond a party's reasonable control including natural disasters, government action, pandemic, war, cyberattacks by third parties, or prolonged utility outages." },
                                    ].map((row, i) => (
                                        <div key={i} className={`flex gap-6 px-6 py-4 text-[15px] ${i % 2 === 0 ? "bg-[#F7F6EF]" : "bg-white"}`}>
                                            <span className="font-bold text-[#162018] w-44 shrink-0 font-outfit text-[13px] pt-0.5">{row.term}</span>
                                            <span className="text-[#162018]/75 leading-relaxed font-outfit">{row.def}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 03 */}
                            <div id="section-3" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 03</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Services &amp; Scope</h2>
                                <div className="space-y-8 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">3.1 Covered Service Lines</h3>
                                        <p className="mb-4">MeBilling provides the following core service categories, as further described in the applicable Service Agreement:</p>
                                        <ul className="list-none space-y-3">
                                            {[
                                                { bold: "End-to-End Revenue Cycle Management:", text: " Complete billing lifecycle including patient access, coding, claim submission, denial management, A/R follow-up, payment posting, and reporting" },
                                                { bold: "Revenue Recovery & A/R Optimisation:", text: " Old claims recovery, systematic A/R follow-up, denial management, and appeals and reconsideration services" },
                                                { bold: "Compliance & Risk Management:", text: " Billing and coding audit services, clinical documentation improvement, HCC/risk adjustment coding, and state reporting" },
                                                { bold: "Provider Lifecycle Management:", text: " Enrollment and credentialing across 90+ payer networks, CAQH/PECOS maintenance, revalidation monitoring, and payer contract alignment" },
                                                { bold: "Complex Claims & Dispute Resolution:", text: " Federal IDR proceedings under the No Surprises Act, injury claims management, claims negotiation, arbitration and mediation support" },
                                                { bold: "Financial Operations & Payment Accuracy:", text: " ERA payment posting, contractual allowable reconciliation, underpayment recovery, and financial reporting" },
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <span className="text-[#C8920A] mt-1 shrink-0">—</span>
                                                    <span><strong>{item.bold}</strong>{item.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">3.2 In-House Performance</h3>
                                        <p>All services are performed exclusively by MeBilling's own employed workforce. MeBilling does not subcontract billing, coding, or PHI-handling functions to third parties. The Client acknowledges that this in-house model is a material feature of the services for which Client is contracting.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">3.3 EMR Integration</h3>
                                        <p>MeBilling performs services within the Client's existing electronic health record and practice management system. The Client is responsible for maintaining the Client's own platform subscription, providing MeBilling with appropriate access credentials, and ensuring the system remains operational and accessible. MeBilling will take reasonable precautions to protect Client credentials and system access.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">3.4 Service Modifications</h3>
                                        <p>Either party may request modifications to the scope of services by written notice. Modified services take effect upon execution of a written amendment to the Service Agreement signed by authorised representatives of both parties.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 04 */}
                            <div id="section-4" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 04</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Client Obligations</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>The Client's timely performance of its own obligations is a prerequisite for MeBilling's ability to perform the services. Client agrees to:</p>
                                    <ul className="list-none space-y-3">
                                        {[
                                            { bold: "Accurate Documentation:", text: " Provide accurate, complete, and timely clinical and administrative documentation necessary for billing. Client is solely responsible for the clinical accuracy of all services documented in the medical record and is expressly prohibited from requesting that MeBilling submit claims that are not supported by adequate documentation" },
                                            { bold: "System Access:", text: " Maintain MeBilling's access to all EMR, practice management, and clearinghouse platforms necessary to perform services, and promptly notify MeBilling of credential changes or system outages" },
                                            { bold: "Notification of Changes:", text: " Promptly notify MeBilling (and in any event within five business days) of any material changes that may affect billing, including: changes to provider licenses, DEA numbers, NPI information, payer contracts, facility or service locations, employed providers, or payer credentialing status" },
                                            { bold: "Cooperation:", text: " Cooperate with MeBilling's reasonable requests for information, documentation, and clarification necessary to perform services and resolve billing disputes" },
                                            { bold: "Compliant Practices:", text: " Ensure that all clinical services billed through MeBilling were actually rendered and are appropriately documented. Client acknowledges that MeBilling will not knowingly submit claims that lack adequate clinical documentation support" },
                                            { bold: "Authorised Representative:", text: " Designate an authorised individual with decision-making authority as the primary point of contact for service matters" },
                                            { bold: "OIG Exclusion Monitoring:", text: " Disclose any current or pending OIG exclusions or debarments affecting any provider whose services MeBilling is asked to bill. Billing for excluded providers under federal programmes is prohibited under 42 U.S.C. § 1320a-7" },
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3">
                                                <span className="text-[#C8920A] mt-1 shrink-0">—</span>
                                                <span><strong>{item.bold}</strong>{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 05 */}
                            <div id="section-5" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 05</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">HIPAA, HITECH &amp; Texas Privacy Compliance</h2>
                                <div className="space-y-8 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">5.1 Business Associate Agreement</h3>
                                        <p>These Terms incorporate by reference the Business Associate Agreement executed between MeBilling and the Client. MeBilling will perform its obligations as Business Associate in compliance with the HIPAA Privacy Rule (45 CFR Part 164, Subpart E), the HIPAA Security Rule (45 CFR Part 164, Subparts A &amp; C), the HIPAA Breach Notification Rule (45 CFR Part 164, Subpart D), and the HITECH Act (Pub. L. 111-5, § 13001 et seq.).</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">5.2 Texas Medical Records Privacy Act</h3>
                                        <p>MeBilling complies with the Texas Medical Records Privacy Act (Texas Health &amp; Safety Code Chapter 181, H.B. 300) and all applicable requirements of Texas Health &amp; Safety Code Chapter 182. Where Texas law imposes stricter requirements than federal HIPAA, MeBilling applies the more protective standard.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">5.3 Coding Compliance</h3>
                                        <p>MeBilling will perform medical coding in accordance with official coding guidelines published by the American Medical Association (CPT), the National Center for Health Statistics (ICD-10-CM), the Centers for Medicare &amp; Medicaid Services (ICD-10-PCS, HCPCS Level II), and applicable payer policies. MeBilling will not knowingly apply codes that do not accurately reflect documented services. The Client's responsibility for the accuracy of underlying clinical documentation is not diminished by MeBilling's coding role.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">5.4 OIG Compliance Programme</h3>
                                        <p>MeBilling maintains an internal compliance programme consistent with the <strong>OIG Compliance Program Guidance for Third-Party Medical Billing Companies</strong> (OIG, 1998), which recommends that third-party billing companies adopt written compliance policies, employee training, audit mechanisms, and open lines of communication for reporting potential violations. Our programme includes annual compliance risk assessments and internal audit reviews.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 06 */}
                            <div id="section-6" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 06</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Healthcare Fraud &amp; Abuse Laws</h2>
                                <div className="space-y-8 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">6.1 False Claims Act</h3>
                                        <p>MeBilling acknowledges and strictly complies with the <strong>False Claims Act</strong> (31 U.S.C. §§ 3729-3733). MeBilling will not knowingly present or cause to be presented a false or fraudulent claim for payment to Medicare, Medicaid, or any other federal healthcare programme. The Client likewise represents that it will not instruct or pressure MeBilling to submit claims that Client knows to be false, inaccurate, or unsupported by clinical documentation. Both parties acknowledge that violations of the False Claims Act expose the violating party to civil penalties, treble damages, and potential criminal liability.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">6.2 Anti-Kickback Statute</h3>
                                        <p>Both parties represent and warrant that they will not offer, pay, solicit, or receive remuneration, directly or indirectly, in exchange for referrals or for the ordering or recommending of items or services covered by federal healthcare programmes, in violation of the <strong>Anti-Kickback Statute</strong> (42 U.S.C. § 1320a-7b(b)). MeBilling's fee structure is based exclusively on the value of services rendered and is not calculated to generate referrals.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">6.3 Stark Law</h3>
                                        <p>The parties will structure their arrangement to comply with the <strong>Physician Self-Referral Law (Stark Law)</strong> (42 U.S.C. § 1395nn), to the extent applicable. MeBilling's billing and coding services are provided under a written service contract that satisfies the applicable Stark Law exception for personal services arrangements, including the requirements that compensation be set in advance, not exceed fair market value, and not be determined in a manner that takes into account the volume or value of referrals.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">6.4 Civil Monetary Penalties &amp; Exclusion</h3>
                                        <p>MeBilling screens its workforce against the HHS OIG List of Excluded Individuals and Entities (LEIE) and the General Services Administration (GSA) System for Award Management (SAM) at the time of hire and on a monthly basis thereafter, consistent with OIG guidance. Client is responsible for performing similar exclusion screening for its own providers and notifying MeBilling promptly of any exclusion event.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">6.5 Social Security Act Section 1128B</h3>
                                        <p>MeBilling will not engage in, facilitate, or knowingly assist in any conduct that constitutes criminal healthcare fraud as described under Social Security Act § 1128B, including knowingly making or causing to be made any false statement or representation of a material fact in any application for any benefit or payment under a federal or state healthcare programme.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 07 */}
                            <div id="section-7" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 07</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">No Surprises Act &amp; Federal IDR Services</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>Where MeBilling provides Federal Independent Dispute Resolution (IDR) services under the <strong>No Surprises Act</strong> (42 U.S.C. § 300gg-111), the following terms apply:</p>
                                    <ul className="list-none space-y-3">
                                        {[
                                            "MeBilling will manage the IDR process on behalf of Client as Client's authorised representative for the purpose of submitting IDR disputes to the federal portal, subject to Client's prior review and approval of each dispute submission",
                                            "Client acknowledges that IDR outcomes are determined by a certified independent dispute resolution entity (IDRE) and are outside MeBilling's control. MeBilling does not guarantee any particular IDR outcome",
                                            "Client is responsible for ensuring that all out-of-network claims submitted to the IDR process were for services that satisfy the eligibility requirements of the No Surprises Act, including applicable good-faith cost estimate and open negotiation requirements",
                                            "IDR administrative fees charged by the federal programme are the responsibility of the prevailing party as determined by the IDRE. MeBilling is not responsible for IDR administrative fees assessed by HHS",
                                            "MeBilling will comply with all applicable CMS regulations, sub-regulatory guidance, and interim final rules governing the Federal IDR process as they are issued and updated",
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3">
                                                <span className="text-[#C8920A] mt-1 shrink-0">—</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 08 */}
                            <div id="section-8" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 08</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Fees &amp; Payment</h2>
                                <div className="space-y-8 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">8.1 Fee Structure</h3>
                                        <p>MeBilling's fees are set forth in the applicable Service Agreement and may be structured as: (a) a percentage of net collections for RCM services; (b) a flat fee per claim or per encounter; (c) a monthly retainer for defined service volumes; or (d) a project-based fee for audit, credentialing, or recovery engagements. The specific fee structure applicable to your engagement is documented in your executed Service Agreement.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">8.2 Invoicing</h3>
                                        <p>MeBilling issues invoices monthly, typically within the first five business days of the following month, covering fees earned during the preceding calendar month. Invoices are delivered electronically to the Client's designated billing contact.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">8.3 Payment Terms</h3>
                                        <p>Payment is due within <strong>30 calendar days</strong> of the invoice date. Client may dispute any invoice in good faith by providing written notice to MeBilling within 15 days of invoice receipt, specifying the amount in dispute and the basis for the dispute. Undisputed amounts remain due on the standard payment schedule.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">8.4 Late Payment</h3>
                                        <p>Invoices not paid within 30 days accrue interest at the rate of 1.5% per month (18% per annum) on the unpaid balance, consistent with Texas Finance Code provisions governing commercial transactions. MeBilling reserves the right to suspend services for accounts with undisputed invoices unpaid beyond 60 days, upon 10 days' written notice to Client.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">8.5 Taxes</h3>
                                        <p>Client is responsible for any applicable sales tax, use tax, or excise tax imposed on MeBilling's services by any taxing authority, where such taxes are legally payable by the purchaser of the services. MeBilling will include applicable taxes on its invoices where legally required.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 09 */}
                            <div id="section-9" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 09</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Confidentiality</h2>
                                <div className="space-y-8 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">9.1 Mutual Confidentiality</h3>
                                        <p>Each party may receive confidential and proprietary information of the other in connection with the services. "Confidential Information" means any non-public information designated as confidential or that a reasonable party would understand to be confidential given the nature of the information and circumstances of disclosure, including: business processes, pricing, client lists, financial information, technical systems, and trade secrets.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">9.2 Obligations</h3>
                                        <p>Each party agrees to: (a) hold the other's Confidential Information in strict confidence using at least the same degree of care it applies to its own confidential information (and in no event less than reasonable care); (b) use Confidential Information only to perform its obligations or exercise its rights under these Terms; and (c) not disclose Confidential Information to any third party without prior written consent, except to workforce members or advisors who need to know it and are subject to equivalent confidentiality obligations.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">9.3 Exceptions</h3>
                                        <p>Confidentiality obligations do not apply to information that: (a) is or becomes publicly known through no breach of these Terms; (b) was already known to the receiving party before disclosure; (c) is independently developed without use of the Confidential Information; or (d) is required to be disclosed by law, court order, or regulatory authority, provided the disclosing party gives prompt written notice to the other party to the extent permitted by law.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">9.4 Survival</h3>
                                        <p>Confidentiality obligations under this Section survive termination or expiration of these Terms and the Service Agreement for a period of <strong>three (3) years</strong>. PHI and ePHI confidentiality obligations are governed by the BAA and applicable HIPAA law and are not subject to any time limitation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 10 */}
                            <div id="section-10" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 10</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Intellectual Property</h2>
                                <div className="space-y-8 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">10.1 MeBilling's IP</h3>
                                        <p>All workflows, methodologies, processes, templates, software configurations, proprietary billing logic, and related materials developed by MeBilling in delivering services are the exclusive intellectual property of MeBilling Inc., protected by applicable copyright, trade secret, and other intellectual property laws. Client receives no ownership interest in MeBilling's proprietary methods, systems, or tools.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">10.2 Client's Data</h3>
                                        <p>All clinical, financial, and operational data provided by Client, and all billing records generated by MeBilling on Client's behalf, remain the property of the Client. MeBilling holds this data as a custodian solely for the purpose of performing contracted services and will return or destroy it upon termination as required by the BAA.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">10.3 Reporting &amp; Analytics Outputs</h3>
                                        <p>Reports, dashboards, and analytical outputs produced by MeBilling for Client using Client's own data are owned by the Client for the purposes for which they were generated. MeBilling retains the right to use anonymised, de-identified aggregate data derived from its operations to improve its services, subject to compliance with HIPAA de-identification standards under 45 CFR § 164.514.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 11 */}
                            <div id="section-11" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 11</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Representations &amp; Warranties</h2>
                                <div className="space-y-8 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">11.1 MeBilling Represents and Warrants That:</h3>
                                        <ul className="list-none space-y-3">
                                            {[
                                                "It is duly organised and validly existing under the laws of the State of Texas and has full authority to enter into and perform these Terms",
                                                "It will perform services in a professional manner consistent with the standards of the healthcare billing and coding industry",
                                                "It will maintain all certifications, licences, and credentials required to perform the contracted services, including AAPC certifications for its coding and auditing staff",
                                                "It will screen its workforce against the OIG LEIE and GSA SAM exclusion lists prior to hire and on a monthly basis throughout employment",
                                                "It will comply with all applicable federal and state laws governing healthcare billing, privacy, and data security, including HIPAA, HITECH, the False Claims Act, the Anti-Kickback Statute, the Texas Medical Records Privacy Act, and the No Surprises Act",
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <span className="text-[#C8920A] mt-1 shrink-0">—</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">11.2 Client Represents and Warrants That:</h3>
                                        <ul className="list-none space-y-3">
                                            {[
                                                "It is duly authorised to engage MeBilling's services and to provide MeBilling with the PHI and other information necessary to perform those services",
                                                "All services for which billing is requested were actually rendered by qualified, licensed, non-excluded providers and are supported by adequate clinical documentation",
                                                "No provider whose services MeBilling is asked to bill is currently excluded from participation in Medicare, Medicaid, or any other federal or state healthcare programme under 42 U.S.C. § 1320a-7",
                                                "It will promptly notify MeBilling of any government investigation, qui tam action, or regulatory inquiry affecting Client's billing practices or any provider whose services MeBilling manages",
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <span className="text-[#C8920A] mt-1 shrink-0">—</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 12 */}
                            <div id="section-12" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 12</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Limitation of Liability</h2>
                                <div className="space-y-8 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">12.1 Liability Cap</h3>
                                        <p>To the maximum extent permitted by applicable law, MeBilling's total aggregate liability to Client for any claims arising out of or related to these Terms or the services — whether in contract, tort (including negligence), or otherwise — shall not exceed the total fees paid by Client to MeBilling in the <strong>three (3) calendar months immediately preceding</strong> the event giving rise to the claim.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">12.2 Exclusion of Consequential Damages</h3>
                                        <p>Neither party shall be liable to the other for any indirect, incidental, consequential, special, or punitive damages arising out of or related to these Terms, including lost profits, lost revenue, or loss of business opportunity, even if the party has been advised of the possibility of such damages — except to the extent arising from: (a) a party's gross negligence or wilful misconduct; (b) a breach of confidentiality obligations; or (c) a HIPAA or data security violation causing actual harm.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">12.3 No Guarantee of Collections</h3>
                                        <p>MeBilling's services are intended to optimise the billing and collections process. MeBilling does not guarantee any specific level of collections, revenue increase, denial reduction, or other financial outcome. Reimbursement decisions are made by payers based on clinical and administrative factors outside MeBilling's control, including payer policy, benefit design, medical necessity determinations, and network status.</p>
                                    </div>
                                    <div className="bg-[#FFFBF0] border border-[#E8C96A] border-l-4 border-l-[#C8920A] rounded-r-xl px-6 py-4">
                                        <p className="text-[14px] text-[#5a3f00] font-outfit font-medium"><strong className="text-[#3d2800]">Important:</strong> Nothing in this Section limits liability that cannot be legally limited under applicable Texas or federal law, including liability arising from fraud, wilful misconduct, or violations of HIPAA where civil penalties apply directly under statute.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 13 */}
                            <div id="section-13" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 13</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Indemnification</h2>
                                <div className="space-y-8 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">13.1 Indemnification by MeBilling</h3>
                                        <p>MeBilling will defend, indemnify, and hold harmless Client and its officers, directors, employees, and agents from and against third-party claims, losses, damages, costs, and expenses (including reasonable attorneys' fees) arising from: (a) MeBilling's material breach of these Terms or the BAA; (b) MeBilling's wilful misconduct or gross negligence in performing services; or (c) MeBilling's violation of applicable law in a manner directly causing harm to Client, except to the extent any such claim arises from Client's own acts or omissions.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">13.2 Indemnification by Client</h3>
                                        <p>Client will defend, indemnify, and hold harmless MeBilling and its officers, directors, employees, and agents from and against third-party claims, losses, damages, costs, and expenses arising from: (a) Client's material breach of these Terms; (b) the inaccuracy, incompleteness, or fraudulent nature of clinical documentation or information provided to MeBilling; (c) Client's submission of instructions that result in the filing of a false or unsupported claim; or (d) Client's violation of applicable law.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">13.3 Indemnification Procedure</h3>
                                        <p>The party seeking indemnification must: provide prompt written notice of the claim; allow the indemnifying party to assume control of the defence (with counsel reasonably acceptable to the indemnified party); and provide reasonable cooperation in the defence, at the indemnifying party's expense.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 14 */}
                            <div id="section-14" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 14</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Term &amp; Termination</h2>
                                <div className="space-y-8 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">14.1 Initial Term</h3>
                                        <p>The term of services is as specified in the applicable Service Agreement. In the absence of a specified term, services continue on a month-to-month basis from the date of first service delivery.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">14.2 Termination for Convenience</h3>
                                        <p>Either party may terminate the services engagement for any reason by providing written notice as specified in the Service Agreement, which shall be no less than <strong>30 days</strong> and no more than <strong>90 days</strong> prior to the intended termination date, unless otherwise agreed.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">14.3 Termination for Cause</h3>
                                        <p>Either party may terminate for material breach with <strong>15 days' written notice</strong> if the breaching party fails to cure the breach within that 15-day period. MeBilling may also terminate immediately upon written notice if: (a) Client requests MeBilling to submit a false, fraudulent, or unsupported claim; (b) Client fails to maintain an executed BAA; or (c) a provider whose services MeBilling manages is placed on the OIG LEIE or federal exclusion list and Client fails to remove that provider from MeBilling's scope of services within 10 business days of notification.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">14.4 Effect of Termination</h3>
                                        <p>Upon termination or expiration: (a) MeBilling will complete processing of all claims already in its workflow; (b) MeBilling will transfer all Client data, including billing records and reporting, to Client or a successor in an agreed format within 30 days; (c) all fees for services rendered through the termination date remain payable; and (d) confidentiality, data retention, dispute resolution, and limitation of liability provisions survive termination.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 15 */}
                            <div id="section-15" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 15</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Dispute Resolution</h2>
                                <div className="space-y-8 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">15.1 Good-Faith Negotiation</h3>
                                        <p>Before initiating formal proceedings, the parties will attempt in good faith to resolve any dispute through direct negotiation between designated senior representatives, for a period of at least <strong>30 days</strong> after one party provides written notice of a dispute to the other.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">15.2 Binding Arbitration</h3>
                                        <p>If the dispute is not resolved through negotiation, it will be submitted to binding arbitration in <strong>Houston, Texas</strong> under the Commercial Arbitration Rules of the <strong>American Arbitration Association (AAA)</strong>. The arbitrator will be a single neutral arbitrator with demonstrated expertise in healthcare business disputes. The arbitrator's award will be final and binding and may be entered as a judgment in any court of competent jurisdiction.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">15.3 Exceptions</h3>
                                        <p>Either party may seek emergency injunctive or equitable relief in a court of competent jurisdiction to prevent irreparable harm, including to prevent imminent breach of confidentiality or data security obligations, without first exhausting the negotiation or arbitration process. Such relief does not waive the obligation to arbitrate the underlying dispute.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">15.4 Class Action Waiver</h3>
                                        <p>All disputes must be brought by parties individually. Neither party may bring or participate in any class action, collective action, or representative proceeding arising from or related to these Terms.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 16 */}
                            <div id="section-16" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 16</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Governing Law</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>These Terms are governed by and construed in accordance with the laws of the <strong>State of Texas</strong>, without regard to its conflict of laws rules. Where these Terms or the services are subject to mandatory federal law (including HIPAA, the False Claims Act, the Anti-Kickback Statute, the No Surprises Act, or other federal healthcare statutes), federal law governs the applicable subject matter, and Texas law governs all other aspects of this agreement.</p>
                                    <p>The courts of Harris County, Texas, shall have non-exclusive jurisdiction for any proceedings to enforce an arbitration award or to seek emergency injunctive relief under Section 15.3.</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 17 */}
                            <div id="section-17" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 17</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">General Provisions</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <ul className="list-none space-y-4">
                                        {[
                                            { bold: "Entire Agreement:", text: " These Terms, together with the executed Service Agreement and BAA, constitute the entire agreement between the parties and supersede all prior discussions, representations, and agreements relating to the subject matter hereof" },
                                            { bold: "Amendments:", text: " MeBilling may update these Terms with 30 days' written notice to active clients. Continued use of services after the effective date constitutes acceptance. Material changes affecting existing contractual rights require written consent" },
                                            { bold: "Severability:", text: " If any provision of these Terms is found to be invalid or unenforceable by a court or arbitrator, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions continue in full force" },
                                            { bold: "Waiver:", text: " A party's failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision in the future" },
                                            { bold: "Notices:", text: " All formal notices must be in writing and delivered by: certified mail to MeBilling Inc., 100 Glenborough Dr, Houston, TX 77067; or by email to legal@mebilling.com with read-receipt confirmation" },
                                            { bold: "Force Majeure:", text: " Neither party is liable for delay or failure to perform obligations (other than payment obligations) caused by a Force Majeure Event, provided the affected party gives prompt notice and uses commercially reasonable efforts to mitigate the impact" },
                                            { bold: "No Third-Party Beneficiaries:", text: " These Terms are for the sole benefit of the contracting parties. Patients, payers, and other third parties are not beneficiaries of these Terms and have no right of enforcement" },
                                            { bold: "Assignment:", text: " Neither party may assign these Terms without the other party's prior written consent, except that MeBilling may assign to a successor entity in connection with a merger, acquisition, or sale of substantially all of its assets upon 30 days' notice to Client" },
                                            { bold: "Relationship of Parties:", text: " The parties are independent contractors. Nothing in these Terms creates an employment, agency, joint venture, or partnership relationship between MeBilling and Client or any of their respective personnel" },
                                            { bold: "Accessibility:", text: " MeBilling's website is designed to be accessible in compliance with applicable standards under the Americans with Disabilities Act (42 U.S.C. § 12101), Title III. If you experience accessibility barriers, please contact us at info@mebilling.com so we can assist" },
                                            { bold: "Fair Debt Collection:", text: " Where MeBilling performs patient balance follow-up services, it will do so in a manner consistent with the Fair Debt Collection Practices Act (15 U.S.C. § 1692 et seq.) and applicable Texas debt collection regulations" },
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3">
                                                <span className="text-[#C8920A] mt-1 shrink-0">—</span>
                                                <span><strong>{item.bold}</strong>{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 18 */}
                            <div id="section-18" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 18</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Contact Information</h2>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { label: "Legal & Compliance", val: "legal@mebilling.com", isEmail: true },
                                        { label: "General Enquiries", val: "info@mebilling.com", isEmail: true },
                                        { label: "Phone", val: "+1 (346) 616-0008" },
                                        { label: "Mailing Address", val: "MeBilling Inc., 100 Glenborough Dr, Houston, TX 77067" }
                                    ].map((contact, i) => (
                                        <div key={i} className="bg-[#FAFAEE] p-5 rounded-xl border border-[#E8E6DD]">
                                            <span className="text-[#C8920A] text-[12px] font-bold uppercase tracking-widest block mb-2">{contact.label}</span>
                                            {contact.isEmail ? (
                                                <a href={`mailto:${contact.val}`} className="text-[15px] font-bold text-[#1A6B3A] hover:underline">{contact.val}</a>
                                            ) : (
                                                <span className="text-[15px] font-medium text-[#162018]/80">{contact.val}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </article>
                    </div>
                </div>
            </section>

        </main>
    );
}
