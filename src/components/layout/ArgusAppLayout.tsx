import type { ReactNode } from 'react';

type ArgusAppLayoutProps = {
  sidebar: ReactNode;
  header?: ReactNode;
  main: ReactNode;
  aside?: ReactNode;
  stickyHeader?: boolean;
};

/**
 * Каркас продуктового экрана Argus.
 * Sidebar остаётся вне горизонтальной прокрутки; Header, main и aside — внутри неё.
 */
export function ArgusAppLayout({ sidebar, header, main, aside, stickyHeader = false }: ArgusAppLayoutProps) {
  return <div className="argus-app-layout">
    <aside className="argus-app-layout__sidebar">{sidebar}</aside>
    <div className="argus-app-layout__work-area">
      {stickyHeader && header && <header className="argus-app-layout__header argus-app-layout__header--sticky">{header}</header>}
      <div className="argus-app-layout__scroll-region">
        <div className="argus-app-layout__canvas">
          <div className={`argus-app-layout__body${aside ? '' : ' argus-app-layout__body--no-aside'}`}>
            <main className="argus-app-layout__main">
              {!stickyHeader && header && <header className="argus-app-layout__main-header">{header}</header>}
              <div className="argus-app-layout__main-content">{main}</div>
            </main>
            {aside && <aside className="argus-app-layout__aside">{aside}</aside>}
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export function ArgusSection({ title, subtitle, children }: { title?: string; subtitle?: string; children: ReactNode }) {
  return <section className="argus-section">
    {(title || subtitle) && <header className="argus-section__header">
      {title && <h3>{title}</h3>}
      {subtitle && <h4>{subtitle}</h4>}
    </header>}
    <div className="argus-section__content">{children}</div>
  </section>;
}
