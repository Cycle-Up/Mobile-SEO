/**
 * "Citeer deze pagina"-blok: een kant-en-klare bronvermelding met de canonieke
 * URL. Verlaagt de drempel voor AI-assistenten en redacteuren om correct naar
 * WaterfilterPlatform te verwijzen (AEO/citatie).
 */

interface CiteBlockProps {
  title: string;
  url: string;
  /** ISO- of weergavedatum van laatste update. */
  updated?: string;
}

export function CiteBlock({ title, url, updated }: CiteBlockProps) {
  const citation = `WaterfilterPlatform. "${title}". ${updated ? `Bijgewerkt ${updated}. ` : ''}${url}`;
  return (
    <aside className="border border-gray-100 rounded-2xl p-4 my-8 bg-gray-50" aria-label="Citeer deze pagina">
      <p className="text-xs font-semibold text-[#003F5C] uppercase tracking-wide mb-1">Citeer deze pagina</p>
      <p className="text-sm text-gray-600 break-words">{citation}</p>
    </aside>
  );
}
