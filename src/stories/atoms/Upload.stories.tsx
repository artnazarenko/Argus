import { Upload, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
function UploadExamples() { return <Space direction="vertical"><Upload beforeUpload={() => false}><Button icon={<UploadOutlined />}>Загрузить файл</Button></Upload><Upload.Dragger beforeUpload={() => false} style={{ width: 420 }}><p>Перетащите файл сюда или выберите его</p></Upload.Dragger></Space>; }
export default { title: 'Components/Upload', component: UploadExamples } satisfies Meta<typeof UploadExamples>;
export const Default: StoryObj<typeof UploadExamples> = {};
