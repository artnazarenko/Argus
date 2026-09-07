import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tokens.css';
import './styles/storybook.css';
import { Button } from './components/Button/Button';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="argus-story-root" data-theme="light">
      <main className="foundation-page">
        <div className="foundation-eyebrow">Argus</div>
        <h1 className="foundation-title">Design reference</h1>
        <Button variant="primary">Открыть Storybook</Button>
      </main>
    </div>
  </StrictMode>,
);
