import TodoItem from "./TodoItem";
import "./Todo.css";
const Todos = ({ todos }) => {
  return (
    <div
      className="todos"
      style={{ padding: todos.length > 0 ? "1rem" : "0rem" }}
    >
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id}></TodoItem>;
      })}
    </div>
  );
};

export default Todos;
