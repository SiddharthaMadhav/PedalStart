"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Task from "@/app/components/tasks";
import Link from "next/link";

export default function UpdateTasks() {
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

  return (
    <>
      <Navbar />
      <br />
      {tasks.map((task) => (
        <Link href={`/updatetasks/${task.id}`}>
          <Task children={task} />
        </Link>
      ))}
    </>
  );
}
