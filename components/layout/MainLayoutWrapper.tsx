"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import FooterSection from "@/components/sections/FooterSection";

export default function MainLayoutWrapper({
    children,
}: {
    children: React.ReactNode;
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
            <FooterSection />
        </>
    );
}
