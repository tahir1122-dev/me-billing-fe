import Image from "next/image";

const socialLinks = [
    { href: "#", label: "Facebook", icon: "/images/facebook logo.svg" },
    { href: "#", label: "Twitter", icon: "/images/Twitter logo.svg" },
    { href: "#", label: "LinkedIn", icon: "/images/linkedin logo.svg" },
    { href: "#", label: "Instagram", icon: "/images/instagram logo.svg" },
];

const contactItems = [
    { icon: "/images/call.svg", text: "0092346616008" },
    { icon: "/images/Icons.svg", text: "info@mebilling.com" },
    { icon: "/images/loc.svg", text: "100 Glenborough Dr, Suite 400\nHouston, TX 77067" },
];

const pageLinks = [
    { label: "Home", href: "/" },
    { label: "Our services", href: "/services" },
    { label: "Billing Solutions", href: "/PhysicianBilling" },
    { label: "Blog", href: "/blogs" },
    { label: "About Us", href: "/about" },
];

export default function FooterSection() {
    return (
        <footer className="w-full bg-white">
            <div className="container mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
                    <div className="space-y-5">
                        <div className="text-2xl font-semibold text-slate-900">
                            <span className="text-[#15ABD5]">me</span>
                            <span>billing</span>
                        </div>
                        <p className="max-w-md text-sm leading-relaxed text-slate-600">
                            We are an organization that focuses on delivering full solutions tailored to our client&apos;s
                            various Revenue Cycle operations. We currently service clients located in Texas, Louisiana,
                            Arkansas, Oklahoma, Alabama, and New Jersey.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    aria-label={item.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.label}
                                        width={18}
                                        height={18}
                                        className="h-4 w-4"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-[#15ABD5]">Pages</h3>
                        <ul className="mt-4 space-y-2 text-sm text-slate-600">
                            {pageLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="transition hover:text-slate-900">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-[#15ABD5]">Contact Us</h3>
                        <ul className="mt-4 space-y-4 text-sm text-slate-600">
                            {contactItems.map((item) => (
                                <li key={item.text} className="flex items-start gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#004952]">
                                        <Image src={item.icon} alt="" width={18} height={18} />
                                    </span>
                                    <span className="whitespace-pre-line leading-relaxed">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-[#222E34] py-4">
                <p className="text-center text-xs text-white/90">
                    Copyright (C) 2026 mebilling. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
