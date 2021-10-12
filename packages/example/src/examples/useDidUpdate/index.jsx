import React from 'react';
import { useState } from 'react';
import { useDidUpdate } from 'custom-helper-hooks';

export const UseDidUpdateExample = () => {
  const [count, setCount] = useState(0);

  useDidUpdate(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count {count}
      </button>
    </div>
  );
};
