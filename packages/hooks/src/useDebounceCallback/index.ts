import { useEffect, useRef } from 'react';

/**
 *
 * @param fn Callback function to be debounced
 * @param delay delay time in ms
 * @returns Debounced function
 */
const useDebounceCallback = <T extends (...args: any[]) => ReturnType<T>>(
  fn: T,
  delay = 500
) => {
  if (typeof delay !== 'number') {
    throw new Error('Delay is not a number');
  }

  if (typeof fn !== 'function') {
    throw new Error('fn is not a function');
  }

  const timeout = useRef(null);

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout.current);
    };
  });

  const debounce = (...args) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
  return debounce;
};

export default useDebounceCallback;
