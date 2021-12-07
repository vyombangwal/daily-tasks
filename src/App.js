import "./App.css";
import React, { useState } from "react";
import Index from "./Components/Index";
import { TasksContextProvider } from "./Components/TaskContext";
import Login from "./Login";

function App() {
  const apiHost = process.env.REACT_APP_apiHost;
  const [token, setToken] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoaded] = useState(true);

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
    const url = apiHost + "/api/data";

    const headers = {
      Authorization: "Bearer " + rawToken,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    fetch(url, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((response) => filterTask(response.tasks));
  };

  const filterTask = (tasksnew) => {
    var tasksNew = [];
    tasksnew.completed.map((items) =>
      tasksNew.push({
        name: items.name,
        description: items.description,
        isCompleted: true,
      })
    );
    tasksnew.pending.map((items) =>
      tasksNew.push({
        name: items.name,
        description: items.description,
        isCompleted: false,
      })
    );
    setTasks(tasksNew);
    setLoaded(false);
  };
  if (isLoading && token !== null) return <h1>Loading...</h1>;
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
