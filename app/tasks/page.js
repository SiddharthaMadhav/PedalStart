"use client";

import React from "react";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Task from "../components/tasks";

const Tasks = () => {
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
      <h1>Tasks</h1>
      <br />

      <br />
      {tasks.map((task) => (
        <Task children={task} />
      ))}
    </>
  );
};

export default Tasks;
