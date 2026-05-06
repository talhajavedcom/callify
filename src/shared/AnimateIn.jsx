'use client';

import { motion } from 'framer-motion';

const presets = {
  fadeUp: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  fadeDown: { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } },
  fadeLeft: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scaleIn: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
};

export default function AnimateIn({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
}) {
  const v = presets[variant] || presets.fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={v}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
