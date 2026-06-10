import { PageData } from "@/types/page-content";

// Data extracted from Hero.tsx
const homeHero = {
    tagline1: "— U.S. Healthcare Revenue Cycle Specialists —",
    tagline2: "Established in 2015 · Houston, TX",
    headingLine1: "Your practice",
    headingLine2: "is ",
    headingHighlight: "leaving money",
    headingLine3: " on the table.",
    body: "Denied claims, underpayments, and payer complexity quietly reduce revenue every month. MeBilling helps practices recover more with expert-led medical billing solutions.",
    cta1: { label: "Let's Talk", href: "/contact" },
    cta2: { label: "See How We Work", href: "/solutions" },
    badges: [
        "CPMA & CPC Certified",
        "No Subcontracting",
        "HIPAA Compliant",
        "90+ Payer Networks",
    ],
    statCard: {
        label: "WHAT MEBILLING CLIENTS EXPERIENCE",
        stat: "5%",
        description: "Denial rate vs. industry average of 10–15%.",
        industryLabel: "Industry: 10–15%",
        mebillingLabel: "MeBilling: 5%",
    },
    specialties: [
        { name: "Inpatient Acute Care", highlight: false },
        { name: "Physical Therapy", highlight: true },
        { name: "Surgical Centers (ASCs)", highlight: false },
        { name: "Family Practice", highlight: false },
        { name: "Orthopedic Surgery", highlight: true },
        { name: "Urology", highlight: false },
        { name: "Pain Management", highlight: false },
        { name: "Toxicology", highlight: true },
    ]
};

// Data extracted from PracticeFinderSection.tsx
const homePracticeFinder = {
    tagline: "— Find Your Starting Point",
    heading1: "What best describes your",
    headingHighlight: "practice right now?",
    subtext: "Select the situation that fits — we'll show you exactly how MeBilling addresses it.",
    cards: [
        {
            id: "hand-off-billing-1",
            badge: "Full Outsourcing",
            badgeColor: "#C8920A",
            image: "/images/service 2.jpg",
            title: "We want to hand off billing entirely",
            description: "One accountable partner from patient registration through final payment, no vendor gaps.",
        },
        {
            id: "aged-ar",
            badge: "Revenue Recovery",
            badgeColor: "#C8920A",
            image: "/images/about us team.jpg",
            title: "We have aged A/R we can't seem to move",
            description: "Old claims recovery, denial management, and formal appeals that convert dormant receivables into deposits.",
        },
        {
            id: "audit-risk",
            badge: "Compliance & Risk",
            badgeColor: "#C8920A",
            image: "/images/service 3.jpg",
            title: "We're worried about an audit or recoupment",
            description: "Proactive coding audits, HCC validation, and CDI reviews — before a payer finds the gap.",
        },
        {
            id: "hand-off-billing-2",
            badge: "Provider Lifecycle",
            badgeColor: "#C8920A",
            image: "/images/bussines women.jpg",
            title: "We're onboarding providers and billing is stalling",
            description: "Enrollment across 90+ payer networks so credentialing gaps never become billing gaps.",
        },
        {
            id: "hand-off-billing-3",
            badge: "Complex Claims · Premium",
            badgeColor: "#C8920A",
            image: "/images/sales.png",
            title: "We have out-of-network or injury claim disputes",
            description: "Workers' comp, NSA IDR, claims negotiation, arbitration, and mediation — all in-house.",
        },
        {
            id: "hand-off-billing-4",
            badge: "Financial Accuracy",
            badgeColor: "#C8920A",
            image: "/images/doc 2.png",
            title: "We think payers are underpaying us",
            description: "Daily payment reconciliation against contracted rates — every variance identified and pursued.",
        },
    ],
};

// Data extracted from HomeContactSection.tsx
const homeContact = {
    cta: {
        line1: "Every dollar you've earned",
        line2Highlight: "deserves to be collected.",
        line3: "Let's make sure it is.",
        body: "Tell us about your practice — your specialty, your volume, your current billing situation. We'll tell you exactly where revenue is leaking and what it takes to stop it.",
        buttons: [
            { label: "Schedule a Free Assessment", href: "/contact", primary: true },
            { label: "Explore Services & Solutions", href: "/solutions", primary: false },
        ],
    },
    form: {
        heading: "Get in Touch",
        fields: [
            { id: "firstName", label: "First Name", type: "text", placeholder: "First Name", half: true },
            { id: "lastName", label: "Last Name", type: "text", placeholder: "Last Name", half: true },
            { id: "email", label: "BUSINESS EMAIL", type: "email", placeholder: "Email", half: false },
            { id: "queries", label: "MESSAGE", type: "textarea", placeholder: "How can we help?", half: false },
        ],
        submitLabel: "Submit",
        image: "/images/service 4.jpg",
        imageBadge: "The Revenue Gap",
    },
};

// Data extracted from ProofSection.tsx
const homeProof = {
    tagline: "— The Proof",
    heading1: "Numbers our clients see",
    heading2: "on their dashboards ",
    headingHighlight: "every day.",
    body: "Not benchmarks. Not industry averages projected onto our model. These are the actual performance metrics MeBilling clients track in real time updated daily and always visible.",
    stats: [
        {
            id: "clean-claim",
            label: "CLEAN CLAIM RATE",
            value: "98% +",
            note: "INDUSTRY AVERAGE: 85–90%",
            highlighted: false,
        },
        {
            id: "days-ar",
            label: "DAYS IN A/R",
            value: "25",
            note: "INDUSTRY AVERAGE: 42+ DAYS",
            highlighted: true,
        },
        {
            id: "denial-rate",
            label: "DENIAL RATE",
            value: "< 5%",
            note: "INDUSTRY AVERAGE: 10–15%",
            highlighted: false,
        },
        {
            id: "processed",
            label: "PROCESSED",
            value: "$1.7B",
            note: "Across 1.5M+ Transactions (2025 YTD)",
            highlighted: false,
        },
    ],
};

// Data extracted from FooterSection.tsx
const footerData = {
    companyInfo: {
        logo: {
            src: "/images/Logo2.png",
            alt: "MeBilling Logo",
            width: 160,
            height: 50
        },
        description: "MeBilling provides end-to-end Revenue Cycle Management solutions for U.S. healthcare providers, including medical billing, coding, denial management, payment posting, A/R follow-up, credentialing, and compliance support. We currently serve clients in Texas, Louisiana, Arkansas, Oklahoma, Alabama, and New Jersey."
    },
    socialLinks: [
        { href: "https://www.linkedin.com/company/mebilling/", label: "LinkedIn", icon: "/images/linkedin logo.svg" },
        { href: "https://www.facebook.com/mebilling/", label: "Facebook", icon: "/images/facebook logo.svg" },
        { href: "https://twitter.com/MeBillingSol", label: "Twitter", icon: "/images/Twitter logo.svg" },
        { href: "#", label: "Instagram", icon: "/images/instagram logo.svg" },
    ],
    pageLinks: [
        { label: "Home", href: "/" },
        { label: "Our services", href: "/services" },
        { label: "Bundled Solutions", href: "/solutions" },
        { label: "Blog", href: "/resources" },
        { label: "About Us", href: "/about" },
    ],
    contactItems: [
        { icon: "/images/call.svg", text: "US: (346) 616-0008", href: "tel:+13466160008" },
        { icon: "/images/call.svg", text: "Global: +92 316 433 3497", href: "tel:+923164333497" },
        { icon: "/images/Icons.svg", text: "info@mebilling.com", href: "mailto:info@mebilling.com" },
        { icon: "/images/loc.svg", text: "100 Glenborough Dr, Suite 400\nHouston, TX 77067, USA" },
    ],
    bottomBar: {
        copyright: "© 2026 MeBilling Inc. All rights reserved.",
        badge: "HIPAA Compliant",
        links: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Use", href: "/terms-of-use" },
            { label: "Legal Disclaimer", href: "/legal-disclaimer" },
            { label: "HIPAA Notice", href: "/hipaa-notice" },
            { label: "Cookie Policy", href: "/cookie-policy" }
        ]
    }
};

const faqData = {
    heading: "Frequently Asked",
    headingHighlight: "Questions",
    subtext: "Combining senior-led expertise with a global network of vetted buyers, we ensure your exit is as rewarding as the business you've built.",
    faqs: [
        {
            question: "What medical billing services do you offer?",
            answer:
                "We provide end-to-end medical billing services, including patient eligibility verification, medical coding, claim submission, payment posting, denial management, and accounts receivable follow-up.",
        },
        {
            question: "How can your services improve my revenue?",
            answer:
                "We reduce denials, speed up claim cycles, and improve collection workflows so you can increase cash flow and overall revenue performance.",
        },
        {
            question: "Do you work with all medical specialties?",
            answer:
                "Yes. Our team supports a wide range of medical specialties with tailored workflows and compliance-first billing processes.",
        },
        {
            question: "Senior-Level Representation and Expert Partner-Led Execution at Every Stage",
            answer:
                "You get dedicated experts who oversee every step of your billing process for consistent performance and accountability.",
        },
    ]
};

const resourcesTabsData = {
    tabs: ["Case Studies", "Blog", "Events", "Press Releases"],
    caseStudies: [
        {
            category: "CASE STUDY",
            specialty: "Behavioral Health",
            title: "Clearing an $8M A/R Backlog in 90 Days",
            description: "A large behavioral health network had accumulated $8M in aged A/R across 18 months of billing transition. MeBilling's recovery team categorized, pursued, and resolved the backlog - restoring cash flow within a single quarter."
        },
        {
            category: "CASE STUDY",
            specialty: "Emergency Medicine",
            title: "Reducing 90-Day A/R from 28% to Under 5%",
            description: "A freestanding emergency room network across 12 locations was carrying 28% of its A/R past 90 days. MeBilling's structured follow-up and denial management process brought that figure below 5% within six months."
        },
        {
            category: "CASE STUDY",
            specialty: "Oncology",
            title: "Coding Accuracy Improved from 84% to 98%",
            description: "A mid-sized oncology practice was experiencing high denial rates rooted in coding errors and modifier misuse. A MeBilling coding audit identified the root causes and implemented specialty-specific coding protocols that brought accuracy to 98% within 60 days."
        },
        {
            category: "CASE STUDY",
            specialty: "Nephrology",
            title: "$2.4M Recovered from Old Claims in 3 Months",
            description: "A nephrology group had written off a significant portion of their aged claims as uncollectable. MeBilling's old claims recovery team assessed the portfolio, pursued all viable claims, and collected $2.4M in previously abandoned revenue."
        },
        {
            category: "CASE STUDY",
            specialty: "ASC",
            title: "Denied Claims Reduced from 20% to Under 2%",
            description: "An ambulatory surgical center was experiencing a 20% denial rate driven by modifier errors and eligibility gaps. MeBilling's audit and front-end process improvement brought the denial rate below 2% within 90 days."
        },
        {
            category: "CASE STUDY",
            specialty: "Credentialing",
            title: "150 Provider Applications Submitted in 60 Days",
            description: "A multi-specialty facility expanding into new markets needed 150 provider credentialing applications submitted across 8 payer networks under a tight timeline. MeBilling's credentialing team completed all submissions without a single missed deadline."
        }
    ],
    pressReleases: [
        {
            date: "April 2026",
            title: "MeBilling Expands Injury Claims Practice to Serve 12 New Markets",
            description: "MeBilling Inc. announces the expansion of its Injury Claims Management service line, adding workers' compensation and personal injury billing capability across 12 new U.S. markets, effective Q2 2026."
        },
        {
            date: "March 2026",
            title: "MeBilling to Exhibit at HFMA Annual Conference 2026",
            description: "MeBilling Inc. confirms its participation in the HFMA Annual Conference in Las Vegas, where the team will be showcasing its end-to-end RCM services and Federal IDR management capabilities for hospital and health system CFOs."
        },
        {
            date: "January 2026",
            title: "MeBilling Reports Record Recovery Results for 2025",
            description: "MeBilling Inc. announces that its Old Claims Recovery practice recovered $1.7B in total transaction value for clients in 2025 - processing over 1.5 million successful transactions across 5,000+ providers and 40+ states."
        },
        {
            date: "October 2025",
            title: "MeBilling Opens Second Global Delivery Center",
            description: "MeBilling Inc. announces the opening of its second global delivery center, expanding its operational capacity and around-the-clock billing support infrastructure for clients across the United States."
        }
    ],
    events: [
        {
            month: "MAY",
            day: "14",
            title: "HFMA Annual Conference 2026",
            description: "MeBilling will be exhibiting at the Healthcare Financial Management Association's Annual Conference - connecting with CFOs, revenue cycle leaders, and healthcare executives.",
            location: "Las Vegas, NV"
        },
        {
            month: "JUN",
            day: "08",
            title: "ASCA Annual Conference & Expo",
            description: "Join MeBilling at the Ambulatory Surgery Center Association's flagship annual event - discussing ASC billing, IDR, and revenue cycle performance with surgical center leaders.",
            location: "Nashville, TN"
        },
        {
            month: "JUL",
            day: "22",
            title: "Lone Star HFMA Summer Conference",
            description: "MeBilling's team will be presenting on No Surprises Act IDR outcomes and payer dispute resolution strategies at the Lone Star chapter's summer healthcare finance event.",
            location: "Houston, TX"
        },
        {
            month: "SEP",
            day: "16",
            title: "Becker's ASC Annual Meeting",
            description: "MeBilling will be showcasing our institutional billing and ASC revenue cycle services at Becker's ASC Annual Meeting - one of the most attended events in ambulatory surgical center operations.",
            location: "Chicago, IL"
        },
        {
            month: "OCT",
            day: "30",
            title: "TASCS Annual Conference 2026",
            description: "Attending the Texas Ambulatory Surgery Center Society's annual conference - connecting with Texas-based ASC operators and discussing state-specific billing challenges and revenue cycle solutions.",
            location: "Austin, TX"
        }
    ],
    blogs: [
        {
            tag: "RCM",
            date: "April 2026",
            title: "The No Surprises Act in 2026 - What Providers Need to Know",
            description: "Two years into NSA enforcement, payer compliance patterns are emerging. Here's what providers and billing teams need to understand about IDR outcomes, timely filing windows, and the cases most likely to succeed."
        },
        {
            tag: "CODING",
            date: "March 2026",
            title: "5 Modifier Errors That Are Silently Costing Your Practice Revenue",
            description: "Modifier misuse is one of the most common - and most preventable - sources of claim denials. This guide covers the five most frequently misapplied modifiers across professional billing and how to correct them."
        },
        {
            tag: "CREDENTIALING",
            date: "February 2026",
            title: "Why Medicaid Credentialing Takes So Long - And What You Can Do About It",
            description: "Medicaid credentialing timelines are among the longest in payer enrollment. Understanding why helps you manage expectations, plan ahead, and pursue interim billing options while waiting for final approval."
        },
        {
            tag: "DENIAL MGMT",
            date: "January 2026",
            title: "How to Build a Denial Management Process That Actually Works",
            description: "Most denial management fails not because of bad intentions but because of bad process design. This article outlines the structural requirements for a denial management workflow that consistently converts rejections into revenue."
        },
        {
            tag: "LAB BILLING",
            date: "December 2025",
            title: "Toxicology Billing Under Payer Scrutiny - What's Changed in 2025",
            description: "Payer policy on toxicology claims has tightened considerably. This breakdown covers what presumptive vs. definitive testing distinctions mean for your claims and how documentation requirements have shifted across major payers."
        },
        {
            tag: "REVENUE CYCLE",
            date: "November 2025",
            title: "The Hidden Cost of A/R Days You're Not Tracking",
            description: "Days in A/R is a standard metric - but most practices aren't measuring the right segments. This article explains how to break down A/R aging by payer, specialty, and claim type to identify where your cash flow is actually leaking."
        }
    ]
};

const salesPillarsData = {
    tagline: "— Core Platform",
    heading: "The 3 essential pillars of",
    headingHighlight: "healthcare software",
    description:
        "MeBilling is purpose-built to automate work, prioritize tasks, and eliminate errors. Pervasive across the end-to-end software platform, our AI solutions drive efficiency and yield meaningful results for healthcare providers.",
    pillars: [
        {
            title: "Deliver quality care",
            content: "Focus on what matters most—your patients. Our platform streamlines clinical workflows, reducing administrative burdens so you can spend more time providing exceptional care.",
        },
        {
            title: "Collect payments faster, effortlessly",
            content: "Automate your billing processes, minimize denials, and accelerate cash flow with our intelligent revenue cycle management tools designed for modern practices.",
        },
        {
            title: "Top off your quality care experience",
            content: "Enhance patient satisfaction with seamless scheduling, automated reminders, and intuitive patient portals that make managing healthcare a breeze.",
        },
    ],
};

export const homeSecurityCompliance = {
    tagline: "— Trust & Protection",
    heading1: "Security &",
    headingHighlight: "Compliance",
    body: "The HIPAA Security Rule requires administrative, physical, and technical safeguards to protect ePHI. Here is how we ensure your data remains secure.",
    items: [
        {
            title: "HIPAA Security Rule Aligned",
            description: "Safeguards strictly follow HHS requirements.",
            icon: "🛡️"
        },
        {
            title: "Business Associate Agreements",
            description: "Signed BAA is required before any PHI access.",
            icon: "📜"
        },
        {
            title: "Role-Based Access",
            description: "Strict controls ensure access is granted only as needed.",
            icon: "🔐"
        },
        {
            title: "MFA for Remote Access",
            description: "Multi-factor authentication secures all remote connections.",
            icon: "📱"
        },
        {
            title: "Encryption",
            description: "Data is encrypted both in transit and at rest.",
            icon: "🔒"
        },
        {
            title: "Audit & Monitoring",
            description: "Continuous logging and access monitoring.",
            icon: "👁️"
        },
        {
            title: "Workforce Training",
            description: "Annual HIPAA training for all team members.",
            icon: "👨‍🏫"
        },
        {
            title: "No PHI on Website",
            description: "Our contact forms, pixels, and analytics do not collect PHI.",
            icon: "🚫"
        },
        {
            title: "Secure Channels",
            description: "Only client-approved secure channels used for PHI transfer.",
            icon: "✅"
        }
    ]
};

export const defaultPageContent: Record<string, Partial<PageData>> = {
    home: {
        slug: "home",
        seo_title: "Home | MeBilling",
        seo_description: "U.S. Healthcare Revenue Cycle Specialists. MeBilling helps practices recover more with expert-led medical billing solutions.",
        sections: {
            Hero: homeHero,
            PracticeFinderSection: homePracticeFinder,
            HomeContactSection: homeContact,
            ProofSection: homeProof,
            SecurityComplianceSection: homeSecurityCompliance,
            FooterSection: footerData
        }
    },
    "physician-billing": {
        slug: "physician-billing",
        seo_title: "Physician Billing | Me Billing",
        seo_description: "Smart, secure billing solutions built for doctors, clinics, and healthcare teams.",
        sections: {
            FaqSection: faqData
        }
    },
    resources: {
        slug: "resources",
        seo_title: "Resources | Me Billing",
        seo_description: "Insights, Research & Real-World Results. Case studies, industry articles, events, and press releases.",
        sections: {
            ResourcesTabs: resourcesTabsData
        }
    },
    sales: {
        slug: "sales",
        seo_title: "Get a Demo | Me Billing",
        seo_description: "Get a personalized demo of MeBilling. Streamline practice operations, enhance patient care, and boost your bottom line.",
        sections: {
            SalesPillarsAccordion: salesPillarsData
        }
    }
};
