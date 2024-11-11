"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    type: "Formation",
    title: "Licence en Maintenance des Systèmes de Production",
    institution: "Faculté d'Ingénierie ULC-ICAM",
    period: "2017 - 2022",
    description: "Formation en ingénierie avec spécialisation en maintenance des systèmes de production"
  },
  {
    type: "Formation",
    title: "Développement Web et Mobile",
    institution: "Kinshasa Digital Academy",
    period: "2022 - 2023",
    description: "Formation intensive de 9 mois en développement web et mobile, avec certification Simplon"
  },
  {
    type: "Formation",
    title: "Network Programming avec TypeScript",
    institution: "Formation en cours",
    period: "2024",
    description: "Apprentissage approfondi du développement réseau avec TypeScript"
  }
];

const certifications = [
  {
    title: "Certification Simplon",
    issuer: "Kinshasa Digital Academy",
    date: "2023",
    description: "Certification en développement web et mobile full-stack"
  },
  {
    title: "DevOps Professional",
    issuer: "Google Cloud Platform",
    date: "2023",
    description: "Certification en pratiques DevOps et Cloud Computing"
  },
  {
    title: "React Native Development",
    issuer: "Formation professionnelle",
    date: "2022",
    description: "Développement d'applications mobiles cross-platform"
  }
];

export function EducationSection() {
  return (
    <section className="container mx-auto px-4 py-32">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
      >
        Formation & Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Formation
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold">{edu.title}</h4>
                      <p className="text-primary/80">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold">{cert.title}</h4>
                      <p className="text-primary/80">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mb-2">{cert.date}</p>
                      <p className="text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}