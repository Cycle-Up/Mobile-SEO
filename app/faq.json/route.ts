import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Doorzoekbare FAQ-export: per kennisbankartikel een vraag (titel) met direct
// antwoord (quickAnswer) en bron-URL. Voor AI-agents die snel een antwoord +
// bron willen matchen. Bereikbaar op /faq.json.
export const dynamic = 'force-static';

const BASE = 'https://waterfilterplatform.nl';
const contentDir = path.join(process.cwd(), 'content/kennisbank');

export async function GET() {
  const files = fs.existsSync(contentDir)
    ? fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx') && !f.startsWith('_')).sort()
    : [];

  const faqs = files
    .map(f => {
      const slug = f.replace(/\.mdx$/, '');
      const { data } = matter(fs.readFileSync(path.join(contentDir, f), 'utf-8'));
      if (!data.quickAnswer) return null;
      return {
        question: String(data.title ?? slug),
        answer: String(data.quickAnswer),
        url: `${BASE}/kennisbank/${slug}`,
      };
    })
    .filter(Boolean);

  const payload = {
    name: 'WaterfilterPlatform FAQ',
    url: BASE,
    count: faqs.length,
    attribution: 'WaterfilterPlatform (waterfilterplatform.nl)',
    faqs,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
