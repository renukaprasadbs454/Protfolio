"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Star, GitFork, Users } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  SectionWrapper,
  SectionHeading,
  fadeUpVariants,
} from "@/components/shared/section-wrapper";

const username = personalInfo.githubUsername;

const statsCards = [
  {
    icon: Star,
    label: "Public Repos",
    value: "20+",
    description: "Open source & personal projects",
  },
  {
    icon: GitFork,
    label: "Contributions",
    value: "Active",
    description: "Consistent GitHub activity",
  },
  {
    icon: Users,
    label: "Collaborations",
    value: "GSoC",
    description: "Google Summer of Code contributor",
  },
];

export function GitHubSection() {
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=58a6ff&icon_color=58a6ff&text_color=c9d1d9&count_private=true`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0D1117&ring=58A6FF&fire=58A6FF&currStreakLabel=58A6FF`;
  const topLangUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9&langs_count=8`;
  const contributionUrl = `https://ghchart.rshah.org/${username}`;

  return (
    <SectionWrapper id="github" className="bg-card/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="GitHub Activity"
          title="Code in the open"
          description="Building in public — contributions, projects, and continuous learning."
        />

        {/* Quick stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {statsCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="glass-hover rounded-2xl p-6 text-center"
            >
              <stat.icon size={24} className="text-primary mx-auto mb-3" />
              <p className="font-display text-2xl font-bold">{stat.value}</p>
              <p className="text-sm font-medium mt-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* GitHub stats images */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-4 overflow-hidden"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 px-2">
              GitHub Stats
            </p>
            <Image
              src={statsUrl}
              alt="GitHub Stats"
              width={450}
              height={195}
              className="w-full h-auto rounded-lg"
              unoptimized
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-4 overflow-hidden"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 px-2">
              Contribution Streak
            </p>
            <Image
              src={streakUrl}
              alt="GitHub Streak"
              width={450}
              height={195}
              className="w-full h-auto rounded-lg"
              unoptimized
            />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-4 overflow-hidden"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 px-2">
              Top Languages
            </p>
            <Image
              src={topLangUrl}
              alt="Top Languages"
              width={450}
              height={195}
              className="w-full h-auto rounded-lg"
              unoptimized
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-4 overflow-hidden"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 px-2">
              Contribution Graph
            </p>
            <Image
              src={contributionUrl}
              alt="Contribution Graph"
              width={450}
              height={120}
              className="w-full h-auto rounded-lg"
              unoptimized
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button variant="hero" size="lg" asChild>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              View GitHub Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
