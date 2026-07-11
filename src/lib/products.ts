import { advertisers, getAdvertiser } from "../data/advertisers";
import { fetchFeed, type FeedProduct } from "./fetchFeed";

export type { FeedProduct };

/** Produkt beriget med hvilken annoncør/feed det stammer fra. */
export interface ShopProduct extends FeedProduct {
  /** slug fra advertisers */
  advertiser: string;
  advertiserName: string;
}

// Søgeord pr. kategori – matches mod produktets kategorifelt + navn.
// Bruges til at fordele produkter fra brede webshops (general=true).
//
// VIGTIGT: undgå korte søgeord der optræder inde i andre ord/mærkenavne
// (fx "sko" i "Agerskov", "pande" i "pandelampe", "sovegrej" i en shops
// paraply-kategori "Telte og sovegrej"). Brug specifikke sammensatte ord.
const categoryKeywords: Record<string, string[]> = {
  telte: ["telt", "tarp", "shelter", "tipi", "fortelt", "teltstang", "teltunderlag", "pløk", "plok", "barduner", "myggenet", "bivuak", "hængekøje", "haengekoeje", "hammock"],
  soveposer: ["sovepose", "liggeunderlag", "siddeunderlag", "sleeping bag", "sovemåtte", "sovemaatte", "hovedpude", "lagenpose", "sovepose-liner"],
  rygsaekke: ["rygsæk", "rygsaek", "backpack", "daypack", "vandrerygsæk", "bæltetaske", "hoftetaske", "rygsac", "packsæk", "drybag", "dry bag"],
  // NB: ikke bare "uld" – det matcher "g(uld)", "sk(uld)er". Brug "wool"/sammensætninger.
  beklaedning: ["jakke", "bukser", "fleece", "merino", "wool", "uldtrøje", "uldsok", "uldundertøj", "baselag", "skaljakke", "trøje", "sokker", "beklædning", "vest", "handske", "vante", "hue", "regntøj", "softshell", "shorts", "undertøj", "strømpe", "buff", "halsedisse"],
  fodtoej: ["støvle", "stoevle", "vandrestøvle", "vandresko", "trekkingsko", "løbesko", "trailsko", "gummistøvle", "sandal", "fodtøj", "boots", "gamache", "gaiter", "vandrestav", "trekkingstav"],
  madlavning: ["trangia", "stormkøkken", "stormkoekken", "kogegrej", "gryde", "stegepande", "brænder", "braender", "gasdåse", "gasbrænder", "frysetørret", "frysetoerret", "kogeapparat", "termoflaske", "drikkedunk", "feltflaske", "bestik", "spork", "primus", "kedel", "cutlery", "cookset", "camp mug", "stove"],
  navigation: ["gps", "kompas", "pandelampe", "pande-lampe", "pandelygte", "hovedlygte", "lommelygte", "lygte", "lanterne", "ravlygte", "kikkert", "headlamp", "vandrekort", "topografisk"],
  sikkerhed: ["kniv", "foldekniv", "dolk", "multitool", "multiværktøj", "førstehjælp", "foerstehjaelp", "survival", "nødblus", "ildstål", "ildstaal", "paracord", "signalfløjte", "fløjte", "økse", "machete", "foldesav", "grensav"],
};

// Produkter der aldrig hører hjemme i en outdoor-kategori, selv fra niche-shops
// (fx batterier en lygte-/soveposeshop også sælger). Filtreres globalt fra.
const NOISE = /(batteri|battery|knapcelle|alkaline|\b(?:cr|lr)\d{2,4}\b)/i;

function isNoise(product: FeedProduct): boolean {
  return NOISE.test(`${product.navn} ${product.kategori}`);
}

let cache: ShopProduct[] | null = null;

/** Hent alle produkter fra annoncørernes feeds, tagget med kilde. Cachet pr. build-modul. */
async function getAllProducts(): Promise<ShopProduct[]> {
  if (cache) return cache;
  const perShop = await Promise.all(
    advertisers
      .filter((a) => a.feedUrl)
      .map(async (a) => {
        const products = await fetchFeed(a.feedUrl as string);
        return products.map(
          (p): ShopProduct => ({
            ...p,
            advertiser: a.slug,
            advertiserName: a.name,
          }),
        );
      }),
  );
  cache = perShop.flat();
  return cache;
}

/** Numerisk pris til sortering; produkter uden pris (Infinity) ender nederst. */
function priceNum(pris: string): number {
  const t = (pris ?? "").trim();
  if (!t) return Infinity;
  const n = Number(t.replace(/[^\d.]/g, ""));
  return Number.isFinite(n) ? n : Infinity;
}

// Minimumspris (kr.) pr. kategori. Et prisgulv alene er ikke nok – feedsene
// indeholder også DYRT tilbehør (teltstænger, footprints, reparationskits,
// kamerataske) – så vi kombinerer med et navne-filter nedenfor. Kategorier
// uden en grænse vises uændret.
const categoryMinPrice: Record<string, number> = {
  telte: 150,
  soveposer: 200,
  rygsaekke: 250,
};

// Kategorier hvor feeds er domineret af tilbehør, så rigtige hovedprodukter
// (telte, soveposer, rygsække) ellers drukner i pløkker, tasker m.m.
const ACCESSORY_FILTER_CATS = new Set(["telte", "soveposer", "rygsaekke"]);

// Navne-mønstre for tilbehør der IKKE er selve hovedproduktet. Bruges kun i
// kategorierne ovenfor. Bevidst navne-baseret, så mærke-navngivne hovedvarer
// (fx "Outwell Cloud 5") bevares, mens "U-pløk", "Rep Kit", "Lens Bag" fjernes.
const ACCESSORY_NAME =
  /tilbehør|spare part|reservedel|\bdiy\b|gear sling|pløk|\bplok|\bpegs?\b|bardun|guyline|guy cord|teltstang|teltstænger|rep kit|\bkit\b|montage|montering|repair|reparat|myggenet|mosquito net|head net|net hat|bug jacket|tæppe|blanket|picnic|bunting|extender|strammer|guy line|spanner|seat mat|sit mat|siddeunderlag|sitteunderlag|\bsack\b|dry bag|waterproof bag|compression|raincover|rain cover|pack cover|footprint|groundsheet|teltunderlag|tarp clip|ladderlock|adjuster|keeper|webbing|buckle|spænde|lanyard|waistbelt|shoulder belt|equipment belt|document belt|hip belt|pouch|sadeltaske|\bliner\b|inlet|betræk|pude|pillow|fold ['']n go|\bstraps?\b|mount(?!ain)|ophæng|organi[sz]er|\bcase\b|lens bag|softbox|\bcamera\b|tripod|hydration|insulated tube|shopping bag|\btote\b|reins/i;

function isAccessory(product: FeedProduct, slug: string): boolean {
  return ACCESSORY_FILTER_CATS.has(slug) && ACCESSORY_NAME.test(product.navn);
}

// Kendte mønstre for billed-URL'er der er døde/defekte hos annoncøren (verificeret
// ved HTTP-tjek: alle svarer 404 eller en HTML-fejlside). Produkter med disse
// billeder FJERNES ikke — de har stadig affiliate-værdi — men nedprioriteres til
// bunden af kategorisiderne, så de ikke fylder i toppen med "Intet billede".
const DEAD_IMAGE_PATTERNS: RegExp[] = [
  // Easy Camp Starling m.fl.: shoppen har lagt et literalt '?' i filnavnet (hvor
  // navnet havde "°C"). '?' starter en query-string → stien mister sin endelse og
  // serveren svarer med HTML. Ægte query-parametre (fx Shopifys ?v=123) har '=' og
  // rammes derfor ikke.
  /\?[^=]*\.(?:jpe?g|png|webp|gif|avif)(?:#|$)/i,
  // backpackerlife.dk: WordPress-mediefiler med mellemrum i filnavnet er slettet/
  // omdøbt (404). Bekræftet at normalisering kun redder <10 %.
  /backpackerlife\.dk\/\S*\s/i,
];

/** Har produktet et billede der (så vidt vides) ikke kan loade? Tomt = også dødt. */
function hasDeadImage(product: FeedProduct): boolean {
  const url = product.billedUrl;
  if (!url) return true;
  return DEAD_IMAGE_PATTERNS.some((re) => re.test(url));
}

/**
 * Matcher et produkt en kategori via nøgleord i produktNAVNET?
 * Vi matcher bevidst kun på navnet – ikke shoppens kategorifelt – fordi brede
 * webshops bruger paraply-kategorier ("Telte og sovegrej", "Fiskeri") der
 * fejlmatcher (fx en fiskespinner i en kategori med ordet "vest").
 */
export function matchesCategory(product: FeedProduct, slug: string): boolean {
  const terms = categoryKeywords[slug] ?? [slug];
  const haystack = product.navn.toLowerCase();
  return terms.some((t) => haystack.includes(t));
}

/**
 * Afgør om et tagget produkt hører til en kategori:
 *  - Annoncøren skal dække kategorien (advertiser.categories).
 *  - Brede shops (general) nøgleords-filtreres; niche-shops medtages fuldt ud.
 */
function productInCategory(product: ShopProduct, slug: string): boolean {
  const adv = getAdvertiser(product.advertiser);
  if (!adv || !adv.categories.includes(slug)) return false;
  if (isNoise(product)) return false;
  return adv.general ? matchesCategory(product, slug) : true;
}

/**
 * Produkter for en kategori, sorteret efter laveste pris.
 * Uden limit returneres alle matchende produkter.
 */
export async function productsForCategory(
  slug: string,
  limit?: number,
): Promise<ShopProduct[]> {
  const all = await getAllProducts();
  const minPrice = categoryMinPrice[slug] ?? 0;
  const matched = all
    .filter((p) => productInCategory(p, slug))
    // Filtrér tilbehør fra via prisgulv + navne-mønster, så rigtige
    // hovedprodukter ligger øverst i laveste-pris-sorteringen.
    .filter((p) => priceNum(p.pris) >= minPrice)
    .filter((p) => !isAccessory(p, slug));
  // Sortér: produkter med fungerende billede først (så døde billeder ikke fylder
  // i toppen), derefter laveste pris. Beregn nøglerne én gang pr. produkt.
  const ordered = matched
    .map((p) => ({ p, dead: hasDeadImage(p) ? 1 : 0, price: priceNum(p.pris) }))
    .sort((a, b) => a.dead - b.dead || a.price - b.price)
    .map((s) => s.p);
  return typeof limit === "number" ? ordered.slice(0, limit) : ordered;
}
