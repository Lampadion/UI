import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

import AutoImport from './plugins/auto-import';
import Components from './plugins/components';
import svgLoader from './plugins/svg-loader';

// Own packages
import scssTokensPlugin from 'vite-plugin-css-vars-to-scss-tokens';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), svgLoader(), AutoImport(), Components(), scssTokensPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/assets/graphics/icons', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
					@use "@/styles/tokens" as *;
					@use "@/styles/constants" as *;
					@use "@/styles/functions" as *;
					@use "@/styles/mixins" as *;
				`,
      },
    },
  },
});
