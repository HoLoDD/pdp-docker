import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

import { EStage } from './types';
import * as appMeta from '../../package.json';

@Injectable()
export class AppConfigService {
  private readonly ENVIRONMENT: EStage;
  public readonly IS_DEVELOPMENT: boolean;
  public readonly IS_PRODUCTION: boolean;
  public readonly IS_LOCAL: boolean;

  private readonly APP_NAME: string;
  private readonly VERSION: string;
  private readonly PORT: number;

  public readonly DATABASE_DIALECT: 'postgres';
  public readonly DATABASE_HOST: string;
  public readonly DATABASE_PASSWORD: string;
  public readonly DATABASE_PORT: number;
  public readonly DATABASE_USER: string;
  public readonly DATABASE_NAME: string;

  readonly defaultBatchSize = 10;
  readonly defaultSkipSize = 0;

  constructor(private readonly configService: ConfigService) {
    this.APP_NAME = appMeta.name;
    this.VERSION = appMeta.version;
    console.log(configService.get('PORT'));

    this.PORT = parseInt(configService.getOrThrow('PORT'), 10);

    this.ENVIRONMENT = configService.getOrThrow('ENVIRONMENT');

    this.IS_DEVELOPMENT = this.ENVIRONMENT === EStage.DEV;
    this.IS_PRODUCTION = this.ENVIRONMENT === EStage.PROD;
    this.IS_LOCAL = this.ENVIRONMENT === EStage.LOCAL;

    this.DATABASE_DIALECT = configService.getOrThrow('DATABASE_DIALECT');
    this.DATABASE_HOST = configService.getOrThrow('DATABASE_HOST');
    this.DATABASE_PASSWORD = configService.getOrThrow('DATABASE_PASSWORD');
    this.DATABASE_PORT = configService.getOrThrow('DATABASE_PORT');
    this.DATABASE_USER = configService.getOrThrow('DATABASE_USER');
    this.DATABASE_NAME = configService.getOrThrow('DATABASE_NAME');
  }

  public get appName() {
    return this.APP_NAME;
  }

  public get appVersion() {
    return this.VERSION;
  }

  public get appPort() {
    return this.PORT;
  }

  public get environment() {
    return this.ENVIRONMENT;
  }
}
