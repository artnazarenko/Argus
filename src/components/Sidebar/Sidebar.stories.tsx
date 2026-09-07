import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { applications } from '../../data/applications';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'Shell/Sidebar',
  component: Sidebar,
  parameters: { layout: 'centered' },
  args: { application: applications[0], applications },
} satisfies Meta<typeof Sidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveSidebar({ initialApplication = applications[0], collapsed = false }: { initialApplication?: typeof applications[number]; collapsed?: boolean }) {
  const [application, setApplication] = useState(initialApplication);
  return <Sidebar application={application} applications={applications} collapsed={collapsed} activeItemId="home" onApplicationChange={setApplication} />;
}

export const Argus: Story = { render: () => <InteractiveSidebar /> };
export const Collapsed: Story = { render: () => <InteractiveSidebar collapsed /> };
export const Suib: Story = { render: () => <InteractiveSidebar initialApplication={applications[1]} /> };
export const B2BAntifraud: Story = { render: () => <InteractiveSidebar initialApplication={applications[5]} /> };
