import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/api/schedule/': {
        target: 'https://chabloz.eu/files/horaires/',
        changeOrigin: true,
        rewrite: path => path.replace('/api/schedule/', '')
      }
    }
  }
});
