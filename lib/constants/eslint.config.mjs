import nx from '@nx/eslint-plugin';
import rootConfig from '../../eslint.config.mjs';

export default [
  ...rootConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
