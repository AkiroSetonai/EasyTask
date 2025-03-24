import { Component, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../ui/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksServices } from '../tasks.service';
@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private taskService = inject(TasksServices);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
