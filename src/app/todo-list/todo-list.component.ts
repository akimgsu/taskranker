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
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatListModule, MatCheckboxModule, MatCardModule, CommonModule, MatIconModule, MatButtonModule],
})
export class TodoListComponent {
  public tasks = input.required<Task[]>();
  public toggleCompletion = output<Task>();
  public deleteTask = output<Task>();
}
