# Структура Storybook по исходной библиотеке Argus

Статус: **на согласовании до дальнейшей реализации**.

Источник: локально разобранный `NEW DS ARGUS.fig`, переданный 2026-09-07.
Файл `.fig` не хранится в Git; этот документ — его проверяемый реестр.

## Фактический масштаб библиотеки

| Показатель | Значение |
| --- | ---: |
| Страницы Figma (`CANVAS`) | 105 |
| Все узлы | 131 576 |
| Публикуемые символы | 13 816 |
| Символы на странице Button | 1 990 |
| Символы на странице Icon | 829 |
| Символы на странице Table | 377 |
| Символы на странице Select | 376 |
| Символы на странице Input | 373 |

Публикуемый символ — это конкретное сочетание свойств, состояния или размера.
Поэтому 13 816 не означают 13 816 независимых компонентов. Storybook должен
содержать одну историю на семейство и его подтверждённые варианты, а не одну
карточку на каждый технический символ.

## Легенда Figma

| Маркер | Значение | Правило для Storybook |
| --- | --- | --- |
| `⚪` | Чистый ANT | Отображать как ANT-базу. |
| `🟣⚪` | ANT с изменениями Argus | Отобразить все ANT-варианты и явно зафиксировать дельту Argus. |
| `🟣` | Argus-компонент или изменение | Реализовать по Argus-источнику. |
| `⚒️` | WIP, применяется в работе | Показывать, но с заметной пометкой WIP. |

## Предлагаемое дерево Storybook

Это дерево повторяет разделение из Figma. Имена семейств ниже транскрибированы
из названий страниц библиотеки; не являются моей группировкой «по удобству».

```text
Foundations/
  Typography                         ← 📜 Typography
  Colors                             ← 📜 Colors
  Size, Space & Radius               ← 📜 Size, Space & Radius
  Effects                            ← 📜 Effects

Components/
  General/
    Icon                              ⚪ 829 вариантов
    Button                            ⚪ 1 990 вариантов
    Divider                           ⚪

  Navigation/
    Breadcrumb                        ⚪
    Dropdown                          ⚪
    Menu                              🟣⚪ 184 варианта
    Pagination                        🟣⚪ 46 вариантов
    Steps                             ⚪ 112 вариантов
    Anchor                            ⚪
    Tabs                              ⚪ 93 варианта

  Data entry/
    AutoComplete                      ⚪
    Cascader                          ⚪
    Checkbox                          ⚪
    ColorPicker                       ⚪
    DatePicker                        ⚪ 271 вариант
    Form                              ⚪ 105 вариантов
    Input                             ⚪ 373 варианта
    InputNumber                       ⚪ 190 вариантов
    Mentions                          ⚪
    Radio                             ⚪ 108 вариантов
    Rate                              ⚪
    Select                            ⚪ 376 вариантов
    Segmented                         ⚪ 87 вариантов
    Slider                            ⚪
    Switch                            🟣⚪ 40 вариантов
    TimePicker                        ⚪ 190 вариантов
    Transfer                          ⚪
    TreeSelect                        ⚪
    Upload                            🟣⚪ 45 вариантов

  Data display/
    Avatar                            ⚪
    Badge                             🟣⚪
    Calendar                          ⚪
    Card                              ⚪
    Carousel                          ⚪
    Collapse                          ⚪
    Descriptions                      ⚪
    Empty                             🟣⚪
    Image                             ⚪
    List                              ⚪
    Popover                           ⚪
    Statistic                         ⚪
    Table                             🟣⚪ 377 вариантов
    Tag                               🟣⚪ 41 вариант
    Timeline                          ⚪
    Tooltip                           ⚪
    Tree                              ⚪ 178 вариантов

  Feedback/
    Alert                             ⚪
    Drawer                            ⚪
    Message                           ⚪
    Modal                             ⚪
    Notification                      ⚪
    Popconfirm                        ⚪
    Progress                          ⚪ 112 вариантов
    Result                            ⚪
    Skeleton                          ⚪
    Spin                              ⚪

  Layout/
    FloatButton                       ⚪
    Grid                              ⚪
    Space                             ⚪
    Splitter                          ⚪
    Typography                        ⚪
    Tour                              ⚪
    Watermark                         ⚪

Composite components/
  Argus/
    News                              🟣⚪
    Header                            🟣⚪
    Search Input                      🟣
    Layout                            🟣⚪
    Icons Lucide                      🟣⚒️ 145 вариантов
    Scroll area                       🟣⚒️
    Dashboard cards                   🟣
    Mainpage                          ⚒️
    Context menu                      🟣⚪⚒️
    List                              🟣⚒️
    Collapse                          🟣
    Drawer                            🟣⚒️
    Datagrid settings                 🟣⚒️

Shell/
  Sidebar                             Argus assembly
  App switcher                        Argus assembly
  Account menu                        Argus assembly
  Theme menu                          Argus assembly
```

## Что исключено из пользовательского меню

- `Welcome`, `COVER`, `Change Log`, `Internal Only Canvas`, технические
  разделители `---` и служебные настройки темы;
- `Ant Design X` — внешняя библиотека, не относящаяся к утверждённому Argus UI;
- `Элементы для оформления` — требуется отдельно определить, являются ли они
  Foundations или продуктовой декоративной библиотекой.

## Принцип реализации после утверждения

1. Одна Figma-страница семейства = один Storybook-раздел.
2. Внутри — все смысловые свойства, размеры и состояния, найденные в Figma.
3. Чистый `⚪` берётся из ANT без выдуманной Argus-перерисовки.
4. Для `🟣⚪` сначала фиксируется Figma-дельта, затем она применяется к ANT.
5. WIP существует в Storybook наравне с остальными, но всегда помечен WIP.
6. `Composite components` и `Shell` не смешиваются с атомами.

До вашего подтверждения этого дерева новые компоненты в Storybook не добавляются.
