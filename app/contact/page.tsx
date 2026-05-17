import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Contact — WaterfilterPlatform',
  description: 'Neem contact op met de redactie van WaterfilterPlatform voor vragen, correcties of samenwerking.',
  alternates: { canonical: 'https://waterfilterplatform.nl/contact' },
};

export default function ContactPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact WaterfilterPlatform',
            url: 'https://waterfilterplatform.nl/contact',
            description: 'Contactgegevens en redactionele richtlijnen van WaterfilterPlatform.',
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo; Contact
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">Contact</h1>
          <p className="text-gray-600 leading-relaxed">
            Heeft u een vraag, opmerking of fout gevonden? Wij stellen alle feedback op prijs.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Redactie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor inhoudelijke vragen, correcties of aanvullingen op onze artikelen kunt u mailen naar de redactie.
            Wij reageren doorgaans binnen drie werkdagen.
          </p>
          <p className="text-gray-700">
            <strong>E-mail:</strong>{' '}
            <a href="mailto:redactie@waterfilterplatform.nl" className="text-[#005F8A] hover:underline">
              redactie@waterfilterplatform.nl
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Zakelijke samenwerking</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            WaterfilterPlatform werkt niet samen met willekeurige leveranciers. Wij onderhouden een beperkt
            aantal transparante samenwerkingen waarbij wij altijd onze redactionele onafhankelijkheid bewaren.
            Commerciele koppelingen worden duidelijk vermeld op onze{' '}
            <Link href="/over-ons" className="text-[#005F8A] hover:underline">over-ons pagina</Link>.
          </p>
          <p className="text-gray-700">
            <strong>E-mail:</strong>{' '}
            <a href="mailto:zakelijk@waterfilterplatform.nl" className="text-[#005F8A] hover:underline">
              zakelijk@waterfilterplatform.nl
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Fout gevonden?</h2>
          <p className="text-gray-700 leading-relaxed">
            Waterfiltertechnologie en wetgeving veranderen. Als u een feitelijke onjuistheid of verouderde
            informatie tegenkomt, horen wij dat graag. Vermeld de URL van de pagina en de betreffende passage
            in uw bericht. Correcties verwerken wij zo snel mogelijk en worden voorzien van een datumstempel.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Geen persoonlijk wateradvies</h2>
          <p className="text-gray-700 leading-relaxed">
            Wij geven geen persoonlijk wateradvies per e-mail. Voor situatiespecifieke vragen verwijzen wij u
            naar onze <Link href="/keuzehulp" className="text-[#005F8A] hover:underline">keuzehulp</Link> of
            naar een erkend drinkwaterinstallateur in uw regio. Voor analyse van uw kraanwater kunt u contact
            opnemen met uw drinkwaterbedrijf of een gecertificeerd laboratorium.
          </p>
        </section>

        <div className="bg-[#E0F2FE] rounded-xl p-6 text-sm text-gray-700">
          <p className="font-semibold text-[#003F5C] mb-1">WaterfilterPlatform</p>
          <p>Informatiesite over waterfilters en drinkwaterkwaliteit in Nederland.</p>
          <p className="mt-2">
            KvK-registratie: in aanvraag &mdash; RSIN: in aanvraag
          </p>
        </div>

      </div>
    </>
  );
}
