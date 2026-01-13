"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const diploms = [
    {
        "name": "Msc pro architecte logiciel spécialité IA et Big Data",
        "school": "Epitech",
        "duration": 2,
        "location": "Montpellier",
        "alternance": true,
        "description": "Le MSc Pro d’Epitech est une formation professionnalisante orientée vers l’entreprise qui forme des experts techniques en Intelligence Artificielle (IA) et Big Data. Sur 2 ans en alternance, le cursus combine projets concrets, immersion en entreprise et acquisition de compétences techniques pointues. Les étudiants apprennent à concevoir, développer et faire évoluer des systèmes logiciels complexes, à utiliser des architectures distribuées et des outils de calcul parallèle, et à intégrer des solutions intelligentes basées sur l’IA.",
        "logo": "/epitech.png",
        "website": "https://www.epitech.eu/",
        "bac": 5
    },
    {
        "name": "Licence pro APIDAE",
        "school": "IUT Montpellier",
        "duration": 1,
        "location": "Montpellier",
        "alternance": true,
        "description": "La Licence Professionnelle Assistant de Projet Informatique, Développement d’Applications Web/E‑Business (APIDAE) est une formation de niveau Bac+3 d’un an qui vise à spécialiser des étudiants titulaires d’un diplôme Bac+2 en informatique dans le développement d’applications web et les technologies liées au e‑business. Elle combine enseignements théoriques, travaux pratiques, projets tutorés et alternance en entreprise pour développer des compétences en programmation web, bases de données, conception d’applications, gestion de projets et technologies web adaptatives, tout en favorisant l’immersion professionnelle.",
        "logo": "/iut.png",
        "website": "https://iut-montpellier-sete.edu.umontpellier.fr/formations-3/nos-formations/les-licences-professionnelles/",
        "bac": 3
    },
    {
        "name": "DUT Informatique",
        "school": "IUT Montpellier",
        "duration": 2,
        "location": "Montpellier",
        "alternance": false,
        "description": "Le DUT Informatique est une formation universitaire technologique de 2 ans qui forme des techniciens supérieurs généralistes capables de participer à la conception, la réalisation et la mise en œuvre de solutions informatiques répondant aux besoins des organisations. La pédagogie combine enseignements théoriques, travaux dirigés, travaux pratiques et projets tutorés, ainsi que des stages en entreprise. Les étudiants acquièrent des compétences en algorithmique, programmation, architecture des systèmes, bases de données, réseaux, gestion de projets et analyse des besoins utilisateurs, ce qui leur permet d'être opérationnels rapidement dans le secteur informatique tout en pouvant poursuivre leurs études si souhaité. Le diplôme est délivré par l’IUT Montpellier‑Sète composante de l’Université de Montpellier. (formations proposées dans les IUT publics) ",
        "logo": "/iut.png",
        "website": "https://iut-montpellier-sete.edu.umontpellier.fr/",
        "bac": 2
    }
];

const experiences = [
    {
        name: "Développeur web",
        company: "Smile",
        location: "Montpellier",
        duration: "3 ans",
        stack: ["React", "Next.js", "TypeScript", "Symfony", "API REST", "API Graphql", "Docker", "Git","Playwright", "vue.js"],
        description:
            "Développement et maintenance d’applications web, participation aux choix techniques et collaboration avec des équipes pluridisciplinaires.",
    },
    {
        name: "Développeur fullstack",
        company: "WebexpR",
        location: "Paris",
        duration: "",
        stack: ["React", "Next.js", "TypeScript","Medusa.js", "Git","docker", "PostgreSQL", "API REST", ],
        description:
            "Conception et développement de fonctionnalités front et back, optimisation des performances de sites e-commerces",
    },
];


const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 },
    },
};

const listVariants = {
    animate: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
};

interface TabProps {
    id: string;
    label: string;
    active: boolean;
    onClick: (id: string) => void;
}

function Tab({ id, label, onClick, active }: TabProps) {
    return (
        <button
            id={id}
            onClick={() => onClick(id)}
            className={cn(
                "z-30 px-4 py-2 rounded-lg text-sm transition-colors",
                active && "text-white"
            )}
        >
            {label}
        </button>
    );
}

export default function DiplomsAndExperiences() {
    const [tab, setTab] = useState("diploms");
    const containerRef = useRef<HTMLDivElement>(null);
    const [indicator, setIndicator] = useState({ y: 0, width: 0, height: 0 });

    useEffect(() => {
        if (!containerRef.current) return;
        const activeTab = containerRef.current.querySelector(
            `#${tab}`
        ) as HTMLButtonElement;
        if (!activeTab) return;

        setIndicator({
            y: activeTab.offsetTop,
            width: activeTab.offsetWidth,
            height: activeTab.offsetHeight,
        });
    }, [tab]);

    return (
        <section
            id="experiences"
            className="w-full min-h-screen flex gap-16 py-40 px-36"
        >
            {/* Tabs */}
            <div
                ref={containerRef}
                className="relative flex flex-col gap-2 p-2 h-fit rounded-lg border shadow-xs bg-white/10 backdrop-blur-md border-white/20"
            >
                <Tab id="diploms" label="Diplômes" active={tab === "diploms"} onClick={setTab} />
                <Tab id="xp" label="Expériences" active={tab === "xp"} onClick={setTab} />

                <motion.span
                    className="absolute z-20 top-0 rounded-lg bg-linear-to-tr from-emerald-500 to-emerald-900"
                    animate={indicator}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            </div>

            {/* Content */}
            <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={tab}
                        variants={tabVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {tab === "diploms" && (
                            <>
                                <h1 className="mb-10 font-title text-6xl font-bold bg-linear-to-tr from-emerald-500 to-emerald-900 bg-clip-text text-transparent">
                                    Diplômes
                                </h1>

                                <motion.div
                                    variants={listVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="flex flex-col gap-4"
                                >
                                    {diploms.map((d, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            className="flex items-end justify-between p-4 rounded-lg border shadow-xs bg-white/10 backdrop-blur-md border-white/20"
                                        >
                                            <div className="flex gap-4 items-center">
                                                <p className="font-title text-6xl bg-linear-to-tr from-emerald-500 to-emerald-900 bg-clip-text text-transparent">
                                                    +{d.bac}
                                                </p>
                                                <div>
                                                    <h2 className="font-title text-lg">{d.name}</h2>
                                                    <p className="text-sm font-light">
                                                        {d.school} · {d.location}
                                                    </p>
                                                    <p className="text-sm font-light">
                                                        {d.duration} an{d.duration > 1 && "s"}{" "}
                                                        {d.alternance && "en alternance"}
                                                    </p>
                                                </div>
                                            </div>

                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="outline">
                                                        Plus de détails <ArrowRight />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="rounded-lg shadow bg-white/10 backdrop-blur-md border-white/20">
                                                    <DialogHeader>
                                                        <DialogTitle>{d.name}</DialogTitle>
                                                        <DialogDescription>
                                                            Détails de la formation
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="flex gap-4 items-center">
                                                        <img src={d.logo} className="w-40 py-4" />
                                                        <div>
                                                            <p className="text-sm font-light">
                                                                {d.school} · {d.location}
                                                            </p>
                                                            <p className="text-sm font-light">
                                                                {d.duration} an{d.duration > 1 && "s"}{" "}
                                                                {d.alternance && "en alternance"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <Separator />

                                                    {d.description}
                                                </DialogContent>
                                            </Dialog>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </>
                        )}

                        {tab === "xp" && (
                            <>
                                <h1 className="mb-10 font-title text-6xl font-bold bg-linear-to-tr from-emerald-500 to-emerald-900 bg-clip-text text-transparent">
                                    Expériences
                                </h1>

                                <motion.div
                                    variants={listVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="flex flex-col gap-4"
                                >
                                    {experiences.map((xp, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            className="p-6 rounded-lg border shadow-xs bg-white/10 backdrop-blur-md border-white/20"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <div>
                                                    <h2 className="font-title text-xl">{xp.name}</h2>
                                                    <p className="text-sm font-light">
                                                        {xp.company} · {xp.location}
                                                    </p>
                                                </div>

                                                <span className="text-sm font-light text-emerald-700">
              {xp.duration}
            </span>
                                            </div>

                                            <p className="text-sm text-emerald-950 mb-4 max-w-2xl">
                                                {xp.description}
                                            </p>

                                            {/* Stack */}
                                            <div className="flex flex-wrap gap-2">
                                                {xp.stack.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 text-xs rounded-full border bg-white/20 backdrop-blur-md border-white/30"
                                                    >
                {tech}
              </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </>
                        )}

                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
