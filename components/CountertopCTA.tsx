import Link from 'next/link';
import { buildShopUrl } from '@/lib/pureaqua.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';

type Context = 'huur' | 'pfas' | 'alternatief' | 'algemeen';

// Alle feiten komen uit lib/countertop.mjs; geen claims uit BLOCKED_COUNTERTOP_CLAIMS.
const COPY: Record<Context, { title: string; sub: string }> = {
  huur: {
    title: 'Osmosewater zonder boren of installatie',
    sub: `Het ${COUNTERTOP.name} zet je op het aanrecht: stekker erin, tank vullen, klaar. Omgekeerde osmose met remineralisatie en zes temperatuurstanden tot ${COUNTERTOP.maxTemp}. ${COUNTERTOP.price}.`,
  },
  pfas: {
    title: 'Omgekeerde osmose op het aanrecht',
    sub: `Wil je de filtratie van omgekeerde osmose zonder installatie? Het ${COUNTERTOP.name} filtert met een osmosemembraan en voegt daarna mineralen toe; heet water tot ${COUNTERTOP.maxTemp}. ${COUNTERTOP.price}.`,
  },
  alternatief: {
    title: 'Onze keuze als beste countertop-osmose 2026',
    sub: `Het ${COUNTERTOP.name}: omgekeerde osmose met remineralisatie, zes temperatuurstanden tot ${COUNTERTOP.maxTemp} en geen installatie, voor ${COUNTERTOP.price}.`,
  },
  algemeen: {
    title: 'Zuiver water zonder installatie',
    sub: `Het ${COUNTERTOP.name}: countertop-osmose met remineralisatie en heet water tot ${COUNTERTOP.maxTemp}, voor ${COUNTERTOP.price}.`,
  },
};

interface CountertopCTAProps {
  context: Context;
  /** UTM-content, meestal "<paginaslug>-<placement>". */
  content: string;
}

/** Conversieblok voor het PureAqua Water zuiver apparaat (rel=sponsored, UTM, disclosure). */
export function CountertopCTA({ context, content }: CountertopCTAProps) {
  const c = COPY[context];
  const href = buildShopUrl('countertopRo', { campaign: 'countertop', content });
  return (
    <div className="border border-[#BAE6FD] bg-white rounded-2xl p-5 md:p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#005F8A]">PureAqua Water zuiver apparaat</p>
      <h2 className="text-lg md:text-xl font-bold text-[#003F5C] mt-1 mb-2">{c.title}</h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.sub}</p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <a
          href={href}
          rel="sponsored"
          className="inline-flex justify-center items-center bg-[#005F8A] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors"
        >
          Bekijk het apparaat bij PureAqua
        </a>
        <Link href={COUNTERTOP.reviewPath} className="text-sm text-[#005F8A] underline hover:no-underline">
          Lees onze countertop-koopgids
        </Link>
      </div>
      <AffiliateDisclosure className="mt-4" />
    </div>
  );
}
