import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ isCompleted, tasks }) => {
  const pending = tasks.map((task, index) => {
    return (
      !task.isCompleted && (
        <TaskItem key={index} taskIndex={index} value={task} />
      )
    );
  });
  const completed = tasks.map((task, index) => {
    return (
      task.isCompleted && (
        <TaskItem key={index} taskIndex={index} value={task} />
      )
    );
  });
  return isCompleted ? <div>{completed}</div> : <div>{pending}</div>;
};

export default TaskList;
