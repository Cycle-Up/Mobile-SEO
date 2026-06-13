'use client';

import { useEffect } from 'react';
import { affiliateClickPayload } from '@/lib/pureaqua.mjs';

/**
 * Meet kliks op PureAqua-shoplinks (affiliate) en pusht ze naar de dataLayer, zodat
 * GTM/GA4 ze kan oppakken zodra die is gekoppeld. Werkt via een gedelegeerde
 * click-listener, dus elke huidige en toekomstige shop-link wordt automatisch gemeten
 * zonder per-link-aanpassingen. Doet niets schadelijks als er (nog) geen GTM aanwezig is.
 */
export function AffiliateAnalytics() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target && target.closest ? (target.closest('a[href]') as HTMLAnchorElement | null) : null;
      if (!anchor) return;
      const payload = affiliateClickPayload(anchor.href);
      if (!payload) return;
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push(payload);
    }
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
