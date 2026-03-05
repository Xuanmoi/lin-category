import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 目录
  app.setBaseViewsDir(join(__dirname, 'views'));
  // 模版引擎
  app.setViewEngine('ejs');
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`NestJS 服务运行在 http://localhost:${port}`);
}

bootstrap();
