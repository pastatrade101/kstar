import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  // One .env at the monorepo root serves every workspace app.
  envDir: '../..',
  // Workspace packages are consumed as source, so Vite must process them
  // instead of externalizing them to Node (which cannot load raw .ts).
  optimizeDeps: {
    exclude: ['@kstar/ui', '@kstar/content']
  },
  ssr: {
    noExternal: ['@kstar/ui', '@kstar/content']
  },
  server: {
    fs: {
      allow: ['..', '../..']
    }
  }
});
