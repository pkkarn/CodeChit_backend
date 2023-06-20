import { Injectable } from '@nestjs/common';

interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

@Injectable()
export class TaskService {
  getHello(): string {
    return 'Hello World!';
  }
  getAllTasks(): Array<Task> {
    return [
      {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        done: false,
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        done: true,
      },
    ];
  }
}
