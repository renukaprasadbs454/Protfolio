"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Download,
  MapPin,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/shared/typing-animation";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Profile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex-shrink-0 group"
            >
              <div className="relative w-56 h-56 sm:w-72 sm:h-72">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
                <div className="absolute inset-0 rounded-full border border-primary/30 group-hover:border-primary/50 transition-all duration-500" />
                <div className="relative w-full h-full rounded-full overflow-hidden bg-navy border border-border/50">
                  <Image
                    src="/images/profile-no-bg.png"
                    alt={personalInfo.name}
                    fill
                    className="object-cover object-top scale-110 group-hover:scale-115 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for opportunities
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-primary font-medium mb-3"
              >
                Hello, I&apos;m
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4"
              >
                {personalInfo.firstName}
                <span className="text-gradient"> {personalInfo.lastName}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl sm:text-2xl text-muted-foreground mb-2"
              >
                {personalInfo.title}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="text-lg text-primary font-display mb-4 h-8"
              >
                <TypingAnimation words={personalInfo.typingRoles} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-muted-foreground max-w-xl mb-4 lg:mx-0 mx-auto leading-relaxed"
              >
                {personalInfo.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="flex items-center gap-2 justify-center lg:justify-start text-sm text-muted-foreground mb-8"
              >
                <MapPin size={14} className="text-primary" />
                {personalInfo.location}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
              >
                <Button variant="hero" size="lg" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="/resume.pdf" download="Renuka_Prasad_Resume.pdf">
                    <Download size={16} />
                    Download Resume
                  </a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="flex justify-center lg:justify-start gap-5"
              >
                {[
                  { icon: Github, href: personalInfo.github, label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: personalInfo.linkedin,
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: `mailto:${personalInfo.email}`,
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
