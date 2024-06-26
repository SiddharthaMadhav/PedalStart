import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/tasks">Launch App</Link>
      <h1>The Task Manager</h1>
      <p>Platform for users to manage day-2-day tasks</p>
    </>
  );
}
