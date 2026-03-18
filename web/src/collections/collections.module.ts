import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CollectionsController } from './collections.controller';
import { CollectionsService } from './collections.service';
import { AlgoliaService } from '../algolia/algolia.service';

@Module({
  imports: [ConfigModule],
  controllers: [CollectionsController],
  providers: [CollectionsService, AlgoliaService],
})
export class CollectionsModule {}
