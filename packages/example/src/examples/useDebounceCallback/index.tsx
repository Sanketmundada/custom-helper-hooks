import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDebounceCallback } from 'custom-helper-hooks';

export const UseDebounceCallbackExample = () => {
  const [value, setValue] = useState('');

  const apiCall = useDebounceCallback((e: string) => {
    console.log(e);
  }, 500);

  useEffect(() => {
    apiCall(value);
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
