"use client";
import React from "react";

export default function Tasks({ children }) {
  return (
    <>
      <h1>{children.title}</h1>
      <p>{children.description}</p>
      <p>{children.dueDate}</p>
    </>
  );
}
