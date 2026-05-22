interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaOrgProps {
  type?: 'FAQPage' | 'Article' | 'BreadcrumbList' | 'Organization' | 'WebSite';
  faqItems?: FAQItem[];
  article?: {
    title: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    url: string;
    image?: string;
  };
  breadcrumbs?: BreadcrumbItem[];
  schema?: object[];
}

const DEFAULT_IMAGE = 'https://waterfilterplatform.nl/og/home.svg';
const SOCIAL_LINKS: string[] = [];

export function SchemaOrg({ type, faqItems, article, breadcrumbs, schema }: SchemaOrgProps) {
  if (schema) {
    return (
      <>
        {schema.map((s, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...s }) }}
          />
        ))}
      </>
    );
  }
  let schemaObj: object;

  if (type === 'FAQPage' && faqItems) {
    schemaObj = {
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
    const imageUrl = article.image
      ? (article.image.startsWith('http') ? article.image : `https://waterfilterplatform.nl${article.image}`)
      : DEFAULT_IMAGE;
    schemaObj = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      datePublished: article.datePublished,
      dateModified: article.dateModified ?? article.datePublished,
      url: article.url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': article.url },
      inLanguage: 'nl-NL',
      image: imageUrl,
      author: {
        '@type': 'Organization',
        name: 'WaterfilterPlatform',
        url: 'https://waterfilterplatform.nl',
      },
      publisher: {
        '@type': 'Organization',
        name: 'WaterfilterPlatform',
        url: 'https://waterfilterplatform.nl',
        logo: {
          '@type': 'ImageObject',
          url: 'https://waterfilterplatform.nl/og/home.svg',
        },
      },
    };
  } else if (type === 'BreadcrumbList' && breadcrumbs) {
    schemaObj = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  } else if (type === 'Organization') {
    schemaObj = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'WaterfilterPlatform',
      url: 'https://waterfilterplatform.nl',
      logo: {
        '@type': 'ImageObject',
        url: 'https://waterfilterplatform.nl/og/home.svg',
      },
      description:
        'Onafhankelijk informatieplatform over waterfilters, omgekeerde osmose en kokend water kranen in Nederland.',
      ...(SOCIAL_LINKS.length > 0 ? { sameAs: SOCIAL_LINKS } : {}),
    };
  } else if (type === 'WebSite') {
    schemaObj = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'WaterfilterPlatform',
      url: 'https://waterfilterplatform.nl',
      description:
        'Alles over omgekeerde osmose, kokend water kranen en waterhardheid per gemeente in Nederland.',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://waterfilterplatform.nl/waterhardheid/{search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    };
  } else {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
    />
  );
}
