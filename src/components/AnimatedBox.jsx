import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function AnimatedBox() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false , threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      Hello! I animate on scroll into view.
    </motion.div>
  );
}

export default AnimatedBox;



