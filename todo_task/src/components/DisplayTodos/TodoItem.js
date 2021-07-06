import { Component } from "react";
import { withRouter } from "react-router";
import DeleteIcon from "./DeleteIcon";
import "./TodoItem.css";
import Modal from "react-modal";

// Modal.setAppElement("App");

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }
  openModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  closeModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div>
        <div className="todo-item">
          <div className="todo-item__all">
            <div
              className="todo-item__edit"
              onClick={() => {
                this.props.history.push(`/${this.props.todo.id}`);
              }}
            >
              <div className="todo-item__content">
                <label className="todo-item__label">Title</label>
                <div className="todo-item__context">
                  {this.props.todo.title}
                </div>
              </div>
              <div className="todo-item__content">
                <label className="todo-item__label">Created By</label>
                <div className="todo-item__context">
                  {this.props.todo.createdBy}
                </div>
              </div>
            </div>
            <div
              className="todo-item__delete"
              onClick={this.openModal.bind(this)}
            >
              <DeleteIcon />
              <Modal
                style={{
                  overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.3)",
                  },
                  content: {
                    position: "relative",
                    top: "50%",
                    left: "50%",
                    border: "1px solid black",
                    background: "black",

                    overflow: "auto",
                    WebkitOverflowScrolling: "touch",
                    borderRadius: "4px",
                    outline: "none",
                    padding: "20px",
                    height: 70,
                    width: 400,
                    transform: "translate(-50%,-50%)",
                  },
                }}
                isOpen={this.state.showModal}
                ariaHideApp={false}
                onRequestClose={this.closeModal.bind(this)}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      padding: "1rem",
                      fontSize: "25",
                      fontWeight: "bolder",
                      margin: "auto",
                    }}
                  >
                    Are you sure?
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <button
                      onClick={this.closeModal.bind(this)}
                      style={{
                        marginRight: "10px",
                      }}
                    >
                      cancel
                    </button>
                    <button
                      onClick={() => {
                        this.props.handleDelete(this.props.todo.id);

                        this.closeModal.bind(this);
                      }}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(TodoItem);
