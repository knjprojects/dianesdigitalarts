// components/ScrollAnimation.js
"use client"
import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      <h2>Scroll to animate me!</h2>
    </motion.div>
  );
};

export default ScrollAnimation;
