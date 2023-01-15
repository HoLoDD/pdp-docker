import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppConfigModule } from './config';
import { DbModule } from './db';

@Module({
  imports: [
    AppConfigModule,
    DbModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
