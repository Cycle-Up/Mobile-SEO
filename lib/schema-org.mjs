/**
 * Pure JSON-LD builder for the SchemaOrg component.
 *
 * buildSchema(props) returns an array of ready-to-serialize schema.org objects
 * (each with an `@context`), or null when nothing should render. The React
 * component in components/SchemaOrg.tsx renders each object as a
 * <script type="application/ld+json"> tag. Keeping this logic pure lets us
 * unit-test the emitted JSON-LD without a React renderer.
 */

import { sourcesForSlug } from './article-sources.mjs';

const CONTEXT = 'https://schema.org';
const DEFAULT_IMAGE = 'https://waterfilterplatform.nl/opengraph-image';
const SOCIAL_LINKS = [];

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

/** Vul een (mogelijk kaal) Article-object aan met de standaard trust/AI-velden. */
function enrichArticle(a) {
  const out = { ...a };
  if (!out.author) out.author = EDITORIAL_TEAM;
  if (!out.reviewedBy) out.reviewedBy = EDITORIAL_TEAM;
  if (!out.publisher) out.publisher = PUBLISHER;
  if (!out.inLanguage) out.inLanguage = 'nl-NL';
  if (!out.isPartOf) out.isPartOf = { '@id': 'https://waterfilterplatform.nl/#website' };
  if (!out.dateModified && out.datePublished) out.dateModified = out.datePublished;
  if (!out.mainEntityOfPage && out.url) out.mainEntityOfPage = { '@type': 'WebPage', '@id': out.url };
  if (!out.speakable) {
    out.speakable = { '@type': 'SpeakableSpecification', cssSelector: ['.quick-answer', 'h1', '[data-speakable="true"]'] };
  }
  if (out.isAccessibleForFree === undefined) out.isAccessibleForFree = true;
  // Voeg machine-leesbare bronnen (citation) toe op basis van het onderwerp in de
  // URL, zodat ook losse TSX-clusterpagina's gezaghebbende bronnen meegeven.
  if (!out.citation && typeof out.url === 'string') {
    const slugPath = out.url.replace(/^https?:\/\/[^/]+\//, '');
    const srcs = sourcesForSlug(slugPath);
    if (srcs && srcs.length) out.citation = srcs.map(s => ({ '@type': 'CreativeWork', name: s }));
  }
  return out;
}

/**
 * Build the JSON-LD object(s) for the given SchemaOrg props.
 * @returns {object[] | null}
 */
export function buildSchema(props) {
  const { type, faqItems, article, breadcrumbs, howTo, definedTerms, qaPage, schema } = props || {};

  if (schema) {
    return schema.map(s => {
      const obj = { '@context': CONTEXT, ...s };
      // Verrijk losse Article-objecten (TSX-clusterpagina's) zodat ze dezelfde
      // volledige, AI-leesbare structuur hebben als de MDX-renderer.
      if (obj['@type'] === 'Article') return enrichArticle(obj);
      return obj;
    });
  }

  let schemaObj = null;

  if (type === 'FAQPage' && faqItems) {
    schemaObj = {
      '@context': CONTEXT,
      '@type': 'FAQPage',
      mainEntity: faqItems.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
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
    const citations = (article.sources ?? []).map(s => ({ '@type': 'CreativeWork', name: s }));
    schemaObj = {
      '@context': CONTEXT,
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      datePublished: article.datePublished,
      dateModified: article.dateModified ?? article.datePublished,
      url: article.url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': article.url },
      isPartOf: { '@id': 'https://waterfilterplatform.nl/#website' },
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
      ...(article.about
        ? { about: { '@type': 'Thing', name: article.about.name, url: article.about.url, ...(article.about.sameAs ? { sameAs: article.about.sameAs } : {}) } }
        : {}),
      ...(Array.isArray(article.mentions) && article.mentions.length > 0
        ? { mentions: article.mentions.map(m => ({ '@type': 'Thing', name: m.name, url: m.url, ...(m.sameAs ? { sameAs: m.sameAs } : {}) })) }
        : {}),
      isAccessibleForFree: true,
      isFamilyFriendly: true,
    };
  } else if (type === 'BreadcrumbList' && breadcrumbs) {
    schemaObj = {
      '@context': CONTEXT,
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
      '@context': CONTEXT,
      '@type': 'Organization',
      '@id': 'https://waterfilterplatform.nl/#organization',
      name: 'WaterfilterPlatform',
      url: 'https://waterfilterplatform.nl',
      logo: { '@type': 'ImageObject', url: 'https://waterfilterplatform.nl/og/home.svg' },
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
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: 'https://waterfilterplatform.nl/contact',
        availableLanguage: ['nl'],
      },
      ...(SOCIAL_LINKS.length > 0 ? { sameAs: SOCIAL_LINKS } : {}),
    };
  } else if (type === 'WebSite') {
    schemaObj = {
      '@context': CONTEXT,
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
          urlTemplate: 'https://waterfilterplatform.nl/zoeken?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    };
  } else if (type === 'HowTo' && howTo) {
    schemaObj = {
      '@context': CONTEXT,
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
      ...(howTo.supply ? { supply: howTo.supply.map(s => ({ '@type': 'HowToSupply', name: s })) } : {}),
      ...(howTo.tool ? { tool: howTo.tool.map(t => ({ '@type': 'HowToTool', name: t })) } : {}),
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
      '@context': CONTEXT,
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
        ...(t.sameAs ? { sameAs: t.sameAs } : {}),
      })),
    };
  } else if (type === 'QAPage' && qaPage) {
    schemaObj = {
      '@context': CONTEXT,
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
  }

  return schemaObj ? [schemaObj] : null;
}
