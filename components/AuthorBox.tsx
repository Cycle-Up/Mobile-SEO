import Link from 'next/link';
import { DEFAULT_AUTHOR } from '@/lib/authors.mjs';

interface AuthorBoxProps {
  datePublished?: string;
  dateModified?: string;
}

function formatDate(dateStr?: string) {
  if (!dateStr) return null;
  return new Date(dateStr).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' });
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 shrink-0 inline-block" aria-hidden="true">
      <path d="M4.5 2.5l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Initialen voor de avatar (bv. "JD"). */
function initials(name: string) {
  return name
    .split(/\s+/)
    .map(part => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function AuthorBox({ datePublished, dateModified }: AuthorBoxProps) {
  const displayDate = dateModified ?? datePublished;
  const author = DEFAULT_AUTHOR;

  return (
    <div className="flex items-start gap-3 bg-[#F0F9FF] border border-[#BAE6FD] rounded-xl p-4 mb-6 text-sm shadow-sm">
      {/* Avatar */}
      <div
        className="shrink-0 w-10 h-10 rounded-full bg-[#005F8A] text-white flex items-center justify-center font-bold text-xs leading-none"
        aria-hidden="true"
      >
        {initials(author.name)}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-sm">
          <Link href={author.profilePath} className="hover:text-[#005F8A] transition-colors">
            {author.name}
          </Link>
          <span className="font-normal text-gray-500"> - {author.role}</span>
        </p>
        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
          {author.shortBio}{' '}
          <Link href={author.profilePath} className="text-[#005F8A] hover:text-[#003F5C] inline-flex items-center gap-0.5 transition-colors">
            Over de auteur <ChevronRight />
          </Link>
        </p>
        <p className="text-gray-400 text-xs mt-1.5">
          Gereviewd door de{' '}
          <Link href="/redactie" className="text-[#005F8A] hover:text-[#003F5C] transition-colors">
            redactie
          </Link>
          {' '}volgens onze{' '}
          <Link href="/methodologie" className="text-[#005F8A] hover:text-[#003F5C] transition-colors">
            methodologie
          </Link>
          {displayDate && (
            <>
              {' '}&middot;{' '}
              {dateModified && datePublished && dateModified !== datePublished
                ? `Bijgewerkt op ${formatDate(dateModified)}`
                : `Gepubliceerd op ${formatDate(datePublished)}`}
            </>
          )}
        </p>
      </div>

      {/* Trust badge — altijd zichtbaar */}
      <div className="shrink-0 flex flex-col items-center gap-1 text-center">
        <div className="w-9 h-9 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
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
        <span className="text-[10px] text-green-700 font-medium leading-tight">Gecontroleerd</span>
      </div>
    </div>
  );
}
