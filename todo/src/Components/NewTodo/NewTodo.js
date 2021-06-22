import React, { useState } from "react";
import TodoForm from "./TodoForm";
import "./NewTodo.css";
const NewTodo = ({ onAddingData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openFormHandler = () => {
    setIsOpen(true);
  };

  const closeFormHandler = () => {
    setIsOpen(false);
  };

  const addTodoHandler = (enteredTodos) => {
    const todos = {
      ...enteredTodos,
    };

    onAddingData(todos);
    setIsOpen(false);
  };

  return (
    <div className="new-todo">
      {!isOpen ? (
        <button className="new-todo__add" onClick={openFormHandler}>
          Add Todo
        </button>
      ) : (
        <TodoForm onAddTodo={addTodoHandler} onCancel={closeFormHandler} />
      )}
    </div>
  );
};

export default NewTodo;
