'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

type Entry = { t: string; u: string; d: string; c: string };

function normalize(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function scoreEntry(e: Entry, terms: string[]): number {
  const title = normalize(e.t);
  const desc = normalize(e.d);
  let score = 0;
  for (const term of terms) {
    if (!term) continue;
    if (title === term) score += 100;
    else if (title.startsWith(term)) score += 40;
    else if (title.includes(term)) score += 20;
    else if (desc.includes(term)) score += 6;
    else return -1; // elke term moet ergens matchen
  }
  return score;
}

export function SearchClient() {
  const initialQuery = useSearchParams().get('q') ?? '';
  const [query, setQuery] = useState(initialQuery);
  const [index, setIndex] = useState<Entry[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch('/search-index.json')
      .then(r => (r.ok ? r.json() : Promise.reject(new Error('http ' + r.status))))
      .then((data: Entry[]) => { if (active) setIndex(data); })
      .catch(() => { if (active) setError(true); });
    return () => { active = false; };
  }, []);

  const results = useMemo(() => {
    if (!index) return [];
    const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];
    return index
      .map(e => ({ e, s: scoreEntry(e, terms) }))
      .filter(x => x.s >= 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 60)
      .map(x => x.e);
  }, [index, query]);

  const trimmed = query.trim();

  return (
    <div>
      <label htmlFor="site-search" className="sr-only">Zoek op de site</label>
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Zoek op onderwerp, merk of vraag..."
        className="w-full border-2 border-[#BAE6FD] focus:border-[#005F8A] rounded-2xl px-5 py-4 text-lg outline-none transition-colors"
        autoComplete="off"
        autoFocus
      />

      <div className="mt-6" aria-live="polite">
        {error && (
          <p className="text-gray-500">De zoekindex kon niet worden geladen. Gebruik de onderwerpen hieronder of het menu.</p>
        )}
        {!error && !index && <p className="text-gray-400">Zoekindex laden...</p>}
        {!error && index && trimmed.length > 0 && (
          <>
            <p className="text-sm text-gray-500 mb-3">
              {results.length === 0
                ? `Geen resultaten voor "${trimmed}".`
                : `${results.length === 60 ? '60+' : results.length} resultaat${results.length === 1 ? '' : 'en'} voor "${trimmed}"`}
            </p>
            <ul className="space-y-2">
              {results.map(e => (
                <li key={e.u}>
                  <Link href={e.u} className="block border border-gray-100 rounded-xl p-3 hover:border-[#005F8A] hover:shadow-sm transition-all">
                    <span className="font-medium text-gray-800">{e.t}</span>
                    <span className="ml-2 text-xs text-[#005F8A] bg-[#E0F2FE] rounded px-1.5 py-0.5 align-middle">{e.c}</span>
                    {e.d && <span className="block text-sm text-gray-500 mt-1">{e.d}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
