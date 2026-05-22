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

const DEFAULT_IMAGE = 'https://waterfilterplatform.nl/og/home.svg';
const SOCIAL_LINKS: string[] = [];

const EDITORIAL_TEAM = {
  '@type': 'Organization',
  '@id': 'https://waterfilterplatform.nl/#redactie',
  name: 'WaterfilterPlatform Redactieteam',
  url: 'https://waterfilterplatform.nl/over-ons',
  description:
    'Onafhankelijke redactie van WaterfilterPlatform. Specialisme: drinkwaterkwaliteit, waterfiltratie, Nederlandse drinkwaterregelgeving.',
  knowsAbout: [
    'Drinkwaterkwaliteit',
    'Omgekeerde osmose',
    'Waterhardheid',
    'PFAS in drinkwater',
    'Drinkwaternormen EU 2020/2184',
    'Drinkwaterbesluit Nederland',
    'Waterfiltratie technieken',
  ],
};

const PUBLISHER = {
  '@type': 'Organization',
  '@id': 'https://waterfilterplatform.nl/#organization',
  name: 'WaterfilterPlatform',
  url: 'https://waterfilterplatform.nl',
  logo: {
    '@type': 'ImageObject',
    url: 'https://waterfilterplatform.nl/og/home.svg',
  },
};

export function SchemaOrg(props: SchemaOrgProps) {
  const { type, faqItems, article, breadcrumbs, howTo, definedTerms, qaPage, schema } = props;

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
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.quick-answer', '[data-speakable="true"]'],
      },
    };
  } else if (type === 'Article' && article) {
    const imageUrl = article.image
      ? (article.image.startsWith('http') ? article.image : `https://waterfilterplatform.nl${article.image}`)
      : DEFAULT_IMAGE;
    const citations = (article.sources ?? []).map(s => ({
      '@type': 'CreativeWork',
      name: s,
    }));
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
      author: EDITORIAL_TEAM,
      reviewedBy: EDITORIAL_TEAM,
      ...(article.lastReviewed ? { dateLastReviewed: article.lastReviewed } : {}),
      publisher: PUBLISHER,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.quick-answer', 'h1', '[data-speakable="true"]'],
      },
      ...(citations.length > 0 ? { citation: citations } : {}),
      isAccessibleForFree: true,
      isFamilyFriendly: true,
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
      '@id': 'https://waterfilterplatform.nl/#organization',
      name: 'WaterfilterPlatform',
      url: 'https://waterfilterplatform.nl',
      logo: {
        '@type': 'ImageObject',
        url: 'https://waterfilterplatform.nl/og/home.svg',
      },
      description:
        'Onafhankelijk informatieplatform over waterfilters, omgekeerde osmose en kokend water kranen in Nederland.',
      knowsAbout: [
        'Drinkwaterkwaliteit Nederland',
        'Omgekeerde osmose',
        'Waterfilters',
        'Kokend water kraan',
        'Waterhardheid per gemeente',
        'PFAS in drinkwater',
        'Drinkwaternormen',
      ],
      areaServed: { '@type': 'Country', name: 'Nederland' },
      ...(SOCIAL_LINKS.length > 0 ? { sameAs: SOCIAL_LINKS } : {}),
    };
  } else if (type === 'WebSite') {
    schemaObj = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://waterfilterplatform.nl/#website',
      name: 'WaterfilterPlatform',
      url: 'https://waterfilterplatform.nl',
      inLanguage: 'nl-NL',
      publisher: { '@id': 'https://waterfilterplatform.nl/#organization' },
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
  } else if (type === 'HowTo' && howTo) {
    schemaObj = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: howTo.name,
      description: howTo.description,
      inLanguage: 'nl-NL',
      ...(howTo.totalTime ? { totalTime: howTo.totalTime } : {}),
      ...(howTo.estimatedCost
        ? {
            estimatedCost: {
              '@type': 'MonetaryAmount',
              currency: howTo.estimatedCost.currency,
              value: howTo.estimatedCost.value,
            },
          }
        : {}),
      ...(howTo.supply
        ? { supply: howTo.supply.map(s => ({ '@type': 'HowToSupply', name: s })) }
        : {}),
      ...(howTo.tool
        ? { tool: howTo.tool.map(t => ({ '@type': 'HowToTool', name: t })) }
        : {}),
      step: howTo.steps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
        ...(s.url ? { url: s.url } : {}),
      })),
    };
  } else if (type === 'DefinedTermSet' && definedTerms) {
    schemaObj = {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      name: definedTerms.name,
      url: definedTerms.url,
      ...(definedTerms.description ? { description: definedTerms.description } : {}),
      inLanguage: 'nl-NL',
      hasDefinedTerm: definedTerms.terms.map(t => ({
        '@type': 'DefinedTerm',
        name: t.name,
        description: t.description,
        inDefinedTermSet: definedTerms.url,
        ...(t.url ? { url: t.url } : {}),
      })),
    };
  } else if (type === 'QAPage' && qaPage) {
    schemaObj = {
      '@context': 'https://schema.org',
      '@type': 'QAPage',
      mainEntity: {
        '@type': 'Question',
        name: qaPage.question,
        url: qaPage.url,
        ...(qaPage.upvoteCount !== undefined ? { upvoteCount: qaPage.upvoteCount } : {}),
        author: EDITORIAL_TEAM,
        acceptedAnswer: {
          '@type': 'Answer',
          text: qaPage.answer,
          url: qaPage.url,
          author: EDITORIAL_TEAM,
        },
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.quick-answer', '[data-speakable="true"]'],
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
