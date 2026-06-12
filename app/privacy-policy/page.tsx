import React from "react";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export const metadata = {
    title: "Privacy Policy | MeBilling",
    description: "Privacy Policy and HIPAA Compliance information for MeBilling Inc.",
};

export default function PrivacyPolicyPage() {
    const tableOfContents = [
        { id: "section-1", title: "1. Who We Are" },
        { id: "section-2", title: "2. Definitions" },
        { id: "section-3", title: "3. Information We Collect" },
        { id: "section-4", title: "4. How We Use Information" },
        { id: "section-5", title: "5. HIPAA & HITECH Compliance" },
        { id: "section-6", title: "6. Texas Privacy Laws" },
        { id: "section-7", title: "7. Business Associate Agreement" },
        { id: "section-8", title: "8. Data Security Safeguards" },
        { id: "section-9", title: "9. Breach Notification" },
        { id: "section-10", title: "10. Disclosure & Sharing" },
        { id: "section-11", title: "11. Data Retention" },
        { id: "section-12", title: "12. Your Rights" },
        { id: "section-13", title: "13. Website Data & Cookies" },
        { id: "section-14", title: "14. Children's Privacy" },
        { id: "section-15", title: "15. Policy Updates" },
        { id: "section-16", title: "16. Contact & Complaints" },
    ];

    return (
        <main className="min-h-screen bg-[#FDFCF8] font-outfit text-[#162018]">


            {/* Hero Section */}
            <section className="bg-[#112314] pt-36 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1A6B3A]/5 blur-[100px] pointer-events-none rounded-bl-full"></div>
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-6xl relative z-10">
                    <p className="text-[#C8920A] tracking-wider text-[13px] font-bold uppercase mb-4 font-outfit">
                        Legal · Privacy
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-[72px] font-medium text-white mb-8 font-cormorant leading-[1.1]">
                        Privacy Policy
                    </h1>
                    <div className="flex flex-col gap-2 text-[15px] text-white/70 font-medium font-outfit border-l-2 border-[#C8920A] pl-4">
                        <p>MeBilling Inc. — 100 Glenborough Dr, Houston, TX 77067 — info@mebilling.com</p>
                        <p>Effective: January 1, 2025  |  Last Revised: May 1, 2026</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 max-w-6xl">

                    {/* Intro paragraph */}
                    <div className="max-w-4xl mb-16 text-[16px] lg:text-[18px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                        <p>This Privacy Policy describes how MeBilling Inc. ("MeBilling," "we," "us," or "our") collects, uses, protects, and discloses information in connection with our Revenue Cycle Management services, website, and client portals. As a Business Associate under HIPAA, we hold ourselves to the highest standards of data privacy and are bound by federal and Texas state law. Please read this Policy carefully.</p>
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
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Who We Are</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>MeBilling Inc. is a healthcare Revenue Cycle Management company incorporated under the laws of the State of Texas, with its principal office at 100 Glenborough Dr, Houston, TX 77067. We provide medical billing, coding, credentialing, denial management, payment posting, audit services, and related administrative services to healthcare providers, physician groups, hospitals, ambulatory surgical centers, laboratories, and other covered entities throughout the United States.</p>
                                    <p>In the course of providing these services, MeBilling functions as a Business Associate as defined under 45 CFR § 160.103 of the Health Insurance Portability and Accountability Act of 1996 (HIPAA), as amended by the Health Information Technology for Economic and Clinical Health (HITECH) Act. This means we access, use, and disclose Protected Health Information (PHI) solely on behalf of, and as permitted by, our covered entity clients.</p>
                                </div>
                            </div>

                            {/* Section 02 */}
                            <div id="section-2" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 02</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Definitions</h2>
                                <div className="bg-white rounded-2xl border border-[#E8E6DD] shadow-sm overflow-hidden">
                                    <ul className="flex flex-col divide-y divide-[#E8E6DD]">
                                        {[
                                            { term: "PHI", desc: "Protected Health Information: any individually identifiable health information created, received, maintained, or transmitted by MeBilling on behalf of a covered entity client, in any form or medium, as defined under 45 CFR § 160.103." },
                                            { term: "ePHI", desc: "Electronic Protected Health Information: PHI that is created, received, maintained, or transmitted in electronic form, subject to the HIPAA Security Rule 45 CFR Part 164, Subparts A & C." },
                                            { term: "Covered Entity", desc: "A healthcare provider, health plan, or healthcare clearinghouse that transmits health information electronically, as defined under 45 CFR § 160.103. Our clients are covered entities." },
                                            { term: "Business Associate", desc: "A person or entity that performs functions or activities on behalf of a covered entity that involve the use or disclosure of PHI. MeBilling is a Business Associate." },
                                            { term: "BAA", desc: "Business Associate Agreement: the written contract between MeBilling and each covered entity client that governs our use and disclosure of PHI, as required by 45 CFR § 164.308(b)." },
                                            { term: "Personal Information", desc: "Non-PHI data about individuals we may collect through our website or business operations, such as contact information of prospective clients or website visitors." },
                                            { term: "TMRPA", desc: "Texas Medical Records Privacy Act, codified at Texas Health & Safety Code Chapter 181 (H.B. 300), which imposes stricter privacy requirements than HIPAA in certain respects." }
                                        ].map((def, i) => (
                                            <li key={i} className="flex flex-col sm:flex-row gap-4 p-6">
                                                <div className="sm:w-1/4 shrink-0 font-bold text-[#1A6B3A] text-[14px] font-outfit uppercase tracking-wide">
                                                    {def.term}
                                                </div>
                                                <div className="sm:w-3/4 text-[15px] text-[#162018]/80 font-medium leading-relaxed font-outfit">
                                                    {def.desc}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Section 03 */}
                            <div id="section-3" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 03</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-8">Information We Collect</h2>

                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-4">3.1 Protected Health Information (PHI) — As Business Associate</h3>
                                        <div className="space-y-4 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                            <p>In performing Revenue Cycle Management services for our covered entity clients, we receive, access, and process PHI on their behalf. This information is provided directly by our clients or transmitted from their electronic health record (EHR) and practice management systems. Types of PHI we handle include:</p>
                                            <ul className="list-disc pl-6 space-y-2 mt-4 text-[#162018]/70">
                                                <li>Patient demographics: full name, date of birth, address, telephone number, Social Security Number (last four digits for billing purposes), and insurance identification numbers</li>
                                                <li>Clinical data necessary for billing: diagnosis codes (ICD-10), procedure codes (CPT/HCPCS), dates of service, place of service, rendering provider identifiers (NPI), and clinical notes required for coding accuracy</li>
                                                <li>Insurance and financial information: payer names, member IDs, group numbers, Explanation of Benefits (EOB), remittance advice, and payment records</li>
                                                <li>Prior authorisation numbers, referral documentation, and eligibility verification results</li>
                                            </ul>
                                            <p className="mt-4">All PHI is collected and processed solely to perform contracted services on behalf of the client covered entity and only to the minimum extent necessary for that purpose, as required by 45 CFR § 164.502(b) (the Minimum Necessary Standard).</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">3.2 Provider & Practice Information — From Clients</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">We collect practice and provider information from our clients, including: practice legal name, Tax Identification Number (TIN), National Provider Identifier (NPI), licensure information, payer contract details, DEA numbers (where applicable), credentialing documentation, and banking or EFT information for payment posting purposes.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">3.3 Personal Information — Website Visitors & Prospective Clients</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">When individuals visit our website or submit an inquiry through our contact form, we may collect: full name, email address, phone number, organisation name, and the content of any message submitted. This information is used solely to respond to inquiries and is not combined with PHI.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">3.4 Technical Information — Automatic Collection</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">Our website automatically collects limited technical data including: IP address, browser type, pages visited, time and date of visits, and referring URLs. We use this information to maintain website security, improve user experience, and compile aggregate statistics. We do not use this data to identify individual users for marketing purposes.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 04 */}
                            <div id="section-4" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 04</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-8">How We Use Information</h2>

                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-6">4.1 PHI — Permitted Uses Only</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium mb-6">MeBilling uses and discloses PHI exclusively as permitted or required by the applicable BAA and by HIPAA. Our permitted uses include:</p>

                                        <div className="grid gap-4">
                                            {[
                                                { title: "Healthcare Operations and Treatment Payment", ref: "45 CFR § 164.506", desc: "Submitting and managing insurance claims, processing payments, managing denials and appeals, performing coding and documentation reviews, and all other activities directly related to healthcare payment on behalf of a covered entity client." },
                                                { title: "Performance of BAA-Permitted Functions", ref: "BAA", desc: "Any use specifically authorised in the written BAA between MeBilling and the client, including quality assurance, compliance auditing, and training activities that require access to PHI." },
                                                { title: "Required by Law", ref: "45 CFR § 164.512", desc: "Disclosures to comply with valid legal process, court orders, regulatory investigations by the HHS Office for Civil Rights (OCR), or other lawful government authority." },
                                                { title: "Management and Administration of MeBilling", ref: "45 CFR § 164.504(e)(4)", desc: "Internal use by MeBilling's workforce to manage our own legal and business obligations, only to the extent permitted." }
                                            ].map((item, i) => (
                                                <div key={i} className="bg-[#FAFAEE] p-6 rounded-xl border border-[#E8E6DD]">
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                                        <h4 className="font-bold text-[#1A6B3A] font-outfit text-[15px]">{item.title}</h4>
                                                        <span className="text-[12px] font-bold bg-[#1A6B3A]/10 text-[#1A6B3A] px-2 py-1 rounded">{item.ref}</span>
                                                    </div>
                                                    <p className="text-[14.5px] text-[#162018]/80 leading-relaxed font-medium font-outfit">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">4.2 What We Will Never Do With PHI</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">MeBilling will never sell, rent, lease, or trade PHI or any personal information. We will never use PHI for marketing purposes without explicit written authorisation. We will never use PHI for any purpose not expressly permitted by the applicable BAA and HIPAA, including any use that would constitute a violation of the Anti-Kickback Statute 42 U.S.C. § 1320a-7b or the False Claims Act 31 U.S.C. §§ 3729-3733.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">4.3 Personal Information — Website and Business Use</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">Non-PHI personal information collected through our website or business development activities is used solely to: respond to inquiries and requests for information; communicate about our services; and, where applicable, comply with our legal obligations. We do not sell, share, or monetise this information in any way.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 05 */}
                            <div id="section-5" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 05</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-8">HIPAA & HITECH Compliance</h2>

                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-4">5.1 Governing Framework</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium mb-6">MeBilling's data handling practices are governed by the full HIPAA Administrative Simplification framework, as amended and strengthened by the HITECH Act of 2009:</p>

                                        <ul className="space-y-4">
                                            {[
                                                { name: "HIPAA Privacy Rule", ref: "45 CFR Part 164, Subpart E", desc: "governs the permissible uses and disclosures of PHI and requires us to implement privacy policies and procedures" },
                                                { name: "HIPAA Security Rule", ref: "45 CFR Part 164, Subparts A & C", desc: "requires administrative, physical, and technical safeguards to protect ePHI" },
                                                { name: "HIPAA Breach Notification Rule", ref: "45 CFR Part 164, Subpart D", desc: "requires notification to covered entity clients of any breach of unsecured PHI within 60 days of discovery" },
                                                { name: "HITECH Act", ref: "Pub. L. 111-5, § 13001 et seq.", desc: "directly extended HIPAA obligations to Business Associates, strengthened enforcement, and increased civil and criminal penalties" },
                                                { name: "HITECH § 13405(d)", ref: "", desc: "requires compliance with patient requests to restrict disclosures for self-pay services, as enforced through our covered entity clients" }
                                            ].map((rule, i) => (
                                                <li key={i} className="flex gap-4">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8920A] shrink-0 mt-2"></div>
                                                    <div className="text-[15px] font-outfit text-[#162018]/80 font-medium">
                                                        <strong className="text-[#162018] font-bold">{rule.name}</strong>
                                                        {rule.ref && <span className="bg-[#E8E6DD] text-[12px] px-1.5 py-0.5 rounded mx-2 text-[#162018]">{rule.ref}</span>}
                                                        — {rule.desc}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">5.2 Direct HIPAA Liability</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">Under the HITECH Act, Business Associates like MeBilling are directly liable for compliance with the HIPAA Security Rule and the applicable provisions of the Privacy Rule. We are subject to civil monetary penalties enforced by the HHS Office for Civil Rights (OCR) and, in cases of knowing violations, criminal penalties under 42 U.S.C. § 1320d-6. We take this liability seriously and maintain a full internal compliance programme accordingly.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">5.3 Minimum Necessary Standard</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">Consistent with 45 CFR § 164.502(b), MeBilling limits all PHI access to the minimum information necessary to perform each specific service. Access controls are implemented at the role and function level, so that individuals within MeBilling only access PHI relevant to their assigned tasks. We do not grant broad access to PHI as a default.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 06 */}
                            <div id="section-6" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 06</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-8">Texas Privacy Laws</h2>

                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">6.1 Texas Medical Records Privacy Act (TMRPA)</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium mb-4">As a company headquartered in Texas, MeBilling is subject to the Texas Medical Records Privacy Act Texas Health & Safety Code, Chapter 181, enacted as H.B. 300 (2011). The TMRPA applies to a broader category of "covered entities" than HIPAA and imposes additional requirements, including:</p>
                                        <ul className="list-disc pl-6 space-y-2 text-[#162018]/70 text-[15.5px] font-medium font-outfit mb-4">
                                            <li>Mandatory annual HIPAA and TMRPA privacy training for all employees who access protected health information — MeBilling conducts this training without exception</li>
                                            <li>Written authorisation requirements for disclosure of PHI for marketing purposes — MeBilling does not engage in such disclosures</li>
                                            <li>The right of patients to request electronic copies of their health information, enforceable against Business Associates operating in Texas</li>
                                        </ul>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium italic">Where Texas law is more stringent than HIPAA, MeBilling complies with the stricter Texas standard.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">6.2 Texas Data Breach Notification</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">In the event of a breach of personal information, MeBilling complies with the Texas Identity Theft Enforcement and Protection Act Texas Business & Commerce Code § 521.053, which requires notification to affected Texas residents as promptly as practicable and no later than 60 days after the date of discovery of a breach. Notification will also be provided to our covered entity clients as required by the HIPAA Breach Notification Rule, and to the Texas Attorney General's office when required by law.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">6.3 Texas Health & Safety Code Chapter 182</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">MeBilling also complies with Texas Health & Safety Code Chapter 182, which governs the confidentiality of medical records maintained in Texas, including requirements relating to the disclosure of confidential information and penalties for unlawful disclosure.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">6.4 FTC Act Compliance</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">MeBilling's data security practices are designed to comply with Section 5 of the Federal Trade Commission Act (15 U.S.C. § 45), which prohibits unfair or deceptive acts or practices in or affecting commerce, including inadequate data security that causes or is likely to cause substantial consumer harm.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 07 */}
                            <div id="section-7" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 07</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Business Associate Agreement (BAA)</h2>
                                <div className="space-y-6 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>MeBilling executes a written Business Associate Agreement (BAA) with every covered entity client before performing any services that involve access to PHI. The BAA is a legally required contract under 45 CFR § 164.308(b)(3) and 45 CFR § 164.504(e) that specifies:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-[#162018]/70">
                                        <li>The permitted and required uses and disclosures of PHI by MeBilling</li>
                                        <li>MeBilling's obligation not to use or disclose PHI in a manner inconsistent with the BAA or HIPAA</li>
                                        <li>Safeguards MeBilling must maintain to prevent unauthorised use or disclosure of PHI</li>
                                        <li>MeBilling's obligation to report any use or disclosure not permitted by the BAA, including breaches</li>
                                        <li>MeBilling's obligation to comply with the HIPAA Security Rule for ePHI</li>
                                        <li>Subcontractor BAA requirements — MeBilling does not share PHI with subcontractors; all services are performed in-house</li>
                                        <li>Requirements for the return or destruction of PHI upon termination of the services agreement</li>
                                    </ul>
                                    <div className="bg-[#1A6B3A]/5 border-l-4 border-[#1A6B3A] p-6 rounded-r-xl mt-6">
                                        <p className="text-[#1A6B3A] font-bold">MeBilling performs all services in-house. We do not share PHI with subcontractors, offshore processors, or third-party vendors who are not subject to our own internal controls. If you are a covered entity and do not have an executed BAA with MeBilling, please contact us immediately at privacy@mebilling.com before transmitting any PHI.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 08 */}
                            <div id="section-8" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 08</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Data Security Safeguards</h2>
                                <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium mb-8">MeBilling maintains a comprehensive information security programme designed to satisfy the requirements of the HIPAA Security Rule 45 CFR Part 164, Subparts A & C. Our safeguards operate across three required domains:</p>

                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-4">8.1 Administrative Safeguards <span className="text-[14px] bg-[#E8E6DD] px-2 py-1 rounded ml-2 font-outfit font-bold">45 CFR § 164.308</span></h3>
                                        <ul className="space-y-3 text-[15.5px] text-[#162018]/80 font-outfit font-medium">
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Designated Privacy Officer and Security Officer with defined accountability for HIPAA compliance</li>
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Comprehensive workforce training: annual mandatory HIPAA, TMRPA, and information security training for all staff who access PHI, with completion tracking and disciplinary policies for non-compliance</li>
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Access management: role-based access controls ensuring each workforce member accesses only the PHI necessary for their assigned function</li>
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Risk analysis and risk management: annual formal risk assessment identifying threats and vulnerabilities to ePHI, with documented mitigation plans <span className="text-[#C8920A] text-[12px] font-bold ml-1">§ 164.308(a)(1)</span></li>
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Contingency planning: documented backup and disaster recovery procedures including a business continuity plan for critical billing functions <span className="text-[#C8920A] text-[12px] font-bold ml-1">§ 164.308(a)(7)</span></li>
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Evaluation: periodic technical and non-technical evaluation of security practices to ensure ongoing compliance <span className="text-[#C8920A] text-[12px] font-bold ml-1">§ 164.308(a)(8)</span></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-4">8.2 Physical Safeguards <span className="text-[14px] bg-[#E8E6DD] px-2 py-1 rounded ml-2 font-outfit font-bold">45 CFR § 164.310</span></h3>
                                        <ul className="space-y-3 text-[15.5px] text-[#162018]/80 font-outfit font-medium">
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Facility access controls: secured office environments with restricted access to workstations and servers that process ePHI</li>
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Workstation security: policies governing the proper use and placement of workstations that access ePHI, including screen lock requirements and clean desk policies</li>
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Device and media controls: documented procedures for the disposal of hardware containing ePHI, including NIST-compliant data destruction</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-4">8.3 Technical Safeguards <span className="text-[14px] bg-[#E8E6DD] px-2 py-1 rounded ml-2 font-outfit font-bold">45 CFR § 164.312</span></h3>
                                        <ul className="space-y-3 text-[15.5px] text-[#162018]/80 font-outfit font-medium">
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Encryption: all ePHI transmitted electronically is encrypted using TLS 1.2 or higher; all stored ePHI is encrypted at rest using AES-256 or equivalent</li>
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Access controls: unique user identification for all workforce members accessing ePHI, with automatic logoff after periods of inactivity <span className="text-[#C8920A] text-[12px] font-bold ml-1">§ 164.312(a)(2)</span></li>
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Multi-factor authentication (MFA) required for all remote access and privileged account access to systems containing ePHI</li>
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Audit controls: automated audit logs recording all access to ePHI systems, with regular review for anomalous activity <span className="text-[#C8920A] text-[12px] font-bold ml-1">§ 164.312(b)</span></li>
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Integrity controls: mechanisms to authenticate ePHI and detect unauthorised alteration or destruction <span className="text-[#C8920A] text-[12px] font-bold ml-1">§ 164.312(c)</span></li>
                                            <li><span className="text-[#1A6B3A] font-bold mr-2">•</span> Transmission security: end-to-end encryption for all electronic transmission of ePHI, including email, EDI, and API-based data exchanges <span className="text-[#C8920A] text-[12px] font-bold ml-1">§ 164.312(e)</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Section 09 */}
                            <div id="section-9" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 09</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Breach Notification</h2>
                                <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium mb-8">MeBilling maintains documented breach response procedures consistent with the HIPAA Breach Notification Rule 45 CFR Part 164, Subpart D and applicable Texas law.</p>

                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">9.1 What Constitutes a Breach</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">A "breach" is the acquisition, access, use, or disclosure of PHI in a manner not permitted by the HIPAA Privacy Rule that compromises the security or privacy of the PHI, as defined under 45 CFR § 164.402. The presumption is that any impermissible use or disclosure of PHI is a breach unless MeBilling can demonstrate, through a four-factor risk assessment, that there is a low probability the PHI has been compromised.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-4">9.2 Notification Timelines</h3>
                                        <div className="grid sm:grid-cols-3 gap-4">
                                            {[
                                                { target: "To the Covered Entity Client", time: "60 calendar days", ref: "45 CFR § 164.410", desc: "MeBilling will notify the affected covered entity without unreasonable delay and in no case later than 60 calendar days after discovery of a breach." },
                                                { target: "To HHS", time: "Via Client", ref: "45 CFR § 164.408", desc: "Notification to HHS is made by the covered entity client. MeBilling will provide all required information to facilitate timely notification." },
                                                { target: "To Texas Residents", time: "60 days", ref: "TX Bus. & Com. Code § 521.053", desc: "If a breach affects Texas residents' personal information, MeBilling will comply with notification requirements within 60 days." }
                                            ].map((item, i) => (
                                                <div key={i} className="bg-white p-5 rounded-xl border border-[#E8E6DD] flex flex-col">
                                                    <h4 className="font-bold text-[#1A6B3A] font-outfit text-[14px] mb-2">{item.target}</h4>
                                                    <p className="text-[13.5px] text-[#162018]/80 leading-relaxed font-medium font-outfit mb-4 flex-grow">{item.desc}</p>
                                                    <span className="text-[11px] font-bold text-[#C8920A] tracking-wide uppercase mt-auto">{item.ref}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">9.3 Contents of Breach Notification</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">Our breach notification to covered entity clients will include, to the extent known: the nature of the PHI involved; the unauthorised persons who used or received PHI; whether PHI was actually acquired or viewed; and the extent to which the risk of harm has been mitigated. We will provide this information in written form, supplemented by a verbal briefing for significant incidents.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 10 */}
                            <div id="section-10" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 10</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-8">Disclosure & Third-Party Sharing</h2>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">10.1 PHI — No Subcontracting</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">MeBilling does not share PHI with any subcontractors, offshore processors, or third-party service providers in connection with delivering our RCM services. All billing, coding, credentialing, and related functions are performed entirely by MeBilling's own employed workforce operating under our direct supervision and compliance programme.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">10.2 Technology Vendors</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">MeBilling uses cloud-based practice management and billing platforms to perform services within our clients' environments. We do not transmit PHI to these platforms independently; rather, we operate within platforms that our clients already use and have contracted for independently. Any vendor MeBilling independently engages that may incidentally access ePHI (such as hosted infrastructure providers) is subject to a signed BAA with MeBilling prior to any such access.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">10.3 Required Disclosures</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">MeBilling may disclose PHI or personal information as required by applicable law, including: valid court orders, subpoenas, or warrants; lawful requests from law enforcement agencies consistent with 45 CFR § 164.512(f); and oversight activities by the HHS Office for Civil Rights or other regulatory authorities with jurisdiction over MeBilling's operations.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">10.4 No Sale of Information</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">MeBilling will never sell, rent, barter, exchange, or otherwise disclose PHI, personal information, or any information derived from PHI for commercial, marketing, or data monetisation purposes. This prohibition is absolute and without exception.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 11 */}
                            <div id="section-11" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 11</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Data Retention & Destruction</h2>
                                <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium mb-6">MeBilling retains PHI and related billing records for the period specified in the applicable BAA and as required by law. As a general standard:</p>

                                <ul className="space-y-4 mb-6">
                                    {[
                                        { title: "Medical Billing Records", desc: "Retained for a minimum of seven (7) years from the date of service or the last date of treatment, consistent with CMS billing record requirements and applicable state laws" },
                                        { title: "Medicare and Medicaid Records", desc: "Retained for a minimum of ten (10) years as recommended under the OIG Compliance Program Guidance for Third-Party Medical Billing Companies and required by certain state Medicaid programmes" },
                                        { title: "Credentialing Records", desc: "Retained for the duration of the provider's engagement and for a minimum of five (5) years thereafter" },
                                        { title: "Website Inquiry Data", desc: "Retained for a maximum of 24 months, unless the inquiry results in an ongoing business relationship" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-6 bg-white p-4 rounded-lg border border-[#E8E6DD]">
                                            <span className="font-bold text-[#1A6B3A] font-outfit text-[14px] sm:w-1/3 shrink-0">{item.title}</span>
                                            <span className="text-[14.5px] text-[#162018]/80 font-medium font-outfit">{item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">Upon termination of a services agreement, MeBilling will return or destroy all PHI in its possession in accordance with the BAA terms and within the timeframe specified therein. Destruction of physical and electronic PHI is performed using NIST SP 800-88-compliant methods that render the data unrecoverable.</p>
                            </div>

                            {/* Section 12 */}
                            <div id="section-12" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 12</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-8">Individual Rights</h2>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">12.1 Rights Regarding PHI</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">Rights relating to PHI (such as rights of access, amendment, accounting of disclosures, and restriction of use) are held by patients and are enforceable against the covered entity (your healthcare provider or practice), not against MeBilling directly. As a Business Associate, MeBilling will cooperate with covered entity clients to facilitate patients' exercise of their HIPAA rights under 45 CFR §§ 164.524, 164.526, 164.528. Please direct all PHI rights requests to your healthcare provider directly.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cormorant font-bold text-[#162018] mb-3">12.2 Rights Regarding Personal Information (Non-PHI)</h3>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium mb-4">If you are a prospective client, current client contact, or website visitor whose personal (non-PHI) information MeBilling holds, you have the right to:</p>
                                        <ul className="list-disc pl-6 space-y-2 text-[#162018]/70 text-[15.5px] font-medium font-outfit mb-4">
                                            <li>Request confirmation of whether MeBilling holds personal information about you</li>
                                            <li>Request a copy of the personal information MeBilling holds about you</li>
                                            <li>Request correction of inaccurate personal information</li>
                                            <li>Request deletion of your personal information, subject to our legal retention obligations</li>
                                            <li>Withdraw consent to our use of your personal information for communications you did not initiate</li>
                                        </ul>
                                        <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">To exercise any of these rights, contact MeBilling's Privacy Officer at <a href="mailto:privacy@mebilling.com" className="text-[#C8920A] hover:underline">privacy@mebilling.com</a>. We will respond within 30 business days of receiving a verifiable request.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-[#E8E6DD]"></div>

                            {/* Section 13 */}
                            <div id="section-13" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 13</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Website Data, Cookies & Analytics</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>Our website (mebilling.com) uses limited session-based cookies to facilitate navigation and form functionality. We do not use persistent tracking cookies, cross-site tracking technologies, or behavioural advertising platforms. We do not participate in any advertising network that would enable third parties to collect data about visitors to our website.</p>
                                    <p>We may use a privacy-respecting web analytics tool (configured without IP address logging) to understand aggregate traffic patterns. The analytics data collected does not identify individual users and is not shared with any third party for commercial purposes. You may disable cookies in your browser settings without affecting your ability to access our website or contact us.</p>
                                    <p>MeBilling's website does not collect or process PHI. No health information should be submitted through any website contact form. If you need to transmit PHI to MeBilling, please use only the secure channels established in your services agreement and BAA.</p>
                                    <p>Our email communications are conducted in compliance with the CAN-SPAM Act 15 U.S.C. § 7701 et seq. All commercial emails include a clear identification of the sender, a physical postal address, and a functioning opt-out mechanism that we honour within 10 business days.</p>
                                </div>
                            </div>

                            {/* Section 14 */}
                            <div id="section-14" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 14</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Children's Privacy</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>MeBilling's website is not directed at children under the age of 13, and we do not knowingly collect personal information from children under 13 through our website. As required by the Children's Online Privacy Protection Act (COPPA) 15 U.S.C. § 6501 et seq., if we discover that we have inadvertently collected personal information from a child under 13, we will delete it promptly.</p>
                                    <p>Please note that MeBilling processes PHI relating to minor patients as part of our billing services on behalf of covered entity clients. This processing is governed by the applicable BAA and HIPAA, not by COPPA, and is performed solely at the direction of the healthcare provider or facility responsible for the minor's care.</p>
                                </div>
                            </div>

                            {/* Section 15 */}
                            <div id="section-15" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 15</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Policy Updates</h2>
                                <div className="space-y-5 text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">
                                    <p>MeBilling reviews this Privacy Policy at least annually and whenever applicable laws change in ways that affect our obligations. Material changes to this Policy will be communicated to active clients at least 30 days before they take effect, through written notice to the client's designated compliance or privacy contact. The "Last Revised" date at the top of this page reflects the most recent update.</p>
                                    <p>Continued engagement with MeBilling's services after the effective date of a material policy change constitutes acknowledgement of the updated Policy. We encourage clients and website visitors to review this Policy periodically.</p>
                                </div>
                            </div>

                            {/* Section 16 */}
                            <div id="section-16" className="scroll-mt-32">
                                <span className="text-[#C8920A] text-[12px] font-bold tracking-widest uppercase block mb-3">Section 16</span>
                                <h2 className="text-3xl lg:text-4xl font-cormorant font-medium text-[#162018] mb-6">Contact & Complaints</h2>
                                <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium mb-6">MeBilling has designated a Privacy Officer responsible for overseeing HIPAA compliance and this Privacy Policy. If you have questions, concerns, or a complaint regarding this Policy or our data practices, please contact us through any of the following channels:</p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {[
                                        { label: "Privacy Officer", val: "privacy@mebilling.com", isEmail: true },
                                        { label: "Legal & Compliance", val: "legal@mebilling.com", isEmail: true },
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

                                <p className="text-[15.5px] text-[#162018]/80 leading-relaxed font-outfit font-medium">If you believe your privacy rights under HIPAA have been violated, you also have the right to file a complaint directly with the HHS Office for Civil Rights at <a href="https://www.hhs.gov/ocr/privacy/hipaa/complaints" target="_blank" rel="noopener noreferrer" className="text-[#C8920A] hover:underline">www.hhs.gov/ocr/privacy/hipaa/complaints</a> or by calling 1-800-368-1019. MeBilling will not retaliate against any person for filing a good-faith complaint with HHS OCR or any other regulatory authority.</p>
                            </div>

                        </article>
                    </div>
                </div>
            </section>


        </main>
    );
}
