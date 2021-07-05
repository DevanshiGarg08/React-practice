import "./TodoItem.css";
import { Link } from "react-router-dom";
import DeleteIcon from "./DeleteIcon";
const TodoItem = (props) => {
  const onDeleteHandler = () => {
    console.log(`props.todo`, props.todo);
  };
  return (
    <div>
      <div className="todo-item">
        <Link to={`/${props.todo.id}`} style={{ textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="todo-item__content">
                <label className="todo-item__label">Title</label>
                <div className="todo-item__context">{props.todo.title}</div>
              </div>
              <div className="todo-item__content">
                <label className="todo-item__label">Created By</label>
                <div className="todo-item__context">{props.todo.createdBy}</div>
              </div>
            </div>
            <DeleteIcon onClick={onDeleteHandler} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TodoItem;
