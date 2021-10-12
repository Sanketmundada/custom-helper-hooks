import React, { useState } from 'react';
import usePreviousValue from 'custom-helper-hooks/usePreviousValue';

export const UsePreviousValueExample = () => {
  const [count, setCount] = useState(0);

  const prevCount = usePreviousValue(count);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count {count} prev {prevCount}
      </button>
    </div>
  );
};
