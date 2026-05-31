import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';
import { SourcesSection } from '@/components/SourcesSection';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { isYmyl } from '@/lib/ymyl.mjs';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const contentDir = path.join(process.cwd(), 'content/kennisbank');

function getArticle(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  return matter(raw);
}

function getClusterLinks(slug: string) {
  const s = slug.toLowerCase();
  const candidates = [
    { test: /pfas|lood|nitraat|hormonen|chroom|uranium|microplast|pesticid|chloor-|zware-metalen/, href: '/stoffen-in-drinkwater', title: 'Stoffen in drinkwater', desc: 'Verontreinigingen, normen en filteradvies per stofgroep' },
    { test: /osmose|ro-filter|ro-membraan|omgekeerde|reverse/, href: '/omgekeerde-osmose', title: 'Omgekeerde osmose', desc: 'Complete gids over RO waterfilters' },
    { test: /filtertechniek|ultrafiltr|actief-kool|ionenwissel|uv-steril|nanofiltr|keramisch|sediment-filter/, href: '/filtertechnieken', title: 'Filtertechnieken', desc: 'Alle waterfiltertechnieken vergeleken' },
    { test: /hardheid|kalk|dh-|kalkaanslag|kalkvrij|hard-water/, href: '/waterhardheid', title: 'Waterhardheid', desc: 'Waterhardheid per gemeente in Nederland' },
    { test: /ontharder|waterontharder|ionenwisseling|ontharding/, href: '/waterontharder', title: 'Waterontharder', desc: 'Werking, kosten en wanneer zinvol' },
    { test: /keurmerk|nsf|kiwa|certifi|ce-markering/, href: '/keurmerken', title: 'Keurmerken', desc: 'NSF, Kiwa, ACS en CE uitgelegd' },
    { test: /vergelij|vs-[a-z]|versus|beste-waterfilter/, href: '/vergelijken', title: 'Vergelijken', desc: 'Eerlijke vergelijkingen op prestaties en kosten' },
    { test: /onderhoud|vervangen|levensduur|wisselen|reinigen|storing/, href: '/onderhoud', title: 'Onderhoud', desc: 'Filters vervangen en onderhoudstips' },
    { test: /zakelijk|kantoor|horeca|bedrijf|industrie|vve/, href: '/zakelijk', title: 'Zakelijk', desc: 'Waterfiltratie voor bedrijven en organisaties' },
    { test: /drinkwaterbedrijf|vitens|evides|pwn|dunea|waterbedrijf/, href: '/waterbedrijven', title: 'Waterbedrijven', desc: 'De 10 Nederlandse drinkwaterbedrijven' },
    { test: /norm|drinkwaterbeslu|eu-richtlijn|wetgeving|grenswaarde/, href: '/drinkwaternormen', title: 'Drinkwaternormen', desc: 'Wettelijke normen voor drinkwater in Nederland' },
    { test: /waterfilter|filter-kopen|beste-filter/, href: '/waterfilter', title: 'Waterfilters', desc: 'Alle waterfiltersoorten op een rij' },
  ];
  const seen = new Set<string>();
  const matched = candidates
    .filter(c => c.test.test(s))
    .map(({ href, title, desc }) => ({ href, title, desc }))
    .filter(l => !seen.has(l.href) && seen.add(l.href));
  if (!seen.has('/keuzehulp') && matched.length < 4) {
    matched.push({ href: '/keuzehulp', title: 'Keuzehulp', desc: 'Welk filter past bij uw situatie?' });
  }
  return matched.slice(0, 4);
}

function articleImagePath(_slug: string, fmImage?: string) {
  // Sociale previews gebruiken de site-brede PNG (app/opengraph-image.tsx); SVG
  // og:images renderen niet betrouwbaar op social platforms. Frontmatter-image
  // blijft leidend wanneer een artikel een eigen afbeelding meegeeft.
  return fmImage ?? 'https://waterfilterplatform.nl/opengraph-image';
}

export async function generateStaticParams() {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir)
    .filter(f => f.endsWith('.mdx') && !f.startsWith('_'))
    .map(f => ({ slug: f.replace('.mdx', '') }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const { title, description, date, image, canonical } = article.data;
  const og = articleImagePath(slug, image);
  return {
    title,
    description,
    alternates: { canonical: canonical ?? `https://waterfilterplatform.nl/kennisbank/${slug}` },
    openGraph: {
      title,
      description,
      publishedTime: date,
      type: 'article',
      images: [{ url: og, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [og],
    },
  };
}

function extractFaqItems(markdown: string) {
  const items: { question: string; answer: string }[] = [];
  const sections = markdown.split(/\n(?=#{1,3} )/);
  for (const section of sections) {
    const lines = section.split('\n');
    const heading = lines[0].replace(/^#{1,3} /, '').trim();
    if (!heading.endsWith('?')) continue;
    const answer = lines
      .slice(1)
      .join('\n')
      .replace(/\*\*|__|\[([^\]]+)\]\([^)]+\)/g, '$1')
      .split(/\n\n+/)
      .map(p => p.trim())
      .find(p => p.length > 30 && !p.startsWith('#') && !p.startsWith('|') && !p.startsWith('-') && !p.startsWith('1.'));
    if (answer) items.push({ question: heading, answer });
    if (items.length >= 8) break;
  }
  return items;
}

export default async function KennisbankArtikelPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { title, description, date, lastModified, quickAnswer, image, sources, methodologySources, lastReviewed } = article.data;
  const ymyl = isYmyl(slug, article.data);
  const faqItems = extractFaqItems(article.content);
  const articleImage = articleImagePath(slug, image);

  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title,
          description,
          datePublished: date,
          dateModified: lastModified,
          lastReviewed: lastReviewed ?? lastModified,
          url: `https://waterfilterplatform.nl/kennisbank/${slug}`,
          image: articleImage,
          sources,
        }}
      />
      {faqItems.length >= 2 && (
        <SchemaOrg type="FAQPage" faqItems={faqItems} />
      )}
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kennisbank', url: 'https://waterfilterplatform.nl/kennisbank' },
          { name: title, url: `https://waterfilterplatform.nl/kennisbank/${slug}` },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kennisbank" className="hover:text-[#005F8A]">Kennisbank</Link>
            <span className="mx-2">/</span>
            <span className="truncate">{title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-3">{title}</h1>
          <p className="text-gray-600">{description}</p>
          {date && (
            <p className="text-xs text-gray-400 mt-3">
              Gepubliceerd: {new Date(date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
              {lastModified && ` · Bijgewerkt: ${new Date(lastModified).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}`}
            </p>
          )}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <MethodologyBadge sources={methodologySources} lastReviewed={lastReviewed ?? lastModified} />
        <AuthorBox datePublished={date} dateModified={lastModified} />
        {quickAnswer && <QuickAnswer answer={quickAnswer} question={title} />}
        {ymyl && <HealthDisclaimer />}
        <article className="prose max-w-none">
          <MDXRemote source={article.content} />
        </article>

        <SourcesSection sources={sources} />

        {(() => {
          const clusterLinks = getClusterLinks(slug);
          if (clusterLinks.length === 0) return null;
          return (
            <section className="mt-10">
              <h2 className="text-lg font-bold text-[#003F5C] mb-4">Verken verder</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {clusterLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
                  >
                    <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors text-sm">{link.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}

        <div className="mt-12">
          <CTABanner context="osmose" />
        </div>

        <div className="mt-8">
          <Link href="/kennisbank" className="text-[#005F8A] hover:underline text-sm">
            ← Terug naar kennisbank
          </Link>
        </div>
      </div>
    </>
  );
}
