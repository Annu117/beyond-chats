import React from 'react';
import { motion } from 'framer-motion';

const Confetti = () => {
  const colors = ['#FFC107', '#2196F3', '#4CAF50', '#FF5722'];
  const confettiCount = 50;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(confettiCount)].map((_, i) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomRotation = Math.random() * 360;
        const randomScale = 0.8 + Math.random() * 0.4;

        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3"
            style={{
              left: `${randomX}%`,
              backgroundColor: randomColor,
              originX: 0.5,
              originY: 0.5
            }}
            initial={{
              top: '-5%',
              scale: 0,
              rotate: 0
            }}
            animate={{
              top: '105%',
              scale: randomScale,
              rotate: randomRotation,
              transition: {
                duration: randomDuration,
                delay: randomDelay,
                ease: [0.25, 0.1, 0.25, 1],
                repeat: Infinity
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default Confetti;