import { motion } from 'framer-motion';
import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, duration = 0.8, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
