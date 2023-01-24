import { Injectable } from '@nestjs/common';
import { AppConfigService } from 'src/config';
import axios, { AxiosInstance } from 'axios';
import { ISendMsgParams } from './types';

@Injectable()
export class TelegramApiService {
  client: AxiosInstance;

  constructor(private readonly appConfig: AppConfigService) {
    this.client = axios.create({ baseURL: appConfig.TG_API_HOST });
  }

  public async sendMsgByChatId({ chatId, message }: ISendMsgParams) {
    return await this.client.post('/send', { chatId, message });
  }
}
