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

  public readonly DB_DIALECT: 'postgres';
  public readonly DB_HOST: string;
  public readonly DB_PASSWORD: string;
  public readonly DB_PORT: number;
  public readonly DB_USER: string;
  public readonly DB_NAME: string;

  public readonly TG_API_HOST: string;

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

    this.DB_DIALECT = configService.getOrThrow('DB_DIALECT');
    this.DB_HOST = configService.getOrThrow('DB_HOST');
    this.DB_PASSWORD = configService.getOrThrow('DB_PASSWORD');
    this.DB_PORT = configService.getOrThrow('DB_PORT');
    this.DB_USER = configService.getOrThrow('DB_USER');
    this.DB_NAME = configService.getOrThrow('DB_NAME');

    this.TG_API_HOST = configService.getOrThrow('TG_API_HOST');
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
