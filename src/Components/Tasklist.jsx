import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ isCompleted, tasks }) =>
  tasks.map(
    (task, index) =>
      isCompleted === task.isCompleted && (
        <TaskItem key={index} taskIndex={index} value={task} />
      )
  );

export default TaskList;
