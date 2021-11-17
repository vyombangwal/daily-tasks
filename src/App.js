import "./App.css";
import React from "react";
import Index from "./Components/Index";

function App() {
  const tasks = [
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
  return (
    <div className="App h-screen bg-gray-100 font-sans">
      <Index items={tasks} />
    </div>
  );
}

export default App;
