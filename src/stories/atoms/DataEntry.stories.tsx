import { AutoComplete, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Mentions, Radio, Rate, Select, Slider, Space, Switch, TimePicker, Transfer, TreeSelect, Upload, Button } from 'antd';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentPage, ComponentSection } from '../../components/showcase/ComponentPage';
import { ArgusIcon } from '../../icons/figmaLucide';

const meta = { title: 'Components/Data Entry', parameters: { controls: { disable: true } } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const options = [{ value: 'draft', label: 'Черновик' }, { value: 'active', label: 'Активна' }, { value: 'closed', label: 'Закрыта' }];
const Page = ({ name, children }: { name: string; children: React.ReactNode }) => <ComponentPage category="Data Entry" name={name} description={`Страница «${name}» из NEW DS ARGUS. Все основные размеры доступны через панель «Размерность».`}><ComponentSection title="Варианты" description="Интерактивный пример компонента.">{children}</ComponentSection></ComponentPage>;

export const AutoCompleteStory: Story = { name: 'AutoComplete', render: () => <Page name="AutoComplete"><AutoComplete options={[{ value: 'Архитектура' }, { value: 'Аналитика' }]} placeholder="Начните ввод" style={{ width: 320 }} /></Page> };
export const CascaderStory: Story = { name: 'Cascader', render: () => <Page name="Cascader"><Cascader options={[{ value: 'portal', label: 'Портал', children: [{ value: 'tasks', label: 'Задачи' }] }]} placeholder="Выберите раздел" /></Page> };
export const CheckboxStory: Story = { name: 'Checkbox', render: () => <Page name="Checkbox"><Space><Checkbox>Не выбрано</Checkbox><Checkbox defaultChecked>Выбрано</Checkbox><Checkbox disabled>Недоступно</Checkbox></Space></Page> };
export const ColorPickerStory: Story = { name: 'ColorPicker', render: () => <Page name="ColorPicker"><ColorPicker defaultValue="#4433ff" showText /></Page> };
export const DatePickerStory: Story = { name: 'DatePicker', render: () => <Page name="DatePicker"><Space wrap><DatePicker placeholder="Дата" /><DatePicker.RangePicker /></Space></Page> };
export const FormStory: Story = { name: 'Form', render: () => <Page name="Form"><Form layout="vertical" style={{ maxWidth: 360 }}><Form.Item label="Название" required><Input placeholder="Введите название" /></Form.Item><Form.Item><Button type="primary">Сохранить</Button></Form.Item></Form></Page> };
export const InputStory: Story = { name: 'Input', render: () => <Page name="Input"><Space direction="vertical" style={{ width: 360 }}><Input placeholder="Текстовое поле" /><Input status="error" value="Некорректное значение" readOnly /><Input.Password placeholder="Пароль" /><Input.TextArea rows={3} placeholder="Многострочное поле" /></Space></Page> };
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
