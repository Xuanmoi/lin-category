import { Injectable } from '@nestjs/common';
import { AlgoliaService } from '../algolia/algolia.service';

@Injectable()
export class CollectionsService {
  constructor(private readonly algolia: AlgoliaService) {}

  async getCollectionsData(handle: string) {
    const timestamp = new Date().toLocaleString('zh-CN');
    const { categoryInfo, products } = await this.fetchContent(handle);
    return {
      timestamp,
      handle,
      categoryInfo,
      products,
      content: categoryInfo || `分类 ${handle}`,
    };
  }

  private async fetchContent(handle: string) {
    const [categoryInfo, products] = await Promise.all([
      this.algolia.searchCollection(handle),
      this.algolia.searchProductsByCollection(handle),
    ]);
    return { categoryInfo, products };
  }
}
