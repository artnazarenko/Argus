import { Button, Dropdown, Space } from 'antd';
import type { Meta, StoryObj } from '@storybook/react-vite';

function ButtonExamples() { return <Space wrap><Button type="primary">Основное действие</Button><Button>Обычная</Button><Button type="dashed">Пунктирная</Button><Button type="text">Текстовая</Button><Button type="link">Ссылка</Button><Button danger>Опасное действие</Button><Button loading>Загрузка</Button><Button disabled>Недоступна</Button><Dropdown menu={{ items: [{ key: '1', label: 'Создать' }, { key: '2', label: 'Импортировать' }] }}><Button>Dropdown</Button></Dropdown></Space>; }
export default { title: 'Components/Button', component: ButtonExamples } satisfies Meta<typeof ButtonExamples>;
export const AllStates: StoryObj<typeof ButtonExamples> = {};
