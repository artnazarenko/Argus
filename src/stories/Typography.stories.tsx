import type { Meta, StoryObj } from '@storybook/react-vite';
import { TypographyReference } from '../components/showcase/TypographyReference';

function TypographyFoundation() {
  return <main className="foundation-page">
    <div className="foundation-eyebrow">Foundation</div>
    <h1 className="foundation-title">Typography</h1>
    <p className="foundation-copy">Полная спецификация типографики NEW DS ARGUS. В таблицах показаны имена токенов Figma и значения Default / Compact; шрифт во всех стилях — X5 Sans VF.</p>
    <TypographyReference />
  </main>;
}

const meta = { title: 'Foundation/Typography', component: TypographyFoundation, parameters: { controls: { disable: true } } } satisfies Meta<typeof TypographyFoundation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Scale: Story = { name: 'Токены и стили' };
