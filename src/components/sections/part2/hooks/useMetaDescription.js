import { useState, useEffect } from 'react';

export const useMetaDescription = (url) => {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [isDescriptionFetched, setIsDescriptionFetched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (url && url.startsWith('http')) {
        fetchMetaDescription(url);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [url]);

  const fetchMetaDescription = async (url) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setDescription("Leading provider of innovative solutions for businesses. We help companies transform their operations through cutting-edge technology.");
      setIsDescriptionFetched(true);
    } catch (error) {
      console.error('Error fetching meta description:', error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, description, isDescriptionFetched };
};
