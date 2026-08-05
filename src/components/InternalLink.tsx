import { Link, type LinkProps } from 'react-router-dom';

export function isExternalLink(href: string) {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

/** Maps `#section` → `/#section` and leaves `/paths` unchanged. */
export function toInternalTo(href: string): string {
  if (href.startsWith('#')) return `/${href}`;
  return href;
}

type InternalLinkProps = Omit<LinkProps, 'to'> & {
  href: string;
};

export function InternalLink({ href, children, ...props }: InternalLinkProps) {
  if (isExternalLink(href)) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={toInternalTo(href)} {...props}>
      {children}
    </Link>
  );
}
