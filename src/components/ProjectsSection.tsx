import { Github, ExternalLink, Folder } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Risk Forge",
    description:
      "A web application for Stock Portfolio Analysis, leveraging advanced machine learning techniques to predict stock price trends and assess investment risks using Monte Carlo Simulation.",
    tech: ["Python", "Machine Learning", "Monte Carlo", "Streamlit"],
    github: "https://github.com/RenukaPrasadB",
    live: null,
  },
  {
    title: "The Farm Unity",
    description:
      "A technology-driven platform to connect farmers with skilled laborers and service providers, eliminating middlemen and ensuring fair pricing and efficient agricultural operations.",
    tech: ["React", "MongoDB", "Node.js", "IVR"],
    github: "https://github.com/RenukaPrasadB",
    live: null,
  },
  {
    title: "Arivu",
    description:
      "A platform aimed at empowering rural communities by streamlining Self-Help Group Management, tracking finances, and promoting skill development for sustainable growth.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/RenukaPrasadB",
    live: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">What I've Built</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group glass rounded-xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={32} />
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-primary/80 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <a
                href="https://github.com/RenukaPrasadB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
