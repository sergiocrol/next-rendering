import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Rendering Techniques</h1>
      <ul>
        <li>
          <Link href="/ssr">SSR Page</Link>
        </li>
        <li>
          <Link href="/csr">CSR Page</Link>
        </li>
        <li>
          <Link href="/ssg/1">SSG Page</Link>
        </li>
        <li>
          <Link href="/isr">ISR Page</Link>
        </li>
      </ul>
    </div>
  );
}