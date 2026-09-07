# NEW DS ARGUS: исходная структура для Storybook

Статус: снимок основной рабочей библиотеки, до проектирования Storybook.

Единственный визуальный источник — `NEW DS ARGUS.fig`. Библиотека ANT не
формирует отдельный раздел Storybook: она является исторической основой внутри
NEW DS ARGUS. Её происхождение сохраняется только как метаданные компонента.

## Что Figma действительно содержит

В Figma нет вложенного дерева страниц: 105 `CANVAS`-страниц расположены
плоским списком. Поэтому ниже приведены прямые названия страниц и маркеры из
NEW DS ARGUS, а не придуманная навигационная схема.

| Показатель | Значение |
| --- | ---: |
| Узлы | 131 576 |
| Страницы | 105 |
| Публикуемые символы | 13 816 |
| `⚪ Button` | 1 990 символов |
| `⚪ Icon` | 829 символов |
| `🟣⚪ Table` | 377 символов |
| `⚪ Select` | 376 символов |
| `⚪ Input` | 373 символа |
| `🟣 ⚒️ Icons Lucide` | 145 символов |

## Прямой реестр компонентных страниц NEW DS ARGUS

### Базовые страницы библиотеки

```text
⚪  Icon
⚪  Button
⚪  Divider
⚪  Breadcrumb
⚪  Dropdown
🟣⚪  Menu
🟣⚪  Pagination
⚪  Steps
⚪  AutoComplete
⚪  Checkbox
⚪  DatePicker
⚪  Form
⚪  Input
⚪  InputNumber
⚪  Radio
⚪  Rate
⚪  Select
⚪  Slider
🟣⚪  Switch
⚪  TimePicker
⚪  Transfer
⚪  TreeSelect
🟣⚪  Upload
⚪  Avatar
🟣⚪  Badge
⚪  Calendar
⚪  Card
⚪  Carousel
⚪  Collapse
⚪  Descriptions
🟣⚪  Empty
⚪  List
⚪  Popover
⚪  Statistic
🟣⚪  Table
⚪  Tabs
🟣⚪  Tag
⚪  Timeline
⚪  Tooltip
⚪  Tree
⚪  Alert
⚪  Drawer
⚪  Message
⚪  Modal
⚪  Notification
⚪  Popconfirm
⚪  Progress
⚪  Result
⚪  Skeleton
⚪  Cascader
⚪  Mentions
⚪  Segmented
⚪  Image
⚪  Anchor
⚪  Spin
⚪  FloatButton
⚪  Typography
⚪  Grid
⚪  Space
⚪  Tour
⚪  Watermark
⚪  ColorPicker
⚪  Splitter
```

### Страницы Argus-слоя

```text
🟣⚪  News
🟣⚪  Header
🟣    Search Input
🟣⚪  Layout
🟣 ⚒️ Icons Lucide
🟣 ⚒️ Scroll area
🟣    Dashboard cards
⚒️    Mainpage
🟣⚪ ⚒️ Context menu
🟣⚒️  List
🟣    Collapse
🟣 ⚒️ Drawer
🟣⚒️  Datagrid settings
```

### Foundations и служебные страницы

```text
📜 Typography
📜 Colors
📜 Size, Space & Radius
📜 Effects
Элементы для оформления
Edit Theme
Change Log
Welcome
COVER
A R G U S
Internal Only Canvas
```

## Как этот снимок становится Storybook

1. Источником содержимого остаётся NEW DS ARGUS, но пользовательская навигация
   повторяет принятую структуру ANT: `General`, `Layout`, `Navigation`,
   `Data Entry`, `Data Display`, `Feedback`, `Other`. Это структура разделов,
   а не второй источник дизайна.
2. Внутри этих разделов используются технические имена компонентов: `Button`,
   `Input`, `Table` и т. д. Маркеры `🟣`, `⚪`, `⚒️` фиксируются в исходном
   реестре и не становятся частью названия пункта меню.
3. В метаданных истории будут поля `origin: ant | argus` и
   `status: ready | wip`; это не дополнительный пользовательский раздел.
4. Одна страница семейства содержит все её свойства и варианты Figma. Тысячи
   символов Button, Select или Table не дробятся на тысячи историй.
5. Сборные компоненты не смешиваются с атомарными: `Shell/Sidebar`, будущие
   App switcher, Header и Account menu находятся рядом с `Components`, но не
   внутри него.

## Утверждённое дерево Components

```text
Components
├── General: Button, FloatButton, Icon, Typography
├── Layout: Divider, Flex, Grid, Layout, Space, Splitter
├── Navigation: Anchor, Breadcrumb, Dropdown, Menu, Pagination, Steps
├── Data Entry: AutoComplete, Cascader, Checkbox, ColorPicker, DatePicker,
│   Form, Input, InputNumber, Mentions, Radio, Rate, Select, Slider, Switch,
│   TimePicker, Transfer, TreeSelect, Upload
├── Data Display: Avatar, Badge, Calendar, Card, Carousel, Collapse,
│   Descriptions, Empty, Image, List, Popover, QRCode, Segmented, Statistic,
│   Table, Tabs, Tag, Timeline, Tooltip, Tour, Tree
├── Feedback: Alert, Drawer, Message, Modal, Notification, Popconfirm,
│   Progress, Result, Skeleton, Spin, Watermark
└── Other: Affix, ConfigProvider, Assets
```

## Исключение из пользовательского Storybook

Служебные страницы `Internal Only Canvas`, `Welcome`, `COVER`, `Change Log`,
`Edit Theme` и разделители `---` не являются пользовательскими компонентами.
Они остаются в документации происхождения, но не попадают в меню Storybook.
