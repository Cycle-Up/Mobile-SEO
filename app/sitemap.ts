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
    { url: `${BASE}/kennisbank`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ];

  const gemeentePages: MetadataRoute.Sitemap = gemeenten.map(g => ({
    url: `${BASE}/waterhardheid/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  const kennisbankPages: MetadataRoute.Sitemap = getKennisbankSlugs().map(slug => ({
    url: `${BASE}/kennisbank/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...gemeentePages, ...kennisbankPages];
}
