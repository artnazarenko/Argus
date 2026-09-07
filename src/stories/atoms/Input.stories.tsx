import { Input, InputNumber, Mentions, Space } from 'antd';
import type { Meta, StoryObj } from '@storybook/react-vite';
const { Search, TextArea, Password } = Input;
function InputExamples() { return <Space direction="vertical" style={{ width: 420 }}><Input placeholder="Текстовое поле" /><Input status="error" value="Некорректное значение" readOnly /><Search placeholder="Поиск" enterButton /><Password placeholder="Пароль" /><TextArea placeholder="Многострочное поле" rows={3} /><InputNumber min={0} max={100} defaultValue={16} style={{ width: '100%' }} /><Mentions placeholder="Упомяните коллегу через @" options={[{ value: 'Anna' }, { value: 'Kirill' }]} /></Space>; }
export default { title: 'Components/Input', component: InputExamples } satisfies Meta<typeof InputExamples>;
export const AllStates: StoryObj<typeof InputExamples> = {};
