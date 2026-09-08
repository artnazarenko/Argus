import * as Lucide from 'lucide-react';
import type { LucideIcon, LucideProps } from 'lucide-react';

/**
 * Прямая сверка со страницей «🟣 ⚒️ Icons Lucide» из NEW DS ARGUS.fig.
 * Здесь намеренно хранятся Figma-имена: ими оперируют макеты и спецификация.
 */
const figmaToLucide = {
  "icon_Chart-no-axes-combined": "ChartNoAxesCombined", "icon_app-window": "AppWindow", "icon_arrow-down-narrow-wide": "ArrowDownNarrowWide", "icon_arrow-down-wide-narrow": "ArrowDownWideNarrow", "icon_arrow-left": "ArrowLeft", "icon_arrow-right": "ArrowRight", "icon_arrow-up-narrow-wide": "ArrowUpNarrowWide", "icon_binary": "Binary", "icon_blocks": "Blocks", "icon_book-check": "BookCheck", "icon_book-copy": "BookCopy", "icon_book-open": "BookOpen", "icon_book-user": "BookUser", "icon_boxes": "Boxes", "icon_briefcase": "Briefcase", "icon_briefcase-business": "BriefcaseBusiness", "icon_calendar": "Calendar", "icon_cctv": "Cctv", "icon_chart-column-big": "ChartColumnBig", "icon_chart-line": "ChartLine", "icon_chart-pie": "ChartPie", "icon_check": "Check", "icon_chevron-down": "ChevronDown", "icon_chevron-left": "ChevronLeft", "icon_chevron-right": "ChevronRight", "icon_chevron-up": "ChevronUp", "icon_chevrons-left": "ChevronsLeft", "icon_chevrons-right": "ChevronsRight", "icon_circle-alert": "CircleAlert", "icon_circle-check": "CircleCheck", "icon_circle-question-mark": "CircleQuestionMark", "icon_circle-x": "CircleX", "icon_clipboard-plus": "ClipboardPlus", "icon_cloud": "Cloud", "icon_cloudy": "Cloudy", "icon_coffee": "Coffee", "icon_copy": "Copy", "icon_database": "Database", "icon_download": "Download", "icon_edit": "Edit", "icon_ellipsis": "Ellipsis", "icon_ellipsis-vertical": "EllipsisVertical", "icon_external-link": "ExternalLink", "icon_eye": "Eye", "icon_eye-off": "EyeOff", "icon_face-angry": "FaceAngry", "icon_file": "File", "icon_file-check": "FileCheck", "icon_file-check-corner": "FileCheckCorner", "icon_file-clock": "FileClock", "icon_file-exclamation-point": "FileExclamationPoint", "icon_file-input": "FileInput", "icon_file-minus": "FileMinus", "icon_file-scan": "FileScan", "icon_file-search-corner": "FileSearchCorner", "icon_file-x": "FileX", "icon_file-x-corner": "FileXCorner", "icon_folder": "Folder", "icon_folder-closed": "FolderClosed", "icon_frown": "Frown", "icon_funnel": "Funnel", "icon_funnel-x": "FunnelX", "icon_grid-2x2": "Grid2x2", "icon_grip-vertical": "GripVertical", "icon_hard-drive": "HardDrive", "icon_hat-glasses": "HatGlasses", "icon_headset": "Headset", "icon_heart": "Heart", "icon_house": "House", "icon_image": "Image", "icon_inbox": "Inbox", "icon_info": "Info", "icon_layers": "Layers", "icon_layout-grid": "LayoutGrid", "icon_layout-list": "LayoutList", "icon_layout-template": "LayoutTemplate", "icon_library-big": "LibraryBig", "icon_link": "Link", "icon_link-2": "Link2", "icon_list-checks": "ListChecks", "icon_loader": "Loader", "icon_loader-circle": "LoaderCircle", "icon_log-out": "LogOut", "icon_message-circle": "MessageCircle", "icon_message-circle-check": "MessageCircleCheck", "icon_message-circle-plus": "MessageCirclePlus", "icon_message-circle-x": "MessageCircleX", "icon_message-square-plus": "MessageSquarePlus", "icon_message-square-x": "MessageSquareX", "icon_messages-square": "MessagesSquare", "icon_mic": "Mic", "icon_monitor-check": "MonitorCheck", "icon_monitor-smartphone": "MonitorSmartphone", "icon_moon": "Moon", "icon_move-down": "MoveDown", "icon_move-right": "MoveRight", "icon_move-up": "MoveUp", "icon_network": "Network", "icon_newspaper": "Newspaper", "icon_panel-left-close": "PanelLeftClose", "icon_panel-left-open": "PanelLeftOpen", "icon_pencil": "Pencil", "icon_plus": "Plus", "icon_refresh-ccw": "RefreshCcw", "icon_scan": "Scan", "icon_scan-text": "ScanText", "icon_search": "Search", "icon_search-check": "SearchCheck", "icon_search-code": "SearchCode", "icon_server": "Server", "icon_settings": "Settings", "icon_settings-2": "Settings2", "icon_shield-alert": "ShieldAlert", "icon_shield-check": "ShieldCheck", "icon_shield-user": "ShieldUser", "icon_signal": "Signal", "icon_siren": "Siren", "icon_smile": "Smile", "icon_square-arrow-out-up-right": "SquareArrowOutUpRight", "icon_square-minus": "SquareMinus", "icon_square-plus": "SquarePlus", "icon_star": "Star", "icon_sun": "Sun", "icon_sun-moon": "SunMoon", "icon_trash": "Trash", "icon_trash-2": "Trash2", "icon_user": "User", "icon_user-check": "UserCheck", "icon_user-lock": "UserLock", "icon_user-search": "UserSearch", "icon_wifi": "Wifi",
} as const;

export type FigmaLucideIconName = keyof typeof figmaToLucide;
export const figmaLucideNames = Object.keys(figmaToLucide) as FigmaLucideIconName[];

export const unresolvedFigmaIconNames = [
  'icon_antifraud', 'icon_close', 'icon_eis-bb', 'icon_funnel-sort-down',
  'icon_funnel-sort-up', 'icon_oip', 'icon_placeholder', 'icon_staff', 'icon_unisafe',
] as const;

type ArgusIconProps = Omit<LucideProps, 'size'> & {
  name: FigmaLucideIconName;
  size?: 14 | 16 | 18 | 20 | 24 | 48;
  label?: string;
};

export function ArgusIcon({ name, size = 16, label, ...props }: ArgusIconProps) {
  const componentName = figmaToLucide[name];
  const Glyph = Lucide[componentName as keyof typeof Lucide] as LucideIcon;
  return <Glyph aria-hidden={label ? undefined : true} aria-label={label} role={label ? 'img' : undefined} size={size} strokeWidth={2} {...props} />;
}
