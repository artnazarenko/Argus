import type { Meta, StoryObj } from '@storybook/react-vite';

const scale = [['Heading 1', 32, 'Заголовок интерфейса'], ['Heading 2', 24, 'Название раздела'], ['Body', 14, 'Основной текст интерфейса и описания'], ['Caption', 12, 'Вторичный служебный текст']] as const;
function Typography() { return <main className="foundation-page"><div className="foundation-eyebrow">Foundation</div><h1 className="foundation-title">Typography</h1><p className="foundation-copy">Целевое семейство — X5 Sans VF. Пока web-файлы не переданы, браузер использует fallback.</p><div className="type-scale">{scale.map(([name, size, example]) => <div className="type-row" key={name}><div style={{ fontSize: size, lineHeight: 1.25, fontWeight: size >= 24 ? 650 : 400 }}>{example}</div><div className="type-meta">{name} · {size}px · Default</div></div>)}</div></main>; }
export default { title: 'Foundation/Typography', component: Typography } satisfies Meta<typeof Typography>;
export const Scale: StoryObj<typeof Typography> = {};
