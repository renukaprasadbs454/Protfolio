import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "Mind Matrix",
    location: "Bangalore, Karnataka",
    period: "Sept 2025 – Present",
    description: [
      "Collaborated with cross-functional teams to design, implement, and maintain backend solutions for 5+ projects",
      "Applied Test Driven Development (TDD) methodologies to improve code quality and maintainability",
      "Built scalable APIs and integrated third-party services for enhanced functionality",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "PHARMA BOLT",
    location: "Bengaluru, Karnataka",
    period: "March 2025 – June 2025",
    description: [
      "Designed and implemented a microservice architecture to ensure scalability and modularity",
      "Developed secure RESTful APIs for integration with client-facing applications, ensuring data security",
      "Worked with Docker for containerization and deployment pipelines",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Where I've Worked</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Experience</h2>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-2 w-4 h-4 rounded-full bg-primary shadow-glow ${
                    index % 2 === 0 ? "left-0 md:left-auto md:-right-2" : "left-0 md:-left-2"
                  } md:translate-x-0`}
                />
                
                {/* Card */}
                <div className="ml-8 md:ml-0 glass rounded-xl p-6 hover:shadow-glow transition-all duration-300">
                  <div className={`flex items-center gap-2 text-primary mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Building2 size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold mb-2">{exp.role}</h3>
                  
                  <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  
                  <ul className={`space-y-2 text-muted-foreground text-sm ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
