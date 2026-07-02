// Decodes the base64url payload the n8n flow puts in ?d=
// Works in both Node and Edge runtimes (uses atob + TextDecoder, no Buffer).
// Payload shape (short keys keep the URL small):
//   c  = company name
//   f  = founder first name
//   icp = ideal customer profile (who they sell to)
//   p  = pain point (why reaching the ICP at scale is hard)
//   h  = hook (non-obvious signal we noticed)
//   pt = product type
export function decodeSnapshot(d) {
  const fallback = { c: 'your company', f: '', icp: '', p: '', h: '', pt: '' };
  if (!d) return fallback;
  try {
    let b64 = String(d).replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    const bin = atob(b64);
    const bytes = Uint8Array.from(bin, (ch) => ch.charCodeAt(0));
    const json = new TextDecoder().decode(bytes);
    const o = JSON.parse(json);
    return { ...fallback, ...o, c: o.c || 'your company' };
  } catch {
    return fallback;
  }
}
