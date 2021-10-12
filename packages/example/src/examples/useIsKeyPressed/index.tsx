import { useIsKeyPressed } from 'custom-helper-hooks';

export const UseIsKeyPressedExample = () => {
  useIsKeyPressed('Enter', () => {
    console.log('Aao aao');
  });

  return <div>Hiii</div>;
};
