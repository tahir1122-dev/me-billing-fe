import React from "react";
import Link from "next/link";
export const dynamic = 'force-dynamic';

export const metadata = {
    title: "Legal Disclaimer | MeBilling",
    description: "Legal Disclaimer governing the use of MeBilling Inc.'s website and published materials.",
};

export default function LegalDisclaimerPage() {
    const tableOfContents = [
        { id: "section-1", title: "1. General Information Only" },
        { id: "section-2", title: "2. No Guarantee of Results" },
        { id: "section-3", title: "3. Regulatory & Compliance Disclaimer" },
        { id: "section-4", title: "4. No Professional Relationship" },
        { id: "section-5", title: "5. No PHI on This Website" },
        { id: "section-6", title: "6. Third-Party Links & References" },
        { id: "section-7", title: "7. Intellectual Property Notice" },
        { id: "section-8", title: "8. Website Availability & Accuracy" },
        { id: "section-9", title: "9. Limitation of Liability" },
        { id: "section-10", title: "10. Governing Law" },
        { id: "section-11", title: "11. Contact" },
    ];

    return (
        <main className="min-h-screen bg-[#FDFCF8] font-outfit text-[#162018]">

            {/* Hero Section */}
            <section className="bg-[#112314] pt-36 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1A6B3A]/5 blur-[100px] pointer-events-none rounded-bl-full"></div>
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-6xl relative z-10">
                    <p className="text-[#C8920A] tracking-wider text-[13px] font-bold uppercase mb-4 font-outfit">
                        Legal · Disclaimer
                    </p>
                    <h1 className="text-5xl lg:text-[72px] font-medium text-white mb-8 font-cormorant leading-[1.1]">
                        Legal Disclaimer
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
                        <p>This Legal Disclaimer governs your use of MeBilling Inc.'s website, communications, and published materials. By accessing this website or any MeBilling publication, you acknowledge and agree to the terms set out below. Please read this Disclaimer carefully before relying on any content you find here.</p>
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
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">General Information Only</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>All content published on this website and in any MeBilling marketing, editorial, or informational materials — including service descriptions, blog articles, case studies, press releases, and event content — is provided for <strong>general informational purposes only</strong>. It does not constitute, and should not be construed as, legal, medical, clinical, financial, regulatory, compliance, accounting, or tax advice of any kind.</p>
                                    <p>MeBilling is a healthcare revenue cycle management company, not a law firm, medical practice, CPA firm, or regulatory advisory. The content on this website is intended to describe our services and general industry practices. It is not a substitute for professional advice tailored to your specific situation, jurisdiction, payer mix, practice structure, or legal circumstances.</p>
                                    <div className="bg-[#112314] rounded-xl px-6 py-5">
                                        <p className="text-[14.5px] text-white/80 leading-relaxed font-outfit font-medium"><strong className="text-[#C8920A]">If you are facing a specific billing compliance issue, a government investigation, a regulatory proceeding, or any matter with potential legal consequences, you should consult a qualified healthcare attorney, compliance officer, or other licensed professional.</strong> MeBilling's staff, while highly experienced in healthcare billing operations, are not licensed attorneys and do not provide legal advice.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 02 */}
                            <div id="section-2" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 02</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">No Guarantee of Results or Outcomes</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>Any references on this website to revenue improvement, denial reduction, clean claim rates, A/R days, collection percentages, or other performance metrics reflect general observations from MeBilling's operational experience across its client base. These figures are provided for illustrative purposes only and represent industry benchmarks or historical performance, not guarantees of future results.</p>
                                    <p>Actual outcomes for any individual client will vary based on factors including but not limited to: practice specialty, payer mix and contract rates, documentation quality, provider compliance history, payer policy changes, regulatory environment, state-specific billing requirements, claim volume, and the particular services engaged.</p>
                                    <p><strong>MeBilling does not guarantee:</strong></p>
                                    <ul className="list-none space-y-3">
                                        {[
                                            "Any specific percentage increase in collections or revenue",
                                            "Any specific reduction in denial rate, days in A/R, or other operational metric",
                                            "Approval or favourable outcome in any IDR proceeding, payer appeal, arbitration, or negotiation",
                                            "Success in recovering any specific amount of aged or denied claims",
                                            "Specific credentialing approval timelines, which are controlled by payer processing times",
                                            "Avoidance of any government audit, investigation, or regulatory action",
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

                            {/* Section 03 */}
                            <div id="section-3" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 03</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Regulatory &amp; Compliance Disclaimer</h2>
                                <div className="space-y-8 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">3.1 Healthcare Billing Is a Regulated Activity</h3>
                                        <p className="mb-4">Healthcare billing and coding are governed by a complex, overlapping framework of federal and state laws, regulations, sub-regulatory guidance, and payer-specific policies that change frequently. The following non-exhaustive list illustrates the regulatory environment that governs MeBilling's services and the practices we serve:</p>
                                        <ul className="list-none space-y-3">
                                            {[
                                                { bold: "HIPAA & HITECH", text: " — Privacy, security, and breach notification requirements (45 CFR Parts 160 & 164)" },
                                                { bold: "False Claims Act", text: " — Prohibition on false claims submitted to federal healthcare programmes (31 U.S.C. §§ 3729-3733)" },
                                                { bold: "Anti-Kickback Statute", text: " — Prohibition on improper remuneration in connection with federal healthcare programme items and services (42 U.S.C. § 1320a-7b)" },
                                                { bold: "Stark Law", text: " — Physician self-referral restrictions for designated health services (42 U.S.C. § 1395nn)" },
                                                { bold: "Civil Monetary Penalties Law", text: " — Administrative sanctions for billing violations (42 U.S.C. § 1320a-7a)" },
                                                { bold: "Exclusion Authorities", text: " — OIG authority to exclude providers from federal programmes (42 U.S.C. § 1320a-7)" },
                                                { bold: "No Surprises Act / Federal IDR", text: " — Surprise billing protections and IDR process (42 U.S.C. § 300gg-111)" },
                                                { bold: "Social Security Act § 1128B", text: " — Criminal healthcare fraud provisions" },
                                                { bold: "Fair Debt Collection Practices Act", text: " — Patient billing and collection practices (15 U.S.C. § 1692 et seq.)" },
                                                { bold: "Texas Medical Records Privacy Act", text: " — Texas Health & Safety Code Chapter 181 (H.B. 300)" },
                                                { bold: "Texas Identity Theft & Data Breach Notification", text: " — Texas Business & Commerce Code Chapter 521" },
                                                { bold: "Texas Deceptive Trade Practices Act", text: " — Texas Business & Commerce Code Chapter 17" },
                                                { bold: "Texas Health & Safety Code Chapter 182", text: " — Medical records confidentiality" },
                                                { bold: "CMS Conditions of Participation", text: " — 42 CFR Part 482" },
                                                { bold: "OIG Compliance Program Guidance", text: " for Third-Party Medical Billing Companies (1998)" },
                                                { bold: "Medicare Claims Processing Manual", text: " (CMS Pub. 100-04) and applicable transmittals" },
                                                { bold: "ADA Title III", text: " — Website accessibility requirements (42 U.S.C. § 12101)" },
                                                { bold: "CAN-SPAM Act", text: " — Commercial email compliance (15 U.S.C. § 7701 et seq.)" },
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <span className="text-[#C8920A] mt-1 shrink-0">—</span>
                                                    <span><strong>{item.bold}</strong>{item.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">3.2 Provider Compliance Responsibility</h3>
                                        <p>While MeBilling's services are designed to support compliant billing practices and our staff are trained in applicable coding and billing rules, <strong>the ultimate responsibility for compliance with healthcare billing laws rests with the covered entity provider and practice</strong>. MeBilling acts as a Business Associate performing services at the direction of its covered entity clients. The accuracy of underlying clinical documentation, the appropriateness of ordered services, the employment of non-excluded providers, and the overall compliance of the practice are the Client's responsibilities.</p>
                                        <p className="mt-4">MeBilling strongly recommends that all healthcare practices engaging third-party billing services maintain their own internal compliance programme, designate a compliance officer, conduct regular coding audits, and consult qualified healthcare counsel on legal and regulatory questions specific to their situation.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">3.3 Regulatory Changes</h3>
                                        <p>Healthcare billing regulations, payer policies, and coding guidelines change frequently — often mid-year. While MeBilling makes reasonable efforts to stay current with applicable rules and to update our services accordingly, this website and its content may not reflect the most recent regulatory changes at all times. Website content should not be relied upon as a current statement of applicable law or payer policy. Verify critical regulatory information with primary sources or qualified legal counsel.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 04 */}
                            <div id="section-4" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 04</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">No Attorney-Client or Professional Relationship</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>Visiting this website, reading its content, or contacting MeBilling for information does not create an attorney-client relationship, a healthcare provider-patient relationship, or any professional services engagement. MeBilling does not provide legal, medical, or financial advice through its website, and no content on this website should be treated as such.</p>
                                    <p>An engagement with MeBilling for revenue cycle management services only arises upon execution of a written Service Agreement signed by authorised representatives of both parties. Until such an agreement is executed, MeBilling has no obligations to any visitor or prospective client beyond those required by applicable law.</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 05 */}
                            <div id="section-5" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 05</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">No PHI on This Website</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>MeBilling's public website is not a HIPAA-covered electronic communication medium. <strong>Do not submit Protected Health Information (PHI) — including patient names, dates of birth, insurance information, diagnosis information, or any other individually identifiable health information — through any contact form, email address, or other channel on this website.</strong></p>
                                    <p>If you are an existing MeBilling client and need to transmit PHI, please use only the secure communication channels established in your Service Agreement and Business Associate Agreement. Submission of PHI through unsecured website channels is done at the sender's risk and may constitute a HIPAA breach for which the sender bears primary responsibility.</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 06 */}
                            <div id="section-6" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 06</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Third-Party Links &amp; References</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>This website may contain links to third-party websites, including government agency sites (HHS, CMS, OIG), professional organisations (AMA, AAPC), and industry publications. These links are provided as a convenience and for informational purposes only. MeBilling does not endorse, control, or accept responsibility for the accuracy, currency, or completeness of any content on third-party websites. Accessing a third-party link from our website is at your own risk, and you should review the privacy policy and terms of use of any site you visit.</p>
                                    <p>References to laws, regulations, agency guidance, coding manuals, and industry standards on this website are provided for contextual information only. MeBilling does not warrant that such references are complete, current, or accurately reflect the current state of the law. Always consult primary legal and regulatory sources directly.</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 07 */}
                            <div id="section-7" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 07</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Intellectual Property Notice</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>All content on this website — including but not limited to text, service descriptions, articles, blog posts, graphics, design elements, logos, layout, structure, and any other materials — is the proprietary intellectual property of <strong>MeBilling Inc.</strong> and is protected under applicable United States copyright law (17 U.S.C. § 101 et seq.), trade dress, and other intellectual property laws.</p>
                                    <p>Unauthorised reproduction, distribution, republication, modification, transmission, or public display of any content from this website, in whole or in part, is strictly prohibited without MeBilling's prior written permission. Limited quotation of content for non-commercial informational purposes, with clear attribution to MeBilling Inc. and a link to the original page, is permitted.</p>
                                    <p>The MeBilling name, logo, and tagline "Transforming Solutions" are trademarks of MeBilling Inc. Use of these marks without prior written permission is prohibited. Nothing on this website grants any licence or right to use MeBilling's trademarks or trade name.</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 08 */}
                            <div id="section-8" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 08</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Website Availability &amp; Accuracy</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>MeBilling makes reasonable efforts to maintain the accuracy and availability of this website but does not warrant that: (a) the website will be continuously available or free from errors or interruptions; (b) the content is accurate, complete, or current at any given time; or (c) the website is free from viruses or other harmful components. Access to and use of this website is at the user's own risk.</p>
                                    <p>MeBilling reserves the right to modify, suspend, or discontinue any part of this website at any time without notice. We are not liable to any person or entity for any modifications, suspensions, or discontinuation of the site or its content.</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 09 */}
                            <div id="section-9" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 09</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Limitation of Liability for Website Use</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>To the fullest extent permitted by applicable law, MeBilling Inc., its officers, directors, employees, and agents are not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from: your use of or inability to use this website; reliance on any content, information, or material on this website; any errors or omissions in the content; or any action taken in response to website content. This limitation applies regardless of the theory of liability (contract, tort, statute, or otherwise) and even if MeBilling has been advised of the possibility of such damages.</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 10 */}
                            <div id="section-10" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 10</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Governing Law for Website Use</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>Your access to and use of this website is governed by the laws of the <strong>State of Texas</strong> and applicable federal law. Any disputes arising from your use of this website that are not covered by an executed Service Agreement or arbitration clause shall be subject to the exclusive jurisdiction of the state and federal courts located in <strong>Harris County, Texas</strong>.</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 11 */}
                            <div id="section-11" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 11</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Contact</h2>
                                <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium mb-8">Questions about this Legal Disclaimer, requests for permissions, or reports of concerns about website content may be directed to:</p>

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
