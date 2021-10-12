import { useRef, useState } from 'react';

/**
 *
 * @param fn Function to be throttled
 * @param delay Delay time in ms
 * @default delay 500ms
 * @returns Throttled function
 */
const useThrottleCallback = <T extends (...args: any[]) => ReturnType<T>>(
  fn: T,
  delay = 500
) => {
  if (typeof delay !== 'number') {
    throw new Error('Delay is not a number');
  }

  if (typeof fn !== 'function') {
    throw new Error('fn is not a function');
  }

  const [ready, setReady] = useState(false);
  const timeout = useRef(null);
  const argsRef = useRef(null);

  const throttle = (...args) => {
    if (timeout.current) {
      argsRef.current = args;
      setReady(false);
      return;
    }

    timeout.current = setTimeout(() => {
      console.log('Inside timeout');
      if (argsRef.current) fn(...argsRef.current);
      else fn(...args);
      timeout.current = null;
      setReady(true);
    }, delay);
  };

  return { throttle, ready };
};

export default useThrottleCallback;
