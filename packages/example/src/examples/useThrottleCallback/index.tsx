import React, { useEffect, useState } from 'react';
import { useThrottleCallback } from 'custom-helper-hooks';

export const UseThrottleCallbackExample = () => {
  const [value, setValue] = useState('');

  const { throttle, ready } = useThrottleCallback((e: string) => {
    console.log(e);
  }, 500);

  useEffect(() => {
    console.log(ready);
    throttle(value);
  }, [value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input value={value} onChange={onChange} />
    </div>
  );
};
