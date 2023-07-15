import { ImageResponse } from 'next/server';
export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to bottom, #1b1b1b, #040404)',
          fontSize: 80,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',

            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
                backgroundClip: 'text',
                // '-webkit-background-clip': 'text',
                color: 'transparent',
              }}
            >
              Nathan
            </div>
            <div
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
                backgroundClip: 'text',
                // '-webkit-background-clip': 'text',
                color: 'transparent',
              }}
            >
              Roark
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
                backgroundClip: 'text',
                // '-webkit-background-clip': 'text',
                color: 'transparent',
              }}
            >
              Software
            </div>
            <div
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
                backgroundClip: 'text',
                // '-webkit-background-clip': 'text',
                color: 'transparent',
              }}
            >
              Engineer
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  );
}
