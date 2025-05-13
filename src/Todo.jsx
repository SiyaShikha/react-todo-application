import { Input } from "./Input";
import { Tasks } from "./Tasks";

export const Todo = ({ todo, addTask, toggle }) => {
  const handleAddTask = (task) => {
    addTask(task, todo.todoId);
  };

  return (
    <div class="flex justify-center">
      <div class="block w-full max-w-md p-6 bg-cyan-50 border border-cyan-200 rounded-lg shadow-xl hover:bg-cyan-100 hover:scale-102 transition duration-300 my-4">
        <h2 class="text-center text-2xl font-sans font-semibold text-cyan-800 mb-4">
          {todo.todoName}
        </h2>
        <div class="mb-4">
          <Input onSubmit={handleAddTask} />
        </div>
        <Tasks
          tasks={todo.todoItems}
          todoId={todo.todoId}
          toggle={toggle}
        />
      </div>
    </div>
  );
};
