import React from "react";

export const TaskItem = ({ task, done, taskId, todoId, toggle }) => {
  return (
    <div>
      {
        /* <input
        type="checkbox"
        checked={done}
        onChange={() => toggle(taskId, todoId)}
      /> */
      }
      <span
        style={{
          textDecoration: done ? "line-through" : "none",
          cursor: "pointer",
        }}
        role="button"
        onClick={() => toggle(taskId, todoId)}
      >
        {task}
      </span>
    </div>
  );
};
