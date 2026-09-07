import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, Badge, Divider, Tag } from './Display';
function Display() { return <><div className="argus-display-row"><Tag>Новая</Tag><Tag color="success">Согласовано</Tag><Tag color="warning">Ожидает</Tag><Tag color="error">Ошибка</Tag><Badge count={12} /><Badge count={132} /><Avatar /><Avatar initials="АП" size="small" /><Avatar initials="ИВ" size="large" /></div><Divider label="Служебный блок" /></>; }
export default { title: 'Components/Data display', component: Display, parameters: { layout: 'padded' } } satisfies Meta<typeof Display>;
export const Atoms: StoryObj<typeof Display> = {};
export const Tags: StoryObj<typeof Display> = { render: () => <div className="argus-display-row"><Tag>Новая</Tag><Tag color="success">Согласовано</Tag><Tag color="warning">Ожидает</Tag><Tag color="error">Ошибка</Tag></div> };
export const Identity: StoryObj<typeof Display> = { render: () => <div className="argus-display-row"><Badge count={12} /><Badge count={132} /><Avatar /><Avatar initials="АП" size="small" /><Avatar initials="ИВ" size="large" /></div> };
