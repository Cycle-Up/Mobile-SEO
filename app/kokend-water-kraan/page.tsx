import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Kokend water kraan — alles over kokend waterkranen',
  description:
    'Alles over de kokend water kraan: hoe werkt het, welke merken zijn er en wat kost een kokend waterkraan? De complete gids voor 2026.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan' },
  openGraph: {
    title: 'Kokend water kraan — hoe werkt het en welk merk past bij jou?',
    description: 'Direct 100°C water uit de kraan. Vergelijk merken en vind de beste kokend water kraan voor jouw keuken.',
  },
};

const faqItems = [
  {
    question: 'Hoe werkt een kokend water kraan?',
    answer:
      'Een kokend water kraan heeft een geïsoleerd reservoir onder het aanrecht dat het water constant op 100°C houdt (of net daarboven om foaming te voorkomen). Door een slim vergrendelmechanisme komt het kokende water alleen vrij als je bewust de kraan activeert.',
  },
  {
    question: 'Is een kokend water kraan veilig?',
    answer:
      'Ja. Moderne kokend water kranen hebben een dubbele veiligheidsontgrendeling die voorkomt dat kokend water per ongeluk vrijkomt. De buitenkant van de kraan is koelgehouden zodat je hem kunt aanraken.',
  },
  {
    question: 'Hoeveel stroom verbruikt een kokend water kraan?',
    answer:
      'Een gemiddelde kokend water kraan verbruikt 10-30 watt in stand-by. Dat is vergelijkbaar met een spaarlamp. Ter vergelijking: een waterkoker die je driemaal per dag gebruikt verbruikt meer energie.',
  },
  {
    question: 'Wat is het verschil tussen een kokend water kraan met en zonder filter?',
    answer:
      'Een kokend water kraan zonder filter levert alleen kokend water maar filtert het leidingwater niet. Met een ingebouwd osmosefilter krijg je ook puur, kalkvrij water — voor betere koffie en thee, en geen kalk in je apparaten.',
  },
];

export default function KokendWaterKraanPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Kokend water kraan</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Met een kokend water kraan (kokendwaterkraan) heb je direct 100°C water uit de kraan — geen waterkoker meer nodig. We vergelijken de bekendste merken en leggen uit waar je op moet letten.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/kokend-water-kraan/vergelijken" className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">
              Merken vergelijken →
            </Link>
            <Link href="/kokend-water-kraan/met-filter" className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm">
              Kraan met filter
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <section className="prose max-w-none">
          <h2>Hoe werkt een kokend water kraan?</h2>
          <p>
            Een kokend waterkraan bestaat uit twee onderdelen:
          </p>
          <ul>
            <li><strong>De kraan zelf</strong> — meestal een extra kraan naast of gecombineerd met de gewone mengkraan</li>
            <li><strong>Het reservoir</strong> — een geïsoleerd vat onder het aanrecht dat water constant op 100°C houdt</li>
          </ul>
          <p>
            Het reservoir verbruikt continu een kleine hoeveelheid energie (10-30W) om het water warm te houden. Dit is vergelijkbaar met een nachtlampje en veel minder dan het dagelijks opkoken met een waterkoker.
          </p>
        </section>

        {/* Voordelen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voordelen van een kokend water kraan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '⚡', titel: 'Direct klaar', tekst: 'Geen wachten op de waterkoker — kokend water direct uit de kraan' },
              { icon: '🏡', titel: 'Stijlvol', tekst: 'Geen waterkoker op het aanrecht, cleaner keukenblad' },
              { icon: '💰', titel: 'Energiezuinig', tekst: 'Goedkoper per liter dan een waterkoker die je meerdere keren per dag opzet' },
              { icon: '☕', titel: 'Betere koffie', tekst: 'Nauwkeurige temperatuur voor specialty coffee en thee-bereiding' },
            ].map(v => (
              <div key={v.titel} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-2xl shrink-0">{v.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800">{v.titel}</p>
                  <p className="text-sm text-gray-600">{v.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subcategorieën */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: '/kokend-water-kraan/vergelijken', icon: '📊', titel: 'Merken vergelijken', desc: 'PureAqua vs Quooker vs Grohe: welke wint?' },
              { href: '/kokend-water-kraan/met-filter', icon: '🔬', titel: 'Kraan met filter', desc: 'Gecombineerde kokend water + osmose filter kraan' },
              { href: '/omgekeerde-osmose', icon: '💧', titel: 'Osmose filter', desc: 'Waarom een osmose filter het water nog schoner maakt' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <div className="text-2xl mb-2">{l.icon}</div>
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">{l.titel}</p>
                <p className="text-xs text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner context="kokend" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
