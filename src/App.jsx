import { useReducer } from "react";
import { Input } from "./Input";
import { Todo } from "./Todo";
import {
  handleDeleteTask,
  handleDeleteTodo,
  handleNewTask,
  handleNewTodo,
  handleToggle,
} from "./handleActions";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return handleNewTodo(state, action);

    case "DELETE_TODO":
      return handleDeleteTodo(state, action);

    case "ADD_TASK":
      const { task, todoId } = action.payload;
      return handleNewTask(state, todoId, task);

    case "DELETE_TASK": {
      const { todoId, taskId } = action.payload;
      return handleDeleteTask(state, todoId, taskId);
    }

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

  const deleteTodo = (todoId) => {
    dispatch({
      type: "DELETE_TODO",
      payload: { todoId },
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

  const deleteTask = (taskId, todoId) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { taskId, todoId },
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
        <div class="border-2 border-cyan-700 rounded-md mx-2 my-4 p-4 w-full fixed">
          <div class="w-full">
            <h1 class="text-center text-5xl font-sans font-semibold text-cyan-950 mb-8">
              Todos
            </h1>
            <Input onSubmit={addTodo} />
          </div>
        </div>

        <div class="flex justify-start gap-6 mx-4">
          {state.todos.map((todo) => (
            <div key={todo.todoId}>
              <Todo
                todo={todo}
                addTask={addTask}
                deleteTask={deleteTask}
                toggle={toggle}
                deleteTodo={deleteTodo}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todos;
