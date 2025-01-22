import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo() {
    const todoInput = document.querySelector('#todo-input');
    const todoDesc = todoInput.value.trim();
    todoInput.value = "";

    this.props.todoContext.addTodo(todoDesc);
  }

  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `

    addElement.querySelector("#todo-add-btn").addEventListener("click", this.handleAddTodo);

    return addElement;
  }
}