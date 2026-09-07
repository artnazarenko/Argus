import { Button, FloatButton, Typography } from 'antd';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentPage, ComponentSection } from '../../components/showcase/ComponentPage';
import { ArgusIcon, figmaLucideNames, unresolvedFigmaIconNames } from '../../icons/figmaLucide';

const variants = [
  { label: 'Primary', type: 'primary' }, { label: 'Default', type: 'default' },
  { label: 'Dashed', type: 'dashed' }, { label: 'Text', type: 'text' }, { label: 'Link', type: 'link' },
] as const;

function ButtonExamples() {
  return <ComponentPage category="General" name="Button" description="Кнопки из страницы «⚪ Button» NEW DS ARGUS. Витрина показывает типы, размеры и рабочие состояния; тема и плотность переключаются в верхней панели.">
    <ComponentSection title="Типы и размеры" description="Высоты берутся из токенов Argus: Small — 24 px, Default — 32 px, Large — 40 px. В режиме Compact: 21 / 28 / 35 px.">
      <div className="component-matrix"><div className="component-matrix__grid">
        <div className="component-matrix__cell component-matrix__cell--head">Тип</div><div className="component-matrix__cell component-matrix__cell--head">Small</div><div className="component-matrix__cell component-matrix__cell--head">Default</div><div className="component-matrix__cell component-matrix__cell--head">Large</div>
        {variants.flatMap((variant) => [
          <div key={`${variant.label}-label`} className="component-matrix__cell component-matrix__cell--label">{variant.label}</div>,
          <div key={`${variant.label}-small`} className="component-matrix__cell"><Button type={variant.type} size="small">Действие</Button></div>,
          <div key={`${variant.label}-default`} className="component-matrix__cell"><Button type={variant.type}>Действие</Button></div>,
          <div key={`${variant.label}-large`} className="component-matrix__cell"><Button type={variant.type} size="large">Действие</Button></div>,
        ])}
      </div></div>
    </ComponentSection>
    <ComponentSection title="Состояния" description="Наведите курсор, переведите фокус клавишей Tab и нажмите кнопку: это настоящие hover, focus и pressed-состояния компонента, а не нарисованная имитация.">
      <div className="component-matrix"><div className="component-matrix__grid">
        <div className="component-matrix__cell component-matrix__cell--head">Default</div><div className="component-matrix__cell component-matrix__cell--head">Disabled</div><div className="component-matrix__cell component-matrix__cell--head">Loading</div><div className="component-matrix__cell component-matrix__cell--head">Danger</div>
        <div className="component-matrix__cell"><Button type="primary" icon={<ArgusIcon name="icon_plus" />}>Создать</Button></div><div className="component-matrix__cell"><Button type="primary" disabled>Создать</Button></div><div className="component-matrix__cell"><Button type="primary" loading>Создать</Button></div><div className="component-matrix__cell"><Button danger>Удалить</Button></div>
      </div></div>
      <p className="component-note">Цвета Primary, Hover и Active подключены из Argus-токенов: светлая тема #4133FF / #6171FF / #3321D9; тёмная тема переключается вместе с библиотекой.</p>
    </ComponentSection>
  </ComponentPage>;
}

const meta = { title: 'Components/General', component: ButtonExamples, parameters: { controls: { disable: true } } } satisfies Meta<typeof ButtonExamples>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = { name: 'Button' };
export const FloatButtonStory: Story = {
  name: 'FloatButton',
  render: () => <ComponentPage category="General" name="FloatButton" description="Плавающая кнопка из NEW DS ARGUS."><ComponentSection title="Варианты" description="Вариант с действием и вариант с группой действий."><div style={{ minHeight: 180, position: 'relative' }}><FloatButton icon={<ArgusIcon name="icon_plus" />} tooltip="Создать" /><FloatButton.Group shape="square" style={{ right: 72 }}><FloatButton icon={<ArgusIcon name="icon_search" />} /><FloatButton icon={<ArgusIcon name="icon_settings" />} /></FloatButton.Group></div></ComponentSection></ComponentPage>,
};
export const IconStory: Story = {
  name: 'Icon',
  render: () => <ComponentPage category="General" name="Icon" description="Полный подключённый набор со страницы «🟣 ⚒️ Icons Lucide» NEW DS ARGUS. Figma-имя сохранено в подписи каждой иконки."><ComponentSection title="Размеры" description="Токены библиотеки: XS 14, SM 16, MD 18, LG 20, XL 24, XXXL 48 px."><div className="icon-grid">{([14, 16, 18, 20, 24, 48] as const).map((size) => <div className="icon-card" key={size}><ArgusIcon name="icon_search" size={size} /><code>{size} px</code></div>)}</div></ComponentSection><ComponentSection title="Иконки Lucide" description={`${figmaLucideNames.length} иконка из Figma сопоставлена с Lucide без переименования Figma-ключа.`}><div className="icon-grid">{figmaLucideNames.map((name) => <div className="icon-card" key={name}><ArgusIcon name={name} size={20} /><code>{name}</code></div>)}</div><p className="component-note">Ещё {unresolvedFigmaIconNames.length} Figma-ключей относятся к продуктовым либо нестандартным пиктограммам: {unresolvedFigmaIconNames.join(', ')}. Их нельзя подменять похожими Lucide-иконками; они будут добавлены как SVG из исходной библиотеки.</p></ComponentSection></ComponentPage>,
};
export const TypographyStory: Story = {
  name: 'Typography',
  render: () => <ComponentPage category="General" name="Typography" description="Типографические стили Argus. Основной шрифт — X5 Sans VF."><ComponentSection title="Текст" description="Имена HTML-элементов и компонентов не переводятся; пояснения и примеры — на русском."><Typography><Typography.Title level={2}>Заголовок интерфейса</Typography.Title><Typography.Paragraph>Текст для описания задачи, статуса и контекста.</Typography.Paragraph><Typography.Text type="secondary">Вторичный текст</Typography.Text></Typography></ComponentSection></ComponentPage>,
};
