interface CTABannerProps {
  variant?: 'default' | 'compact';
  context?: 'osmose' | 'kokend' | 'waterhardheid' | 'algemeen';
}

const content = {
  osmose: {
    title: 'Osmosefilter én kokend water in één kraan',
    sub: 'De PureAqua 4-in-1 kraan filtert via omgekeerde osmose én levert kokend, koud, warm en bruisend water.',
    cta: 'Bekijk de PureAqua 4-in-1 kraan',
  },
  kokend: {
    title: 'Kokend water én puur gefilterd water uit één kraan',
    sub: 'De PureAqua 4-in-1 kraan combineert een kokendwaterkraan met een ingebouwd omgekeerde osmose systeem.',
    cta: 'Ontdek de PureAqua 4-in-1 kraan',
  },
  waterhardheid: {
    title: 'Last van kalk door hard water?',
    sub: 'Een omgekeerde osmose filter verwijdert kalk, chloor en andere mineralen — voor schoon, zacht leidingwater.',
    cta: 'Bekijk de PureAqua waterfilter kraan',
  },
  algemeen: {
    title: 'De slimste waterfilter kraan voor thuis',
    sub: 'Kokend, koud, warm en bruisend water — allemaal gefilterd via omgekeerde osmose. Uit één kraan.',
    cta: 'Bekijk de PureAqua 4-in-1 kraan',
  },
};

export function CTABanner({ variant = 'default', context = 'algemeen' }: CTABannerProps) {
  const c = content[context];

  if (variant === 'compact') {
    return (
      <div className="bg-[#005F8A] text-white rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="flex-1">
          <p className="font-semibold text-sm">{c.title}</p>
          <p className="text-xs text-blue-100 mt-0.5">{c.sub}</p>
        </div>
        <a
          href="https://www.pureaqua.nl"
          target="_blank"
          rel="noopener"
          className="shrink-0 bg-white text-[#005F8A] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Bekijk nu →
        </a>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#005F8A] to-[#003F5C] text-white rounded-2xl p-6 md:p-8 text-center">
      <div className="text-4xl mb-3">💧</div>
      <h2 className="text-xl md:text-2xl font-bold mb-2">{c.title}</h2>
      <p className="text-blue-100 mb-5 max-w-lg mx-auto">{c.sub}</p>
      <a
        href="https://www.pureaqua.nl"
        target="_blank"
        rel="noopener"
        className="inline-block bg-white text-[#005F8A] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm md:text-base"
      >
        {c.cta} →
      </a>
      <p className="text-xs text-blue-200 mt-3">pureaqua.nl · Nederlands merk · direct leverbaar</p>
    </div>
  );
}
