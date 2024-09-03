export interface I_Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default async function SSRPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  return (
    <div>
      {data.map((todo: I_Todo) => {
        return (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
          </div>
        );
      })} 
    </div>
  );
}