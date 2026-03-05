// test-algolia.js
import { algoliasearch } from 'algoliasearch';

const client = algoliasearch('MG1XDDDVEN', '29ac67c9b7ad53c1dfa101a83ac86c30');
// Algolia v5 使用 searchSingleIndex，不再有 initIndex
const results = await client.searchSingleIndex({
  indexName: 'fp_dev_products',
  searchParams: { query: 'shirt' },
});

console.log('找到', results.nbHits, '个结果');
console.log(results.hits);