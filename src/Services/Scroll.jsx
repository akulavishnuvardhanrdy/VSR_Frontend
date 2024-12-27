
import { useLocation } from 'react-router-dom';
import { useEffect} from 'react';

export const ScrollToMain = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo({ top: 1000, behavior: 'smooth' });
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