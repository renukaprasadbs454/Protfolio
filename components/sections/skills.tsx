"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Brain,
  Database,
  Cloud,
  LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/lib/data";
import {
  SectionWrapper,
  SectionHeading,
  fadeUpVariants,
} from "@/components/shared/section-wrapper";

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Brain,
  Database,
  Cloud,
};

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-card/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Skills"
          title="Technical expertise"
          description="A versatile stack spanning frontend, backend, AI, and cloud infrastructure."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Server;
            return (
              <motion.div
                key={category.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUpVariants}
                whileHover={{ y: -4 }}
                className="group glass-hover rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs px-2.5 py-1.5 rounded-lg bg-background/60 border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors font-mono"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
