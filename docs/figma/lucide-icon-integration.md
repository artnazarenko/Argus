# Иконки NEW DS ARGUS и Lucide

Статус: план подключения, без подмены Figma-иконок сторонними наборами.

## Что найдено в NEW DS ARGUS

Страница `🟣 ⚒️ Icons Lucide` содержит 145 публикуемых символов и 140
уникальных имён. Это утверждённый для текущей библиотеки поднабор, а не все
иконки с сайта Lucide.

Примеры прямых Figma-имён:

```text
icon_search
icon_chevron-down
icon_circle-alert
icon_file-check
icon_layout-grid
icon_panel-left-close
icon_shield-check
icon_user-search
```

Также в этой странице есть продуктовые знаки, которых не следует искать в
Lucide: `icon_antifraud`, `icon_cctv`, `icon_eis-bb`, `icon_oip`, `icon_scan`,
`icon_staff`, `icon_unisafe` и `icon_placeholder`. Для них нужны исходные SVG
из Figma либо утверждённые брендовые файлы.

## Корректный способ подключения

Для React используется пакет `lucide-react`. Его иконки — отдельные
типизированные inline-SVG-компоненты, поддерживающие размер, цвет и толщину
линии; при статическом импорте в сборку попадают только реально используемые
иконки. [Документация Lucide для React](https://lucide.dev/guide/react).

Нужен не свободный выбор иконок «с сайта», а закрытый маппинг, сформированный
из страницы NEW DS ARGUS:

```text
Figma: icon_search             → lucide-react: Search
Figma: icon_chevron-down       → lucide-react: ChevronDown
Figma: icon_panel-left-close   → lucide-react: PanelLeftClose
Figma: icon_shield-check       → lucide-react: ShieldCheck
```

В коде это будет один атом `Icon`, принимающий только имена из утверждённого
списка. Его размер, `strokeWidth` и цвет задаются Argus-токенами; цвет по
умолчанию наследуется как `currentColor`. Кнопки, меню и Sidebar используют
только этот атом, а не emoji, не `@ant-design/icons` и не произвольный импорт.

## Последовательность подключения

1. Извлечь из Figma исходные SVG или векторные параметры для 140 Lucide-имён
   и брендовых исключений.
2. Сверить каждое имя с версией `lucide-react`; несовпадения оформить в
   явный alias-мэппинг, а не угадывать.
3. Подключить `lucide-react` и создать типизированный `Icon`-атом.
4. Положить брендовые SVG отдельно от Lucide в `src/assets/icons/argus/`.
5. Создать историю `🟣 ⚒️ Icons Lucide`, в которой отображаются ровно 145
   иконок из Figma, их имена и состояния 14/16/18/20/24/48 px.
6. После этого заменить временные glyph-иконки в Sidebar и иконки Ant Design
   на единый `Icon`-атом.

До шага 2 подключать весь каталог Lucide в Storybook не следует: на сайте
Lucide сейчас существенно больше иконок, чем в утверждённой Figma-странице.
