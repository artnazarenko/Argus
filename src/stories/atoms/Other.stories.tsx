import { Affix, Button, ConfigProvider } from 'antd';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentPage, ComponentSection } from '../../components/showcase/ComponentPage';

const meta = { title: 'Components/Other', parameters: { controls: { disable: true } } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const Page = ({ name, children }: { name: string; children: React.ReactNode }) => <ComponentPage category="Other" name={name} description={`Страница «${name}» из структуры NEW DS ARGUS.`}><ComponentSection title="Варианты" description="Интерактивный пример компонента.">{children}</ComponentSection></ComponentPage>;
export const AffixStory: Story = { name: 'Affix', render: () => <Page name="Affix"><div style={{ height: 180, overflow: 'auto', border: '1px solid var(--argus-border)', padding: 12 }}><Affix offsetTop={0}><Button type="primary">Закреплённое действие</Button></Affix><div style={{ height: 400, paddingTop: 40 }}>Прокрутите эту область.</div></div></Page> };
export const ConfigProviderStory: Story = { name: 'ConfigProvider', render: () => <Page name="ConfigProvider"><ConfigProvider componentSize="small"><Button type="primary">Локальная настройка</Button></ConfigProvider></Page> };
export const AssetsStory: Story = { name: 'Assets', render: () => <Page name="Assets"><p>В этом разделе будут собраны экспортируемые брендовые SVG, изображения и нестандартные иконки Argus.</p></Page> };
