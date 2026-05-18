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
      <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="flex-1">
          <p className="font-semibold text-sm text-[#003F5C]">{c.title}</p>
          <p className="text-xs text-gray-600 mt-0.5">{c.sub}</p>
        </div>
        <a
          href={c.link}
          className="shrink-0 bg-[#005F8A] text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#003F5C] transition-colors"
        >
          Lees meer →
        </a>
      </div>
    );
  }

  return (
    <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-2xl p-6 md:p-8 text-center">
      <div className="text-4xl mb-3">💧</div>
      <h2 className="text-xl md:text-2xl font-bold text-[#003F5C] mb-2">{c.title}</h2>
      <p className="text-gray-600 mb-5 max-w-lg mx-auto">{c.sub}</p>
      <a
        href={c.link}
        className="inline-block bg-[#005F8A] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#003F5C] transition-colors text-sm md:text-base"
      >
        {c.cta} →
      </a>
    </div>
  );
}
