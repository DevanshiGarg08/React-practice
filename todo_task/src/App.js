import "./App.css";
import DisplayTodos from "./components/DisplayTodos/DisplayTodos";
import TodoForm from "./components/Form/TodoForm";
import ViewTodo from "./components/EditTodo/ViewTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <TodoForm /> */}
        <Switch>
          <Route exact path="/">
            <DisplayTodos />
          </Route>
          <Route path="/create">
            <TodoForm />
          </Route>
          <Route exact path="/:id/edit">
            <EditTodo />
          </Route>
          <Route path="/:id">
            <ViewTodo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
