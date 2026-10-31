import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { seoPages } from './scripts/seo-html';

export default defineConfig(() => {
  // const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react(), seoPages()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
