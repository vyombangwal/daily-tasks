import React, { useState } from "react";
import Tasklist from "./Tasklist";
import Add from "./Svg/add.svg";
import AddTask from "./AddTask";

const Index = (props) => {
  const [showForm, setShowForm] = useState(false);
  const tasks = props.items;
  const completed = tasks.map((task) => {
    return task.isCompleted && <Tasklist value={task} />;
  });
  const pending = tasks.map((task) => {
    return !task.isCompleted && <Tasklist value={task} />;
  });
  return (
    <div className="p-12">
      <div className="justify-center">Tasks Management</div>

      <div className="justify-center flex flex-col md:flex-row">
        <div className="m-4">
          <div className="flex md:flex-row mb-4">
            <h2 className="font-bold text-left mr-2 ">To dos</h2>
            <button onClick={() => setShowForm(true)}>
              <img src={Add} alt="Add" />
            </button>
            <AddTask trigger={showForm} setTrigger={setShowForm} />
          </div>

          <div>{pending}</div>
        </div>
        <div className="m-4">
          <h2 className="font-bold text-left mb-4">Completed</h2>
          <div>{completed}</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
