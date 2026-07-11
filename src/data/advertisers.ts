// Central datagrundlag for livetoutdoor.dk
// Kategorier + annoncører (affiliate-partnere fra Partner-ads). Hold al
// niche-data her, så sider kun importerer og renderer.

export interface Category {
  /** URL-sikkert slug (ingen æøå) */
  slug: string;
  name: string;
  /** Kort beskrivelse til kategori-side og kort */
  description: string;
  /** Emoji som simpelt ikon (ingen billed-assets påkrævet) */
  icon: string;
}

export interface Advertiser {
  slug: string;
  name: string;
  /** Affiliate-klik-link (Partner-ads klikbanner) */
  url: string;
  /** Vores kommission, fx "8%" — bruges til at prioritere visning */
  commission: string;
  /** Slugs fra `categories` som annoncøren dækker */
  categories: string[];
  /** Partner-ads XML-produktfeed */
  feedUrl?: string;
  /**
   * true = bred webshop: produkter nøgleords-filtreres ind i kategorierne.
   * false/undefined = niche-shop: alle produkter hører til den/de kategorier.
   */
  general?: boolean;
  /** Vises fremhævet på forsiden */
  featured?: boolean;
  // Redaktionel berigelse (vises ensartet på alle annoncør-kort)
  /** Kort, neutral beskrivelse (1-2 sætninger). */
  description?: string;
  /** 3-4 korte USP-punkter (sortiment, specialer, service). */
  pros?: string[];
}

export const categories: Category[] = [
  {
    slug: "telte",
    name: "Telte",
    description:
      "Fra letvægts trekkingtelte til rummelige familietelte — find det rette ly til din næste tur.",
    icon: "⛺",
  },
  {
    slug: "soveposer",
    name: "Soveposer",
    description:
      "Dun og syntetisk i alle komfortzoner. Hold varmen fra sommernætter til vinterbivuak.",
    icon: "🛏️",
  },
  {
    slug: "rygsaekke",
    name: "Rygsække",
    description:
      "Daypacks, vandrerygsække og ekspeditionssække med god bæring og smart opbevaring.",
    icon: "🎒",
  },
  {
    slug: "beklaedning",
    name: "Beklædning",
    description:
      "Lag-på-lag systemer, skaljakker og uld der holder dig tør og varm i alt vejr.",
    icon: "🧥",
  },
  {
    slug: "fodtoej",
    name: "Fodtøj",
    description:
      "Vandrestøvler, trailløbesko og sandaler med greb og støtte til terrænet.",
    icon: "🥾",
  },
  {
    slug: "madlavning",
    name: "Madlavning",
    description:
      "Trangiaer, gasbrændere, kogegrej og frysetørret mad til lejren.",
    icon: "🍳",
  },
  {
    slug: "navigation",
    name: "Navigation",
    description:
      "GPS, kompas, kort og pandelamper så du finder vej — også når det bliver mørkt.",
    icon: "🧭",
  },
  {
    slug: "sikkerhed",
    name: "Sikkerhed",
    description:
      "Førstehjælp, nødsignaler, multitools og survival-grej til den uventede situation.",
    icon: "🛟",
  },
];

const PARTNER_ID = 22327;

const clickUrl = (bannerid: number): string =>
  `https://www.partner-ads.com/dk/klikbanner.php?bannerid=${bannerid}&partnerid=${PARTNER_ID}`;

const feedUrl = (bannerid: number, feedid: number): string =>
  `https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=${PARTNER_ID}&bannerid=${bannerid}&feedid=${feedid}`;

// Kompakt kildeliste: [navn, slug, bannerid, feedid, kategorier, general]
// general=true → bred shop (nøgleords-filtreres). Udeladt → niche-shop.
type Row = [
  name: string,
  slug: string,
  bannerid: number,
  feedid: number,
  cats: string[],
  general?: boolean,
];

const ALL = [
  "telte",
  "soveposer",
  "rygsaekke",
  "beklaedning",
  "fodtoej",
  "madlavning",
  "navigation",
  "sikkerhed",
];

const rows: Row[] = [
  // Brede outdoor-webshops — produkter fordeles via nøgleord
  ["Backpackerlife.dk", "backpackerlife", 65841, 1318, ALL, true],
  ["Fritidsshop", "fritidsshop", 104009, 3148, ALL, true],
  ["Outdoor i Centrum", "outdoor-i-centrum", 117229, 4361, ALL, true],
  ["Outdoornu.dk", "outdoornu", 96182, 2641, ALL, true],
  ["Outmore.dk", "outmore", 44269, 565, ALL, true],
  ["Pro Outdoor", "pro-outdoor", 42818, 523, ALL, true],
  ["Adventure Pro", "adventure-pro", 113961, 3995, ALL, true],
  ["Friluftsland.dk", "friluftsland", 52894, 867, ALL, true],

  // Niche-shops — alle produkter hører til den/de angivne kategorier
  ["Nyttelt.dk", "nyttelt", 84254, 2050, ["telte"]],
  ["Haengekoejesalg.dk", "haengekoejesalg", 72505, 1555, ["telte"]],
  ["Soveposesalg.dk", "soveposesalg", 84256, 2051, ["soveposer"]],
  ["Rygsaeksalg.dk", "rygsaeksalg", 82647, 1991, ["rygsaekke"]],
  ["Danish Endurance", "danish-endurance", 116769, 4296, ["beklaedning"]],
  ["SURFMORE.dk", "surfmore", 63626, 1238, ["beklaedning"], true],
  ["Vandrestaven.dk", "vandrestaven", 84264, 2052, ["fodtoej"]],
  ["Lommelygtesalg.dk", "lommelygtesalg", 47793, 688, ["navigation"]],
  ["Pande-lampe.dk", "pande-lampe", 36837, 370, ["navigation"]],
  ["Ravlygter.dk", "ravlygter", 111912, 3768, ["navigation"]],
  ["Kikkert-salg.dk", "kikkert-salg", 64891, 1291, ["navigation"]],
  ["Knivsalg.dk", "knivsalg", 64890, 1290, ["sikkerhed"]],

  // Multi-kategori niche — produkter nøgleords-filtreres ind i kategorierne
  ["NORDIC HIKE", "nordic-hike", 115848, 4199, ["rygsaekke", "beklaedning", "fodtoej"], true],
  ["Bikepack.dk", "bikepack", 82565, 1988, ["rygsaekke", "telte"], true],
  ["Snowdays", "snowdays", 111934, 3778, ["beklaedning", "fodtoej"], true],
  ["Wolf Tactical", "wolf-tactical", 105676, 3250, ["sikkerhed", "beklaedning", "navigation"], true],
  ["Preplife", "preplife", 113651, 3969, ["sikkerhed", "madlavning"], true],
];

// Kommission pr. shop (procent). Default 6 hvis ikke angivet.
const commissionBySlug: Record<string, number> = {
  "pro-outdoor": 8,
  preplife: 8,
  "wolf-tactical": 8,
  friluftsland: 5,
  outdoornu: 7,
  "nordic-hike": 7,
  "danish-endurance": 7,
};

// Fremhævede forhandlere på forsidens "Anbefalede butikker".
const featuredSlugs = new Set([
  "pro-outdoor",
  "outdoornu",
  "friluftsland",
  "nordic-hike",
]);

// Redaktionel berigelse for ALLE forhandlere, så kortene er ensartede.
// Faktuelt og neutralt formuleret ud fra hvad de danske shops forhandler.
// Bevidst UDEN stjernebedømmelser og uden ikke-verificerede fragtgrænser.
const editorial: Record<string, { description: string; pros: string[] }> = {
  backpackerlife: {
    description:
      "Webshop med fokus på letvægts- og backpacking-grej til vandring og længere ture.",
    pros: ["Specialiseret i ultralet udstyr", "Kurateret udvalg til trekking", "Dansk webshop"],
  },
  fritidsshop: {
    description:
      "Bred fritids- og friluftsshop med udstyr til camping, vandring og udeliv.",
    pros: ["Bredt sortiment til hele familien", "Camping- og friluftsudstyr samlet", "Dansk kundeservice"],
  },
  "outdoor-i-centrum": {
    description:
      "Dansk outdoor-webshop med udstyr og beklædning til friluftsliv året rundt.",
    pros: ["Bredt udvalg af mærkevarer", "Udstyr til vandring, jagt og camping", "Dansk webshop"],
  },
  outdoornu: {
    description:
      "Stort online sortiment af friluftsudstyr til hele familien — telte, soveposer, beklædning og mere.",
    pros: ["Bredt sortiment på tværs af kategorier", "Ofte gode kampagnepriser", "Dansk kundeservice"],
  },
  outmore: {
    description:
      "Outdoor-webshop med udstyr og beklædning til vandring, camping og friluftsliv.",
    pros: ["Bredt udvalg af friluftsudstyr", "Kendte outdoor-mærker", "Dansk webshop"],
  },
  "pro-outdoor": {
    description:
      "Specialforhandler med skarpt udvalg af premium-mærker til vandring og ekspedition.",
    pros: ["Fokus på kvalitetsmærker", "Udstyr til vandring og ekspedition", "Faglig produktrådgivning"],
  },
  "adventure-pro": {
    description:
      "Webshop med udstyr til friluftsliv, adventure og en aktiv udendørs livsstil.",
    pros: ["Udstyr til aktivt friluftsliv", "Udvalgte outdoor-mærker", "Dansk webshop"],
  },
  friluftsland: {
    description:
      "Klassisk dansk friluftskæde med fysiske butikker og stort sortiment til udeliv.",
    pros: ["Stort sortiment på tværs af kategorier", "Fysiske butikker med rådgivning", "Click & collect"],
  },
  nyttelt: {
    description:
      "Specialbutik med telte, shelters og læ til camping og friluftsliv.",
    pros: ["Specialiseret i telte og shelters", "Udvalg til tur og familiecamping", "Dansk webshop"],
  },
  haengekoejesalg: {
    description:
      "Specialbutik i hængekøjer og tilbehør til afslapning og overnatning i naturen.",
    pros: ["Specialiseret i hængekøjer", "Tilbehør som ophæng og myggenet", "Dansk webshop"],
  },
  soveposesalg: {
    description:
      "Specialbutik dedikeret til soveposer og sovegrej til alle årstider.",
    pros: ["Specialiseret i soveposer", "Modeller til sommer, 3-sæson og vinter", "Dansk webshop"],
  },
  rygsaeksalg: {
    description:
      "Specialbutik i rygsække — fra daypacks til store vandrerygsække.",
    pros: ["Specialiseret i rygsække", "Udvalg til dagsture og trekking", "Dansk webshop"],
  },
  "danish-endurance": {
    description:
      "Dansk mærke kendt for sokker, undertøj og baselag i funktionel kvalitet.",
    pros: ["Dansk-designet funktionelt tøj", "Sokker, undertøj og baselag", "Skarpt forhold mellem pris og kvalitet"],
  },
  surfmore: {
    description:
      "Webshop med udstyr til surf, SUP og vandsport — samt sæsonudstyr til vinter.",
    pros: ["Udstyr til SUP og vandsport", "Sæsonudvalg sommer og vinter", "Dansk webshop"],
  },
  vandrestaven: {
    description:
      "Specialbutik i vandrestave og trekkingstave til vandring i alt terræn.",
    pros: ["Specialiseret i vandrestave", "Udvalg fra kendte mærker", "Dansk webshop"],
  },
  lommelygtesalg: {
    description:
      "Specialbutik i lommelygter og belysning til friluftsliv og hverdag.",
    pros: ["Stort udvalg af lygter", "Kendte belysningsmærker", "Dansk webshop"],
  },
  "pande-lampe": {
    description:
      "Specialbutik i pandelamper og hovedlygter til vandring, løb og arbejde.",
    pros: ["Specialiseret i pandelamper", "Modeller til sport og arbejde", "Dansk webshop"],
  },
  ravlygter: {
    description:
      "Webshop med ravfarvede lygter og briller, der skåner nattesyn og døgnrytme.",
    pros: ["Fokus på ravfarvet, blåt-frit lys", "Skåner nattesyn", "Dansk webshop"],
  },
  "kikkert-salg": {
    description:
      "Specialbutik i kikkerter, teleskoper og optik til natur og astronomi.",
    pros: ["Specialiseret i kikkerter og optik", "Udvalg til natur og astronomi", "Dansk webshop"],
  },
  knivsalg: {
    description:
      "Specialbutik i knive, multitools og skæreværktøj til friluftsliv og bushcraft.",
    pros: ["Stort udvalg af knive og multitools", "Mærkevarer til bushcraft og jagt", "Dansk webshop"],
  },
  "nordic-hike": {
    description:
      "Vandre- og trekkingudstyr til det nordiske terræn — rygsække, beklædning og fodtøj.",
    pros: ["Fokus på vandring og trekking", "Kuraterede mærker", "Dansk webshop"],
  },
  bikepack: {
    description:
      "Webshop med udstyr til bikepacking og cykelture — tasker, telte og letvægtsgrej.",
    pros: ["Specialiseret i bikepacking", "Tasker og letvægtsudstyr til cykel", "Dansk webshop"],
  },
  snowdays: {
    description:
      "Webshop med beklædning og udstyr til ski, snowboard og vintersport.",
    pros: ["Fokus på ski og snowboard", "Vinterbeklædning og udstyr", "Dansk webshop"],
  },
  "wolf-tactical": {
    description:
      "Webshop med taktisk og robust udstyr til jagt, outdoor og friluftsliv.",
    pros: ["Taktisk og robust udstyr", "Grej til jagt og outdoor", "Dansk webshop"],
  },
  preplife: {
    description:
      "Webshop med udstyr til beredskab, survival og selvforsyning.",
    pros: ["Fokus på beredskab og survival", "Nødudstyr og langtidsholdbar mad", "Dansk webshop"],
  },
};

export const advertisers: Advertiser[] = rows.map(
  ([name, slug, bannerid, feedid, cats, general]) => ({
    slug,
    name,
    url: clickUrl(bannerid),
    commission: `${commissionBySlug[slug] ?? 6}%`,
    categories: cats,
    feedUrl: feedUrl(bannerid, feedid),
    ...(general ? { general: true } : {}),
    ...(featuredSlugs.has(slug) ? { featured: true } : {}),
    ...(editorial[slug] ?? {}),
  }),
);

/** Slå en kategori op på slug. */
export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

/** Slå en annoncør op på slug. */
export function getAdvertiser(slug: string): Advertiser | undefined {
  return advertisers.find((a) => a.slug === slug);
}

/** Annoncører i en given kategori, sorteret efter kommission (højest først). */
export function getAdvertisersByCategory(slug: string): Advertiser[] {
  return advertisers
    .filter((a) => a.categories.includes(slug))
    .sort(
      (a, b) =>
        parseFloat(b.commission) - parseFloat(a.commission) ||
        a.name.localeCompare(b.name),
    );
}

/** Fremhævede annoncører til forsiden. */
export function getFeaturedAdvertisers(): Advertiser[] {
  return advertisers.filter((a) => a.featured);
}
