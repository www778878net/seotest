# SEO Test Project

## 项目结构

- `index3.html` - 主入口页面
- `_app/` - SvelteKit 构建输出目录
- `old/` - 旧的 Next.js 项目文件

## 构建配置

### 构建命令
```bash
npm run build
```

### 构建输出
构建输出会生成在 `.svelte-kit/cloudflare/public` 目录中，然后通过 Cloudflare Worker 部署。

### 如何与 Cloudflare Worker 绑定

1. **安装依赖**
   ```bash
   npm install
   ```

2. **构建项目**
   ```bash
   npm run build
   ```

3. **部署到 Cloudflare Worker**
   ```bash
   npx wrangler deploy
   ```

### Cloudflare 配置说明

- 使用 `@sveltejs/adapter-cloudflare` 适配器
- 配置文件 `wrangler.toml` 定义了 Worker 名称和构建命令
- 构建后的静态文件会被部署到 Cloudflare Worker

### 为什么需要构建

虽然这是静态页面，但 SvelteKit 需要构建过程来：
1. 优化 JavaScript 代码
2. 处理 CSS 样式
3. 生成适合 Cloudflare Worker 部署的文件结构
4. 确保页面在不同环境下的一致性
