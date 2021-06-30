import "./ViewTodo.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Component } from "react";
class ViewTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo: {},
    };
  }
  componentDidMount() {
    const formData = localStorage.getItem("FORM_DATA");
    const data = JSON.parse(formData);
    console.log(`data`, data);
    for (let i = 0; i < data.length; i++) {
      // console.log(this.props.match.params);
      if (data[i].id === this.props.match.params.id) {
        // console.log(this.state.todoList);
        this.setState(
          {
            todo: data[i],
          },
          () => {
            console.log(this.state.todo);
          }
        );
      }
    }

    // console.log(this.props.match.params);
  }
  render() {
    return (
      <div className="main">
        <div className="edit-todo">
          <div className="edit-todo__controls">
            <label>Title</label>
            <span>{this.state.todo.title}</span>
          </div>
          <div className="edit-todo__controls">
            <label>Created By</label>
            <span>{this.state.todo.createdBy}</span>
          </div>
          <div className="edit-todo__controls">
            <label>Date of Creation</label>
            <span>{this.state.todo.dateOfCreation}</span>
          </div>
          <div className="edit-todo__controls">
            <label>Summary</label>
            <span>{this.state.todo.summary}</span>
          </div>
          <div className="edit-todo__controls">
            <label>Deadline</label>
            <span>{this.state.todo.deadline}</span>
          </div>
          <div
            style={{
              paddingTop: 25,
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="edit-todo__actions"
            >
              Cancel
            </Link>
            <Link
              to={`/${this.props.match.params.id}/edit`}
              style={{ textDecoration: "none" }}
              className="edit-todo__actions"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewTodo);
