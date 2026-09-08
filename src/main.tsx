import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tokens.css';
import './styles/storybook.css';
import { Button, ConfigProvider } from 'antd';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="argus-story-root" data-theme="light">
      <ConfigProvider theme={{ token: { colorPrimary: '#4433ff', fontFamily: 'X5 Sans VF, Arial, sans-serif' } }}><main className="foundation-page"><div className="foundation-eyebrow">Argus</div><h1 className="foundation-title">Design reference</h1><Button type="primary">Открыть Storybook</Button></main></ConfigProvider>
    </div>
  </StrictMode>,
);
