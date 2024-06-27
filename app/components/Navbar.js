"use client";

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "20px",
        marginBottom: "50px",
      }}
    >
      <Link href="/tasks" style={{ marginRight: "1rem" }}>
        All tasks
      </Link>
      <Link href="/newtask" style={{ marginRight: "1rem" }}>
        New tasks
      </Link>
      <Link href="/updatetasks" style={{ marginRight: "1rem" }}>
        Update tasks
      </Link>
      <Link href="/deletetasks" style={{ marginRight: "1rem" }}>
        Delete tasks
      </Link>
      <br />
    </nav>
  );
}

export default Navbar;
