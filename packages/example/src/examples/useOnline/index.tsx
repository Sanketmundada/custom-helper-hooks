import React from 'react';
import { useOnline } from 'custom-helper-hooks';

export const UseOnlineExample = () => {
  const online = useOnline();

  return <div>{online ? 'Online' : 'Offline'}</div>;
};
