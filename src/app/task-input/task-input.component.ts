import { Component, input, output, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css'],
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
