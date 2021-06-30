import "./TodoItem.css";
import { Link } from "react-router-dom";
const TodoItem = (props) => {
  return (
    <Link to={`/${props.todo.id}`} style={{ textDecoration: "none" }}>
      <div className="todo-item">
        <div className="todo-item__content">
          <label className="todo-item__label">Title</label>
          <div className="todo-item__context">{props.todo.title}</div>
        </div>
        <div className="todo-item__content">
          <label className="todo-item__label">Created By</label>
          <div className="todo-item__context">{props.todo.createdBy}</div>
        </div>
      </div>
    </Link>
  );
};

export default TodoItem;
