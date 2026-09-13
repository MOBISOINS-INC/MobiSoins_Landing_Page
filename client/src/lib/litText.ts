export type LitSegment = { text: string; lit: boolean };

/**
 * Splits a copy string on `*…*` markers into plain and "lit" segments, keeping
 * every space and punctuation mark. Used by the visit chapter's scroll-lit
 * paragraph; the markers live in the i18n strings so FR and EN pick their own
 * keywords.
 */
export function parseLit(s: string): LitSegment[] {
  const out: LitSegment[] = [];
  const re = /\*([^*]+)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(s))) {
    if (m.index > last) out.push({ text: s.slice(last, m.index), lit: false });
    out.push({ text: m[1], lit: true });
    last = m.index + m[0].length;
  }
  if (last < s.length) out.push({ text: s.slice(last), lit: false });
  return out.filter((seg) => seg.text.length > 0);
}
