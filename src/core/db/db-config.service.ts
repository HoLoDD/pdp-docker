import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { AppConfigService } from 'src/config';
import { CustomNamingStrategy } from 'src/shared/helpers';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly config: AppConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    console.log(this.config);

    return {
      type: this.config.DB_DIALECT,
      host: this.config.DB_HOST,
      port: this.config.DB_PORT,
      username: this.config.DB_USER,
      password: this.config.DB_PASSWORD,
      database: this.config.DB_NAME,
      uuidExtension: 'pgcrypto',
      extra: {
        max: 10,
        connectionTimeoutMillis: 100000,
      },
      entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
      autoLoadEntities: true,

      namingStrategy: new CustomNamingStrategy(),

      logging: this.config.IS_DEVELOPMENT || this.config.IS_LOCAL,
      synchronize: true,
    };
  }
}
