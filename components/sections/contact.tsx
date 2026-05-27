"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  SectionWrapper,
  SectionHeading,
  fadeUpVariants,
} from "@/components/shared/section-wrapper";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "renuka-prasad-b-s",
    href: personalInfo.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: personalInfo.githubUsername,
    href: personalInfo.github,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
];

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's build something"
          description="Open to full-time roles, internships, and freelance projects in full stack and AI engineering."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-hover rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-glow opacity-50 pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6"
            >
              <MapPin size={12} />
              {personalInfo.location}
            </motion.div>

            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to collaborate on your next{" "}
              <span className="text-gradient">big idea</span>?
            </h3>

            <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
              Whether you need a full stack engineer, an AI systems builder, or
              someone to automate your workflows — I&apos;d love to hear from
              you.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpVariants}
                  href={link.href}
                  target={
                    link.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl glass hover:border-primary/30 hover:shadow-glow transition-all duration-300 text-left group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <link.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium truncate">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href={`mailto:${personalInfo.email}`}>
                  <Send size={16} />
                  Send an Email
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={16} />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
