import {Button} from "@/components/ui/button";
import {ChevronsDown} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return <section className="w-full h-screen flex flex-col items-center justify-center relative" id="home">
            <h1 className="font-title font-extrabold text-8xl mb-2 bg-linear-to-tr from-emerald-500 to-emerald-900 bg-clip-text text-transparent">Matthias Goupil</h1>
            <p className="mb-8 text-2xl uppercase">Développeur web fullstack</p>

            <Link href="/#about-me" className="absolute bottom-20">
                <ChevronsDown className=" animate-bounce cursor-pointer" size={65}/>
            </Link>
    </section>
}