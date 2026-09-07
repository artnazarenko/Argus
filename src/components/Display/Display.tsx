import type { ReactNode } from 'react';
import './display.css';
export function Tag({ children, color = 'primary' }: { children: ReactNode; color?: 'primary' | 'success' | 'warning' | 'error' }) { return <span className={`argus-tag argus-tag--${color}`}>{children}</span>; }
export function Badge({ count }: { count: number }) { return <span className="argus-badge" aria-label={`Уведомления: ${count}`}>{count > 99 ? '99+' : count}</span>; }
export function Avatar({ initials = 'КБ', size = 'default' }: { initials?: string; size?: 'small' | 'default' | 'large' }) { return <span className={`argus-avatar argus-avatar--${size}`} aria-label="Аватар пользователя">{initials}</span>; }
export function Divider({ label }: { label?: string }) { return <div className="argus-divider">{label && <span>{label}</span>}</div>; }
