"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import MyAvatar from '../../images/photo.jpg'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export function HeroSection() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-500/20 via-cyan-500/20 to-blue-500/20"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Tech Circuit Lines */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l7.9-7.9h-.83zm5.657 0L19.514 8.485 20.93 9.9l8.485-8.485h-1.415zM32.372 0L26.8 5.657 28.214 7.07 34.8 0h-2.428zm5.657 0l-5.657 5.657L33.787 7.07 39.373 0h-1.344zM38.03 0l-3.657 3.657 1.414 1.414L40.458 0h-2.428zM40.458 0l-3.657 3.657 1.414 1.414L42.887 0h-2.429zM12.116 0L7.544 4.571 8.959 5.986l4.571-4.571h-1.414zM16.687 0L10.2 6.485 11.616 7.9l7.071-7.071h-1.415zM21.343 0L13.857 7.485 15.272 8.9l7.071-7.071h-1zM25.029 0L15.272 9.757 16.686 11.17 26.444 1.414h-1.415zM29.715 0L19.957 9.757l1.415 1.414L31.129 1.414h-1.414zM34.4 0l-9.757 9.757 1.414 1.414L35.815 1.414h-1.415zM39.086 0L29.329 9.757l1.414 1.414L40.5 1.414h-1.414z' fill='%234299E1' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
        opacity: 0.5
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24"
        >
          {/* Content Section */}
          <div className="text-center md:text-left">
            <motion.h1 
              variants={item} 
              className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 animate-gradient bg-300% tracking-tight"
            >
              Eugène Bosuku
            </motion.h1>

            <motion.p 
              variants={item} 
              className="text-xl md:text-3xl text-muted-foreground mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
            >
              Développeur Fullstack
            </motion.p>

            <motion.div 
              variants={item}
              className="flex justify-center md:justify-start gap-6 mb-16"
            >
              {[
                { href: "https://github.com/eugeIA", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/eugene-bosuku-640883237/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:bosukuege@gmail.com", icon: Mail, label: "Email" },
                { href: "https://wa.me/243831919710", icon: Phone, label: "WhatsApp" }
              ].map(({ href, icon: Icon, label }) => (
                <Button
                  key={label}
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500 hover:bg-purple-500/10 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </Button>
              ))}
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
            <Avatar className="h-64 w-64 ring-2 ring-white/10 relative">
              <AvatarImage
                src={MyAvatar.src}
                alt="Eugène Bosuku"
                className="object-cover"
              />
              <AvatarFallback>EB</AvatarFallback>
            </Avatar>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2"
          onClick={scrollToBottom}
        >
          <ArrowDown className="h-8 w-8 text-muted-foreground hover:text-purple-500 transition-colors hover:scale-110" />
        </motion.div>
      </div>
    </section>
  );
}