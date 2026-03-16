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

### 如何与 Cloudflare Worker