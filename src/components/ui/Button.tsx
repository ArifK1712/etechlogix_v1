import type React from 'react';
import { Link } from 'react-router-dom';
import { isExternalLink, toInternalTo } from '../InternalLink';

export type ButtonVariant =
  | 'primary'
  | 'primaryDark'
  | 'secondary'
  | 'secondaryInverse'
  | 'ghost'
  | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'hero' | 'section';

export interface ButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'btn-etech btn-etech--primary',
  primaryDark: 'btn-etech btn-etech--primary-dark',
  secondary: 'btn-etech btn-etech--secondary',
  secondaryInverse: 'btn-etech btn-etech--secondary-inverse',
  ghost: 'btn-etech btn-etech--ghost',
  outline: 'btn-etech btn-etech--outline',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'btn-etech--sm',
  md: 'btn-etech--md',
  lg: 'btn-etech--lg',
  hero: 'btn-etech--hero',
  section: 'btn-etech--section',
};

export function buttonClassName(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  extra = '',
) {
  return `${variantClasses[variant]} ${sizeClasses[size]} ${extra}`.trim();
}

export function Button({
  variant = 'primaryDark',
  size = 'md',
  children,
  icon,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const classes = `${buttonClassName(variant, size)} group ${className}`.trim();

  const content = (
    <>
      <span className="relative z-10 whitespace-nowrap">{children}</span>
      {icon && (
        <span className="relative z-10 w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href && !isExternalLink(href)) {
    return (
      <Link to={toInternalTo(href)} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {content}
    </a>
  );
}
