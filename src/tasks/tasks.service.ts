import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

type BodyTask = {
  name: string;
  description: string;
  completed: boolean;
};

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
    return this.tasks.find((task) => task.id === Number(id));
  }
  createTask(body: BodyTask) {
    const newId = this.tasks.length + 1;
    const newTask = {
      id: newId,
      ...body,
    };
    this.tasks.push(newTask);
    return 'Tarefa criada com sucesso!';
  }
  updateTask(id: string, body: any) {
    const taskIndex = this.tasks.findIndex(task => task.id === Number(id))
    if(taskIndex >= 0) {
      const taskItem = this.tasks[taskIndex]
      this.tasks[taskIndex] = {
        ...taskItem,
        ...body
      }
    }
    return 'Tarefa atualizada com sucesso!'
  }
}
