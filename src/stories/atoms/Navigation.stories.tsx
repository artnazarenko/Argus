import { Anchor, Breadcrumb, Button, Dropdown, Menu, Pagination, Space, Steps } from 'antd';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentPage, ComponentSection } from '../../components/showcase/ComponentPage';

const meta = { title: 'Components/Navigation', parameters: { controls: { disable: true } } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const Page = ({ name, children }: { name: string; children: React.ReactNode }) => <ComponentPage category="Navigation" name={name} description={`Страница «${name}» из NEW DS ARGUS.`}><ComponentSection title="Варианты" description="Интерактивный пример компонента.">{children}</ComponentSection></ComponentPage>;
const menuItems = [{ key: 'home', label: 'Главная' }, { key: 'tasks', label: 'Задачи' }, { key: 'news', label: 'Новости' }];

export const AnchorStory: Story = { name: 'Anchor', render: () => <Page name="Anchor"><Anchor items={[{ key: 'section', href: '#section', title: 'Раздел страницы' }]} /></Page> };
export const BreadcrumbStory: Story = { name: 'Breadcrumb', render: () => <Page name="Breadcrumb"><Breadcrumb items={[{ title: 'Главная' }, { title: 'Задачи' }, { title: 'Детали' }]} /></Page> };
export const DropdownStory: Story = { name: 'Dropdown', render: () => <Page name="Dropdown"><Dropdown menu={{ items: menuItems }}><Button>Открыть меню</Button></Dropdown></Page> };
export const MenuStory: Story = { name: 'Menu', render: () => <Page name="Menu"><Menu mode="inline" selectedKeys={['home']} items={menuItems} style={{ maxWidth: 280, border: 0 }} /></Page> };
export const PaginationStory: Story = { name: 'Pagination', render: () => <Page name="Pagination"><Pagination defaultCurrent={2} total={50} showSizeChanger /></Page> };
export const StepsStory: Story = { name: 'Steps', render: () => <Page name="Steps"><Steps current={1} items={[{ title: 'Создание' }, { title: 'Согласование' }, { title: 'Готово' }]} /></Page> };
