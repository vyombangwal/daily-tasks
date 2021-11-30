import "./App.css";
import React, { useState } from "react";
import Index from "./Components/Index";
import { TasksContextProvider } from "./Components/TaskContext";
import Login from "./Login";

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
  const [token, setToken] = useState(null);
  const [tasks, setTasks] = useState(defaultTasks);
  const addTaskHandler = (taskData) => {
    setTasks([taskData, ...tasks]);
  };
  const editTaskHandler = (taskdata, taskIndex) => {
    let tasksNew = [...tasks];
    if (taskIndex !== -1) {
      tasksNew.splice(taskIndex, 1);
      setTasks([taskdata, ...tasksNew]);
    }
  };
  const deleteTaskHandler = (taskIndex) => {
    let tasksNew = [...tasks];
    if (taskIndex !== -1) {
      tasksNew.splice(taskIndex, 1);
      setTasks([...tasksNew]);
    }
  };
  const updateTokenHandler = (rawToken) => {
    rawToken === undefined ? setToken(null) : setToken(rawToken);
    const url = "http://daily-tasks.test/api/data";
    const auth = "Bearer " + rawToken;
    const headers = {
      Authorization: auth,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    fetch(url, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  return (
    <div className="App h-screen bg-gray-100 font-sans">
      <TasksContextProvider
        value={{
          tasks: tasks,
          addTaskHandler,
          editTaskHandler,
          deleteTaskHandler,
          updateTokenHandler,
        }}
      >
        {token === null ? <Login /> : <Index items={tasks} />}
      </TasksContextProvider>
    </div>
  );
}

export default App;
