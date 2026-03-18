import { Controller, Get, Req, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // 路由
  @Get('hello')
  // 渲染文件
  @Render('hello')
  getHello(@Req() req: Request, @Res() res: Response) {
    // 打印完整请求头
    console.log('=== 请求头 ===');
    console.log(req.headers);

    res.header('Content-Type', 'application/liquid');
    return { message: this.appService.getHello() };
  }

  @Get('health')
  getHealth(): { status: string } {
    return { status: 'ok' };
  }
}
