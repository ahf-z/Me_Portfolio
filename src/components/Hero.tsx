
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import * as anime from 'animejs';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full-Stack Developer',
    'SAP Fiori Specialist',
    'Cloud & AI Enthusiast'
  ];

  useEffect(() => {
    // Initial page load animations
    const tl = anime.timeline();

    tl.add({
      targets: '.hero-name',
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo'
    })
    .add({
      targets: '.hero-role',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo'
    }, '-=600')
    .add({
      targets: '.hero-description',
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo'
    }, '-=400')
    .add({
      targets: '.hero-buttons',
      translateY: [20, 0],
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 600,
      easing: 'easeOutBack(1.7)'
    }, '-=200')
    .add({
      targets: '.hero-social',
      translateY: [20, 0],
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 500,
      delay: anime.stagger(100),
      easing: 'easeOutBack(1.7)'
    }, '-=100');

    // Role rotation animation
    const interval = setInterval(() => {
      setCurrentRole((prev) => {
        const next = (prev + 1) % roles.length;
        
        // Animate role change
        anime({
          targets: '.role-text',
          translateY: [-20, 0],
          opacity: [0, 1],
          duration: 600,
          easing: 'easeOutExpo'
        });

        return next;
      });
    }, 3000);

    // Floating animation for background elements
    anime({
      targets: '.hero-bg-element',
      translateY: () => anime.random(-20, 20),
      duration: () => anime.random(3000, 5000),
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate',
      delay: anime.stagger(500)
    });

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSocialHover = (e: React.MouseEvent) => {
    anime({
      targets: e.currentTarget,
      scale: 1.2,
      rotate: 5,
      duration: 200,
      easing: 'easeOutCubic'
    });
  };

  const handleSocialLeave = (e: React.MouseEvent) => {
    anime({
      targets: e.currentTarget,
      scale: 1,
      rotate: 0,
      duration: 300,
      easing: 'easeOutElastic(1, .6)'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="hero-bg-element absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className="hero-bg-element absolute top-40 right-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className="hero-bg-element absolute -bottom-8 left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="opacity-0">
          <h1 className="hero-name text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-poppins opacity-0">
            Hi, I'm{' '}
            <span className="gradient-text">Ahfaz Abdul</span>
          </h1>
          
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <h2 className="hero-role text-xl md:text-3xl lg:text-4xl text-muted-foreground font-medium opacity-0">
              <span className="role-text">{roles[currentRole]}</span>
            </h2>
          </div>

          <p className="hero-description text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed opacity-0">
            3+ years of experience building scalable web applications with React, Next.js, SAP Fiori, 
            and cloud technologies. Passionate about creating innovative solutions that make a difference.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0">
            <MagneticButton
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
              onClick={scrollToContact}
            >
              Get In Touch
            </MagneticButton>
            
            <MagneticButton
              className="border border-border px-8 py-3 text-lg font-medium rounded-full glass-effect hover:bg-accent/50 transition-all duration-300"
              onClick={scrollToAbout}
            >
              Learn More
            </MagneticButton>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/ahfaz-abdul"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social p-3 rounded-full glass-effect hover:bg-accent/50 transition-all duration-300 interactive opacity-0"
              onMouseEnter={handleSocialHover}
              onMouseLeave={handleSocialLeave}
              data-cursor-text="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/ahfaz-abdul"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social p-3 rounded-full glass-effect hover:bg-accent/50 transition-all duration-300 interactive opacity-0"
              onMouseEnter={handleSocialHover}
              onMouseLeave={handleSocialLeave}
              data-cursor-text="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:ahfaz.abdul@email.com"
              className="hero-social p-3 rounded-full glass-effect hover:bg-accent/50 transition-all duration-300 interactive opacity-0"
              onMouseEnter={handleSocialHover}
              onMouseLeave={handleSocialLeave}
              data-cursor-text="Email"
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
