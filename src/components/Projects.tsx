
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Eye } from 'lucide-react';
import { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

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
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 80, 
      opacity: 0,
      scale: 0.9,
      rotateX: 10
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-poppins">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and creative problem-solving
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <Card className="overflow-hidden glass-effect hover:shadow-2xl transition-all duration-300 interactive"
                    data-cursor-text="View Project">
                <div className="relative overflow-hidden group">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 500, damping: 25 }}
                    >
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground animate-pulse">
                        Featured
                      </Badge>
                    </motion.div>
                  )}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Eye className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
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
                      <motion.div
                        key={techIndex}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 2,
                          transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs interactive cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
