import { useFetch } from 'custom-helper-hooks';

export const UseFetchExample = () => {
  const { data, fetch, isLoading } = useFetch<
    { userId: number; id: number; title: string; body: string }[]
  >('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      hi
      <button onClick={fetch}>Click</button>
      {isLoading ? <div>Loading...</div> : JSON.stringify(data)}
    </div>
  );
};
