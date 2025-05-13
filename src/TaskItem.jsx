export const TaskItem = ({ task, done, taskId, todoId, toggle }) => {
  return (
    <div class="flex items-center cursor-pointer">
      <input
        class="mx-2"
        type="checkbox"
        checked={done}
        onChange={() => toggle(taskId, todoId)}
      />
      <span
        class={`${done ? "line-through text-gray-500" : "no-underline"}`}
        role="button"
        onClick={() => toggle(taskId, todoId)}
      >
        {task}
      </span>
    </div>
  );
};
