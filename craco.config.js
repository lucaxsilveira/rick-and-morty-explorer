const CracoAlias = require("craco-alias");
const path = require('path');
const { ESLINT_MODES } = require("@craco/craco");


module.exports = {
    plugins: [
      {
        plugin: CracoAlias,
        options: {
          source: 'tsconfig',
          baseUrl: '.',
          tsConfigPath: './tsconfig.path.json',
        },
      },
    ],
    webpack: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
    },
    eslint: {
      mode: ESLINT_MODES.file
    }
};