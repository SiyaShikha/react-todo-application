import { TaskItem } from "./TaskItem";

export const Tasks = ({ tasks, todoId, toggle, deleteTask }) => {
  return (
    <>
      <div class="text-2xl text-white mt-8">
        {tasks.map((item) => (
          <TaskItem
            {...item}
            todoId={todoId}
            key={item.taskId}
            toggle={toggle}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
};
