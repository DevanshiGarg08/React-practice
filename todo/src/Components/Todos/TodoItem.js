import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  return <div className="todo-item">{todo.task}</div>;
};

export default TodoItem;
