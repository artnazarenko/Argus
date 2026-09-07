import { Col, Divider, Flex, Layout, Row, Space, Splitter } from 'antd';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentPage, ComponentSection } from '../../components/showcase/ComponentPage';

const meta = { title: 'Components/Layout', parameters: { controls: { disable: true } } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const Page = ({ name, children }: { name: string; children: React.ReactNode }) => <ComponentPage category="Layout" name={name} description={`Страница «${name}» из NEW DS ARGUS. Размеры и отступы переключаются через режим плотности.`}><ComponentSection title="Варианты" description="Интерактивный пример компонента.">{children}</ComponentSection></ComponentPage>;

export const DividerStory: Story = { name: 'Divider', render: () => <Page name="Divider"><Space direction="vertical" style={{ width: '100%' }}><Divider>Разделитель с текстом</Divider><Divider dashed /><Divider>Слева</Divider></Space></Page> };
export const FlexStory: Story = { name: 'Flex', render: () => <Page name="Flex"><Flex gap="small" wrap>{['Первый', 'Второй', 'Третий'].map((item) => <div className="demo-box" key={item}>{item}</div>)}</Flex></Page> };
export const GridStory: Story = { name: 'Grid', render: () => <Page name="Grid"><Row gutter={[12, 12]}>{[1, 2, 3].map((item) => <Col span={8} key={item}><div className="demo-box">Колонка {item}</div></Col>)}</Row></Page> };
export const LayoutStory: Story = { name: 'Layout', render: () => <Page name="Layout"><Layout style={{ minHeight: 180 }}><Layout.Sider width={150}>Sider</Layout.Sider><Layout.Content style={{ padding: 16 }}>Content</Layout.Content></Layout></Page> };
export const SpaceStory: Story = { name: 'Space', render: () => <Page name="Space"><Space wrap size="large"><span>Первый элемент</span><span>Второй элемент</span><span>Третий элемент</span></Space></Page> };
export const SplitterStory: Story = { name: 'Splitter', render: () => <Page name="Splitter"><Splitter style={{ height: 180 }}><Splitter.Panel defaultSize="40%"><div className="demo-box">Левая область</div></Splitter.Panel><Splitter.Panel><div className="demo-box">Правая область</div></Splitter.Panel></Splitter></Page> };
