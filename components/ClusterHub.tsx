import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import type { CTAContext, ClusterPage, RelatedCluster } from '@/data/clusters';

function ChevronRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface ClusterHubProps {
  intro: React.ReactNode;
  pages: ClusterPage[];
  ctaContext: CTAContext;
  relatedClusters?: RelatedCluster[];
  collectionName?: string;
  collectionUrl?: string;
  collectionDescription?: string;
}

export function ClusterHub({
  intro,
  pages,
  ctaContext,
  relatedClusters,
  collectionName,
  collectionUrl,
  collectionDescription,
}: ClusterHubProps) {
  const hasCollection = collectionName && collectionUrl;
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {hasCollection && (
        <SchemaOrg
          schema={[
            {
              '@type': 'CollectionPage',
              name: collectionName,
              url: collectionUrl,
              description: collectionDescription ?? collectionName,
              inLanguage: 'nl-NL',
              isPartOf: {
                '@type': 'WebSite',
                name: 'WaterfilterPlatform',
                url: 'https://waterfilterplatform.nl',
              },
              mainEntity: {
                '@type': 'ItemList',
                numberOfItems: pages.length,
                itemListElement: pages.map((page, idx) => ({
                  '@type': 'ListItem',
                  position: idx + 1,
                  name: page.title,
                  url: `https://waterfilterplatform.nl${page.href}`,
                  description: page.description,
                })),
              },
            },
          ]}
        />
      )}

      <CTABanner context={ctaContext} />

      <div className="mt-10 text-gray-700 leading-relaxed space-y-4">
        {intro}
      </div>

      <section className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group block border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[#BAE6FD] transition-all"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-[#005F8A] group-hover:text-[#003F5C] transition-colors">
                  {page.title}
                </h3>
                {page.badge && (
                  <span
                    className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${
                      page.badge === 'Populair'
                        ? 'bg-[#E0F2FE] text-[#005F8A]'
                        : page.badge === 'Nieuw'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {page.badge}
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-sm text-gray-600">{page.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {relatedClusters && relatedClusters.length > 0 && (
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-semibold text-[#003F5C] mb-4">Verwante onderwerpen</h2>
          <div className="flex flex-wrap gap-3">
            {relatedClusters.map((cluster) => (
              <Link
                key={cluster.href}
                href={cluster.href}
                className="inline-flex items-center gap-1.5 bg-[#E0F2FE] text-[#005F8A] font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {cluster.label}
                <ChevronRight />
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-10">
        <CTABanner context={ctaContext} />
      </div>
    </div>
  );
}
