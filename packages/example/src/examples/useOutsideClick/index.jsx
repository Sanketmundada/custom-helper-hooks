import { useOutsideClick } from 'custom-helper-hooks';

export const UseOutsideClickExample = () => {
  const domRef = useOutsideClick(() => {
    console.log('outside click');
  });

  return (
    <>
      <div ref={domRef}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        maxime sapiente magni pariatur fugiat enim vel sunt odio repellendus
        voluptas, maiores quisquam commodi deserunt libero sed? Molestias,
        repellat! Tempore, quae!
      </div>
      <button>Click</button>
    </>
  );
};
