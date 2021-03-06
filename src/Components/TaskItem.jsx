import React, { useState, useContext } from "react";
import Card from "./Card";
import "./Card.css";
import Uncheck from "./Svg/uncheck.svg";
import Check from "./Svg/checked.svg";
import Edit from "./Svg/edit.svg";
import Delete from "./Svg/delete.svg";

import EditTask from "./EditTask";
import TasksContext from "./TaskContext";

const TaskItem = ({ value, taskIndex }) => {
  const { deleteTaskHandler, updateStatusHandler } = useContext(TasksContext);

  const [showForm, setShowForm] = useState(false);
  const statusChangeHandler = (event) =>
    updateStatusHandler(
      {
        name: value.name,
        description: value.description,
        isCompleted: !value.isCompleted,
        id: value.id,
      },
      taskIndex
    );
  const deleteChangeHandler = (event) => deleteTaskHandler(taskIndex);

  return (
    <Card className="bg-white p-4 ">
      <div className="grid grid-rows grid-cols-5">
        <div className="row-span-2 col-span-3 p-2 text-left text-gray-400">
          <div className="text-2xl ">{value.name}</div>

          <div>{value.description}</div>
        </div>
        <div className="col-span-2 p-2 items-center flex">
          <button onClick={() => setShowForm(true)}>
            <img className="h-12 p-2" src={Edit} alt="edit" />
          </button>
          <button className="p-1" onClick={deleteChangeHandler}>
            <img src={Delete} alt="delete" />
          </button>
          <EditTask
            trigger={showForm}
            setTrigger={setShowForm}
            name={value.name}
            isCompleted={value.isCompleted}
            prevDescription={value.description}
            index={taskIndex}
            id={value.id}
          />

          {value.isCompleted ? (
            <button className="p-1" onClick={statusChangeHandler}>
              <img src={Check} alt="check" />
            </button>
          ) : (
            <button onClick={statusChangeHandler}>
              <img src={Uncheck} alt="Uncheck" />
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TaskItem;
