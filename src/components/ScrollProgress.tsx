
import { useEffect, useState } from 'react';
import anime from 'animejs';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      anime({
        targets: '.scroll-progress-bar',
        width: progress + '%',
        duration: 100,
        easing: 'easeOutCubic'
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted/30 z-50">
      <div 
        className="scroll-progress-bar h-full bg-gradient-to-r from-primary to-accent transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
