import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  colorPrimary: '#225DF2',
  colorSecondary: '#4a4b53',

  // UI
  appBg: '#4a4b53',
  appContentBg: '#f4f5f7',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#f4f5f7',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#f4f5f7',
  barSelectedColor: '#f4f5f7',
  barBg: '#4a4b53',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#f4f5f7',
  inputBorderRadius: 4,

  brandTitle: 'My custom theme storybook',
  brandUrl: 'https://example.com',
  brandImage:
    'https://www.creativefabrica.com/wp-content/uploads/2019/03/Monogram-PC-Logo-Design-by-Greenlines-Studios.jpg',
});
