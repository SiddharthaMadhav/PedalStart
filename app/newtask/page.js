"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  async function formSubmit(event) {
    event.preventDefault();
    console.log(title + " " + description + " " + date);
    /*API calls needed here*/
    router.push("/tasks");
  }

  return (
    <div>
      <Navbar />
      <div>{title}</div>
      <div>{description}</div>
      <div>{date}</div>
      <form onSubmit={formSubmit}>
        <label for="title">Title:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <label for="description">Description:</label>
        <br />
        <textarea
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <label for="duedate">Due Date:</label>
        <br />
        <input
          type="date"
          name="duedate"
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
