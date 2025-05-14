export const TaskItem = (
  { task, done, taskId, todoId, toggle, deleteTask },
) => {
  return (
    <div class="flex items-center justify-between cursor-pointer leading-10 w-full">
      <div>
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
      <div
        class="text-slate-300 justify-end font-mono"
        onClick={() => deleteTask(taskId, todoId)}
      >
        x
      </div>
    </div>
  );
};
