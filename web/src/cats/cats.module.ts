import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // 在其他模块中使用 CatsService
  exports: [CatsService],
})
export class CatsModule {}
