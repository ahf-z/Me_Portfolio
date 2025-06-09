
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Globe, Cpu } from 'lucide-react';

const FloatingElements = () => {
  const icons = [Code, Database, Cloud, Smartphone, Globe, Cpu];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="floating-icon absolute opacity-10"
          style={{
            left: Math.random() * 80 + 10 + '%',
            top: Math.random() * 80 + 10 + '%',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, -15, 0],
            rotate: [0, 10, -10, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 2 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        >
          <Icon className="w-8 h-8 text-primary" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
