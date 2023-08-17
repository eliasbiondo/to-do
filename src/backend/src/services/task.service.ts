import { Injectable } from '@nestjs/common';
import { TaskToCreate } from 'src/interfaces/taskToCreate.interface';
import { PrismaService } from './prisma.service';
import { Task } from '@prisma/client';
import { TaskToUpdate } from 'src/interfaces/taskToUpdate.interface';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(taskToCreate: TaskToCreate) {
    return await this.prisma.task.create({
      data: {
        title: taskToCreate.title,
        date: new Date(taskToCreate.date).toISOString(),
        isDone: taskToCreate.isDone,
      },
    });
  }

  async findAll(): Promise<Task[]> {
    return await this.prisma.task.findMany();
  }

  async findOne(id: string): Promise<Task> {
    return await this.prisma.task.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, taskToUpdate: TaskToUpdate): Promise<Task> {
    taskToUpdate.date = new Date(taskToUpdate.date).toISOString();
    return await this.prisma.task.update({
      where: {
        id: id,
      },
      data: taskToUpdate,
    });
  }
}
