"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap } from "lucide-react";
import { aboutContent, personalInfo } from "@/lib/data";
import {
  SectionWrapper,
  SectionHeading,
  fadeUpVariants,
} from "@/components/shared/section-wrapper";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Engineering products that scale"
          description="Full stack engineer with a focus on AI systems, automation, and production-grade software."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpVariants}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutContent.summary}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in turning complex requirements into reliable,
              maintainable systems — from RAG-powered chatbots and analytics
              dashboards to automated data pipelines and cloud-deployed
              microservices. My approach combines strong engineering
              fundamentals with a startup mindset: ship fast, iterate with data,
              and build for scale.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              {aboutContent.highlights.map((item, i) => (
                <motion.li
                  key={item}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpVariants}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2
                    size={16}
                    className="text-primary mt-0.5 flex-shrink-0"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpVariants}
            className="lg:col-span-2"
          >
            <div className="glass-hover rounded-2xl p-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold">Education</p>
                  <p className="text-xs text-muted-foreground">
                    {aboutContent.education.period}
                  </p>
                </div>
              </div>

              <div>
                <p className="font-medium text-sm mb-1">
                  {aboutContent.education.institution}
                </p>
                <p className="text-sm text-muted-foreground">
                  {aboutContent.education.degree}
                </p>
                <p className="text-sm text-primary mt-1">
                  CGPA: {aboutContent.education.cgpa}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {aboutContent.education.minor}
                </p>
              </div>

              <div className="border-t border-border/50 pt-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
