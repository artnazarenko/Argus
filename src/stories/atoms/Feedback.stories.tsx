import { Alert, Button, Drawer, message, Modal, notification, Popconfirm, Progress, Result, Skeleton, Space, Spin, Watermark } from 'antd';
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentPage, ComponentSection } from '../../components/showcase/ComponentPage';

const meta = { title: 'Components/Feedback', parameters: { controls: { disable: true } } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const Page = ({ name, children }: { name: string; children: React.ReactNode }) => <ComponentPage category="Feedback" name={name} description={`Страница «${name}» из NEW DS ARGUS.`}><ComponentSection title="Варианты" description="Интерактивный пример компонента.">{children}</ComponentSection></ComponentPage>;

export const AlertStory: Story = { name: 'Alert', render: () => <Page name="Alert"><Space direction="vertical"><Alert message="Информационное сообщение" type="info" showIcon /><Alert message="Ошибка валидации" type="error" showIcon /></Space></Page> };
export const DrawerStory: Story = { name: 'Drawer', render: () => <DrawerPage /> };
export const MessageStory: Story = { name: 'Message', render: () => <Page name="Message"><Button onClick={() => message.success('Изменения сохранены')}>Показать сообщение</Button></Page> };
export const ModalStory: Story = { name: 'Modal', render: () => <ModalPage /> };
export const NotificationStory: Story = { name: 'Notification', render: () => <Page name="Notification"><Button onClick={() => notification.info({ message: 'Новое уведомление', description: 'Проверьте назначенные задачи.' })}>Показать уведомление</Button></Page> };
export const PopconfirmStory: Story = { name: 'Popconfirm', render: () => <Page name="Popconfirm"><Popconfirm title="Удалить элемент?" description="Действие нельзя отменить."><Button danger>Удалить</Button></Popconfirm></Page> };
export const ProgressStory: Story = { name: 'Progress', render: () => <Page name="Progress"><Space><Progress percent={68} style={{ width: 220 }} /><Progress type="circle" percent={75} /></Space></Page> };
export const ResultStory: Story = { name: 'Result', render: () => <Page name="Result"><Result status="success" title="Операция завершена" /></Page> };
export const SkeletonStory: Story = { name: 'Skeleton', render: () => <Page name="Skeleton"><Skeleton active paragraph={{ rows: 3 }} style={{ maxWidth: 420 }} /></Page> };
export const SpinStory: Story = { name: 'Spin', render: () => <Page name="Spin"><Spin size="large" /></Page> };
export const WatermarkStory: Story = { name: 'Watermark', render: () => <Page name="Watermark"><Watermark content="Argus"><div style={{ height: 150, padding: 20 }}>Содержимое с водяным знаком</div></Watermark></Page> };

function DrawerPage() { const [open, setOpen] = useState(false); return <Page name="Drawer"><Button onClick={() => setOpen(true)}>Открыть Drawer</Button><Drawer open={open} title="Боковая панель" onClose={() => setOpen(false)}>Содержимое Drawer</Drawer></Page>; }
function ModalPage() { const [open, setOpen] = useState(false); return <Page name="Modal"><Button onClick={() => setOpen(true)}>Открыть Modal</Button><Modal open={open} title="Подтвердите действие" onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>Содержимое модального окна</Modal></Page>; }
