import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import myTheme from './myTheme';

addons.setConfig({
  theme: myTheme,
});
