import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build';
  const uiEnvironment = loadEnv(mode, process.cwd());

  return {
    root: __dirname,
    base: isBuild ? '/app/' : '/',

    server: {
      port: 4200,
      host: 'localhost',
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },

    resolve: {
      alias: {
        '@project-ed/lib/icons': path.resolve(
          __dirname,
          '../../lib/icons/src/index.ts'
        ),
        '@project-ed/lib/shared-i18n': path.resolve(
          __dirname,
          '../../lib/shared-i18n/src/index.ts'
        ),
        '@project-ed/lib/http-service': path.resolve(
          __dirname,
          '../../lib/http-service/src/index.ts'
        ),
        '@project-ed/lib/ui': path.resolve(
          __dirname,
          '../../lib/ui/src/index.ts'
        ),
        '@project-ed/lib/utils': path.resolve(
          __dirname,
          '../../lib/utils/src/index.ts'
        ),
        '@project-ed/lib/hooks': path.resolve(
          __dirname,
          '../../lib/hooks/src/index.ts'
        ),
        '@project-ed/lib/constants': path.resolve(
          __dirname,
          '../../lib/constants/src/index.ts'
        ),
      },
    },

    plugins: [
      react(),
      federation({
        name: 'host',
        remotes: {
          dashboard:
            uiEnvironment.VITE_REMOTE_DASHBOARD ||
            'http://localhost:4301/assets/dashboardApp.js',
          invoices:
            uiEnvironment.VITE_REMOTE_INVOICES ||
            'http://localhost:4302/assets/invoicesApp.js',
        },
        shared: ['react', 'react-dom', 'react-router', 'react-router-dom'],
      }),
    ],

    build: {
      target: 'esnext',
      outDir: '../../dist/apps/host',
      emptyOutDir: true,
    },
  };
});
