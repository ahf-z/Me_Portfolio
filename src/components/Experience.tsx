
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Actual Reality Technologies",
      position: "Full-Stack Developer",
      duration: "2022 - Present",
      location: "Remote",
      description: "Leading full-stack development projects using React, Node.js, and cloud technologies. Implemented scalable solutions and mentored junior developers.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Docker"]
    },
    {
      company: "Capgemini",
      position: "SAP Fiori Developer",
      duration: "2021 - 2022",
      location: "Mumbai, India",
      description: "Developed enterprise SAP Fiori applications and UI5 components. Collaborated with cross-functional teams to deliver business solutions.",
      technologies: ["SAP UI5", "Fiori", "JavaScript", "OData", "SAP BTP", "ABAP"]
    },
    {
      company: "Tech Solutions Inc",
      position: "Frontend Developer",
      duration: "2020 - 2021",
      location: "Pune, India",
      description: "Built responsive web applications using modern frontend frameworks. Focused on performance optimization and user experience.",
      technologies: ["React", "Vue.js", "CSS3", "JavaScript", "REST APIs", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-poppins">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            My journey in software development and the impact I've made
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <Card className="p-6 glass-effect hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center space-x-2 text-primary mb-2">
                          <Building className="h-4 w-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
