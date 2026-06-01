@AGENTS.md

# SEO + AI Search kwaliteitsstandaard (verplicht)

`WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md` (in de project-root) is de **permanente
SEO + AI Search kwaliteitsstandaard** voor Waterfilterplatform.nl. Raadpleeg dit document
ALTIJD en gebruik het als checklist vóór elke oplevering bij:

- elke nieuwe pagina of route;
- elke contentwijziging (TSX-pagina of MDX-artikel);
- elke technische wijziging die SEO, indexeerbaarheid, structured data, interne linking,
  performance of AI Search-readiness kan raken;
- elke audit, refactor of optimalisatieronde.

Vaste werkwijze (samenvatting; de bron blijft het handover-document):

1. Stel paginadoel + primaire zoekintentie vast; kies het juiste paginatype-template.
2. Pas de `CONTENT_REVIEW_CHECKLIST`, `AI_SEARCH_PAGE_CHECK` en (bij gevoelige content)
   `YMYL_DECISION_RULES` toe.
3. Technische SEO: unieke `<title>` + meta description, 1 H1, self-referential canonical in
   `<head>`, geen onbedoelde `noindex`, route in `app/sitemap.ts`, crawlbare `<a href>`-links.
4. Structured data volgens `SCHEMA_POLICY` (JSON-LD, ware representatie van zichtbare content;
   geen nep-reviews/AggregateRating; FAQPage/HowTo niet voor Google-rich-result inzetten).
5. Trust/E-E-A-T: byline/reviewer, methode, bronnen, "laatst bijgewerkt", disclaimer bij YMYL.
6. Interne links volgens `INTERNAL_LINK_RULES` (hub <-> spoke, naar canonieke URL, geen orphans).
7. Voor publicatie: haal de `DEFINITION_OF_DONE` en geef een korte compliance-samenvatting.

Niet-onderhandelbaar: people-first content, geen dunne/commodity content, geen keyword stuffing,
geen verzonnen tests/reviews, geen misleidende gezondheidsclaims (YMYL), geen SEO/AI-hacks die
niet in het document staan. `llms.txt` blijft optioneel/experimenteel, nooit boven crawlbaarheid,
indexeerbaarheid, unieke waarde en trust.
