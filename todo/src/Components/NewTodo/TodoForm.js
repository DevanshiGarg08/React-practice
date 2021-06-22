import React, { useState } from "react";
import "./TodoForm.css";
const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const changeTodoHandler = (event) => {
    setTodo(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const todoData = {
      task: todo,
      id: Math.random(),
    };
    props.onAddTodo(todoData);
    setTodo("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="todo-form">
        <div className="todo-form__controls">
          <label>Todos</label>
          <input type="text" value={todo} onChange={changeTodoHandler}></input>
        </div>
        <div>
          <button
            className="todo-form__actions"
            type="button"
            onClick={props.onCancel}
          >
            Cancel
          </button>
          <button className="todo-form__actions" type="submit">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
