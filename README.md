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
构建输出会生成在 `out` 目录中，包括首页 `index.html`。

### 构建步骤

1. **安装依赖**
   ```bash
   npm install
   ```

2. **构建项目**
   ```bash
   npm run build
   ```

3. **查看构建结果**
   构建完成后，`out` 目录中会包含所有静态文件，包括首页 `index.html`。

### 配置说明

- 使用 `@sveltejs/adapter-static` 适配器
- 配置文件 `svelte.config.js` 中定义了输出目录为 `out`
- 构建后的静态文件会直接生成在 `out` 目录中

### 为什么需要构建

虽然这是静态页面，但 SvelteKit 需要构建过程来：
1. 优化 JavaScript 代码
2. 处理 CSS 样式
3. 生成适合 Cloudflare Worker 部署的文件结构
4. 确保页面在不同环境下的一致性
