// Centraal register van alle 10 contenthubs en hun sub-pagina's.
// Voeg nieuwe sub-pagina's toe door een ClusterPage entry toe te voegen — de hub-pagina herrendert automatisch.

export type CTAContext = 'osmose' | 'kokend' | 'waterhardheid' | 'algemeen';

export interface ClusterPage {
  title: string;
  href: string;
  description: string;
  badge?: 'Nieuw' | 'Populair' | 'TODO';
}

export interface RelatedCluster {
  label: string;
  href: string;
}

export interface ClusterMeta {
  id: string;
  title: string;
  hub: string;
  description: string;
  intro: string;
  pages: ClusterPage[];
  ctaContext: CTAContext;
  commercialLinks: { label: string; href: string }[];
  relatedClusters: RelatedCluster[];
}

export const clusters: ClusterMeta[] = [
  {
    id: 'drinkwaternormen',
    title: 'Drinkwaternormen',
    hub: '/drinkwaternormen',
    description: 'Wie bepaalt wat veilig drinkwater is? EU-richtlijn, Drinkwaterbesluit, RIVM en 10 waterbedrijven.',
    intro: 'Nederlands kraanwater is veilig — maar wie bepaalt dat eigenlijk? Drinkwaternormen worden vastgesteld op drie niveaus: de EU (richtlijn 2020/2184), de Nederlandse overheid (Drinkwaterbesluit) en de tien drinkwaterbedrijven. RIVM levert de wetenschappelijke onderbouwing; ILT houdt onafhankelijk toezicht.',
    pages: [
      { title: 'Wie controleert drinkwater?', href: '/drinkwaternormen/wie-controleert-drinkwater', description: 'RIVM, ILT en waterbedrijven: rollen, bevoegdheden en meetfrequentie.' },
      { title: 'Drinkwaterbesluit', href: '/drinkwaternormen/drinkwaterbesluit', description: '60+ parameters, rapportageverplichtingen en recente wijzigingen.' },
      { title: 'EU-drinkwaterrichtlijn 2020/2184', href: '/drinkwaternormen/eu-drinkwaterrichtlijn', description: 'Nieuwe normen voor PFAS, lood en microplastics-monitoring.' },
      { title: 'Drinkwaterbedrijven', href: '/drinkwaternormen/drinkwaterbedrijven', description: 'De 10 Nederlandse bedrijven, hun bronnen en kwaliteitsrapporten.' },
      { title: 'Waterfilter certificering', href: '/drinkwaternormen/waterfilter-certificering', description: 'NSF, Kiwa, ACS: wat betekenen keurmerken en zijn ze verplicht?' },
      { title: 'Kiwa vs NSF/ANSI 58', href: '/drinkwaternormen/kiwa-nsf-ansi', description: 'Materiaalveiligheid vs prestatie-certificering vergeleken.' },
      { title: 'PFAS in drinkwater', href: '/drinkwaternormen/pfas', description: 'Norm 0,1 ug/L, hotspots NL, osmose verwijdert 90-99%.' },
      { title: 'Lood in drinkwater', href: '/drinkwaternormen/lood', description: 'EU-norm 2026: 5 ug/L. Loden leidingen, meten en osmose.' },
      { title: 'Kalk en hard water', href: '/drinkwaternormen/kalk-hard-water', description: 'Hardheidsnormen, dH-schaal, effecten en filterselectie.' },
      { title: 'Medicijnresten', href: '/drinkwaternormen/medicijnresten', description: 'Farmacostetica in water, geen wettelijke normen, osmose 90-99%.' },
      { title: 'Microplastics', href: '/drinkwaternormen/microplastics', description: 'WHO-bevindingen, EU-monitoring, osmose filtert alles boven 1 micron.' },
      { title: 'Chroom-6 norm', href: '/drinkwaternormen/chroom-6', description: 'EU 25 ug/L vs WHO 0,05 ug/L: normdiscrepantie uitgelegd.' },
      { title: 'Osmose als extra stap', href: '/drinkwaternormen/reverse-osmosis', description: 'Wanneer is extra filtratie zinvol naast veilig kraanwater?' },
    ],
    ctaContext: 'osmose',
    commercialLinks: [
      { label: 'Osmose filter kopen', href: '/omgekeerde-osmose/kopen' },
      { label: 'Waterfilters vergelijken', href: '/waterfilter/vergelijken' },
    ],
    relatedClusters: [
      { label: 'Stoffen in drinkwater', href: '/stoffen-in-drinkwater' },
      { label: 'Keurmerken & certificering', href: '/keurmerken' },
      { label: 'Filtertechnieken', href: '/filtertechnieken' },
    ],
  },
  {
    id: 'stoffen-in-drinkwater',
    title: 'Stoffen in drinkwater',
    hub: '/stoffen-in-drinkwater',
    description: 'Welke stoffen zitten er in Nederlands drinkwater en wanneer is thuisfiltratie zinvol?',
    intro: 'Drinkwater bevat naast water ook een breed scala aan opgeloste stoffen — van nuttige mineralen tot ongewenste verontreinigingen. De meeste stoffen zitten ver onder de wettelijke normen. Toch kiezen consumenten soms voor extra filtratie vanwege smaak, persoonlijke gezondheidsoverwegingen of voorzorg.',
    pages: [
      { title: 'Zware metalen', href: '/stoffen-in-drinkwater/zware-metalen', description: 'Lood, arseen, chroom, nikkel en cadmium: bronnen, normen, filteradvies.' },
      { title: 'Pesticiden en herbiciden', href: '/stoffen-in-drinkwater/pesticiden', description: 'Glyfosaat, atrazine, MCPA: normen 0,1 ug/L, osmose vs koolfilter.' },
      { title: 'PFAS-overzicht', href: '/stoffen-in-drinkwater/pfas-overzicht', description: 'De PFAS-familie: PFOS, PFOA, GenX en de 20 prioritaire stoffen.' },
      { title: 'Microbiologisch', href: '/stoffen-in-drinkwater/microbiologisch', description: 'Bacterien, virussen, protozoa en Legionella: risico en filtratie.' },
      { title: 'Kalk en mineralen', href: '/stoffen-in-drinkwater/kalk-mineralen', description: 'Calcium, magnesium, bicarbonaat: nuttig voor het lichaam, schadelijk voor apparaten.' },
      { title: 'Medicijnresten', href: '/drinkwaternormen/medicijnresten', description: 'Farmacostetica in oppervlaktewater: detectie, normen en filters.', badge: 'Populair' },
      { title: 'Nitraat en nitriet', href: '/stoffen-in-drinkwater/nitraat-nitriet', description: 'Uitspoeling uit landbouw, methemoglobinemie-risico bij baby\'s, normen.' },
      { title: 'Chloor en bijproducten', href: '/stoffen-in-drinkwater/chloor-bijproducten', description: 'THM en HAA: trihalomethanen en haloazijnzuren door chloordesinfectie.' },
      { title: 'Hormonen in water', href: '/stoffen-in-drinkwater/hormonen', description: 'Ethinylestradiol, OC-pillen, waterzuivering en osmose als barriere.' },
      { title: 'Radioactieve stoffen', href: '/stoffen-in-drinkwater/radioactieve-stoffen', description: 'Radium, radon, uranium: EU-normen, geologische bronnen, filteropties.' },
      { title: 'Microplastics', href: '/drinkwaternormen/microplastics', description: 'WHO-bevindingen, EU-monitoring en osmose als effectiefste filter.' },
      { title: 'Waterhardheid en kalk', href: '/waterhardheid', description: 'Calcium en magnesium per gemeente: zachte tot zeer harde gebieden.' },
    ],
    ctaContext: 'osmose',
    commercialLinks: [
      { label: 'Osmose filter kopen', href: '/omgekeerde-osmose/kopen' },
      { label: 'Welk filter heb ik nodig?', href: '/keuzehulp' },
    ],
    relatedClusters: [
      { label: 'Drinkwaternormen', href: '/drinkwaternormen' },
      { label: 'Filtertechnieken', href: '/filtertechnieken' },
      { label: 'Waterfilter keuzehulp', href: '/keuzehulp' },
    ],
  },
  {
    id: 'filtertechnieken',
    title: 'Filtertechnieken',
    hub: '/filtertechnieken',
    description: 'Alle waterfiltertechnieken vergeleken: van actief kool tot omgekeerde osmose en UV-sterilisatie.',
    intro: 'Er zijn tientallen manieren om water te zuiveren. Van eenvoudige actief-koolfilters die chloor en geur verwijderen, tot omgekeerde osmose die op moleculair niveau filtert. De juiste techniek hangt af van welke stoffen u wilt verwijderen, uw budget en uw installatiemogelijkheden.',
    pages: [
      { title: 'Omgekeerde osmose (RO)', href: '/omgekeerde-osmose', description: 'Filtert op 0,0001 micron: verwijdert PFAS, lood, nitraat, microplastics.' },
      { title: 'Actief kool', href: '/filtertechnieken/actief-kool', description: 'Granulaat (GAC) vs blok (CTO): chloor, geur, smaak, sommige pesticiden.' },
      { title: 'Sedimentfilter', href: '/sedimentfilter', description: 'Voorfilterstap voor zand, roest en deeltjes groter dan 1-5 micron.' },
      { title: 'UV-sterilisatie', href: '/waterfilter/uv-sterilisatie', description: 'Inactiveert bacterien, virussen en protozoa zonder chemicalien.' },
      { title: 'Ultrafiltratie (UF)', href: '/filtertechnieken/ultrafiltratie', description: 'Hollow fiber, 0,01 micron: verwijdert bacterien en grote micro-deeltjes.' },
      { title: 'Nanofiltration (NF)', href: '/filtertechnieken/nanofiltration', description: 'Tussen UF en RO: verwijdert hardheid deels maar niet alle zouten.' },
      { title: 'Keramisch filter', href: '/keramisch-filter', description: 'Reinigbaar, duurzaam, effectief voor bacterien en grotere deeltjes.' },
      { title: 'Ionenwisseling', href: '/filtertechnieken/ionenwisseling', description: 'Cation/anion exchange: ontharding, nitraatverlaging, regeneratie.', badge: 'Nieuw' },
      { title: 'Capacitieve deionisatie (CDI)', href: '/filtertechnieken/elektrolyse', description: 'Elektrostatische ionverwijdering: energiezuinig, geen zout nodig.', badge: 'Nieuw' },
      { title: 'Filtervergelijking', href: '/filtertechnieken/vergelijking', description: 'Alle technieken in 1 tabel: technologie x contaminant x kosten.', badge: 'Populair' },
    ],
    ctaContext: 'osmose',
    commercialLinks: [
      { label: 'Osmose filter kopen', href: '/omgekeerde-osmose/kopen' },
      { label: 'Filtersoorten vergelijken', href: '/waterfilter/vergelijken' },
    ],
    relatedClusters: [
      { label: 'Waterfilter keuzehulp', href: '/keuzehulp' },
      { label: 'Keurmerken & certificering', href: '/keurmerken' },
      { label: 'Stoffen in drinkwater', href: '/stoffen-in-drinkwater' },
    ],
  },
  {
    id: 'keuzehulp',
    title: 'Waterfilter keuzehulp',
    hub: '/keuzehulp',
    description: 'Stap-voor-stap keuzehulp: welk waterfilter past bij uw woning, watertype en budget?',
    intro: 'Het aanbod aan waterfilters is groot. Actief-koolfilters, osmosefilters, waterontharders, filterkannen — elk systeem lost andere problemen op. Deze keuzehulp leidt u per situatie naar het meest passende systeem, zonder verborgen verkoopadvies.',
    pages: [
      { title: 'Hard water en kalk', href: '/keuzehulp/hard-water', description: 'Hardheid boven 15 dH? Vergelijking waterontharder vs osmose.', badge: 'Populair' },
      { title: 'PFAS of lood in water', href: '/keuzehulp/pfas-lood', description: 'Aangetoonde verontreiniging of voorzorgswens: osmose als beste keuze.' },
      { title: 'Geur en smaak verbeteren', href: '/keuzehulp/geur-smaak', description: 'Chloor, metaalsmaak of geur: actief koolfilter volstaat vaak.' },
      { title: 'Baby of gezin', href: '/keuzehulp/baby-gezin', description: 'Extra bescherming voor kwetsbare groepen: osmose + remineralisatie.' },
      { title: 'Budget kiezen', href: '/keuzehulp/budget', description: 'Filteradvies per prijsklasse: onder 100, 100-500 en 500+ euro/jaar.' },
      { title: 'Huurwoning', href: '/keuzehulp/huurwoning', description: 'Geen boorinstallatie? Aanrechtfilter, filterkan of inline oplossing.' },
      { title: 'Installatietype kiezen', href: '/keuzehulp/installatie-type', description: 'Onderbouw vs aanrecht vs inline vs filterkan: voor- en nadelen.' },
      { title: 'Zakelijke toepassing', href: '/zakelijk', description: 'Voor kantoor, horeca, industrie en verhuur: aparte keuzehulp.' },
      { title: 'Reizen en buitenland', href: '/keuzehulp/buitenland-reizen', description: 'Reisfilter, straw-filter of purificatietabletten: wat werkt waar?' },
    ],
    ctaContext: 'osmose',
    commercialLinks: [
      { label: 'Osmose filter kopen', href: '/omgekeerde-osmose/kopen' },
      { label: 'Kokend water kraan kopen', href: '/kokend-water-kraan/kopen' },
      { label: 'Alle filtersoorten vergelijken', href: '/waterfilter/vergelijken' },
    ],
    relatedClusters: [
      { label: 'Filtertechnieken', href: '/filtertechnieken' },
      { label: 'Beste waterfilter per situatie', href: '/beste-waterfilter' },
      { label: 'Vergelijkingen', href: '/vergelijken' },
    ],
  },
  {
    id: 'beste-waterfilter',
    title: 'Beste waterfilter per situatie',
    hub: '/beste-waterfilter',
    description: 'Aanbevelingen voor elke woning en gebruik: appartement, gezin, baby, huurwoning en meer.',
    intro: 'Niet elk waterfilter past bij elke situatie. Een gezin in een hard-watergebied heeft andere behoeften dan een student op een kamer, of een gezin met een baby. Dit cluster biedt concrete aanbevelingen per woningtype, gebruiksituatie en budget.',
    pages: [
      { title: 'Appartement', href: '/beste-waterfilter/appartement', description: 'Kleine ruimte, beperkte installatieopties: beste filtertypen voor appartementen.' },
      { title: 'Gezin met kinderen', href: '/waterfilter/gezin', description: 'Veilig drinkwater voor het hele gezin: volumecapaciteit en onderhoudsgemak.' },
      { title: 'Baby en flesvoeding', href: '/waterfilter/baby', description: 'Osmose + remineralisatie voor de veiligste babymelk.' },
      { title: 'Huurwoning', href: '/beste-waterfilter/huurwoning', description: 'Filteroplossingen zonder boren of vaste installatie.' },
      { title: 'Hard-watergebied', href: '/beste-waterfilter/hard-water-gebied', description: 'Boven 15 dH: vergelijking waterontharder vs osmosefilter.' },
      { title: 'Ouder huis (voor 1960)', href: '/beste-waterfilter/ouder-huis', description: 'Lood in leidingen: osmose als enige betrouwbare point-of-use bescherming.' },
      { title: 'Koffie en thee', href: '/beste-waterfilter/koffie-thee', description: 'TDS 50-150 mg/L voor optimale extractie: osmose + deeltjesremineralisatie.' },
      { title: 'Woonboot', href: '/waterfilter/woonboot', description: 'Drukwisselingen, slangsysteem en mobiele filteropties.' },
      { title: 'Studentenkamer', href: '/beste-waterfilter/studentenkamer', description: 'Budget filterkan of compacte aanrechtfilter voor kleine ruimte.' },
      { title: 'Budget onder 100 euro/jaar', href: '/beste-waterfilter/budget-onder-100', description: 'Filterkan vergelijking: Brita vs BWT vs generisch.' },
      { title: 'All-in-one (4-in-1 kraan)', href: '/beste-waterfilter/all-in-one', description: 'Kokend water + osmose + koud + warm in 1 systeem.' },
      { title: 'Ecologisch', href: '/beste-waterfilter/ecologisch', description: 'CO2-footprint: osmose vs flessenwater vs filterkan.' },
    ],
    ctaContext: 'osmose',
    commercialLinks: [
      { label: 'Osmose filter kopen', href: '/omgekeerde-osmose/kopen' },
      { label: 'Keuzehulp starten', href: '/keuzehulp' },
    ],
    relatedClusters: [
      { label: 'Waterfilter keuzehulp', href: '/keuzehulp' },
      { label: 'Vergelijkingen', href: '/vergelijken' },
      { label: 'Onderhoud en gebruik', href: '/onderhoud' },
    ],
  },
  {
    id: 'waterhardheid',
    title: 'Waterhardheid en regionale kwaliteit',
    hub: '/waterhardheid',
    description: 'Waterhardheid per gemeente in Nederland: van 2 dH (Groningen) tot 30 dH (Limburg).',
    intro: 'Waterhardheid bepaalt in grote mate welk waterfilter zinvol is. In zachte gebieden (onder 8 dH) volstaat een koolstoffilter. In harde gebieden (boven 15 dH) is een waterontharder of osmosefilter aan te raden om kalkaanslag en smaakproblemen te voorkomen.',
    pages: [
      { title: 'Waterhardheid kaart Nederland', href: '/waterhardheid/kaart', description: 'Visuele kaart van waterhardheid per gemeente.' },
      { title: 'Waterhardheid meten', href: '/waterhardheid/meten', description: 'TDS-meter, teststrips of lab: hoe meet je waterhardheid thuis?' },
      { title: 'Waterhardheid verlagen', href: '/waterhardheid/verlagen', description: 'Waterontharder, osmose of inline-filter: vergelijking effectiviteit.' },
      { title: 'Per regio', href: '/waterhardheid/regio', description: 'Hardheid per provincie: Limburg, Zeeland, Groningen, Friesland vergeleken.' },
      { title: 'Per provincie', href: '/waterhardheid/per-provincie', description: 'Waterhardheid overzicht alle 12 provincies met gemiddelden.', badge: 'Nieuw' },
      { title: 'Effect op koffie', href: '/waterhardheid/effect-op-koffie', description: 'Hoe waterhardheid koffiesmaak beinvloedt: ideale TDS voor espresso.', badge: 'Nieuw' },
      { title: 'Behandelingsadvies', href: '/waterhardheid/behandelingsadvies', description: 'Per hardheidscategorie: welk systeem past het best?', badge: 'Nieuw' },
      { title: 'Hardheidstest thuis', href: '/waterfilter/hardheidstest', description: 'Teststrips, TDS-meter of lab: voor- en nadelen per methode.' },
    ],
    ctaContext: 'waterhardheid',
    commercialLinks: [
      { label: 'Waterontharder kopen', href: '/waterontharder/kopen' },
      { label: 'Osmose filter kopen', href: '/omgekeerde-osmose/kopen' },
    ],
    relatedClusters: [
      { label: 'Waterfilter keuzehulp', href: '/keuzehulp' },
      { label: 'Stoffen in drinkwater', href: '/stoffen-in-drinkwater' },
      { label: 'Filtertechnieken', href: '/filtertechnieken' },
    ],
  },
  {
    id: 'keurmerken',
    title: 'Keurmerken en certificering',
    hub: '/keurmerken',
    description: 'Wat betekenen NSF, Kiwa, ACS en CE voor waterfilters? Welke keurmerken zijn echt betrouwbaar?',
    intro: 'Waterfilters worden overspoeld door claims: "99% reductie", "gecertificeerd zuiver", "klinisch getest". Maar welke certificeringen zijn onafhankelijk getest en wat garanderen ze precies? Dit cluster legt elk keurmerk uit en helpt u onderscheid te maken tussen serieuze en marketingclaims.',
    pages: [
      { title: 'NSF/ANSI 58 (osmose)', href: '/keurmerken/nsf-ansi-58', description: 'De gouden standaard voor RO-prestaties: TDS-reductie, lood, arseen.', badge: 'Populair' },
      { title: 'NSF/ANSI 42 en 53', href: '/keurmerken/nsf-ansi-42-53', description: 'Koolstoffilters: esthetisch (42) vs gezondheidsrelevant (53).' },
      { title: 'NSF/ANSI 401', href: '/keurmerken/nsf-ansi-401', description: 'Opkomende stoffen: medicijnresten, PFAS, hormonen.' },
      { title: 'Kiwa 113', href: '/keurmerken/kiwa-113', description: 'Nederlandse materiaalveiligheidsnorm: geen schadelijke stoffen uitloging.' },
      { title: 'ACS-certificering', href: '/keurmerken/acs', description: 'Frans keurmerk erkend in NL, BE en FR: wat test ACS precies?' },
      { title: 'CE-markering', href: '/keurmerken/ce-markering', description: 'Wat CE wel en niet garandeert voor waterfilters en kraanwater.' },
      { title: 'WRAS-keurmerk', href: '/keurmerken/wras', description: 'Brits keurmerk voor watercontactmaterialen: relevant voor import.' },
      { title: 'Certificering verificatie', href: '/keurmerken/verificatie', description: 'Hoe check je of een keurmerk echt is: NSF-database, Kiwa-register.' },
    ],
    ctaContext: 'osmose',
    commercialLinks: [
      { label: 'Gecertificeerde osmosefilters', href: '/omgekeerde-osmose/kopen' },
      { label: 'Filtersoorten vergelijken', href: '/waterfilter/vergelijken' },
    ],
    relatedClusters: [
      { label: 'Drinkwaternormen', href: '/drinkwaternormen' },
      { label: 'Filtertechnieken', href: '/filtertechnieken' },
      { label: 'Vergelijkingen', href: '/vergelijken' },
    ],
  },
  {
    id: 'vergelijken',
    title: 'Vergelijkingen en alternatieven',
    hub: '/vergelijken',
    description: 'Waterfilter vs waterontharder, osmose vs filterkan, kokend water kraan merken vergeleken.',
    intro: 'Welk systeem past het beste? Osmose of waterontharder? Kokend water kraan of waterkoker? Kraanwater of flessenwater? Dit cluster biedt eerlijke, op feiten gebaseerde vergelijkingen zonder merkvoorkeur — inclusief kostenberekeningen over de volledige levensduur.',
    pages: [
      { title: 'Waterfilter vergelijken', href: '/waterfilter/vergelijken', description: 'Filterkan, koolblok, RO, UV en 4-in-1 kraan naast elkaar.', badge: 'Populair' },
      { title: 'Osmose vs filterkan', href: '/vergelijken/osmose-vs-filterkan', description: 'TCO, gebruiksgemak, filterprestaties: wanneer is osmose de betere keuze?' },
      { title: 'Waterfilter vs waterontharder', href: '/vergelijken/waterfilter-vs-waterontharder', description: 'Osmose verwijdert kalk; ontharder vervangt Ca/Mg door Na: voor- en nadelen.' },
      { title: 'Kokend water kraan merken', href: '/kokend-water-kraan/merken-vergelijking', description: 'Quooker, PureAqua, Grohe, Franke: prijzen, features, onderhoud.' },
      { title: 'Kraanwater vs flessenwater', href: '/vergelijken/kraanwater-vs-flessenwater', description: 'Kwaliteit, kosten, CO2 en microplastics: eerlijke vergelijking.' },
      { title: 'Osmose vs bronwater', href: '/osmose-water/vs-bronwater', description: 'TDS, mineralen, prijs en milieu-impact vergeleken.' },
      { title: 'Omgekeerde osmose vergelijken', href: '/omgekeerde-osmose/vergelijken', description: 'RO-systemen naast elkaar: prijs, capaciteit, certificering.' },
      { title: 'Waterontharder vergelijken', href: '/waterontharder/vergelijken', description: 'Ionenwisselaars, magnetisch, zoutloos: vergelijking effectiviteit.' },
    ],
    ctaContext: 'osmose',
    commercialLinks: [
      { label: 'Osmose filter kopen', href: '/omgekeerde-osmose/kopen' },
      { label: 'Kokend water kraan vergelijken', href: '/kokend-water-kraan/vergelijken' },
    ],
    relatedClusters: [
      { label: 'Waterfilter keuzehulp', href: '/keuzehulp' },
      { label: 'Keurmerken & certificering', href: '/keurmerken' },
      { label: 'Filtertechnieken', href: '/filtertechnieken' },
    ],
  },
  {
    id: 'onderhoud',
    title: 'Onderhoud en gebruik',
    hub: '/onderhoud',
    description: 'Wanneer filterpatronen vervangen, hoe schoonmaken en wat zijn de onderhoudskosten per systeem?',
    intro: 'Een waterfilter werkt alleen goed als het op tijd wordt onderhouden. Vervang je het membraan te laat, dan nemen de filterprestaties af. Dit cluster bundelt alle onderhoudskennis: vervangtermijnen, kosten, schoonmaakprocedures en diagnose van storingen.',
    pages: [
      { title: 'Osmose filter onderhoud', href: '/omgekeerde-osmose/onderhoud', description: 'Pre-filter 6-12 mnd, membraan 2-3 jaar, post-filter 12 mnd.' },
      { title: 'Osmose membraan vervangen', href: '/onderhoud/osmose-filter-vervangen', description: 'Wanneer moet het membraan vervangen? TDS-indicatie en vervangprocedure.', badge: 'Nieuw' },
      { title: 'Waterontharder zout', href: '/onderhoud/waterontharder-zout', description: 'Zoutniveau controleren, bijvullen en regeneratiefrequentie instellen.', badge: 'Nieuw' },
      { title: 'Kokend water kraan onderhoud', href: '/kokend-water-kraan/onderhoud', description: 'Ontkalken, filter wisselen en boiler controleren.' },
      { title: 'Filterkan patronen wisselen', href: '/onderhoud/filterkan-filter', description: 'Brita en BWT: wanneer wisselen en wat kost dat per jaar?', badge: 'Nieuw' },
      { title: 'Koolstoffilter levensduur', href: '/onderhoud/koolstoffilter', description: 'GAC vs CTO: wanneer is actief kool verzadigd en moet je wisselen?', badge: 'Nieuw' },
      { title: 'TDS meten', href: '/kennisbank/tds-meter-gebruiken', description: 'TDS-meter gebruiken: rejectie berekenen en membraanconditie beoordelen.' },
      { title: 'Kalkaanslag verwijderen', href: '/kalk-in/filter', description: 'Citroenzuur, azijn of ontkalkingstabletten: wat werkt het best?' },
      { title: 'Storingen oplossen', href: '/onderhoud/storingen-oplossen', description: 'Checklist: weinig debiet, slechte smaak, lekken — oorzaak en oplossing.', badge: 'Nieuw' },
    ],
    ctaContext: 'osmose',
    commercialLinks: [
      { label: 'Vervangfilters osmose', href: '/omgekeerde-osmose/filter' },
      { label: 'Onderhoud abonnement', href: '/waterfilter/abonnement' },
    ],
    relatedClusters: [
      { label: 'Filtertechnieken', href: '/filtertechnieken' },
      { label: 'Beste waterfilter per situatie', href: '/beste-waterfilter' },
      { label: 'Waterfilter keuzehulp', href: '/keuzehulp' },
    ],
  },
  {
    id: 'zakelijk',
    title: 'Zakelijke waterfilters',
    hub: '/zakelijk',
    description: 'Waterfilters voor kantoor, horeca, industrie, VVE en verhuurpanden: oplossingen en regelgeving.',
    intro: 'Zakelijke waterfiltratie stelt andere eisen dan thuisgebruik: hoog verbruik, Legionella-wetgeving, collectieve installaties, ROI-berekeningen en soms proceswater-specificaties. Dit cluster bundelt alle zakelijke toepassingen met oog voor regelgeving en praktische installatie.',
    pages: [
      { title: 'Kantoor en werkplek', href: '/waterfilter/kantoor', description: 'Waterkoeler vs aanrechtfilter: kosten per liter en gebruiksgemak.' },
      { title: 'Horeca', href: '/zakelijk/horeca', description: 'Restaurantwater, ijsmachine-aansluiting, barista-kwaliteit: osmose voor horeca.', badge: 'Nieuw' },
      { title: 'Industrie en proceswater', href: '/zakelijk/industrie', description: 'Zuiver water voor productie, lab, koelinstallaties: RO op maat.', badge: 'Nieuw' },
      { title: 'Appartementen en VVE', href: '/zakelijk/appartementen-vve', description: 'Collectieve waterfilterinstallatie voor flatgebouwen en VVE.', badge: 'Nieuw' },
      { title: 'Scholen en kinderopvang', href: '/zakelijk/scholen-kinderopvang', description: 'Veilig drinkwater voor kinderen: normen, installatie, toezicht.', badge: 'Nieuw' },
      { title: 'Sportschool en wellness', href: '/zakelijk/sportschool-wellness', description: 'Waterautomaat vs kraan: hygienestandaarden en kosten per liter.', badge: 'Nieuw' },
      { title: 'Verhuurpanden', href: '/waterontharder/verhuurder', description: 'Verhuurder-rechten, installatieplichten en aansprakelijkheid.' },
      { title: 'Waterkoeler vs filter', href: '/zakelijk/waterkoeler-vs-filter', description: 'Bottelloze waterkoeler vs aanrechtfilter: voor- en nadelen vergeleken.', badge: 'Nieuw' },
      { title: 'Legionella-beheersplan', href: '/zakelijk/legionella-beheersplan', description: 'Wettelijke plicht, risicoanalyse, temperatuurbeheer, inspectiefrequentie.', badge: 'Nieuw' },
      { title: 'Waterkwaliteitsanalyse', href: '/zakelijk/waterkwaliteitsanalyse', description: 'Lab-analyse voor bedrijven: parameters, kosten en interpretatie.', badge: 'Nieuw' },
    ],
    ctaContext: 'algemeen',
    commercialLinks: [
      { label: 'Drinkwaterfontein voor kantoor', href: '/drinkwaterfontein/kantoor' },
      { label: 'Zakelijk waterfilter advies', href: '/waterfilter/bedrijf' },
    ],
    relatedClusters: [
      { label: 'Waterfilter keuzehulp', href: '/keuzehulp' },
      { label: 'Onderhoud en gebruik', href: '/onderhoud' },
      { label: 'Keurmerken & certificering', href: '/keurmerken' },
    ],
  },
];

export function getCluster(id: string): ClusterMeta | undefined {
  return clusters.find((c) => c.id === id);
}
