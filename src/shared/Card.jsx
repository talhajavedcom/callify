'use client';

import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
