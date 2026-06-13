import { gemeenten } from '@/data/gemeenten';

export const dynamic = 'force-static';

export async function GET() {
  const map = new Map<string, { naam: string; provincies: Set<string>; aantal: number }>();
  for (const g of gemeenten) {
    if (!map.has(g.waterbedrijf)) map.set(g.waterbedrijf, { naam: g.waterbedrijf, provincies: new Set(), aantal: 0 });
    const e = map.get(g.waterbedrijf)!;
    e.provincies.add(g.provincie);
    e.aantal++;
  }
  const rows = [...map.values()].sort((a, b) => b.aantal - a.aantal)
    .map(e => [e.naam, [...e.provincies].sort().join(', '), e.aantal]);
  const payload = {
    name: 'Nederlandse drinkwaterbedrijven',
    description: 'Drinkwaterbedrijven met de provincies en het aantal gemeenten in de dataset.',
    source: 'Afgeleid uit de gemeente-hardheid dataset (publieke gegevens)',
    url: 'https://waterfilterplatform.nl/data/waterbedrijven',
    columns: ['waterbedrijf', 'provincies', 'aantal_gemeenten'],
    rows,
  };
  return new Response(JSON.stringify(payload, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
