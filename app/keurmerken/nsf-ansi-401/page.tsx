import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'NSF/ANSI 401 — certificering voor opkomende stoffen',
  description: 'NSF/ANSI 401 test waterfilters op 15 opkomende stoffen: medicijnresten (ibuprofen, DEET), pesticiden en hormonen. Waarom dit de meest recente.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keurmerken/nsf-ansi-401' },
};

export default function NsfAnsi401Page() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Keurmerken', url: 'https://waterfilterplatform.nl/keurmerken' },
        { name: 'NSF/ANSI 401 — certificering voor opkomende stoffen', url: 'https://waterfilterplatform.nl/keurmerken/nsf-ansi-401' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={[
        { question: "Wat is NSF/ANSI 401 certificering?", answer: "NSF/ANSI 401 is een waterfilternorm die in 2012 is geïntroduceerd en certificeert dat een filter minimaal 15 opkomende stoffen reduceert, waaronder medicijnresten zoals ibuprofen en carbamazepine, hormonen zoals BPA en estron, en insecticiden zoals DEET." },
        { question: "Zitten medicijnresten in Nederlands leidingwater?", answer: "In Nederlands leidingwater zijn concentraties van farmaceutische stoffen na zuivering vrijwel altijd onder de detectielimieten. Toch worden stoffen als carbamazepine en metformine regelmatig aangetroffen in het oppervlaktewater van de Maas en de Rijn, die als bron dienen voor een deel van het Nederlandse drinkwater." },
        { question: "Wat is het verschil tussen NSF 401 en NSF 58?", answer: "NSF/ANSI 58 certificeert de prestaties van het RO-membraan voor klassieke contaminanten zoals zware metalen en nitraten. NSF/ANSI 401 vult dit aan door te certificeren dat de voor- en nafiltertrappen opkomende stoffen zoals medicijnresten en hormonen reduceren. Beide normen zijn complementair." },
      ]} />
      <SchemaOrg type="Article" article={{
        title: 'NSF/ANSI 401 — certificering voor opkomende stoffen',
        description: 'NSF/ANSI 401 test waterfilters op 15 opkomende stoffen: medicijnresten (ibuprofen, DEET), pesticiden en hormonen. Waarom dit de meest recente.',
        datePublished: '2026-05-17',
        url: 'https://waterfilterplatform.nl/keurmerken/nsf-ansi-401',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/keurmerken">Keurmerken</Link> &rsaquo; NSF/ANSI 401
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            NSF/ANSI 401 &mdash; certificering voor opkomende stoffen
          </h1>
          <QuickAnswer answer="NSF/ANSI 401 is de meest recente NSF-norm en certificeert dat een waterfilter minimaal 15 opkomende stoffen reduceert, waaronder medicijnresten zoals ibuprofen en DEET, hormonen en industriele pesticiden die niet in oudere normen voorkomen." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Waarom een aparte norm voor opkomende stoffen?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De klassieke NSF-normen (42, 53 en 58) zijn ontworpen in een tijd dat de aanwezigheid van farmaceutische stoffen, hormonen en moderne pesticiden in drinkwater nog niet als prioriteit werd gezien. Naarmate de analytische technieken verbeterden en onderzoekers lagere concentraties konden meten, werd duidelijk dat een nieuwe categorie van contaminanten extra aandacht verdient.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF/ANSI 401 werd in 2012 geintroduceerd als antwoord op deze wetenschappelijke ontwikkeling. De norm richt zich op stoffen die niet wettelijk gereguleerd zijn in drinkwaternormen, maar die detecteerbaar zijn in oppervlaktewater en in bepaalde gevallen ook in drinkwater van waterbedrijven die op oppervlaktewater werken, zoals langs de Maas of de Rijn.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Welke 15 stoffen test NSF/ANSI 401?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De norm omvat een specifieke lijst van stoffen verdeeld over vijf categorieen. Een gecertificeerd filter moet voor elk van deze stoffen een aantoonbare reductie laten zien:
          </p>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Farmaceutische stoffen</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Ibuprofen &mdash; pijnstiller, wijdverspreid in rioolwater</li>
                <li>Naproxen &mdash; ontstekingsremmer</li>
                <li>Trimethoprim &mdash; antibioticum</li>
                <li>Linuron &mdash; herbicide dat als farmaceutisch metaboliet voorkomt</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Hormonen en hormoonverstorende stoffen</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Estron (E1) &mdash; natuurlijk oestrogeen</li>
                <li>17-alfa-ethinylestradiol (EE2) &mdash; synthetisch hormoon uit anticonceptiepil</li>
                <li>Bisphenol A (BPA) &mdash; industriele stof aanwezig in plastics</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Insecticiden en repellents</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>DEET &mdash; actief bestanddeel in muggenspray, aanwezig in zwemwater</li>
                <li>Mecoprop (MCPP) &mdash; herbicide</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Vlamvertragers en industriele stoffen</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>TCEP &mdash; organische fosfaatvlamvertrager</li>
                <li>TCPP &mdash; verwante vlamvertrager in schuimisolatie</li>
                <li>Tributylfosfaat &mdash; weekmaker en hydraulisch oplosmiddel</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Overige opkomende stoffen</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Atenolol &mdash; bètablokker voor hoge bloeddruk</li>
                <li>Carbamazepine &mdash; anti-epilepticum</li>
                <li>Metformine &mdash; diabetesmedicijn</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Zijn deze stoffen aanwezig in Nederlands drinkwater?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Nederlands leidingwater zijn de concentraties van farmaceutische stoffen na zuivering vrijwel altijd onder de detectielimieten of ruim onder eventuele actieniveaus. Toch worden stoffen als carbamazepine en metformine regelmatig aangetroffen in het oppervlaktewater van de Maas en de Rijn, de bronnen voor een deel van het Nederlandse drinkwater.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Waterbedrijven zoals Evides en Dunea, die afhankelijk zijn van rivierwater, investeren fors in geavanceerde zuivering met actief kool en ozonbehandeling. Toch is de gevoeligheid voor dit soort micro-contaminanten een reden waarom bewuste consumenten kiezen voor extra filtratie thuis.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer achtergrondinformatie vindt u op onze pagina over <Link href="/leidingwater/medicijnresten" className="text-[#005F8A] hover:underline font-medium">medicijnresten in leidingwater</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Welke filters hebben NSF/ANSI 401?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF/ANSI 401 is een relatief jonge norm en het aantal gecertificeerde producten is kleiner dan bij NSF 42 of 53. Veelal zijn het premium koolstofblokfilters en osmosesystemen van hogere kwaliteit die deze certificering dragen. Bekende fabrikanten die producten met NSF 401 aanbieden zijn onder andere AO Smith, Pentair en bepaalde modellen van APEC.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor osmosesystemen geldt: de combinatie van NSF/ANSI 58 (RO-membraan) en NSF/ANSI 401 (voor- en nafiltertrappen) geeft de meest volledige bescherming. Controleer altijd welke specifieke trappen van het systeem onder welke norm gecertificeerd zijn via de NSF-database.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">NSF 401 versus NSF 42, 53 en 58</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF/ANSI 401 vervangt de andere normen niet, maar vult ze aan. De normen zijn complementair:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><Link href="/keurmerken/nsf-ansi-42-53" className="text-[#005F8A] hover:underline font-medium">NSF 42</Link>: smaak en geur (chloor, sediment)</li>
            <li><Link href="/keurmerken/nsf-ansi-42-53" className="text-[#005F8A] hover:underline font-medium">NSF 53</Link>: gezondheidsrisicos (lood, VOC, THM)</li>
            <li><Link href="/keurmerken/nsf-ansi-58" className="text-[#005F8A] hover:underline font-medium">NSF 58</Link>: omgekeerde osmose (zware metalen, nitraten, TDS)</li>
            <li><strong>NSF 401</strong>: opkomende stoffen (medicijnen, hormonen, DEET)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Een osmosesysteem met alle vier de certificeringen biedt de breedst mogelijke gedocumenteerde bescherming. In de praktijk is dit zeldzaam; de meeste fabrikanten certificeren voor NSF 58 als basis en voegen NSF 401 toe als aanvulling op de voorfilterstadia.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Gerelateerde keurmerken</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58</h3>
              <p className="text-sm text-gray-600">De basis voor osmosefilter-certificering: membraan en prestaties.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-42-53" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 42 en 53</h3>
              <p className="text-sm text-gray-600">Koolfilter-normen voor smaak en gezondheidsrelevante stoffen.</p>
            </Link>
            <Link href="/keurmerken/verificatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Certificering controleren</h3>
              <p className="text-sm text-gray-600">Hoe verifieert u NSF 401 via de officiele database?</p>
            </Link>
            <Link href="/keurmerken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Alle keurmerken</h3>
              <p className="text-sm text-gray-600">Terug naar het keurmerken overzicht.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
