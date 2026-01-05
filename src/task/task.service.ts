import { Get, Injectable } from '@nestjs/common';


//DTOs
import ReadTaskDto from './dto/read-task-dto';
import { PaginatedTasksDto } from './dto/read-task-dto';

@Injectable()
export class TaskService {
    private tasks: ReadTaskDto[] = []; // Placeholder for tasks array

    getAllTasks(page: number = 1, limit: number = 10): PaginatedTasksDto {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedTasks: ReadTaskDto[] = this.tasks.slice(startIndex, endIndex); // Type-safe slicing
        
        return {
            data: paginatedTasks,
            total: this.tasks.length,
            page,
            limit,
            totalPages: Math.ceil(this.tasks.length / limit),
        };
    }
    
}
