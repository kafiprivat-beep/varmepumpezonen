// Diskrete ikoner fra Lucide (https://lucide.dev, ISC-licens). Kun premium-sæt —
// aldrig primitive streg-/emoji-ikoner. Inline SVG så der ikke kræves assets.

// Indre SVG-markup pr. ikon (24x24, currentColor, stroke).
const PATHS: Record<string, string> = {
  "shield-check":
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  "book-open":
    '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
};

/** Fuld <svg> for et navngivet Lucide-ikon. */
export function lucide(name: string, size = 24): string {
  const inner = PATHS[name] ?? "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}

const STAR =
  "M11.245 1.797a.845.845 0 0 1 1.51 0l2.7 5.47 6.036.878a.845.845 0 0 1 .468 1.44l-4.368 4.258 1.031 6.012a.845.845 0 0 1-1.226.89L12 17.933l-5.402 2.84a.845.845 0 0 1-1.226-.89l1.031-6.011L2.035 9.585a.845.845 0 0 1 .468-1.44l6.036-.878z";

/**
 * Stjerne-række (0-5) som SVG. Halve stjerner via clip. Rav-farve sættes i CSS
 * på .stars__icons — her tegnes bare fyldte/tomme stjerner i currentColor.
 */
export function starsSvg(rating: number): string {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let out = "";
  for (let i = 0; i < 5; i++) {
    let fill = "none";
    let clip = "";
    if (i < full) {
      fill = "currentColor";
    } else if (i === full && half) {
      fill = "currentColor";
      clip = ' clip-path="inset(0 50% 0 0)"';
    }
    out += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="${fill}" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"${clip}><path d="${STAR}"/></svg>`;
  }
  return out;
}
