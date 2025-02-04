import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';
import PageItem from './PageItem';
import { MOCK_SCRAPED_PAGES, ANIMATION_VARIANTS } from './constants';
import { useWebsiteScanner } from './hooks/useWebsiteScanner';
import { useMetaDescription } from './hooks/useMetaDescription';

const OrganizationSetup = ({ setStep }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    websiteUrl: '',
    description: ''
  });
  const [selectedPage, setSelectedPage] = useState(null);
  const [showUrlTooltip, setShowUrlTooltip] = useState(false);
  const [scrapedPages] = useState(MOCK_SCRAPED_PAGES);

  const { loading, description, isDescriptionFetched } = useMetaDescription(formData.websiteUrl);
  const { scannedPercentage } = useWebsiteScanner(isDescriptionFetched);

  // description update when fetched
  React.useEffect(() => {
    if (description) {
      setFormData(prev => ({ ...prev, description }));
    }
  }, [description]);

  return (
    <motion.div 
      className="max-w-md w-full mx-auto"
      variants={ANIMATION_VARIANTS.container}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className="text-3xl font-bold text-center text-indigo-300 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Setup Your Organization
      </motion.h2>

      <div className="space-y-8">
        <motion.div className="space-y-4" variants={ANIMATION_VARIANTS.container}>
          <motion.div variants={ANIMATION_VARIANTS.item}>
            <input
              type="text"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={e => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:bg-gray-600"
            />
          </motion.div>

          <motion.div 
            className="relative"
            variants={ANIMATION_VARIANTS.item}
            onMouseEnter={() => setShowUrlTooltip(true)}
            onMouseLeave={() => setShowUrlTooltip(false)}
          >
            <input
              type="url"
              placeholder="Website URL"
              value={formData.websiteUrl}
              onChange={e => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:bg-gray-600"
            />
            {loading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute right-3 top-1/3"
              >
                <Loader className="animate-spin text-white" size={18} />
              </motion.div>
            )}
          </motion.div>

          <motion.div variants={ANIMATION_VARIANTS.item}>
            <textarea
              placeholder="Company Description"
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
              className={`w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:bg-gray-600 ${loading ? 'opacity-50' : 'opacity-100'}`}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="rounded-lg  p-6 bg-gray-800"
          variants={ANIMATION_VARIANTS.container}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Website Scanning Progress</h3>
            {isDescriptionFetched ? (
              <motion.div 
                className="text-sm text-indigo-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {scannedPercentage}% Scanned
              </motion.div>
            
            ) : (
              <motion.div 
                className="text-sm text-gray-400"
              >
                Waiting for description...
              </motion.div>
            )}
          </div>

          <motion.div 
            className="h-2 bg-gray-700 rounded-full mb-6 overflow-hidden"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          >
             {isDescriptionFetched && (
                <motion.div 
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${scannedPercentage}%` }}
                  transition={{ duration: 0.3 }}
                />
              )}
          </motion.div>
          {isDescriptionFetched && (
          <div className="space-y-4">
            {scrapedPages.map((page, index) => (
              <PageItem 
                key={index} 
                page={page} 
                selectedPage={selectedPage} 
                onClick={() => setSelectedPage(selectedPage?.url === page.url ? null : page)}
              />
            ))}
          </div>
          )}
        </motion.div>

        <motion.div 
          className="flex justify-end space-x-3"
          variants={ANIMATION_VARIANTS.container}
        >
          <motion.button 
            className="px-6 py-2 border rounded-lg hover:bg-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStep?.(3)}
          >
            Skip for now
          </motion.button>
          <motion.button 
            className="px-6 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStep?.(3)}
          >
            Continue
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OrganizationSetup;