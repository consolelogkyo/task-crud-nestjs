import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAllTasks() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findTaskById(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findById(id);
  }

  @Post()
  createTask(@Body() body: CreateTaskDTO) {
    return this.tasksService.createTask(body);
  }

  @Patch(':id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateTaskDTO,
  ) {
    return this.tasksService.updateTask(id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.deleteTask(id);
  }
}
