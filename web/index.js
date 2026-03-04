// server/index.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
  console.log('test index.js');
  res.send('Hello World');
});

app.get('/test', async (req, res) => {
  console.log('test test');
  
  const shop = req.query.shop || 'fp-dev-au.myshopify.com';
  
  // 读取 .ejs 文件并渲染(替换 EJS 变量)
  const templatePath = path.join(__dirname, 'views', 'categories.ejs');
  const templateContent = await fs.readFile(templatePath, 'utf-8');
  
  // 使用 EJS 渲染(处理 <%= %> 标签)
  const liquidTemplate = ejs.render(templateContent, {
    shop: shop,
    // 可以传递其他 EJS 变量
    appName: 'Lin Category',
    timestamp: new Date().toLocaleString('zh-CN')
  });

  console.log(liquidTemplate);
  
  // 3. 返回给 Shopify
  // 若返回 HTML：直接 res.send(html)
  // 若返回 Liquid：res.set('Content-Type', 'application/liquid').send(html)
  // 设置正确的 Content-Type
  res.setHeader('Content-Type', 'application/liquid').send(liquidTemplate);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));