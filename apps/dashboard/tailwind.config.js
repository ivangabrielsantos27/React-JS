const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*.(js|jsx|ts|tsx|html)'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
