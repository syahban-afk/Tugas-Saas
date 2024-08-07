import { ToDoList } from './todo.js';
import { displayTasks } from './display.js';

const todoList = new ToDoList();

document.getElementById('add-todo').addEventListener('click', () => {
    const taskInput = document.getElementById('todo-input');
    const task = taskInput.value;

    if (task) {
        todoList.addTask(task);
        taskInput.value = '';
        displayTasks(todoList.getTasks());
    }
});

document.getElementById('todo-list').addEventListener('click', async (event) => {
    const { target } = event;
    if (target.className === 'toggle') {
        const index = target.dataset.index;
        const tasks = todoList.getTasks();
        tasks[index].toggleComplete();
        displayTasks(tasks);
    }

    if (target.className === 'remove') {
        const index = target.dataset.index;
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate async operation
        todoList.removeTask(parseInt(index)); // Menghapus tugas dari daftar
        displayTasks(todoList.getTasks());
    }
});
