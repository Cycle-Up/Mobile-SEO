import Link from 'next/link';

/**
 * Verplichte, zichtbare affiliate-transparantie bij elke commerciele PureAqua-link
 * (ACM-leidraad / Nederlandse Reclamecode). Het data-attribuut data-affiliate-disclosure
 * wordt door scripts/check-affiliate.mjs gecontroleerd: pagina's met een shop-link
 * moeten deze disclosure bevatten.
 */
export function AffiliateDisclosure({ className = '' }: { className?: string }) {
  return (
    <p data-affiliate-disclosure className={`text-xs text-gray-400 ${className}`}>
      Transparantie: WaterfilterPlatform is gelieerd aan PureAqua en kan een vergoeding ontvangen
      wanneer je via onze links iets aanschaft. Dit beinvloedt onze onafhankelijke beoordeling niet.
      Lees onze <Link href="/methodologie" className="underline">methodologie</Link>.
    </p>
  );
}
