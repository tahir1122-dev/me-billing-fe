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
            image: "https://me-billing-fe.vercel.app/images/service 2.jpg",
            title: "We want to hand off billing entirely",
            description: "One accountable partner from patient registration through final payment, no vendor gaps.",
        },
        {
            id: "aged-ar",
            badge: "Revenue Recovery",
            badgeColor: "#C8920A",
            image: "https://me-billing-fe.vercel.app/images/about us team.jpg",
            title: "We have aged A/R we can't seem to move",
            description: "Old claims recovery, denial management, and formal appeals that convert dormant receivables into deposits.",
        },
        {
            id: "audit-risk",
            badge: "Compliance & Risk",
            badgeColor: "#C8920A",
            image: "https://me-billing-fe.vercel.app/images/service 3.jpg",
            title: "We're worried about an audit or recoupment",
            description: "Proactive coding audits, HCC validation, and CDI reviews — before a payer finds the gap.",
        },
        {
            id: "hand-off-billing-2",
            badge: "Provider Lifecycle",
            badgeColor: "#C8920A",
            image: "https://me-billing-fe.vercel.app/images/bussines women.jpg",
            title: "We're onboarding providers and billing is stalling",
            description: "Enrollment across 90+ payer networks so credentialing gaps never become billing gaps.",
        },
        {
            id: "hand-off-billing-3",
            badge: "Complex Claims · Premium",
            badgeColor: "#C8920A",
            image: "https://me-billing-fe.vercel.app/images/sales.png",
            title: "We have out-of-network or injury claim disputes",
            description: "Workers' comp, NSA IDR, claims negotiation, arbitration, and mediation — all in-house.",
        },
        {
            id: "hand-off-billing-4",
            badge: "Financial Accuracy",
            badgeColor: "#C8920A",
            image: "https://me-billing-fe.vercel.app/images/doc 2.png",
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
        image: "https://me-billing-fe.vercel.app/images/service 4.jpg",
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
            src: "https://me-billing-fe.vercel.app/images/Logo2.png",
            alt: "MeBilling Logo",
            width: 160,
            height: 50
        },
        description: "MeBilling provides end-to-end Revenue Cycle Management solutions for U.S. healthcare providers, including medical billing, coding, denial management, payment posting, A/R follow-up, credentialing, and compliance support. We currently serve clients in Texas, Louisiana, Arkansas, Oklahoma, Alabama, and New Jersey."
    },
    socialLinks: [
        { href: "https://www.linkedin.com/company/mebilling/", label: "LinkedIn", icon: "https://me-billing-fe.vercel.app/images/linkedin logo.svg" },
        { href: "https://www.facebook.com/mebilling/", label: "Facebook", icon: "https://me-billing-fe.vercel.app/images/facebook logo.svg" },
        { href: "https://twitter.com/MeBillingSol", label: "Twitter", icon: "https://me-billing-fe.vercel.app/images/Twitter logo.svg" },
        { href: "#", label: "Instagram", icon: "https://me-billing-fe.vercel.app/images/instagram logo.svg" },
    ],
    pageLinks: [
        { label: "Home", href: "/" },
        { label: "Our services", href: "/services" },
        { label: "Bundled Solutions", href: "/solutions" },
        { label: "Blog", href: "/resources" },
        { label: "About Us", href: "/about" },
    ],
    contactItems: [
        { icon: "https://me-billing-fe.vercel.app/images/call.svg", text: "US: (346) 616-0008", href: "tel:+13466160008" },
        { icon: "https://me-billing-fe.vercel.app/images/call.svg", text: "Global: +92 316 433 3497", href: "tel:+923164333497" },
        { icon: "https://me-billing-fe.vercel.app/images/Icons.svg", text: "info@mebilling.com", href: "mailto:info@mebilling.com" },
        { icon: "https://me-billing-fe.vercel.app/images/loc.svg", text: "100 Glenborough Dr, Suite 400\nHouston, TX 77067, USA" },
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

    about: {
        slug: 'about',
        seo_title: 'About Us | MeBilling',
        seo_description: 'Learn about MeBilling, our elegant and modern experience, and the team behind your cleaner revenue.',
        seo_meta_tags: undefined,
        sections: {
        "Hero": {
                "heading": "About MeBilling Inc.",
                "subHeadingPart1": "The Team Behind",
                "subHeadingHighlight": "Your Cleaner Revenue.",
                "description": "Every claim tells a story of a clinician who deserves fair compensation and a patient who deserves financial clarity. MeBilling exists to make sure both are honoured accurately, compliantly, and without delay.",
                "buttonPrimary": "Talk to Our Team",
                "buttonSecondary": "View Services"
            },
        "Mission": {
                "tagline": "—Our Mission",
                "headingPart1": "Revenue Clarity for",
                "headingHighlight": "Every Provider.",
                "p1": "We ensure healthcare providers and groups receive accurate and timely reimbursement — eliminating the need to manage denials, navigate payer complexity, or absorb the administrative weight of billing in-house. Consistently. Reliably. Without exception.",
                "quote": "MeBilling was founded by a former practice manager who understood firsthand what it cost when billing got in the way of care. That perspective shapes every process, every hire, and every client relationship we operate today.",
                "badge": "Houston HQ · Est · 2015",
                "stats": [
                        {
                                "number": "2015",
                                "label": "Founded in Houston, TX"
                            },
                        {
                                "number": "250+",
                                "label": "Credentialed billing professionals"
                            },
                        {
                                "number": "90+",
                                "label": "Payer networks managed"
                            },
                        {
                                "number": "5,000+",
                                "label": "Providers supported nationwide"
                            }
                ]
            },
        "Story": {
                "tagline": "—Our Story",
                "headingPart1": "Where We Started.",
                "headingHighlight": "Where We Stand.",
                "milestones": [
                        {
                                "year": "2015",
                                "description": "Founded in Houston, TX by a former practice manager frustrated by claim errors and payment delays. Began serving three local clinics with a founding team of certified billers."
                            },
                        {
                                "year": "2019",
                                "description": "Expanded to serve multi-specialty groups and built a dedicated denial management division — specialists focused on payer appeals, reconsiderations, and dispute escalation."
                            },
                        {
                                "year": "2023",
                                "description": "Launched real-time reporting dashboards and cloud-based billing infrastructure — giving every client 24/7 visibility into their revenue cycle performance."
                            },
                        {
                                "year": "Today",
                                "description": "250+ CPMA and CPC-certified professionals serving 5,000+ providers nationwide across 40+ states from our Houston HQ and 2 global delivery centres."
                            }
                ]
            },
        "Values": {
                "tagline": "—Our Values",
                "headingPart1": "What We Stand By",
                "headingHighlight": "Every Day.",
                "items": [
                        {
                                "icon": "https://me-billing-fe.vercel.app/images/aboutIcon1 .png",
                                "title": "Accuracy First",
                                "description": "We get it right the first time — every code, every claim, every encounter."
                            },
                        {
                                "icon": "https://me-billing-fe.vercel.app/images/aboutIcon2.png",
                                "title": "Full Transparency",
                                "description": "You always know where your money is, why a claim was denied, and what's being done about it."
                            },
                        {
                                "icon": "https://me-billing-fe.vercel.app/images/aboutIcon3.png",
                                "title": "People-Centred",
                                "description": "Behind every claim is a patient and a provider. We never lose sight of that human dimension."
                            },
                        {
                                "icon": "https://me-billing-fe.vercel.app/images/aboutIcon4.png",
                                "title": "Accountability",
                                "description": "If something goes wrong, we own it and fix it. Our clients don't chase us for answers."
                            },
                        {
                                "icon": "https://me-billing-fe.vercel.app/images/aboutIcon5.png",
                                "title": "Integrity",
                                "description": "We do the right thing — in coding, compliance, and client relationships — always."
                            },
                        {
                                "icon": "https://me-billing-fe.vercel.app/images/aboutIcon6.png",
                                "title": "Operational Discipline",
                                "description": "Consistency is the foundation of a reliable revenue cycle. Our workflows are built to perform at scale."
                            }
                ]
            },
        "Compliance": {
                "tagline": "—Credentials & Compliance",
                "headingPart1": "Certified.",
                "headingHighlight": "HIPAA Compliant.",
                "description": "MeBilling operates under strict HIPAA guidelines, conducts regular internal audits, and maintains encrypted, secure systems. Compliance isn't a feature — it is built into every process we run.",
                "certifications": [
                        {
                                "badge": "CPMA",
                                "title": "A Certified Professional Medical Auditor",
                                "description": "Documentation audit integrity & compliance protection"
                            },
                        {
                                "badge": "CPC",
                                "title": "Certified Professional Coder",
                                "description": "Accurate CPT/ICD-10 coding by credentialed specialists"
                            },
                        {
                                "badge": "AAPC",
                                "title": "AAPC-Certified Auditors",
                                "description": "Specialty-specific audit reporting with full documentation"
                            }
                ],
                "features": [
                        "CPMA & CPC Certified",
                        "Encrypted Data Transfer",
                        "Annual Internal Audits",
                        "Secure Access Controls"
                ]
            },
            FooterSection: footerData
        }
    },
    specialties: {
        slug: 'specialties',
        seo_title: 'Our Specialties | Me Billing',
        seo_description: 'Specialty Depth That Changes Everything. 24 clinical specialties and facility types.',
        seo_meta_tags: undefined,
        sections: {
        "Hero": {
                "tagline": "— MeBilling Specialties",
                "titlePart1": "Specialty Depth That",
                "titleHighlight": "Changes Everything.",
                "description": "24 clinical specialties and facility types. Each one staffed by a dedicated billing team that works that specialty every single day — not a generalist queue that rotates between them. The difference shows in your clean claim rate.",
                "image": "https://me-billing-fe.vercel.app/images/specialites bg.jpg",
                "buttonPrimary": "Talk to a Specialist →",
                "buttonSecondary": "View Services →"
            },
        "Stats": [
                {
                        "value": "15",
                        "labelPart1": "Professional Billing",
                        "labelPart2": "Specialties"
                    },
                {
                        "value": "5",
                        "labelPart1": "Facility & Institutional",
                        "labelPart2": "Billing Types"
                    },
                {
                        "value": "4",
                        "labelPart1": "Laboratory Revenue",
                        "labelPart2": "Cycle Specialties"
                    },
                {
                        "value": "90+",
                        "labelPart1": "Payer Networks",
                        "labelPart2": "Actively Managed"
                    },
                {
                        "value": "98+",
                        "labelPart1": "First-Pass Clean",
                        "labelPart2": "Claim Rate"
                    }
        ],
        "GroupBilling": {
                "tagline": "— Professional Billing",
                "titlePart1": "Physician & Specialty",
                "titleHighlight": "Group Billing",
                "description": "15 professional billing specialties — each with a dedicated team that codes exclusively within that clinical discipline. No rotations, no generalists, no shared queues.",
                "cards": [
                        {
                                "category": "Professional",
                                "title": "Mental / Behavioral Health",
                                "description": "Behavioral health billing sits at the intersection of clinical sensitivity and payer complexity. Session-based CPT coding, mental health parity compliance, telehealth reimbursement rules, and prior authorization requirements all carry payer-specific nuances — and errors here directly delay care access for vulnerable patients.",
                                "badges": [
                                        "Session-based CPT coding",
                                        "Mental health parity",
                                        "Telehealth billing",
                                        "Collaborative care models"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Oncology",
                                "description": "No specialty punishes coding errors more severely than oncology. J-code drug billing, infusion hierarchy sequencing, drug wastage documentation, and clinical trial billing compliance require a team that codes oncology exclusively. NCCN-aligned medical necessity documentation is built into every claim.",
                                "badges": [
                                        "J-code drug billing",
                                        "Infusion hierarchies",
                                        "Drug wastage",
                                        "Clinical trial compliance"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Pain Management",
                                "description": "Interventional pain billing sits at the intersection of high payer scrutiny and complex procedure hierarchies. Nerve block coding, spinal injection billing, fluoroscopy add-ons, and payer-specific interventional pain policies all require active monitoring — our team tracks policy changes across your entire payer mix.",
                                "badges": [
                                        "Nerve block coding",
                                        "Spinal injections",
                                        "Fluoroscopy add-ons",
                                        "High-risk modifiers"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Nephrology",
                                "description": "Nephrology billing runs on two parallel tracks — the ESRD monthly capitation cycle and acute care E/M services billed alongside it. Getting both right across inpatient and outpatient settings, through the dialysis billing cycle, requires specialization that comes only from working in nephrology every day.",
                                "badges": [
                                        "ESRD capitation",
                                        "Dialysis billing cycles",
                                        "Acute dialysis coding",
                                        "Inpatient E/M"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Cardiology",
                                "description": "Cardiology claims carry high dollar values and equally high payer scrutiny. Echo and stress test coding, cardiac catheterization billing, device programming, and CMS coverage determination updates all require active monitoring. Preauthorization for high-cost cardiac procedures is built into our workflow — not treated as a step someone remembers to check.",
                                "badges": [
                                        "Echo & stress testing",
                                        "Cardiac cath billing",
                                        "Device programming",
                                        "Prior auth management"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Paediatrics",
                                "description": "Paediatric practices operate on a Medicaid-dominant payer mix where EPSDT requirements, well-child coding, and immunization billing rules create a compliance layer most billing teams underestimate. Our team handles preventive care coding, vaccine administration billing, and the Medicaid-specific documentation standards that determine whether a claim pays or waits.",
                                "badges": [
                                        "EPSDT compliance",
                                        "Immunization billing",
                                        "Well-child visits",
                                        "Medicaid payer mix"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Family Practice / Primary Care",
                                "description": "High volume, tight margins, and E/M optimization as the primary revenue lever — primary care billing demands consistent precision at scale. Annual wellness visits, chronic care management, transitional care codes, and multi-provider group A/R management across a mixed payer environment all sit within our primary care team's daily scope.",
                                "badges": [
                                        "E/M optimization",
                                        "Chronic care mgmt",
                                        "Wellness visits",
                                        "Multi-provider A/R"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Dermatology",
                                "description": "Dermatology billing spans medical, surgical, and cosmetic services — each with distinct payer rules and coverage determinations. Lesion excision coding, shave biopsy billing, Mohs surgery sequencing, and the medical-vs-cosmetic determination that governs payability all require a team that knows exactly where payers draw the line.",
                                "badges": [
                                        "Mohs surgery billing",
                                        "Lesion excision coding",
                                        "Biopsy CPT selection",
                                        "Medical vs. cosmetic"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Obstetrics & Gynecology",
                                "description": "OB/GYN billing navigates global obstetric packages, surgical procedure coding, and the payer-specific split-billing rules that apply when care transitions mid-pregnancy. Antepartum visits, delivery billing, postpartum management, and gynecologic surgical coding all carry distinct documentation requirements our team manages with precision.",
                                "badges": [
                                        "Global OB packages",
                                        "Delivery billing",
                                        "Surgical GYN coding",
                                        "Split-billing rules"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Physical / Occupational Therapy",
                                "description": "Therapy billing is shaped by Medicare therapy cap rules, functional limitation reporting, KX modifier requirements, and timed vs. untimed code distinctions that change how every session translates to a billable unit. Our team tracks CMS and commercial payer policy updates so therapy practices are never caught billing under rules that changed last quarter.",
                                "badges": [
                                        "Therapy cap compliance",
                                        "KX modifier rules",
                                        "Timed unit coding",
                                        "Functional limitation"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Urology",
                                "description": "Urology billing encompasses a wide range of E/M, diagnostic, and surgical services — each with payer-specific coverage policies and prior authorization requirements. Cystoscopy coding, urodynamics billing, surgical modifier precision, and in-office procedure billing for urology practices all require the specialty familiarity that prevents claim-level errors before submission.",
                                "badges": [
                                        "Cystoscopy coding",
                                        "Urodynamics",
                                        "Surgical modifiers",
                                        "In-office procedures"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Psychiatry",
                                "description": "Psychiatric billing requires navigating the boundary between E/M and psychotherapy add-on codes, understanding parity compliance obligations, and managing prior authorization workflows for both inpatient and outpatient psychiatric care. Our team handles medication management coding, psychotherapy time-based billing, and the documentation standards that keep psychiatric claims compliant.",
                                "badges": [
                                        "E/M + psychotherapy",
                                        "Parity compliance",
                                        "Medication management",
                                        "Inpatient psych billing"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Ophthalmology",
                                "description": "Ophthalmology billing spans routine vision exams, medical eye care, and surgical procedures — each with distinct coverage rules across medical and vision payers. Cataract surgery billing, intravitreal injection coding, ophthalmic E/M selection, and the medical-vs-routine determination that governs which payer receives which claim all require specialty-specific expertise.",
                                "badges": [
                                        "Cataract surgery",
                                        "Intravitreal injections",
                                        "Ophthalmic E/M",
                                        "Medical vs. routine"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Orthopedic Surgery",
                                "description": "Orthopedic billing carries high claim values and equally high denial risk. Global surgery period rules, implant billing, fracture care coding, joint replacement DRG accuracy, and the 51/59 modifier framework all require a billing team that understands the clinical context behind each procedure — not just the code numbers associated with it.",
                                "badges": [
                                        "Global surgery periods",
                                        "Implant billing",
                                        "Fracture care coding",
                                        "Modifier 51/59 logic"
                                ]
                            },
                        {
                                "category": "Professional",
                                "title": "Infectious Disease",
                                "description": "Infectious disease billing encompasses complex inpatient consultation coding, HIV/AIDS chronic care management, antimicrobial stewardship documentation, and the evolving coverage landscape for newer antiretroviral and antifungal drug regimens. Our team ensures that the clinical complexity of ID care translates into the coding specificity that maximizes reimbursement.",
                                "badges": [
                                        "Inpatient consults",
                                        "HIV/AIDS care mgmt",
                                        "Antimicrobial stewardship",
                                        "Drug regimen billing"
                                ]
                            }
                ]
            },
        "Walkthrough": {
                "tagline": "— Specialty Expertise in Practice",
                "titlePart1": "See how specialty-exclusive billing",
                "titleHighlight": "changes the numbers.",
                "description": "When oncology coders only code oncology, the difference is measurable — in claim accuracy, payer compliance, and revenue captured.",
                "image": "https://me-billing-fe.vercel.app/images/testnomial.png"
            },
        "InstitutionalBilling": {
                "tagline": "— Facility & Institutional Billing",
                "titlePart1": "Part A &",
                "titleHighlight": "Institutional Specialties",
                "description": "Five facility and institutional billing types — UB-04 claims, OPPS compliance, DRG validation, and the regulatory framework that governs every Part A dollar your facility bills.",
                "cards": [
                        {
                                "category": "Institutional",
                                "title": "Emergency Medicine",
                                "description": "Emergency medicine facility billing demands coding accuracy under high-volume pressure. Acuity-based E/M level selection, observation vs. inpatient status determination, trauma activation coding, and split billing management across professional and facility components all require an institutional team that understands both the clinical.",
                                "badges": [
                                        "Acuity-based E/M coding",
                                        "Mental health parity",
                                        "Obs vs. inpatient status",
                                        "Trauma coding",
                                        "Split billing management"
                                ],
                                "icon": "https://me-billing-fe.vercel.app/images/first .png"
                            },
                        {
                                "category": "Institutional",
                                "title": "Micro Hospitals",
                                "description": "Micro hospitals carry the full regulatory burden of a full-size hospital in a smaller operational footprint. Part A billing, UB-04 claim construction, OPPS compliance, Medicare and Medicaid facility billing, and cost reporting support require the same institutional coding depth as any major facility — and that is exactly what our team provides.",
                                "badges": [
                                        "Acuity-based E/M coding",
                                        "Mental health parity",
                                        "Obs vs. inpatient status",
                                        "Trauma coding",
                                        "Split billing management"
                                ],
                                "icon": "https://me-billing-fe.vercel.app/images/second.png"
                            },
                        {
                                "category": "Institutional",
                                "title": "Surgical Centers (ASCs)",
                                "description": "ASC billing is governed by the CMS ASC payment schedule, covered procedure lists, and packaged payment rules that have no equivalent in professional billing. Implant billing, device reporting, and modifier precision in the ASC context require a team that monitors CMS ASC annual updates and applies them on day.",
                                "badges": [
                                        "Acuity-based E/M coding",
                                        "Mental health parity",
                                        "Obs vs. inpatient status",
                                        "Trauma coding",
                                        "Split billing management"
                                ],
                                "icon": "https://me-billing-fe.vercel.app/images/third.png"
                            },
                        {
                                "category": "Institutional",
                                "title": "Nursing Homes",
                                "description": "Emergency medicine facility billing demands coding accuracy under high-volume pressure. Acuity-based E/M level selection, observation vs. inpatient status determination, trauma activation coding, and split billing management across professional and facility components all require an institutional team that understands both the clinical.",
                                "badges": [
                                        "Acuity-based E/M coding",
                                        "Acuity-based E/M coding",
                                        "Acuity-based E/M coding",
                                        "Acuity-based E/M coding",
                                        "Acuity-based E/M coding"
                                ],
                                "icon": "https://me-billing-fe.vercel.app/images/fourth.png"
                            },
                        {
                                "category": "Institutional",
                                "title": "Inpatient Acute Care",
                                "description": "Emergency medicine facility billing demands coding accuracy under high-volume pressure. Acuity-based E/M level selection, observation vs. inpatient status determination, trauma activation coding, and split billing management across professional and facility components all require an institutional team that understands both the clinical.",
                                "badges": [
                                        "Acuity-based E/M coding",
                                        "Acuity-based E/M coding",
                                        "Acuity-based E/M coding",
                                        "Acuity-based E/M coding",
                                        "Acuity-based E/M coding"
                                ],
                                "icon": "https://me-billing-fe.vercel.app/images/fifth.png"
                            }
                ]
            },
        "LabSpecialties": {
                "tagline": "— Laboratory Revenue Cycle",
                "titlePart1": "Lab Billing",
                "titleHighlight": "Specialties",
                "description": "Four laboratory billing specialties — each one navigating a distinct coding framework, payer policy environment, and medical necessity documentation standard.",
                "cards": [
                        {
                                "category": "Medical necessity",
                                "title": "Toxicology",
                                "description": "Toxicology is one of the most scrutinised segments in laboratory medicine. Correctly distinguishing presumptive from definitive testing, documenting medical necessity at the ordering provider level, and constructing claims that survive payer review requires a team that understands the regulatory environment around tox as well as the HCPCS codes that govern it.",
                                "badges": [
                                        "Presumptive vs. definitive",
                                        "Medical necessity",
                                        "HCPCS coding",
                                        "Payer audit-readiness"
                                ]
                            },
                        {
                                "category": "HCPCS coding",
                                "title": "Pathology",
                                "description": "Pathology billing splits across technical and professional components, surgical pathology CPT tier selection, cytopathology, and molecular pathology — each with its own coding hierarchy and global vs. component billing decision points. Getting the TC/26 split right on every claim, across every ordering setting, is a precision task our team handles without shortcuts.",
                                "badges": [
                                        "Presumptive vs. definitive",
                                        "Medical necessity",
                                        "HCPCS coding",
                                        "Payer audit-readiness"
                                ]
                            },
                        {
                                "category": "Payer audit-readiness",
                                "title": "Genetic Labs",
                                "description": "Genomic and genetic testing billing is the fastest-evolving segment in laboratory revenue cycle. CPT and MAAA code accuracy, real-time payer coverage policy tracking for specific panels, prior authorization requirements, and medical necessity appeals for high-cost genomic testing all require active policy intelligence — not a quarterly code lookup.",
                                "badges": [
                                        "Presumptive vs. definitive",
                                        "Medical necessity",
                                        "HCPCS coding",
                                        "Payer audit-readiness"
                                ]
                            },
                        {
                                "category": "Medical Radiology",
                                "title": "Radiology",
                                "description": "Radiology billing spans diagnostic imaging and interventional procedures — each with distinct TC/PC split billing rules, contrast and guidance add-on codes, and payer-specific prior authorization requirements. Interventional radiology coding carries additional complexity with imaging guidance documentation, conscious sedation billing, and the procedure-specific.",
                                "badges": [
                                        "Presumptive vs. definitive",
                                        "Medical necessity",
                                        "HCPCS coding",
                                        "Payer audit-readiness"
                                ]
                            }
                ]
            },
            FooterSection: footerData
        }
    },
    services: {
        slug: 'services',
        seo_title: 'Services | Me Billing',
        seo_description: 'End-to-End Revenue Cycle Management Services.',
        seo_meta_tags: undefined,
        sections: {
        "Hero": {
                "tagline": "Core Service Lines",
                "headingPart1": "Twelve Services.",
                "headingHighlight": "One Accountable Team.",
                "description": "Every MeBilling service is staffed by certified specialists who work within your EMR, understand your payer landscape, and are held accountable to outcomes — not just activity metrics.",
                "buttonPrimary": "Talk to Our Team",
                "buttonSecondary": "View Services"
            },
        "Scope": {
                "tagline": "— What We Do",
                "headingPart1": "The Full Scope of",
                "headingHighlight": "Me Billing Services",
                "description": "From clean claim submission to formal arbitration — every service your revenue cycle depends on, handled in-house by the specialists who do it every day.",
                "cards": [
                        {
                                "style": "image",
                                "image": "https://me-billing-fe.vercel.app/images/service 1.jpg",
                                "badge": "COMPLIANCE",
                                "title": "Audit Services",
                                "description": "A billing audit is a revenue recovery tool, not just a compliance checkbox. Our AAPC-certified auditors examine coding accuracy, documentation quality, charge capture, and denial patterns to surface exactly where revenue is quietly leaving your practice — and how to stop it.",
                                "listItems": [
                                        "E/M level, surgical coding, and modifier accuracy audits",
                                        "DRG validation, HCC/risk adjustment, and CDI gap analysis",
                                        "Compliance gap reporting with a clear remediation roadmap"
                                ]
                            },
                        {
                                "style": "image",
                                "image": "https://me-billing-fe.vercel.app/images/service 2.jpg",
                                "badge": "PROVIDER LIFECYCLE",
                                "title": "Enrollment & Credentialing",
                                "description": "Every day a provider waits on credentialing is a day your practice cannot bill. We manage the complete enrollment lifecycle across 90+ payer networks — from initial application through CAQH attestation, license renewals, and revalidation — with billing and credentialing handled by the same team so gaps are caught immediately.",
                                "listItems": [
                                        "Medicare, Medicaid, PECOS, CAQH, and 90+ commercial payer networks",
                                        "NPI, TIN, EDI (claims, ERA & EFT) enrollment and maintenance",
                                        "Proactive revalidation and license deadline monitoring"
                                ]
                            },
                        {
                                "style": "image",
                                "image": "https://me-billing-fe.vercel.app/images/service 3.jpg",
                                "badge": "CLINICAL ACCURACY",
                                "title": "Medical Coding",
                                "description": "One wrong modifier or aa missed digit can turn a billable service into a denial. Our CPC and CPMA-certified coders are organized by specialty — oncology coders code oncology — applying ICD-10, CPT, and HCPCS codes with the depth and payer-specific precision that generalist teams can't match.",
                                "listItems": [
                                        "ICD-10, CPT, and HCPCS coding across all specialties and facility types",
                                        "Modifier precision: 25, 59, 50, TC/26, and payer-specific rules",
                                        "HCC and risk adjustment coding for Medicare Advantage populations"
                                ]
                            },
                        {
                                "style": "image",
                                "image": "https://me-billing-fe.vercel.app/images/service 4.jpg",
                                "badge": "END-TO-END RCM",
                                "title": "Revenue Cycle Management",
                                "description": "From patient registration to final payment posted — MeBilling manages the complete billing lifecycle with no subcontractors and no accountability gaps. Our 98%+ clean claim rate means fewer denials, faster cash, and a revenue cycle that performs at the level your practice earns.",
                                "listItems": [
                                        "Registration, eligibility verification, and prior authorization management",
                                        "Claims scrubbing and submission within 48 hours of date of service",
                                        "Denial management, A/R follow-up, and real-time performance dashboards"
                                ]
                            },
                        {
                                "style": "image",
                                "image": "https://me-billing-fe.vercel.app/images/doc 2.png",
                                "badge": "NSA / IDR",
                                "title": "Federal IDR (No Surprises Act)",
                                "description": "The No Surprises Act created a formal legal pathway — Independent Dispute Resolution — for providers to challenge payer underpayments on out-of-network claims. Most practices leave this revenue uncollected simply because they lack the bandwidth to pursue it. We manage the entire IDR process in-house, from eligibility screening to payment enforcement.",
                                "listItems": [
                                        "NSA eligibility review and QPA benchmarking analysis",
                                        "Federal IDR portal submission and timeline management",
                                        "Post-determination payment collection and enforcement"
                                ]
                            },
                        {
                                "style": "image",
                                "image": "https://me-billing-fe.vercel.app/images/about Bg .png",
                                "badge": "RECOVERY",
                                "title": "Old Claims Recovery",
                                "description": "Claims at 90, 120, or 180 days are not automatically uncollectable — but they need a different approach than standard A/R follow-up. Our recovery team categorises outstanding claims by recoverability, rebuilds the documentation trail needed for late appeals, and collects revenue that most practices have already written off.",
                                "listItems": [
                                        "Aged A/R stratification and recoverability assessment by payer",
                                        "Timely filing analysis and jurisdiction-specific reconsideration arguments",
                                        "Documentation reconstruction and recovery outcome reporting"
                                ]
                            },
                        {
                                "style": "image",
                                "image": "https://me-billing-fe.vercel.app/images/carrersbg.png",
                                "badge": "FINANCIAL OPS",
                                "title": "Payment Posting & Reconciliation",
                                "description": "Payment posting is the financial record of your practice — not clerical admin. Every ERA processed and every remittance reconciled establishes whether payers are actually paying what they owe. We post daily, validate against contracted rates, and pursue every variance — your books reflect reality, not assumption.",
                                "listItems": [
                                        "ERA auto-posting and manual remittance processing completed daily",
                                        "Contractual rate reconciliation with underpayment variance follow-up",
                                        "Patient balance calculation and real-time A/R dashboards"
                                ]
                            },
                        {
                                "style": "image",
                                "image": "https://me-billing-fe.vercel.app/images/specialites bg.jpg",
                                "badge": "LIABILITY & INJURY",
                                "title": "Injury Claims Management",
                                "description": "Injury billing — workers' compensation, motor vehicle accidents, personal injury — operates under a completely different framework from standard insurance billing. Lien structures, letter of protection arrangements, and state-specific workers' comp regulations require dedicated expertise that most billing teams simply don't carry.",
                                "listItems": [
                                        "Workers' comp billing under state-specific fee schedules and regulations",
                                        "MVC billing across PIP and liability, with adjuster follow-up managed in-house",
                                        "Personal injury lien filing and letter of protection management"
                                ]
                            },
                        {
                                "style": "image",
                                "image": "https://me-billing-fe.vercel.app/images/bussines women.jpg",
                                "badge": "PAYER RELATIONS",
                                "title": "Claims Negotiation",
                                "description": "Many payer disputes can be resolved through skilled direct negotiation — before formal appeals or IDR become necessary. Our negotiation team engages payers directly on underpayments, global claim disputes, and systematic contract rate deviations, building fact-based cases grounded in your contractual terms and market benchmarks.",
                                "listItems": [
                                        "Single-claim and pattern-level underpayment negotiation and recovery",
                                        "Contractual rate enforcement with documented dispute history",
                                        "Escalation pathway management: negotiation → appeals → IDR → arbitration"
                                ]
                            },
                        {
                                "style": "image",
                                "image": "https://me-billing-fe.vercel.app/images/resources  bg.jpg",
                                "badge": "DENIAL RESOLUTION",
                                "title": "Appeals & Reconsideration",
                                "description": "Every denial has a case to be made — if you know how to make it. Our appeals process is built claim by claim, not template by template. We categorise each denial by root cause, identify the strongest reconsideration pathway, and construct appeals backed by clinical documentation and coding evidence tailored to the specific rejection reason.",
                                "listItems": [
                                        "Root cause categorisation: coding, clinical, eligibility, or administrative",
                                        "Per-claim appeal letters with supporting documentation — never templated",
                                        "Peer-to-peer review coordination and denial pattern tracking"
                                ]
                            },
                        {
                                "style": "image",
                                "image": "https://me-billing-fe.vercel.app/images/Bundled Solutions bg .png",
                                "badge": "FORMAL DISPUTE",
                                "title": "Arbitration & Mediation",
                                "description": "When negotiation and formal appeals are exhausted, arbitration and mediation are the next escalation — and they require a different kind of preparation. We manage both in-house, assembling the evidentiary record and procedural submissions needed to pursue disputed claims through formal channels without the cost of outside counsel.",
                                "listItems": [
                                        "Evidence package development and case preparation for arbitration",
                                        "Mediation coordination with payer representatives and third parties",
                                        "Resolution tracking and payment enforcement after decisions are rendered"
                                ]
                            },
                        {
                                "style": "image",
                                "image": "https://me-billing-fe.vercel.app/images/herobg.png",
                                "badge": "COMPLIANCE",
                                "title": "State Reporting",
                                "description": "State-level reporting requirements vary by jurisdiction and payer type — and missing them can affect both reimbursement and licensure. We monitor reporting obligations specific to your operating states and manage all required submissions on your behalf, so regulatory deadlines never fall through the cracks of your billing operation.",
                                "listItems": [
                                        "State-specific payer reporting obligations tracked and filed by jurisdiction",
                                        "Medicaid encounter data submissions and agency coordination",
                                        "Workers' comp state form filing and audit-ready compliance documentation"
                                ]
                            }
                ]
            },
            FooterSection: footerData
        }
    },
    solutions: {
        slug: 'solutions',
        seo_title: 'Solutions | Me Billing',
        seo_description: 'Intelligent Billing Solutions for Healthcare Providers.',
        seo_meta_tags: undefined,
        sections: {
        "Hero": {
                "tagline": "— Bundled Solutions",
                "titlePart1": "Six Solutions Built Around",
                "titleHighlight": "the Outcome You Need.",
                "description": "Not every practice needs every service. Our solutions bundle our capabilities around a specific result — so you engage exactly what your revenue cycle requires, and nothing it doesn't.",
                "image": "https://me-billing-fe.vercel.app/images/Bundled Solutions bg .png"
            },
        "Walkthrough": {
                "tagline": "— Which Solution Fits?",
                "titlePart1": "Not every practice",
                "titleHighlight": "needs every service.",
                "description": "Watch a 2-minute walkthrough of our six solution bundles and discover which one matches your current billing challenges.",
                "buttonText": "Talk to a Specialist →",
                "image": "https://me-billing-fe.vercel.app/images/sales.png"
            },
        "PackagesSection": {
                "tagline": "— Solution Packages",
                "titlePart1": "Match Your Challenge",
                "titleHighlight": "to the Right Solution.",
                "description": "Each solution is a curated combination of MeBilling services designed to deliver a specific outcome — from full outsourcing to targeted revenue recovery to dispute resolution.",
                "packages": [
                        {
                                "tag": "FULL OUTSOURCING",
                                "number": "01",
                                "title": "End-to-End Revenue Cycle Management",
                                "subtitle": "One partner. Every component. Full accountability from registration to final deposit.",
                                "description": "For practices ready to hand off the entire billing function and hold one team accountable for all of it. No vendor coordination, no handoff gaps, no finger-pointing when something goes wrong. MeBilling manages your complete revenue cycle — from the first patient touchpoint to the last dollar reconciled — with in-house specialists at every stage.",
                                "includedTitle": "WHAT'S INCLUDED",
                                "includedItems": [
                                        "Patient access: registration, eligibility verification, and prior authorization",
                                        "Specialty-organized medical coding: ICD-10, CPT, HCPCS",
                                        "Claims scrubbing and submission within 48 hours",
                                        "AR follow-up, denial management, and collections",
                                        "Payment posting, reconciliation, and real-time reporting"
                                ],
                                "bestForLabel": "Best for:",
                                "bestForText": "Groups eliminating in-house billing overhead entirely"
                            },
                        {
                                "tag": "RECOVER LOST REVENUE",
                                "number": "02",
                                "title": "Revenue Recovery & AR Optimization",
                                "subtitle": "For practices carrying aged A/R, chronic denials, or a backlog they've stopped believing they can collect.",
                                "description": "Revenue doesn't disappear in a single event — it erodes claim by claim over months of inadequate follow-up. This solution deploys our recovery specialists directly against your outstanding receivables: categorising what's collectible, rebuilding documentation where needed, and converting dormant A/R into actual deposits.",
                                "includedTitle": "WHAT'S INCLUDED",
                                "includedItems": [
                                        "Old claims recovery: late appeals and documentation reconstruction",
                                        "Structured AR follow-up by payer, age, and recoverability",
                                        "Denial management with per-claim reconsideration arguments",
                                        "Formal appeals and reconsideration — built individually, not templated"
                                ],
                                "bestForLabel": "Best for:",
                                "bestForText": "Practices with aging A/R, high denial rates, or post-transition backlogs"
                            },
                        {
                                "tag": "AVOID PENALTIES - STAY COMPLIANT",
                                "number": "03",
                                "title": "Compliance & Risk Management",
                                "subtitle": "For practices that need to know — before an auditor does — whether their coding is clean.",
                                "description": "Payer scrutiny is intensifying. RAC reviews, OIG investigations, and risk adjustment audits all target the same documentation gaps most practices don't discover until recoupment is underway. This solution puts our AAPC-certified audit team inside your billing operation before problems become penalties — and keeps you compliant across state and federal reporting obligations.",
                                "includedTitle": "WHAT'S INCLUDED",
                                "includedItems": [
                                        "Proactive billing and coding audit services",
                                        "Medical coding validation with specialty-specific benchmarking",
                                        "HCC/risk adjustment review for Medicare Advantage",
                                        "State reporting compliance management",
                                        "Federal IDR (NSA) compliance monitoring"
                                ],
                                "bestForLabel": "Best for:",
                                "bestForText": "Medicare Advantage-heavy practices, high-audit specialties, post-OIG inquiry"
                            },
                        {
                                "tag": "GET PROVIDERS ACTIVATED & PAID FASTER",
                                "number": "04",
                                "title": "Provider Lifecycle Management",
                                "subtitle": "For growing groups where credentialing delays are creating billing gaps and unbillable claims.",
                                "description": "Every credentialing gap is a billing gap. When a provider isn't enrolled, every service they deliver is a claim you can't submit. This solution manages the complete provider lifecycle — from initial payer application through ongoing contract alignment and revalidation monitoring — so providers reach active billing status faster and stay there without interruption.",
                                "includedTitle": "WHAT'S INCLUDED",
                                "includedItems": [
                                        "Enrollment across 90+ payer networks: Medicare, Medicaid, commercial",
                                        "CAQH, PECOS, NPI, TIN, and EDI enrollment maintenance",
                                        "Hospital privileging and facility credentialing support",
                                        "Payer contract alignment and rate management",
                                        "Proactive revalidation and license expiry monitoring"
                                ],
                                "bestForLabel": "Best for:",
                                "bestForText": "Expanding groups, new market entry, large credentialed provider rosters"
                            },
                        {
                                "badge": "Premium",
                                "tag": "HIGH-MARGIN · SPECIALIST EXPERTISE",
                                "number": "05",
                                "title": "Complex Claims & Dispute Resolution",
                                "subtitle": "For practices with out-of-network disputes, injury billing, or payer conflicts that standard follow-up can't resolve.",
                                "description": "Some claims can't be resolved with a follow-up call. Workers' comp lien billing, NSA IDR proceedings, formal arbitration, and mediation all require procedural expertise that most billing operations aren't structured to provide. We manage the entire complex claims lifecycle in-house — from first assessment through final collection — without routing a single case outside our walls.",
                                "includedTitle": "WHAT'S INCLUDED",
                                "includedItems": [
                                        "Injury claims: workers' comp, MVC, and personal injury lien billing",
                                        "Claims negotiation: direct payer engagement on underpayments",
                                        "Federal IDR from eligibility through QPA analysis and payment collection",
                                        "Formal arbitration case preparation and submission management",
                                        "Mediation coordination and resolution enforcement"
                                ],
                                "bestForLabel": "Best for:",
                                "bestForText": "Out-of-network practices, injury care providers, systematic payer disputes"
                            },
                        {
                                "tag": "ACCURACY · FINANCIAL CONTROL",
                                "number": "06",
                                "title": "Financial Operations & Payment Accuracy",
                                "subtitle": "For practices where money is arriving — but no one is confirming it's the right amount.",
                                "description": "Most practices lose 3–5% of their contracted revenue not through denials, but through underpayments that are posted, accepted, and never questioned. This solution places a dedicated reconciliation layer between your payer payments and your financial records — so what gets posted is what you're actually owed, and every variance gets pursued, not absorbed.",
                                "includedTitle": "WHAT'S INCLUDED",
                                "includedItems": [
                                        "ERA auto-posting and manual remittance processing — daily, no backlogs",
                                        "Line-by-line reconciliation against contracted fee schedules",
                                        "Underpayment identification and structured payer follow-up",
                                        "Real-time financial reporting: A/R aging, collection rate, payer accuracy"
                                ],
                                "bestForLabel": "Best for:",
                                "bestForText": "High-volume practices, mixed payer environments, accuracy-focused operations"
                            }
                ]
            },
            FooterSection: footerData
        }
    },
    careers: {
        slug: 'careers',
        seo_title: 'Careers | Me Billing',
        seo_description: 'Join a Team That Treats Revenue Like It\'s Theirs. MeBilling is hiring credentialed professionals.',
        seo_meta_tags: undefined,
        sections: {
            "Hero": {
                "tagline": "— Careers at MeBilling",
                "headingPart1": "Join a Team That",
                "headingHighlight": "Treats Revenue Like It's Theirs.",
                "description": "MeBilling is a growing, U.S.-based healthcare RCM firm where certified billing specialists, coders, and account managers do meaningful, high-impact work – and where their expertise is genuinely valued.",
                "primaryButton": "View Open Roles",
                "secondaryButton": "Send Us Your Resume"
            },
            "WhyMeBilling": {
                "tagline": "— Professional Billing",
                "headingPart1": "Physician & Specialty",
                "headingHighlight": "Group Billing",
                "description": "15 professional billing specialties — each with a dedicated team that codes exclusively within that clinical discipline. No rotations, no generalists, no shared queues.",
                "cards": [
                    {
                        "title": "Certified Expertise Valued",
                        "description": "We invest in CPMA, CPC, and AAPC certifications for our team – and we structure roles to use that expertise, not bury it in administrative overhead"
                    },
                    {
                        "title": "Specialty Depth",
                        "description": "You will work within a specialty – oncology, behavioural health, cardiology – and develop deep domain knowledge that makes you genuinely better at your discipline."
                    },
                    {
                        "title": "Real Accountability, Real Autonomy",
                        "description": "Our team members own their accounts. You are the point of contact, the expert, and the person who makes the difference for a real practice every day."
                    },
                    {
                        "title": "Growth Without a Ceiling",
                        "description": "From credentialing specialist to director of operations – we promote from within and build career paths around the skills our team members develop."
                    },
                    {
                        "title": "Collaborative Culture",
                        "description": "Small enough to know every colleague. Structured enough to have clear roles. Growing fast enough that high performers get noticed quickly."
                    },
                    {
                        "title": "U.S. Operations + Global Delivery",
                        "description": "Houston HQ with two global delivery centers. Opportunities for professionals at multiple levels across our operational footprint."
                    }
                ]
            },
            "Openings": {
                "tagline": "— Open Positions",
                "headingPart1": "Current",
                "headingHighlight": "Openings",
                "jobs": [
                    {
                        "department": "Billing & Coding",
                        "title": "Certified Professional Coder (CPC)",
                        "tags": ["Full-Time", "Houston, TX / Remote", "Multi-Specialty"]
                    },
                    {
                        "department": "Billing & Coding",
                        "title": "Medical Coding Auditor (CPMA)",
                        "tags": ["Full-Time", "Houston, TX", "Compliance"]
                    },
                    {
                        "department": "Revenue Operations",
                        "title": "A/R Follow-Up Specialist",
                        "tags": ["Full-Time", "Remote Available", "Denial Management"]
                    },
                    {
                        "department": "Account Management",
                        "title": "Client Account Manager - RCM",
                        "tags": ["Full-Time", "Houston, TX", "Client Facing"]
                    },
                    {
                        "department": "Credentialing",
                        "title": "Provider Credentialing Specialist",
                        "tags": ["Full-Time", "Houston, TX / Remote", "Multi-Payer"]
                    },
                    {
                        "department": "Dispute Resolution",
                        "title": "IDR & Appeals Specialist",
                        "tags": ["Full-Time", "Houston, TX", "NSA / Payer Disputes"]
                    },
                    {
                        "department": "Operations",
                        "title": "Payment Posting & Reconciliation Associate",
                        "tags": ["Full-Time", "Remote Available", "ERA Processing"]
                    }
                ]
            },
            FooterSection: footerData
        }
    },

    home: {
        slug: "home",
        seo_title: "Home | MeBilling",
        seo_description: "U.S. Healthcare Revenue Cycle Specialists. MeBilling helps practices recover more with expert-led medical billing solutions.",
        sections: {
                        Hero: homeHero,
            InsightSection1: {
          "tagline": "— The Insight",
          "heading1": "Watch how MeBilling turns",
          "headingHighlight": "billing complexity",
          "heading2": "into clean cash flow.",
          "body": "A 2-minute overview of how our specialty-organized teams, in-house dispute pathway, and real-time dashboards work together to protect every dollar your practice earns.",
          "cta": {
                    "label": "Schedule a Free Assessment",
                    "href": "/contact"
          },
          "image": "https://me-billing-fe.vercel.app/images/service 1.jpg"
},
            InsightSection2: {
          "tagline": "— The Insight",
          "badgeLabel": "The Revenue Gap",
          "heading1": "Many practices lose revenue through",
          "heading2": " ",
          "headingHighlight": "denials, underpayments,",
          "heading3": " missed follow-up, and documentation gaps.",
          "body": "MeBilling helps identify and recover that revenue. Not from poor clinical outcomes, but from billing complexity that compounds silently. Payer policy changes, denial cycles, underpayment patterns.",
          "cta": {
                    "label": "See How We Fix It",
                    "href": "/solutions"
          },
          "image": "https://me-billing-fe.vercel.app/images/bussines women.jpg"
},
            RevenueLeakSection: {
          "tagline": "— Revenue Pressure Points",
          "heading": "Four places ",
          "headingHighlight": "revenue",
          "heading2": " usually slips away.",
          "subtext": "These are the pressure points we prioritize first because they create the fastest path from insight to cash recovery.",
          "items": [
                    {
                              "stat": "65%",
                              "title": "Unappealed Denials",
                              "description": "Up to 65% of denied claims are recoverable if worked with the right documentation.",
                              "icon": "🔄"
                    },
                    {
                              "stat": "+5%",
                              "title": "Unreconciled Underpayments",
                              "description": "Payments posted below contracted rates and never questioned.",
                              "icon": "💰"
                    },
                    {
                              "stat": "90",
                              "title": "Aging A/R with No Follow-Up",
                              "description": "Claims past 90 days require a different recovery approach.",
                              "icon": "📅"
                    },
                    {
                              "stat": "75%",
                              "title": "Accumulated Compliance Risk",
                              "description": "Documentation gaps can silently accumulate until payers find them first.",
                              "icon": "⚠️"
                    }
          ]
},
            ApproachSection: {
          "tagline": "— The Approach",
          "heading": "Built differently. Accountable to ",
          "headingHighlight": "outcomes,",
          "heading2": " not activity.",
          "body": "MeBilling is not a billing clearinghouse. It is a managed revenue cycle practice organized by clinical specialty, end-to-end dispute resolution pathway, and held accountable to the metrics your practice actually tracks.",
          "pillars": [
                    {
                              "number": "01",
                              "title": "Specialty-organized teams. Not shared queues.",
                              "body": "Every account is staffed by specialists who work within that clinical discipline every day — oncology coders code oncology, interventional pain coders code pain management. No rotation, no generalists, no knowledge spread thin.",
                              "note": "Applied across 15 professional billing specialties, 5 institutional types, and 4 laboratory billing tracks — 24 disciplines total."
                    },
                    {
                              "number": "02",
                              "title": "In-house only. No subcontracting, ever.",
                              "body": "Every claim, every appeal, every IDR proceeding, every arbitration filing managed by our own CPMA and CPC-certified staff. No third-party handoffs, no accountability gaps. One team, one number to call.",
                              "note": "250+ certified billing specialists. 90+ payer networks. Houston HQ with two global delivery centers — all in-house."
                    },
                    {
                              "number": "03",
                              "title": "The full dispute pathway, internally.",
                              "body": "Most billing companies stop at the appeal. MeBilling manages every stage: direct negotiation, formal appeals, Federal IDR (NSA), arbitration, and mediation — all in-house, without routing a single dispute to outside counsel.",
                              "note": "12 service lines covering the complete billing lifecycle — from pre-registration through formal dispute resolution."
                    }
          ],
          "ctas": [
                    {
                              "label": "View all services →",
                              "href": "/services"
                    },
                    {
                              "label": "View all solutions →",
                              "href": "/solutions"
                    },
                    {
                              "label": "View all resources →",
                              "href": "/resources"
                    }
          ]
},
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
            Hero: {
                tagline: "RESOURCES",
                headingPart1: "Insights, Research &",
                headingHighlight: "Real-World Results.",
                description: "Case studies, industry articles, events, and press releases – everything MeBilling publishes to help healthcare providers understand and improve their revenue cycle."
            },
            ResourcesTabs: resourcesTabsData,
            FooterSection: footerData
        }
    },
    sales: {
        slug: "sales",
        seo_title: "Get a Demo | Me Billing",
        seo_description: "Get a personalized demo of MeBilling. Streamline practice operations, enhance patient care, and boost your bottom line.",
        sections: {
            SalesPillarsAccordion: salesPillarsData,
            FooterSection: footerData
        }
    },



    contact: {
        slug: "contact",
        seo_title: "Contact Us | Me Billing",
        seo_description: "Get in touch with our team.",
        sections: {
            FooterSection: footerData
        }
    },
    "privacy-policy": {
        slug: "privacy-policy",
        seo_title: "Privacy Policy | Me Billing",
        seo_description: "MeBilling Privacy Policy.",
        sections: {
            FooterSection: footerData
        }
    }
};
