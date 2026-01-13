"use client";

import {useEffect, useMemo, useRef, useState} from "react";
import { Button } from "@/components/ui/button";
import {ArrowRight, Globe} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
        name: "Développeur web en alternance",
        company: "Smile",
        location: "Montpellier",
        duration: "3 ans",
        website: "https://smile.eu/fr",
        start: "05/09/2022",
        end: "22/08/2025",
        stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Symfony",
            "API REST",
            "API Graphql",
            "Docker",
            "Git",
            "Playwright",
            "Vue.js",
            "Méthodes agiles SCRUM",
            "Vitest",
            "Playwright",
            "Jest",
            "Redux",
            "VueX",
            "Storybook"
        ],
        description:
            "Développement et maintenance d’applications web, participation aux choix techniques et collaboration avec des équipes pluridisciplinaires.",
        content: (
            <div>
                Durant mes trois années chez Smile, j’ai travaillé sur des projets variés,
                allant de moteurs de recherche e-commerce à des applications institutionnelles
                pour le secteur public.
                <br /><br />
                Mon rôle comprenait :
                <ul className="list-disc">
                    <li>Développement front-end en React, Next.js et Vue.js, avec une forte attention à l’expérience utilisateur et aux performances.</li>
                    <li>Intégration d’API REST et GraphQL réalisé par les développeurs backend</li>
                    <li>Participation aux choix techniques, revue de code, et mise en place de tests unitaires et end-to-end (Vitest, Jest, Playwright).</li>
                    <li>Collaboration avec des équipes pluridisciplinaires : designers, product owners et développeurs back-end pour livrer des applications robustes et maintenables.</li>
                    <li>Utilisation de Docker pour les environnements de développement et de Git pour le versioning et la collaboration en équipe.</li>
                </ul>
                Ces expériences m’ont permis de consolider mes compétences full-stack, d’apprendre à gérer des projets complexes et de comprendre les besoins utilisateurs finaux.
            </div>
        ),
    },
    {
        name: "Développeur fullstack",
        company: "WebexpR",
        location: "Paris",
        duration: "2 mois",
        stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Medusa.js",
            "Git",
            "Docker",
            "PostgreSQL",
            "API REST",
            "Builder.io"
        ],
        start: "01/09/2022",
        end: "30/10/2025",
        website: "https://www.webexpr.fr/",
        description:
            "Conception et développement de fonctionnalités front et back, optimisation des performances de sites e-commerces.",
        content: (
            <div>
                Chez WebexpR, j’ai participé au développement de plusieurs sites e-commerce
                basés sur Medusa.js, en prenant en charge à la fois le front-end et le back-end.
                <br /><br />
                Mes missions principales :
                <ul className="list-disc">
                    <li>Développement et maintenance des fonctionnalités d’authentification OTP pour sécuriser les comptes utilisateurs.</li>
                    <li>Intégration de contenus dynamiques avec Builder.io pour permettre aux équipes marketing de gérer facilement les pages produits et promotions.</li>
                    <li>Création de plugins Medusa pour étendre les fonctionnalités e-commerce selon les besoins spécifiques des projets.</li>
                    <li>Correction de bugs et optimisation du code existant pour améliorer la stabilité et les performances des sites.</li>
                    <li>Gestion des règles fiscales et calcul des taxes lors de la validation des paniers clients pour garantir la conformité des transactions.</li>
                    <li>Développement des interfaces utilisateurs avec React et Next.js, intégration TailwindCSS et Shadcn/ui.</li>
                </ul>
                Ce rôle m’a permis de renforcer mes compétences full-stack, de travailler sur des problématiques métier concrètes liées à l’e-commerce et de livrer des fonctionnalités critiques pour l’expérience utilisateur.
            </div>

        ),
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
    const [indicator, setIndicator] = useState({x:0 ,  y: 0, width: 0, height: 0 });
    const [selectedXpIndex, setSelectedXpIndex] = useState<null | number>(null);
    const selectedXp = useMemo(() => selectedXpIndex != null ? experiences[selectedXpIndex]: null, [selectedXpIndex]);

    useEffect(() => {
        if (!containerRef.current) return;
        const activeTab = containerRef.current.querySelector(
            `#${tab}`
        ) as HTMLButtonElement;
        if (!activeTab) return;

        setIndicator({
            y: activeTab.offsetTop,
            x: activeTab.offsetLeft,
            width: activeTab.offsetWidth,
            height: activeTab.offsetHeight,
        });
    }, [tab]);

    return (
        <section
            id="experiences"
            className="w-full flex flex-col md:flex-row gap-8 md:gap-16 py-20 px-6 md:py-40 md:px-36"
        >
            {/* Tabs */}
            <div
                ref={containerRef}
                className="relative w-fit h-fit flex flex-row md:flex-col gap-2 p-2 md:p-2 rounded-lg border shadow-xs bg-white/10 backdrop-blur-md border-white/20 w-full md:w-48"
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
                                <h1 className="mb-6 md:mb-10 font-title text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-tr from-emerald-500 to-emerald-900 bg-clip-text text-transparent text-center md:text-left">
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
                                            className="flex flex-col md:flex-row items-start md:items-end justify-between p-4 sm:p-6 rounded-lg border shadow-xs bg-white/10 backdrop-blur-md border-white/20 gap-4"
                                        >
                                            <div className="flex gap-4 items-center md:items-end flex-1">
                                                <p className="font-title text-3xl sm:text-4xl md:text-5xl bg-linear-to-tr from-emerald-500 to-emerald-900 bg-clip-text text-transparent">
                                                    +{d.bac}
                                                </p>
                                                <div>
                                                    <h2 className="font-title text-lg sm:text-xl">{d.name}</h2>
                                                    <p className="text-sm sm:text-base font-light">
                                                        {d.school} · {d.location}
                                                    </p>
                                                    <p className="text-sm sm:text-base font-light">
                                                        {d.duration} an{d.duration > 1 && "s"}{" "}
                                                        {d.alternance && "en alternance"}
                                                    </p>
                                                </div>
                                            </div>

                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="secondary" className="mt-2 md:mt-0">
                                                        Plus de détails <ArrowRight />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="rounded-lg shadow bg-white/10 backdrop-blur-md border-white/20 p-4 sm:p-6">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-lg sm:text-xl md:text-2xl">{d.name}</DialogTitle>
                                                        <DialogDescription>Détails de la formation</DialogDescription>
                                                    </DialogHeader>
                                                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
                                                        <img src={d.logo} className="w-32 sm:w-40 py-2" />
                                                        <div>
                                                            <p className="text-sm sm:text-base font-light">
                                                                {d.school} · {d.location}
                                                            </p>
                                                            <p className="text-sm sm:text-base font-light">
                                                                {d.duration} an{d.duration > 1 && "s"}{" "}
                                                                {d.alternance && "en alternance"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <Separator className="my-4" />
                                                    <p className="text-sm sm:text-base">{d.description}</p>
                                                </DialogContent>
                                            </Dialog>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </>
                        )}

                        {tab === "xp" && (
                            <>
                                <Dialog open={selectedXpIndex !== null} onOpenChange={(v) => {
                                    if (!v) setSelectedXpIndex(null)
                                }}>
                                    <DialogContent className="rounded-lg shadow bg-white/10 backdrop-blur-md border-white/20 p-4 sm:p-6">
                                        <DialogHeader>
                                            <DialogTitle className="text-lg sm:text-xl md:text-2xl">{selectedXp?.name}</DialogTitle>
                                            <DialogDescription>{selectedXp?.company} · {selectedXp?.location}</DialogDescription>
                                        </DialogHeader>
                                        <div className="mt-2">{selectedXp?.content}</div>
                                        <h2 className="font-bold mt-4">Stack technique</h2>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {(selectedXp?.stack || []).map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 text-xs sm:text-sm rounded-full border bg-white/20 backdrop-blur-md border-white/30"
                                                >
                                            {tech}
                                        </span>
                                            ))}
                                        </div>
                                        <DialogFooter className="mt-4">
                                            {selectedXp?.website && <Button variant="secondary" asChild>
                                                <Link target="_blank" href={selectedXp.website}>
                                                    <Globe /> Site web
                                                </Link>
                                            </Button>}
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                                <h1 className="mb-6 md:mb-10 font-title text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-tr from-emerald-500 to-emerald-900 bg-clip-text text-transparent text-center md:text-left">
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
                                            className="flex flex-col p-4 sm:p-6 rounded-lg border shadow-xs bg-white/10 backdrop-blur-md border-white/20 gap-2"
                                        >
                                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2 gap-2 md:gap-4">
                                                <div>
                                                    <h2 className="font-title text-lg sm:text-xl">{xp.name}</h2>
                                                    <p className="text-sm sm:text-base font-light">{xp.company} · {xp.location}</p>
                                                </div>
                                                <span className="text-sm sm:text-base font-light text-emerald-700">
                                            De {xp.start} à {xp.end} ({xp.duration})
                                        </span>
                                            </div>

                                            <p className="text-sm sm:text-base text-emerald-950 mb-2">
                                                {xp.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {xp.stack.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 text-xs sm:text-sm rounded-full border bg-white/20 backdrop-blur-md border-white/30"
                                                    >
                                                {tech}
                                            </span>
                                                ))}
                                            </div>
                                            <Button variant="secondary" className="mt-2 sm:mt-4" onClick={() => setSelectedXpIndex(i)}>
                                                Plus d'infos <ArrowRight />
                                            </Button>
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
