// useGATracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useGATracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-24Y6PXGHTE', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}
