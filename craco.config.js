const CracoAlias = require("craco-alias");
const { ESLINT_MODES } = require("@craco/craco")
const customESLintConfig = require('./.eslintrc');

module.exports = {
    eslint: {
        mode: ESLINT_MODES.extends,
        configure: () => customESLintConfig,
    },
    webpack: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
    }
};