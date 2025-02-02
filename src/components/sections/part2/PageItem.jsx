import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Loader, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';

const PageItem = ({ page, selectedPage, onClick }) => {
  const isSelected = selectedPage?.url === page.url;

  const statusIcons = {
    completed: <CheckCircle2 className="text-green-500" size={16} />,
    scraping: <Loader className="animate-spin text-indigo-500" size={16} />,
    pending: <AlertCircle className="text-gray-400" size={16} />
  };

  return (
    <motion.div 
      className="border rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-300 ${
          isSelected ? 'bg-gray-900' : 'hover:bg-gray-700'
        }`}
        onClick={onClick}
        whileHover={{ x: 4 }}
      >
        <div className="flex items-center space-x-3">
          <Globe size={16} className="text-gray-500" />
          <span>{page.url}</span>
          <motion.span 
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ({page.chunks.length} chunks)
          </motion.span>
        </div>
        
        <div className="flex items-center space-x-3">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {statusIcons[page.status]}
            <span className={`text-sm ${
              page.status === 'completed' ? 'text-green-500' :
              page.status === 'scraping' ? 'text-indigo-500' :
              'text-gray-400'
            }`}>
              {page.status.charAt(0).toUpperCase() + page.status.slice(1)}
            </span>
          </motion.div>
          <motion.div
            animate={{ rotate: isSelected ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isSelected && page.chunks.length > 0 && (
          <motion.div 
            className="p-4 border-t bg-gray-900"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {page.chunks.map((chunk, index) => (
              <motion.div 
                key={chunk.id} 
                className="p-3 rounded-lg border border-gray-700 mb-2 bg-gray-800"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-xs font-medium px-2 py-1 bg-indigo-100 text-indigo-700 rounded">
                  {chunk.type}
                </span>
                <p className="text-sm text-gray-300 mt-2">{chunk.content}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PageItem;