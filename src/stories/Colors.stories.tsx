import type { Meta, StoryObj } from '@storybook/react-vite';

const colors = [
  ['Primary', 'var(--argus-primary)'], ['Background', 'var(--argus-bg)'], ['Elevated', 'var(--argus-bg-elevated)'],
  ['Text', 'var(--argus-text)'], ['Border', 'var(--argus-border)'], ['Success', 'var(--argus-success)'],
  ['Warning', 'var(--argus-warning)'], ['Error', 'var(--argus-error)'],
] as const;

function Colors() {
  return <main className="foundation-page"><div className="foundation-eyebrow">Foundation</div><h1 className="foundation-title">Semantic colors</h1><p className="foundation-copy">Переключите тему в toolbar, чтобы сравнить режимы Argus.</p><div className="token-grid">{colors.map(([name, value]) => <section className="token-card" key={name}><div className="token-swatch" style={{ background: value }} /><div className="token-name">{name}</div><div className="token-value">{value}</div></section>)}</div></main>;
}

export default { title: 'Foundation/Colors', component: Colors } satisfies Meta<typeof Colors>;
export const Palette: StoryObj<typeof Colors> = {};
