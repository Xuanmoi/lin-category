import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import type { Response } from 'express';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  // 动态路由：/collections/:handle
  @Get(':handle')
  @Render('test')
  async getCollection(
    @Param('handle') handle: string,
    @Res() res: Response,
  ) {
    res.header('Content-Type', 'application/liquid');
    return this.collectionsService.getCollectionsData(handle);
  }
}