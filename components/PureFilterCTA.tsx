import Link from 'next/link';
import { buildShopUrl } from '@/lib/pureaqua.mjs';
import { PUREFILTER } from '@/lib/purefilter.mjs';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';

type Context = 'pfas' | 'smaak' | 'onder-aanrecht' | 'filterkan' | 'algemeen';

// Per context een eerlijke invalshoek. Alle cijfers komen uit lib/purefilter.mjs;
// geen claims die niet onafhankelijk zijn aangetoond (zie BLOCKED_PUREFILTER_CLAIMS).
const COPY: Record<Context, { title: string; sub: string }> = {
  pfas: {
    title: 'Minder PFAS zonder osmosesysteem?',
    sub: `PureFilter Mineral+ verminderde in een onafhankelijke labtest vijf PFAS met circa ${PUREFILTER.pfasReduction}, zonder afvalwater of tank. Wil je de maximale reductie, dan blijft omgekeerde osmose sterker.`,
  },
  smaak: {
    title: 'Chloorsmaak kwijt, mineralen behouden',
    sub: 'PureFilter Mineral+ filtert via koolstofvezel onder het aanrecht en voegt daarna mineralen toe voor een volle smaak. Direct uit je gewone kraan, zonder afvalwater.',
  },
  'onder-aanrecht': {
    title: 'Compact filter onder het aanrecht, zonder osmose',
    sub: `PureFilter Mineral+ zet je zelf op de koude leiding: geen tank, stroom of spoelwater. ${PUREFILTER.price} inclusief eerste cartridge; labtest: circa ${PUREFILTER.pfasReduction} minder van vijf PFAS.`,
  },
  filterkan: {
    title: 'Klaar met bijvullen?',
    sub: `Met PureFilter Mineral+ komt gefilterd water direct uit je kraan. Eenmalig ${PUREFILTER.price}, daarna een cartridge per 6 tot 12 maanden; labtest: circa ${PUREFILTER.pfasReduction} minder van vijf PFAS.`,
  },
  algemeen: {
    title: 'Gefilterd water direct uit je kraan',
    sub: `PureFilter Mineral+: compact filter onder het aanrecht, zonder afvalwater. ${PUREFILTER.price} inclusief eerste cartridge, 5 jaar garantie en 40 dagen retour.`,
  },
};

interface PureFilterCTAProps {
  context: Context;
  /** UTM-content, meestal "<paginaslug>-<placement>". */
  content: string;
}

/**
 * Conversieblok voor PureFilter Mineral+ (eigen merk van PureAqua). Rendert altijd
 * rel="sponsored", UTM-tags via de allowlist, een link naar de review en de disclosure.
 */
export function PureFilterCTA({ context, content }: PureFilterCTAProps) {
  const c = COPY[context];
  const href = buildShopUrl('purefilterMineral', { campaign: 'purefilter', content });
  return (
    <div className="border border-[#BAE6FD] bg-white rounded-2xl p-5 md:p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#005F8A]">PureFilter Mineral+</p>
      <h2 className="text-lg md:text-xl font-bold text-[#003F5C] mt-1 mb-2">{c.title}</h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.sub}</p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <a
          href={href}
          rel="sponsored"
          className="inline-flex justify-center items-center bg-[#005F8A] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors"
        >
          Bekijk bij PureFilter.nl
        </a>
        <Link href={PUREFILTER.reviewPath} className="text-sm text-[#005F8A] underline hover:no-underline">
          Lees eerst onze review met labtest
        </Link>
      </div>
      <AffiliateDisclosure className="mt-4" />
    </div>
  );
}
