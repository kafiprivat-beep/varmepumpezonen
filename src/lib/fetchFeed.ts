import { XMLParser } from "fast-xml-parser";

export interface FeedProduct {
  id: string;
  navn: string;
  pris: string;
  billedUrl: string;
  vareUrl: string;
  kategori: string;
  beskrivelse: string;
}

const parser = new XMLParser({
  ignoreAttributes: false,
  trimValues: true,
  parseTagValue: false, // behold alle værdier som strings
});

/**
 * Afkod feed-bytes med korrekt charset.
 *
 * Mange Partner-ads-feeds DEKLARERER ISO-8859-1 (i Content-Type-headeren og i
 * XML-deklarationen), men leverer reelt UTF-8. Stoler vi på deklarationen og
 * afkoder som windows-1252, bliver UTF-8-bytes til mojibake (° → "Â°",
 * ø → "Ã¸"). Vi kan derfor ikke bruge den deklarerede charset.
 *
 * Strategi: prøv UTF-8 strikt først. Lykkes det, var feedet UTF-8. Fejler det
 * (bytes er ikke gyldig UTF-8 — dvs. et ægte latin-1/1252-feed), falder vi
 * tilbage til windows-1252. Danske tegn i latin-1 (æ=0xE6, ø=0xF8, °=0xB0) er
 * enkelt-bytes der er ugyldige som UTF-8, så fallbacket rammer præcist de feeds
 * der faktisk er latin-1 — uden at ødelægge UTF-8-feeds.
 */
function decodeBuffer(buf: ArrayBuffer): string {
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(buf);
  } catch {
    return new TextDecoder("windows-1252").decode(buf);
  }
}

/** Returnér første ikke-tomme værdi blandt en række mulige feltnavne. */
function pick(obj: Record<string, unknown>, keys: string[]): string {
  for (const k of keys) {
    const v = obj[k];
    if (v !== undefined && v !== null && typeof v !== "object") {
      const s = String(v).trim();
      if (s !== "") return s;
    }
  }
  return "";
}

/** Lav et opslag med alle nøgler i lowercase, så feltmatch er case-uafhængigt. */
function lowerKeys(obj: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) out[k.toLowerCase()] = v;
  return out;
}

/** Find selve produkt-noderne uanset rod-struktur (partner-ads, RSS, m.fl.). */
function findProductNodes(data: any): Record<string, unknown>[] {
  const root = data?.produkter ?? data?.products ?? data?.rss?.channel ?? data;
  let list = root?.produkt ?? root?.product ?? root?.item ?? root;
  if (!list) return [];
  if (!Array.isArray(list)) list = [list];
  return list.filter((n: unknown) => n !== null && typeof n === "object");
}

/** Ét afkodnings-lag for de almindeligste navngivne og numeriske entities. */
function decodeEntitiesOnce(value: string): string {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, d: string) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h: string) =>
      String.fromCodePoint(parseInt(h, 16)),
    )
    .replace(/&amp;/g, "&"); // &amp; sidst, så fx &amp;quot; håndteres korrekt
}

/**
 * Decode HTML-entities fuldt ud. Feedet er ofte DOBBELT-encodet (fx
 * &amp;amp; eller &amp;quot;), så ét afkodnings-lag efterlader stadig en
 * &amp;-rest, som Astro så re-escaper til &amp;amp; i HTML. Vi gentager derfor
 * afkodningen, indtil strengen er stabil, så alle lag fjernes og tekst/URL'er
 * ender med ét korrekt &-tegn. Cap på 5 runder forhindrer evig løkke.
 */
function decodeEntities(value: string): string {
  if (!value || value.indexOf("&") === -1) return value;
  let prev = value;
  for (let i = 0; i < 5; i++) {
    const next = decodeEntitiesOnce(prev);
    if (next === prev) break;
    prev = next;
  }
  return prev;
}

/**
 * Reparér mojibake der ligger i SELVE feedet (nogle shops gemmer allerede
 * dobbelt-encodet tekst, fx "Â°" eller "Ã¸", i deres UTF-8-feed). Disse
 * to-tegns-sekvenser optræder kun i mojibake — korrekt afkodet tekst har ét
 * tegn (° / ø) — så erstatningerne er sikre at køre på al display-tekst.
 */
const MOJIBAKE: [RegExp, string][] = [
  [/Ã¦/g, "æ"], [/Ã¸/g, "ø"], [/Ã¥/g, "å"],
  [/Ã†/g, "Æ"], [/Ã˜/g, "Ø"], [/Ã…/g, "Å"],
  [/Ã©/g, "é"], [/Ã¨/g, "è"], [/Ã¼/g, "ü"], [/Ã¶/g, "ö"], [/Ã¤/g, "ä"],
  [/Ã«/g, "ë"], [/Ã±/g, "ñ"], [/Ã§/g, "ç"], [/Ã³/g, "ó"], [/Ã­/g, "í"],
  [/â€™/g, "’"], [/â€˜/g, "‘"], [/â€“/g, "–"], [/â€”/g, "—"],
  [/â€œ/g, "“"], [/â€¦/g, "…"], [/â€/g, "”"],
  [/Â°/g, "°"], [/Â±/g, "±"], [/Â²/g, "²"], [/Â³/g, "³"],
  [/Âµ/g, "µ"], [/Â·/g, "·"], [/Â®/g, "®"], [/Â©/g, "©"],
  [/Â /g, " "],
];

function fixMojibake(value: string): string {
  if (!value) return value;
  let out = value;
  for (const [re, ch] of MOJIBAKE) out = out.replace(re, ch);
  return out;
}

/** Afkod entities OG reparér mojibake i ét hug (til display-felter). */
function clean(value: string): string {
  return fixMojibake(decodeEntities(value));
}

function toProduct(raw: Record<string, unknown>): FeedProduct {
  const o = lowerKeys(raw);
  return {
    id: pick(o, ["produktid", "id", "sku", "ean"]),
    navn: clean(pick(o, ["produktnavn", "navn", "title", "name"])),
    pris: pick(o, ["nypris", "newprice", "pris", "price", "salgspris", "glpris"]),
    // URL'er er også entity-encodede (&amp; mellem query-parametre) – afkod dem,
    // så href/src ender med korrekte enkelt-&, når Astro re-escaper attributten.
    // Alle 25 nuværende Partner-ads-feeds bruger feltet "billedurl". De øvrige
    // navne er fremtidssikring, så feeds med andre feltnavne (image_url, img,
    // picture m.fl.) også fanges uden kodeændring. Rækkefølge = prioritet.
    billedUrl: decodeEntities(
      pick(o, [
        "billedurl",
        "billede",
        "imageurl",
        "image_url",
        "image",
        "billed_url",
        "img",
        "picture",
        "photo",
        "thumbnail",
      ]),
    ),
    vareUrl: decodeEntities(
      pick(o, ["vareurl", "deeplink", "link", "url", "producturl"]),
    ),
    kategori: clean(
      pick(o, ["kategorinavn", "kategori", "category", "categoryname"]),
    ),
    beskrivelse: clean(pick(o, ["beskrivelse", "description", "desc"])),
  };
}

/**
 * Hent og parse et XML-produktfeed. Fejler aldrig hårdt – ved netværks-,
 * HTTP- eller parsefejl returneres et tomt array, så build'et fortsætter.
 */
export async function fetchFeed(url: string): Promise<FeedProduct[]> {
  let xml: string;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "livetoutdoor.dk feed-bot" },
    });
    clearTimeout(timer);
    if (!res.ok) {
      console.warn(`[feed] ${url} svarede HTTP ${res.status}`);
      return [];
    }
    xml = decodeBuffer(await res.arrayBuffer());
  } catch (err) {
    console.warn(`[feed] kunne ikke hente ${url}: ${(err as Error).message}`);
    return [];
  }

  try {
    const data = parser.parse(xml);
    return findProductNodes(data)
      .map(toProduct)
      .filter((p) => p.navn !== "" && p.vareUrl !== "");
  } catch (err) {
    console.warn(
      `[feed] kunne ikke parse XML fra ${url}: ${(err as Error).message}`,
    );
    return [];
  }
}

/** Hent flere feeds parallelt og saml produkterne i ét array. */
export async function fetchFeeds(urls: string[]): Promise<FeedProduct[]> {
  const results = await Promise.all(urls.map(fetchFeed));
  return results.flat();
}
