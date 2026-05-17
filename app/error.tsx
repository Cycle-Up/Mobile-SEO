'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-16 px-4 min-h-[60vh]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-widest mb-2">Onverwachte fout</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-3">
          Er ging iets mis bij het laden
        </h1>
        <p className="text-gray-700 leading-relaxed mb-8">
          Probeer de pagina opnieuw te laden. Blijft de fout terugkomen? Stuur ons een melding via{' '}
          <a href="mailto:redactie@waterfilterplatform.nl" className="text-[#005F8A] font-semibold hover:underline">
            redactie@waterfilterplatform.nl
          </a>{' '}
          met de URL waarop u zich bevond.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#003F5C] transition-colors"
          >
            Opnieuw proberen
          </button>
          <Link
            href="/"
            className="bg-white border border-gray-200 text-[#005F8A] font-semibold px-6 py-3 rounded-xl hover:bg-[#F0F9FF] transition-colors"
          >
            Naar de homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
