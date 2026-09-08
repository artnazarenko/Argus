# Иконки NEW DS ARGUS и Lucide

Статус: подключено по реестру Figma; продуктовые исключения ожидают SVG.

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

Автоматическая сверка с установленной версией `lucide-react` дала 131 прямое
совпадение. `icon_cctv` и `icon_scan`, в частности, действительно существуют
в Lucide. Девять ключей не имеют прямого соответствия и пока не заменяются
похожими иконками: `icon_antifraud`, `icon_close`, `icon_eis-bb`,
`icon_funnel-sort-down`, `icon_funnel-sort-up`, `icon_oip`,
`icon_placeholder`, `icon_staff`, `icon_unisafe`.

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

В коде есть один атом `ArgusIcon`, принимающий только имена из утверждённого
списка. Его размер, `strokeWidth` и цвет задаются Argus-токенами; цвет по
умолчанию наследуется как `currentColor`. Кнопки, меню и Sidebar используют
только этот атом, а не emoji, не `@ant-design/icons` и не произвольный импорт.

## Текущее состояние

1. `lucide-react` подключён.
2. Реестр из 131 Figma-имени находится в `src/icons/figmaLucide.tsx`.
3. `Icon` в `Components / General` отображает весь сопоставленный набор и
   размеры 14/16/18/20/24/48 px.
4. Sidebar и кнопка Upload используют `ArgusIcon`; emoji-глифы удалены.
5. Девять исключений будут добавлены отдельными SVG из NEW DS ARGUS после
   извлечения исходной векторной графики.

Полный каталог Lucide в Storybook не выводится: на сайте Lucide существенно
больше иконок, чем в утверждённой Figma-странице.
