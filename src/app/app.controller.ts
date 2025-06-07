import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/teste')
  getTeste() {
    return 'teste de rota';
  }

  @Post('/teste')
  createTeste() {
    return 'teste de rota POST';
  }
}
