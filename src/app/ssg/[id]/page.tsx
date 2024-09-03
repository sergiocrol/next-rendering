import { I_Todo } from "../../ssr/page";

const ids = [1, 2, 3, 4, 5];

export async function generateStaticParams() {
  return ids.map((id) => ({ params: { id } }));
}

export default async function SSGPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  const data: I_Todo = await res.json();

  return (
    <div key={data.id}>
      <h2>{data.title}</h2>
      <p>{data.completed ? 'Completed' : 'Not completed'}</p>
    </div>
  );
}
