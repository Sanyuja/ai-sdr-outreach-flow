// Root layout. metadataBase makes relative OG image URLs resolve to absolute,
// which LinkedIn requires to unfurl the preview card.
const base =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const metadata = {
  metadataBase: base ? new URL(base) : undefined,
  title: 'SDR Signal Snapshot',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
          background: '#f8fafc',
          color: '#0f172a',
        }}
      >
        {children}
      </body>
    </html>
  );
}
