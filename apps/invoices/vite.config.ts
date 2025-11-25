import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

export default defineConfig({
  root: __dirname,

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
    federation({
      name: 'dashboard_app',
      filename: 'dashboardApp.js',
      exposes: {
        './Remote': './src/app/app',
      },
      shared: ['react', 'react-dom', 'react-router', 'react-router-dom'],
    }),
  ],

  resolve: {
    alias: {
      '@project-ed/lib/ui': path.resolve(
        __dirname,
        '../../lib/ui/src/index.ts'
      ),
      '@project-ed/lib/shared-i18n': path.resolve(
        __dirname,
        '../../lib/shared-i18n/src/index.ts'
      ),
      '@project-ed/lib/icons': path.resolve(
        __dirname,
        '../../lib/icons/src/index.ts'
      ),
      '@project-ed/lib/constants': path.resolve(
        __dirname,
        '../../lib/constants/src/index.ts'
      ),
      '@project-ed/lib/http-service': path.resolve(
        __dirname,
        '../../lib/http-service/src/index.ts'
      ),
      '@project-ed/lib/utils': path.resolve(
        __dirname,
        '../../lib/utils/src/index.ts'
      ),
    },
  },

  build: {
    target: 'esnext',
    outDir: '../../dist/apps/dashboard',
    emptyOutDir: true,
  },
});
