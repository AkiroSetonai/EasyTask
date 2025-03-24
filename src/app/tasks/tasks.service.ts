import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksServices {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      tittle: 'Masterizar Angular',
      summary:
        'Aprender todas as basicas e avançadas features do Angular e como aplica-las.',
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

  constructor() {
    const task = localStorage.getItem('tasks');

    if (task) {
      this.tasks = JSON.parse(task);
    }
  }

  getUserTask(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      tittle: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
