interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

interface DefinedTerm {
  name: string;
  description: string;
  url?: string;
  sameAs?: string[];
}

interface SchemaOrgProps {
  type?:
    | 'FAQPage'
    | 'Article'
    | 'BreadcrumbList'
    | 'Organization'
    | 'WebSite'
    | 'HowTo'
    | 'DefinedTermSet'
    | 'QAPage';
  faqItems?: FAQItem[];
  article?: {
    title: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    lastReviewed?: string;
    url: string;
    image?: string;
    sources?: string[];
    about?: { name: string; url: string; sameAs?: string[] };
    mentions?: { name: string; url: string; sameAs?: string[] }[];
  };
  breadcrumbs?: BreadcrumbItem[];
  howTo?: {
    name: string;
    description: string;
    totalTime?: string;
    estimatedCost?: { currency: string; value: string };
    supply?: string[];
    tool?: string[];
    steps: HowToStep[];
  };
  definedTerms?: {
    name: string;
    description?: string;
    url: string;
    terms: DefinedTerm[];
  };
  qaPage?: {
    question: string;
    answer: string;
    url: string;
    upvoteCount?: number;
  };
  schema?: object[];
}

import { buildSchema } from '@/lib/schema-org.mjs';

export function SchemaOrg(props: SchemaOrgProps) {
  const schemas: object[] | null = buildSchema(props);
  if (!schemas) return null;

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
