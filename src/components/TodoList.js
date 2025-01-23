import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.todoListUlElement = document.createElement('ul');
    this.updateTodoItem = this.updateTodoItem.bind(this);
    this.props.todoContext.subscribe(this.updateTodoItem);
  }

  updateTodoItem(todos) {
    this.state.todos = todos;
    this.renderTodos();

    // this.todoListUlElement.innerHTML = "";
    // this.state.todos.forEach(todo => {
    //   const todoItem = new TodoItem({
    //     todo,
    //     todoContext: this.props.todoContext
    //   });
    //   this.todoListUlElement.appendChild(todoItem.render());
    // })
  }

  renderTodos() {
    this.todoListUlElement.innerHTML = "";
    this.state.todos.forEach(todo => {
      const todoItem = new TodoItem({
        todo,
        todoContext: this.props.todoContext
      });
      this.todoListUlElement.appendChild(todoItem.render());
    })
  }

  render() {
    const todoListElement = document.createElement('div');
    todoListElement.className = 'todo-list';

    this.todoListUlElement.className = "todo-list-ul";
    this.renderTodos();

    // this.todoListUlElement.innerHTML = "";
    // this.state.todos.forEach(todo => {
    //   const todoItem = new TodoItem({
    //     todo,
    //     todoContext: this.props.todoContext
    //   });
    //   this.todoListUlElement.appendChild(todoItem.render());
    // })

    todoListElement.appendChild(this.todoListUlElement);

    return todoListElement;
  }
}