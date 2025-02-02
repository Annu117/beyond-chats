import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, MessageSquare, Bot, Code } from 'lucide-react';
import TestPreview from './TestPreview';
import IntegrationGuide from './IntegrationGuide';
import SuccessView from './SuccessView';
import TestingView from './TestingView';
import { fadeIn, slideUp } from './animations';

const IntegrationStep = () => {
  const [showTestPreview, setShowTestPreview] = useState(false);
  const [showIntegrationCode, setShowIntegrationCode] = useState(false);
  const [testingStatus, setTestingStatus] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const startTesting = () => {
    setTestingStatus('testing');
    setTimeout(() => {
      setTestingStatus('success');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    }, 3000);
  };

  return (
    <motion.div 
      className="max-w-2xl w-full mx-auto p-6"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <motion.h2 
        className="text-3xl font-bold text-center text-indigo-300 mb-8"
        variants={slideUp}
      >
        Test & Integration
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        variants={fadeIn}
      >
        <ActionCard 
          title="Test Chatbot"
          description="Preview how chatbot will look and function on the website"
          icon={<Bot size={18} />}
          onClick={() => setShowTestPreview(true)}
        />

        <ActionCard 
          title="Integration"
          description="Get the code snippet to add the chatbot to your website"
          icon={<Code size={18} />}
          onClick={() => setShowIntegrationCode(true)}
        />
      </motion.div>

      <div className="space-y-6">
        {testingStatus === null && (
          <motion.button 
            onClick={startTesting}
            className="w-full bg-indigo-500 text-white p-4 rounded-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Settings size={18} className="animate-spin-slow" />
            <span>Test Integration</span>
          </motion.button>
        )}

        {testingStatus === 'testing' && <TestingView />}
        {testingStatus === 'success' && <SuccessView showConfetti={showConfetti} />}
      </div>

      {showTestPreview && <TestPreview onClose={() => setShowTestPreview(false)} />}
      {showIntegrationCode && (
        <IntegrationGuide 
          isOpen={showIntegrationCode} 
          onClose={() => setShowIntegrationCode(false)} 
        />
      )}
    </motion.div>
  );
};

const ActionCard = ({ title, description, icon, onClick }) => (
  <motion.div 
    className="p-6 bg-gray-900 rounded-lg hover:shadow-xl transition-all duration-300"
    whileHover={{ scale: 1.02, y: -5 }}
    whileTap={{ scale: 0.98 }}
  >
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">{description}</p>
    <button 
      onClick={onClick}
      className="w-full bg-indigo-600 text-sm text-white p-3 rounded-lg hover:bg-indigo-700 flex items-center justify-center space-x-2 transition-all duration-300"
    >
      {icon}
      <span>Launch</span>
    </button>
  </motion.div>
);

export default IntegrationStep;