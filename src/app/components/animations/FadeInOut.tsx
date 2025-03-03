import { motion } from 'framer-motion';
import React from 'react';

interface FadeInOutProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

const FadeInOut: React.FC<FadeInOutProps> = ({ children, duration = 0.8, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOut;
