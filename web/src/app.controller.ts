import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // 路由
  @Get('hello')
  // 渲染文件
  @Render('hello')
  getHello(@Res() res: Response) {
    res.header('Content-Type', 'application/liquid');
    return { message: this.appService.getHello() };
  }

  @Get('health')
  getHealth(): { status: string } {
    return { status: 'ok' };
  }
}
