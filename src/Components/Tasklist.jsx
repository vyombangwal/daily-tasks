import React from "react";
import TaskItem from "./TaskItem";

const Tasklist = ({ isCompleted, tasks }) => {
  const pending = tasks.map((task) => {
    return !task.isCompleted && <TaskItem value={task} />;
  });
  const completed = tasks.map((task) => {
    return task.isCompleted && <TaskItem value={task} />;
  });
  return isCompleted ? <div>{completed}</div> : <div>{pending}</div>;
};

export default Tasklist;
