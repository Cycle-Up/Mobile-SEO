import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Machine-leesbare JSON-feed van alle kennisbankartikelen (titel, beschrijving,
// quickAnswer, datum, canonieke URL). Voor AI-agents en integraties.
// Bereikbaar op /kennisbank/index.json.
export const dynamic = 'force-static';

const BASE = 'https://waterfilterplatform.nl';
const contentDir = path.join(process.cwd(), 'content/kennisbank');

export async function GET() {
  const files = fs.existsSync(contentDir)
    ? fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx') && !f.startsWith('_')).sort()
    : [];

  const items = files.map(f => {
    const slug = f.replace(/\.mdx$/, '');
    const { data } = matter(fs.readFileSync(path.join(contentDir, f), 'utf-8'));
    return {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ''),
      quickAnswer: String(data.quickAnswer ?? ''),
      date: data.date ?? null,
      lastModified: data.lastModified ?? data.date ?? null,
      url: `${BASE}/kennisbank/${slug}`,
    };
  });

  const payload = {
    name: 'WaterfilterPlatform Kennisbank',
    url: `${BASE}/kennisbank`,
    count: items.length,
    license: `${BASE}/ai.txt`,
    items,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
