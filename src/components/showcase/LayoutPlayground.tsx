import { Flex, Pagination, Segmented, Tag } from 'antd';
import { useState } from 'react';
import { ArgusAppLayout, ArgusSection } from '../layout/ArgusAppLayout';

type Scenario = 'aside' | 'without-aside' | 'aside-in-flow' | 'sticky-header';
type Breakpoint = 'narrow' | 'regular' | 'wide';

const scenarios: { label: string; value: Scenario }[] = [
  { label: 'Sidebar + Aside', value: 'aside' },
  { label: 'Без Aside', value: 'without-aside' },
  { label: 'Aside в потоке', value: 'aside-in-flow' },
  { label: 'Закреплённый Header', value: 'sticky-header' },
];

const breakpoints: { label: string; value: Breakpoint }[] = [
  { label: '< 1280 px', value: 'narrow' },
  { label: '1280–1919 px', value: 'regular' },
  { label: '≥ 1920 px', value: 'wide' },
];

const description: Record<Breakpoint, string> = {
  narrow: 'В рабочей области появляется горизонтальная прокрутка. Sidebar остаётся закреплённым слева.',
  regular: 'Это штатная минимальная ширина: все области помещаются в viewport.',
  wide: 'Каркас ограничен 1920 px; свободная область по бокам остаётся фоном приложения.',
};

function Slot({ children, tall = false, tone }: { children: React.ReactNode; tall?: boolean; tone?: 'aside' | 'filters' }) {
  return <div className={`layout-slot${tall ? ' layout-slot--tall' : ''}${tone ? ` layout-slot--${tone}` : ''}`}>{children}</div>;
}

function PageMain({ scenario }: { scenario: Scenario }) {
  const asideInFlow = scenario === 'aside-in-flow';

  return <>
    <ArgusSection title="Заголовок секции H3" subtitle="Подзаголовок H4">
      <Slot>Header — заменяемый слот</Slot>
    </ArgusSection>
    <ArgusSection title="Фильтры">
      <Flex gap={8} wrap>
        <Tag color="processing">Статус</Tag>
        <Tag>Период</Tag>
        <Tag>Автор</Tag>
        <Tag>Проект</Tag>
      </Flex>
    </ArgusSection>
    {asideInFlow && <ArgusSection title="Aside в порядке страницы" subtitle="На этом сценарии он расположен между Filters и Custom">
      <Slot tone="aside">Aside — слот Main Content</Slot>
    </ArgusSection>}
    <ArgusSection title="Custom">
      <Slot tall>Custom — основной контент</Slot>
    </ArgusSection>
    <ArgusSection>
      <div className="layout-playground__table-slot">
        <Slot>Таблица / список — произвольный слот</Slot>
        <Pagination size="small" current={1} total={50} showSizeChanger={false} />
      </div>
    </ArgusSection>
  </>;
}

export function LayoutPlayground() {
  const [scenario, setScenario] = useState<Scenario>('aside');
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('regular');
  const hasAside = scenario === 'aside' || scenario === 'sticky-header';

  return <div className="layout-playground">
    <div className="layout-playground__controls">
      <label>
        <span>Каркас</span>
        <Segmented block options={scenarios} value={scenario} onChange={(value) => setScenario(value as Scenario)} />
      </label>
      <label>
        <span>Контрольная ширина</span>
        <Segmented block options={breakpoints} value={breakpoint} onChange={(value) => setBreakpoint(value as Breakpoint)} />
      </label>
    </div>

    <p className="layout-playground__explanation"><strong>{breakpoints.find((item) => item.value === breakpoint)?.label}.</strong> {description[breakpoint]}</p>
    <div className={`layout-playground__viewport layout-playground__viewport--${breakpoint}`}>
      <div className="layout-playground__viewport-caption">Симулятор viewport · {breakpoints.find((item) => item.value === breakpoint)?.label}</div>
      <ArgusAppLayout
        stickyHeader={scenario === 'sticky-header'}
        sidebar={<Slot tone="filters" tall>Sidebar<br /><small>232 px · отдельная вертикальная прокрутка</small></Slot>}
        header={<Slot>Header<br /><small>{scenario === 'sticky-header' ? 'закреплён над Main Content и Aside' : 'участвует в горизонтальной прокрутке'}</small></Slot>}
        main={<PageMain scenario={scenario} />}
        aside={hasAside ? <Slot tone="aside" tall>Aside<br /><small>240 px · отдельная вертикальная прокрутка</small></Slot> : undefined}
      />
    </div>
  </div>;
}
