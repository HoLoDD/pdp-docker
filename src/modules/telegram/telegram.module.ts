import { Module } from '@nestjs/common';
import { TelegramApiModule } from 'src/core';
import { TelegramController } from './telegram.controller';
import { TelegramService } from './telegram.service';

@Module({
  imports: [TelegramApiModule],
  controllers: [TelegramController],
  providers: [TelegramService],
})
export class TelegramModule {}
