"use client";

import { motion } from "framer-motion";
import { Terminal, Users, Brain, Rocket, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technicalSkills = {
  "Frontend": ["React.js", "Next.js", "React Native", "TypeScript", "State Management with redux"],
  "Backend": ["Node.js", "Express.js", "Sails.js", "Nest.js", "Adonis.js", "Redis", "Nginx", "REST APIs"],
  "DevOps": ["GitHub Actions", "CI/CD", "Render.com", "Google Cloud Platform"],
  "Design": ["Figma", "Adobe Express", "UI/UX", "Prototypage", "Maquettage"],
};

const softSkills = {
  "Gestion d'Équipe": [
    "Leadership d'équipe",
    "Gestion de projets agiles",
    "Communication interculturelle",
    "Résolution de conflits"
  ],
  "Communication": [
    "Présentation technique",
    "Documentation",
    "Reporting",
    "Formation d'équipe"
  ],
  "Méthodologie": [
    "Scrum",
    "Kanban",
    "Code review",
    "Pair programming"
  ],
  "Soft Skills": [
    "Adaptabilité",
    "Esprit d'analyse",
    "Innovation",
    "Autonomie"
  ]
};

const SkillCard = ({ title, skills, icon: Icon, index }: { title: string; skills: string[]; icon: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card className="p-6 h-full backdrop-blur-sm bg-background/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon className="h-6 w-6 text-primary" />
          {title}
        </h3>
      </motion.div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: (index * skills.length + skillIndex) * 0.05 }}
            viewport={{ once: true }}
          >
            <Badge 
              variant="secondary" 
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </Card>
  </motion.div>
);

export function SkillsSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/0"></div>
      <section className="container mx-auto px-4 py-32 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
        >
          Compétences Techniques
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technicalSkills).map(([category, items], index) => {
            const icons = [Terminal, Brain, Rocket, Palette];
            return (
              <SkillCard 
                key={category} 
                title={category} 
                skills={items} 
                icon={icons[index]}
                index={index}
              />
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 py-32">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
        >
          Compétences Humaines
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(softSkills).map(([category, items], index) => {
            const icons = [Users, Brain, Rocket, Terminal];
            return (
              <SkillCard 
                key={category} 
                title={category} 
                skills={items} 
                icon={icons[index]}
                index={index}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}