import { Component } from "../common/Component.js";
import { AddTodo } from "./AddTodo.js";
import { TodoList } from "./TodoList.js";

export class App extends Component {
  render() {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
      <h1>My To Dos</h1>
      <div id="wrapper-add"></div>
      <div id="wrapper-todos"></div>
    `;

    const add = new AddTodo({
      todoContext: this.props.todoContext
    }).render();
    const todosList = new TodoList({
      todoContext: this.props.todoContext
    }).render();

    container.querySelector('#wrapper-add').appendChild(add);
    container.querySelector('#wrapper-todos').appendChild(todosList);

    return container;
  }
}