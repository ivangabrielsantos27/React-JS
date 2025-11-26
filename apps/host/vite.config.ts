/// <reference types='vitest' />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build';
  const env = loadEnv(mode, process.cwd());

  return {
    root: __dirname,
    base: isBuild ? '/app/' : '/',
    cacheDir: '../../node_modules/.vite/apps/host',

    server: {
      port: 4200,
      host: 'localhost',
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },

    plugins: [
      react(),
      nxViteTsPaths(), // Keep Nx path resolution
      nxCopyAssetsPlugin(['*.md']),
      federation({
        name: 'host',
        remotes: {
          dashboard:
            env.VITE_REMOTE_DASHBOARD ||
            'http://localhost:4301/assets/dashboardApp.js',
          invoices:
            env.VITE_REMOTE_INVOICES ||
            'http://localhost:4302/assets/invoicesApp.js',
        },
        shared: ['react', 'react-dom', 'react-router', 'react-router-dom'],
      }),
    ],

    build: {
      target: 'esnext',
      outDir: '../../dist/apps/host',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  };
});
