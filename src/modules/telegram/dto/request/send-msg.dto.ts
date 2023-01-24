import { IsNumber, IsString } from 'class-validator';

export class SendMsgDtoRequest {
  @IsNumber()
  chatId: number;

  @IsString()
  message: string;
}
