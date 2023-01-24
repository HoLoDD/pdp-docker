import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppConfigModule } from './config';
import { DbModule, TelegramApiModule } from './core';
import { HealthModule, TelegramModule } from './modules';

const apiModules = [TelegramApiModule];
const modules = [TelegramModule];
@Module({
  imports: [
    AppConfigModule,
    DbModule,
    HealthModule,
    ...apiModules,
    ...modules,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
