import React, { useState } from "react";
import Add from "./Svg/add.svg";
import AddTask from "./AddTask";
import TaskList from "./Tasklist";

const Index = (props) => {
  const [showForm, setShowForm] = useState(false);
  const tasks = props.items;
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

          <TaskList isCompleted={false} tasks={tasks} />
        </div>
        <div className="m-4">
          <h2 className="font-bold text-left mb-4">Completed</h2>
          <TaskList isCompleted={true} tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default Index;
