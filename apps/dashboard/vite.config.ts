/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/dashboard',

  server: {
    port: 4201,
    host: 'localhost',
  },

  preview: {
    port: 4301,
    host: 'localhost',
  },

  plugins: [
    react(),
    nxViteTsPaths(), // Keep this!
    nxCopyAssetsPlugin(['*.md']),
    federation({
      name: 'dashboard_app',
      filename: 'dashboardApp.js',
      exposes: {
        './Remote': './src/app/app',
      },
      shared: ['react', 'react-dom', 'react-router', 'react-router-dom'],
    }),
  ],

  build: {
    target: 'esnext',
    outDir: '../../dist/apps/dashboard',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
