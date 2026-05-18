import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kiwa 113 — Nederlands keurmerk voor drinkwaterinstallaties',
  description: 'BRL-K 113 is het Nederlandse keurmerk voor materiaalveiligheid van drinkwaterinstallaties. Wat het inhoudt, welke fabrikanten het hebben en hoe NVWA.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keurmerken/kiwa-113' },
};

export default function Kiwa113Page() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Keurmerken', url: 'https://waterfilterplatform.nl/keurmerken' },
        { name: 'Kiwa 113 — Nederlands keurmerk voor drinkwaterinstallaties', url: 'https://waterfilterplatform.nl/keurmerken/kiwa-113' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={[
        { question: "Wat is het Kiwa 113 keurmerk voor waterfilters?", answer: "Kiwa 113 (BRL-K 113) is de Nederlandse beoordelingsrichtlijn die garandeert dat materialen in contact met drinkwater geen schadelijke stoffen afgeven, zoals zware metalen of weekmakers uit plastic behuizingen. Het keurmerk zegt niets over filterprestaties, maar is essentieel voor materiaalveiligheid." },
        { question: "Is Kiwa 113 verplicht voor een waterfilter in Nederland?", answer: "Voor consumenten die een waterfilter installeren na de watermeter geldt geen formele verplichting om Kiwa 113-gecertificeerde onderdelen te gebruiken. Voor waterbedrijven en installateurs gelden wel strengere eisen. Het is echter sterk aanbevolen, omdat niet-gecertificeerde slangen en fittingen weekmakers kunnen afgeven aan uw drinkwater." },
        { question: "Wat is het verschil tussen Kiwa 113 en NSF certificering?", answer: "Kiwa 113 test uitsluitend of de materialen van een filtersysteem geen schadelijke stoffen afgeven aan drinkwater. NSF-normen (42, 53, 58) testen of het filter daadwerkelijk contaminanten verwijdert. Een goed osmosesysteem heeft idealiter zowel Kiwa 113 als een NSF-certificering." },
      ]} />
      <SchemaOrg type="Article" article={{
        title: 'Kiwa 113 — Nederlands keurmerk voor drinkwaterinstallaties',
        description: 'BRL-K 113 is het Nederlandse keurmerk voor materiaalveiligheid van drinkwaterinstallaties. Wat het inhoudt, welke fabrikanten het hebben en hoe NVWA.',
        datePublished: '2026-05-17',
        url: 'https://waterfilterplatform.nl/keurmerken/kiwa-113',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/keurmerken">Keurmerken</Link> &rsaquo; Kiwa 113
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Kiwa 113 &mdash; Nederlands keurmerk voor drinkwaterinstallaties
          </h1>
          <QuickAnswer answer="Kiwa 113 (BRL-K 113) is de Nederlandse beoordelingsrichtlijn die garandeert dat materialen in contact met drinkwater geen schadelijke stoffen afgeven. Het zegt niets over filterprestaties, maar is essentieel voor materiaalveiligheid van slangen, fittingen en filterbehuizingen." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat is Kiwa en wat is BRL-K 113?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kiwa is een Nederlandse certificerings- en testorganisatie, opgericht in 1948. Het bedrijf certificeert producten en installaties op het gebied van drinkwater, gas, bouw en andere sectoren. Kiwa is geaccrediteerd door de Raad voor Accreditatie (RvA) en opereert internationaal, maar heeft een bijzonder sterke positie in de Nederlandse drinkwatersector.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            BRL-K 113 is de Beoordelingsrichtlijn voor materialen, componenten en systemen die in aanraking komen met drinkwater voor menselijke consumptie. De richtlijn specificeert welke testen worden uitgevoerd, hoe monsters worden genomen en welke grenswaarden van toepassing zijn voor de migratie van stoffen vanuit het materiaal naar het water.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Kiwa-certificering voor waterfilters valt onder dit kader: het gaat specifiek om de onderdelen van een filtersysteem die permanent contact hebben met drinkwater, zoals filterbehuizingen van kunststof, verbindingsslangen, O-ringen en fittingen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat test Kiwa 113 precies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De tests onder BRL-K 113 zijn uitsluitend gericht op materiaalveiligheid. Ze meten:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
            <li>
              <strong>Migratie van zware metalen:</strong> Lood, cadmium, chroom en nikkel mogen niet in meetbare hoeveelheden uitlogen vanuit fittingen of behuizingen.
            </li>
            <li>
              <strong>Uitloging van organische stoffen:</strong> Weekmakers, oplosmiddelen en additieven uit plastics mogen de drinkwaterkwaliteit niet beinvloeden.
            </li>
            <li>
              <strong>Microbiologische groei:</strong> Materialen mogen geen microbiologische groei bevorderen die tot verontreiniging van het water kan leiden.
            </li>
            <li>
              <strong>Smaak en geur:</strong> Materialen mogen de smaak of geur van het water niet negatief beinvloeden.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wat Kiwa 113 expliciet niet test: de filterprestaties van het systeem. Een filter met Kiwa 113 heeft bewezen dat het geen schadelijke stoffen afgeeft, maar heeft niet aangetoond dat het daadwerkelijk contaminanten uit het water verwijdert. Daarvoor zijn NSF-certificeringen vereist.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Kiwa 113 en het Drinkwaterbesluit</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het Nederlandse Drinkwaterbesluit verplicht dat materialen en chemicalien die worden gebruikt in drinkwaterinstallaties moeten zijn goedgekeurd. In de praktijk werkt Kiwa 113 als de meest erkende route om aan deze verplichting te voldoen. Waterbedrijven en installateurs hanteren Kiwa-gecertificeerde producten als standaard bij renovaties en nieuwbouw.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor consumenten die een waterfilter of osmosesysteem installeren geldt geen formele verplichting om Kiwa 113-gecertificeerde onderdelen te gebruiken. De installatie na de watermeter valt onder de verantwoordelijkheid van de eigenaar. Toch is het aan te raden: niet-gecertificeerde slangen en fittingen van lage kwaliteit kunnen weekmakers of restanten van fabricageprocessen afgeven.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Welke fabrikanten hebben Kiwa 113?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kiwa publiceert een productregister op zijn website (kiwa.com) waar alle gecertificeerde producten staan vermeld. Voor waterfilters zijn veelal de volgende categorieen te vinden:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Filterbehuizingen van fabrikanten als Pentek, Aquafilter en Watts</li>
            <li>Aansluitslangen en fittingen van Hep2O, John Guest en Pipelife</li>
            <li>Osmosesystemen van Eurowater en bepaalde modellen van Bluefilters</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Controleer bij aanschaf van een filtersysteem of de fabrikant een Kiwa-certificaatnummer kan overleggen of direct verwijst naar een vermelding in het Kiwa-productregister. Een logo alleen is onvoldoende.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">NVWA handhaving</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Nederlandse Voedsel- en Warenautoriteit (NVWA) houdt toezicht op producten die in contact komen met drinkwater en voedsel. Voor consumentenproducten als waterfilters kan de NVWA optreden als niet-gecertificeerde of onjuist geclaimde producten op de markt worden aangeboden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In de praktijk is handhaving specifiek voor waterfilters zeldzaam en gericht op ernstige gevallen. De markt voor goedkope, niet-gecertificeerde filtersystemen via online platforms is groot. Consumenten zijn voor een aanzienlijk deel zelf verantwoordelijk voor het controleren van certificeringen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Kiwa 113 versus NSF: complementaire normen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een goed osmosesysteem heeft idealiter zowel NSF als Kiwa-certificeringen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Kiwa 113:</strong> De onderdelen geven geen schadelijke stoffen af aan het drinkwater</li>
            <li><strong><Link href="/keurmerken/nsf-ansi-58" className="text-[#005F8A] hover:underline">NSF/ANSI 58:</Link></strong> Het systeem verwijdert effectief contaminanten</li>
            <li><strong><Link href="/keurmerken/acs" className="text-[#005F8A] hover:underline">ACS:</Link></strong> Franse equivalent van Kiwa, breed erkend in continentaal Europa</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Voor de Nederlandse markt is Kiwa 113 de meest relevante materiaalveiligheidsstandaard. Als u een filter koopt dat uitsluitend ACS of Kiwa vermeldt maar geen NSF, zijn de filterprestaties niet onafhankelijk aangetoond.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Gerelateerde keurmerken</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58</h3>
              <p className="text-sm text-gray-600">Internationale norm voor osmosefilter prestaties.</p>
            </Link>
            <Link href="/keurmerken/acs" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">ACS keurmerk</h3>
              <p className="text-sm text-gray-600">Frans equivalent voor drinkwatercontact, erkend in Europa.</p>
            </Link>
            <Link href="/keurmerken/ce-markering" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">CE-markering</h3>
              <p className="text-sm text-gray-600">Wat garandeert CE wel en niet voor waterfilters?</p>
            </Link>
            <Link href="/keurmerken/verificatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Certificering controleren</h3>
              <p className="text-sm text-gray-600">Hoe controleert u Kiwa-certificering via het productregister?</p>
            </Link>
            <Link href="/filtertechnieken/vergelijking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechnieken vergeleken</h3>
              <p className="text-sm text-gray-600">Welke techniek filtert wat? Overzichtstabel per contaminant.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="algemeen" />
      </div>
    </>
  );
}
