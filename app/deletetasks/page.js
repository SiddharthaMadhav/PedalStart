"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Task from "@/app/components/tasks";
import Link from "next/link";

export default function DeleteTasks() {
  const [tasks, setTasks] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get("/api");
    setTasks(response.data.tasks);
    console.log(response);
  };

  async function divDelete(e) {
    const newtasks = tasks.filter((t) => t.id != e.currentTarget.id);
    const response = await axios.delete("/api", e.currentTarget.id);
    setTasks(newtasks);
    console.log(newtasks);
  }

  return (
    <>
      <Navbar />
      <br />
      {tasks.map((task) => (
        <div id={task.id} onClick={divDelete}>
          <Task children={task} />
        </div>
      ))}
    </>
  );
}
