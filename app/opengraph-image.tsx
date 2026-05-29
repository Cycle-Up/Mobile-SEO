import { ImageResponse } from 'next/og';

// Site-wide social share image (1200x630 PNG) generated via next/og.
// Applies to every route that does not define its own opengraph-image.
export const alt = 'WaterfilterPlatform - onafhankelijke waterfilter informatie';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #003F5C 0%, #005F8A 100%)',
          color: '#ffffff',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: '#E0F2FE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
            }}
          >
            💧
          </div>
          <div style={{ fontSize: '36px', fontWeight: 700, color: '#E0F2FE' }}>
            WaterfilterPlatform.nl
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontSize: '64px', fontWeight: 800, lineHeight: 1.1 }}>
            Onafhankelijke waterfilter informatie
          </div>
          <div style={{ fontSize: '32px', color: '#BAE6FD' }}>
            Keuzehulp, filtertechnieken, drinkwaternormen en waterhardheid per gemeente
          </div>
        </div>

        <div style={{ fontSize: '26px', color: '#BAE6FD' }}>
          waterfilterplatform.nl
        </div>
      </div>
    ),
    { ...size },
  );
}
