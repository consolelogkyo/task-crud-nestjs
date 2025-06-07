import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAllTasks() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findTaskById(@Param('id') id: string) {
    return this.tasksService.findById(id);
  }

  @Post()
  createTask(@Body() body: any) {
    return this.tasksService.createTask(body);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() body: any) {
    return 'Task updated with ID: ' + id + ' and body: ' + JSON.stringify(body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return 'Task deleted, id:' + id;
  }
}
