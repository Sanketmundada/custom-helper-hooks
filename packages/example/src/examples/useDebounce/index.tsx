import React, { useState } from 'react';
import { useDebounce } from 'custom-helper-hooks';

export const UseDebounceExample = () => {
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 500);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input value={value} onChange={onChange} />
      {debouncedValue}
    </div>
  );
};
