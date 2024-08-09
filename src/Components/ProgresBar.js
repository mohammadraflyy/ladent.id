import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProgressBar from '@badrap/bar-of-progress';

const progress = new ProgressBar({
  size: 4,
  color: '#483771',
  className: 'z-50',
  delay: 50,
});

const ProgressBarComponent = () => {
  const location = useLocation();

  useEffect(() => {
    progress.start();
    setTimeout(() => {
        progress.finish();
    }, 1000);
  }, [location]);

  return null;
};

export default ProgressBarComponent;