
import { useRef, useEffect, ReactNode } from 'react';
import anime from 'animejs';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  magnetStrength?: number;
}

const MagneticButton = ({ 
  children, 
  className = '', 
  onClick,
  magnetStrength = 0.3 
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      anime({
        targets: button,
        translateX: x * magnetStrength,
        translateY: y * magnetStrength,
        duration: 300,
        easing: 'easeOutCubic'
      });
    };

    const handleMouseLeave = () => {
      anime({
        targets: button,
        translateX: 0,
        translateY: 0,
        duration: 500,
        easing: 'easeOutElastic(1, .6)'
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magnetStrength]);

  return (
    <button
      ref={buttonRef}
      className={`interactive ${className}`}
      onClick={onClick}
      data-cursor-text="Click me"
    >
      {children}
    </button>
  );
};

export default MagneticButton;
