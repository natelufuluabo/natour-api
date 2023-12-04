import { Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
import { ApiService } from './api.service';
import { tour } from 'src/interfaces/tour.interface';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  @HttpCode(200)
  getAllTours(@Query() params: any): tour[] {
    if (params.region) return this.apiService.getTourByRegion(params.region);
    if (params.priceRule)
      return this.apiService.sortTourByPrice(params.priceRule);
    if (params.min_duration && params.max_duration)
      return this.apiService.getTourByDuration(
        Number(params.min_duration),
        Number(params.max_duration),
      );
    return this.apiService.getAllTours();
  }

  @Get(':id')
  @HttpCode(200)
  getOneTour(@Param('id') id: string): tour {
    return this.apiService.getOneTour(Number(id));
  }
}
