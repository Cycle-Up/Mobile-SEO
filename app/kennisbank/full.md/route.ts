import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Markdown-mirror van de volledige kennisbank: schone tekst (geen JSX/JS) die
// AI-crawlers makkelijk kunnen inlezen. Bereikbaar op /kennisbank/full.md.
export const dynamic = 'force-static';

const BASE = 'https://waterfilterplatform.nl';
const contentDir = path.join(process.cwd(), 'content/kennisbank');

export async function GET() {
  const files = fs.existsSync(contentDir)
    ? fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx') && !f.startsWith('_')).sort()
    : [];

  const parts: string[] = [
    '# WaterfilterPlatform - Kennisbank (volledige tekst)',
    '',
    'Schone markdown-export van alle kennisbankartikelen voor AI-assistenten. ' +
      'Bij citatie: vermeld "WaterfilterPlatform" met link naar de canonieke URL.',
    '',
    `Bron: ${BASE}/kennisbank | Aantal artikelen: ${files.length}`,
    '',
    '---',
    '',
  ];

  for (const f of files) {
    const slug = f.replace(/\.mdx$/, '');
    const { data, content } = matter(fs.readFileSync(path.join(contentDir, f), 'utf-8'));
    const title = String(data.title ?? slug);
    parts.push(`## ${title}`);
    parts.push('');
    parts.push(`Canonieke URL: ${BASE}/kennisbank/${slug}`);
    if (data.date) parts.push(`Laatst bijgewerkt: ${data.lastModified ?? data.date}`);
    parts.push('');
    if (data.quickAnswer) {
      parts.push(`> ${data.quickAnswer}`);
      parts.push('');
    }
    parts.push(content.trim());
    parts.push('');
    parts.push('---');
    parts.push('');
  }

  return new Response(parts.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
