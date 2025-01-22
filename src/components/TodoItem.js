import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super();
    this.props = props;
    // this.state = { todos: [] };
  };

  

  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"
    todoElement.innerHTML = `
      ${this.props.todo.description}
      <button id="todo-complete-btn">Mark Complete</button>
      <button id="todo-delete-btn">Delete To Do</button>
    `;

    const completeBtn = todoElement.querySelector('#todo-complete-btn').addEventListener('click', this.handleComplete);

    const deleteBtn = todoElement.querySelector('#todo-delete-btn').addEventListener('click', this.handleDelete);

    return todoElement;
  }
}