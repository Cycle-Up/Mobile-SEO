import Link from 'next/link';

export function TrustBar() {
  return (
    <div className="bg-[#E0F2FE]/60 border-b border-[#005F8A]/10 py-2 px-4 text-xs text-gray-600">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-x-4 gap-y-1 justify-center sm:justify-start">
        <span className="flex items-center gap-1.5">
          <span className="text-green-600 font-bold">✓</span>
          Onafhankelijke redactie
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-green-600 font-bold">✓</span>
          Geen affiliate-commissie
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-green-600 font-bold">✓</span>
          Gebaseerd op fabrikantspecificaties & NSF-data
        </span>
        <Link href="/methodologie" className="text-[#005F8A] underline hover:no-underline ml-auto shrink-0">
          Lees onze methodologie →
        </Link>
      </div>
    </div>
  );
}
