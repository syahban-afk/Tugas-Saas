class ToDo {
    constructor(task) {
        this.task = task;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}

class ToDoList {
    constructor() {
        this.todos = [];
    }

    addTask(task) {
        const newTask = new ToDo(task);
        this.todos = [...this.todos, newTask];
    }

    removeTask(index) {
        this.todos = this.todos.filter((_, i) => i !== index);
    }

    getTasks() {
        return this.todos;
    }
}

export { ToDo, ToDoList };
