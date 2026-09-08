import type { Meta, StoryObj } from '@storybook/react-vite';

function Introduction() {
  return (
    <main className="foundation-page">
      <div className="foundation-eyebrow">Argus · executable design reference</div>
      <h1 className="foundation-title">Основа Storybook</h1>
      <p className="foundation-copy">
        Это дизайнерская рабочая среда: здесь проверяем токены, состояния и сценарии интерфейса на моковых данных.
        Она помогает фронтенду понять намерение, но не является production-реализацией.
      </p>
      <div className="token-grid">
        <section className="token-card"><div className="token-name">ARGUS Light</div><div className="token-value">Панель темы в toolbar</div></section>
        <section className="token-card"><div className="token-name">ARGUS Dark</div><div className="token-value">Панель темы в toolbar</div></section>
        <section className="token-card"><div className="token-name">Default density</div><div className="token-value">Первый рабочий режим</div></section>
        <section className="token-card"><div className="token-name">X5 Sans VF</div><div className="token-value">Временно: Inter / Arial fallback</div></section>
      </div>
    </main>
  );
}

export default { title: 'Foundation/Introduction', component: Introduction } satisfies Meta<typeof Introduction>;
export const Overview: StoryObj<typeof Introduction> = {};
