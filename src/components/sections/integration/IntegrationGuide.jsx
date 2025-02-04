import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Mail, X } from 'lucide-react';

const IntegrationGuide = ({ isOpen, onClose }) => {
  const integrationCode = `
<!-- BeyondChats Widget -->
<script>
  window.beyondChatsConfig = {
    widgetId: "YOUR_WIDGET_ID",
    position: "bottom-right",
  }
</script>
<script async src="https://cdn.beyondchats.com/widget.js"></script>
  `.trim();

  const modalVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(integrationCode);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-900 rounded-lg p-6 max-w-2xl w-full relative shadow-2xl"
          variants={modalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <motion.h3 
              className="text-xl font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Integration Instructions
            </motion.h3>
            <motion.button
              onClick={onClose}
              className="text-gray-500 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
          </div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p>Add the following code to your website's <code>&lt;head&gt;</code> section:</p>
            
            <div className="bg-gray-800 p-4 rounded-lg relative group">
              <pre className="text-sm overflow-x-auto font-mono">{integrationCode}</pre>
              <motion.button 
                onClick={copyToClipboard}
                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Copy size={16} />
              </motion.button>
            </div>

            <div className="flex justify-end space-x-4 mt-8">
              <motion.button
                onClick={onClose}
                className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
              
              <motion.button
                onClick={() => {
                  onClose();
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center space-x-2 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={16} />
                <span>Email to Developer</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntegrationGuide;