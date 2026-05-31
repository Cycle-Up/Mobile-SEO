import { ImageResponse } from 'next/og';

// App-icoon (favicon/PWA) via next/og: een waterdruppel-monogram op merkkleur.
// Geen extern asset nodig; Next genereert /icon en koppelt het automatisch.
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#005F8A',
          borderRadius: 14,
          color: '#ffffff',
          fontSize: 40,
          fontWeight: 700,
        }}
      >
        {/* Druppelvorm */}
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2.5C12 2.5 5 10 5 15a7 7 0 0 0 14 0c0-5-7-12.5-7-12.5z"
            fill="#ffffff"
          />
          <path
            d="M9 14.5a3 3 0 0 0 3 3"
            stroke="#005F8A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
