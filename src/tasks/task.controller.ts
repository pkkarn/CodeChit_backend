import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/tasks')
  getHello(): Array<Task> {
    return this.taskService.getAllTasks();
  }
}
