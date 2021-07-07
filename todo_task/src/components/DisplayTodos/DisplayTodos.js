import { Component } from "react";
import { Link } from "react-router-dom";
import "./DisplayTodos.css";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { deleteTodo } from "../../redux/action";
class DisplayTodos extends Component {
  handleDelete(id) {
    this.props.deleteTodo(id);
  }
  render() {
    console.log(`this.props.todos`, this.props.todos);
    return (
      <div className="display-todos">
        <div className="display-todos__title">Create new Todos</div>
        <Link to="/create" style={{ textDecoration: "none" }}>
          <button className="display-todos__button">Create Todo</button>
        </Link>
        {this.props.todos &&
          this.props.todos.map((todo) => {
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
const mapStateToProps = (state) => {
  console.log(`state`, state);
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
