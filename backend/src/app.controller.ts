import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getTable();
  }

  @Post('user')
  postUser(@Body() user: any): string {
    return this.appService.sendUser(user);
  }

  @Post('delete')
  deleteUser(@Body() user: any): string {
    return this.appService.deleteUser(user);
  }
}
