module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  features: {
    interactionsDebugger: true,
    previewMdx2: true,
  },
  babel: async (options) => {
    options.plugins.push('babel-plugin-inline-react-svg');
    return options;
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (webpackConfig) => {
    const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
      ({ constructor }) =>
        constructor && constructor.name === 'ModuleScopePlugin'
    );

    webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
    return webpackConfig;
  },
};
