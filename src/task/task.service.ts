import { Get, Injectable } from '@nestjs/common';


//DTOs
import ReadTaskDto from './dto/read-task-dto';
import { PaginatedTasksDto } from './dto/read-task-dto';

//Constants
import { PAGE_LIMIT, PAGE_START } from 'src/common/constants/pages';

@Injectable()
export class TaskService {
    private tasks: ReadTaskDto[] = []; // Placeholder for tasks array

    getAllTasks(page: number = PAGE_START, limit: number = PAGE_LIMIT): PaginatedTasksDto {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedTasks: ReadTaskDto[] = this.tasks.slice(startIndex, endIndex); 
        
        return {
            data: paginatedTasks,
            total: this.tasks.length,
            page,
            limit,
            totalPages: Math.ceil(this.tasks.length / limit),
        };
    }

}
