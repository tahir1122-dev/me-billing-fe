"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (href: string) => pathname === href;

    const closeMenu = () => setIsOpen(false);

    const linkClass = (href: string, isPrimary = false) => {
        const base = isPrimary ? "font-semibold" : "font-medium";

        return isActive(href)
            ? `text-brand px-4 py-2 rounded-md  text-[17px]`
            : `text-slate-800 ${base} text-[17px] hover:text-brand transition-all px-2 py-2`;
    };

    return (
        <header className="sticky top-0 z-50 bg-[#E6F6FB] border-b border-slate-200 font-outfit">
            <div className="max-w-[1800px] mx-auto px-10 lg:px-16">
                <div className="h-[78px] flex items-center justify-between">
                    <div className="flex-shrink-0 ml-6">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                alt="MeBilling Logo"
                                width={190}
                                height={55}
                                className="h-12 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-8 mr-6 ml-auto">
                        <nav className="flex items-center gap-8">
                            <Link href="/" className={linkClass("/", true)}>Home</Link>
                            <Link href="/services" className={linkClass("/services")}>Services</Link>
                            <Link href="/PhysicianBilling" className={linkClass("/PhysicianBilling")}>Billing Solutions</Link>
                            <Link href="/specialties" className={linkClass("/specialties")}>Specialties</Link>
                            <Link href="/about" className={linkClass("/about")}>About Us</Link>
                        </nav>

                        <Link
                            href="/sales"
                            className="bg-brand hover:bg-[#009bc2] text-white px-6 py-3 rounded-md font-semibold text-[16px] transition-all"
                        >
                            Talk to sales
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden ml-auto text-slate-800"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden bg-[#E6F6FB] border-t border-slate-200 px-6 py-5">
                    <nav className="flex flex-col gap-4">
                        <Link href="/" className={linkClass("/", true)} onClick={closeMenu}>Home</Link>

                        <Link href="/services" className={linkClass("/services")} onClick={closeMenu}>
                            Services
                        </Link>

                        <Link
                            href="/PhysicianBilling"
                            className={linkClass("/PhysicianBilling")}
                            onClick={closeMenu}
                        >
                            Billing Solutions
                        </Link>

                        <Link
                            href="/specialties"
                            className={linkClass("/specialties")}
                            onClick={closeMenu}
                        >
                            Specialties
                        </Link>

                        <Link href="/about" className={linkClass("/about")} onClick={closeMenu}>
                            About Us
                        </Link>

                        <Link
                            href="/sales"
                            onClick={closeMenu}
                            className="bg-brand text-white px-5 py-3 rounded-md font-semibold text-[16px] w-fit"
                        >
                            Talk to sales
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}