import { useEffect, useRef } from 'react';
import * as anime from 'animejs';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle absolute w-1 h-1 bg-primary/20 rounded-full';
      
      // Random initial position
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      container.appendChild(particle);

      // Animate particle
      anime({
        targets: particle,
        translateX: () => anime.random(-200, 200),
        translateY: () => anime.random(-200, 200),
        scale: () => anime.random(0.1, 1),
        opacity: () => anime.random(0.1, 0.8),
        duration: () => anime.random(3000, 8000),
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
      });
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default ParticleBackground;
