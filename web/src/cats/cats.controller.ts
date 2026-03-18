import {
  Controller,
  UseGuards,
  Get,
  Req,
  Post,
  Redirect,
  Param,
  Body,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import type { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interfaces';
import { RolesGuard } from '../common/guard/roles.guard';
import { Roles } from '../common/decorator/roles.decorator';
import { LoggerMiddleware } from '../common/middleware/logger.middleware';
import { User } from '../common/decorator/user.decorator';
import { first } from 'rxjs';

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggerMiddleware)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(@Req() req: Request): Promise<Cat[]> {
    console.log(req.headers);
    return this.catsService.findAll();
  }

  @Get('user')
  findUser(@User('firstName') firstName: string): string {
    return `Hello ${firstName}`;
  }

  @Get('collection/*')
  findAllByCollection(@Req() req: Request): string {
    console.log(req.headers);
    return 'This action returns all cats by collection';
  }

  @Get('test/:id')
  @Redirect()
  findAllTest(@Param('id') id: string, @Query('name') name: string): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findById(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  @Roles(['admin']) // 使用装饰器来限制角色 具有admin角色的用户才能访问
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
