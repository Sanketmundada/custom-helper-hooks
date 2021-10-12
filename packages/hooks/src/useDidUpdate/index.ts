import { useEffect, useRef } from 'react';

/**
 *
 * @param cb Function to be called on update
 * @param deps Dependency array
 * @default deps []
 */
const useDidUpdate = (cb: () => void, deps: any[] = []): void => {
  if (typeof cb !== 'function') {
    throw new Error('Callback must be a function');
  }
  if (!Array.isArray(deps)) {
    throw new Error('Deps must be an array');
  }

  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) {
      cb();
    } else {
      ref.current = true;
    }
  }, deps);
};

export default useDidUpdate;
