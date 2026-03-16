import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // 配置输出目录为out
      pages: 'out',
      assets: 'out',
      fallback: 'index.html'
    }),
    // 配置路径
    paths: {
      base: ''
    }
  }
};

export default config;