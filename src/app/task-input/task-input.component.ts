import { Component, input, output, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  template: `
    <div class="new-task-box">
      <h3 class="section-title">New Task</h3>
      <div class="task-input-container">
        <mat-form-field appearance="outline" class="task-input-field">
          <mat-label>Task description</mat-label>
          <input matInput [(ngModel)]="taskDescription" (keyup.enter)="addTask()" placeholder="Enter task description">
        </mat-form-field>
        <button mat-raised-button color="primary" (click)="addTask()">Create Task</button>
      </div>
    </div>
  `,
  styles: [`
    app-task-input .new-task-box {
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #ffffff;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .section-title {
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 1.2em;
      color: #3f51b5;
    }
    .task-input-container {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .task-input-field {
      flex-grow: 1;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-task-input-host'
  }
})
export class TaskInputComponent {
  taskDescription: string = '';
  public addTaskEvent = output<string>();

  addTask(): void {
    if (this.taskDescription.trim()) {
      this.addTaskEvent.emit(this.taskDescription.trim());
      this.taskDescription = '';
    }
  }
}
