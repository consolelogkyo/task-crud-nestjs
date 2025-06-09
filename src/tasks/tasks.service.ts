import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      name: 'Comprar pão',
      description: 'Padaria do João',
      completed: false,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findById(id: string) {
    const task = this.tasks.find((task) => task.id === Number(id));
    if (task) return task;
    throw new HttpException('Essa tarefa não existe.', HttpStatus.NOT_FOUND);
  }

  createTask(body: CreateTaskDTO) {
    const newId = this.tasks.length + 1;
    const newTask = {
      id: newId,
      completed: false,
      ...body,
    };
    this.tasks.push(newTask);
    return { message: 'Tarefa criada com sucesso!' };
  }

  updateTask(id: string, body: UpdateTaskDTO) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));
    if (taskIndex < 0) {
      throw new HttpException('Essa tarefa não existe.', HttpStatus.NOT_FOUND);
    }
    const taskItem = this.tasks[taskIndex];
    this.tasks[taskIndex] = {
      ...taskItem,
      ...body,
    };
    return { message: 'Tarefa atualizada com sucesso!' };
  }

  deleteTask(id: string) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));
    if (taskIndex < 0) {
      throw new HttpException('Essa tarefa não existe.', HttpStatus.NOT_FOUND);
    }
    this.tasks.splice(taskIndex, 1);
    return { message: 'Tarefa excluida com sucesso!' };
  }
}
