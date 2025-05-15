import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const TypewriterText = ({ text, duration = 5 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      duration,
      ease: 'linear',
    });
    return controls.stop;
  }, [count, text, duration]);

  return (
    <motion.span style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
      {displayText}
    </motion.span>
  );
};

export default TypewriterText;
