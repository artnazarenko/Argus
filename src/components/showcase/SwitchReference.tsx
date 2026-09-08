import { Switch } from 'antd';
import { Check, X } from 'lucide-react';
import { ComponentPage, ComponentSection } from './ComponentPage';

const states = ['Default', 'Pressed', 'Loading', 'Disabled'] as const;
const activeValues = ['False', 'True', 'intermediate'] as const;
type State = typeof states[number];
type Active = typeof activeValues[number];

function Probe({ size = 'default', state, active, type = 'Basic' }: { size?: 'default' | 'small'; state: State; active: Active; type?: 'Basic' | 'Icon' | 'Number' }) {
  const checked = active === 'True';
  const token = `Switch / ${type} · Size=${size === 'default' ? 'Default' : 'Small'} · State=${state} · Active=${active}`;
  const checkedChildren = type === 'Icon' ? <Check size={12} /> : type === 'Number' ? '1' : undefined;
  const unCheckedChildren = type === 'Icon' ? <X size={12} /> : type === 'Number' ? '0' : undefined;
  return <span className={`switch-reference__probe switch-reference__probe--${state.toLowerCase()} switch-reference__probe--${active.toLowerCase()}`} data-token={token}><Switch size={size === 'small' ? 'small' : 'default'} checked={checked} loading={state === 'Loading'} disabled={state === 'Disabled'} checkedChildren={checkedChildren} unCheckedChildren={unCheckedChildren} /></span>;
}

function Matrix({ title, active, sizes, type = 'Basic' }: { title: string; active: readonly Active[]; sizes: readonly ('default' | 'small')[]; type?: 'Basic' | 'Icon' | 'Number' }) {
  return <section className="switch-reference__family"><h3>{title}</h3><div className="switch-reference__matrix"><table><thead><tr><th>Figma properties</th>{states.map((state) => <th key={state}>{state}</th>)}</tr></thead><tbody>{sizes.flatMap((size) => active.map((value) => <tr key={`${size}-${value}`}><td>Size={size === 'default' ? 'Default' : 'Small'}<br />Active={value}</td>{states.map((state) => <td key={state}><Probe size={size} state={state} active={value} type={type} /></td>)}</tr>))}</tbody></table></div></section>;
}

export function SwitchReference() {
  return <ComponentPage category="Data Entry" name="Switch" description="Полная матрица страницы «🟣⚪ Switch» NEW DS ARGUS: Default / Small, Active False / True / intermediate, состояния Default / Pressed / Loading / Disabled, а также текстово-иконные варианты.">
    <ComponentSection title="Контракт токенов" description="Размер, цвета и скругления берутся из Components/Switch/Global и Component."><table className="token-table"><thead><tr><th>Свойство</th><th>Токен</th><th>Значение</th></tr></thead><tbody><tr><td>Размеры</td><td><span className="token-chip">controlHeight / controlHeightSM</span></td><td>22 / 16 px</td></tr><tr><td>Основной цвет</td><td><span className="token-chip">colorPrimary / colorPrimaryHover</span></td><td>#4133FF / #6171FF</td></tr><tr><td>Скругление</td><td><span className="token-chip">borderRadius</span></td><td>полная капсула</td></tr></tbody></table></ComponentSection>
    <ComponentSection title="Basic" description="Все 24 сочетания Basic: два размера × три Active × четыре состояния."><div className="switch-reference"><Matrix title="Switch / Basic" active={activeValues} sizes={['default', 'small']} /></div></ComponentSection>
    <ComponentSection title="Text and Icon" description="В Figma выделены варианты с Icon и Number: два Active-состояния и четыре состояния управления."><div className="switch-reference"><Matrix title="Switch / Text and Icon / Icon" active={['False', 'True']} sizes={['default']} type="Icon" /><Matrix title="Switch / Text and Icon / Number" active={['False', 'True']} sizes={['default']} type="Number" /></div></ComponentSection>
  </ComponentPage>;
}
