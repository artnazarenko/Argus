import type { Meta, StoryObj } from '@storybook/react-vite';
import { componentCatalog, type ComponentStatus } from '../data/componentCatalog';

const statusLabel: Record<ComponentStatus, string> = { implemented: 'Реализован', reference: 'ANT reference', wip: 'WIP' };

function ComponentCatalog() {
  const total = componentCatalog.reduce((sum, group) => sum + group.items.length, 0);
  return <main className="foundation-page catalog-page"><div className="foundation-eyebrow">Components</div><h1 className="foundation-title">Каталог компонентов</h1><p className="foundation-copy">В Figma найдено 9 664 публикуемых варианта. Здесь показаны {total} семейств: каждый элемент обозначен по фактическому статусу, чтобы не спутать реальную реализацию, базовый ANT и незавершённый Argus WIP.</p><div className="catalog-legend"><span className="status status--implemented">Реализован в Storybook</span><span className="status status--reference">Чистый ANT</span><span className="status status--wip">WIP, используется в работе</span></div>{componentCatalog.map((group) => <section className="catalog-section" key={group.title}><h2>{group.title}</h2><div className="catalog-grid">{group.items.map((item) => <article className="catalog-card" key={item.name}><div className="catalog-card__name">{item.name}</div><span className={`status status--${item.status}`}>{statusLabel[item.status]}</span><div className="catalog-card__source">{item.source}</div></article>)}</div></section>)}</main>;
}

export default { title: 'Components/Catalog', component: ComponentCatalog } satisfies Meta<typeof ComponentCatalog>;
export const AllComponents: StoryObj<typeof ComponentCatalog> = {};
