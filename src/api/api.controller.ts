import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { ApiService, tour } from './api.service';

@Controller('api')
export class ApiController {
    constructor(private readonly apiService: ApiService) {}

    @Get()
    @HttpCode(200)
    getAllTours(): tour[] {
        return this.apiService.getAllTours();
    }

    @Get(':id')
    @HttpCode(200)
    getOneTour(@Param('id') id: string): tour {
        return this.apiService.getOneTour(Number(id));
    }
}
