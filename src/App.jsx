import { useReducer } from "react";
import { Input } from "./Input";
import { Todo } from "./Todo";
import { handleNewTask, handleNewTodo, handleToggle } from "./handleActions";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return handleNewTodo(state, action);

    case "ADD_TASK":
      const { task, todoId } = action.payload;
      return handleNewTask(state, todoId, task);

    case "TOGGLE_TASK": {
      const { todoId, taskId } = action.payload;
      return handleToggle(state, todoId, taskId);
    }

    default:
      return state;
  }
};

const Todos = () => {
  const [state, dispatch] = useReducer(reducer, { todos: [] });

  const addTodo = (todo) => {
    dispatch({
      type: "ADD_TODO",
      payload: { todoName: todo, todoId: Date.now(), todoItems: [] },
    });
  };

  const addTask = (item, todoId) => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        todoId,
        task: { task: item, taskId: Date.now(), done: false },
      },
    });
  };

  const toggle = (taskId, todoId) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: { taskId, todoId },
    });
  };

  return (
    <>
      <div class="min-h-screen">
        <div class="border-2 border-cyan-300 rounded-md mx-2 my-4 p-4">
          <div class="w-full">
            <h1 class="text-center text-4xl font-sans font-semibold text-cyan-950 mb-4">
              Todos
            </h1>
            <Input onSubmit={addTodo} />
          </div>
        </div>

        {state.todos.map((todo) => (
          <div key={todo.todoId}>
            <Todo todo={todo} addTask={addTask} toggle={toggle} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
