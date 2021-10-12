import { useState } from 'react';
import { useRenderCount } from 'custom-helper-hooks';

export const UseRenderCountExample = () => {
  useRenderCount('count');
  const [state, setState] = useState(0);

  return (
    <>
      <div>{state}</div>
      <button
        onClick={() => {
          setState((prev) => prev + 1);
        }}
      >
        {`+`}
      </button>
      <button
        onClick={() => {
          setState((prev) => prev - 1);
        }}
      >
        {`-`}
      </button>
    </>
  );
};
