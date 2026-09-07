import { Button, FloatButton } from 'antd';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentPage, ComponentSection } from '../../components/showcase/ComponentPage';
import { TypographyReference } from '../../components/showcase/TypographyReference';
import { ArgusIcon, figmaLucideNames, unresolvedFigmaIconNames } from '../../icons/figmaLucide';

const variants = [
  { label: 'Primary', type: 'primary' }, { label: 'Default', type: 'default' },
  { label: 'Dashed', type: 'dashed' }, { label: 'Text', type: 'text' }, { label: 'Link', type: 'link' },
] as const;

const states = ['Default', 'Hover', 'Focused', 'Pressed', 'Disabled'] as const;
const sizes = ['large', 'middle', 'small'] as const;
const combinations = [
  { basic: 'Basic', ghost: false, danger: false, shape: 'default' },
  { basic: 'Basic', ghost: false, danger: false, shape: 'round' },
  { basic: 'Basic', ghost: false, danger: true, shape: 'default' },
  { basic: 'Basic', ghost: false, danger: true, shape: 'round' },
  { basic: 'Basic', ghost: true, danger: false, shape: 'default' },
  { basic: 'Basic', ghost: true, danger: false, shape: 'round' },
  { basic: 'Basic', ghost: true, danger: true, shape: 'default' },
  { basic: 'Basic', ghost: true, danger: true, shape: 'round' },
] as const;

function ButtonProbe({ variant, state, size, ghost, danger, shape, iconOnly = false }: { variant: typeof variants[number]; state: typeof states[number]; size: typeof sizes[number]; ghost: boolean; danger: boolean; shape: 'default' | 'round'; iconOnly?: boolean }) {
  const stateClass = state === 'Default' ? '' : `button-probe--${state.toLowerCase()}`;
  const token = `Components/Button · ${variant.label} · ${state} · ${size} · ${ghost ? 'Ghost' : 'Solid'} · ${danger ? 'Danger' : 'Normal'} · ${shape}`;
  return <span className={`button-probe ${stateClass}`} data-token={token}><Button type={variant.type} size={size} ghost={ghost} danger={danger} shape={shape} disabled={state === 'Disabled'} icon={iconOnly ? <ArgusIcon name="icon_layout-grid" /> : undefined}>{iconOnly ? undefined : 'Button'}</Button></span>;
}

function ButtonCatalog({ iconOnly }: { iconOnly?: boolean }) {
  return <div className="button-catalog"><table className="button-catalog__table"><thead><tr><th>Figma properties</th>{states.flatMap((state) => variants.map((variant) => <th key={`${state}-${variant.label}`}>{state}<br />{variant.label}</th>))}</tr></thead><tbody>{combinations.flatMap((combination) => sizes.map((size) => <tr key={`${iconOnly}-${combination.ghost}-${combination.danger}-${combination.shape}-${size}`}><td><div className="button-catalog__row-label"><strong>{iconOnly ? 'Icon Only' : combination.basic}</strong>Ghost={String(combination.ghost)}, Danger={String(combination.danger)}, Shape={combination.shape}<br />Size={size === 'middle' ? 'Default' : size[0].toUpperCase() + size.slice(1)}</div></td>{states.flatMap((state) => variants.map((variant) => <td key={`${state}-${variant.label}`}><ButtonProbe variant={variant} state={state} size={size} ghost={combination.ghost} danger={combination.danger} shape={combination.shape} iconOnly={iconOnly} /></td>))}</tr>))}</tbody></table></div>;
}

function ButtonExamples() {
  return <ComponentPage category="General" name="Button" description="Полная матрица страницы «⚪ Button» NEW DS ARGUS: Basic и Icon Only, Ghost, Danger, Shape, пять типов, три размера и пять состояний. Наведите курсор на любой экземпляр: появится его контракт свойств и токенов.">
    <ComponentSection title="Контракт токенов" description="Значения ниже взяты из «Components/Button/Global» и «Components/Button/Component» исходного файла токенов."><table className="token-table"><thead><tr><th>Свойство</th><th>Токен</th><th>Значение</th></tr></thead><tbody><tr><td>Высоты</td><td><span className="token-chip">controlHeightSM / controlHeight / controlHeightLG</span></td><td>24 / 32 / 40 px</td></tr><tr><td>Скругление</td><td><span className="token-chip">borderRadiusSM / borderRadius / borderRadiusLG</span></td><td>4 / 6 / 8 px</td></tr><tr><td>Внутренний отступ</td><td><span className="token-chip">paddingInlineSM / paddingInline / paddingInlineLG</span></td><td>7 / 15 / 15 px</td></tr><tr><td>Primary</td><td><span className="token-chip">colorPrimary / Hover / Active</span></td><td>#4133FF / #6171FF / #3321D9</td></tr><tr><td>Danger</td><td><span className="token-chip">colorError / Hover / Active</span></td><td>#FF4D4F / #FF7875 / #D9363E</td></tr></tbody></table></ComponentSection>
    <ComponentSection title="Basic" description="Все комбинации свойств из Figma: Ghost, Danger, Default/Round, Large/Default/Small и Default/Hover/Focused/Pressed/Disabled."><ButtonCatalog /></ComponentSection>
    <ComponentSection title="Icon Only" description="Та же матрица для кнопок без текста. Размер иконки: onlyIconSizeSM / onlyIconSize / onlyIconSizeLG = 14 / 16 / 18 px."><ButtonCatalog iconOnly /></ComponentSection>
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
  render: () => <ComponentPage category="General" name="Typography" description="Полная спецификация типографики NEW DS ARGUS. Страница повторяет стили из Figma: Heading, Paragraph Text, UI Text и насыщенность X5 Sans VF; во всех строках приведены токены Default / Compact."><TypographyReference /></ComponentPage>,
};
