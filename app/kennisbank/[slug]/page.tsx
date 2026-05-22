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

function articleImagePath(slug: string, fmImage?: string) {
  if (fmImage) return fmImage;
  const s = slug.toLowerCase();
  if (/pfas|lood|nitraat|chloor|microplast|hormonen|chroom|uranium|zware/.test(s)) return '/og/stoffen-in-drinkwater.svg';
  if (/osmose|filter-|filtertechniek|ultrafiltr|actief-kool|ionenwissel|uv-steril|nanofiltr|kerami/.test(s)) return '/og/filtertechnieken.svg';
  if (/hardheid|kalk|ontharder/.test(s)) return '/og/waterhardheid.svg';
  if (/norm|drinkwaterbeslu|eu-richtl|wetge/.test(s)) return '/og/drinkwaternormen.svg';
  if (/keurmerk|nsf|kiwa|certifi/.test(s)) return '/og/keurmerken.svg';
  if (/vergelij|vs-|versus/.test(s)) return '/og/vergelijken.svg';
  if (/onderhoud|vervang|levensduur|reinig/.test(s)) return '/og/onderhoud.svg';
  if (/keuze|welk|beste-/.test(s)) return '/og/keuzehulp.svg';
  return '/og/home.svg';
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

  const { title, description, date, image } = article.data;
  const og = articleImagePath(slug, image);
  return {
    title,
    description,
    alternates: { canonical: `https://waterfilterplatform.nl/kennisbank/${slug}` },
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
        <article className="prose max-w-none">
          <MDXRemote source={article.content} />
        </article>

        <SourcesSection sources={sources} />

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
