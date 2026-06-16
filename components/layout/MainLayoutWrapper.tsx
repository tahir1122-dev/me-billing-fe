"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ChatbotWidget from "@/components/layout/ChatbotWidget";

export default function MainLayoutWrapper({
    children,
    footerData,
}: {
    children: React.ReactNode;
    footerData?: any;
}) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith("/admin");

    if (isAdminRoute) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            {children}
            <FooterSection data={footerData} />
            <ChatbotWidget />
        </>
    );
}
