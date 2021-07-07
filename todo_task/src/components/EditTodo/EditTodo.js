import "./EditTodo.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { editTodo } from "../../redux/action";
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
    const data = this.props.todos;

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
    this.props.editTodo({ ...this.state.editTodo, id: this.state.editTodo.id });
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

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editTodo: (todo) => dispatch(editTodo(todo)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditTodo));
