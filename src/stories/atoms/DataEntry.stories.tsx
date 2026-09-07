import { AutoComplete, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Mentions, Radio, Rate, Select, Slider, Space, Switch, TimePicker, Transfer, TreeSelect, Upload, Button } from 'antd';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentPage, ComponentSection } from '../../components/showcase/ComponentPage';
import { ArgusIcon } from '../../icons/figmaLucide';

const meta = { title: 'Components/Data Entry', parameters: { controls: { disable: true } } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const options = [{ value: 'draft', label: 'Черновик' }, { value: 'active', label: 'Активна' }, { value: 'closed', label: 'Закрыта' }];
const Page = ({ name, children }: { name: string; children: React.ReactNode }) => <ComponentPage category="Data Entry" name={name} description={`Страница «${name}» из NEW DS ARGUS. Все основные размеры доступны через панель «Размерность».`}><ComponentSection title="Варианты" description="Интерактивный пример компонента.">{children}</ComponentSection></ComponentPage>;

const inputSizes = [
  { name: 'Large', size: 'large' as const, height: '40 px', fontSize: '16 px', padding: '11 / 7 px' },
  { name: 'Default', size: 'middle' as const, height: '32 px', fontSize: '14 px', padding: '11 / 4 px' },
  { name: 'Small', size: 'small' as const, height: '24 px', fontSize: '12 px', padding: '7 / 0 px' },
];
const inputStates = ['Default', 'Hover', 'Focused', 'Error', 'Disabled'] as const;

function InputProbe({ size, state }: { size: typeof inputSizes[number]; state: typeof inputStates[number] }) {
  const status = state === 'Error' ? 'error' : undefined;
  const token = `Components/Input · Filled · ${size.name} · ${state} · ${state === 'Error' ? 'status=error' : 'status=default'}`;
  return <span className={`input-probe input-probe--${state.toLowerCase()}`} data-token={token}><Input variant="filled" size={size.size} status={status} disabled={state === 'Disabled'} value={state === 'Error' ? 'Некорректное значение' : state === 'Disabled' ? 'Недоступное значение' : 'Значение'} readOnly /></span>;
}

function InputMatrix() {
  return <ComponentPage category="Data Entry" name="Input" description="Матрица семейства Input из NEW DS ARGUS. В Figma зафиксирован вариант Filled: размеры Large / Default / Small и состояния Default, Hover, Focused, Error. Disabled добавлен как обязательное системное состояние из токенов Global.">
    <ComponentSection title="Контракт токенов" description="Значения импортированы из групп Components/Input/Component и Components/Input/Global.">
      <table className="token-table"><thead><tr><th>Свойство</th><th>Токен</th><th>Значение</th></tr></thead><tbody>
        <tr><td>Высота</td><td><span className="token-chip">controlHeightSM / controlHeight / controlHeightLG</span></td><td>24 / 32 / 40 px</td></tr>
        <tr><td>Внутренние отступы</td><td><span className="token-chip">paddingInlineSM / paddingInline / paddingInlineLG</span></td><td>7 / 11 / 11 px</td></tr>
        <tr><td>Вертикальные отступы</td><td><span className="token-chip">paddingBlockSM / paddingBlock / paddingBlockLG</span></td><td>0 / 4 / 7 px</td></tr>
        <tr><td>Шрифт</td><td><span className="token-chip">inputFontSizeSM / inputFontSize / inputFontSizeLG</span></td><td>12 / 14 / 16 px · X5 Sans VF</td></tr>
        <tr><td>Состояния</td><td><span className="token-chip">hoverBorderColor / activeBorderColor / controlOutline</span></td><td>#6171FF / #4133FF / #0591FF1A</td></tr>
        <tr><td>Скругление</td><td><span className="token-chip">borderRadiusSM / borderRadius / borderRadiusLG</span></td><td>4 / 6 / 8 px</td></tr>
      </tbody></table>
    </ComponentSection>
    <ComponentSection title="Filled" description="Полная матрица варианта, отмеченного в NEW DS ARGUS. Наведите курсор на экземпляр — появится контракт его свойств.">
      <div className="input-catalog"><table className="input-catalog__table"><thead><tr><th>Figma properties</th>{inputStates.map((state) => <th key={state}>{state}</th>)}</tr></thead><tbody>{inputSizes.map((size) => <tr key={size.name}><td><div className="input-catalog__row-label"><strong>Filled / {size.name}</strong>controlHeight={size.height}<br />inputFontSize={size.fontSize}<br />paddingInline / Block={size.padding}</div></td>{inputStates.map((state) => <td key={state}><InputProbe size={size} state={state} /></td>)}</tr>)}</tbody></table></div>
    </ComponentSection>
    <ComponentSection title="Дополнительные поля" description="Эти подвиды используют тот же набор токенов Input; их состояния будут зафиксированы отдельными матрицами после сверки соответствующих страниц Figma.">
      <Space direction="vertical" style={{ width: 360 }}><Input.Password variant="filled" placeholder="Пароль" /><Input.TextArea variant="filled" rows={3} placeholder="Многострочное поле" /></Space>
    </ComponentSection>
  </ComponentPage>;
}

export const AutoCompleteStory: Story = { name: 'AutoComplete', render: () => <Page name="AutoComplete"><AutoComplete options={[{ value: 'Архитектура' }, { value: 'Аналитика' }]} placeholder="Начните ввод" style={{ width: 320 }} /></Page> };
export const CascaderStory: Story = { name: 'Cascader', render: () => <Page name="Cascader"><Cascader options={[{ value: 'portal', label: 'Портал', children: [{ value: 'tasks', label: 'Задачи' }] }]} placeholder="Выберите раздел" /></Page> };
export const CheckboxStory: Story = { name: 'Checkbox', render: () => <Page name="Checkbox"><Space><Checkbox>Не выбрано</Checkbox><Checkbox defaultChecked>Выбрано</Checkbox><Checkbox disabled>Недоступно</Checkbox></Space></Page> };
export const ColorPickerStory: Story = { name: 'ColorPicker', render: () => <Page name="ColorPicker"><ColorPicker defaultValue="#4433ff" showText /></Page> };
export const DatePickerStory: Story = { name: 'DatePicker', render: () => <Page name="DatePicker"><Space wrap><DatePicker placeholder="Дата" /><DatePicker.RangePicker /></Space></Page> };
export const FormStory: Story = { name: 'Form', render: () => <Page name="Form"><Form layout="vertical" style={{ maxWidth: 360 }}><Form.Item label="Название" required><Input placeholder="Введите название" /></Form.Item><Form.Item><Button type="primary">Сохранить</Button></Form.Item></Form></Page> };
export const InputStory: Story = { name: 'Input', render: () => <InputMatrix /> };
export const InputNumberStory: Story = { name: 'InputNumber', render: () => <Page name="InputNumber"><InputNumber min={0} max={100} defaultValue={16} /></Page> };
export const MentionsStory: Story = { name: 'Mentions', render: () => <Page name="Mentions"><Mentions placeholder="Упомяните коллегу через @" options={[{ value: 'Anna' }, { value: 'Kirill' }]} /></Page> };
export const RadioStory: Story = { name: 'Radio', render: () => <Page name="Radio"><Radio.Group defaultValue="a"><Radio value="a">Первый</Radio><Radio value="b">Второй</Radio></Radio.Group></Page> };
export const RateStory: Story = { name: 'Rate', render: () => <Page name="Rate"><Rate defaultValue={3} /></Page> };
export const SelectStory: Story = { name: 'Select', render: () => <Page name="Select"><Select defaultValue="draft" options={options} style={{ width: 260 }} /></Page> };
export const SliderStory: Story = { name: 'Slider', render: () => <Page name="Slider"><Slider defaultValue={35} style={{ width: 280 }} /></Page> };
export const SwitchStory: Story = { name: 'Switch', render: () => <Page name="Switch"><Space><Switch /><Switch defaultChecked /><Switch disabled /></Space></Page> };
export const TimePickerStory: Story = { name: 'TimePicker', render: () => <Page name="TimePicker"><TimePicker placeholder="Время" /></Page> };
export const TransferStory: Story = { name: 'Transfer', render: () => <Page name="Transfer"><Transfer dataSource={[{ key: '1', title: 'Элемент 1' }, { key: '2', title: 'Элемент 2' }]} targetKeys={['2']} render={(item) => item.title} /></Page> };
export const TreeSelectStory: Story = { name: 'TreeSelect', render: () => <Page name="TreeSelect"><TreeSelect treeData={[{ title: 'Все системы', value: 'all', children: [{ title: 'Аргус', value: 'argus' }] }]} placeholder="Выберите систему" style={{ width: 280 }} /></Page> };
export const UploadStory: Story = { name: 'Upload', render: () => <Page name="Upload"><Upload beforeUpload={() => false}><Button icon={<ArgusIcon name="icon_plus" />}>Загрузить файл</Button></Upload></Page> };
