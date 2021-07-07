export const addTodo = (todo) => {
  console.log(`todo`, todo);
  return {
    type: "ADD_TODO",
    // payload: todo,
    id: todo.id,
    title: todo.title,
    createdBy: todo.createdBy,
    dateOfCreation: todo.dateOfCreation,
    summary: todo.summary,
    deadline: todo.deadline,
  };
};

export const editTodo = (todo) => {
  return {
    type: "EDIT_TODO",
    id: todo.id,
    title: todo.title,
    createdBy: todo.createdBy,
    dateOfCreation: todo.dateOfCreation,
    summary: todo.summary,
    deadline: todo.deadline,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};
