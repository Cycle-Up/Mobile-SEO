import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterfilter in huurwoning: welke opties zonder boren of installatie?",
  description:
    "Huurder? Filterkan, aanrechtfilter of inline-filter: welke waterfilter werkt zonder vaste installatie en toestemming verhuurder.",
  alternates: { canonical: "https://waterfilterplatform.nl/keuzehulp/huurwoning" },
  openGraph: {
    title: "Waterfilter in huurwoning: welke opties zonder boren of installatie?",
    description:
      "Huurder? Filterkan, aanrechtfilter of inline-filter: welke waterfilter werkt zonder vaste installatie en toestemming verhuurder.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Mag ik zelf een filter installeren in mijn huurwoning?",
    answer:
      "Een filterkan of aanrechtfilter dat alleen op de bestaande kraan wordt aangesloten via een adapter, mag u zonder toestemming plaatsen. Er wordt niets aan de woning veranderd. Een onderbouw osmosefilter vereist een extra kraan (boren in het aanrecht) en slangaansluiting op het leidingwerk. Dat is een aanpassing aan de woning en vereist in principe toestemming van de verhuurder. Raadpleeg bij twijfel uw huurcontract of vraag schriftelijk toestemming.",
  },
  {
    question: "Wat filtert een Brita-kan echt?",
    answer:
      "Een Brita-filterkan bevat een combinatie van ionenwisselaar en actief kool. De ionenwisselaar reduceert waterhardheid (kalk) deels en verlaagt het kopergehalte. Het actief kool adsorbeert chloor, geurstoffen en sommige pesticiden. Brita filtert echter geen PFAS betrouwbaar (te korte contacttijd), geen lood (ionenwisselaar heeft beperkte loodcapaciteit), geen nitraat en geen bacterien. De filterprestaties zijn beperkter dan een osmosefilter.",
  },
  {
    question: "Bestaat er een osmosefilter zonder boren?",
    answer:
      "Ja. Countertop osmosefilters (aanrechtfilter met ingebouwde RO-technologie) sluiten aan op de bestaande mengkraan via een kraanadapter. Er is geen boor- of installatiewerk nodig. De filterprestaties zijn vergelijkbaar met een onderbouw osmosefilter: 90-99% PFAS-verwijdering, 95-99% loodverwijdering. Het nadeel is dat de filter zichtbaar op het aanrecht staat en de bestaande kraan tijdelijk bezet.",
  },
  {
    question: "Moet ik het filter meenemen als ik verhuis?",
    answer:
      "Ja. Filterkannen, aanrechtfilters en inline-filters zijn uw eigendom en neemt u bij verhuizing mee. Ze zijn niet verbonden aan de woning. Vervang voor uw vertrek de filterpatroon als u het systeem wilt meenemen naar de volgende woning, zodat u direct kunt beginnen met gefilterd water.",
  },
  {
    question: "Wat kost een aanrechtfilter per jaar inclusief filters?",
    answer:
      "Een countertop osmosefilter kost bij aanschaf 200-400 euro. De jaarlijkse filterkosten bedragen 60-120 euro (sedimentfilter, koolfilter en RO-membraan). Totale jaarkosten inclusief afschrijving over 5 jaar: 100-200 euro per jaar. Een filterkan is goedkoper (30-60 euro aanschaf, 40-70 euro per jaar aan filterpatronen), maar biedt beduidend minder filterprestaties.",
  },
  {
    question: "Is een filterkan genoeg voor PFAS of lood?",
    answer:
      "Nee. Filterkannen van het Brita- of BWT-type zijn niet gecertificeerd voor PFAS-verwijdering en bieden geen betrouwbare bescherming tegen lood. De contacttijd met het actief kool is te kort en de ionenwisselaar is niet ontworpen voor loodverwijdering op klinisch relevante niveaus. Als u zorg heeft over PFAS of lood, is een countertop osmosefilter of onderbouw osmosefilter (met toestemming) de enige betrouwbare optie.",
  },
];

export default function HuurwoningPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Keuzehulp", url: "https://waterfilterplatform.nl/keuzehulp" },
          { name: "Huurwoning", url: "https://waterfilterplatform.nl/keuzehulp/huurwoning" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterfilter in huurwoning: welke opties zonder boren of installatie?",
          description:
            "Huurder? Filterkan, aanrechtfilter of inline-filter: welke waterfilter werkt zonder vaste installatie en toestemming verhuurder.",
          datePublished: "2026-05-17",
          url: "https://waterfilterplatform.nl/keuzehulp/huurwoning",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/keuzehulp" className="hover:underline">Keuzehulp</Link>
            <span className="mx-2">/</span>
            <span>Huurwoning</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter in huurwoning: welke opties zonder boren of installatie?
          </h1>
          <QuickAnswer answer="In een huurwoning zijn filterkan, aanrechtfilter (countertop) en inline-filter de beste opties. Een onderbouw osmosefilter vereist een extra kraan en slangaansluiting en is zonder toestemming van de verhuurder onverstandig." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            De beperkingen van een huurwoning
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Huurders hebben minder vrijheid dan kopers als het gaat om aanpassingen aan de woning.
            Drie concrete beperkingen spelen bij waterfilters een rol: u mag niet boren in het
            werkblad of de achterwand voor een extra kraangat, u mag geen nieuwe kraan plaatsen
            zonder toestemming van de verhuurder, en u mag de leidingen niet aanpassen of nieuwe
            slangaansluitingen aftappen achter de afsluitkraan onder het aanrecht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dit sluit een klassiek onderbouw osmosefilter in principe uit zonder vooraf toestemming
            te vragen. Maar er zijn goede alternatieven die geen enkele aanpassing aan de woning
            vereisen en bij verhuizing gewoon mee kunnen.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Filterkan (bijv. Brita, BWT)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De filterkan vereist geen installatie en is de goedkoopste optie: aanschaf 20-40 euro,
            vervangende filterpatronen 30-50 euro per jaar. De kan heeft een inhoud van 2 tot 3 liter
            en filtert via een combinatie van actief kool en ionenwisselaar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De filterkan verwijdert effectief chloor, geur, smaak en vermindert deels de waterhardheid.
            De beperkingen zijn echter significant: de kan filtert geen PFAS betrouwbaar, geen lood
            (ionenwisselaar heeft beperkte loodcapaciteit), geen nitraat en biedt geen microbiologische
            bescherming. Voor wie alleen de chloorstand of smaak wil verbeteren, volstaat een filterkan.
            Wie bescherming zoekt tegen PFAS of lood, heeft een betere optie nodig.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Aanrechtfilter (countertop osmose)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een countertop osmosefilter wordt aangesloten op de bestaande kraan via een
            standaard kraanadapter. Er wordt niets aan de woning veranderd: geen boorwerk,
            geen nieuwe kraan, geen aanpassing aan leidingen. Het systeem staat op het aanrecht
            en produceert gefilterd water rechtstreeks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De filterprestaties zijn vergelijkbaar met een onderbouw osmosefilter: PFAS-verwijdering
            90-99%, loodverwijdering 95-99%, nitraat 85-95%. Aanschafprijs: 200-400 euro.
            Jaarlijkse filterkosten: 60-120 euro. Dit is de meest aanbevolen optie voor huurders
            die serieuze filterprestaties willen zonder toestemming te hoeven vragen. Meer over dit
            type leest u op de pagina{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              osmosefilter kopen
            </Link>.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Inline-filter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een inline-filter is een compacte filterpatroon die aansluit op een bestaande
            wateraansluiting: typisch de koelkastlijn (voor waterkoelkasten met ijsmaker of
            waterdispenser) of een sous-vide aansluiting. Het filter sluit aan via standaard
            snelkoppelingen en is volledig verwijderbaar. Kosten: 20-60 euro aanschaf,
            20-50 euro per jaar voor vervangende patronen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een inline-filter bevat doorgaans actief kool en filtert chloor, geur en smaak.
            Sommige modellen bevatten ook een sedimentfilter. De filterprestaties zijn beperkter
            dan een osmosefilter: geen PFAS-verwijdering, geen nitraat. Geschikt als aanvulling
            op een koelkast of als smaakverbetering, niet als vervanging voor osmose bij
            specifieke verontreinigingen.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Wanneer toch overleg met de verhuurder?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als u een onderbouw osmosefilter wilt installeren, is overleg met de verhuurder
            noodzakelijk. Dit systeem vereist een extra kraangat in het aanrecht (boren) en
            een slangaansluiting op het leidingwerk. In de meeste gevallen geldt: als u de
            woning bij vertrek in originele staat terugbrengt (het kraangat afdichten), zijn
            verhuurders bereid toestemming te geven. Vraag dit altijd schriftelijk aan en
            bewaar de bevestiging.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij monumentale panden of huurwoningen met bijzondere voorwaarden gelden soms
            strengere beperkingen. Controleer uw huurcontract of vraag uw verhuurder om
            uitleg. Illegale aanpassingen kunnen leiden tot aansprakelijkheid voor herstelkosten
            bij vertrek.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Vergelijking filteropties voor huurwoning
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left">Filter</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Installatie</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Kosten/jaar</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Filterprestatie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
                  <td className="border border-gray-300 px-3 py-2">&lt;50 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-700">Chloor, geur, deels kalk</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Aanrechtfilter (countertop RO)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Kraanadapter, geen boren</td>
                  <td className="border border-gray-300 px-3 py-2">100-200 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">PFAS, lood, nitraat, kalk</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Inline-filter</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Snelkoppeling, geen boren</td>
                  <td className="border border-gray-300 px-3 py-2">30-60 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-700">Chloor, geur, sediment</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Onderbouw osmose (met toestemming)</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Boren + leidingaansluiting</td>
                  <td className="border border-gray-300 px-3 py-2">80-150 euro</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">PFAS, lood, nitraat, kalk</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-6">Veelgestelde vragen over waterfilter in huurwoning</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
            </details>
          ))}
        </section>

        <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante paginas</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/filterkan" className="text-[#005F8A] hover:underline">
                Filterkan vergelijking: Brita, BWT en alternatieven
              </Link>
            </li>
            <li>
              <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] hover:underline">
                Actief kool waterfilter: werking en beperkingen
              </Link>
            </li>
            <li>
              <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">
                Osmosefilter kopen: vergelijking en advies
              </Link>
            </li>
            <li>
              <Link href="/keuzehulp" className="text-[#005F8A] hover:underline">
                Terug naar keuzehulp overzicht
              </Link>
            </li>
            <li>
              <Link href="/keuzehulp/budget" className="text-[#005F8A] hover:underline">
                Waterfilter per budget: goedkoop vs premium
              </Link>
            </li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keuzehulp/installatie-type" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Installatietype waterfilter kiezen</h3>
              <p className="text-sm text-gray-600">Onderbouw, aanrecht of inline: welke filterinstallatie past bij een huurwoning zonder ingrijpende verbouwing.</p>
            </Link>
            <Link href="/beste-waterfilter/huurwoning" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Beste waterfilter voor huurwoning</h3>
              <p className="text-sm text-gray-600">Onze top-aanbeveling voor verwijderbare filters die geen toestemming van de verhuurder vereisen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
