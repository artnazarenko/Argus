import { Button, Input } from 'antd';
import { ArgusIcon } from '../../icons/figmaLucide';
import { ComponentPage, ComponentSection } from './ComponentPage';

const sizes = [
  { name: 'Default', value: 'middle' as const }, { name: 'Large', value: 'large' as const }, { name: 'Small', value: 'small' as const },
];
const fieldStates = ['Default', 'Hover', 'Focused', 'Typing', 'Filled', 'Disabled'] as const;
const statuses = ['Default', 'Error', 'Warning', 'Success'] as const;
type FieldState = typeof fieldStates[number];
type Status = typeof statuses[number];

function statusProp(status: Status): 'error' | 'warning' | undefined {
  return status === 'Error' ? 'error' : status === 'Warning' ? 'warning' : undefined;
}

function Probe({ size, state, status = 'Default', kind = 'basic', children }: { size: typeof sizes[number]; state: FieldState; status?: Status; kind?: string; children?: React.ReactNode }) {
  const value = state === 'Typing' || state === 'Filled' ? 'Input' : undefined;
  const token = `Input / ${kind} · Size=${size.name} · State=${state} · Status=${status}`;
  return <span className={`input-reference__probe input-reference__probe--${state.toLowerCase()} input-reference__probe--${status.toLowerCase()}`} data-token={token}>
    {children ?? <Input size={size.value} status={statusProp(status)} disabled={state === 'Disabled'} placeholder="Input" value={value} readOnly />}
  </span>;
}

function Matrix({ title, columns, rows, render }: { title: string; columns: readonly string[]; rows: readonly string[]; render: (row: string, column: string) => React.ReactNode }) {
  return <section className="input-reference__family"><h3>{title}</h3><div className="input-reference__matrix"><table><thead><tr><th>Variant</th>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row}><td>{row}</td>{columns.map((column) => <td key={`${row}-${column}`}>{render(row, column)}</td>)}</tr>)}</tbody></table></div></section>;
}

function fieldStyle(state: string, status: string) { return { state: state as FieldState, status: status as Status }; }

export function InputReference() {
  return <ComponentPage category="Data Entry" name="Input" description="Полный перечень из страницы «⚪ Input» NEW DS ARGUS: 373 publishable-варианта. Матрицы ниже повторяют семейства, размеры, состояния, статусы и составные поля Figma.">
    <ComponentSection title="Контракт токенов" description="Components/Input/Component и Components/Input/Global: токены используются всеми семействами поля.">
      <table className="token-table"><thead><tr><th>Свойство</th><th>Токен</th><th>Default / Compact</th></tr></thead><tbody>
        <tr><td>Высота</td><td><span className="token-chip">controlHeightSM / controlHeight / controlHeightLG</span></td><td>24 / 32 / 40 px</td></tr>
        <tr><td>Типографика</td><td><span className="token-chip">inputFontSizeSM / inputFontSize / inputFontSizeLG</span></td><td>12 / 14 / 16 px · X5 Sans VF</td></tr>
        <tr><td>Отступы</td><td><span className="token-chip">paddingInlineSM / paddingInline / paddingInlineLG</span></td><td>7 / 11 / 11 px</td></tr>
        <tr><td>Состояния</td><td><span className="token-chip">hoverBorderColor / activeBorderColor / controlOutline</span></td><td>#6171FF / #4133FF / #0591FF1A</td></tr>
        <tr><td>Радиусы</td><td><span className="token-chip">borderRadiusSM / borderRadius / borderRadiusLG</span></td><td>4 / 6 / 8 px</td></tr>
      </tbody></table>
    </ComponentSection>

    <ComponentSection title="Basic" description="Default, Error, Warning, Success × Default, Hover, Focused, Typing, Filled, Disabled × Default, Large, Small.">
      <div className="input-reference">{sizes.map((size) => <Matrix key={size.name} title={`Size / ${size.name}`} columns={fieldStates} rows={statuses} render={(status, state) => <Probe size={size} {...fieldStyle(state, status)} />} />)}</div>
    </ComponentSection>

    <ComponentSection title="Underlined, Borderless и Filled" description="Семейства с отдельными component set в Figma. Каждая строка соответствует размеру, колонка — состоянию.">
      <div className="input-reference">
        <Matrix title="Input / Underlined" columns={['Default', 'Hover', 'Typing', 'Filled', 'Disabled']} rows={sizes.map((size) => size.name)} render={(sizeName, state) => { const size = sizes.find((item) => item.name === sizeName)!; return <Probe size={size} kind="Underlined" {...fieldStyle(state, 'Default')}><Input variant="underlined" size={size.value} disabled={state === 'Disabled'} placeholder="Input" value={state === 'Typing' || state === 'Filled' ? 'Input' : undefined} readOnly /></Probe>; }} />
        <Matrix title="Input / Borderless" columns={['Default', 'Typing', 'Filled', 'Disabled']} rows={sizes.map((size) => size.name)} render={(sizeName, state) => { const size = sizes.find((item) => item.name === sizeName)!; return <Probe size={size} kind="Borderless" {...fieldStyle(state, 'Default')}><Input variant="borderless" size={size.value} disabled={state === 'Disabled'} placeholder="Input" value={state === 'Typing' || state === 'Filled' ? 'Input' : undefined} readOnly /></Probe>; }} />
        {sizes.map((size) => <Matrix key={size.name} title={`Input / Filled · ${size.name}`} columns={['Default', 'Hover', 'Typing', 'Filled', 'Disabled']} rows={['Default', 'Error', 'Warning']} render={(status, state) => <Probe size={size} kind="Filled" {...fieldStyle(state, status)}><Input variant="filled" size={size.value} status={statusProp(status as Status)} disabled={state === 'Disabled'} placeholder="Input" value={state === 'Typing' || state === 'Filled' ? 'Input' : undefined} readOnly /></Probe>} />)}
      </div>
    </ComponentSection>

    <ComponentSection title="Textarea" description="Show Count: False и True; все размеры и состояния Default, Hover, Focused, Typing, Filled, Disabled.">
      <div className="input-reference">{[false, true].map((showCount) => sizes.map((size) => <Matrix key={`${showCount}-${size.name}`} title={`Show Count / ${showCount ? 'True' : 'False'} · ${size.name}`} columns={fieldStates} rows={['Textarea']} render={(_, state) => <Probe size={size} kind="Textarea" {...fieldStyle(state, 'Default')}><Input.TextArea size={size.value} showCount={showCount} maxLength={40} rows={2} disabled={state === 'Disabled'} placeholder="Textarea" value={state === 'Typing' || state === 'Filled' ? 'Textarea' : undefined} readOnly /></Probe>} />))}</div>
    </ComponentSection>

    <ComponentSection title="Password" description="Hide: True / False; все размеры и состояния со страницы Figma.">
      <div className="input-reference">{[true, false].map((hide) => sizes.map((size) => <Matrix key={`${hide}-${size.name}`} title={`Hide / ${hide ? 'True' : 'False'} · ${size.name}`} columns={fieldStates} rows={['Password']} render={(_, state) => <Probe size={size} kind="Password" {...fieldStyle(state, 'Default')}><Input.Password size={size.value} visibilityToggle={!hide} disabled={state === 'Disabled'} placeholder="Password" value={state === 'Typing' || state === 'Filled' ? 'password' : undefined} readOnly /></Probe>} />))}</div>
    </ComponentSection>

    <ComponentSection title="Search и Pre/Post Tab" description="Составные поля с префиксом, суффиксом, иконкой, текстом и Select; Default / Large / Small.">
      <div className="input-reference">
        {[true, false].map((preTab) => <Matrix key={String(preTab)} title={`Input / Search · Pre Tab=${preTab ? 'True' : 'False'}`} columns={['Default', 'Primary with Icon', 'Primary with Text']} rows={sizes.map((size) => size.name)} render={(sizeName, buttonType) => { const size = sizes.find((item) => item.name === sizeName)!; const addonBefore = preTab ? 'http://' : undefined; const suffix = <ArgusIcon name="icon_search" size={14} />; return <Probe size={size} kind="Search" {...fieldStyle('Default', 'Default')}><Input size={size.value} addonBefore={addonBefore} placeholder="Search" suffix={buttonType === 'Default' ? suffix : undefined} addonAfter={buttonType === 'Primary with Text' ? <Button type="primary" size={size.value}>Search</Button> : buttonType === 'Primary with Icon' ? <Button type="primary" size={size.value} icon={suffix} /> : undefined} /></Probe>; }} />)}
        {sizes.map((size) => <Matrix key={size.name} title={`Input / Pre Post Tab · ${size.name}`} columns={['Pre Tab=Yes', 'Pre Tab=No']} rows={['Post Tab=Yes', 'Post Tab=No']} render={(post, pre) => <Probe size={size} kind="Pre Post Tab" {...fieldStyle('Default', 'Default')}><Input size={size.value} addonBefore={pre === 'Pre Tab=Yes' ? 'http://' : undefined} addonAfter={post === 'Post Tab=Yes' ? '.com' : undefined} placeholder="Input" /></Probe>} />)}
      </div>
    </ComponentSection>

    <ComponentSection title="OTP и Input Caption" description="Дополнительные component set страницы Input.">
      <div className="input-reference__supplementary"><div><h3>Input / OTP</h3><div className="input-reference__otp">{[4, 6, 8].map((length) => <div key={length}><strong>Length={length}</strong><div>{Array.from({ length }, (_, index) => <span key={index} />)}</div></div>)}</div></div><div><h3>Input / Input Caption</h3><div className="input-reference__captions"><p>Default — подпись под текстовым полем.</p><p className="input-reference__caption--error">Error — сообщение об ошибке.</p><p className="input-reference__caption--warning">Warning — предупреждение.</p></div></div></div>
    </ComponentSection>
  </ComponentPage>;
}
