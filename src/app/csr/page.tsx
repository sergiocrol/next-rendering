'use client';

import { useState, useEffect } from 'react';

import { I_Todo } from '../ssr/page';

export default function CSRPage() {
  const [data, setData] = useState<I_Todo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <p>Loading...</p>;

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