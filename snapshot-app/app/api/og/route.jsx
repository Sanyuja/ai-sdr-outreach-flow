import { ImageResponse } from 'next/og';
import { decodeSnapshot } from '../../lib/decode';

export const runtime = 'edge';

function clip(text, max) {
  if (!text) return '';
  return text.length > max ? text.slice(0, max - 1).trimEnd() + '…' : text;
}

// Renders the 1200x630 preview card LinkedIn unfurls from the message link.
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const s = decodeSnapshot(searchParams.get('d'));

  const row = (label, value, accent) => ({
    type: 'div',
    props: {
      style: { display: 'flex', flexDirection: 'column', gap: 6 },
      children: [
        {
          type: 'div',
          props: {
            style: {
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: 'uppercase',
              color: '#64748b',
            },
            children: label,
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              fontSize: 30,
              lineHeight: 1.25,
              color: '#0f172a',
              borderLeft: `6px solid ${accent}`,
              paddingLeft: 16,
            },
            children: value,
          },
        },
      ],
    },
  });

  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: '#ffffff',
          padding: '56px 64px',
          justifyContent: 'space-between',
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: 8 },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 22,
                      fontWeight: 700,
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      color: '#2563eb',
                    },
                    children: 'SDR Signal Snapshot',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', fontSize: 54, fontWeight: 800, color: '#0f172a' },
                    children: clip(s.c, 42),
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: 26 },
              children: [
                row('Who you sell to', clip(s.icp || 'Your ideal buyers', 70), '#2563eb'),
                row('The bottleneck at scale', clip(s.p || 'Reaching them without templated spam', 70), '#f97316'),
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                fontSize: 22,
                color: '#64748b',
                borderTop: '1px solid #e2e8f0',
                paddingTop: 22,
              },
              children: 'Built from public GTM signals · A custom AI SDR flow',
            },
          },
        ],
      },
    },
    { width: 1200, height: 630 }
  );
}
