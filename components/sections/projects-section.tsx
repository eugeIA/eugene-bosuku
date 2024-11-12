"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "UTY E-commerce",
    description: "Plateforme de commerce électronique moderne avec gestion des commandes, paiements en ligne et système de livraison.",
    tech: ["Next.js", "Express.js", "MongoDB", "Firebase", "Google Cloud", "GitHub Actions", "Render.com"],
    role: "Lead Developer",
    achievements: [
      "Architecture complète de la plateforme",
      "Mise en place du CI/CD avec GitHub Actions",
      "Déploiement sur Google Cloud et Render.com"
    ],
    duration: "En cours",
    teamSize: "5 développeurs",
    links: {
      github: "https://github.com/eugeIA/uty-ecommerce"
    }
  },
  {
    title: "Portail Ekelasi",
    description: "Plateforme éducative permettant aux étudiants d'accéder aux cours en ligne, exercices et évaluations.",
    tech: ["Next.js", "MongoDB", "Docker", "Google Cloud"],
    role: "Lead Developer",
    achievements: [
      "Développement d'un système de cours interactif",
      "Déploiement sur Google Cloud avec Docker",
      "Optimisation des performances"
    ],
    duration: "6 mois",
    teamSize: "3 développeurs"
  },
  {
    title: "ERP Nsitu Pelende",
    description: "Système ERP pour la filiale de Colruyt RDC, permettant la gestion des stocks, des commandes et de la logistique.",
    tech: ["Sails.js", "MySQL"],
    role: "Développeur Backend",
    achievements: [
      "Développement des API REST",
      "Optimisation des requêtes SQL",
      "Intégration avec les systèmes existants"
    ],
    duration: "3 mois",
    teamSize: "4 développeurs"
  },
  {
    title: "Kantu Microfinance",
    description: "Application de gestion pour institution de microcrédit, incluant la gestion des prêts, des remboursements et du suivi client.",
    tech: ["Sails.js", "MySQL"],
    role: "Développeur Backend",
    achievements: [
      "Développement du système de gestion des prêts",
      "Mise en place du système de reporting",
      "Optimisation des performances"
    ],
    duration: "3 mois",
    teamSize: "3 développeurs"
  }
];

export function ProjectsSection() {
  return (
    <section className="container mx-auto px-4 py-32">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
      >
        Projets Significatifs
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-medium">Rôle: {project.role}</p>
                    <p className="text-sm text-muted-foreground">
                      Durée: {project.duration} | Équipe: {project.teamSize}
                    </p>
                  </div>

                  <div>
                    <p className="font-medium mb-2">Réalisations:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.links && (
                  <div className="flex gap-4">
                    {project.links.github && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code source
                        </Link>
                      </Button>
                    )}
                    {/* {project.links.live && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Voir le projet
                        </Link>
                      </Button>
                    )} */}
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}