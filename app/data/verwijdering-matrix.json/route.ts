import { DATASETS } from '@/lib/datasets.mjs';

export const dynamic = 'force-static';

export async function GET() {
  const ds = DATASETS["verwijdering-matrix"];
  const payload = {
    name: ds.name,
    description: ds.description,
    source: ds.source,
    url: 'https://waterfilterplatform.nl/data/verwijdering-matrix',
    columns: ds.columns,
    rows: ds.rows,
  };
  return new Response(JSON.stringify(payload, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
