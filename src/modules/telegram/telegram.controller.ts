import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SwaggerConfig } from 'src/config';
import { SendMsgDtoRequest } from './dto';
import { TelegramService } from './telegram.service';

@ApiTags(SwaggerConfig.tags.health)
@Controller('telegram')
export class TelegramController {
  constructor(private readonly _telegramService: TelegramService) {}

  @Post('send')
  public async sendMsg(@Body() body: SendMsgDtoRequest) {
    return {
      data: await this._telegramService.sendMsg(body),
    };
  }
}
