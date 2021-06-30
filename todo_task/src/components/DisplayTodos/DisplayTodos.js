import "./DisplayTodos.css";
import TodoItem from "./TodoItem";
import { Link } from "react-router-dom";
import { Component } from "react";

class DisplayTodos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    const formData = localStorage.getItem("FORM_DATA");

    this.setState(
      {
        todos: JSON.parse(formData),
      },
      () => {
        console.log(this.state.todos);
      }
    );
  }
  render() {
    return (
      <div className="display-todos">
        <div className="display-todos__title">Create new Todos</div>
        <Link to="/create" style={{ textDecoration: "none" }}>
          <button className="display-todos__button">Create Todo</button>
        </Link>
        {this.state.todos &&
          this.state.todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
      </div>
    );
  }
}

export default DisplayTodos;
