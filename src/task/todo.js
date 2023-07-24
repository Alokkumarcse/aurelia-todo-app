export class Todo {
  constructor() {
    this.todoList = [
      { taskId: 1, description: "Learn Aurelia", done: false },
      { taskId: 2, description: "Take out the trash", done: false },
      { taskId: 3, description: "Read books and understand", done: true },
    ];
    this.newTaskDescription = "";
    this.taskId = 4;
  }

  addTask() {
    if (this.newTaskDescription.trim() !== "") {
      const newTask = {
        taskId: this.taskId++,
        description: this.newTaskDescription,
        done: false,
      };

      this.todoList.push(newTask);
      this.newTaskDescription = "";
    }
  }
  onInputKeyDown(event) {
    if (event.key === "Enter") {
      this.addTask();
    }
  }

  editTask(taskId) {}

  removeTask(taskId) {
    this.todoList = this.todoList.filter((task) => taskId !== task.taskId);
  }
}
