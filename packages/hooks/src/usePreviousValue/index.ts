import { useRef, useState } from 'react';
import useDidUpdate from '../useDidUpdate';

/**
 *
 * @param val The state whose previous value is returned
 * @returns Previous value of passed state
 */
const usePreviousValue = <T = any>(val: T) => {
  if (val === undefined) {
    throw new Error('Value parameter cannot be undefined');
  }

  const [prev, setPrev] = useState<T | null>(null);
  const ref = useRef(val);

  useDidUpdate(() => {
    setPrev(ref.current);
    ref.current = val;
  }, [val]);
  return prev;
};

export default usePreviousValue;
