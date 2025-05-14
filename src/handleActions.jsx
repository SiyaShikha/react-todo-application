const toggleTask = (todo, taskId) => {
  const updatedItems = todo.todoItems.map((task) =>
    task.taskId === taskId ? { ...task, done: !task.done } : task
  );

  return { ...todo, todoItems: updatedItems };
};

export const handleToggle = (state, todoId, taskId) => {
  const updatedTodos = state.todos.map((todo) => {
    if (todo.todoId === todoId) {
      return toggleTask(todo, taskId);
    }
    return todo;
  });

  return { ...state, todos: updatedTodos };
};

export const handleNewTodo = (state, action) => {
  return { ...state, todos: [...state.todos, action.payload] };
};

export const handleNewTask = (state, todoId, task) => {
  const updatedTodos = state.todos.map((todo) => {
    if (todo.todoId === todoId) {
      return { ...todo, todoItems: [...todo.todoItems, task] };
    }
    return todo;
  });

  return { ...state, todos: updatedTodos };
};

export const handleDeleteTask = (state, todoId, taskId) => {
  const updatedTodos = state.todos.map((todo) => {
    if (todo.todoId === todoId) {
      const remainingItems = todo.todoItems.filter((task) =>
        task.taskId !== taskId
      );
      return { ...todo, todoItems: remainingItems };
    }
    return todo;
  });

  return { ...state, todos: updatedTodos };
};
