import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    // Read .env from the monorepo root rather than apps/web.
    env: { dir: '../../' },
    alias: {
      $components: 'src/components'
    }
  }
};

export default config;
