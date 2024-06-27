import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link
        href="/tasks"
        style={{
          display: "flex",
          justifyContent: "right",
          marginTop: "20px",
          marginRight: "20px",
        }}
      >
        Launch App
      </Link>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          fontSize: "100px",
        }}
      >
        The Task Manager
      </h1>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          fontSize: "60px",
        }}
      >
        Platform for users to manage day-2-day tasks
      </p>
    </>
  );
}
