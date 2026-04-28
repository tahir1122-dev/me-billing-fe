"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const isActive = (href: string) => pathname === href;
    const linkClass = (href: string, isPrimary = false) => {
        const base = isPrimary
            ? "font-semibold"
            : "font-medium";
        return isActive(href)
            ? `text-brand ${base} text-lg`
            : `text-slate-800 ${base} text-lg hover:text-brand transition-colors`;
    };

    return (
        <header className="sticky top-0 z-50 bg-[#E6F6FB] shadow-sm font-outfit">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-[90px] items-center justify-between">
                    <div className="flex shrink-0 items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo.png"
                                alt="MeBilling Logo"
                                width={180}
                                height={50}
                                className="w-auto h-10 lg:h-12 object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 lg:gap-10">
                        <Link href="/" className={linkClass("/", true)}>
                            Home
                        </Link>

                        <Link
                            href="/services"
                            className={`group relative flex items-center gap-1 cursor-pointer ${linkClass("/services")}`}
                        >
                            Services

                        </Link>

                        <Link
                            href="/PhysicianBilling"
                            className={`group relative flex items-center gap-1 cursor-pointer ${linkClass("/PhysicianBilling")}`}
                        >
                            Billing Solutions

                        </Link>

                        <Link href="/specialties" className={linkClass("/specialties")}>
                            Specialties
                        </Link>

                        <Link href="/blogs" className={linkClass("/blogs")}>
                            Blogs
                        </Link>

                        <Link href="/about" className={linkClass("/about")}>
                            About Us
                        </Link>
                    </nav>

                    <div className="flex items-center">
                        <Link
                            href="/sales"
                            className="group hidden md:flex items-center justify-center gap-3 bg-brand hover:bg-[#009bc2] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md shadow-brand/20 hover:shadow-brand/40"
                        >
                            Talk to sales
                            <div className="bg-white rounded-full p-1.5 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </div>
                        </Link>

                        <button
                            type="button"
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="md:hidden ml-4 text-slate-800 hover:text-brand"
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen ? (
                <div className="md:hidden border-t border-slate-200 bg-[#E6F6FB]">
                    <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6">
                        <nav className="flex flex-col gap-3">
                            <Link href="/" className={linkClass("/", true)} onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                            <Link href="/services" className={linkClass("/services")} onClick={() => setIsOpen(false)}>
                                Services
                            </Link>
                            <Link href="/PhysicianBilling" className={linkClass("/PhysicianBilling")} onClick={() => setIsOpen(false)}>
                                Billing Solutions
                            </Link>
                            <Link href="/specialties" className={linkClass("/specialties")} onClick={() => setIsOpen(false)}>
                                Specialties
                            </Link>
                            <Link href="/blogs" className={linkClass("/blogs")} onClick={() => setIsOpen(false)}>
                                Blogs
                            </Link>
                            <Link href="/about" className={linkClass("/about")} onClick={() => setIsOpen(false)}>
                                About Us
                            </Link>
                            <Link
                                href="/sales"
                                className="inline-flex w-fit items-center gap-3 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Talk to sales
                            </Link>
                        </nav>
                    </div>
                </div>
            ) : null}
        </header>
    );
}
