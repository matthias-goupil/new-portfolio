"use client"

import { ChevronsDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section
            className="w-full h-screen flex flex-col items-center justify-center relative px-6 md:px-36"
            id="home"
        >
            {/* Titre avec animation */}
            <motion.h1
                className="font-title font-extrabold text-5xl sm:text-6xl md:text-8xl mb-2 bg-linear-to-tr from-emerald-500 to-emerald-900 bg-clip-text text-transparent text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Matthias Goupil
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
                className="mb-8 text-lg sm:text-xl md:text-2xl uppercase text-center text-emerald-950"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
                Développeur web fullstack
            </motion.p>

            {/* Flèche */}
            <Link href="/#about-me" className="absolute bottom-16 md:bottom-20">
                <ChevronsDown className="animate-bounce cursor-pointer md:size={65}" size={50}  />
            </Link>
        </section>

    );
}
