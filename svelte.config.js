import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // 配置路径
    paths: {
      base: ''
    }
  }
};

export default config;