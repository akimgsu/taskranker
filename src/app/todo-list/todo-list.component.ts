import { Component, input, output, ChangeDetectionStrategy, computed } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { Task } from '../task.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todo-list',
  template: `
    <h3 class="section-title">Task List</h3>
    @if (tasks().length > 0) {
      <mat-card>
        <mat-card-content>
          <mat-list>
            @for (task of tasks(); track task.id) {
              <mat-list-item [class.completed]="task.completed">
                <div class="task-content">
                  <mat-checkbox (change)="toggleCompletion.emit(task)" [checked]="task.completed"></mat-checkbox>
                  <span class="difficulty-tag" [class]="'difficulty-' + task.difficulty.replace(' ', '-')">{{ task.difficulty | titlecase }}</span>
                  <span class="description">{{ task.description }}</span>
                  <button mat-icon-button color="warn" (click)="deleteTask.emit(task)" aria-label="Delete task">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
              </mat-list-item>
            }
          </mat-list>
        </mat-card-content>
      </mat-card>
    } @else {
      <p>No tasks yet. Add a new task above!</p>
    }
  `,
  styles: [`
    :host {
      display: block;
      margin-top: 20px;
    }

    .section-title {
      margin-top: 30px;
      margin-bottom: 20px;
      font-size: 1.2em;
      color: #3f51b5;
    }

    mat-card {
      margin-top: 20px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      border-radius: 8px;
    }

    mat-list {
      padding: 0;
    }

    mat-list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-bottom: 1px solid #eee;
      transition: background-color 0.3s ease;
    }

    mat-list-item:last-child {
      border-bottom: none;
    }

    mat-list-item:hover {
      background-color: #f5f5f5;
    }

    .task-content {
      display: flex;
      align-items: center;
      flex-grow: 1;
      gap: 15px;
      overflow: hidden; /* Prevent content from overflowing */
    }
    
    .description {
      flex-grow: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .completed .description {
      text-decoration: line-through;
      color: #9e9e9e;
    }

    .completed {
      background-color: #fafafa;
    }

    .difficulty-tag {
      display: inline-block;
      padding: 5px 10px;
      border-radius: 12px;
      font-size: 0.75em;
      font-weight: bold;
      color: white;
      min-width: 60px;
      text-align: center;
      flex-shrink: 0; /* Prevent tag from shrinking */
    }
    .difficulty-easy {
      background-color: #4CAF50;
    }
    .difficulty-medium {
      background-color: #FFC107;
    }
    .difficulty-hard {
      background-color: #FF5722;
    }

    button[mat-icon-button] {
        flex-shrink: 0; /* Prevent button from shrinking */
    }

    p {
      text-align: center;
      padding: 20px;
      color: #757575;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatListModule, MatCheckboxModule, MatCardModule, CommonModule, MatIconModule, MatButtonModule],
})
export class TodoListComponent {
  public tasks = input.required<Task[]>();
  public toggleCompletion = output<Task>();
  public deleteTask = output<Task>();
}
