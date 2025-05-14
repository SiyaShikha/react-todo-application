import { Input } from "./Input";
import { Tasks } from "./Tasks";

export const Todo = ({ todo, addTask, toggle }) => {
  const handleAddTask = (task) => {
    addTask(task, todo.todoId);
  };

  return (
    <div class="flex justify-center">
      <div class="block max-w-md p-6 bg-gradient-to-r from-cyan-600 to-cyan-900 border border-cyan-950 rounded-lg shadow-md shadow-cyan-950 hover:from-cyan-500 hover:to-cyan-700 hover:scale-102 transition duration-300 mt-54 w-600 h-170 overflow-scroll">
        <h2 class="text-center text-4xl font-sans font-semibold text-white mb-4">
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
