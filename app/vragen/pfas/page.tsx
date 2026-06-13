import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';

export const metadata: Metadata = {
  title: "Alles over PFAS in kraanwater: 10 vragen beantwoord",
  description: "PFAS in tien vragen: wat het is, de norm, of het in kraanwater zit en welke filters het verwijderen, met bronnen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/vragen/pfas' },
  openGraph: { title: "Alles over PFAS in kraanwater: 10 vragen beantwoord", description: "PFAS in tien vragen: wat het is, de norm, of het in kraanwater zit en welke filters het verwijderen, met bronnen.", url: 'https://waterfilterplatform.nl/vragen/pfas', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Wat zijn PFAS?", answer: "PFAS is een groep van duizenden door de mens gemaakte fluorverbindingen die zeer slecht afbreken, vandaar de bijnaam forever chemicals." },
  { question: "Zit er PFAS in Nederlands kraanwater?", answer: "Drinkwaterbedrijven meten PFAS en sturen op de norm; in sommige gebieden zijn lage concentraties aangetoond. Actuele waarden staan in het meetrapport van je waterbedrijf." },
  { question: "Wat is de PFAS-norm?", answer: "De EU hanteert een somnorm van 0,1 microgram per liter voor een set PFAS, volledig van kracht in 2026." },
  { question: "Verwijdert een waterfilter PFAS?", answer: "Omgekeerde osmose verwijdert doorgaans 90 tot 99 procent. Een geschikt actief-koolfilter vangt een deel af, maar minder volledig." },
  { question: "Helpt een gewone koolstoffilterkan tegen PFAS?", answer: "Beperkt: een filterkan vermindert vooral smaak en chloor en is niet ontworpen om PFAS betrouwbaar te verwijderen." },
  { question: "Is PFAS in drinkwater gevaarlijk?", answer: "Er is geen algemeen erkende veilige drempel, daarom is de norm streng. Voor persoonlijke gezondheidsvragen is je huisarts leidend." },
  { question: "Waar komt PFAS vandaan?", answer: "Vooral uit industriele processen en producten zoals antiaanbaklagen, blusschuim en waterafstotende coatings, die in het milieu terechtkomen." },
  { question: "Kan ik PFAS uit kraanwater eruit koken?", answer: "Nee, koken verwijdert PFAS niet; door verdamping kan de concentratie zelfs licht toenemen." },
  { question: "Hoe weet ik hoeveel PFAS in mijn water zit?", answer: "Raadpleeg het meetrapport van je drinkwaterbedrijf; die publiceren periodiek de gemeten waarden per leveringsgebied." },
];

export default function PfasCluster() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Vragen', url: 'https://waterfilterplatform.nl/vragen' },
        { name: "PFAS", url: 'https://waterfilterplatform.nl/vragen/pfas' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vragen" className="hover:text-[#005F8A]">Vragen</Link>
            <span className="mx-2">/</span>
            <span>PFAS</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Alles over PFAS in tien vragen</h1>
          <p className="text-gray-600 text-lg">De belangrijkste vragen over PFAS in drinkwater, beknopt en met bronverwijzing beantwoord.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <div className="space-y-3">
          {faqItems.map(item => (
            <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">{item.question}<span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span></summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/factsheets/pfas', "PFAS-factsheet"],
              ['/kennisbank/pfas-drinkwater', "PFAS in drinkwater"],
              ['/drinkwaternormen/pfas', "PFAS-norm"],
              ['/antwoorden/verwijdert-osmose-pfas', "Verwijdert osmose PFAS?"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
