"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "@/components/ui/menu";
import {cn} from "@/lib/utils";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            layout
            transition={{ layout: { type: "spring", stiffness: 300, damping: 30 } }}
            className="max-md:hidden fixed top-0 w-full p-8 z-10"
        >
            <div className={cn('flex items-center',scrolled ? 'justify-center':'justify-between')}>
                {/* Zone gauche */}
                <div>
                    <AnimatePresence mode="popLayout">
                        {!scrolled && (
                            <motion.div
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex items-center gap-1"
                            >
                                <img src="/logo.png" alt="Matthias Goupil" className="h-8" />
                                <div>
                                    <p className="font-title font-light text-sm mb-0">
                                        Matthias Goupil
                                    </p>
                                    <p className="text-xs text-gray-500">Portfolio</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div
                    layout
                >
                    <Menu />
                </motion.div>
            </div>
        </motion.header>
    );
}
