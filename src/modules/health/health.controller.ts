import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SwaggerConfig } from 'src/config';
import { HealthService } from './health.service';

@ApiTags(SwaggerConfig.tags.health)
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @ApiOperation({ summary: 'Get server status' })
  async checkHealth() {
    try {
      return { data: await this.healthService.checkHealth() };
    } catch (error) {
      console.log(error);
    }
  }
}
