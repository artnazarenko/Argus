import { Alert, Button, Descriptions, message, Modal, notification, Popconfirm, Progress, Result, Segmented, Skeleton, Space, Spin, Table, Watermark } from 'antd';
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentPage, ComponentSection } from '../../components/showcase/ComponentPage';
import { ArgusDrawer, type ArgusDrawerMode } from '../../components/Drawer/ArgusDrawer';

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

function DrawerPage() { const [open, setOpen] = useState(false); const [mode, setMode] = useState<ArgusDrawerMode>('content'); return <Page name="Drawer"><ComponentSection title="ARGUS Drawer" description="Правая боковая панель с верхней служебной зоной, заголовком, вкладками, прокруткой и нижними действиями."><Space wrap><Segmented value={mode} onChange={(value) => setMode(value as ArgusDrawerMode)} options={[{ label: 'Контент', value: 'content' }, { label: 'Пусто', value: 'empty' }, { label: 'Ошибка', value: 'error' }]} /><Button type="primary" onClick={() => setOpen(true)}>Открыть Drawer</Button></Space><ArgusDrawer open={open} onClose={() => setOpen(false)} mode={mode}><p>Система сбора и анализа сетевых потоков Net Flow</p><Descriptions column={1} size="small" items={[{ key: '1', label: 'Статус', children: 'В работе' }, { key: '2', label: 'Тип', children: 'Проект' }, { key: '3', label: 'Ответственный', children: 'Сергеев Сергей Сергеевич' }]} /><Table size="small" pagination={false} columns={[{ title: 'Тип', dataIndex: 'type' }, { title: 'Статус', dataIndex: 'status' }, { title: 'Дата', dataIndex: 'date' }]} dataSource={[{ key: '1', type: 'Проверка реализации', status: 'В работе', date: '22.01.2026' }, { key: '2', type: 'Протокол проверки', status: 'Завершено', date: '22.03.2026' }]} /></ArgusDrawer></ComponentSection><ComponentSection title="Варианты композиции" description="Одна оболочка поддерживает пустое, заполненное и ошибочное состояние; таблица и прочие блоки подключаются через children."><p>Фиксированная ширина и внутренняя прокрутка соответствуют паттерну Drawer из New DS Argus.</p></ComponentSection></Page>; }
function ModalPage() { const [open, setOpen] = useState(false); return <Page name="Modal"><Button onClick={() => setOpen(true)}>Открыть Modal</Button><Modal open={open} title="Подтвердите действие" onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>Содержимое модального окна</Modal></Page>; }
