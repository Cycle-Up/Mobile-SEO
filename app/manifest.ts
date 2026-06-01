import type { MetadataRoute } from 'next';

// Web app manifest. Het icoon wordt geleverd door app/icon.tsx (next/og),
// dat Next automatisch als icon-link en in het manifest opneemt.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WaterfilterPlatform',
    short_name: 'Waterfilter',
    description:
      'Onafhankelijke informatie over waterfilters, omgekeerde osmose, kokend water kranen en waterhardheid per gemeente in Nederland.',
    start_url: '/',
    display: 'standalone',
    lang: 'nl-NL',
    background_color: '#ffffff',
    theme_color: '#005F8A',
    categories: ['education', 'utilities', 'shopping'],
  };
}
