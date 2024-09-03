export const revalidate = 10; // revalidate this page every 10 seconds

async function getCurrentTime() {
  // This could be an api request
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return new Date().toLocaleTimeString();
}

export default async function Home() {
  const time = await getCurrentTime();

  return (
    <div>
      <h1>ISR Example</h1>
      <p>Current time: {time}</p>
      <p>This page revalidates every 20 seconds</p>
    </div>
  );
}