import { motion } from 'framer-motion';
import React from 'react';

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
  delay?: number;
}

const SlideIn: React.FC<SlideInProps> = ({ children, direction = 'up', duration = 0.8, delay = 0 }) => {
  const variants = {
    hidden: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration, delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
