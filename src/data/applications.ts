export type NavigationItem = {
  id: string;
  label: string;
  icon: string;
};

export type ApplicationDefinition = {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  navigation: NavigationItem[];
};

export const applications: ApplicationDefinition[] = [
  {
    id: 'argus', name: 'Аргус', shortName: 'А', icon: 'home',
    navigation: [
      { id: 'home', label: 'Главная', icon: 'home' },
      { id: 'analytics', label: 'Аналитика', icon: 'chart' },
      { id: 'tasks', label: 'Задачи', icon: 'tasks' },
      { id: 'requests', label: 'Заявки', icon: 'inbox' },
      { id: 'initiatives', label: 'Инициативы', icon: 'briefcase' },
      { id: 'architectures', label: 'Архитектуры', icon: 'layers' },
      { id: 'materials', label: 'Полезные материалы', icon: 'folder' },
      { id: 'news', label: 'Новости', icon: 'news' },
    ],
  },
  {
    id: 'suib', name: 'СУИБ', shortName: 'С', icon: 'shield',
    navigation: [
      { id: 'tasks', label: 'Задачи', icon: 'tasks' }, { id: 'initiatives', label: 'Инициативы', icon: 'briefcase' },
      { id: 'architectures', label: 'Архитектуры', icon: 'layers' }, { id: 'documents', label: 'Документы', icon: 'file' },
      { id: 'assets', label: 'Активы', icon: 'grid' },
    ],
  },
  { id: 'oip', name: 'ОИП', shortName: 'О', icon: 'lock', navigation: [] },
  { id: 'scan', name: 'СКАН', shortName: 'С', icon: 'grid', navigation: [{ id: 'tasks', label: 'Задачи', icon: 'tasks' }] },
  { id: 'kadr', name: 'КАДР', shortName: 'К', icon: 'users', navigation: [] },
  { id: 'antifraud', name: 'B2B Антифрод', shortName: 'B', icon: 'shield', navigation: [{ id: 'home', label: 'Главная', icon: 'home' }, { id: 'protocols', label: 'Протоколы', icon: 'file' }] },
  { id: 'eis', name: 'ЕИС ББ', shortName: 'Е', icon: 'mail', navigation: [] },
  { id: 'unisafe', name: 'UNISAFE', shortName: 'U', icon: 'refresh', navigation: [] },
];
