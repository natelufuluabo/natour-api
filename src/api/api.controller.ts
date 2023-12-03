import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiService, tour } from './api.service';

@Controller('api')
export class ApiController {
    constructor(private readonly apiService: ApiService) {}

    @Get()
    @HttpCode(200)
    getAllTours(): tour[] {
        return this.apiService.getAllTours();
    }
}
