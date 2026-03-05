// server/index.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import fs from 'fs/promises';

import { algoliasearch } from 'algoliasearch';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(path.dirname(fileURLToPath(import.meta.url)), '.env') });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

console.log(process.env.ALGOLIA_APP_ID);
console.log(process.env.ALGOLIA_API_KEY);
console.log(process.env.ALGOLIA_INDEX_NAME);
// Algolia 客户端
const algoliaClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);

// 搜索索引
const index = process.env.ALGOLIA_INDEX_NAME;

app.get('/', async (req, res) => {
  console.log('test index.js');
  res.send('Hello World');
});

app.get('/collections', async (req, res) => {
  console.log('test collections');
  res.send('test collection');
});

const handleCollectionRequest = async (req, res) => {
  console.log('test test');
  const { handle } = req.params;
  const shop = req.query.shop || 'fp-dev-au.myshopify.com';

  try {
    let categoryInfo = null;
    let products = [];

    const collectionResult = await algoliaClient.searchSingleIndex({
      indexName: index,
      searchParams: {
        query: handle,
        filters: `handle:"${handle}"`,
      },
    });
    if (collectionResult.hits?.length > 0) {
      categoryInfo = collectionResult.hits[0];
      console.log(categoryInfo);
    } else {
      console.log('没有找到分类');
    }

    // 2. 从 products 索引查询该分类下的产品
    const productsResult = await algoliaClient.searchSingleIndex({
      indexName: index,
      searchParams: {
        query: '',
        facetFilters: [['collections:' + handle]],
        hitsPerPage: 50,
      },
    });
    if (productsResult.hits?.length > 0) {
      products = productsResult.hits;
      console.log(products);
    }

    // 3. 读取模板并渲染
    const templatePath = path.join(__dirname, 'views', 'categories.ejs');
    const templateContent = await fs.readFile(templatePath, 'utf-8');
    const liquidTemplate = ejs.render(templateContent, {
      shop,
      handle,
      categoryInfo,
      products,
      appName: 'Lin Category',
      timestamp: new Date().toLocaleString('zh-CN'),
    });

    res.setHeader('Content-Type', 'application/liquid').send(liquidTemplate);
  } catch (error) {
    console.error('分类查询失败:', error);
    res.status(500).send('分类加载失败');
  }
}

app.get('/collections/:handle', handleCollectionRequest);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));