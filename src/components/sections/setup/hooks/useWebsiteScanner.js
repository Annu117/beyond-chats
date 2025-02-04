import { useState, useEffect } from 'react';

export const useWebsiteScanner = (shouldStartScanning = false) => {
  const [scannedPercentage, setScannedPercentage] = useState(0);

  useEffect(() => {
    if (!shouldStartScanning) {
      return;
    }

    const interval = setInterval(() => {
      setScannedPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [shouldStartScanning]);

  return { scannedPercentage };
};
