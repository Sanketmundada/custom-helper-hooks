import { useCallback, useEffect, useState } from 'react';

/**
 *
 * @returns Online status (boolean)
 */
const useOnline = () => {
  const [online, setOnline] = useState(navigator.onLine);

  const changeOnlineStatus = useCallback((status: boolean) => {
    setOnline(status);
  }, []);

  useEffect(() => {
    window.addEventListener('online', () => changeOnlineStatus(true));
    window.addEventListener('offline', () => changeOnlineStatus(false));

    return () => {
      window.removeEventListener('online', () => changeOnlineStatus(true));
      window.removeEventListener('offline', () => changeOnlineStatus(false));
    };
  }, []);

  return online;
};

export default useOnline;
