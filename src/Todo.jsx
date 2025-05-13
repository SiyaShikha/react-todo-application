import { Input } from "./Input";
import { Tasks } from "./Tasks";

export const Todo = ({ todo, addTask, toggle }) => {
  const handleAddTask = (task) => {
    addTask(task, todo.todoId);
  };

  return (
    <div className="flex justify-center">
      <div className="block w-full max-w-md p-6 bg-cyan-50 border border-cyan-200 rounded-lg shadow-lg hover:bg-cyan-100 hover:shadow-xl transition duration-300 my-4">
        <h2 className="text-center text-2xl font-sans font-semibold text-cyan-800 mb-4">
          {todo.todoName}
        </h2>
        <div className="mb-4">
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
