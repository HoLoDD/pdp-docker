import { Module } from '@nestjs/common';
import { AppConfigModule } from '../../config';
import { TelegramApiService } from './telegram-api.service';

@Module({
  imports: [AppConfigModule],
  providers: [TelegramApiService],
  exports: [TelegramApiService],
})
export class TelegramApiModule {}
