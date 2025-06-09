
import { useEffect, useState } from 'react';
import anime from 'animejs';

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      if (cursor) {
        anime({
          targets: cursor,
          left: e.clientX,
          top: e.clientY,
          duration: 0,
          easing: 'linear'
        });
      }

      if (cursorFollower) {
        anime({
          targets: cursorFollower,
          left: e.clientX,
          top: e.clientY,
          duration: 300,
          easing: 'easeOutCubic'
        });
      }
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .interactive')) {
        setIsHovering(true);
        const text = target.getAttribute('data-cursor-text');
        if (text) setCursorText(text);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <div 
        className={`custom-cursor fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-200 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{ 
          left: cursorPos.x - 8, 
          top: cursorPos.y - 8,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
        }}
      />
      <div 
        className={`cursor-follower fixed w-8 h-8 border-2 border-primary/50 rounded-full pointer-events-none z-40 transition-all duration-300 ${
          isHovering ? 'scale-200 opacity-50' : 'scale-100 opacity-100'
        }`}
        style={{ 
          left: cursorPos.x - 16, 
          top: cursorPos.y - 16,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`
        }}
      />
      {cursorText && (
        <div 
          className="cursor-text fixed pointer-events-none z-50 bg-primary text-primary-foreground px-2 py-1 rounded text-sm"
          style={{ 
            left: cursorPos.x + 20, 
            top: cursorPos.y - 30 
          }}
        >
          {cursorText}
        </div>
      )}
    </>
  );
};

export default CustomCursor;
