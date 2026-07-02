import { decodeSnapshot } from '../lib/decode';

// LinkedIn reads these server-rendered OG tags to build the preview card.
export async function generateMetadata({ searchParams }) {
  const s = decodeSnapshot(searchParams?.d);
  const title = `SDR Signal Snapshot — ${s.c}`;
  const description = s.icp
    ? `Built around your ICP: ${s.icp}`
    : 'A personalized outbound snapshot built from public GTM signals.';
  const ogImage = `/api/og?d=${encodeURIComponent(searchParams?.d || '')}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

const STEPS = [
  { n: 1, t: 'Public Signals', d: 'Website, LinkedIn, job posts, news' },
  { n: 2, t: 'n8n Capture', d: 'Pulls and organizes one prospect record' },
  { n: 3, t: 'AI Analysis', d: 'Positioning, ICP, buyer personas, triggers' },
  { n: 4, t: 'Hypotheses', d: 'Account priority, persona messaging' },
  { n: 5, t: 'Snapshot', d: 'This 1-page personalized view' },
  { n: 6, t: 'Outreach', d: 'Personalized note + start conversation' },
];

function Card({ label, value, accent }) {
  if (!value) return null;
  return (
    <div
      style={{
        flex: '1 1 260px',
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderLeft: `4px solid ${accent}`,
        borderRadius: 12,
        padding: '18px 20px',
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 0.6,
          textTransform: 'uppercase',
          color: '#64748b',
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 17, lineHeight: 1.45, color: '#0f172a' }}>{value}</div>
    </div>
  );
}

export default function Page({ searchParams }) {
  const s = decodeSnapshot(searchParams?.d);
  const hi = s.f ? `${s.f}, here's your` : "Here's your";

  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '40px 20px 64px' }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#2563eb', letterSpacing: 0.8, textTransform: 'uppercase' }}>
          SDR Signal Snapshot
        </div>
        <h1 style={{ fontSize: 34, lineHeight: 1.15, margin: '8px 0 6px', fontWeight: 800 }}>
          {hi} outbound snapshot for {s.c}
        </h1>
        <p style={{ fontSize: 16, color: '#475569', margin: 0 }}>
          A personalized read built from public GTM signals — so we can talk about your pipeline, not a template.
        </p>
      </div>

      {/* Personalized cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 14 }}>
        <Card label="Who you sell to" value={s.icp} accent="#2563eb" />
        <Card label="The bottleneck at scale" value={s.p} accent="#f97316" />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 34 }}>
        <Card label="A signal we noticed" value={s.h} accent="#0ea5e9" />
        {s.pt ? <Card label="Product type" value={s.pt} accent="#64748b" /> : null}
      </div>

      {/* How it works */}
      <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 4px' }}>How this snapshot is built</h2>
      <p style={{ fontSize: 14, color: '#64748b', margin: '0 0 18px' }}>
        The same AI SDR flow we would build to run outbound for {s.c}.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 34 }}>
        {STEPS.map((st) => (
          <div
            key={st.n}
            style={{
              flex: '1 1 140px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: '16px 16px 18px',
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: '#2563eb',
                color: '#fff',
                fontWeight: 800,
                fontSize: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}
            >
              {st.n}
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{st.t}</div>
            <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.4 }}>{st.d}</div>
          </div>
        ))}
      </div>

      {/* CTA + disclaimer */}
      <div
        style={{
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: 12,
          padding: '20px 22px',
        }}
      >
        <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>
          Want this running live for {s.c}?
        </div>
        <div style={{ fontSize: 15, color: '#334155', lineHeight: 1.5 }}>
          This is a preview of the AI SDR flow I build in n8n — it finds and engages your exact buyers
          automatically, with a human reviewing every message before it sends. Reply on LinkedIn and I'll walk you through it.
        </div>
      </div>
      <p style={{ fontSize: 12, color: '#94a3b8', marginTop: 18 }}>
        Based on public signals — not private SDR performance.
      </p>
    </main>
  );
}
