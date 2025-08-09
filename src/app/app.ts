import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo.service';
import { TaskInputComponent } from './task-input/task-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Task } from './task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [CommonModule, TaskInputComponent, TodoListComponent],
})
export class App {
  todoService = inject(TodoService);
  tasks = this.todoService.tasks;

  addTask(description: string) {
    const difficulty = this.todoService.getDifficulty(description);
    this.todoService.addTask(description, difficulty);
  }

  deleteTask(task: Task) {
    this.todoService.deleteTask(task.id);
  }

  toggleCompletion(task: Task) {
    this.todoService.toggleTaskCompletion(task.id);
  }
}
