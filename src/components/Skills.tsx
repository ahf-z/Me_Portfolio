
import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import anime from 'animejs/lib/anime.es.js';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const skillsGridRef = useRef<HTMLDivElement>(null);
  const toolsGridRef = useRef<HTMLDivElement>(null);

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

            // Skills cards animation
            setTimeout(() => {
              anime({
                targets: '.skill-category-card',
                translateY: [60, 0],
                opacity: [0, 1],
                scale: [0.9, 1],
                duration: 800,
                delay: anime.stagger(150),
                easing: 'easeOutElastic(1, .8)'
              });
            }, 200);

            // Progress bars animation
            setTimeout(() => {
              document.querySelectorAll('.skill-progress').forEach((progress, index) => {
                const level = parseInt(progress.getAttribute('data-level') || '0');
                anime({
                  targets: progress.querySelector('[data-orientation="horizontal"]'),
                  width: `${level}%`,
                  duration: 1000,
                  delay: index * 100,
                  easing: 'easeOutCubic'
                });
              });
            }, 600);

            // Tools and animations cards
            setTimeout(() => {
              anime({
                targets: '.tools-card',
                translateY: [40, 0],
                opacity: [0, 1],
                duration: 800,
                delay: anime.stagger(200),
                easing: 'easeOutExpo'
              });
            }, 800);

            // Badge animations
            setTimeout(() => {
              anime({
                targets: '.tool-badge',
                scale: [0, 1],
                opacity: [0, 1],
                duration: 500,
                delay: anime.stagger(30),
                easing: 'easeOutBack(1.7)'
              });
            }, 1200);

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
      translateY: -8,
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

  const handleBadgeHover = (e: React.MouseEvent) => {
    anime({
      targets: e.currentTarget,
      scale: 1.1,
      duration: 200,
      easing: 'easeOutCubic'
    });
  };

  const handleBadgeLeave = (e: React.MouseEvent) => {
    anime({
      targets: e.currentTarget,
      scale: 1,
      duration: 200,
      easing: 'easeOutCubic'
    });
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-poppins">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Technical Skills */}
        <div ref={skillsGridRef} className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 glass-effect hover:shadow-lg transition-all duration-300 skill-category-card opacity-0"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
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
                    <div className="skill-progress" data-level={skill.level}>
                      <Progress value={0} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div ref={toolsGridRef} className="grid md:grid-cols-2 gap-8">
          <Card 
            className="p-6 glass-effect tools-card opacity-0"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm py-1 px-3 hover:bg-accent/50 transition-colors tool-badge opacity-0"
                  onMouseEnter={handleBadgeHover}
                  onMouseLeave={handleBadgeLeave}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>

          <Card 
            className="p-6 glass-effect tools-card opacity-0"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Animation Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {animations.map((animation, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm py-1 px-3 hover:bg-accent/50 transition-colors tool-badge opacity-0"
                  onMouseEnter={handleBadgeHover}
                  onMouseLeave={handleBadgeLeave}
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
