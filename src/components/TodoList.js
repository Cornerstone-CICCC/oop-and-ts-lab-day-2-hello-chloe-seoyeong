import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }
    // this.updateTodoItem = this.updateTodoItem.bind(this);
    // this.props.todoContext.subscribe(this.updateTodoItem);
  };

  // updateTodoItem(todo) {
  //   this.state.todos = todo;
  //   console.log(this.render());
  // }

  render() {
    const todoListElement = document.createElement('div');
    todoListElement.className = "todo-list";

    const todoListUlElement = document.createElement('ul');
    todoListUlElement.className = "todo-list-ul";

    this.state.todos.forEach(todo => {
      const todoItem = new TodoItem({
        todo,
        todoContext: this.props.todoContext
      })

      todoListUlElement.appendChild(todoItem.render());
    })

    todoListElement.appendChild(todoListUlElement);

    return todoListElement;
  }
}