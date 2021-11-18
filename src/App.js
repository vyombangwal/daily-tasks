import "./App.css";
import React, { useState } from "react";
import Index from "./Components/Index";
import { TasksContextProvider } from "./Components/TaskContext";

function App() {
  const defaultTasks = [
    {
      name: "task 1",
      description: "description is mentioned here",
      isCompleted: true,
    },
    {
      name: "task 2",
      description: "description is mentioned here",
      isCompleted: true,
    },
    {
      name: "task 21",
      description: "description is mentioned here",
      isCompleted: true,
    },
    {
      name: "task 3",
      description: "description is mentioned here",
      isCompleted: true,
    },
    {
      name: "task 4",
      description: "description is mentioned here",
      isCompleted: true,
    },
    {
      name: "task 5",
      description: "description is mentioned here",
      isCompleted: false,
    },
    {
      name: "task 6",
      description: "description is mentioned here",
      isCompleted: false,
    },
  ];
  const [tasks, setTasks] = useState(defaultTasks);
  const addTaskHandler = (taskData) => {
    setTasks([taskData, ...tasks]);
  };

  return (
    <div className="App h-screen bg-gray-100 font-sans">
      <TasksContextProvider value={{ tasks: tasks, addTaskHandler }}>
        <div>
          <Index items={tasks} />
        </div>
      </TasksContextProvider>
    </div>
  );
}

export default App;
