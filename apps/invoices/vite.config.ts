/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/invoices',

  server: {
    port: 4202,
    host: 'localhost',
  },

  preview: {
    port: 4302,
    host: 'localhost',
  },

  plugins: [
    react(),
    nxViteTsPaths(), // Keep this!
    nxCopyAssetsPlugin(['*.md']),
    federation({
      name: 'invoices_app',
      filename: 'invoicesApp.js',
      exposes: {
        './Remote': './src/app/app',
      },
      shared: ['react', 'react-dom', 'react-router', 'react-router-dom'],
    }),
  ],

  build: {
    target: 'esnext',
    outDir: '../../dist/apps/invoices',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
