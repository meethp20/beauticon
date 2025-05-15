import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect } from "react";


function AnimatedBox() {
    const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <div>
          <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      Hello! I animate on scroll into view.
    </motion.div>
    </div>
  )
}

export default AnimatedBox


