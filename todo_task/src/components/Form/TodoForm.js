import "./TodoForm.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      createdBy: "",
      dateOfCreation: null,
      summary: "",
      deadline: new Date(),
    };
  }

  setTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  setCreatedBy(event) {
    this.setState({
      createdBy: event.target.value,
    });
  }

  setSummary(event) {
    this.setState({
      summary: event.target.value,
    });
  }

  setDeadline(date) {
    this.setState(
      {
        deadline: date,
      },
      () => {
        console.log(`this.state.deadline`, this.state.deadline);
      }
    );
  }

  submitFormHandler(event) {
    event.preventDefault();

    if (localStorage.getItem("FORM_DATA") === null) {
      var todoList = [];
    } else {
      todoList = JSON.parse(localStorage.getItem("FORM_DATA"));
    }
    localStorage.setItem(
      "FORM_DATA",
      JSON.stringify([
        ...todoList,
        {
          ...this.state,
          dateOfCreation: new Date().toLocaleDateString(),
          id: uuidv4(),
        },
      ])
    );
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="first">
        <form onSubmit={this.submitFormHandler.bind(this)}>
          <div className="todo-form">
            <div className="todo-form__controls">
              <label>Title</label>
              <input type="text" onChange={this.setTitle.bind(this)}></input>
            </div>
            <div className="todo-form__controls">
              <label>Created By</label>
              <input
                type="text"
                onChange={this.setCreatedBy.bind(this)}
              ></input>
            </div>
            <div className="todo-form__controls">
              <label>Summary</label>
              <textarea
                rows="5"
                cols="40"
                onChange={this.setSummary.bind(this)}
              ></textarea>
            </div>
            <div className="todo-form__controls">
              <label>Deadline</label>
              <DatePicker
                selected={this.state.deadline}
                onChange={this.setDeadline.bind(this)}
              ></DatePicker>
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
                className="todo-form__actions"
                style={{ textDecoration: "none" }}
              >
                Cancel
              </Link>
              <Link
                to="/"
                className="todo-form__actions"
                style={{ textDecoration: "none" }}
                onClick={this.submitFormHandler.bind(this)}
              >
                Save
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(TodoForm);
