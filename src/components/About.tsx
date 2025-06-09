
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Briefcase, Star, User } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full-Stack Development",
      description: "Expert in React, Next.js, Node.js, and modern web technologies"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "SAP Fiori Specialist",
      description: "Specialized in SAP UI5/Fiori development and enterprise solutions"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Cloud & AI Enthusiast",
      description: "Experience with AWS, GCP, Firebase, and AI/ML implementations"
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Agile Development",
    "Technical Writing",
    "Mentoring",
    "Project Management"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-poppins">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with a strong foundation in both frontend and backend technologies, 
            specializing in creating scalable, user-centric applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 glass-effect hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Professional Summary</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated Full-Stack Developer with over 3 years of experience in building 
                modern web applications. My expertise spans across React ecosystem, SAP Fiori development, 
                and cloud technologies. I thrive in collaborative environments and am passionate about 
                writing clean, maintainable code that solves real-world problems.
              </p>
            </Card>

            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 glass-effect hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
