import { Calendar, DatePicker, TimePicker, Space } from 'antd';
import type { Meta, StoryObj } from '@storybook/react-vite';
function DateTimeExamples() { return <Space direction="vertical"><Space wrap><DatePicker placeholder="Дата" /><DatePicker.RangePicker /><TimePicker placeholder="Время" /></Space><Calendar fullscreen={false} style={{ width: 420 }} /></Space>; }
export default { title: 'Components/Date and time', component: DateTimeExamples } satisfies Meta<typeof DateTimeExamples>;
export const Pickers: StoryObj<typeof DateTimeExamples> = {};
