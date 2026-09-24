import Link from 'next/link';

/**
 * Verplichte, zichtbare affiliate-transparantie bij elke commerciele PureAqua- of PureFilter-link
 * (ACM-leidraad / Nederlandse Reclamecode). Het data-attribuut data-affiliate-disclosure
 * wordt door scripts/check-affiliate.mjs gecontroleerd: pagina's met een shop-link
 * moeten deze disclosure bevatten.
 */
export function AffiliateDisclosure({ className = '' }: { className?: string }) {
  return (
    <p data-affiliate-disclosure className={`text-xs text-gray-400 ${className}`}>
      Transparantie: WaterfilterPlatform is gelieerd aan PureAqua, de onderneming achter PureAqua.nl en
      PureFilter.nl. Koop je via onze links, dan verdient PureAqua daaraan. Eigen producten beoordelen we
      met dezelfde bron- en bewijsregels als andere producten; wat niet onafhankelijk is aangetoond,
      noemen we geclaimd. Lees onze <Link href="/methodologie" className="underline">methodologie</Link>.
    </p>
  );
}
