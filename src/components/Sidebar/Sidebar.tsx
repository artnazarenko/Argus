import { useState } from 'react';
import type { ApplicationDefinition } from '../../data/applications';
import { ArgusIcon, type FigmaLucideIconName } from '../../icons/figmaLucide';
import './sidebar.css';

type SidebarProps = {
  application: ApplicationDefinition;
  applications: ApplicationDefinition[];
  collapsed?: boolean;
  activeItemId?: string;
  accountName?: string;
  onApplicationChange?: (application: ApplicationDefinition) => void;
};

const sidebarIconNames: Record<string, FigmaLucideIconName> = {
  home: 'icon_house', chart: 'icon_Chart-no-axes-combined', tasks: 'icon_list-checks',
  inbox: 'icon_inbox', briefcase: 'icon_briefcase', layers: 'icon_layers',
  folder: 'icon_folder', news: 'icon_newspaper', file: 'icon_file', grid: 'icon_layout-grid',
  users: 'icon_user', shield: 'icon_shield-check', lock: 'icon_user-lock',
  mail: 'icon_message-circle', refresh: 'icon_refresh-ccw',
};

function Icon({ name }: { name: string }) {
  return <span className="argus-icon"><ArgusIcon name={sidebarIconNames[name] ?? 'icon_circle-question-mark'} /></span>;
}

export function Sidebar({ application, applications, collapsed: initialCollapsed = false, activeItemId = 'home', accountName = 'Кирилл Бастрыкин', onApplicationChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const [activeId, setActiveId] = useState(activeItemId);
  const selectApplication = (next: ApplicationDefinition) => { setSwitcherOpen(false); onApplicationChange?.(next); };

  return <aside className={`argus-sidebar ${collapsed ? 'argus-sidebar--collapsed' : ''}`} aria-label="Навигация приложения">
    <div className="argus-sidebar__top">
      <button className="argus-sidebar__brand" onClick={() => setSwitcherOpen(!switcherOpen)} aria-expanded={switcherOpen} aria-label="Открыть список систем">
        <span className="argus-sidebar__brand-mark"><Icon name={application.icon} /></span>
        {!collapsed && <span className="argus-sidebar__brand-name">{application.name}</span>}
        {!collapsed && <span className="argus-sidebar__chevron"><ArgusIcon name="icon_chevron-down" size={16} /></span>}
      </button>
      {switcherOpen && <div className="argus-app-switcher" role="menu">{applications.map((item) => <button key={item.id} className={`argus-app-switcher__item ${item.id === application.id ? 'is-active' : ''}`} onClick={() => selectApplication(item)} role="menuitem"><span className="argus-app-switcher__icon"><Icon name={item.icon} /></span><span>{item.name}</span></button>)}</div>}
      <nav className="argus-sidebar__nav">{application.navigation.map((item) => <button key={item.id} className={`argus-sidebar__nav-item ${item.id === activeId ? 'is-active' : ''}`} onClick={() => setActiveId(item.id)} title={collapsed ? item.label : undefined}><Icon name={item.icon} />{!collapsed && <span>{item.label}</span>}</button>)}</nav>
    </div>
    <div className="argus-sidebar__bottom">
      {!collapsed && <button className="argus-sidebar__help"><span className="argus-icon"><ArgusIcon name="icon_circle-question-mark" /></span><span>Инструкция</span></button>}
      <button className="argus-sidebar__collapse" onClick={() => setCollapsed(!collapsed)} aria-label={collapsed ? 'Развернуть меню' : 'Свернуть меню'}><span className="argus-icon"><ArgusIcon name={collapsed ? 'icon_panel-left-open' : 'icon_panel-left-close'} /></span>{!collapsed && <span>Свернуть</span>}</button>
      <button className="argus-sidebar__account" title={accountName}><span className="argus-sidebar__avatar">КБ</span>{!collapsed && <span className="argus-sidebar__account-name">{accountName}</span>} {!collapsed && <span className="argus-sidebar__chevron"><ArgusIcon name="icon_chevron-right" size={16} /></span>}</button>
    </div>
  </aside>;
}
