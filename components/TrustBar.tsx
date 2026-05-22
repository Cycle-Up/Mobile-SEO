import Link from 'next/link';

function CheckIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 shrink-0 text-green-600" aria-hidden="true">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightSmall() {
  return (
    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 shrink-0" aria-hidden="true">
      <path d="M4.5 2.5l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TrustBar() {
  return (
    <div className="bg-[#F0F9FF] border-b border-[#BAE6FD]/60 py-2.5 px-4 text-xs text-gray-600">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-x-5 gap-y-1.5 justify-center sm:justify-start">
        <span className="flex items-center gap-1.5">
          <CheckIcon />
          Onafhankelijke redactie
        </span>
        <span className="flex items-center gap-1.5">
          <CheckIcon />
          Geen affiliate-commissie
        </span>
        <span className="flex items-center gap-1.5">
          <CheckIcon />
          Gebaseerd op fabrikantspecificaties &amp; NSF-data
        </span>
        <Link
          href="/methodologie"
          className="flex items-center gap-1 text-[#005F8A] hover:text-[#003F5C] font-medium transition-colors ml-auto shrink-0"
        >
          Lees onze methodologie
          <ChevronRightSmall />
        </Link>
      </div>
    </div>
  );
}
