
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted/30 z-50">
      <motion.div 
        className="h-full bg-gradient-to-r from-primary to-accent origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgress;
