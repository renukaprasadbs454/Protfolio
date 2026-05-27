"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";
import {
  SectionWrapper,
  SectionHeading,
} from "@/components/shared/section-wrapper";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Experience"
          title="Where I've built"
          description="Real-world product engineering across edtech, fintech, and healthcare."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full glass border border-primary/40 flex items-center justify-center z-10">
                  <Briefcase size={16} className="text-primary" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="md:w-1/2 pl-14 md:pl-0 md:px-8">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-hover rounded-2xl p-6"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-primary px-2 py-0.5 rounded bg-primary/10">
                        {exp.period}
                      </span>
                      {exp.products && (
                        <span className="text-xs text-muted-foreground">
                          {exp.products}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-xl font-semibold mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                      <MapPin size={12} />
                      {exp.location}
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
