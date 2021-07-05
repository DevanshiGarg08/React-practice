import { Component } from "react";
import { Link } from "react-router-dom";
import "./DisplayTodos.css";
import TodoItem from "./TodoItem";
class DisplayTodos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    const formData = localStorage.getItem("FORM_DATA");
    this.setState({
      todos: JSON.parse(formData),
    });
  }
  handleDelete(id) {
    const formData = localStorage.getItem("FORM_DATA");
    const data = JSON.parse(formData);
    var updatedTodos = data.filter((item) => {
      return item.id !== id;
    });

    localStorage.setItem("FORM_DATA", JSON.stringify(updatedTodos));
    this.setState({
      todos: updatedTodos,
    });
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
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleDelete={this.handleDelete.bind(this)}
              />
            );
          })}
      </div>
    );
  }
}
export default DisplayTodos;
