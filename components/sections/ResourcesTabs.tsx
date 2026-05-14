"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = ["Case Studies", "Blog", "Events", "Press Releases"];

const caseStudies = [
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
];

const pressReleases = [
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
];

const events = [
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
];

const blogs = [
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
];

export default function ResourcesTabs() {
    const [activeTab, setActiveTab] = useState("Case Studies");

    return (
        <div className="font-outfit">
            {/* Tabs Header exactly replicating reference screenshot layout */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 border-b border-slate-200 pb-0 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-3 text-base sm:text-[17px] font-semibold transition-all relative cursor-pointer ${
                            activeTab === tab 
                                ? "text-[#1A6B3A] border-b-2 border-[#1A6B3A]" 
                                : "text-slate-500 hover:text-[#1A6B3A] border-b-2 border-transparent"
                        } focus:outline-none`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Areas */}
            {activeTab === "Case Studies" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <div 
                            key={index} 
                            style={{ borderColor: "rgba(8, 38, 16, 0.15)" }}
                            className="border rounded-2xl p-8 hover:shadow-lg hover:border-[#082610]/30 transition-all bg-[#FCFBF5] flex flex-col h-full"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-[#A87500] text-xs font-bold uppercase tracking-wider font-outfit">
                                    {study.category === "CASE STUDY" ? "Professional" : study.category}
                                </span>
                                {study.specialty && (
                                    <span className="text-slate-400 text-xs font-medium">
                                        • {study.specialty}
                                    </span>
                                )}
                            </div>
                            
                            <h3 className="text-2xl lg:text-[26px] font-medium text-[#162018] mb-4 leading-tight font-cormorant">
                                {study.title}
                            </h3>
                            
                            <p className="text-slate-600 text-[14.5px] leading-relaxed mb-8 flex-1 font-outfit">
                                {study.description}
                            </p>
                            
                            <Link href="#" className="inline-flex items-center gap-2 text-[#1A6B3A] font-semibold text-sm hover:underline mt-auto font-outfit">
                                Read Case Study 
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "Press Releases" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pressReleases.map((release, index) => (
                        <div 
                            key={index} 
                            style={{ borderColor: "rgba(8, 38, 16, 0.15)" }}
                            className="border rounded-2xl p-8 hover:shadow-lg hover:border-[#082610]/30 transition-all bg-[#FCFBF5] flex flex-col h-full"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-[#A87500] text-xs font-bold uppercase tracking-wider font-outfit">
                                    PRESS RELEASE
                                </span>
                                <span className="text-slate-400 text-xs font-medium">
                                    • {release.date}
                                </span>
                            </div>
                            
                            <h3 className="text-2xl lg:text-[26px] font-medium text-[#162018] mb-4 leading-tight font-cormorant">
                                {release.title}
                            </h3>
                            
                            <p className="text-slate-600 text-[14.5px] leading-relaxed mb-8 flex-1 font-outfit">
                                {release.description}
                            </p>
                            
                            <Link href="#" className="inline-flex items-center gap-2 text-[#1A6B3A] font-semibold text-sm hover:underline mt-auto font-outfit">
                                Read Release
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "Events" && (
                <div className="flex flex-col gap-6">
                    {events.map((event, index) => (
                        <div 
                            key={index} 
                            style={{ borderColor: "rgba(8, 38, 16, 0.15)" }}
                            className="border rounded-2xl p-6 md:p-8 hover:shadow-md hover:border-[#082610]/30 transition-all bg-[#FCFBF5] flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center"
                        >
                            <div className="flex-shrink-0 w-20 h-20 bg-[#082610] rounded-xl flex flex-col items-center justify-center text-white shadow-sm">
                                <span className="text-[11px] font-bold tracking-widest text-[#A87500] uppercase font-outfit">{event.month}</span>
                                <span className="text-2xl font-cormorant font-medium">{event.day}</span>
                            </div>
                            
                            <div className="flex-1">
                                <h3 className="text-2xl font-medium text-[#162018] mb-2 font-cormorant">
                                    {event.title}
                                </h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed mb-3.5 font-outfit">
                                    {event.description}
                                </p>
                                <div className="flex items-center gap-2 text-[#1A6B3A] text-xs font-semibold font-outfit">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    {event.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "Blog" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div 
                            key={index} 
                            style={{ borderColor: "rgba(8, 38, 16, 0.15)" }}
                            className="border rounded-2xl p-8 hover:shadow-lg hover:border-[#082610]/30 transition-all bg-[#FCFBF5] flex flex-col h-full"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-[#A87500] text-xs font-bold uppercase tracking-wider font-outfit">
                                    {blog.tag}
                                </span>
                                <span className="text-slate-400 text-xs font-medium">
                                    • {blog.date}
                                </span>
                            </div>
                            
                            <h3 className="text-2xl lg:text-[26px] font-medium text-[#162018] mb-4 leading-tight font-cormorant">
                                {blog.title}
                            </h3>
                            
                            <p className="text-slate-600 text-[14.5px] leading-relaxed mb-8 flex-1 font-outfit">
                                {blog.description}
                            </p>
                            
                            <Link href="#" className="inline-flex items-center gap-2 text-[#1A6B3A] font-semibold text-sm hover:underline mt-auto font-outfit">
                                Read Article
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
