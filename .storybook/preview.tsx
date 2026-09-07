import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { ConfigProvider, theme } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import 'antd/dist/reset.css';
import '../src/styles/tokens.css';
import '../src/styles/storybook.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Цветовой режим Argus',
      defaultValue: 'light',
      toolbar: {
        title: 'Тема Argus',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'ARGUS Light' },
          { value: 'dark', title: 'ARGUS Dark' },
        ],
      },
    },
    density: {
      description: 'Размерность из токенов Argus',
      defaultValue: 'default',
      toolbar: {
        title: 'Размерность',
        icon: 'zoom',
        items: [
          { value: 'default', title: 'Default' },
          { value: 'compact', title: 'Compact' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === 'dark';
      const isCompact = context.globals.density === 'compact';
      const controlHeights = isCompact
        ? { controlHeightSM: 21, controlHeight: 28, controlHeightLG: 35 }
        : { controlHeightSM: 24, controlHeight: 32, controlHeightLG: 40 };

      return <div className="argus-story-root" data-theme={context.globals.theme} data-density={context.globals.density}>
        <ConfigProvider locale={ruRU} componentSize={isCompact ? 'small' : 'middle'} theme={{ algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm, token: { colorPrimary: isDark ? '#786fff' : '#4433ff', borderRadius: 8, fontFamily: 'X5 Sans VF, Arial, sans-serif', ...controlHeights } }}>
          <Story />
        </ConfigProvider>
      </div>;
    },
  ],
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    docs: { lang: 'ru-RU' },
    htmlLang: 'ru-RU',
    options: {
      storySort: {
        order: ['Основа', ['Введение', 'Цвета', 'Типографика'], 'Components', ['General', 'Layout', 'Navigation', 'Data Entry', 'Data Display', 'Feedback', 'Other']],
      },
    },
  },
};

export default preview;
