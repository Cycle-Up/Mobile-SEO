import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Wat is osmose water? — eigenschappen, smaak & gezondheid',
  description:
    'Wat is osmose water precies? Is osmose water gezond? Alles over de eigenschappen, smaak en gezondheidsaspecten van omgekeerde osmose water.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/wat-is-osmose-water' },
  openGraph: {
    title: 'Wat is osmose water? — eigenschappen, smaak & gezondheid',
    description: 'Is osmose water gezond om te drinken? Alles over TDS-waarden, smaak, mineralen en wanneer een remineralisatiefilter zinvol is.',
  },
};

const faqItems = [
  {
    question: 'Is osmose water veilig om te drinken?',
    answer:
      'Ja, osmose water is veilig om te drinken. Het is vrijwel zuiver H₂O zonder opgeloste stoffen. Osmose water wordt wereldwijd gebruikt als drinkwater en is goedgekeurd door gezondheidsinstanties.',
  },
  {
    question: 'Mist osmose water belangrijke mineralen?',
    answer:
      'Osmose water bevat nauwelijks mineralen. In de westerse voeding is dit geen probleem, omdat we voldoende mineralen via eten binnenkrijgen. Als je wilt kun je een remineralisatiefilter toevoegen.',
  },
  {
    question: 'Hoe smaakt osmose water?',
    answer:
      'Osmose water smaakt neutraal — geen chloor, geen kalk en geen metaalachtige bijsmaak. Veel mensen ervaren het als "schoon" of "fris", vergelijkbaar met hoogwaardig bronwater.',
  },
  {
    question: 'Wat is het TDS-gehalte van osmose water?',
    answer:
      'TDS staat voor Total Dissolved Solids. Leidingwater heeft doorgaans 200-500 mg/L. Na osmosefiltering daalt dit naar 5-30 mg/L. WHO-richtlijnen stellen geen minimumlimiet voor TDS in drinkwater.',
  },
  {
    question: 'Wat is het verschil tussen osmose water en gedestilleerd water?',
    answer:
      'Gedestilleerd water wordt gemaakt door water te verdampen en te condenseren. Osmose water wordt gefilterd via een membraan. Beide zijn vrijwel mineraalvrij, maar osmose is efficiënter en goedkoper voor thuisgebruik.',
  },
];

export default function WatIsOsmoseWaterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: 'Wat is osmose water?', url: 'https://waterfilterplatform.nl/omgekeerde-osmose/wat-is-osmose-water' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Wat is osmose water?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Wat is osmose water?
          </h1>
          <p className="text-gray-600 text-lg">
            Osmose water is water dat door een omgekeerde osmose systeem is gefilterd. Het is vrijwel puur H₂O — zonder kalk, chloor, nitraten of andere opgeloste stoffen. Maar wat betekent dat voor de gezondheid en de smaak?
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        <section className="prose max-w-none">
          <h2>Wat zit er normaal in leidingwater?</h2>
          <p>
            Nederlands leidingwater is veilig, maar bevat van nature veel opgeloste stoffen:
          </p>
          <ul>
            <li><strong>Calcium en magnesium</strong> — verantwoordelijk voor kalk</li>
            <li><strong>Chloor</strong> — toegevoegd als desinfectiemiddel</li>
            <li><strong>Nitraten</strong> — afkomstig uit landbouw (in sommige regio&apos;s)</li>
            <li><strong>Microplastics</strong> — kleine plastic deeltjes</li>
            <li><strong>Medicijnresten</strong> — in kleine concentraties aanwezig</li>
          </ul>
          <p>
            Een omgekeerde osmose filter verwijdert 95–99% van al deze stoffen.
          </p>

          <h2>Is osmose water gezond?</h2>
          <p>
            Osmose water is veilig en gezond om te drinken. De Wereldgezondheidsorganisatie (WHO) heeft in 2004 een rapport gepubliceerd over gedeminineraliseerd water. De conclusie: het ontbreken van mineralen is geen gezondheidsrisico zolang je via voeding voldoende mineralen binnenkrijgt.
          </p>
          <p>
            Voor mensen die weinig variëren in hun voeding of een bepaalde mineralenbehoefte hebben (zoals sporters), kan een remineralisatiefilter toegevoegd worden. Dit voegt calcium, magnesium en andere mineralen terug toe in een vaste verhouding.
          </p>

          <h2>Hoe smaakt osmose water?</h2>
          <p>
            Osmose water smaakt neutraal — sommigen zeggen &quot;leeg&quot;, anderen &quot;schoon&quot; of &quot;fris&quot;. Het heeft geen chlooraftersmack (zoals kraanwater soms) en geen zachte mineralensmaak (zoals bronwater). Veel mensen die gewend zijn aan gefilterd water gaan leidingwater als &quot;chemisch&quot; ervaren.
          </p>
          <p>
            Voor koffie en thee is osmose water uitstekend: de neutrale basis laat de smaken van de koffie of thee beter uitkomen. Baristas en theesommeliers werken dan ook bij voorkeur met gefilterd of osmosewater.
          </p>
        </section>

        {/* TDS vergelijking */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">TDS-vergelijking: welk water is schoner?</h2>
          <div className="space-y-3">
            {[
              { label: 'Leidingwater NL gemiddeld', tds: '250 mg/L', pct: 60, kleur: 'bg-amber-400' },
              { label: 'Bronwater (fles)', tds: '100-300 mg/L', pct: 50, kleur: 'bg-amber-300' },
              { label: 'Osmose water (PureAqua)', tds: '5-30 mg/L', pct: 10, kleur: 'bg-green-400' },
              { label: 'Gedestilleerd water', tds: '< 5 mg/L', pct: 2, kleur: 'bg-green-500' },
            ].map(r => (
              <div key={r.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">{r.label}</span>
                  <span className="font-mono text-gray-500 text-xs">{r.tds}</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${r.kleur}`} style={{ width: `${r.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">TDS = Total Dissolved Solids (opgeloste stoffen in mg per liter)</p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: hoe werkt het?' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen' },
              { href: '/omgekeerde-osmose/voor-thuis', label: 'Osmose apparaat voor thuis' },
              { href: '/kennisbank/osmose-water-drinken', label: 'Osmose water drinken — gezond?' },
              { href: '/kennisbank/waterfilter-vergelijken', label: 'Alle waterfilters vergelijken' },
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente' },
            ].map((l: { href: string; label: string }) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>→</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

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
