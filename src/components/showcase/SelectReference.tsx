import { Select } from 'antd';
import { ComponentPage, ComponentSection } from './ComponentPage';

const sizes = [{ name: 'Default', value: 'middle' as const }, { name: 'Large', value: 'large' as const }, { name: 'Small', value: 'small' as const }];
const variants = [{ name: 'Default', value: 'outlined' as const }, { name: 'Borderless', value: 'borderless' as const }, { name: 'Filled', value: 'filled' as const }];
const statuses = ['Default', 'Error', 'Warning'] as const;
const types = ['Basic', 'Multiple', 'Search'] as const;
const states = ['Default', 'Hover', 'Focused', 'Filled', 'Disabled'] as const;
type State = typeof states[number];
type Status = typeof statuses[number];
type SelectType = typeof types[number];

const options = [{ value: 'argus', label: 'Argus' }, { value: 'suib', label: 'СУИБ' }, { value: 'scan', label: 'СКАН' }];
const statusProp = (status: Status): 'error' | 'warning' | undefined => status === 'Error' ? 'error' : status === 'Warning' ? 'warning' : undefined;

function SelectProbe({ size, variant, status, type, state }: { size: typeof sizes[number]; variant: typeof variants[number]; status: Status; type: SelectType; state: State }) {
  const value = state === 'Filled' ? (type === 'Multiple' ? ['argus', 'suib'] : 'argus') : undefined;
  const token = `Select / ${variant.name} · Size=${size.name} · Type=${type} · State=${state} · Status=${status}`;
  return <span className={`select-reference__probe select-reference__probe--${state.toLowerCase()} select-reference__probe--${status.toLowerCase()}`} data-token={token}>
    <Select size={size.value} variant={variant.value} options={options} mode={type === 'Multiple' ? 'multiple' : undefined} showSearch={type === 'Search'} status={statusProp(status)} disabled={state === 'Disabled'} value={value} placeholder={type === 'Search' ? 'Поиск' : 'Выберите значение'} style={{ width: '100%' }} />
  </span>;
}

function SelectMatrix({ size, variant }: { size: typeof sizes[number]; variant: typeof variants[number] }) {
  return <section className="select-reference__family"><h3>{variant.name} / {size.name}</h3><div className="select-reference__matrix"><table><thead><tr><th>Figma properties</th>{states.map((state) => <th key={state}>{state}</th>)}</tr></thead><tbody>{statuses.flatMap((status) => types.map((type) => <tr key={`${status}-${type}`}><td><strong>{status}</strong><br />{type}</td>{states.map((state) => <td key={state}><SelectProbe size={size} variant={variant} status={status} type={type} state={state} /></td>)}</tr>))}</tbody></table></div></section>;
}

export function SelectReference() {
  return <ComponentPage category="Data Entry" name="Select" description="Матрица страницы «⚪ Select» NEW DS ARGUS: Default, Borderless и Filled; статусы Default / Error / Warning; типы Basic / Multiple / Search; размеры и состояния.">
    <ComponentSection title="Контракт токенов" description="Select использует базовую геометрию контролов Argus и токены цвета из Components/Select.">
      <table className="token-table"><thead><tr><th>Свойство</th><th>Токен</th><th>Значение</th></tr></thead><tbody><tr><td>Высота</td><td><span className="token-chip">controlHeightSM / controlHeight / controlHeightLG</span></td><td>24 / 32 / 40 px</td></tr><tr><td>Скругление</td><td><span className="token-chip">borderRadiusSM / borderRadius / borderRadiusLG</span></td><td>4 / 6 / 8 px</td></tr><tr><td>Primary</td><td><span className="token-chip">colorPrimary / colorPrimaryHover</span></td><td>#4133FF / #6171FF</td></tr></tbody></table>
    </ComponentSection>
    <ComponentSection title="Полная матрица" description="Каждая ячейка соответствует комбинации свойств component set Figma. Наведите курсор, чтобы увидеть контракт экземпляра.">
      <div className="select-reference">{variants.flatMap((variant) => sizes.map((size) => <SelectMatrix key={`${variant.name}-${size.name}`} size={size} variant={variant} />))}</div>
    </ComponentSection>
  </ComponentPage>;
}
