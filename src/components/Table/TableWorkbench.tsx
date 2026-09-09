import { Button, Checkbox, Dropdown, Input, Segmented, Space, Table } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { Columns3, Download, Plus, Search, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';

export type ArgusTableRecord = { key: string; name: string; owner: string; status: 'В работе' | 'Готово' | 'Просрочено'; updated: string; priority: number };

const rows: ArgusTableRecord[] = [
  { key: '1', name: 'Согласовать архитектуру', owner: 'Анна Петрова', status: 'В работе', updated: 'Сегодня, 10:42', priority: 1 },
  { key: '2', name: 'Проверить протокол', owner: 'Илья Смирнов', status: 'Готово', updated: 'Вчера, 16:20', priority: 2 },
  { key: '3', name: 'Подготовить отчёт', owner: 'Ольга Иванова', status: 'Просрочено', updated: '12.03.2026', priority: 3 },
  { key: '4', name: 'Обновить справочник', owner: 'Кирилл Белов', status: 'В работе', updated: '11.03.2026', priority: 2 },
  { key: '5', name: 'Проверить интеграцию', owner: 'Анна Петрова', status: 'Готово', updated: '10.03.2026', priority: 1 },
];

export function TableWorkbench() {
  const [size, setSize] = useState<'small' | 'middle' | 'large'>('middle');
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(['name', 'owner', 'status', 'updated', 'priority']);
  const [pagination, setPagination] = useState<TablePaginationConfig>({ pageSize: 4, showSizeChanger: true, showQuickJumper: true });
  const [widths, setWidths] = useState<Record<string, number>>({ name: 280, owner: 180, status: 150, updated: 170, priority: 110 });

  const columns: ColumnsType<ArgusTableRecord> = useMemo(() => [
    { title: 'Название задачи', dataIndex: 'name', key: 'name', fixed: 'left', width: widths.name, sorter: (a: ArgusTableRecord, b: ArgusTableRecord) => a.name.localeCompare(b.name), filteredValue: query ? [query] : null, onFilter: (value: boolean | React.Key, record: ArgusTableRecord) => record.name.toLowerCase().includes(String(value).toLowerCase()) },
    { title: 'Ответственный', dataIndex: 'owner', key: 'owner', width: widths.owner, filters: [...new Set(rows.map((row) => row.owner))].map((value) => ({ text: value, value })), onFilter: (value: boolean | React.Key, record: ArgusTableRecord) => record.owner === value },
    { title: 'Статус', dataIndex: 'status', key: 'status', width: widths.status, filters: [{ text: 'В работе', value: 'В работе' }, { text: 'Готово', value: 'Готово' }, { text: 'Просрочено', value: 'Просрочено' }], onFilter: (value: boolean | React.Key, record: ArgusTableRecord) => record.status === value, render: (value: ArgusTableRecord['status']) => <span className={`argus-table-status argus-table-status--${value === 'В работе' ? 'progress' : value === 'Готово' ? 'success' : 'error'}`}>{value}</span> },
    { title: 'Изменено', dataIndex: 'updated', key: 'updated', width: widths.updated, sorter: (a: ArgusTableRecord, b: ArgusTableRecord) => a.updated.localeCompare(b.updated) },
    { title: 'Приоритет', dataIndex: 'priority', key: 'priority', width: widths.priority, sorter: (a: ArgusTableRecord, b: ArgusTableRecord) => a.priority - b.priority, fixed: 'right', render: (value: number) => `P${value}` },
  ].filter((column) => visible.includes(String(column.key))) as ColumnsType<ArgusTableRecord>, [query, visible, widths]);

  const filteredRows = query ? rows.filter((row) => row.name.toLowerCase().includes(query.toLowerCase())) : rows;
  const columnItems = ['name', 'owner', 'status', 'updated', 'priority'].map((key) => ({ key, label: <Checkbox checked={visible.includes(key)} onChange={(event) => setVisible((current) => event.target.checked ? [...current, key] : current.filter((item) => item !== key))}>{({ name: 'Название задачи', owner: 'Ответственный', status: 'Статус', updated: 'Изменено', priority: 'Приоритет' } as Record<string, string>)[key]}</Checkbox> }));

  return <div className="argus-table-workbench">
    <div className="argus-table-toolbar">
      <Space wrap>
        <Button type="primary" icon={<Plus size={16} />}>Новая задача</Button>
        <Button icon={<Download size={16} />}>Экспорт</Button>
        <Dropdown menu={{ items: columnItems }} trigger={['click']}><Button icon={<Columns3 size={16} />}>Колонки</Button></Dropdown>
        <Button icon={<SlidersHorizontal size={16} />}>Фильтры</Button>
      </Space>
      <Space wrap>
        <Input allowClear prefix={<Search size={15} />} placeholder="Поиск по названию" value={query} onChange={(event) => setQuery(event.target.value)} style={{ width: 220 }} />
        <Segmented value={size} onChange={(value) => setSize(value as typeof size)} options={[{ label: 'Малый', value: 'small' }, { label: 'Обычный', value: 'middle' }, { label: 'Большой', value: 'large' }]} />
      </Space>
    </div>
    <div className="argus-table-widths"><span>Ширина колонок</span>{Object.entries(widths).map(([key, value]) => <label key={key}>{key}<input type="range" min="90" max="420" value={value} onChange={(event) => setWidths((current) => ({ ...current, [key]: Number(event.target.value) }))} /></label>)}</div>
    <Table<ArgusTableRecord> rowKey="key" columns={columns} dataSource={filteredRows} size={size} bordered sticky scroll={{ x: 890, y: 330 }} pagination={{ ...pagination, onChange: (page, pageSize) => setPagination((current) => ({ ...current, current: page, pageSize })) }} rowSelection={{ type: 'checkbox' }} />
  </div>;
}
