/* eslint-disable prettier/prettier */
import { Module, } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendGridModule } from "@anchan828/nest-sendgrid";

@Module({
  imports: [
    ConfigModule.forRoot(),SendGridModule.forRoot({
      apikey:process.env.SEND_GRID_ACCESSKEY,
      
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
