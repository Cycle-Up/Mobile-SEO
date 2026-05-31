/**
 * Gezondheids-/YMYL-disclaimer. Conform de SEO + AI Search-handover
 * (YMYL_DECISION_RULES): waterkwaliteit en gezondheid raken YMYL-gebied, dus
 * pagina's met gezondheids-, veiligheids- of medische context tonen een
 * disclaimer die duidelijk maakt dat de informatie geen medisch advies is.
 *
 * De tekst staat als pure constante geexporteerd zodat de check-ymyl-gate en
 * unit-tests hem kunnen verifieren zonder React te renderen.
 */

export const HEALTH_DISCLAIMER_TEXT =
  'Deze informatie is algemeen en feitelijk bedoeld en is geen medisch advies. ' +
  'Nederlands kraanwater is wettelijk veilig en wordt streng gecontroleerd. ' +
  'Heb je gezondheidsklachten of twijfel je over je situatie, raadpleeg dan je huisarts of een ' +
  'andere zorgverlener. Voor de actuele waterkwaliteit op jouw adres zijn je drinkwaterbedrijf, ' +
  'het RIVM en de officiele normen leidend.';

export function HealthDisclaimer() {
  return (
    <aside
      className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-gray-700 my-8"
      role="note"
      aria-label="Gezondheidsdisclaimer"
    >
      <strong className="text-amber-900">Gezondheidsdisclaimer:</strong> {HEALTH_DISCLAIMER_TEXT}
    </aside>
  );
}
