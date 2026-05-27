"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import {
  SectionWrapper,
  SectionHeading,
  fadeUpVariants,
} from "@/components/shared/section-wrapper";

const categories = ["Frontend", "Backend", "Database", "Cloud", "DevOps", "AI"];

export function TechStackSection() {
  return (
    <SectionWrapper id="tech-stack">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Tech Stack"
          title="Tools I work with"
          description="Technologies I use to build, deploy, and scale modern applications."
        />

        {/* Marquee-style floating badges */}
        <div className="relative overflow-hidden rounded-2xl glass p-8 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 30px hsl(217 91% 60% / 0.15)",
                }}
                className="px-4 py-2.5 rounded-xl bg-background/60 border border-border/50 text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default"
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category breakdown */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => {
            const items = techStack.filter((t) => t.category === cat);
            if (items.length === 0) return null;
            return (
              <motion.div
                key={cat}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                className="text-center p-4 rounded-xl glass-hover"
              >
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-2">
                  {cat}
                </p>
                <p className="font-display text-2xl font-bold">{items.length}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {items.map((i) => i.name).join(", ")}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
