/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import {MessagePattern,Payload} from '@nestjs/microservices'
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('email')
  async sendEmail(@Payload() data:any):Promise<string>{
    // console.log(data);
    
    await this.appService.sendEmail(data.email,data.name)
    return 'success'
  }
  
}
