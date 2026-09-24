import Link from 'next/link';
import { buildShopUrl } from '@/lib/pureaqua.mjs';
import { JOEP, JOEP_MARKET, JOEP_RECOMMENDATION_CRITERIA, JOEP_MIN_DH } from '@/lib/joep.mjs';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';

interface JoepRecommendationProps {
  /** UTM-content, meestal "<paginaslug>-aanbeveling". */
  content: string;
}

/**
 * Redactionele aanbeveling van de JOEP waterontharder, met transparante criteria,
 * marktvergelijking, eerlijke kanttekeningen en disclosure. Geen kaal superlatief:
 * we noemen JOEP een van de sterkste keuzes in deze prijsklasse, niet "de beste".
 */
export function JoepRecommendation({ content }: JoepRecommendationProps) {
  const href = buildShopUrl('joep', { campaign: 'waterontharder', content });
  return (
    <section className="border-2 border-[#005F8A] bg-[#F0F9FF] rounded-2xl p-5 md:p-7 shadow-sm">
      <span className="inline-block bg-[#005F8A] text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
        Onze aanbeveling
      </span>
      <h2 className="text-xl md:text-2xl font-bold text-[#003F5C] mt-3 mb-2">
        JOEP waterontharder: een van de sterkste keuzes in deze prijsklasse
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Voor huishoudens met hard water (vanaf ongeveer {JOEP_MIN_DH} dH) raden wij de JOEP waterontharder van
        AquaSens aan. Compleet geïnstalleerd kost hij {JOEP.installedPrice}; zelf installeren kan voor{' '}
        {JOEP.devicePrice}. Complete ontharders kosten doorgaans {JOEP_MARKET.typicalInstalledRange}, en een
        vergelijkbaar compact merkmodel als de {JOEP_MARKET.comparable.name} kost circa{' '}
        {JOEP_MARKET.comparable.installedPrice} geïnstalleerd.
      </p>
      <p className="font-semibold text-gray-800 text-sm mb-2">Waarom wij JOEP aanraden:</p>
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
        {JOEP_RECOMMENDATION_CRITERIA.map(c => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-600 mb-5">
        <strong>Goed om te weten:</strong> tijdens de nachtelijke regeneratie is het water circa een uur hard,
        JOEP heeft zout en een stopcontact nodig, en bij een groot huishouden of hoog piekverbruik laat je vooraf
        checken of het formaat past. Bij zacht water heb je geen ontharder nodig.
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <a
          href={href}
          rel="sponsored"
          className="inline-flex justify-center items-center bg-[#005F8A] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#003F5C] transition-colors"
        >
          Bekijk JOEP bij PureAqua
        </a>
        <Link href={JOEP.reviewPath} className="text-sm text-[#005F8A] underline hover:no-underline">
          Lees onze volledige JOEP-koopgids
        </Link>
      </div>
      <p className="text-xs text-gray-400 mt-4">
        Prijsvergelijking: {JOEP_MARKET.rangeSources.join(' en ')} (prijsklasse), {JOEP_MARKET.comparable.source}{' '}
        en PureAqua (JOEP), peildatum september 2026.
      </p>
      <AffiliateDisclosure className="mt-2" />
    </section>
  );
}
