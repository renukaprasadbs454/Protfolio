import { GraduationCap, MapPin, Code, Briefcase } from "lucide-react";

const stats = [
  { value: "200+", label: "LeetCode Problems" },
  { value: "6x", label: "Coding Competition Winner" },
  { value: "8.3", label: "CGPA" },
  { value: "5+", label: "Projects Built" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Get To Know</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">About Me</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 group">
                <GraduationCap className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-display font-semibold text-lg mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">
                  B.E in Electronics & Communications<br />
                  M.S Ramaiah Institute of Technology
                </p>
              </div>
              
              <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 group">
                <MapPin className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-display font-semibold text-lg mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Bangalore, India<br />
                  Available for Remote Work
                </p>
              </div>
              
              <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 group">
                <Code className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-display font-semibold text-lg mb-2">Specialization</h3>
                <p className="text-muted-foreground text-sm">
                  Backend Development<br />
                  Microservices & APIs
                </p>
              </div>
              
              <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 group">
                <Briefcase className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-display font-semibold text-lg mb-2">Experience</h3>
                <p className="text-muted-foreground text-sm">
                  Software Developer Intern<br />
                  Backend Developer Intern
                </p>
              </div>
            </div>
            
            {/* Bio */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate software developer currently in my final year at M.S Ramaiah Institute of Technology. 
                My journey in tech started with curiosity about how things work, and has evolved into a deep love for 
                building scalable, efficient backend systems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With hands-on experience in microservice architecture, RESTful API development, and test-driven development, 
                I've contributed to multiple production-grade applications. I'm also an active competitive programmer, 
                having solved 200+ problems on LeetCode and won 6 coding competitions.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
