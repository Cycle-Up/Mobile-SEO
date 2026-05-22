import Link from 'next/link';

interface MethodologyBadgeProps {
  sources?: string[];
  lastReviewed?: string;
}

const DEFAULT_SOURCES = ['RIVM', 'ILT', 'EU-richtlijn 2020/2184'];

export function MethodologyBadge({ sources, lastReviewed }: MethodologyBadgeProps) {
  const list = sources?.length ? sources : DEFAULT_SOURCES;

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-gray-400 bg-gray-50 rounded-lg px-4 py-2.5 mb-6">
      {/* Shield icon */}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="w-3.5 h-3.5 shrink-0 text-green-600"
        aria-hidden="true"
      >
        <path
          d="M10 2L3 5v5c0 4.15 3.07 8.03 7 9 3.93-.97 7-4.85 7-9V5L10 2z"
          fill="#DCFCE7"
          stroke="#16A34A"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 10l2 2 3.5-3.5"
          stroke="#15803D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="font-medium text-gray-600">Gebaseerd op</span>

      {list.map((s, i) => (
        <span key={s} className="text-gray-500">
          {i > 0 && <span className="mr-1.5">·</span>}
          {s}
        </span>
      ))}

      {lastReviewed && (
        <>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400">
            Gecontroleerd:{' '}
            {new Date(lastReviewed).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long' })}
          </span>
        </>
      )}

      <span className="text-gray-300">|</span>
      <Link href="/methodologie" className="text-[#005F8A] hover:underline font-medium">
        Methodologie →
      </Link>
    </div>
  );
}
