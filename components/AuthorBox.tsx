import Link from 'next/link';

interface AuthorBoxProps {
  datePublished?: string;
  dateModified?: string;
}

function formatDate(dateStr?: string) {
  if (!dateStr) return null;
  return new Date(dateStr).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function AuthorBox({ datePublished, dateModified }: AuthorBoxProps) {
  const displayDate = dateModified ?? datePublished;

  return (
    <div className="flex items-start gap-3 bg-[#F0F9FF] border border-[#BAE6FD] rounded-xl p-4 mb-6 text-sm">
      {/* Avatar */}
      <div
        className="shrink-0 w-10 h-10 rounded-full bg-[#005F8A] text-white flex items-center justify-center font-bold text-xs leading-none"
        aria-hidden="true"
      >
        WP
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-sm">WaterfilterPlatform Redactieteam</p>
        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
          Onze artikelen worden geschreven door drinkwaterspecialisten en gebaseerd op bronnen van RIVM, ILT en de Europese Unie.{' '}
          <Link href="/methodologie" className="text-[#005F8A] hover:underline">
            Lees onze methodologie →
          </Link>
        </p>
        {displayDate && (
          <p className="text-gray-400 text-xs mt-1.5">
            {dateModified && datePublished && dateModified !== datePublished
              ? `Bijgewerkt op ${formatDate(dateModified)}`
              : `Gepubliceerd op ${formatDate(datePublished)}`}
          </p>
        )}
      </div>

      {/* Trust badge */}
      <div className="shrink-0 hidden sm:flex flex-col items-center gap-1 text-center">
        <div className="w-8 h-8 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path
              d="M12 2L3 6V12C3 16.97 6.84 21.61 12 23C17.16 21.61 21 16.97 21 12V6L12 2Z"
              fill="#D1FAE5"
              stroke="#16A34A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12L11 14L15 10"
              stroke="#16A34A"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-[9px] text-green-700 font-medium leading-tight">Gecontroleerd</span>
      </div>
    </div>
  );
}
