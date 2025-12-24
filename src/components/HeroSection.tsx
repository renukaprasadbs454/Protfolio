import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-medium mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Renuka Prasad
            <span className="text-gradient"> B.S</span>
          </h1>
          
          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Backend Developer & Software Engineer
          </p>
          
          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Passionate about building scalable microservices, RESTful APIs, and full-stack applications. 
            Currently pursuing B.E in Electronics and Communications at M.S Ramaiah Institute of Technology.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://github.com/RenukaPrasadB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/renuka-prasad-b-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rpbs.454@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
