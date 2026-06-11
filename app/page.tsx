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

// ─── Page ─────────────────────────────────────────────────────────────────────

import { PageContentService } from "@/services/pageContent.service";

export default async function Home() {
    // Fetch dynamic content
    const pageData = await PageContentService.getPage("home");
    const sections = pageData?.sections || {};

    const heroData = sections["Hero"] || {};
    const insightSection1 = sections["InsightSection1"] || {};
    const insightSection2 = sections["InsightSection2"] || {};
    const revenueLeakData = sections["RevenueLeakSection"] || {};
    const approachData = sections["ApproachSection"] || {};
    const proofData = sections["ProofSection"] || {};
    const securityData = sections["SecurityComplianceSection"] || {};
    const practiceFinderData = sections["PracticeFinderSection"] || {};
    const homeContactData = sections["HomeContactSection"] || {};

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
