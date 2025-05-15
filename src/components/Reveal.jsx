import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function Reveal({ children, duration = 0.5, delay = 0, className = "" }) {
  const controls = useAnimation();
  const ref = React.useRef(null);
const inView = useInView(ref, { once: true });


  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration, delay }
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
