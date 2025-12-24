import { Award, Trophy, Code2, Users } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "MongoDB Certification",
    description: "Gained foundational knowledge in NoSQL databases and document-based data modeling",
  },
  {
    icon: Users,
    title: "FFE Mentorship Scholar",
    description: "Completed the FFE Mentorship Program as a Scholar and Mentee, focused on professional skills development",
  },
  {
    icon: Code2,
    title: "LeetCode 200+ Problems",
    description: "Demonstrated strong problem-solving and algorithmic skills through consistent practice",
  },
  {
    icon: Trophy,
    title: "6x Coding Event Winner",
    description: "Won 6 coding competitions conducted by MSRIT and MSRUAS",
  },
  {
    icon: Award,
    title: "Google Summer of Code Contributor",
    description: "Contributed to open-source projects as part of THE RESONATE GSoC program using JavaScript, React, and Git",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Recognition</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Certifications & Achievements</h2>
          </div>
          
          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.title}
                  className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon
                    className="text-primary mb-4 group-hover:scale-110 transition-transform"
                    size={32}
                  />
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
