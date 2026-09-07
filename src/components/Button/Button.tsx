import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';

export type ButtonVariant = 'primary' | 'default' | 'text';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
  children: ReactNode;
}

export function Button({ variant = 'default', loading = false, children, disabled, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`argus-button argus-button--${variant} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && <span className="argus-button__spinner" aria-hidden="true" />}
      {children}
    </button>
  );
}
