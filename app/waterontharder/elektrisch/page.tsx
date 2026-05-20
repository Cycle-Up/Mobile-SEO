import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Elektrische waterontharder: werkt het echt? | 2026',
  description:
    'Elektrische en magnetische waterontharders vergeleken met ionenwisselaar. Wat zegt de wetenschap? Wanneer werken ze, wanneer niet, en wanneer is RO een beter.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/elektrisch' },
  openGraph: {
    title: 'Elektrische waterontharder: werkt het echt?',
    description:
      'Wetenschappelijke beoordeling van elektronische en magnetische waterontharders vs ionenwisselaars. Kosten, wanneer te kiezen en het RO-alternatief.',
    url: 'https://waterfilterplatform.nl/waterontharder/elektrisch',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Werkt een elektrische waterontharder echt?',
    answer:
      'Deels. Onafhankelijk wetenschappelijk onderzoek toont aan dat elektronische waterontharders (TAC, KDF, elektromagnetisch) de kristalstructuur van kalciumcarbonaat kunnen beïnvloeden, waardoor het minder sterk hecht aan leidingen en verwarmingselementen. Ze verlagen echter NIET de gemeten waterhardheid (GH) — calcium en magnesium blijven in oplossing. Het water is hardheidschemisch onveranderd, maar kalkafzetting wordt in sommige gevallen verminderd.',
  },
  {
    question: 'Wat is het verschil tussen een elektronische en magnetische waterontharder?',
    answer:
      'Elektronische waterontharders gebruiken een oscillerend elektrisch veld via wikkelingen om de kalkstructuur te veranderen. Magnetische waterontharders gebruiken permanente magneten die om de leiding worden geklikt. Magnetische modellen zijn goedkoper maar hebben minder wetenschappelijke onderbouwing. Elektronische modellen met Template Assisted Crystallization (TAC) technologie hebben de beste onafhankelijke bewijsbasis voor kalkpreventiein leidingen.',
  },
  {
    question: 'Verlaagt een elektronische waterontharder de waterhardheid?',
    answer:
      'Nee. Dit is het cruciale verschil met een echte ionenwisselaar-waterontharder. Een elektronisch apparaat verandert calcium- en magnesiumconcentraties niet — TDS en GH blijven gelijk. Het beïnvloedt alleen de kalkcrystalvorm (aragoniet vs calciet), waardoor het minder neiging heeft zich op oppervlakken af te zetten. Voor toepassingen waarbij de daadwerkelijke hardheid belangrijk is (aquarium, osmosevoeding), werkt een elektronisch apparaat dus niet.',
  },
  {
    question: 'Wat is een ionenwisselaar-waterontharder?',
    answer:
      'Een klassieke waterontharder met ionenwisselaar vervangt calcium- en magnesiumionen door natriumionen via een hars. Het water wordt chemisch zachter (GH daalt naar 0–3 °dH). De hars wordt periodiek geregenereerd met zout. Nadelen: verhoogd natriumgehalte in het water (niet ideaal om te drinken), hoge zoutkosten (€100–250/jaar), grote installatieruimte en verhoogd waterverbruik bij regeneratie.',
  },
  {
    question: 'Wat zegt de wetenschap over elektronische waterontharders?',
    answer:
      'De wetenschappelijke consensus is gemengd. Enkele peer-reviewed studies (waaronder van de Universiteit Hannover) tonen aan dat elektronische apparaten kalkaanslag op verwarmingselementen kunnen verminderen met 50–80% in gecontroleerde omstandigheden. Andere studies vinden geen significant effect. Het meeste bewijs is positief voor Template Assisted Crystallization (TAC) systemen, maar negatief of neutraal voor eenvoudige magneten en budget-elektronische apparaten.',
  },
  {
    question: 'Wanneer is een elektronische waterontharder zinvol?',
    answer:
      'Als je doel is het verminderen van kalkaanslag op verwarmingselementen (boiler, warmtepomp), leidingen en sanitair — zonder te hoeven inleveren op natrium in je drinkwater en zonder de hoge lopende kosten van een ionenwisselaar. Niet zinvol als je de daadwerkelijke waterhardheid wilt verlagen voor drinkwater, aquarium of osmosefiltervoeding.',
  },
  {
    question: 'Is omgekeerde osmose een goed alternatief voor een waterontharder?',
    answer:
      'Voor drinkwater: ja, absoluut. RO verwijdert 95–99% van calcium en magnesium — het geproduceerde water is natriumvrij en bevat geen kalk. Voor het hele huis (alle leidingen, douche, wasmachine): een RO-systeem onder het aanrecht behandelt alleen het drinkwater, niet het hele leidingnet. Combinatie mogelijk: RO voor drinkwater, elektronisch apparaat voor leidingbescherming.',
  },
  {
    question: 'Hoeveel kost een elektrische waterontharder vs een ionenwisselaar?',
    answer:
      'Elektrische waterontharder: aanschaf €150–600, jaarlijkse kosten €10–30 (alleen stroom). Ionenwisselaar-ontharder: aanschaf €400–1.500, jaarlijkse kosten €100–250 (zout, regeneratiewater). Over 5 jaar is een elektronische ontharder €500–1.000 goedkoper in gebruik. Een RO-systeem voor drinkwater: aanschaf €150–500, jaarlijkse filterkosten €60–150.',
  },
];

const vergelijking = [
  {
    type: 'Elektronische waterontharder',
    hardheidsVerl: 'Nee',
    kalkPreventie: 'Matig–goed',
    drinkwater: 'Onveranderd',
    aanschaf: '€ 150–600',
    jaarlijks: '€ 10–30',
    zout: 'Nee',
  },
  {
    type: 'Magnetische waterontharder',
    hardheidsVerl: 'Nee',
    kalkPreventie: 'Matig (variabel)',
    drinkwater: 'Onveranderd',
    aanschaf: '€ 20–150',
    jaarlijks: '€ 0',
    zout: 'Nee',
  },
  {
    type: 'Ionenwisselaar-ontharder',
    hardheidsVerl: 'Ja (GH → 0)',
    kalkPreventie: 'Uitstekend',
    drinkwater: 'Verhoogd Na⁺',
    aanschaf: '€ 400–1.500',
    jaarlijks: '€ 100–250',
    zout: 'Ja',
  },
  {
    type: 'Omgekeerde osmose (RO)',
    hardheidsVerl: 'Ja (voor drinkwater)',
    kalkPreventie: 'Uitstekend (drinkwater)',
    drinkwater: 'Puur, zacht',
    aanschaf: '€ 150–500',
    jaarlijks: '€ 60–150',
    zout: 'Nee',
  },
];

export default function ElektrischeWaterOnthardPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Elektrische waterontharder: werkt het echt?',
          description:
            'Wetenschappelijke analyse van elektronische en magnetische waterontharders versus ionenwisselaars en omgekeerde osmose.',
          datePublished: '2025-09-01',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/waterontharder/elektrisch',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Elektrisch', url: 'https://waterfilterplatform.nl/waterontharder/elektrisch' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Elektrisch</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Elektrische waterontharder: werkt het echt?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Elektronische en magnetische waterontharders worden verkocht als de makkelijke, zoutvrije
            oplossing voor hard water. Maar wat zegt de wetenschap er werkelijk over? We kijken
            eerlijk naar wat ze kunnen, wat ze niet kunnen, en wanneer een omgekeerde osmose filter
            een betere oplossing is voor uw specifieke probleem.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmosefilter als alternatief bekijken →
            </Link>
            <Link
              href="/waterontharder"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Alle waterontharder types
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#hoe-werkt" className="hover:underline">Hoe werkt een elektronische ontharder?</a></li>
            <li><a href="#wetenschap" className="hover:underline">Wat zegt de wetenschap?</a></li>
            <li><a href="#vs-ionenwisselaar" className="hover:underline">Vergelijking met ionenwisselaar</a></li>
            <li><a href="#wanneer" className="hover:underline">Wanneer werkt het (niet)?</a></li>
            <li><a href="#kosten" className="hover:underline">Kostenvergelijking</a></li>
            <li><a href="#ro-alternatief" className="hover:underline">RO als alternatief</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Hoe werkt het */}
        <section id="hoe-werkt">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt een elektronische waterontharder?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Elektronische waterontharders maken gebruik van een oscillerend elektrisch of
            elektromagnetisch veld dat wordt opgewekt via een of meerdere spoeldraden die
            om de waterleiding worden gewikkeld. Ze verbruiken weinig stroom (5–20 watt) en
            vereisen geen ingreep in de waterleiding.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het werkingsmechanisme: het wisselend elektromagnetisch veld zou de manier waarop
            calciumcarbonaat-kristallen zich vormen beïnvloeden. Normaal vormt kalk <em>calciet</em> —
            een kristalvorm die sterk hecht aan metaalen ceramische oppervlakken. Onder invloed
            van het elektromagnetisch veld zou het kalk de vorm <em>aragoniet</em> aannemen,
            een kristalvorm die minder hecht en eerder als los poeder in het water blijft zweven.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2 text-sm">Wat het wél doet:</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Beïnvloedt kristalstructuur van kalk</li>
                <li>Kan hechting van kalk aan oppervlakken verminderen</li>
                <li>Eenvoudige installatie (knippen om leiding)</li>
                <li>Geen zout, geen chemicaliën</li>
                <li>Lage operationele kosten</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-4">
              <p className="font-semibold text-amber-900 mb-2 text-sm">Wat het NIET doet:</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Verlaagt de waterhardheid (GH) niet</li>
                <li>Verwijdert geen calcium of magnesium</li>
                <li>Verandert smaak niet</li>
                <li>Heeft geen effect op TDS</li>
                <li>Biedt geen filtratie van andere stoffen</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Magnetische waterontharders werken op hetzelfde principe maar dan via permanente
            magneten. Ze zijn goedkoper (€20–150), maar hebben minder wetenschappelijk bewijs
            dan elektronische varianten.
          </p>
        </section>

        {/* Wetenschap */}
        <section id="wetenschap">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zegt de wetenschap?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De wetenschappelijke literatuur over elektronische waterontharders is genuanceerd.
            We bespreken de meest relevante bevindingen eerlijk.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-4">
              <p className="font-semibold text-gray-900">Positief bewijs: kalkpreventiein verwarmingssystemen</p>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Enkele peer-reviewed studies, waaronder werk van de Leibniz Universität Hannover,
                tonen aan dat TAC (Template Assisted Crystallization) en elektromagnetische
                behandeling kalkaanslag op verwarmingselementen met 30–80% kunnen reduceren in
                gecontroleerde laboratoriumomstandigheden. Deze bevindingen zijn het meest
                consistent voor vloerverwarming, warm-waterboilers en zonnecollectoren.
              </p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-semibold text-gray-900">Negatief bewijs: geen effect op waterhardheid</p>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Meerdere onafhankelijke tests, inclusief die van consumentenorganisaties in
                Duitsland en Nederland, bevestigen consistent dat elektronische waterontharders
                de gemeten waterhardheid (°dH, GH) niet verlagen. De calcium- en
                magnesiumconcentratie in het water is na behandeling identiek aan voor behandeling.
              </p>
            </div>
            <div className="border-l-4 border-amber-400 pl-4">
              <p className="font-semibold text-gray-900">Gemengd bewijs: effect op huishoudapparaten</p>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Studies naar de effectiviteit bij waterkokers, koffiemachines en wasmachines geven
                wisselende resultaten. Sommige testen tonen 40–60% minder kalkaanslag, andere
                geen significant verschil. Dit verschil wordt mogelijk verklaard door variaties in
                waterhardheid, watertemperatuur en doorstroomsnelheid.
              </p>
            </div>
          </div>
          <div className="mt-4 bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Conclusie:</strong> Elektronische waterontharders
            zijn geen oplossing voor waterhardheid-gerelateerde problemen waarbij de chemische
            samenstelling van het water moet veranderen. Ze zijn een matige tot goede oplossing
            voor het voorkomen van kalkaanslag op leidingen en verwarmingssystemen in bepaalde
            omstandigheden.
          </div>
        </section>

        {/* Vergelijking */}
        <section id="vs-ionenwisselaar">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijking met andere methoden</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hoe verhoudt een elektronische waterontharder zich tot de andere grote methoden?
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[540px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Methode</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Hardheid ↓</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Kalk prev.</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Per jaar</th>
                </tr>
              </thead>
              <tbody>
                {vergelijking.map(r => (
                  <tr key={r.type} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.type}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.hardheidsVerl}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.kalkPreventie}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.jaarlijks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Drinkwaterkwaliteit: ionenwisselaar verhoogt natriumgehalte, RO verlaagt alle opgeloste stoffen.
          </p>
        </section>

        {/* Wanneer werkt het */}
        <section id="wanneer">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer werkt een elektronische ontharder (niet)?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <span>✓</span> Geschikt voor:
              </p>
              <ul className="space-y-2">
                {[
                  'Leidingen en verwarmingssystemen beschermen tegen kalkaanslag',
                  'Aanvulling naast een bestaand systeem zonder grote investering',
                  'Huurwoningen of situaties waar ingrijpen aan leidingen niet gewenst is',
                  'Als budget en eenvoud van installatie de doorslag geven',
                  'Preventieve bescherming van boilers en CV-systemen',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start text-sm text-gray-700">
                    <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-red-600 mb-3 flex items-center gap-2">
                <span>✗</span> Niet geschikt voor:
              </p>
              <ul className="space-y-2">
                {[
                  'Verlagen van de gemeten waterhardheid (GH/KH)',
                  'Verbeteren van de drinkwatersmaak',
                  'Aquariumhouders die zachte waterwaarden nodig hebben',
                  'Voeding van een osmosefilter (hardheid blijft hetzelfde)',
                  'Verwijderen van kalk uit wasmachine, afwasmachine of koffieapparaat (wisselende effectiviteit)',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start text-sm text-gray-700">
                    <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kostenvergelijking over 5 jaar</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De lage aanschafprijs van elektronische ontharders verhult soms dat ze een beperkte
            toepassingsgebied hebben. Hier de totale eigendomskosten naast elkaar.
          </p>
          <div className="space-y-3">
            {[
              {
                methode: 'Elektronische ontharder',
                aanschaf: '€ 150–400',
                jaar: '€ 10–30',
                vijfJaar: '€ 200–550',
                opmerking: 'Alleen kalkpreventie leidingen',
              },
              {
                methode: 'Ionenwisselaar-ontharder',
                aanschaf: '€ 400–1.500',
                jaar: '€ 100–250',
                vijfJaar: '€ 900–2.750',
                opmerking: 'Gehele huis, verhoogd Na in drinkwater',
              },
              {
                methode: 'RO-systeem (drinkwater)',
                aanschaf: '€ 150–500',
                jaar: '€ 60–150',
                vijfJaar: '€ 450–1.250',
                opmerking: 'Alleen drinkwater, beste kwaliteit',
              },
              {
                methode: 'Combinatie: elektronisch + RO',
                aanschaf: '€ 300–900',
                jaar: '€ 70–180',
                vijfJaar: '€ 650–1.800',
                opmerking: 'Kalkpreventie leidingen + puur drinkwater',
              },
            ].map(r => (
              <div key={r.methode} className="border border-gray-100 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold text-gray-900 text-sm">{r.methode}</p>
                  <p className="text-[#005F8A] font-bold text-sm shrink-0">{r.vijfJaar} / 5 jr</p>
                </div>
                <div className="flex gap-4 text-xs text-gray-500 mb-1">
                  <span>Aanschaf: {r.aanschaf}</span>
                  <span>Per jaar: {r.jaar}</span>
                </div>
                <p className="text-xs text-gray-500 italic">{r.opmerking}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RO alternatief */}
        <section id="ro-alternatief">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">RO als alternatief: wanneer kiezen?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Omgekeerde osmose is geen concurrent van een elektronische waterontharder — het zijn
            oplossingen voor deels overlappende maar niet identieke problemen. Hier wanneer RO
            de betere keuze is:
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                scenario: 'Je doel is puur drinkwater',
                tekst: 'RO verwijdert 95–99% van alle opgeloste stoffen: kalk, chloor, nitraten, pesticiden, PFAS, zware metalen. Een elektronische ontharder doet dit niet. Voor drinkwaterkwaliteit is RO veruit de betere keuze.',
              },
              {
                scenario: 'Je wilt kalkaanslag in huishoudapparaten voorkomen',
                tekst: 'Een RO-systeem voor drinkwater vermijdt kalkaanslag in de waterkoker, koffiemachine en stoomoven doordat het water waarmee je deze vult vrijwel kalkvrij is. Niet het hele leidingnet, maar de apparaten die je dagelijks gebruikt.',
              },
              {
                scenario: 'Je wil geen zout en geen hoge lopende kosten',
                tekst: 'RO heeft geen zout nodig en kost €60–150 per jaar aan filters. Goedkoper dan een ionenwisselaar en effectiever dan een elektronische ontharder voor drinkwaterkwaliteit.',
              },
              {
                scenario: 'Je wil de hele woning behandelen (leidingen, douche, wasmachine)',
                tekst: 'Hiervoor is RO niet de oplossing — een RO-systeem onder het aanrecht behandelt alleen drinkwater. Voor huis-breed kalkpreventie is een ionenwisselaar of TAC-systeem op de hoofdleiding nodig.',
              },
            ].map(s => (
              <div key={s.scenario} className="border-l-4 border-[#005F8A] pl-4">
                <p className="font-semibold text-gray-900 text-sm">{s.scenario}</p>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{s.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            De meest complete aanpak voor hardwatergebieden: een elektrische ontharder op de
            hoofdwaterleiding voor kalkpreventie in leidingen en grote installaties, gecombineerd
            met een RO-systeem onder het aanrecht voor drinkwater van de hoogste kwaliteit.
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="waterhardheid" />

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmosefilter kopen',
                desc: 'Onafhankelijke vergelijking van de beste RO-systemen voor puur drinkwater thuis.',
              },
              {
                href: '/waterontharder',
                title: 'Waterontharder types vergelijken',
                desc: 'Alle methoden voor waterontharding naast elkaar: ionenwisselaar, TAC, RO.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Zoek de waterhardheid in jouw woonplaats op en beoordeel of je actie nodig hebt.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose: complete gids',
                desc: 'Hoe RO werkt, wat het kost, en waarom het de beste drinkwateroplossing is.',
              },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">
                  {l.title}
                </p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over elektrische waterontharders</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling vs. elektrisch</h3>
              <p className="text-sm text-gray-600">Waarom elektrische ontharders fundamenteel anders werken dan ionenwisselende systemen.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk gedrag bij elektrische behandeling</h3>
              <p className="text-sm text-gray-600">Hoe elektrische velden de kristalvorm van kalk veranderen zonder de ionen te verwijderen.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
