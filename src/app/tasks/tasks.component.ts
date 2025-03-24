import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      tittle: 'Masterizar Angular',
      summary:
        'Aprender todo as basicas e avançadas feature do Angular e como aplica-las.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      tittle: 'Criar primeiro Prototipo',
      summary: 'Criar Primeiro prototipo de um site de uma loja online',
      dueDate: '2025-7-25',
    },
    {
      id: 't3',
      userId: 'u3',
      tittle: 'Preparar template',
      summary:
        'Prepara e descrever um template para ajudar na organização do projeto',
      dueDate: '2025-12-12',
    },
  ];
  get selectedUsertask() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      tittle: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask = false;
  }
}
