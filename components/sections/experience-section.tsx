"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Lead Developer & CTO",
    company: "Groupe B-Holding SARL",
    period: "2023 - Présent",
    description: "Direction technique et développement des projets majeurs du groupe",
    responsibilities: [
      "Direction technique de l'équipe de développement",
      "Architecture et développement des plateformes UTY et Ekelasi",
      "Mise en place de l'infrastructure cloud et CI/CD",
      "Gestion des équipes et des projets techniques"
    ],
    tech: ["React.js", "Next.js", "Express.js", "Nest.js", "Docker", "Google Cloud", "GitHub Actions", "MongoDB", "PostgreSQL", "Redis", "Jenkins"]
  },
  {
    title: "Consultant Développeur Web",
    company: "Evolve SARL",
    period: "2022 - 2023",
    description: "Développement de solutions sur mesure pour des clients majeurs",
    responsibilities: [
      "Développement du système ERP pour Nsitu Pelende (Colruyt RDC)",
      "Création de l'application de gestion pour Kantu Microfinance",
      "Collaboration avec les équipes clients",
      "Analyse des besoins et proposition de solutions techniques"
    ],
    tech: ["Sails.js", "Vue.js", "MySQL"]
  },
  {
    title: "Développeur Web & Mobile",
    company: "Kinshasa Digital Academy",
    period: "2022 - 2023",
    description: "Formation intensive en développement web et mobile",
    responsibilities: [
      "Développement de projets full-stack",
      "Création d'applications mobiles avec React Native",
      "Participation à des projets d'équipe",
      "Apprentissage des méthodologies agiles"
    ],
    tech: ["React.js", "React Native", "Node.js", "MongoDB"]
  }
];

export function ExperienceSection() {
  return (
    <section className="container mx-auto px-4 py-32">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
      >
        Expérience Professionnelle
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title + exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary/80">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
                {exp.responsibilities.map((resp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {resp}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}