export class TodoContext {
  constructor() {
    this.todos = [];
    this.listeners = [];
  }

  getTodo() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push({
      id: Date.now(),
      description: todo,
      completed: false
    })

    this.notifyListeners();
  }

  completeTodo(id) {
    console.log(id);

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

