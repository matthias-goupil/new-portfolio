"use client";

import { motion } from "framer-motion";
import {useMemo, useState} from "react";
import {
    Dialog,
    DialogContent, DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Github, Globe} from "lucide-react";

const listVariants = {
    animate: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const projects = [
    {
        name: "Portfolio personnel",
        description:
            "Site web personnel pour présenter mes projets et expériences, réalisé avec Next.js et TailwindCSS.",

        stack: ["Next.js", "TypeScript", "TailwindCSS", "Shadcnui", "Git", "Github",],
        image: "/portfolio.png",
        github: "https://github.com/matthias-goupil/new-portfolio",
        website: "https://new-portfolio-azure-gamma.vercel.app/#home",
        content: (
            <p>
                Ce portfolio a été conçu pour présenter mon parcours, mes compétences et
                mes projets de manière claire et moderne. J’ai porté une attention
                particulière aux performances, à l’accessibilité et à l’expérience
                utilisateur.
                <br />
                <br />
                Il m’a permis de consolider mes compétences en Next.js (routing,
                composants serveur, SEO), en TypeScript et en intégration UI avec
                TailwindCSS, tout en mettant en place une architecture propre et
                maintenable.
            </p>
        ),
    },
    {
        name: "Gally",
        description:
            "Gally est un moteur de recherche pour les sites e-commmerce. J'ai contribué à son développement lors de mon alternance à Smile.",
        stack: [
            "Next.js",
            "TypeScript",
            "Mui",
            "StyledComponents",
            "Redux",
            "Storybook",
            "Playwright",
            "Jest",
            "Symfony",
            "Docker",
            "Git",
            "Github",
            "Méthodes agiles SCRUM"
        ],
        image: "/gally.png",
        website: "https://elasticsuite.io/fr/produit/gally/",
        github: "https://github.com/Elastic-Suite/gally-admin",
        content: (
            <p>
                Lors de mon alternance chez Smile, j’ai participé au développement de
                Gally, un moteur de recherche e-commerce orienté performance et
                pertinence.
                <br />
                <br />
                J’ai travaillé principalement sur la partie front-end : développement de
                nouvelles fonctionnalités, intégration de maquettes, gestion de l’état
                applicatif avec Redux, intégration d'api REST / GRAPHQL et amélioration de l’expérience utilisateur.
                J’ai également contribué à la qualité du produit via l’écriture de tests
                unitaires et end-to-end (Jest, Playwright), ainsi qu’à la documentation
                des composants avec Storybook.
            </p>
        ),
    },
    {
        name: "Déclaration d'évènement TMD",
        description:
            "Application web pour le ministère de la transition écologique. TMD permet aux entreprises de déclarer des accidents avec des véhicules transportant des marchandises dangereuses.",
        stack: [
            "Vue.js",
            "VueX",
            "TypeScript",
            "api REST",
            "Vitest",
            "Docker",
            "Java",
            "Git",
            "Gitlab",
            "Méthodes Agiles SCRUM",
            "Design system de l'état français"

        ],
        image: "/tmd.png",
        website: "https://www.datmd.din.developpement-durable.gouv.fr/",
        content: (
            <p>
                Application institutionnelle développée pour le ministère de la Transition
                écologique, destinée à la déclaration d’évènements liés au transport de
                marchandises dangereuses.
                <br />
                <br />
                Dans le cadre de mon alternance chez Smile, j’ai participé au développement
                front-end de formulaires complexes, nécessitant rigueur, validation des
                données et respect des contraintes réglementaires.
                Ce projet m’a permis de travailler sur une application à forts enjeux, avec
                des exigences élevées en matière de fiabilité, d’accessibilité et de qualité
                du code.
            </p>
        ),
    },
    {
        name: "App de gestion d'objectifs",
        description:
            "Application web pour accomplir des objectifs récurents (quotidiens, hebdomadaires, mensuels, ...) et voir le temps qui passe.",
        stack: ["React", "Next.js", "Typescript", "Shadcnui", "Adonis.js", "Docker", "Git", "Github", "PostgreSQL"],
        link: "",
        image: "/timestep.png",
        content: (
            <p>
                Projet personnel visant à créer une application de gestion d’objectifs
                récurrents (quotidiens, hebdomadaires, mensuels).
                <br />
                <br />
                J’ai conçu à la fois le front-end et le back-end, avec une API développée
                en Adonis.js et une base de données PostgreSQL, le tout déployé à l’aide de
                conteneurs Docker.
                <br />
                <br />
                L’application a pour objectif de permettre une meilleure visualisation des
                objectifs à réaliser au quotidien, ainsi qu’un suivi sur le long terme grâce
                à des statistiques et indicateurs de progression.
                <br />
                <br />
                Projet en cours de développement, me permettant de renforcer mes compétences
                full-stack : conception de schémas de données, authentification, gestion du
                temps, analyse des données et déploiement avec Docker.
            </p>
        ),
    },
    {
        name: "App de prise de rendez-vous",
        description:
            "Application web pour permettre aux micro-entrepreneurs proposant des services de gérer leur planning, prestations et clients facilement.",
        stack: ["React", "Next.js", "Typescript", "Shadcnui", "Adonis.js", "Docker", "Git", "Github","PostgreSQL", "Nginx"],
        link: "",
        image: "/bookme.png",
        content: (
            <p>
                Application web pensée pour les micro-entrepreneurs afin de simplifier la
                gestion des rendez-vous, des prestations et des clients.
                <br />
                <br />
                Projet en cours de réalisation, visant à proposer une solution intuitive pour
                la gestion des plannings, la prise de rendez-vous en ligne et le suivi des
                clients.
                Je travaille sur la conception de l’architecture front-end et back-end, la
                modélisation des données ainsi que la mise en place des premières
                fonctionnalités clés (gestion des créneaux, prestations, clients).
                <br />
                <br />
                Ce projet me permet d’approfondir mes compétences full-stack et de réfléchir à
                des problématiques métier concrètes liées à la planification et à
                l’expérience utilisateur.
            </p>
        ),
    },
    {
        name: "Site e-commerces",
        description:
            "Sites e-commerces réalisés en étant chez webexpR",
        stack: [
            "Next.js",
            "React",
            "Typescript",
            "Tailwind",
            "Shadcnui",
            "Medusa.js",
            "Docker",
            "Git",
            "Gitlab",
            "Builder.io"
        ],
        link: "",
        content: (
            <p>
                Réalisation de plusieurs sites e-commerce dans le cadre de mon expérience
                chez webexpR, basés sur Medusa.js.
                <br />
                <br />
                J’ai participé à l’intégration des interfaces, à la personnalisation des
                parcours utilisateurs et à la connexion avec les services back-end.
                J’ai également contribué à la correction de bugs, aussi bien côté front-end
                que back-end, à l’intégration de Builder.io pour la gestion de contenu, ainsi
                qu’à l’ajout de nouvelles fonctionnalités comme l’authentification via code
                OTP.
                <br />
                <br />
                J’ai enfin participé à la création d’un plugin permettant la gestion de clés
                API, renforçant la sécurité et la flexibilité des intégrations.
                Ces projets m’ont permis de consolider mes compétences en e-commerce,
                performance front-end et bonnes pratiques de développement en équipe.
            </p>

        ),
        image: "/ecommerce.png",
    },
];


export default function ProjectSection() {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<null | number>(null);

    const selectedProject = useMemo(() => selectedProjectIndex !== null ? projects[selectedProjectIndex] : null, [selectedProjectIndex]);

    return <section id="projects" className="w-full min-h-screen py-20 px-6 md:py-40 md:px-36">
        <Dialog open={selectedProjectIndex !== null} onOpenChange={(v) => {
            if (!v) setSelectedProjectIndex(null)
        }}>
            <DialogContent className="rounded-lg shadow bg-white/10 backdrop-blur-md border-white/20 p-4 sm:p-6">
                <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold">
                        {selectedProject?.name}
                    </DialogTitle>
                </DialogHeader>
                <div className="mt-2">{selectedProject?.content}</div>
                <h2 className="font-bold mt-4">Stack technique</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject?.stack.map((tech, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 text-xs sm:text-sm rounded-full border bg-white/20 backdrop-blur-md border-white/30"
                        >
                        {tech}
                    </span>
                    ))}
                </div>
                <DialogFooter className="flex flex-wrap gap-2 mt-4">
                    {selectedProject?.website && (
                        <Button variant="secondary" asChild>
                            <Link target="_blank" href={selectedProject.website}>
                                <Globe /> Site web
                            </Link>
                        </Button>
                    )}
                    {selectedProject?.github && (
                        <Button asChild>
                            <Link target="_blank" href={selectedProject.github}>
                                <Github /> Github
                            </Link>
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>

        <h1 className="mb-8 md:mb-10 font-title text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-tr from-emerald-500 to-emerald-900 bg-clip-text text-transparent text-center md:text-left">
            Projets récents
        </h1>

        <motion.div
            variants={listVariants}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className="cursor-pointer rounded-lg border shadow-xs bg-white/10 backdrop-blur-md border-white/20 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:scale-105 transition-transform"
                    onClick={() => setSelectedProjectIndex(index)}
                >
                    {project.image && (
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full object-cover rounded-md max-h-48 sm:max-h-60"
                        />
                    )}

                    <h2 className="font-title text-lg sm:text-xl">{project.name}</h2>
                    <p className="text-sm sm:text-base text-emerald-950">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.stack.map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 text-xs sm:text-sm rounded-full border bg-white/20 backdrop-blur-md border-white/30"
                            >
                            {tech}
                        </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </section>

}
