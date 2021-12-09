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

  const addTaskHandler = async (taskData) => {
    const url = apiHost + "/api/task/store";
    const headers = {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    let body = {
      taskname: taskData.name,
      taskdescription: taskData.description,
    };

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((response) => response);
    updateTokenHandler(token, response);
  };
  const editTaskHandler = (taskdata, taskIndex) => {
    let tasksNew = [...tasks];
    if (taskIndex !== -1) {
      tasksNew.splice(taskIndex, 1);
      setTasks([taskdata, ...tasksNew]);
    }
    const id = taskdata.id;
    const url = apiHost + "/api/task/update/" + id;
    const headers = {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    let body = {
      taskname: taskdata.name,
      taskdescription: taskdata.description,
    };

    fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }).then((response) => response.json());
  };
  const deleteTaskHandler = (taskIndex) => {
    let tasksNew = [...tasks];
    if (taskIndex !== -1) {
      tasksNew.splice(taskIndex, 1);
      setTasks([...tasksNew]);
    }
  };

  const updateStatusHandler = (taskdata, taskIndex) => {
    let tasksNew = [...tasks];
    if (taskIndex !== -1) {
      tasksNew.splice(taskIndex, 1);
      setTasks([taskdata, ...tasksNew]);
    }
    const id = taskdata.id;
    var url;
    if (taskdata.isCompleted) url = apiHost + "/api/task/completed/" + id;
    else url = apiHost + "/api/task/pending/" + id;

    const headers = {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    fetch(url, {
      method: "GET",
      headers,
    }).then((response) => response.json());
  };
  const updateTokenHandler = (rawToken, res) => {
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
    setLoaded(true);
  };

  const filterTask = (tasksnew) => {
    var tasksNew = [];
    tasksnew.completed.map((items) =>
      tasksNew.push({
        name: items.name,
        description: items.description,
        isCompleted: true,
        id: items.id,
      })
    );
    tasksnew.pending.map((items) =>
      tasksNew.push({
        name: items.name,
        description: items.description,
        isCompleted: false,
        id: items.id,
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
          updateStatusHandler,
        }}
      >
        {token === null ? <Login /> : <Index items={tasks} />}
      </TasksContextProvider>
    </div>
  );
}

export default App;
