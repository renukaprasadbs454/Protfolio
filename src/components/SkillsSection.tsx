const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "R"],
  },
  {
    title: "Data Science & ML",
    skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "Keras", "NLTK"],
  },
  {
    title: "Data Visualization",
    skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI", "Excel"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Django", "RESTful APIs", "Microservices", "JWT Auth"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "NoSQL", "MySQL", "Redis"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git", "GitHub", "Jupyter", "VS Code"],
  },
  {
    title: "Core Concepts",
    skills: ["Statistics", "Machine Learning", "Deep Learning", "EDA", "Feature Engineering", "DSA"],
  },
];

const softSkills = [
  "Communication",
  "Problem Solving",
  "Team Collaboration",
  "Leadership",
  "Critical Thinking",
  "Time Management",
  "Adaptability",
  "Creativity",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">What I Know</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Skills</h2>
          </div>
          
          {/* Technical Skills Grid */}
          <div className="mb-12">
            <h3 className="font-display text-2xl font-semibold text-center mb-8">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-display font-semibold text-lg text-primary mb-4">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground rounded-full text-sm hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-center mb-8">Soft Skills</h3>
            <div className="glass rounded-xl p-8 hover:shadow-glow transition-all duration-300">
              <div className="flex flex-wrap justify-center gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
