import { I_Todo } from "../ssr/page";

export const revalidate = 20; // revalidates every 20 seconds

async function getRandomTodo() {
  const id = Math.floor(Math.random() * 200) + 1;

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo: I_Todo = await res.json();

  return todo;
}

export default async function ISRPage() {
  const todo: I_Todo = await getRandomTodo();

  return (
    <div key={todo.id}>
      <h1>ID: {todo.id}</h1>
      <h2>{todo.title}</h2>
      <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
    </div>
  );
}