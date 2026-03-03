import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Root')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Endpoint raíz de la API' })
  @ApiResponse({
    status: 200,
    description: 'Información básica de la API',
  })
  getInfo(): object {
    return this.appService.getApiInfo();
  }
}
