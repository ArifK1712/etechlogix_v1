import { forwardRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

export function isExternalLink(href: string) {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

/** Maps `#section` → `/#section` and leaves `/paths` unchanged. */
export function toInternalTo(href: string): string {
  if (href.startsWith('#')) return `/${href}`;
  return href;
}

export type InternalLinkProps = Omit<LinkProps, 'to'> & {
  href: string;
};

export const InternalLink = forwardRef<HTMLAnchorElement, InternalLinkProps>(
  ({ href, children, ...props }, ref) => {
    if (isExternalLink(href)) {
      return (
        <a ref={ref} href={href} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link ref={ref} to={toInternalTo(href)} {...props}>
        {children}
      </Link>
    );
  }
);

InternalLink.displayName = 'InternalLink';
