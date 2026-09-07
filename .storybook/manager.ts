import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Аргус — библиотека интерфейсов',
    brandUrl: '/',
    brandTarget: '_self',
    colorPrimary: '#4433ff',
    colorSecondary: '#4433ff',
    appBg: '#f7f7fb',
    appContentBg: '#ffffff',
    appBorderColor: '#e2e2ec',
    barTextColor: '#373540',
    barSelectedColor: '#4433ff',
    barHoverColor: '#4433ff',
  }),
  sidebar: { showRoots: true },
  layout: {
    // Состояния показаны в самой витрине: англоязычная системная панель не нужна.
    showPanel: () => false,
  },
});
