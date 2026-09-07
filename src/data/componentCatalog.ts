export type ComponentStatus = 'implemented' | 'reference' | 'wip';
export type ComponentCatalogGroup = { title: string; items: { name: string; status: ComponentStatus; source: string }[] };

const reference = (name: string) => ({ name, status: 'reference' as const, source: 'ANT baseline' });
const wip = (name: string) => ({ name, status: 'wip' as const, source: 'Argus WIP' });

// This is a catalogue of component families, not a misleading list of every
// Figma variant. The Argus library contains 9,664 publishable symbols; variants
// belong to the families below and are mapped as they are implemented.
export const componentCatalog: ComponentCatalogGroup[] = [
  { title: 'Inputs', items: ['AutoComplete', 'Cascader', 'Checkbox', 'ColorPicker', 'DatePicker', 'Form', 'Input', 'InputNumber', 'Mentions', 'Radio', 'Rate', 'Select', 'Slider', 'Switch', 'TimePicker', 'Transfer', 'TreeSelect', 'Upload'].map(reference) },
  { title: 'Data display', items: ['Avatar', 'Badge', 'Calendar', 'Card', 'Carousel', 'Collapse', 'Descriptions', 'Empty', 'Image', 'List', 'Popover', 'QRCode', 'Result', 'Statistic', 'Table', 'Tag', 'Timeline', 'Tooltip', 'Tree'].map(reference) },
  { title: 'Feedback', items: ['Alert', 'Drawer', 'Message', 'Modal', 'Notification', 'Popconfirm', 'Progress', 'Skeleton', 'Spin'].map(reference) },
  { title: 'Navigation', items: ['Anchor', 'Breadcrumb', 'Dropdown', 'Menu', 'Pagination', 'Steps', 'Tabs'].map(reference) },
  { title: 'Layout and utilities', items: ['Divider', 'Flex', 'Grid', 'Layout', 'Space', 'Splitter', 'Watermark'].map(reference) },
  { title: 'Argus layer', items: [
    { name: 'Button', status: 'implemented', source: 'Argus reference' }, { name: 'Sidebar', status: 'implemented', source: 'Argus shell' },
    wip('Header'), wip('Search Input'), wip('Scroll area'), wip('Dashboard cards'), wip('Mainpage'), wip('Context menu'), wip('Datagrid settings'), wip('News'),
  ] },
];
