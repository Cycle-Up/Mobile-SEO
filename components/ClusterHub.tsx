import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import type { CTAContext, ClusterPage, RelatedCluster } from '@/data/clusters';

interface ClusterHubProps {
  intro: React.ReactNode;
  pages: ClusterPage[];
  ctaContext: CTAContext;
  relatedClusters?: RelatedCluster[];
}

export function ClusterHub({ intro, pages, ctaContext, relatedClusters }: ClusterHubProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
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
              className="group block border border-gray-200 rounded-xl p-5 hover:border-[#005F8A] hover:shadow-sm transition-all"
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
        <section className="mt-12 border-t border-gray-100 pt-8">
          <h2 className="text-lg font-semibold text-[#003F5C] mb-4">Verwante onderwerpen</h2>
          <div className="flex flex-wrap gap-3">
            {relatedClusters.map((cluster) => (
              <Link
                key={cluster.href}
                href={cluster.href}
                className="inline-flex items-center gap-1.5 bg-[#E0F2FE] text-[#005F8A] font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {cluster.label} &rarr;
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
