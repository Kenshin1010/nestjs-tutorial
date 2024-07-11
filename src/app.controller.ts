import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/favicon.ico')
  serveFavicon(@Res() res) {
    return res.sendFile(join(__dirname, '..', 'public', 'favicon.ico'));
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
