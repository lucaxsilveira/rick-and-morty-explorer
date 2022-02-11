const CracoAlias = require("craco-alias");
const path = require('path');

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
    }
};