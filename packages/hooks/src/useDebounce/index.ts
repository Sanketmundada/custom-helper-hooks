import { useEffect, useState } from 'react';

/**
 *
 * @param value Value to be debounced
 * @param delay Delay time in ms
 * @default delay 500ms
 * @returns Debounced value
 */
const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setdebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setdebouncedValue(value);
    }, delay);

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
