import React from "react";
import { Input } from "./Input";
import { Tasks } from "./Tasks";

export const Todo = ({ todo, addTask, toggle }) => {
  const handleAddTask = (task) => {
    addTask(task, todo.todoId);
  };

  return (
    <>
      <h2>{todo.todoName}</h2>
      <Input onSubmit={handleAddTask} />
      <Tasks tasks={todo.todoItems} todoId={todo.todoId} toggle={toggle} />
    </>
  );
};
