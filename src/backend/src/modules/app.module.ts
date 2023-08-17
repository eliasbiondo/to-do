import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TaskController } from 'src/controllers/task.controller';
import { TaskService } from 'src/services/task.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService, PrismaService],
})
export class AppModule {}
