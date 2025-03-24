export interface Task {
  id: string;
  userId: string;
  tittle: string;
  summary: string;
  dueDate: string;
}

export interface NewTaskData {
  title: string;
  summary: string;
  date: string;
}
