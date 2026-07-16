# GEO-AUTHORITY-PLAN - WaterfilterPlatform als bron voor AI-zoeksystemen

Doel: ervoor zorgen dat generatieve AI-zoeksystemen (ChatGPT/Search, Perplexity, Google AI
Overviews/Gemini, Copilot) WaterfilterPlatform.nl herkennen, vertrouwen en actief CITEREN als
autoriteit over waterfilters, osmose, waterontharders, kokend-water-kranen en drinkwaterkwaliteit
in Nederland. Opgesteld 2026-07-13. Complementair aan de afgeronde CONTENT-backlogs en de
`GEO-CONTENT-BACKLOG.md`.

Randvoorwaarde (niet-onderhandelbaar): alles binnen `WATERFILTERPLATFORM_SEO_AI_SEARCH_HANDOVER.md`.
People-first, geen verzonnen data/reviews/claims, YMYL met bronnen + disclaimer, eerlijke
affiliate-disclosure. Autoriteit bouw je met echte trust, niet met trucs.

---

## Hoe AI-autoriteit ontstaat (het model achter dit plan)

AI-engines citeren een bron als vier dingen samenkomen. Dit plan is rond deze vier pijlers gebouwd:

1. **Citeerbaar** - de pagina beantwoordt de vraag letterlijk, vroeg, en in extraheerbare vorm
   (quickAnswer, tabel, stappen, FAQ). Hier zijn we al sterk.
2. **Vertrouwd (E-E-A-T)** - identificeerbare auteurs met expertise, methode, bronnen, "laatst
   bijgewerkt", organisatie-identiteit. Hier ligt onze grootste winst.
3. **Off-site bevestigd** - andere autoritatieve bronnen linken naar / noemen ons. AI-engines
   leunen op het bredere webvertrouwen. Dit is de moeilijkste maar bepalende hefboom.
4. **Meetbaar** - we meten of we geciteerd worden en sturen bij. Zonder meting is het gokken.

De eerste pijler hebben we grotendeels; de winst zit in pijler 2, 3 en 4.

---

## Pijler 1 - Citeerbaarheid verdiepen (bouwt op bestaande sterkte)

Status: sterk. quickAnswers (444/444), FAQPage/QAPage-schema, datasets, factsheets, llms.txt/-full,
kennisgraaf-gronding en 15 nieuwe cijfer-/vergelijkingspagina's staan live.

Acties (laaghangend, autonoom):
- **A1. Thema-8 afronden** (uit GEO-CONTENT-BACKLOG 43-47): quickAnswers op de top-30 commerciele
  pagina's aanscherpen tot 40-55 woorden, TL;DR-blok bovenaan kern-definities, bronregel
  consistent onder cijfers, FAQ uitbreiden waar <3 vraagkoppen.
- **A2. "Speakable" + directe antwoorden** op de kernpagina's, zodat voice/AI-assistenten een
  eenduidig fragment kunnen oppakken.
- **A3. Vraag-dekking**: voor elke prompt-stijl vraag die er echt toe doet 1 canonieke pagina;
  cross-check tegen `CANNIBALIZATION-AUDIT.md` (verrijken, niet dupliceren).

## Pijler 2 - Trust / E-E-A-T (grootste hefboom, grotendeels autonoom)

AI-engines wegen bij YMYL-onderwerpen (drinkwater = gezondheid) trust extra zwaar. Dit is waar we
ons kunnen onderscheiden van commerciele shops die alleen willen verkopen.

Acties:
- **B1. Echte auteur- en reviewer-identiteit.** Geef artikelen een byline met een echte persoon,
  functie en korte bio; laat YMYL-content reviewen door iemand met aantoonbare expertise
  (bijv. een waterbehandelingsexpert). Publiceer een /team- of /redactie-pagina met foto's en bio's.
  Voeg `Person`-schema (`author`, `reviewedBy`) met `sameAs` naar echte profielen (LinkedIn) toe.
  -> Dit is het verschil tussen "een site" en "een redactie" voor een AI.
- **B2. Methodologie zichtbaar en consistent.** /methodologie bestaat al; koppel elke review/test
  expliciet aan die methode ("Hoe we testen/beoordelen") met datum en criteria.
- **B3. Bronnen aantoonbaar.** Elke cijfer/claim een controleerbare bron (RIVM, Vewin, KWR, WHO,
  Drinkwaterbesluit, EU 2020/2184). YMYL-artikelen >=3 autoritatieve bronnen (gate bewaakt dit al).
- **B4. Organisatie-identiteit.** `Organization`-schema compleet: naam, logo, /over-ons, contact,
  redactioneel beleid, correctiebeleid, `sameAs` naar alle eigen kanalen. Transparante
  affiliate-disclosure blijft (versterkt trust, niet ondermijnt).
- **B5. Correctie- en actualiteitsbeleid** publiceren (wanneer/hoe we updaten). AI-engines
  waarderen bronnen die zichzelf corrigeren en dateren.

## Pijler 3 - Off-site autoriteit (moeilijkst, bepalend, deels afhankelijk)

Een AI citeert eerder een domein dat de rest van het web al vertrouwt. Onze eigen content kan
perfect zijn; zonder externe bevestiging blijven we onder de radar. Hier is menselijke/strategische
inzet nodig - dit is grotendeels NIET autonoom.

Acties:
- **C1. Originele data als citatie-magneet.** Onze unieke bezittingen - de waterhardheid-dataset
  (350 gemeenten), de rekentools, de open datasets (/data) - zijn precies wat journalisten,
  bloggers en AI's citeren. Verpak ze als "onderzoek/rapport" met een duidelijke methode, een
  citeerbare kop-cijfer ("De hardste kraanwater-gemeente van NL is X met Y dH") en een
  deelbare grafiek. Origineel cijfermateriaal wordt bovengemiddeld vaak geciteerd.
- **C2. Digital PR / linkbuilding.** Bied de data-inzichten aan aan Nederlandse media, lokale
  nieuwssites (waterhardheid per regio is lokaal nieuwswaardig), duurzaamheids- en woonblogs.
  Doel: redactionele links en naamsvermeldingen van autoritatieve .nl-domeinen.
- **C3. Aanwezigheid in bronnen die AI's vaak raadplegen.** Zorg voor consistente, correcte
  vermeldingen (NAP) en, waar terecht en toegestaan, referenties vanuit publieke kennisbronnen.
  Nooit spammy; alleen waar we echt waarde toevoegen.
- **C4. Community/fora en Q&A.** Waar mensen deze vragen stellen (Reddit, Tweakers, woonfora),
  eerlijk en behulpzaam bijdragen met verwijzing naar onze data waar relevant - geen spam.
- **C5. Backlink-monitoring** (via de SEO/DataForSEO-toolset zodra credits actief): referring
  domains volgen, competitor-gaps vinden, verloren links herstellen.

## Pijler 4 - Machine-vindbaarheid & meting (technisch, autonoom)

Acties:
- **D1. AI-crawlers expliciet toestaan** waar we citaties willen: GPTBot, OAI-SearchBot,
  PerplexityBot, Google-Extended, ClaudeBot in robots/ai.txt (bewuste keuze - citaties vragen
  crawlbaarheid). Controleer of dit klopt met de commerciele/juridische wens.
- **D2. Structured data compleet houden** (Article, FAQPage, QAPage, Product/Offer, Organization,
  BreadcrumbList, Dataset voor /data) - de audit-gate bewaakt dit.
- **D3. llms.txt / llms-full.txt / kennisbank/full.md** actueel houden bij elke nieuwe pagina
  (gate bewaakt sync). Overweeg per-cluster markdown-exports.
- **D4. Citeerbaarheids-meetlus (GEO-CONTENT-BACKLOG item 50).** Zodra de AI-optimization-tools
  credits hebben: maandelijks meten (a) welke domeinen AI's citeren voor onze kernvragen,
  (b) of/waar wij verschijnen, (c) welke van onze pagina's als bron opduiken. Zwakste doelvragen
  bijstellen. Dit sluit de lus en maakt autoriteit stuurbaar.

---

## Prioritering (impact vs. inspanning)

| Prioriteit | Actie | Pijler | Autonoom? | Impact |
| --- | --- | --- | --- | --- |
| 1 | B1 auteur/reviewer-identiteit + Person-schema | Trust | Deels (namen nodig) | Hoog |
| 2 | C1 data als citeerbaar "onderzoek" | Off-site | Ja (bouw), deels (promo) | Hoog |
| 3 | A1 Thema-8 citeerbaarheids-polish | Citeerbaar | Ja | Middel-hoog |
| 4 | D4 citeerbaarheids-meetlus opzetten | Meting | Nee (credits) | Hoog (sturend) |
| 5 | B4/B5 organisatie-identiteit + beleid | Trust | Ja | Middel |
| 6 | C2 digital PR met de data | Off-site | Nee (outreach) | Hoog (traag) |
| 7 | D1/D2/D3 crawler- en schema-hygiene | Technisch | Ja | Middel |

## Roadmap 30/60/90 dagen

- **0-30 dagen (autonoom, quick wins):** A1 Thema-8 polish; D1/D2/D3 crawler- en schema-check;
  B4 organisatie-schema compleet; C1 eerste data-asset ("waterhardheid-rapport NL") bouwen.
- **30-60 dagen (trust + meting):** B1 redactie-/auteurspagina + Person-schema (vereist echte
  personen -> input nodig); B2/B5 methode- en correctiebeleid; D4 meetlus opzetten zodra credits.
- **60-90 dagen (off-site, doorlopend):** C2 digital-PR-ronde met het data-rapport; C4 community;
  C5 backlink-monitoring; meten -> zwakste doelvragen bijstellen; herhalen.

## Wat ik autonoom kan oppakken vs. wat input van jou vraagt

- **Autonoom nu:** A1-A3, B2-B5 (schema/beleid/pagina-structuur), C1 (data-asset bouwen),
  D1-D3.
- **Input van jou nodig:**
  1. **Echte auteur/reviewer** (naam, functie, bio, bij voorkeur iemand met waterexpertise) - de
     grootste trust-hefboom (B1).
  2. **Credits op de AI-optimization/DataForSEO-toolset** - nu HTTP 402 - om de meetlus (D4) en
     backlink-monitoring (C5) te draaien.
  3. **Akkoord op AI-crawlerbeleid** (D1) en op de digital-PR-aanpak (C2).

## Opbrengst

Van "goede content die toevallig gevonden wordt" naar "een herkende, vertrouwde en extern
bevestigde autoriteit die AI-engines standaard citeren" - met behoud van redactionele
onafhankelijkheid en een eerlijke, contextuele route naar PureAqua op de commerciele pagina's.
