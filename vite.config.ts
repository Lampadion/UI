import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

import AutoImport from './plugins/auto-import';
import Components from './plugins/components';
import svgLoader from './plugins/svg-loader';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), svgLoader(), AutoImport(), Components()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/assets/graphics/icons', import.meta.url)),
    },
  },
});
