"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ThemeSwitcher from "@/components/theme-switcher";
import { useScrollSpy } from "@raddix/use-scroll-spy";
import {usePathname} from "next/navigation"

const links = [
    { label: "Accueil", href: "#home" },
    { label: "A propos de moi", href: "#about-me" },
    { label: "Expériences et Diplômes", href: "#experiences" },
    { label: "Projets", href: "#projects" },
];

export default function Menu() {
    const containerRef = useRef<HTMLUListElement>(null);
    const [indicator, setIndicator] = useState({ x: 0, width: 0, height: 0 });

    // On récupère uniquement les ids des sections
    const sectionIds = links.map(link => link.href.replace("#", ""));
    const activeSectionId = useScrollSpy(sectionIds, { rootMargin: "-50% 0% -50% 0%" });

    // Génère le hash correspondant à la section active
    const activeHash = activeSectionId ? `#${activeSectionId}` : "#home";

    const pathname = usePathname();

    useEffect(() => {
        if (!activeSectionId) return;

        const newHash = `#${activeSectionId}`;

        if (window.location.hash !== newHash) {
            window.history.replaceState(
                null,
                "",
                `${pathname}${newHash}`
            );
        }
    }, [activeSectionId, pathname]);

    // Met à jour l’indicateur sous le lien actif
    useEffect(() => {
        if (!containerRef.current) return;

        const activeLink = containerRef.current.querySelector(
            `a[href="${activeHash}"]`
        ) as HTMLAnchorElement | null;

        if (!activeLink) return;

        const { offsetLeft, offsetWidth, offsetHeight } = activeLink;

        setIndicator({
            x: offsetLeft,
            width: offsetWidth,
            height: offsetHeight,
        });
    }, [activeHash]);

    return (
        <nav

            className="rounded-full border p-1 py-0.5 w-fit flex items-center gap-2 shadow-xs bg-white/10 backdrop-blur-md border-white/20">
            <ul ref={containerRef} className="relative flex items-center gap-4">
                {/* Indicator */}
                <motion.span
                    className="absolute z-20 bottom-0 h-0 rounded-full bg-linear-to-tr from-emerald-500 to-emerald-900"
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
                            className={`relative block px-4 py-2 h-full text-sm transition-colors z-30 rounded-full ${
                                activeHash === href ? "text-white" : "hover:bg-slate-50"
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
