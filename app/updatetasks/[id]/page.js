"use client";

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ModifyTask({ params }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();
  useEffect(() => {
    fetchTasks();
  }, []);
  let newtasks = tasks.slice();
  const id = params.id;
  let t, d, da;

  const fetchTasks = async () => {
    const response = await axios.get("/api");
    setTasks(response.data.tasks);
    console.log(response.data.tasks);
    console.log("id: " + id);
    t = response.data.tasks[id - 1].title;
    d = response.data.tasks[id - 1].description;
    da = response.data.tasks[id - 1].dueDate;
  };

  async function formSubmit(event) {
    event.preventDefault();
    console.log(title + " " + description + " " + date);
    newtasks[id - 1].title = title;
    newtasks[id - 1].description = description;
    newtasks[id - 1].dueDate = date;
    setTasks(newtasks);
    console.log(newtasks);

    /*API calls needed here*/
    router.push("/tasks");
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <label for="title">Title:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={t}
          contentEditable="true"
          required
        />
        <br />
        <label for="description">Description:</label>
        <br />
        <textarea
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={d}
          contentEditable="true"
          required
        />
        <br />
        <label for="duedate">Due Date:</label>
        <br />
        <input
          type="date"
          name="duedate"
          onChange={(e) => setDate(e.target.value)}
          value={da}
          contentEditable="true"
          required
        />
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}
