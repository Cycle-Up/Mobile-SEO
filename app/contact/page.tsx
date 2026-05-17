import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";

export function generateMetadata(): Metadata {
  const title = "Contact — WaterfilterPlatform";
  const description =
    "Vragen over waterfilters, foutmeldingen of redactioneel contact? Neem contact op met WaterfilterPlatform.";

  return {
    title,
    description,
    alternates: { canonical: "https://waterfilterplatform.nl/contact" },
    openGraph: {
      title,
      description,
      url: "https://waterfilterplatform.nl/contact",
      type: "website",
      siteName: "WaterfilterPlatform",
      locale: "nl_NL",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ContactPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact — WaterfilterPlatform",
            "url": "https://waterfilterplatform.nl/contact",
            "description": "Redactioneel en zakelijk contactadres van WaterfilterPlatform.",
            "publisher": {
              "@type": "Organization",
              "name": "WaterfilterPlatform",
              "url": "https://waterfilterplatform.nl",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://waterfilterplatform.nl" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://waterfilterplatform.nl/contact" },
            ],
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-4">
            Contact
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Heeft u een inhoudelijke vraag, een foutmelding of een zakelijk verzoek? Hieronder vindt u het juiste adres. Wij beantwoorden geen vragen over specifieke filtermodellen of persoonlijk productadvies.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-10 space-y-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[#005F8A] mb-3">Redactioneel contact</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor inhoudelijke vragen, foutmeldingen of wanneer u een studie of norm heeft gevonden die wij niet hebben vermeld:
          </p>
          <a
            href="mailto:redactie@waterfilterplatform.nl"
            className="text-[#005F8A] font-semibold hover:underline text-lg"
          >
            redactie@waterfilterplatform.nl
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[#005F8A] mb-3">Commercieel contact</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor samenwerkingen en zakelijke vragen:
          </p>
          <a
            href="mailto:zakelijk@waterfilterplatform.nl"
            className="text-[#005F8A] font-semibold hover:underline text-lg"
          >
            zakelijk@waterfilterplatform.nl
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[#005F8A] mb-3">Reactietijd</h2>
          <p className="text-gray-700 leading-relaxed">
            Wij reageren doorgaans binnen 3 werkdagen. Wij beantwoorden geen vragen over specifieke filtermodellen of persoonlijk productadvies — daarvoor verwijzen wij u naar de fabrikant of leverancier.
          </p>
        </div>

        <div className="bg-[#E0F2FE] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[#005F8A] mb-3">Foutmelding indienen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Heeft u een fout gevonden — een verouderde norm, een onjuiste claim of een verbroken link? Stuur uw melding naar{" "}
            <a href="mailto:redactie@waterfilterplatform.nl" className="text-[#005F8A] font-medium hover:underline">
              redactie@waterfilterplatform.nl
            </a>{" "}
            en vermeld:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex gap-2 items-start">
              <span className="text-[#005F8A] font-bold shrink-0">1.</span>
              <span>De URL van de pagina waarop de fout staat</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-[#005F8A] font-bold shrink-0">2.</span>
              <span>Een korte beschrijving van wat er niet klopt</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-[#005F8A] font-bold shrink-0">3.</span>
              <span>Indien mogelijk: een bronlink die de correctie onderbouwt</span>
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            Wij nemen elke gemotiveerde foutmelding serieus en corrigeren bevestigde fouten doorgaans binnen enkele werkdagen.
          </p>
        </div>

        <div className="pt-2 border-t border-gray-100 flex flex-wrap gap-4 text-sm">
          <Link href="/over-ons" className="text-[#005F8A] font-medium hover:underline">
            Over ons
          </Link>
          <Link href="/methodologie" className="text-[#005F8A] font-medium hover:underline">
            Methodologie
          </Link>
        </div>
      </section>
    </>
  );
}
