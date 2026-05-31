import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Waterontharder vs magneet: werkt magnetisch ontkalken? (2026)',
    description:
      'Klassieke waterontharder of magnetische/elektronische ontkalker? Vergelijk werking, bewijs, kosten en onderhoud - en wat realistisch helpt tegen kalk.',
    alternates: { canonical: 'https://waterfilterplatform.nl/vergelijken/waterontharder-vs-magneet' },
    openGraph: {
      title: 'Waterontharder vs magneet - vergeleken (2026)',
      description:
        'Een eerlijke vergelijking van ionenwisseling en magnetische/elektronische ontkalkers op werking, bewijs, kosten en onderhoud.',
      url: 'https://waterfilterplatform.nl/vergelijken/waterontharder-vs-magneet',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Werkt een magnetische of elektronische ontkalker echt?',
    answer:
      'Het bewijs is gemengd en omstreden. Magnetische en elektronische ontkalkers verwijderen geen calcium en magnesium uit het water: de waterhardheid (dH) blijft gelijk. Ze claimen de kristalvorming van kalk te beinvloeden zodat aanslag minder hecht. Onafhankelijke resultaten lopen sterk uiteen en effecten zijn vaak beperkt of tijdelijk. Een ionenwisselaar verlaagt de hardheid daarentegen meetbaar.',
  },
  {
    question: 'Wat is het verschil met een echte waterontharder?',
    answer:
      'Een klassieke waterontharder werkt met ionenwisseling: calcium- en magnesiumionen worden vervangen door natrium, waardoor het water meetbaar zachter wordt (lagere dH). Een magneet of elektronisch apparaat verandert de hardheid niet; het probeert alleen het gedrag van kalk te beinvloeden. Alleen ionenwisseling geeft een meetbaar lagere hardheid aan de kraan.',
  },
  {
    question: 'Is een magneet goedkoper dan een waterontharder?',
    answer:
      'De aanschaf van een magnetische of elektronische ontkalker is meestal veel lager (vaak enkele tientallen tot een paar honderd euro) dan een ionenwisselaar (indicatief 700 tot 2.000 euro plus installatie). Maar een ionenwisselaar heeft een bewezen, meetbaar effect; bij een magneet betaal je minder, maar is het resultaat onzeker. Reken bij de ontharder ook zout- en waterkosten mee.',
  },
  {
    question: 'Heeft een magneet of waterontharder onderhoud nodig?',
    answer:
      'Een magnetische ontkalker heeft nauwelijks onderhoud; een elektronisch apparaat verbruikt wat stroom. Een ionenwisselaar vraagt periodiek zout bijvullen, spoelt regelmatig (waterverbruik) en heeft af en toe onderhoud nodig. Tegenover dat onderhoud staat bij de ontharder wel een meetbaar resultaat.',
  },
  {
    question: 'Wat helpt echt tegen kalk?',
    answer:
      'Voor meetbaar zachter water is ionenwisseling de bewezen route. Wil je kalkvrij drinkwater en bescherming van koffiezetapparaat en waterkoker, dan verwijdert omgekeerde osmose vrijwel alle mineralen aan het tappunt. Een magneet kan hooguit een beperkt, onzeker effect geven en is geen vervanging voor onthardig of filtratie.',
  },
];

const vergelijking = [
  {
    naam: 'Waterontharder (ionenwisseling)',
    hardheid: 'Verlaagt meetbaar',
    bewijs: 'Bewezen principe',
    prijs: 'EUR 700-2.000',
    onderhoud: 'Zout + spoelen',
    highlight: true,
    notitie: 'Meetbaar zachter water; vraagt zout en onderhoud.',
  },
  {
    naam: 'Magnetische ontkalker',
    hardheid: 'Onveranderd',
    bewijs: 'Omstreden/beperkt',
    prijs: 'EUR 20-150',
    onderhoud: 'Vrijwel geen',
    highlight: false,
    notitie: 'Goedkoop, maar effect onzeker; hardheid blijft gelijk.',
  },
  {
    naam: 'Elektronische ontkalker',
    hardheid: 'Onveranderd',
    bewijs: 'Omstreden/beperkt',
    prijs: 'EUR 50-300',
    onderhoud: 'Wat stroom',
    highlight: false,
    notitie: 'Probeert kristalvorming te beinvloeden; resultaat wisselend.',
  },
];

export default function WaterontharderVsMagneetPage() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterontharder vs magneet: werkt magnetisch ontkalken?',
          description:
            'Een eerlijke vergelijking van ionenwisseling en magnetische/elektronische ontkalkers op werking, bewijs, kosten en onderhoud.',
          datePublished: '2026-05-31',
          dateModified: '2026-05-31',
          url: 'https://waterfilterplatform.nl/vergelijken/waterontharder-vs-magneet',
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/vergelijken' },
          { name: 'Waterontharder vs magneet', url: 'https://waterfilterplatform.nl/vergelijken/waterontharder-vs-magneet' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:text-[#005F8A]">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Waterontharder vs magneet</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder vs magneet: werkt magnetisch ontkalken?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Een <strong>klassieke waterontharder</strong> (ionenwisseling) verlaagt de hardheid meetbaar.
            Een <strong>magnetische of elektronische ontkalker</strong> belooft kalkaanslag te beperken
            zonder de hardheid te veranderen. We vergelijken werking, bewijs, kosten en onderhoud.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterontharder"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Over waterontharders
            </Link>
            <Link
              href="/vergelijken/waterontharder-vergelijken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterontharders vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <MethodologyBadge lastReviewed="2026-05-31" sources={['RIVM', 'Vewin', 'Fabrikant / verkoper (richtprijzen)']} />
        <AuthorBox datePublished="2026-05-31" />

        <QuickAnswer
          question="Waterontharder of magneet tegen kalk?"
          answer="Voor meetbaar zachter water is een klassieke waterontharder met ionenwisseling de bewezen keuze: die verlaagt de hardheid (dH) echt. Een magnetische of elektronische ontkalker verandert de hardheid niet en probeert alleen de kristalvorming van kalk te beinvloeden; het bewijs daarvoor is omstreden en beperkt. Een magneet is goedkoop maar onzeker; een ionenwisselaar kost meer en vraagt onderhoud, maar werkt aantoonbaar. Voor kalkvrij drinkwater verwijdert omgekeerde osmose vrijwel alle mineralen aan het tappunt."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterontharder en magneet naast elkaar</h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Optie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Hardheid</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Bewijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Onderhoud</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {a.naam}
                      {a.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Bewezen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{a.hardheid}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.bewijs}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.prijs}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.onderhoud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je wat?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              ['Kies een waterontharder als...', 'Je meetbaar zachter water wilt door het hele huis en bereid bent zout bij te vullen en te onderhouden.'],
              ['Kies een magneet als...', 'Je een goedkope, onderhoudsarme proef wilt en accepteert dat het effect onzeker is en de hardheid niet daalt.'],
              ['Kies osmose als...', 'Je vooral kalkvrij en zuiver drinkwater wilt aan de keukenkraan, plus verwijdering van stoffen als lood en nitraat.'],
              ['Combineer als...', 'Je zacht water in huis wilt (ontharder) en daarnaast zuiver drinkwater aan het tappunt (osmose).'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer lezen? Bekijk{' '}
            <Link href="/kennisbank/magnetisch-waterontharder" className="text-[#005F8A] underline">magnetische waterontharder</Link>,{' '}
            <Link href="/vergelijken/zoutloze-waterontharder-vergelijken" className="text-[#005F8A] underline">zoutloze waterontharders</Link>{' '}
            of{' '}
            <Link href="/kennisbank/waterhardheid-verlagen" className="text-[#005F8A] underline">waterhardheid verlagen</Link>.
          </p>
        </section>

        <CTABanner context="waterhardheid" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterontharder vs magneet</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/vergelijken/waterontharder-vergelijken', 'Waterontharders vergelijken', 'Modellen en merken naast elkaar'],
              ['/vergelijken/zoutloze-waterontharder-vergelijken', 'Zoutloze waterontharders', 'Alternatieven zonder zout'],
              ['/kennisbank/magnetisch-waterontharder', 'Magnetische waterontharder', 'Werkt het of niet?'],
              ['/kennisbank/waterhardheid-verlagen', 'Waterhardheid verlagen', 'Alle manieren op een rij'],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
