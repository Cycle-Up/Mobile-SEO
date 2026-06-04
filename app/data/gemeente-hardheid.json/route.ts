import { gemeenten } from '@/data/gemeenten';

export const dynamic = 'force-static';

export async function GET() {
  const payload = {
    name: 'Waterhardheid per gemeente in Nederland',
    description: 'Indicatieve waterhardheid (dH) en hardheidsklasse per Nederlandse gemeente, met waterbedrijf.',
    source: 'Openbare gegevens drinkwaterbedrijven, omgerekend naar dH (indicatief)',
    url: 'https://waterfilterplatform.nl/data/gemeente-hardheid',
    count: gemeenten.length,
    columns: ['naam', 'provincie', 'hardheid_dH', 'categorie', 'waterbedrijf'],
    rows: gemeenten.map(g => [g.naam, g.provincie, g.hardheid, g.categorie, g.waterbedrijf]),
  };
  return new Response(JSON.stringify(payload, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
