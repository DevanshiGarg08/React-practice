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
            {/* <div
              className="todo-item__delete"
              // onClick={() => {
              //   this.props.handleDelete(this.props.todo.id);
              //   this.openModal.bind(this);
              // }}
              onClick={this.openModal.bind(this)}
            >
              <DeleteIcon />
              <Modal
                isOpen={this.state.showModal}
                ariaHideApp={false}
                onRequestClose={this.closeModal.bind(this)}
              >
                <h2>Hello</h2>
                <div>I am a modal</div>
                <button onClick={this.closeModal.bind(this)}>close</button>
              </Modal>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(TodoItem);
