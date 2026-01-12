"use client";

import Link from "next/link";
import { useHash } from "@/hooks/use-hash";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {Separator} from "@/components/ui/separator";
import ThemeSwitcher from "@/components/theme-switcher";

const links = [
    { label: "Home", href: "" },
    { label: "A propos de moi", href: "#about-me" },
    { label: "Expériences", href: "#experiences" },
    { label: "Projets", href: "#projects" },
];

export default function Menu() {
    const hash = useHash();
    const containerRef = useRef<HTMLUListElement>(null);
    const [indicator, setIndicator] = useState({ x: 0, width: 0, height: 0 });

    useEffect(() => {
        if (!containerRef.current) return;

        const activeLink = containerRef.current.querySelector(
            `a[href="${hash}"]`
        ) as HTMLAnchorElement | null;

        if (!activeLink) return;

        const { offsetLeft, offsetWidth, offsetHeight } = activeLink;

        setIndicator({
            x: offsetLeft,
            width: offsetWidth,
            height: offsetHeight,
        });
    }, [hash]);

    return (
        <nav className="rounded-full border p-1 py-0.5 w-fit flex items-center gap-2">
            <ul
                ref={containerRef}
                className="relative flex items-center gap-4"
            >
                {/* Indicator */}
                <motion.span
                    className="absolute z-20 bottom-0 h-0 rounded-full bg-blue-900"
                    animate={{
                        x: indicator.x,
                        width: indicator.width,
                        height: indicator.height,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                    }}
                />

                {links.map(({ label, href }, index) => (
                    <li key={index} className="h-fit">
                        <Link
                            href={href}
                            className={`relative block px-4 py-2 h-full text-sm transition-colors z-30  rounded-full ${
                                hash === href ? "text-white " : "hover:bg-slate-50 "
                            }`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            <ThemeSwitcher />
        </nav>
    );
}
