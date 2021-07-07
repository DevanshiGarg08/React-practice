const todos = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            title: action.title,
            createdBy: action.createdBy,
            dateOfCreation: action.dateOfCreation,
            summary: action.summary,
            deadline: action.deadline,
          },
        ],
      };

    case "EDIT_TODO":
      return {
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return {
              id: action.id,
              title: action.title,
              createdBy: action.createdBy,
              dateOfCreation: action.dateOfCreation,
              summary: action.summary,
              deadline: action.deadline,
            };
          }
          return item;
        }),
      };
    case "DELETE_TODO":
      console.log(`action.payload`, action.payload);
      return {
        todos: state.todos.filter((item) => {
          return item.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};

export default todos;
