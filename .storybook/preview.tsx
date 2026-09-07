import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { ConfigProvider, theme } from 'antd';
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
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === 'dark';
      return <div className="argus-story-root" data-theme={context.globals.theme}>
        <ConfigProvider theme={{ algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm, token: { colorPrimary: isDark ? '#786fff' : '#4433ff', borderRadius: 8, fontFamily: 'X5 Sans VF, Arial, sans-serif' } }}>
          <Story />
        </ConfigProvider>
      </div>;
    },
  ],
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    options: {
      storySort: {
        order: ['Foundation', ['Introduction', 'Colors', 'Typography'], 'Components'],
      },
    },
  },
};

export default preview;
