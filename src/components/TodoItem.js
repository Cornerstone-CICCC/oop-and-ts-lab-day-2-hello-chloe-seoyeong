import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleComplete() {
    this.props.todoContext.completeTodo(this.props.todo.id);
  }

  handleDelete() {
    this.props.todoContext.deleteTodo(this.props.todo.id);
  }

  render() {
    const todoElement = document.createElement('li');
    todoElement.className = 'todo-item';
    // const completedClass = this.props.todo.completed ? 'completed' : '';
    todoElement.classList.add('todo-itme', `${this.props.todo.completed ? 'completed' : 'incomplted'}`);

    todoElement.innerHTML = `
      <span class="todo-text">${this.props.todo.description}</span>
      <div>
        <button class="todo-complete-btn">${this.props.todo.completed ? "Mark Incompleted" : "Mark Completed"}</button>
        <button class="todo-delete-btn">Delete</button>
      </div>
    `;

    todoElement.querySelector('.todo-complete-btn').addEventListener('click', this.handleComplete);
    todoElement.querySelector('.todo-delete-btn').addEventListener('click', this.handleDelete);

    return todoElement;
  }
}