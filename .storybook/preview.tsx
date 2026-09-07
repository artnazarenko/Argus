import type { Preview } from '@storybook/react-vite';
import React from 'react';
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
    (Story, context) => (
      <div className="argus-story-root" data-theme={context.globals.theme}>
        <Story />
      </div>
    ),
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
