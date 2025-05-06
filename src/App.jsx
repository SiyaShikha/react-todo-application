import React, { useState } from "react";

const Input = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAdd = () => {
    if (value === "") return;
    onSubmit(value);
    setValue("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter..."
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

const TaskItem = ({ task, done, taskId, toggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={done}
        onChange={() => toggle(taskId)}
      />
      <span style={{ textDecoration: done ? "line-through" : "none" }}>
        {task}
      </span>
    </div>
  );
};

const Tasks = ({ tasks, toggle }) => {
  return (
    <>
      {tasks.map((item) => (
        <TaskItem {...item} key={item.taskId} toggle={toggle} />
      ))}
    </>
  );
};

const Todo = ({ todo, addTask, toggle }) => {
  const handleAddTask = (task) => {
    addTask(task, todo.todoId);
  };

  return (
    <>
      <h2>{todo.todoName}</h2>
      <Input onSubmit={handleAddTask} />
      <Tasks tasks={todo.todoItems} toggle={toggle} />
    </>
  );
};

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = { todoName: todo, todoId: Date.now(), todoItems: [] };
    setTodos([...todos, newTodo]);
  };

  const addTask = (item, todoId) => {
    const task = { task: item, taskId: Date.now(), done: false };
    const updatedTodos = todos.map((todo) =>
      todo.todoId === todoId
        ? { ...todo, todoItems: [...todo.todoItems, task] }
        : todo
    );
    setTodos(updatedTodos);
  };

  const toggle = (taskId, todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.todoId === todoId) {
        const updatedTasks = todo.todoItems.map((task) =>
          task.taskId === taskId ? { ...task, done: !task.done } : task
        );
        return { ...todo, todoItems: updatedTasks };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Todos</h1>
      <Input onSubmit={addTodo} />
      {todos.map((todo) => (
        <div key={todo.todoId}>
          <Todo todo={todo} addTask={addTask} toggle={toggle} />
        </div>
      ))}
    </>
  );
};

export default Todos;
