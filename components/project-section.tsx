"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
        description: "Site web personnel pour présenter mes projets et expériences, réalisé avec Next.js et TailwindCSS.",
        stack: ["Next.js", "TypeScript", "TailwindCSS"],
        image: "/project-portfolio.png",
    },
    {
        name: "Gally",
        description: "Gally est un moteur de recherche pour les sites e-commmerce. J'ai contribué à son développement lors de mon alternance à smile.",
        stack: ["Next.js", "TypeScript", "Mui",'StyledComponents', 'Redux', 'Storybook', 'Playwright', 'Jest' , 'Symfony', 'Docker', 'Git'],
        image: "/project-portfolio.png",
    },
    {
        name: "App de gestion d'objectifs",
        description: "Application web pour accomplir des objectifs récurents (quotidiens, hebdomadaires, mensuels, ...)",
        stack: ["React", "Next.js", "Adonis.js", "Docker","Git","PostgreSQL"],
        link: "",
        image: "/project-tasks.png",
    },
    {
        name: "App de prise de rendez-vous",
        description: "Application web pour permettre aux micro-entrepreneurs proposant des services de gérer leur planning, prestations et clients facilement.",
        stack: ["React", "Next.js", "Adonis.js", "Docker","Git","PostgreSQL"],
        link: "",
        image: "/project-tasks.png",
    },
    {
        name: "Site e-commerces",
        description: "Sites e-commerces réalisés en étant chez webexpR",
        stack: ["Next.js", "React", "Typescript", 'Tailwind', 'Shadcnui', 'Medusa.js', 'Docker','Git'],
        link: "",
        image: "/project-ecommerce.png",
    },
];


export default function ProjectSection() {
    return (
        <section id="projects" className="w-full min-h-screen py-40 px-36">
            <h1 className="mb-10 font-title text-6xl font-bold bg-linear-to-tr from-emerald-500 to-emerald-900 bg-clip-text text-transparent">
                Projets
            </h1>

            <motion.div
                variants={listVariants}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="rounded-lg border shadow-xs bg-white/10 backdrop-blur-md border-white/20 p-6 flex flex-col gap-4 hover:scale-105 transition-transform"
                    >
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-40 object-cover rounded-md"
                            />
                        )}

                        <h2 className="font-title text-xl">{project.name}</h2>
                        <p className="text-sm text-emerald-950">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.stack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-xs rounded-full border bg-white/20 backdrop-blur-md border-white/30"
                                >
                  {tech}
                </span>
                            ))}
                        </div>

                        {project.link && (
                            <Button
                                asChild
                                className="mt-auto"
                                variant="outline"
                            >
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    Voir le projet
                                </a>
                            </Button>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
