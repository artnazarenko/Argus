import { Button, Collapse, Drawer, Space, Tabs, Tag } from 'antd';
import { Filter, Link2, Maximize2, X } from 'lucide-react';
import type { ReactNode } from 'react';

export type ArgusDrawerMode = 'empty' | 'content' | 'error';

export function ArgusDrawer({ open, onClose, mode = 'content', width = 620, children }: { open: boolean; onClose: () => void; mode?: ArgusDrawerMode; width?: number; children?: ReactNode }) {
  return <Drawer open={open} onClose={onClose} width={width} closable={false} destroyOnClose className="argus-drawer" title={null} footer={<div className="argus-drawer__footer"><Button onClick={onClose}>Закрыть</Button><Button type="primary" onClick={onClose} disabled={mode === 'error'}>Завершить</Button></div>}>
    <div className="argus-drawer__topbar"><Space size={6}><Button size="small" icon={<Filter size={13} />}>Фильтры</Button><Button size="small" icon={<Link2 size={13} />} aria-label="Связать" /><Tag icon={<Maximize2 size={12} />} color="purple">Статус</Tag></Space><Button type="text" size="small" icon={<X size={16} />} onClick={onClose} aria-label="Закрыть" /></div>
    <div className="argus-drawer__heading"><span className="argus-drawer__subtitle">Subtitle</span><h2>Title</h2><Tabs size="small" defaultActiveKey="1" items={['Информация', 'История'].map((label, index) => ({ key: String(index + 1), label, children: index === 0 ? <div className="argus-drawer__content">{mode === 'error' ? <div className="argus-drawer__empty"><strong>Что-то пошло не так</strong><Button type="link" onClick={() => window.location.reload()}>Повторите попытку</Button></div> : mode === 'empty' ? <div className="argus-drawer__empty">Данных пока нет</div> : <Collapse ghost items={[{ key: 'params', label: 'Параметры', children: children ?? 'Содержимое Drawer' }, { key: 'files', label: 'Файлы', children: 'Файлы и связанные материалы' }]} />}</div> : <div className="argus-drawer__empty">История изменений</div> }))} /></div>
  </Drawer>;
}
