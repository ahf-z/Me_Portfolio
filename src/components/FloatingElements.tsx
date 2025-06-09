
import { useEffect } from 'react';
import anime from 'animejs';
import { Code, Database, Cloud, Smartphone, Globe, Cpu } from 'lucide-react';

const FloatingElements = () => {
  const icons = [Code, Database, Cloud, Smartphone, Globe, Cpu];

  useEffect(() => {
    // Animate floating icons
    anime({
      targets: '.floating-icon',
      translateY: () => anime.random(-20, 20),
      translateX: () => anime.random(-15, 15),
      rotate: () => anime.random(-10, 10),
      scale: () => anime.random(0.8, 1.2),
      duration: () => anime.random(2000, 4000),
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate',
      delay: anime.stagger(200)
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="floating-icon absolute opacity-10"
          style={{
            left: Math.random() * 80 + 10 + '%',
            top: Math.random() * 80 + 10 + '%',
          }}
        >
          <Icon className="w-8 h-8 text-primary" />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
