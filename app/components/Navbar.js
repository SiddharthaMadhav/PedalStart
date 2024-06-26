"use client";

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href="/tasks">All tasks</Link>
      <Link href="/newtask">New tasks</Link>
      <Link href="/updatetasks">Update tasks</Link>
      <Link href="/deletetasks">Delete tasks</Link>
    </nav>
  );
}

export default Navbar;
