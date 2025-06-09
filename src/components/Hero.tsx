
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full-Stack Developer',
    'SAP Fiori Specialist',
    'Cloud & AI Enthusiast'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-poppins">
            Hi, I'm{' '}
            <span className="gradient-text">Ahfaz Abdul</span>
          </h1>
          
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl text-muted-foreground font-medium">
              {roles[currentRole]}
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            3+ years of experience building scalable web applications with React, Next.js, SAP Fiori, 
            and cloud technologies. Passionate about creating innovative solutions that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="px-8 py-3 text-lg font-medium rounded-full glass-effect hover:bg-accent/50 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/ahfaz-abdul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-accent/50 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/ahfaz-abdul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-accent/50 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:ahfaz.abdul@email.com"
              className="p-3 rounded-full glass-effect hover:bg-accent/50 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
