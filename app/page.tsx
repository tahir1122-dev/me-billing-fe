import Hero from "@/components/sections/Hero";
import HomeContactSection from "@/components/sections/HomeContactSection";
import SecurityComplianceSection from "@/components/sections/SecurityComplianceSection";
import ProofSection from "@/components/sections/ProofSection";
import PracticeFinderSection from "@/components/sections/PracticeFinderSection";
import InsightSection1 from "@/components/sections/InsightSection1";
import InsightSection2 from "@/components/sections/InsightSection2";
import RevenueLeakSection from "@/components/sections/RevenueLeakSection";
import ApproachSection from "@/components/sections/ApproachSection";
import Link from "next/link";
import Image from "next/image";

// ─── Section data ─────────────────────────────────────────────────────────────

const insightSection1 = {
    tagline: "— The Insight",
    heading1: "Watch how MeBilling turns",
    headingHighlight: "billing complexity",
    heading2: "into clean cash flow.",
    body: "A 2-minute overview of how our specialty-organized teams, in-house dispute pathway, and real-time dashboards work together to protect every dollar your practice earns.",
    cta: { label: "Schedule a Free Assessment", href: "/contact" },
    image: "/images/service 1.jpg",
};

const insightSection2 = {
    tagline: "— The Insight",
    badgeLabel: "The Revenue Gap",
    heading1: "Many practices lose revenue through",
    heading2: " ",
    headingHighlight: "denials, underpayments,",
    heading3: " missed follow-up, and documentation gaps.",
    body: "MeBilling helps identify and recover that revenue. Not from poor clinical outcomes, but from billing complexity that compounds silently. Payer policy changes, denial cycles, underpayment patterns.",
    cta: { label: "See How We Fix It", href: "/solutions" },
    image: "/images/bussines women.jpg",
};

const revenueLeakData = {
    tagline: "— Revenue Pressure Points",
    heading: "Four places ",
    headingHighlight: "revenue",
    heading2: " usually slips away.",
    subtext: "These are the pressure points we prioritize first because they create the fastest path from insight to cash recovery.",
    items: [
        {
            stat: "65%",
            title: "Unappealed Denials",
            description: "Up to 65% of denied claims are recoverable if worked with the right documentation.",
            icon: "🔄",
        },
        {
            stat: "+5%",
            title: "Unreconciled Underpayments",
            description: "Payments posted below contracted rates and never questioned.",
            icon: "💰",
        },
        {
            stat: "90",
            title: "Aging A/R with No Follow-Up",
            description: "Claims past 90 days require a different recovery approach.",
            icon: "📅",
        },
        {
            stat: "75%",
            title: "Accumulated Compliance Risk",
            description: "Documentation gaps can silently accumulate until payers find them first.",
            icon: "⚠️",
        },
    ],
};

const approachData = {
    tagline: "— The Approach",
    heading: "Built differently. Accountable to ",
    headingHighlight: "outcomes,",
    heading2: " not activity.",
    body: "MeBilling is not a billing clearinghouse. It is a managed revenue cycle practice organized by clinical specialty, end-to-end dispute resolution pathway, and held accountable to the metrics your practice actually tracks.",
    pillars: [
        {
            number: "01",
            title: "Specialty-organized teams. Not shared queues.",
            body: "Every account is staffed by specialists who work within that clinical discipline every day — oncology coders code oncology, interventional pain coders code pain management. No rotation, no generalists, no knowledge spread thin.",
            note: "Applied across 15 professional billing specialties, 5 institutional types, and 4 laboratory billing tracks — 24 disciplines total.",
        },
        {
            number: "02",
            title: "In-house only. No subcontracting, ever.",
            body: "Every claim, every appeal, every IDR proceeding, every arbitration filing managed by our own CPMA and CPC-certified staff. No third-party handoffs, no accountability gaps. One team, one number to call.",
            note: "250+ certified billing specialists. 90+ payer networks. Houston HQ with two global delivery centers — all in-house.",
        },
        {
            number: "03",
            title: "The full dispute pathway, internally.",
            body: "Most billing companies stop at the appeal. MeBilling manages every stage: direct negotiation, formal appeals, Federal IDR (NSA), arbitration, and mediation — all in-house, without routing a single dispute to outside counsel.",
            note: "12 service lines covering the complete billing lifecycle — from pre-registration through formal dispute resolution.",
        },
    ],
    ctas: [
        { label: "View all services →", href: "/services" },
        { label: "View all solutions →", href: "/solutions" },
        { label: "View all resources →", href: "/resources" },
    ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

import { PageContentService } from "@/services/pageContent.service";

export default async function Home() {
    // Fetch dynamic content
    const pageData = await PageContentService.getPage("home");
    const sections = pageData?.sections || {};

    const heroData = sections["Hero"] || {};
    const practiceFinderData = sections["PracticeFinderSection"] || {};
    const homeContactData = sections["HomeContactSection"] || {};
    const proofData = sections["ProofSection"] || {};
    const securityData = sections["SecurityComplianceSection"] || {};

    return (
        <>
            <main className="flex-1 w-full relative" style={{ backgroundColor: "#FFFDF5" }}>
                <Hero data={heroData} />

                <InsightSection1 data={insightSection1} />
                <InsightSection2 data={insightSection2} />
                <RevenueLeakSection data={revenueLeakData} />
                <ApproachSection data={approachData} />

                <ProofSection data={proofData} />
                <SecurityComplianceSection data={securityData} />
                <PracticeFinderSection data={practiceFinderData} />
                <HomeContactSection data={homeContactData} />
            </main>
        </>
    );
}
