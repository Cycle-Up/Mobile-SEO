'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TREES } from '@/lib/decisiontrees.mjs';

type Result = { title: string; advice: string; href: string };
type Node = { q: string; options: { label: string; result?: Result; next?: Node }[] };

export function DecisionTreeClient({ kind }: { kind: string }) {
  const tree = (TREES as Record<string, { intro: string; node: Node }>)[kind];
  const [node, setNode] = useState<Node | null>(tree?.node ?? null);
  const [result, setResult] = useState<Result | null>(null);
  const [path, setPath] = useState<string[]>([]);

  if (!tree) return null;

  const reset = () => { setNode(tree.node); setResult(null); setPath([]); };

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 my-6" aria-label="Beslishulp">
      {path.length > 0 && (
        <p className="text-xs text-gray-500 mb-3">Je keuzes: {path.join(' > ')}</p>
      )}
      {result ? (
        <div className="bg-white border border-[#BAE6FD] rounded-xl p-5">
          <p className="text-xs text-gray-400 mb-1">Aanbeveling</p>
          <p className="text-lg font-bold text-[#003F5C] mb-2">{result.title}</p>
          <p className="text-gray-700 mb-4">{result.advice}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={result.href} className="bg-[#005F8A] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#003F5C] transition-colors text-sm">Lees meer</Link>
            <button onClick={reset} className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Opnieuw</button>
          </div>
        </div>
      ) : node ? (
        <div>
          <p className="font-semibold text-[#003F5C] mb-3">{node.q}</p>
          <div className="grid grid-cols-1 gap-2">
            {node.options.map(o => (
              <button
                key={o.label}
                onClick={() => {
                  setPath(p => [...p, o.label]);
                  if (o.result) setResult(o.result);
                  else if (o.next) setNode(o.next);
                }}
                className="text-left border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 bg-white hover:border-[#005F8A] hover:bg-[#F0F9FF] transition-all"
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
