/**
 * Context -> copy/link voor de CTABanner. Pure data + accessor zodat de
 * mapping los van React getest kan worden (test/cta.test.mjs). De component
 * components/CTABanner.tsx rendert het resultaat.
 */

export const CTA_CONTENT = {
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
    sub: 'Van eenvoudige filterkannen tot omgekeerde osmose - er is voor elke situatie een passende oplossing. Lees de vergelijking.',
    cta: 'Bekijk alle filtersoorten',
    link: '/waterfilter/soorten',
  },
  zakelijk: {
    title: 'Zakelijke waterfiltratie: vraag een offerte aan',
    sub: 'Van kantoor tot industrie - vergelijk systemen op capaciteit, certificering en kosten. Onafhankelijk advies voor uw situatie.',
    cta: 'Bekijk zakelijke oplossingen',
    link: '/zakelijk',
  },
};

/**
 * @param {keyof typeof CTA_CONTENT} [context]
 * @returns {{title:string, sub:string, cta:string, link:string}}
 */
export function ctaContent(context = 'algemeen') {
  return CTA_CONTENT[context] ?? CTA_CONTENT.algemeen;
}
