import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Task } from '@prisma/client';
import { TaskToCreate } from 'src/interfaces/taskToCreate.interface';
import { TaskToUpdate } from 'src/interfaces/taskToUpdate.interface';
import { TaskService } from 'src/services/task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() taskToCreate: TaskToCreate): Promise<Task> {
    return await this.taskService.create(taskToCreate);
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Task[]> {
    return await this.taskService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string): Promise<Task> {
    return await this.taskService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(200)
  async update(
    @Param('id') id: string,
    @Body() taskToUpdate: TaskToUpdate,
  ): Promise<Task> {
    return await this.taskService.update(id, taskToUpdate);
  }
}
