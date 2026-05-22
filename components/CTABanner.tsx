function ChevronRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WaterDropIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 shrink-0" aria-hidden="true">
      <path
        d="M16 4C16 4 7 14 7 20a9 9 0 0018 0C25 14 16 4 16 4z"
        fill="#BAE6FD"
        stroke="#005F8A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 20.5C12.7 22.5 14.2 23.5 16 23.5"
        stroke="#005F8A"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface CTABannerProps {
  variant?: 'default' | 'compact';
  context?: 'osmose' | 'kokend' | 'waterhardheid' | 'algemeen' | 'zakelijk';
}

const content = {
  osmose: {
    title: 'Welk waterfilter past bij jouw situatie?',
    sub: 'Watertype, verbruik en wensen bepalen welk systeem het meest geschikt is. Onze vergelijking helpt je kiezen.',
    cta: 'Bekijk filtersoorten vergelijking',
    link: '/waterfilter/vergelijken',
  },
  kokend: {
    title: 'Kokend water kraan of waterkoker?',
    sub: 'Gebruik, budget en keukeninrichting bepalen wat voor jou de slimste keuze is. Lees de vergelijking.',
    cta: 'Vergelijk kokend water opties',
    link: '/kokend-water-kraan/vergelijken',
  },
  waterhardheid: {
    title: 'Last van kalk door hard water?',
    sub: 'Controleer de waterhardheid in jouw gemeente en ontdek welke oplossing het beste past.',
    cta: 'Zoek jouw gemeente op',
    link: '/waterhardheid',
  },
  algemeen: {
    title: 'Welk waterfilter past bij jou?',
    sub: 'Van eenvoudige filterkannen tot omgekeerde osmose — er is voor elke situatie een passende oplossing. Lees de vergelijking.',
    cta: 'Bekijk alle filtersoorten',
    link: '/waterfilter/soorten',
  },
  zakelijk: {
    title: 'Zakelijke waterfiltratie: vraag een offerte aan',
    sub: 'Van kantoor tot industrie — vergelijk systemen op capaciteit, certificering en kosten. Onafhankelijk advies voor uw situatie.',
    cta: 'Bekijk zakelijke oplossingen',
    link: '/zakelijk',
  },
};

export function CTABanner({ variant = 'default', context = 'algemeen' }: CTABannerProps) {
  const c = content[context];

  if (variant === 'compact') {
    return (
      <div className="bg-[#E0F2FE] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-sm">
        <div className="flex-1">
          <p className="font-semibold text-sm text-[#003F5C]">{c.title}</p>
          <p className="text-xs text-gray-600 mt-0.5">{c.sub}</p>
        </div>
        <a
          href={c.link}
          className="shrink-0 inline-flex items-center gap-1.5 bg-[#005F8A] text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#003F5C] transition-colors"
        >
          Lees meer
          <ChevronRight />
        </a>
      </div>
    );
  }

  return (
    <div className="bg-[#E0F2FE] border border-[#BAE6FD] rounded-2xl p-6 md:p-8 text-center shadow-sm">
      <div className="flex justify-center mb-3">
        <WaterDropIcon />
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-[#003F5C] mb-2">{c.title}</h2>
      <p className="text-gray-600 mb-5 max-w-lg mx-auto">{c.sub}</p>
      <a
        href={c.link}
        className="inline-flex items-center gap-2 bg-[#005F8A] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#003F5C] transition-colors text-sm md:text-base"
      >
        {c.cta}
        <ChevronRight />
      </a>
    </div>
  );
}
