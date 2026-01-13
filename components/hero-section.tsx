"use client"

import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section
            className="w-full h-screen flex flex-col items-center justify-center relative"
            id="home"
        >
            {/* Titre avec animation */}
            <motion.h1
                className="font-title font-extrabold text-8xl mb-2 bg-linear-to-tr from-emerald-500 to-emerald-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }} // commence invisible et décalé vers le bas
                animate={{ opacity: 1, y: 0 }} // finit visible et à sa position normale
                transition={{ duration: 1, ease: "easeOut" }} // durée et easing
            >
                Matthias Goupil
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
                className="mb-8 text-2xl uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // léger delay après le titre
            >
                Développeur web fullstack
            </motion.p>

            {/* Flèche */}
            <Link href="/#about-me" className="absolute bottom-20">
                <ChevronsDown className="animate-bounce cursor-pointer" size={65} />
            </Link>
        </section>
    );
}
