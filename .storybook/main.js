module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-contexts/register',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
  ],
};
