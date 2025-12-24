import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-no-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Photo */}
            <div className="relative group flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 group-hover:scale-110" />
                {/* Border ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 group-hover:scale-105 transition-all duration-500" />
                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-background">
                  <img 
                    src={profilePhoto} 
                    alt="Renuka Prasad B.S" 
                    className="w-full h-full object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Greeting */}
              <p className="text-primary font-medium mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Hello, I'm
              </p>
              
              {/* Name */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                Renuka Prasad
                <span className="text-gradient"> B.S</span>
              </h1>
              
              {/* Title */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                Software Developer & Data Scientist
              </p>
              
              {/* Description */}
              <p className="text-muted-foreground max-w-xl mb-8 animate-fade-up lg:mx-0 mx-auto" style={{ animationDelay: "0.5s" }}>
                Passionate about building scalable microservices, RESTful APIs, Data Science and full-stack applications. Currently pursuing B.E in Electronics and Communications at M.S Ramaiah Institute of Technology.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up" style={{ animationDelay: "0.55s" }}>
                <Button variant="hero" size="xl" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="#contact">Let's Connect</a>
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
                <a href="https://github.com/RenukaPrasadB" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/renuka-prasad-b-s" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:rpbs.454@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
