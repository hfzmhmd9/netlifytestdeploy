import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  // ^^^ the sole purpose is just to tigger rerender when the pathname changed

  useEffect(() => {
    const emitter = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', emitter);

    return () => {
      window.removeEventListener('popstate', emitter);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
