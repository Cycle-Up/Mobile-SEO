import Link from 'next/link';
import { buildShopUrl } from '@/lib/pureaqua.mjs';
import { JOEP, JOEP_MIN_DH, JOEP_NO_FUSS, JOEP_NO_FUSS_POINTS, JOEP_POSITIONING } from '@/lib/joep.mjs';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';

type Context = 'hard-water' | 'kosten' | 'vergelijken' | 'merk' | 'algemeen';

interface JoepCTAProps {
  context: Context;
  /** UTM-content, meestal "<paginaslug>-<placement>". */
  content: string;
  /** Optioneel: gemeentenaam en hardheid voor een lokale invalshoek. */
  plaats?: string;
  dH?: number;
}

interface Copy {
  title: string;
  sub: string;
  /** Optioneel: korte opsomming (JOEP_NO_FUSS) waar die de lezer helpt kiezen. */
  points?: readonly string[];
}

// Alle feiten komen uit lib/joep.mjs; geen claims uit BLOCKED_JOEP_CLAIMS. Oordelen
// ("onze keuze", "volgens ons") staan altijd toegeschreven.
function copyFor(context: Context, plaats?: string, dH?: number): Copy {
  switch (context) {
    case 'hard-water':
      return {
        title: plaats && dH ? `${dH} dH in ${plaats}: kalk in het hele huis aanpakken` : 'Hard water in het hele huis aanpakken',
        sub: `De JOEP waterontharder van AquaSens ontkalkt al het water in huis via ionenwisseling met zout, tot ${JOEP.flow.replace('maximaal ', '')}. Compact formaat: ${JOEP.dimensions}. Bij PureAqua ${JOEP.devicePrice}, of ${JOEP.installedPrice} compleet geïnstalleerd.`,
      };
    case 'kosten':
      return {
        title: 'Wat kost de JOEP waterontharder?',
        sub: `Bij PureAqua ${JOEP.devicePrice}, of ${JOEP.installedPrice} compleet geïnstalleerd. ${JOEP_NO_FUSS_POINTS.subscription}. Doorlopend betaal je vooral zout: per regeneratie ${JOEP.saltPerRegeneration} zout en ${JOEP.waterPerRegeneration} water; fabrieksgarantie van 20 jaar op de hars.`,
      };
    case 'vergelijken':
      return {
        title: 'Onze keuze als beste waterontharder 2026: JOEP',
        sub: `JOEP: zeer compacte ionenwisselaar met zout, gemaakt in ${JOEP.madeIn}, ${JOEP.flow} en 20 jaar fabrieksgarantie op de hars. ${JOEP.devicePrice}, of ${JOEP.installedPrice} compleet geïnstalleerd.`,
      };
    case 'merk':
      return {
        title: 'Onze keuze als beste waterontharder 2026: JOEP',
        sub: `${JOEP_POSITIONING} Een waterontharder met zout, gemaakt in ${JOEP.madeIn} en ook verkocht via AquaCell, ${JOEP.flow}.`,
        points: JOEP_NO_FUSS,
      };
    default:
      return {
        title: 'Kalkvrij water in het hele huis',
        sub: `${JOEP_POSITIONING} Compact, ${JOEP.flow}. Bij PureAqua ${JOEP.devicePrice}, of ${JOEP.installedPrice} compleet geïnstalleerd. Zinvol vanaf ongeveer ${JOEP_MIN_DH} dH.`,
      };
  }
}

/**
 * Conversieblok voor de JOEP waterontharder (merk van AquaSens, verkocht via PureAqua).
 * Rendert altijd rel="sponsored", UTM-tags via de allowlist, een link naar onze
 * Joep-pagina en de affiliate-disclosure.
 */
export function JoepCTA({ context, content, plaats, dH }: JoepCTAProps) {
  const c = copyFor(context, plaats, dH);
  const href = buildShopUrl('joep', { campaign: 'waterontharder', content });
  return (
    <div className="border border-[#BAE6FD] bg-white rounded-2xl p-5 md:p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#005F8A]">JOEP waterontharder</p>
      <h2 className="text-lg md:text-xl font-bold text-[#003F5C] mt-1 mb-2">{c.title}</h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.sub}</p>
      {c.points && (
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 mb-4">
          {c.points.map(p => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <a
          href={href}
          rel="sponsored"
          className="inline-flex justify-center items-center bg-[#005F8A] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors"
        >
          Bekijk JOEP bij PureAqua
        </a>
        <Link href={JOEP.reviewPath} className="text-sm text-[#005F8A] underline hover:no-underline">
          Specificaties, kosten en voor wie
        </Link>
      </div>
      <AffiliateDisclosure className="mt-4" />
    </div>
  );
}
