import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// RSS 2.0-feed voor de kennisbank: de nieuwste artikelen, gesorteerd op datum.
// Bereikbaar op /kennisbank/feed.xml. Statisch gegenereerd bij build.
export const dynamic = 'force-static';

const BASE = 'https://waterfilterplatform.nl';
const MAX_ITEMS = 50;
const contentDir = path.join(process.cwd(), 'content/kennisbank');

function escapeXml(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function loadArticles() {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir)
    .filter(f => f.endsWith('.mdx') && !f.startsWith('_'))
    .map(f => {
      const { data } = matter(fs.readFileSync(path.join(contentDir, f), 'utf-8'));
      return {
        slug: f.replace(/\.mdx$/, ''),
        title: String(data.title ?? f),
        description: String(data.description ?? ''),
        date: data.lastModified ?? data.date ?? null,
      };
    })
    .filter(a => a.date)
    .sort((a, b) => new Date(String(b.date)).getTime() - new Date(String(a.date)).getTime())
    .slice(0, MAX_ITEMS);
}

export async function GET() {
  const articles = loadArticles();
  const updated = articles[0]?.date ? new Date(String(articles[0].date)).toUTCString() : new Date().toUTCString();

  const items = articles.map(a => {
    const url = `${BASE}/kennisbank/${a.slug}`;
    return [
      '    <item>',
      `      <title>${escapeXml(a.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <pubDate>${new Date(String(a.date)).toUTCString()}</pubDate>`,
      `      <description>${escapeXml(a.description)}</description>`,
      '    </item>',
    ].join('\n');
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>WaterfilterPlatform Kennisbank</title>
    <link>${BASE}/kennisbank</link>
    <atom:link href="${BASE}/kennisbank/feed.xml" rel="self" type="application/rss+xml" />
    <description>Nieuwste artikelen over waterfilters, omgekeerde osmose, drinkwaterkwaliteit en waterhardheid in Nederland.</description>
    <language>nl-NL</language>
    <lastBuildDate>${updated}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
