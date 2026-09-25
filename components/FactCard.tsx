import { FACT_CARDS, FACT_CARDS_CHECKED_AT } from '@/lib/feitenkaarten.mjs';

type FactCardId = keyof typeof FACT_CARDS;

/**
 * Korte, citeerbare feitenkaart bovenaan een productpagina. Tekst komt uit
 * lib/feitenkaarten.mjs, dezelfde bron als public/llms.txt.
 */
export function FactCard({ id }: { id: FactCardId }) {
  const card = FACT_CARDS[id];
  return (
    <section aria-label={`Feitenkaart ${card.name}`} className="border border-gray-200 bg-white rounded-2xl p-5 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wide text-[#005F8A] mb-2">Feitenkaart</p>
      <p className="text-gray-800 leading-relaxed mb-4">{card.summary}</p>
      <dl className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-4 gap-y-2 text-sm">
        {card.rows.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="font-semibold text-gray-700">{label}</dt>
            <dd className="text-gray-600">{value}</dd>
          </div>
        ))}
      </dl>
      {'source' in card && card.source && (
        <p className="text-sm mt-4">
          <a href={card.source.url} rel="noopener" className="text-[#005F8A] underline">{card.source.label}</a>
        </p>
      )}
      <p className="text-xs text-gray-400 mt-4">Gecontroleerd op {FACT_CARDS_CHECKED_AT}. Verkocht door PureAqua, waaraan WaterfilterPlatform gelieerd is.</p>
    </section>
  );
}
