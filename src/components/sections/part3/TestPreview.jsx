import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, AlertCircle, Bot, MessageSquare } from 'lucide-react';

const TestPreview = ({ onClose }) => {
  const [showFeedback, setShowFeedback] = useState(false);

  const containerVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  const chatVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 0.3 }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-indigo-900 z-50"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
          <motion.button 
            onClick={onClose}
            className="flex items-center space-x-2 hover:text-indigo-300 transition-colors"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} />
            <span>Back to Setup</span>
          </motion.button>
          
          <motion.button
            onClick={() => setShowFeedback(true)}
            className="flex items-center space-x-2 bg-gray-900 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AlertCircle size={16} />
            <span>Share Feedback</span>
          </motion.button>
        </div>
        
        <div className="h-[calc(100vh-64px)] bg-gray-700 relative">
          <motion.div 
            className="bg-gray-800 p-4 rounded-lg shadow-2xl fixed bottom-4 right-4 w-80"
            variants={chatVariants}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Test Chat</h3>
              <Bot size={20} className="text-white" />
            </div>
            
            <motion.div 
              className="h-80 bg-gray-900 rounded-lg p-4 mb-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="bg-indigo-800 text-gray-100 p-3 rounded-lg inline-block mb-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Hello! How can I help you today?
              </motion.div>
            </motion.div>
            
            <div className="flex items-center space-x-2">
              <motion.input
                type="text"
                placeholder="Type your message..."
                className="flex-1 p-2 bg-gray-800 text-white border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
              <motion.button 
                className="bg-indigo-800 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TestPreview;