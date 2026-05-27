"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectScreenshot } from "@/components/shared/project-screenshot";
import {
  SectionWrapper,
  SectionHeading,
  fadeUpVariants,
} from "@/components/shared/section-wrapper";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-card/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Featured Projects"
          title="Things I've shipped"
          description="Production-grade systems spanning automation, AI, and data analytics."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUpVariants}
              whileHover={{ y: -6 }}
              className="group glass-hover rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Screenshot placeholder */}
              <div className="p-4 pb-0">
                <ProjectScreenshot
                  title={project.title}
                  gradient={project.gradient}
                  accent={project.accent}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1"
                  />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="tech">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button variant="heroOutline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  </Button>
                  {project.live ? (
                    <Button variant="glass" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="glass"
                      size="sm"
                      disabled
                      className="opacity-50 cursor-not-allowed"
                    >
                      <ExternalLink size={14} />
                      Demo Soon
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a
              href="https://github.com/renukaprasadbs454"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              Explore More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
