import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Briefcase, Star, User } from 'lucide-react';
import anime from 'animejs';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Title animation
            anime({
              targets: titleRef.current,
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 800,
              easing: 'easeOutExpo'
            });

            // Left column animation
            anime({
              targets: leftColumnRef.current?.children,
              translateX: [-50, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(200),
              easing: 'easeOutExpo'
            });

            // Right column animation (highlight cards)
            anime({
              targets: rightColumnRef.current?.children,
              translateX: [50, 0],
              opacity: [0, 1],
              scale: [0.8, 1],
              duration: 800,
              delay: anime.stagger(150),
              easing: 'easeOutElastic(1, .8)'
            });

            // Skills badges animation
            setTimeout(() => {
              anime({
                targets: '.skill-badge',
                scale: [0, 1],
                opacity: [0, 1],
                duration: 600,
                delay: anime.stagger(50),
                easing: 'easeOutBack(1.7)'
              });
            }, 600);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardHover = (e: React.MouseEvent) => {
    anime({
      targets: e.currentTarget,
      translateY: -10,
      scale: 1.02,
      duration: 300,
      easing: 'easeOutCubic'
    });
  };

  const handleCardLeave = (e: React.MouseEvent) => {
    anime({
      targets: e.currentTarget,
      translateY: 0,
      scale: 1,
      duration: 300,
      easing: 'easeOutCubic'
    });
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-poppins">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with a strong foundation in both frontend and backend technologies, 
            specializing in creating scalable, user-centric applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={leftColumnRef} className="space-y-6">
            <Card 
              className="p-6 glass-effect hover:shadow-lg transition-all duration-300 opacity-0"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
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

            <div className="opacity-0">
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-sm skill-badge opacity-0"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div ref={rightColumnRef} className="space-y-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 glass-effect hover:shadow-lg transition-all duration-300 opacity-0"
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
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
