export class TodoContext {
  constructor() {
    this.todos = [];
    this.listeners = [];
  }

  getTodos() {
    return this.todos;
  }

  addTodo(description) {
    this.todos.push({
      id: Date.now(),
      description,
      completed: false
    });

    this.notifyListeners();
  }

  completeTodo(id) {
    this.todos = this.todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }
    })

    this.notifyListeners();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.todos));
  }
}