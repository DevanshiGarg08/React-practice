import "./EditTodo.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class EditTodo extends Component {
  constructor() {
    super();
    this.state = {
      editTodo: {
        title: "",
        createdBy: "",
        dateOfCreation: null,
        summary: "",
        deadline: "",
      },
    };
  }
  componentDidMount() {
    const formData = localStorage.getItem("FORM_DATA");
    const data = JSON.parse(formData);
    console.log(`data`, data);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === this.props.match.params.id) {
        this.setState(
          {
            editTodo: data[i],
          },
          () => {
            console.log(this.state.editTodo);
          }
        );
      }
    }
  }

  setUpdatedTitle(event) {
    this.setState({
      editTodo: {
        ...this.state.editTodo,
        title: event.target.value,
      },
    });
  }

  setUpdatedCreatedBy(event) {
    this.setState({
      editTodo: {
        ...this.state.editTodo,
        createdBy: event.target.value,
      },
    });
  }

  setUpdatedSummary(event) {
    this.setState({
      editTodo: {
        ...this.state.editTodo,
        summary: event.target.value,
      },
    });
  }

  setUpdatedDeadline(event) {
    this.setState({
      editTodo: {
        ...this.state.editTodo,
        deadline: event.target.value,
      },
    });
  }

  async onSubmitHandler() {
    console.log(this.state.editTodo);
    const formData = localStorage.getItem("FORM_DATA");
    const data = JSON.parse(formData);
    console.log(`data`, data);
    var updatedTodos = data.map((item) => {
      if (item.id === this.props.match.params.id) {
        return this.state.editTodo;
      }
      return item;
    });
    console.log(`updatedTodos`, updatedTodos);
    localStorage.setItem("FORM_DATA", JSON.stringify(updatedTodos));
  }

  render() {
    return (
      <div className="first">
        <form>
          <div className="todo-form">
            <div className="todo-form__controls">
              <label>Title</label>
              <input
                type="text"
                value={this.state.editTodo.title}
                onChange={this.setUpdatedTitle.bind(this)}
              ></input>
            </div>
            <div className="todo-form__controls">
              <label>Created By</label>
              <input
                type="text"
                value={this.state.editTodo.createdBy}
                onChange={this.setUpdatedCreatedBy.bind(this)}
              ></input>
            </div>
            <div className="todo-form__controls">
              <label>Summary</label>
              <textarea
                rows="5"
                cols="40"
                value={this.state.editTodo.summary}
                onChange={this.setUpdatedSummary.bind(this)}
              ></textarea>
            </div>
            <div className="todo-form__controls">
              <label>Deadline</label>
              <input
                type="text"
                value={this.state.editTodo.deadline}
                onChange={this.setUpdatedDeadline.bind(this)}
              ></input>
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
                onClick={this.onSubmitHandler.bind(this)}
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

export default withRouter(EditTodo);
