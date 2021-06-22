import "./App.css";
import Todos from "./Components/Todos/Todos";
import NewTodo from "./Components/NewTodo/NewTodo";
import React, { useState } from "react";

function App() {
  const [todos, addTodos] = useState([]);
  const addingDataHandler = (data) => {
    addTodos((prevTodos) => {
      return [data, ...prevTodos];
    });
  };
  return (
    <div className="App">
      <NewTodo onAddingData={addingDataHandler} />

      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
