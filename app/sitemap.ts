import type { MetadataRoute } from 'next';
import { gemeenten } from '@/data/gemeenten';
import fs from 'fs';
import path from 'path';

const BASE = 'https://waterfilterplatform.nl';

function getKennisbankSlugs(): string[] {
  const dir = path.join(process.cwd(), 'content/kennisbank');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/omgekeerde-osmose`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/omgekeerde-osmose/kopen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/omgekeerde-osmose/wat-is-osmose-water`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/omgekeerde-osmose/voor-thuis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/kokend-water-kraan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/kokend-water-kraan/vergelijken`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/kokend-water-kraan/met-filter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/heet-water-kraan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/waterhardheid`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/waterontharder`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/waterfilter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/kennisbank`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/over-ons`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/quooker-alternatief`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/grohe-red-alternatief`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/sodastream-alternatief`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/beste-waterfilter-2026`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/beste-osmosefilter-2026`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/beste-kokend-water-kraan-2026`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  const gemeentePages: MetadataRoute.Sitemap = gemeenten.flatMap(g => [
    { url: `${BASE}/waterhardheid/${g.slug}`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${BASE}/drinkwater/${g.slug}`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${BASE}/kalk-in/${g.slug}`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${BASE}/waterontharder/${g.slug}`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${BASE}/waterfilter/${g.slug}`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${BASE}/osmose-filter/${g.slug}`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
  ]);

  const kennisbankPages: MetadataRoute.Sitemap = getKennisbankSlugs().map(slug => ({
    url: `${BASE}/kennisbank/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...gemeentePages, ...kennisbankPages];
}
