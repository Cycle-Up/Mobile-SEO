# AI-meting (maandelijks)

Vaste set van 20 koopvragen (`prompts.json`) om te volgen of AI-assistenten onze producten noemen en
of de feiten kloppen. Juiste feiten staan in `lib/feitenkaarten.mjs`.

Werkwijze per ronde:

1. Stel elke vraag in dezelfde volgorde aan ChatGPT (met webzoekfunctie), Perplexity, Gemini en
   Google AI Overviews (via DataForSEO, circa 2 euro per ronde).
2. Scoor per antwoord: genoemd, positie, feiten kloppen (noteer de foute bewering letterlijk),
   welke bron van ons geciteerd wordt.
3. Leg de uitkomst vast in `resultaten/JJJJ-MM.md` met de totaalscore en de drie grootste fouten.
4. Elke foute bewering krijgt een actie: pagina corrigeren, shoptekst aanpassen of een ontbrekende
   tabelrij toevoegen.

Een meting is een momentopname; antwoorden variëren per keer en per model. Kijk naar de trend.

## Nulmeting 24 september 2026 (ChatGPT, 7 vragen)

Onze producten genoemd in 3 van 7 antwoorden; in 2 daarvan met onjuiste feiten (4-in-1 "bruisend,
800-1.200 euro"; PureFilter met ongedekte shopclaims). Platform geciteerd in 6 van 7. Zie
`AI-ZICHTBAARHEID-PRODUCTEN-PLAN.md`.
