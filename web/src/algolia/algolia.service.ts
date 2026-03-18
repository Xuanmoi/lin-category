import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { algoliasearch } from 'algoliasearch';

@Injectable()
export class AlgoliaService {
  private client;
  private indexName: string;

  constructor(private config: ConfigService) {
    this.client = algoliasearch(
      this.config.getOrThrow<string>('ALGOLIA_APP_ID'),
      this.config.getOrThrow<string>('ALGOLIA_API_KEY'),
    );
    this.indexName = this.config.get('ALGOLIA_INDEX_NAME') || 'fp_dev_products';
  }

  /** 查询该分类下的产品 */
  async searchProductsByCollection(handle: string) {
    const result = await this.client.searchSingleIndex({
      indexName: this.indexName,
      searchParams: {
        query: '',
        facetFilters: [['collections:' + handle]],
        hitsPerPage: 50,
      },
    });
    return result.hits || [];
  }

  /** 查询分类信息（若有 collections 索引） */
  async searchCollection(handle: string) {
    const collectionsIndex =
      this.config.get('ALGOLIA_COLLECTIONS_INDEX') || this.indexName;
    try {
      const result = await this.client.searchSingleIndex({
        indexName: collectionsIndex,
        searchParams: {
          query: handle,
          filters: `handle:"${handle}"`,
        },
      });
      console.log(result);
      return result.hits?.[0] || null;
    } catch {
      return null;
    }
  }
}
