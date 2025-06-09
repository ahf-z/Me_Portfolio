
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "SAP Technologies",
      skills: [
        { name: "SAP UI5/Fiori", level: 88 },
        { name: "SAP BTP", level: 80 },
        { name: "OData Services", level: 85 },
        { name: "ABAP", level: 70 }
      ]
    },
    {
      title: "Cloud & Database",
      skills: [
        { name: "AWS", level: 78 },
        { name: "Firebase", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "MySQL", level: 80 }
      ]
    }
  ];

  const tools = [
    "Git", "Docker", "Webpack", "Vite", "Jest", "Cypress", 
    "Figma", "Postman", "VS Code", "Jira", "Confluence", "Slack"
  ];

  const animations = [
    "Framer Motion", "Anime.js", "GSAP", "CSS Animations", "Lottie"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-poppins">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 glass-effect hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 glass-effect">
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm py-1 px-3 hover:bg-accent/50 transition-colors"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 glass-effect">
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Animation Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {animations.map((animation, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm py-1 px-3 hover:bg-accent/50 transition-colors"
                >
                  {animation}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
