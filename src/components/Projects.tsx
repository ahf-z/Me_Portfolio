
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Projector } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "GrantWise",
      description: "AI-powered grant discovery and application platform that helps researchers and organizations find relevant funding opportunities using machine learning algorithms.",
      technologies: ["React", "Next.js", "TypeScript", "OpenAI", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "CNN Fracture Classifier",
      description: "Deep learning model for automated bone fracture detection and classification using Convolutional Neural Networks, achieving 94% accuracy.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "React", "Docker"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Carry Connect",
      description: "Mobile logistics platform connecting travelers with people who need items delivered, featuring real-time tracking and secure payments.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe API", "AWS"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "OCR Document Processor",
      description: "Intelligent document processing system with OCR capabilities, text extraction, and automated data classification for enterprise use.",
      technologies: ["Python", "Tesseract", "FastAPI", "React", "PostgreSQL", "Redis"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-poppins">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden glass-effect hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="glass-effect hover:bg-accent/50"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    asChild
                    className="bg-primary hover:bg-primary/90"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Projector className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
