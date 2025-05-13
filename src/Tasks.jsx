import { TaskItem } from "./TaskItem";

export const Tasks = ({ tasks, todoId, toggle }) => {
  return (
    <>
      <div class="text-l mt-8">
        {tasks.map((item) => (
          <TaskItem
            {...item}
            todoId={todoId}
            key={item.taskId}
            toggle={toggle}
          />
        ))}
      </div>
    </>
  );
};
