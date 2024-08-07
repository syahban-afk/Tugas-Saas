export const displayTasks = (tasks) => {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
      ${task.completed ? `<s>${task.task}</s>` : task.task}
      <button class="toggle" data-index="${index}">Toggle</button>
      <button class="remove" data-index="${index}">Remove</button>
    `;
        todoListElement.appendChild(taskElement);
    });
};
