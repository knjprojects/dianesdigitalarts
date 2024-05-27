// components/CustomTransition.js
import React from 'react';
import { motion } from 'framer-motion';

const CustomTransition = ({ children }:any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
        <img
          src="/assets/animation/transit.gif"
          alt="Fade Animation"
          className="w-64 h-64"
        />
      </div>
      {children}
    </motion.div>
  );
};

export default CustomTransition;
