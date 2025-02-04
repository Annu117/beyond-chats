import React from 'react';
import { motion } from 'framer-motion';

const TestingView = () => {
  const dotVariants = {
    start: {
      y: 0,
    },
    end: {
      y: -10,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="text-center py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex justify-center space-x-2 mb-6"
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="w-3 h-3 bg-indigo-600 rounded-full inline-block"
            variants={dotVariants}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-gray-400 text-lg">Testing integration...</p>
        <p className="text-gray-500 text-sm mt-2">This may take a few moments</p>
      </motion.div>
    </motion.div>
  );
};

export default TestingView;