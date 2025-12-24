import { GraduationCap, MapPin, Code, Briefcase } from "lucide-react";
import profilePhoto from "@/assets/profile-no-bg.png";

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
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Photo */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="relative w-72 h-80 md:w-80 md:h-96">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all duration-500 -z-10" />
                  {/* Border */}
                  <div className="absolute inset-0 rounded-2xl border border-primary/30 group-hover:border-primary/50 transition-all duration-500" />
                  {/* Dark background container */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-800 via-zinc-900 to-black">
                    <img 
                      src={profilePhoto} 
                      alt="Renuka Prasad B.S" 
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
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
            
          </div>
          
          {/* Bio Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-6 text-center">
              I'm a passionate software developer currently in my final year at M.S Ramaiah Institute of Technology. 
              My journey in tech started with curiosity about how things work, and has evolved into a deep love for 
              building scalable, efficient backend systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-center">
              With hands-on experience in microservice architecture, RESTful API development, and test-driven development, 
              I've contributed to multiple production-grade applications. I'm also an active competitive programmer, 
              having solved 200+ problems on LeetCode and won 6 coding competitions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center glass rounded-xl p-4 hover:shadow-glow transition-all duration-300">
                  <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
