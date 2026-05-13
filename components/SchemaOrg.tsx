interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaOrgProps {
  type: 'FAQPage' | 'Article' | 'BreadcrumbList';
  faqItems?: FAQItem[];
  article?: {
    title: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    url: string;
  };
  breadcrumbs?: BreadcrumbItem[];
}

export function SchemaOrg({ type, faqItems, article, breadcrumbs }: SchemaOrgProps) {
  let schema: object;

  if (type === 'FAQPage' && faqItems) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  } else if (type === 'Article' && article) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      datePublished: article.datePublished,
      dateModified: article.dateModified ?? article.datePublished,
      url: article.url,
      publisher: {
        '@type': 'Organization',
        name: 'WaterfilterPlatform',
        url: 'https://waterfilterplatform.nl',
      },
    };
  } else if (type === 'BreadcrumbList' && breadcrumbs) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  } else {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
