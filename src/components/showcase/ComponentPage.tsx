import type { ReactNode } from 'react';

type ComponentPageProps = { category: string; name: string; description: string; children: ReactNode };

export function ComponentPage({ category, name, description, children }: ComponentPageProps) {
  return <main className="component-page">
    <header className="component-page__header">
      <p className="component-page__kicker">Components / {category}</p>
      <h1 className="component-page__title">{name}</h1>
      <p className="component-page__description">{description}</p>
    </header>
    {children}
  </main>;
}

export function ComponentSection({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return <section className="component-section">
    <h2 className="component-section__title">{title}</h2>
    <p className="component-section__copy">{description}</p>
    {children}
  </section>;
}
