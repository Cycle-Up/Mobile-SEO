/**
 * Centrale auteurs- en reviewer-registry voor E-E-A-T / GEO-autoriteit.
 *
 * Een bron van waarheid voor iedereen die content schrijft of reviewt:
 * de zichtbare byline (components/AuthorBox.tsx, components/EditorialByline.tsx),
 * de Person JSON-LD (lib/schema-org.mjs) en de profielpagina's (/redactie/*)
 * lezen ALLEMAAL uit dit bestand. Nieuwe auteur toevoegen = 1 entry hier +
 * 1 profielpagina; alles verder volgt automatisch.
 *
 * Waarheidsgetrouw (SCHEMA_POLICY): alleen kwalificaties die de persoon zelf
 * heeft aangeleverd of die publiek verifieerbaar zijn. Geen verzonnen titels,
 * geen niet-bestaande reviewers. Pure data + functies, getest in
 * test/authors.test.mjs.
 */

const SITE = 'https://waterfilterplatform.nl';

export const AUTHORS = {
  jeroenDijkstra: {
    key: 'jeroenDijkstra',
    slug: 'jeroen-dijkstra',
    name: 'Jeroen Dijkstra',
    role: 'Initiatiefnemer en hoofdredacteur',
    // Korte byline-zin (zichtbaar in AuthorBox onder artikelen).
    shortBio:
      'Initiatiefnemer en hoofdredacteur van WaterfilterPlatform. Meerdere jaren actief in de waterbehandelingsmarkt; MSc Sustainable Entrepreneurship (Rijksuniversiteit Groningen) en Lean Six Sigma Black Belt.',
    // Uitgebreide bio-elementen voor de profielpagina (feitelijk, door Jeroen aangeleverd).
    credentials: [
      'MSc Sustainable Entrepreneurship - Rijksuniversiteit Groningen (Campus Fryslan, Leeuwarden)',
      'Studieverdieping sustainable engineering met focus op water - Universidade de Aveiro (Portugal)',
      'Gecertificeerd Lean Six Sigma Black Belt (procesoptimalisatie)',
    ],
    experience: [
      'Meerdere jaren actief in de Nederlandse waterbehandelingsmarkt, met aanvullende vakstudies op dit gebied',
      'Medeoprichter van waterfilterspecialist PureAqua (Hallum, Friesland)',
      'Procesoptimalisatie bij FrieslandCampina als Lean Six Sigma Black Belt, met een sterke focus op waterprocessen',
      'Energiesector-ervaring bij Nuon (tegenwoordig Vattenfall)',
      'Oprichter van circulaire dienstverlener Cycle-Up (Leeuwarden); medeoprichter van Pottle en ICEO',
      'Leidt het team achter Transmission (transmission.frl)',
    ],
    alumniOf: ['Rijksuniversiteit Groningen', 'Universidade de Aveiro'],
    knowsAbout: [
      'Waterbehandeling',
      'Drinkwaterkwaliteit',
      'Omgekeerde osmose',
      'Waterhardheid en waterontharders',
      'Procesoptimalisatie (Lean Six Sigma)',
      'Duurzaam ondernemen',
    ],
    // Alleen publiek geverifieerde persoonspagina's; geen gegokte URL's.
    sameAs: [
      'https://www.linkedin.com/in/jeroen-dijkstra2/',
      'https://www.pureaqua.nl/over-ons/jeroen-dijkstra',
      'https://blog.pureaqua.nl/nieuws/author/jeroen-dijkstra',
    ],
    email: 'jeroen@cycle-up.nl',
    profilePath: '/redactie/jeroen-dijkstra',
  },
};

/** Standaard-auteur voor alle content zonder expliciete auteur-frontmatter. */
export const DEFAULT_AUTHOR = AUTHORS.jeroenDijkstra;

/**
 * Review-instantie. Zolang individuele teamleden (transmission.frl) nog niet
 * met naam/rol bevestigd zijn, reviewt de redactie als geheel onder
 * eindverantwoordelijkheid van de hoofdredacteur. Benoemde Person-reviewers
 * kunnen per artikel worden toegevoegd zodra bevestigd (zelfde vorm als AUTHORS).
 */
export const REVIEW_TEAM = {
  name: 'Redactie WaterfilterPlatform',
  description:
    'Redactionele review door het team achter WaterfilterPlatform (Transmission), onder eindverantwoordelijkheid van de hoofdredacteur.',
  url: `${SITE}/redactie`,
};

/** Absolute profiel-URL van een auteur. */
export function authorUrl(author = DEFAULT_AUTHOR) {
  return `${SITE}${author.profilePath}`;
}

/**
 * Person JSON-LD voor een auteur, geschikt als `author`-waarde in Article
 * en als `mainEntity` op de profielpagina (ProfilePage).
 */
export function buildPersonSchema(author = DEFAULT_AUTHOR) {
  return {
    '@type': 'Person',
    '@id': `${authorUrl(author)}#person`,
    name: author.name,
    url: authorUrl(author),
    jobTitle: author.role,
    description: author.shortBio,
    worksFor: { '@id': `${SITE}/#organization` },
    alumniOf: author.alumniOf.map(name => ({ '@type': 'EducationalOrganization', name })),
    knowsAbout: author.knowsAbout,
    ...(author.sameAs && author.sameAs.length ? { sameAs: author.sameAs } : {}),
  };
}

/** Organization JSON-LD voor de review-instantie (reviewedBy). */
export function buildReviewTeamSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE}/redactie#team`,
    name: REVIEW_TEAM.name,
    description: REVIEW_TEAM.description,
    url: REVIEW_TEAM.url,
  };
}
