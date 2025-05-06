import React from "react";
import { TaskItem } from "./TaskItem";

export const Tasks = ({ tasks, todoId, toggle }) => {
  return (
    <>
      {tasks.map((item) => (
        <TaskItem {...item} todoId={todoId} key={item.taskId} toggle={toggle} />
      ))}
    </>
  );
};
