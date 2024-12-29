
import { useLocation } from 'react-router-dom';
import { useEffect} from 'react';

export const ScrollToMain = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo({ top: 900, behavior: 'smooth' });
    }, [location]);
  
    return null;
};


export const ScrollToBottom = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, [location]);
  
    return null;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
};