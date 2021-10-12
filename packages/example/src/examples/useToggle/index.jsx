import { useToggle } from 'custom-helper-hooks';

export const UseToggleExample = () => {
  const { state: value, toggle, setFalse, setTrue } = useToggle(false);
  return (
    <div>
      {value ? 'loading' : 'not loading'}
      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Truthy</button>
      <button onClick={setFalse}>Falsy</button>
    </div>
  );
};
