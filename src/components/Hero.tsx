
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const controls = useAnimation();
  
  const roles = [
    'Full-Stack Developer',
    'SAP Fiori Specialist',
    'Cloud & AI Enthusiast'
  ];

  useEffect(() => {
    // Initial page load animations
    const sequence = async () => {
      await controls.start("visible");
    };
    
    sequence();

    // Role rotation animation
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-40 right-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-poppins"
          variants={itemVariants}
        >
          Hi, I'm{' '}
          <span className="gradient-text">Ahfaz Abdul</span>
        </motion.h1>
        
        <div className="h-16 md:h-20 flex items-center justify-center mb-8">
          <motion.h2 
            className="text-xl md:text-3xl lg:text-4xl text-muted-foreground font-medium"
            variants={itemVariants}
            key={currentRole}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {roles[currentRole]}
          </motion.h2>
        </div>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          3+ years of experience building scalable web applications with React, Next.js, SAP Fiori, 
          and cloud technologies. Passionate about creating innovative solutions that make a difference.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
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
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-6"
          variants={containerVariants}
        >
          {[
            { icon: Linkedin, href: "https://linkedin.com/in/ahfaz-abdul", text: "LinkedIn" },
            { icon: Github, href: "https://github.com/ahfaz-abdul", text: "GitHub" },
            { icon: Mail, href: "mailto:ahfaz.abdul@email.com", text: "Email" }
          ].map(({ icon: Icon, href, text }, index) => (
            <motion.a
              key={text}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-accent/50 transition-all duration-300 interactive"
              data-cursor-text={text}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDown className="h-8 w-8 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
