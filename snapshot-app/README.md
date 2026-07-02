# SDR Signal Snapshot App

A tiny Next.js app that renders a **personalized snapshot page** for each prospect
and a **dynamic OpenGraph preview image**, so the link in the first LinkedIn message
unfurls into a custom card (company name + their ICP + a generated image).

The n8n flow encodes each prospect's data into the link — this app decodes and renders it.
No database, no per-prospect files, no image API cost.

## Routes
- `GET /s?d=<base64url>` — the visible personalized snapshot page (server-rendered OG tags)
- `GET /api/og?d=<base64url>` — the 1200x630 preview image LinkedIn shows

`d` is base64url-encoded JSON: `{ c, f, icp, p, h, pt }`
(company, founder first name, ICP, pain point, hook, product type).

## Deploy to Vercel (5 min)
1. Import this repo at [vercel.com/new](https://vercel.com/new).
2. Set **Root Directory** to `snapshot-app`.
3. After first deploy, add env var `NEXT_PUBLIC_BASE_URL = https://<project>.vercel.app` and redeploy.
4. You'll get a URL like `https://erica-sdr-snapshot.vercel.app`.

## Wire into n8n
In `FLOWS/2-linkedin-outreach.json` → **Parse Message** node, set:
```js
const SNAPSHOT_BASE = 'https://<your-project>.vercel.app';
```
That's the only value to change. The flow builds `SNAPSHOT_BASE + '/s?d=' + encoded`
and appends it to the first message automatically.

## Test locally
```bash
cd snapshot-app && npm install && npm run dev
```
Generate a payload:
```js
const d = Buffer.from(JSON.stringify({
  c:'Rippling', f:'Parker',
  icp:'HR and IT leaders at mid-market companies',
  p:'Senior, multi-stakeholder buyers; ads do not work so outreach is slow and manual',
  h:'Founder previously built Zenefits', pt:'SaaS'
})).toString('base64url');
console.log('http://localhost:3000/s?d=' + d);
```

## Verify the LinkedIn card
Paste a full `/s?d=...` URL into the
[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to preview and refresh the cache.
