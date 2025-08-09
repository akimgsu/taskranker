import { Injectable, signal, computed } from '@angular/core';
import { Task } from './task.interface';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private tasksSignal = signal<Task[]>([]);

  public tasks = computed(() => this.tasksSignal());

  constructor() {
    // Load tasks from localStorage on initialization
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasksSignal.set(JSON.parse(savedTasks));
    }
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasksSignal()));
  }

  addTask(description: string, difficulty: Task['difficulty']): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      description,
      difficulty,
      completed: false,
    };
    this.tasksSignal.update(tasks => [...tasks, newTask]);
    this.saveTasks();
  }

  toggleTaskCompletion(id: string): void {
    this.tasksSignal.update(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    this.saveTasks();
  }

  deleteTask(id: string): void {
    this.tasksSignal.update(tasks => tasks.filter(task => task.id !== id));
    this.saveTasks();
  }

  // Placeholder for AI ranking - will be replaced with actual AI logic later
  getDifficulty(description: string): Task['difficulty'] {
    const length = description.length;
    if (length < 15) {
      return 'easy';
    } else if (length < 40) {
      return 'medium';
    } else {
      return 'hard';
    }
  }
}
