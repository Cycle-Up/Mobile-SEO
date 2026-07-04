import Link from 'next/link';
import { buildShopUrl, DESTINATIONS } from '@/lib/pureaqua.mjs';
import { PRODUCTS } from '@/lib/pureaqua-products.mjs';

type Product = (typeof PRODUCTS)[number];

/**
 * Productkaart voor PureAqua-producten: eerlijke omschrijving, prijs alleen
 * indien geverifieerd, knop naar de shop (rel=sponsored + UTM via allowlist)
 * en een interne link naar onze onafhankelijke context-/reviewpagina.
 * De pagina die deze kaarten rendert toont de AffiliateDisclosure.
 */
export function ProductCard({ product, content }: { product: Product; content: string }) {
  const href = buildShopUrl(product.key as keyof typeof DESTINATIONS, {
    campaign: product.campaign,
    content,
  });

  return (
    <div className="border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 hover:border-[#BAE6FD] hover:shadow-sm transition-all bg-white">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#005F8A]">{product.category}</p>
        <h3 className="text-lg font-bold text-[#003F5C] mt-1">{product.name}</h3>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{product.tagline}</p>
      {product.price && (
        <p className="text-sm text-gray-800">
          <span className="font-bold text-[#003F5C]">vanaf EUR {product.price.replace('.', ',')}</span>
          <span className="text-xs text-gray-400"> (prijs bij publicatie, zie actuele prijs bij PureAqua)</span>
        </p>
      )}
      <div className="flex flex-col gap-2 pt-1">
        <a
          href={href}
          rel="sponsored"
          className="inline-flex justify-center items-center bg-[#005F8A] text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors"
        >
          Bekijk bij PureAqua
        </a>
        <Link href={product.reviewHref} className="text-xs text-[#005F8A] underline hover:no-underline text-center">
          {product.reviewLabel}
        </Link>
      </div>
    </div>
  );
}
