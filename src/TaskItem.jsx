export const TaskItem = ({ task, done, taskId, todoId, toggle }) => {
  return (
    <div class="flex items-center cursor-pointer">
      <input
        class="mx-2 w-4 h-4"
        type="checkbox"
        checked={done}
        onChange={() => toggle(taskId, todoId)}
      />
      <span
        class={`${done ? "line-through text-slate-200" : "no-underline"}`}
        role="button"
        onClick={() => toggle(taskId, todoId)}
      >
        {task}
      </span>
    </div>
  );
};
