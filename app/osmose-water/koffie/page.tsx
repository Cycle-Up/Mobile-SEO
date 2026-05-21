import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmose water voor koffie: waarom baristas zweren bij RO-water',
  description:
    'Osmose water voor koffie geeft de perfecte smaak. Uitleg van TDS-waarden, mineralisatie en hoe u thuis barista-kwaliteit koffie zet met osmosewater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/koffie' },
  openGraph: {
    title: 'Osmose water voor koffie: waarom baristas zweren bij RO-water',
    description:
      'Puur osmose water is te zacht voor espresso. Ontdek hoe baristas RO-water remineraliseren naar SCA-standaard en thuis barista-kwaliteit koffie zetten.',
    url: 'https://waterfilterplatform.nl/osmose-water/koffie',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Is osmose water goed voor koffie?',
    answer:
      'Puur osmose water (TDS &lt;10 mg/L) is te zacht voor koffie en geeft een vlakke, waterige smaak door gebrek aan mineralen voor goede extractie. Osmose water dat geremineraliseerd is naar TDS 75-175 mg/L is echter uitstekend voor koffie: geen chloor, geen kalk, perfecte mineraalbalans. De meeste professionele koffiebars gebruiken RO-water met remineralisatie.',
  },
  {
    question: 'Wat zijn de SCA-waterrichtlijnen voor koffie?',
    answer:
      'De Specialty Coffee Association (SCA) publiceert officieel waterstandaarden voor zetten van specialty coffee. De richtlijnen: TDS 75-175 mg/L (ideaal 150 mg/L), totale hardheid 17-85 mg/L (ideaal 68 mg/L), pH 6-8 (ideaal 7), geen chloor, geen geur. Deze standaarden zijn de benchmark voor alle serieuze koffieprofessionals wereldwijd.',
  },
  {
    question: 'Hoe remineraliseer je osmose water voor koffie?',
    answer:
      'De standaard remineralisatiemethode voor koffie combineert calciumcarbonaat (CaCO3) en magnesiumsulfaat (MgSO4) in een verhouding van 2:1 op gewichtsbasis. Calciumcarbonaat verhoogt hardheid en bicarbonaat-buffer; magnesiumsulfaat voegt magnesium toe dat de extractie van koffie-aromatische verbindingen bevordert. Kant-en-klare remineralisatiecartridges voor osmosefilters zijn de meest praktische optie thuis.',
  },
  {
    question: 'Wat is het verschil tussen espresso en filterkoffie qua watereis?',
    answer:
      'Espresso tolereert een hogere TDS dan pourover of filterkoffie. Voor espresso is TDS 125-175 mg/L optimaal; de hogere druk compenseert deels voor mineralenconcentratie. Voor pourover (Chemex, V60, Aeropress) is TDS 75-125 mg/L beter, lager TDS geeft meer helderheid en nuance. Beide vragen hetzelfde: geen chloor, geen hoge calcium die schaal veroorzaakt in de machine.',
  },
  {
    question: 'Beschadigt zacht osmose water espressomachines?',
    answer:
      'Volledig zacht osmose water (TDS &lt;10 mg/L) kan op lange termijn corrosief zijn voor metalen onderdelen in espressomachines, omdat het zeer agressief is en metaalionen uitleest. Bovendien geeft zacht water een vlakke koffiesmaak. Geremineraliseerd osmose water op SCA-standaard (TDS 75-175 mg/L) is veilig voor machines en geeft de beste extractie.',
  },
  {
    question: 'Welke TDS geeft de beste espresso?',
    answer:
      'Barista-kampioenschappen en specialty coffee labs hanteren TDS 125-150 mg/L als ideaal voor espresso. Bij die concentratie zijn er voldoende mineralen (met name magnesium en calcium in goede verhouding) voor volledige extractie van suikers, zuren en aromatische verbindingen zonder dat de machine snel kalkaanslag krijgt.',
  },
  {
    question: 'Hoe snel geeft de PureAqua 4-in-1 kraan het ideale koffiewater?',
    answer:
      'De PureAqua 4-in-1 osmosekraan met mineralenfilter levert direct water op de ideale TDS voor koffie zonder handmatige remineralisatie. Het ingebouwde mineralenfilter voegt precies de juiste concentratie calcium en magnesium toe aan het osmosewater. Geen losse cartridges mengen, geen TDS-meting nodig. Direct barista-kwaliteit koffiewater uit de kraan.',
  },
  {
    question: 'Ruikt of proef je het verschil van osmose water in koffie?',
    answer:
      'Geremineraliseerd osmose water geeft merkbaar betere koffie. Chloor in leidingwater geeft een chemische, ziekenhuisachtige bijsmaak die bij espresso sterk te proeven is. Kalk (calcium) veroorzaakt schaal in de machine en een mineralige achtertoon. Met osmose water + remineralisatie proef je de pure koffiesmaak: heldere zuren, ronde body, lange afdronk. Blindproeven door baristas bevestigen consequent de voorkeur voor RO-water.',
  },
];

export default function OsmoseWaterKoffiePage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Osmose water', url: 'https://waterfilterplatform.nl/osmose-water' },
          { name: 'Koffie', url: 'https://waterfilterplatform.nl/osmose-water/koffie' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Osmose water voor koffie: waarom baristas zweren bij RO-water',
          description:
            'Puur osmose water is te zacht voor koffie. Ontdek hoe remineralisatie naar SCA-standaard de perfecte espresso en filterkoffie geeft.',
          datePublished: '2026-05-01',
          url: 'https://waterfilterplatform.nl/osmose-water/koffie',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-water" className="hover:text-[#005F8A]">Osmose water</Link>
            <span className="mx-2">/</span>
            <span>Koffie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmose water voor koffie: waarom baristas zweren bij RO-water
          </h1>

          {/* QuickAnswer */}
          <div className="bg-white border border-[#005F8A]/30 rounded-xl p-4 mb-6">
            <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-wide mb-1">Snel antwoord</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Koffie bestaat voor 94% uit water. Puur osmose water is te zacht voor goede extractie. Geremineraliseerd RO-water op SCA-standaard (TDS 75-175 mg/L, geen chloor) geeft de perfecte smaak. Baristas gebruiken dit als professionele standaard voor espresso en filterkoffie.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#sca-richtlijnen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              SCA-richtlijnen koffiewater &rarr;
            </Link>
            <Link
              href="/osmose-water/thee"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Osmose water voor thee
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#water-koffie" className="hover:underline">Waarom water koffiesmaak bepaalt</a></li>
            <li><a href="#sca-richtlijnen" className="hover:underline">SCA-waterrichtlijnen voor koffie</a></li>
            <li><a href="#puur-osmose" className="hover:underline">Puur osmose water: te zacht</a></li>
            <li><a href="#remineralisatie" className="hover:underline">Remineraliseren voor koffie</a></li>
            <li><a href="#espresso-vs-filterkoffie" className="hover:underline">Espresso vs. filterkoffie</a></li>
            <li><a href="#barista-setup" className="hover:underline">Thuis barista-setup</a></li>
            <li><a href="#smaak-proeven" className="hover:underline">Hoe smaak proeven</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Waarom water koffiesmaak bepaalt */}
        <section id="water-koffie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom water 94% van uw koffie bepaalt
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een kopje koffie bestaat voor gemiddeld 94% uit water. Slechts 6% is opgelost koffie-extractie. Toch besteden koffieliefhebbers honderden euro&#39;s aan molen, machine en specialty bonen, maar nauwelijks aandacht aan de kwaliteit van het water. Dat is een fundamentele vergissing.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Water beinvloedt koffie op drie kritieke manieren: via de mineralenconcentratie (TDS) die de extractiediepte en body bepaalt, via chloor dat aromatische verbindingen vernietigt, en via calcium dat schaal veroorzaakt in de machine en een minerale, vlakke smaak geeft.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                factor: 'TDS (mineralen)',
                effect: 'Te laag: vlakke, waterige koffie. Te hoog: over-extractie, bitter. Ideaal: 75-175 mg/L.',
                label: 'Remineralisatie lost dit op',
                labelClass: 'bg-amber-100 text-amber-800',
              },
              {
                factor: 'Chloor',
                effect: 'Reageert met aromatische koffieverbindingen. Geeft een chemische, onaangename bijsmaak.',
                label: 'Osmose verwijdert chloor',
                labelClass: 'bg-green-100 text-green-800',
              },
              {
                factor: 'Calcium (kalk)',
                effect: 'Vormt schaal in espressomachine. Verhoogt onderhoudskosten en beinvloedt smaak negatief.',
                label: 'Osmose verwijdert kalk',
                labelClass: 'bg-green-100 text-green-800',
              },
            ].map(f => (
              <div key={f.factor} className="border border-gray-100 rounded-xl p-4 bg-white text-center">
                <p className="font-bold text-gray-900 mb-1">{f.factor}</p>
                <p className="text-xs text-gray-600 mb-2 leading-relaxed">{f.effect}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full ${f.labelClass}`}>{f.label}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            De World Barista Championship, de SCA en vrijwel alle gerenommeerde specialty koffiebars gebruiken RO-water (omgekeerde osmose water) met remineralisatie als standaard. Dit is niet een trend maar een technische noodzaak voor consistente, hoogwaardige koffie.
          </p>
        </section>

        {/* SCA richtlijnen */}
        <section id="sca-richtlijnen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            SCA-waterrichtlijnen: de internationale standaard voor koffie
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De Specialty Coffee Association (SCA) heeft de meest gebruikte waterstandaarden voor koffie gepubliceerd. Deze worden wereldwijd gehanteerd door barista-kampioenschappen, specialty koffiebars en koffieproducenten.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[440px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Parameter</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Toegestaan</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Ideaal (SCA)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { param: 'TDS (totale opgeloste stoffen)', toegestaan: '75-175 mg/L', ideaal: '150 mg/L' },
                  { param: 'Totale hardheid', toegestaan: '17-85 mg/L', ideaal: '68 mg/L' },
                  { param: 'pH', toegestaan: '6,0-8,0', ideaal: '7,0' },
                  { param: 'Chloor', toegestaan: 'Geen detecteerbaar', ideaal: '0 mg/L' },
                  { param: 'Natrium', toegestaan: '&lt;10 mg/L', ideaal: '10 mg/L' },
                  { param: 'Geur', toegestaan: 'Geen vreemde geur', ideaal: 'Geurloos' },
                ].map((r, i) => (
                  <tr key={r.param} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-2.5 px-3 text-gray-800 text-xs">{r.param}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600 text-xs">{r.toegestaan}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A] text-xs">{r.ideaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            De chlooreis (nul detecteerbaar) verklaart waarom gewoon Nederlands leidingwater — hoe goed ook voor drinkwater — niet geschikt is voor hoogwaardige koffie. Osmose water lost dit volledig op.
          </p>
        </section>

        {/* Puur osmose water te zacht */}
        <section id="puur-osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Puur osmose water is te zacht voor koffie
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Omgekeerde osmose water heeft een TDS van slechts 5-15 mg/L. Dat is bijna gedestilleerd water. Voor koffie is dit problematisch: bij zo weinig mineralen vindt onvoldoende extractie plaats. De koffie smaakt dun, waterig en vlak.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
            <h3 className="font-semibold text-[#003F5C] mb-2">Waarom mineralen essentieel zijn voor koffie-extractie</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Magnesium (Mg2+) is de sleutelmineraal voor koffie-extractie. Het trekt aromatische verbindingen uit gemalen koffie, waaronder de suikers, zuren en vluchtige verbindingen die verantwoordelijk zijn voor de body, zoetheid en complexiteit van koffie. Calcium versterkt de structuur en bijdraagt aan de body. Zonder deze mineralen worden de aromatische verbindingen onvoldoende geextraheerd.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Puur osmose water (TDS &lt;10 mg/L)</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0">&mdash;</span> Vlakke, waterige smaak</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0">&mdash;</span> Onder-extractie van aromen</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0">&mdash;</span> Lichte body, weinig diepte</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0">&mdash;</span> Geen chloor (positief)</li>
              </ul>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4 border border-[#005F8A]/20">
              <h3 className="font-semibold text-[#003F5C] mb-2 text-sm">Osmose + remineralisatie (TDS 75-175 mg/L)</h3>
              <ul className="space-y-1.5 text-sm text-[#003F5C]">
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">&#10003;</span> Volledige extractie van aromen</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">&#10003;</span> Ronde body, diepe smaak</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">&#10003;</span> Geen chloor, geen kalk</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">&#10003;</span> SCA-standaard bereikt</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Remineralisatie */}
        <section id="remineralisatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Remineraliseren voor koffie: de juiste mineraalverhouding
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Professionele baristas en koffielabs remineraliseren osmose water met een specifieke combinatie van mineralen. De standaard formule gebruikt calciumcarbonaat (CaCO3) en magnesiumsulfaat (MgSO4) in een gewichtsverhouding van 2:1.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                mineraal: 'Calciumcarbonaat (CaCO3)',
                rol: 'Verhoogt totale hardheid en bicarbonaat-buffercapaciteit. Stabiliseert de pH van het water. Bijdraagt aan body en structuur van de koffie.',
                aandeel: '2 delen',
              },
              {
                mineraal: 'Magnesiumsulfaat (MgSO4)',
                rol: 'Trekt aromatische verbindingen uit koffie. Bevordert extractie van suikers en vluchtige verbindingen die verantwoordelijk zijn voor complexiteit en zoetheid.',
                aandeel: '1 deel',
              },
            ].map(m => (
              <div key={m.mineraal} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <p className="font-semibold text-gray-900 text-sm">{m.mineraal}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#005F8A] font-semibold px-2 py-0.5 rounded-full shrink-0">{m.aandeel}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{m.rol}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Thuis is handmatige remineralisatie met losse mineraalzouten mogelijk maar omslachtig. De meest praktische oplossing is een remineralisatiecartridge voor uw osmosefilter. Deze cartridges zijn ontworpen om exact de juiste mineralenconcentratie toe te voegen aan osmose water.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <strong>Praktisch:</strong> De PureAqua 4-in-1 kraan met mineralenfilter levert direct koffiewater op de ideale TDS. Geen meten, geen mengen. Direct barista-kwaliteit water uit de kraan.
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Espresso vs filterkoffie */}
        <section id="espresso-vs-filterkoffie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Espresso versus filterkoffie: verschillende watereisen
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet alle koffiebereiding stelt dezelfde eisen aan water. Espresso en filterkoffie (pourover, Chemex, V60, Aeropress) vragen subtiel verschillende TDS-niveaus.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[440px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Bereidingsmethode</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Ideale TDS</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-left hidden sm:table-cell">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { methode: 'Espresso (machinekoffie)', tds: '125-175 mg/L', toelichting: 'Hogere druk vraagt iets hogere TDS voor goede body en crema' },
                  { methode: 'Pourover / V60 / Chemex', tds: '75-125 mg/L', toelichting: 'Lagere TDS geeft meer helderheid en nuance in lichte branding' },
                  { methode: 'Aeropress', tds: '100-150 mg/L', toelichting: 'Veelzijdig; past goed bij iets hogere mineralenconcentratie' },
                  { methode: 'Cafetiere / French press', tds: '100-175 mg/L', toelichting: 'Extractie via koude infusie vraagt meer mineralen' },
                  { methode: 'Koffiezetapparaat (filter)', tds: '75-150 mg/L', toelichting: 'Vergelijkbaar met pourover; lagere TDS beschermt de verwarmingselement' },
                ].map((r, i) => (
                  <tr key={r.methode} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-2.5 px-3 font-medium text-gray-900">{r.methode}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A]">{r.tds}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs hidden sm:table-cell">{r.toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Thuis barista setup */}
        <section id="barista-setup">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Thuis barista-setup: RO-filter met remineralisatiecartridge
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor koffieliefhebbers die thuis barista-kwaliteit willen bereiken, is een osmosefilter met remineralisatiecartridge de complete oplossing. Dit is exact de setup die professionele specialty koffiebars gebruiken, nu toegankelijk voor thuisgebruik.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                stap: '1. Osmose filter (RO-membraan)',
                beschrijving: 'Verwijdert 95-99% van alle opgeloste stoffen: chloor, kalk, zware metalen, nitraten. Levert ultrapuur water met TDS 5-15 mg/L.',
              },
              {
                stap: '2. Remineralisatiecartridge',
                beschrijving: 'Voegt calciumcarbonaat en magnesiumsulfaat toe in de juiste verhouding. Brengt TDS naar 75-175 mg/L op SCA-standaard.',
              },
              {
                stap: '3. Koffiezetter of espressomachine',
                beschrijving: 'Uw machine werkt nu met het ideale water. Geen schaalvorming, geen chloorsmaak, maximale extractie van uw koffiebonen.',
              },
            ].map(s => (
              <div key={s.stap} className="border border-gray-100 rounded-xl p-4 bg-white">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{s.stap}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.beschrijving}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            De PureAqua 4-in-1 osmosekraan integreert RO-filtratie en mineralisatie in een enkel systeem. Naast koude koffiewater levert de kraan ook heet water voor Americano, koffie via een kokend water functie, en koolzuurhoudend water.
          </p>
        </section>

        {/* Smaak proeven */}
        <section id="smaak-proeven">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe proeft u het verschil van osmose water in koffie?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het smaakverschil is het meest overtuigend in een blind proef. Zet dezelfde koffie, met dezelfde molen, hetzelfde recept, maar met twee verschillende waters: uw normale leidingwater en geremineraliseerd osmose water.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { aspect: 'Afdronk', leidingwater: 'Mineraalachtig, kort', osmose: 'Lang, zoet, complex' },
              { aspect: 'Body', leidingwater: 'Dun of vlak', osmose: 'Vol, rond' },
              { aspect: 'Helderheid', leidingwater: 'Iets troebel (kalk)', osmose: 'Helder, transparant' },
              { aspect: 'Zuren', leidingwater: 'Gedempt door kalk', osmose: 'Helder, levendig' },
              { aspect: 'Geur', leidingwater: 'Soms chemisch', osmose: 'Pure koffiegeur' },
              { aspect: 'Schaal in machine', leidingwater: 'Ja, na weken', osmose: 'Nee' },
            ].map(a => (
              <div key={a.aspect} className="border border-gray-100 rounded-xl p-3 bg-white text-center">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{a.aspect}</p>
                <p className="text-xs text-gray-400 mb-0.5">Leidingwater:</p>
                <p className="text-xs text-gray-600 mb-1">{a.leidingwater}</p>
                <p className="text-xs text-[#005F8A] font-medium mb-0.5">Osmose water:</p>
                <p className="text-xs text-[#003F5C] font-semibold">{a.osmose}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Het meest merkbare verschil is de afdronk: met leidingwater eindigt espresso abrupt en mineraalachtig. Met geremineraliseerd osmose water heeft de espresso een lange, zoete, complexe afdronk. Dit is het meest consequente oordeel in blindproeven door baristas.
          </p>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterhardheid/effect-op-koffie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterhardheid en koffie</h3>
            <p className="text-sm text-gray-600">Hoe waterhardheid de smaak en kwaliteit van uw koffie beinvloedt.</p>
          </Link>
          <Link href="/osmose-water/espresso" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater voor espresso</h3>
            <p className="text-sm text-gray-600">Optimaal water voor espresso: parameters en remineralisatie.</p>
          </Link>
          <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Actief koolfiltratie</h3>
            <p className="text-sm text-gray-600">Hoe actief koolfilters chloor en geur uit water verwijderen voor betere koffie.</p>
          </Link>
          <Link href="/waterfilter/koffiezetter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor koffiezetter</h3>
            <p className="text-sm text-gray-600">Welk waterfilter verbetert de kwaliteit van uw koffiezetter?</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/osmose-water', label: 'Osmose water: alles wat u moet weten' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: hoe werkt het?' },
              { href: '/osmose-water/thee', label: 'Osmose water voor thee: theeschuim oplossen' },
              { href: '/waterfilter/tds', label: 'TDS in drinkwater: meten en verbeteren' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>&rarr;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over osmose water en koffie
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
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
