'use client';

// The only component that renders external affiliate anchors.
// Native <a>, no router/JS navigation, analytics never block or rewrite the href.
export default function AffiliateLink({ href, children, className = '', placement = 'unknown', ariaLabel }) {
  if (!href) return null; // fail safe: never render a dead/fake CTA

  const track = () => {
    try {
      if (typeof window === 'undefined') return;
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'affiliate_click', { placement, destination: href });
      }
      if (typeof window.fbq === 'function') {
        window.fbq('trackCustom', 'AffiliateClick', { placement });
      }
    } catch {
      /* tracking must never interfere with navigation */
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      data-placement={placement}
      onClick={track}
      className={className}
    >
      {children}
    </a>
  );
}
