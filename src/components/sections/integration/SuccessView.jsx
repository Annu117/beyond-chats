import React from 'react';
import { motion } from 'framer-motion';
import { Settings, MessageSquare, Share2, Check } from 'lucide-react';
import Confetti from './Confetti';

const buttonVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

const SuccessView = ({ showConfetti }) => (
  <motion.div 
    className="text-center space-y-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {showConfetti && <Confetti />}
    
    <motion.div
      className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2
      }}
    >
      <Check className="w-10 h-10 text-indigo-600" />
    </motion.div>

    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <h3 className="text-3xl font-bold mb-2">Integration Successful!</h3>
      <p className="text-gray-600">Your chatbot is now ready to assist customers</p>
    </motion.div>

    <motion.div 
      className="space-y-4"
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {[
        {
          icon: <Settings size={18} />,
          text: "Explore Admin Panel",
          className: "bg-indigo-500"
        },
        {
          icon: <MessageSquare size={18} />,
          text: "Start Talking to Your Chatbot",
          className: "bg-indigo-600"
        }
      ].map((button, index) => (
        <motion.button
          key={index}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className={`w-full ${button.className} text-white p-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg`}
        >
          {button.icon}
          <span>{button.text}</span>
        </motion.button>
      ))}

      <motion.div 
        className="flex justify-center space-x-4"
        variants={buttonVariants}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 border rounded-lg hover:bg-gray-900 transition-all duration-300"
        >
          <Share2 size={18} />
        </motion.button>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default SuccessView;