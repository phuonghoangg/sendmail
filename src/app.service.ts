/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { SendGridService } from "@anchan828/nest-sendgrid";

@Injectable()
export class AppService {
  constructor(private readonly sendGrid: SendGridService) {}


  getHello(): string {
    return 'Hello World!';
  }

  async sendEmail(email:string,name:string):Promise<void>{
    await this.sendGrid.send({
      to:email,
      from:process.env.FROM_EMAIL,
      subject:'User created',
      text:`hello ${name} o trong text roi ne`,
    })
  }
}
