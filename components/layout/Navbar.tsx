"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// ─── JSON Data ────────────────────────────────────────────────────────────────
const navData = {
    logo: {
        src: "/images/Logo2.png",
        alt: "MeBilling Logo",
        width: 180,
        height: 50
    },
    links: [
        { label: "Home", href: "/", hasDropdown: false },
        { label: "About Us", href: "/about", hasDropdown: false },
        {
            label: "Services",
            href: "/services",
            hasDropdown: true,
            dropdownItems: [
                { label: "All Services", href: "/services" },
                { label: "Solutions", href: "/solutions" },
                { label: "Specialties", href: "/specialties" }
            ]
        },
        { label: "Resources", href: "/resources", hasDropdown: false },
        { label: "Careers", href: "/careers", hasDropdown: false },
        { label: "Contact", href: "/contact", hasDropdown: false }
    ],
    cta: {
        label: "Let's Talk",
        href: "/sales"
    }
};

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const isActive = (href: string) => pathname === href;
    const isServicesActive = pathname === '/services' || pathname === '/solutions' || pathname === '/specialties' || pathname === '/physician-billing';

    const linkClass = (href: string) => {
        const active = href === '/services' ? isServicesActive : isActive(href);
        return `font-medium text-[16px] px-4 py-2.5 rounded-md transition-all duration-300 ${active
            ? 'bg-[#EBF6EE] text-[#1A6B3A]'
            : 'text-[#162018] hover:bg-[#EBF6EE] hover:text-[#1A6B3A]'
            }`;
    };

    return (
        <header className="sticky top-0 z-50 bg-white font-outfit border-b border-gray-100">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-[90px] items-center justify-between">
                    <div className="flex shrink-0 items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={navData.logo.src}
                                alt={navData.logo.alt}
                                width={navData.logo.width}
                                height={navData.logo.height}
                                className="w-auto h-10 lg:h-11 object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 lg:gap-10">
                        <nav className="hidden md:flex items-center gap-2 lg:gap-4 h-full">
                            {navData.links.map((link) => {
                                if (link.hasDropdown) {
                                    return (
                                        <div key={link.label} className="group relative flex items-center h-full py-6">
                                            <Link href={link.href} className={`flex items-center gap-1.5 outline-none ${linkClass(link.href)}`}>
                                                {link.label}
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180 duration-300">
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </Link>
                                            <div className="absolute top-[80%] left-0 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-[#EBF6EE] border border-[#1A6B3A]/10 rounded-xl shadow-lg p-2 flex flex-col gap-1 z-50">
                                                {link.dropdownItems?.map((drop) => (
                                                    <Link key={drop.label} href={drop.href} className="block px-4 py-2.5 text-[#1A6B3A] hover:bg-white rounded-lg transition-colors font-medium text-[15px]">
                                                        {drop.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <Link key={link.label} href={link.href} className={linkClass(link.href)}>
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="flex items-center">
                            <Link
                                href={navData.cta.href}
                                className="hidden lg:flex focus:outline-none items-center justify-center gap-2 bg-[#1A6B3A] hover:bg-[#13522C] text-white px-7 py-3 rounded-md font-medium text-[16px] transition-colors ml-4"
                            >
                                {navData.cta.label}
                            </Link>

                            <button
                                type="button"
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="lg:hidden ml-4 text-slate-800 hover:text-[#1A6B3A] transition-colors"
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
            </div>

            {isOpen ? (
                <div className="lg:hidden border-t border-gray-100 bg-white shadow-sm absolute w-full z-50">
                    <div className="container mx-auto px-4 py-6 sm:px-6">
                        <nav className="flex flex-col gap-2">
                            {navData.links.map((link) => {
                                if (link.hasDropdown) {
                                    return (
                                        <div key={link.label} className="flex flex-col">
                                            <Link href={link.href} className={linkClass(link.href)} onClick={() => setIsOpen(false)}>
                                                {link.label}
                                            </Link>
                                            {link.dropdownItems?.slice(1).map((drop) => (
                                                <Link key={drop.label} href={drop.href} className="pl-8 text-slate-600 hover:text-[#1A6B3A] font-medium text-[15px] py-1" onClick={() => setIsOpen(false)}>
                                                    {drop.label}
                                                </Link>
                                            ))}
                                        </div>
                                    );
                                }
                                return (
                                    <Link key={link.label} href={link.href} className={linkClass(link.href)} onClick={() => setIsOpen(false)}>
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <Link
                                href={navData.cta.href}
                                className="inline-flex w-fit items-center justify-center bg-[#1A6B3A] hover:bg-[#13522C] text-white px-7 py-3 rounded-md font-medium text-[16px] transition-colors mt-4"
                                onClick={() => setIsOpen(false)}
                            >
                                {navData.cta.label}
                            </Link>
                        </nav>
                    </div>
                </div>
            ) : null}
        </header>
    );
}