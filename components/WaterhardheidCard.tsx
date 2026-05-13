import { Gemeente, getHardheidLabel } from '@/data/gemeenten';

interface WaterhardheidCardProps {
  gemeente: Gemeente;
}

export function WaterhardheidCard({ gemeente }: WaterhardheidCardProps) {
  const pct = Math.min(100, (gemeente.hardheid / 25) * 100);

  const balk =
    gemeente.categorie === 'zacht' ? 'bg-green-500' :
    gemeente.categorie === 'matig' ? 'bg-lime-500' :
    gemeente.categorie === 'matig hard' ? 'bg-amber-500' :
    gemeente.categorie === 'hard' ? 'bg-orange-500' :
    'bg-red-500';

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="font-semibold text-gray-900">{gemeente.naam}</h3>
          <p className="text-xs text-gray-500">{gemeente.provincie}</p>
        </div>
        <div className="text-right">
          <span className="text-xl font-bold text-[#005F8A]">{gemeente.hardheid}°</span>
          <p className="text-xs text-gray-500">dH</p>
        </div>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
        <div className={`h-full rounded-full ${balk}`} style={{ width: `${pct}%` }} />
      </div>
      <p className="text-xs font-medium text-gray-700">{getHardheidLabel(gemeente.categorie)}</p>
    </div>
  );
}
