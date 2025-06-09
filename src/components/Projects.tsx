
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Eye } from 'lucide-react';
import { useEffect } from 'react';
import anime from 'animejs';
import MagneticButton from './MagneticButton';

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Title animation
          anime({
            targets: '.projects-title',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo'
          });

          // Project cards animation with stagger
          setTimeout(() => {
            anime({
              targets: '.project-card',
              translateY: [80, 0],
              opacity: [0, 1],
              scale: [0.9, 1],
              rotateX: [10, 0],
              duration: 800,
              delay: anime.stagger(200),
              easing: 'easeOutExpo'
            });
          }, 300);

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleCardHover = (e: React.MouseEvent) => {
    const card = e.currentTarget;
    const image = card.querySelector('.project-image');
    
    anime({
      targets: card,
      translateY: -10,
      scale: 1.02,
      duration: 300,
      easing: 'easeOutCubic'
    });

    anime({
      targets: image,
      scale: 1.1,
      duration: 500,
      easing: 'easeOutCubic'
    });
  };

  const handleCardLeave = (e: React.MouseEvent) => {
    const card = e.currentTarget;
    const image = card.querySelector('.project-image');
    
    anime({
      targets: card,
      translateY: 0,
      scale: 1,
      duration: 300,
      easing: 'easeOutCubic'
    });

    anime({
      targets: image,
      scale: 1,
      duration: 500,
      easing: 'easeOutCubic'
    });
  };

  const handleBadgeHover = (e: React.MouseEvent) => {
    anime({
      targets: e.currentTarget,
      scale: 1.1,
      rotate: 2,
      duration: 200,
      easing: 'easeOutCubic'
    });
  };

  const handleBadgeLeave = (e: React.MouseEvent) => {
    anime({
      targets: e.currentTarget,
      scale: 1,
      rotate: 0,
      duration: 200,
      easing: 'easeOutCubic'
    });
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="projects-title text-3xl md:text-4xl font-bold mb-4 gradient-text font-poppins opacity-0">
            Featured Projects
          </h2>
          <p className="projects-title text-lg text-muted-foreground max-w-3xl mx-auto opacity-0">
            A showcase of my recent work, demonstrating technical skills and creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`project-card overflow-hidden glass-effect hover:shadow-2xl transition-all duration-300 opacity-0 interactive ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
              data-cursor-text="View Project"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-48 object-cover transition-transform duration-500"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground animate-pulse">
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
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
                      className="text-xs interactive cursor-pointer"
                      onMouseEnter={handleBadgeHover}
                      onMouseLeave={handleBadgeLeave}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <MagneticButton className="flex items-center gap-2 border border-border px-4 py-2 text-sm rounded-lg glass-effect hover:bg-accent/50 transition-all duration-300">
                    <Github className="h-4 w-4" />
                    Code
                  </MagneticButton>
                  
                  <MagneticButton className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm rounded-lg transition-all duration-300">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </MagneticButton>
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
