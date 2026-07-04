import Link from 'next/link';
import { buildShopUrl, DESTINATIONS } from '@/lib/pureaqua.mjs';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';

type DestinationKey = keyof typeof DESTINATIONS;

interface AffiliateCTAProps {
  /** Bestemming uit de geverifieerde allowlist (lib/pureaqua.mjs). */
  destination: DestinationKey;
  /** UTM-campagne, meestal het contentcluster (bv. "waterontharder"). */
  campaign: string;
  /** UTM-content, meestal "<paginaslug>-<placement>" voor per-blok-attributie. */
  content: string;
  /** Knoptekst; valt terug op het label van de bestemming. */
  label?: string;
  title?: string;
  sub?: string;
  variant?: 'banner' | 'inline';
}

function Chevron() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Herbruikbaar, eerlijk en getagd conversieblok naar de PureAqua Shopify-store.
 * Rendert altijd rel="sponsored" + een zichtbare affiliate-disclosure.
 */
export function AffiliateCTA({ destination, campaign, content, label, title, sub, variant = 'banner' }: AffiliateCTAProps) {
  const href = buildShopUrl(destination, { campaign, content });
  const text = label ?? DESTINATIONS[destination].label;

  if (variant === 'inline') {
    return (
      <span className="inline-flex flex-col gap-1">
        <a
          href={href}
          rel="sponsored"
          className="inline-flex items-center gap-1.5 bg-[#005F8A] text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#003F5C] transition-colors w-fit"
        >
          {text}
          <Chevron />
        </a>
        <AffiliateDisclosure />
      </span>
    );
  }

  return (
    <div className="bg-[#E0F2FE] border border-[#BAE6FD] rounded-2xl p-6 md:p-8 text-center shadow-sm">
      {title && <h2 className="text-xl md:text-2xl font-bold text-[#003F5C] mb-2">{title}</h2>}
      {sub && <p className="text-gray-600 mb-5 max-w-lg mx-auto">{sub}</p>}
      <a
        href={href}
        rel="sponsored"
        className="inline-flex items-center gap-2 bg-[#005F8A] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#003F5C] transition-colors text-sm md:text-base"
      >
        {text}
        <Chevron />
      </a>
      <p className="mt-3">
        <Link href="/aanbevolen" className="text-sm text-[#005F8A] underline hover:no-underline">
          Of bekijk alle aanbevolen producten
        </Link>
      </p>
      <AffiliateDisclosure className="mt-4" />
    </div>
  );
}
