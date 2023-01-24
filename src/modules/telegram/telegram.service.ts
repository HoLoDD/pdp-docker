import { Injectable } from '@nestjs/common';
import { TelegramApiService } from 'src/core';
import { ISendMsgParams } from './types';

@Injectable()
export class TelegramService {
  constructor(private readonly _telegramApiService: TelegramApiService) {}

  public async sendMsg(sendParams: ISendMsgParams) {
    try {
      await this._telegramApiService.sendMsgByChatId(sendParams);
      return 'Success';
    } catch (error) {
      console.log(error);
    }
  }
}
