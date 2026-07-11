// Redaktionelt forsideindhold ("vejleder"-skabelon).
// -----------------------------------------------------------------------------
// Dette er dét, der skiftes ud, når skabelonen genbruges til et andet niche-site:
// hero-tekst, trust-punkter, "bedst i test"-anbefalinger, trust-tal og forside-
// FAQ. Kategori-data og affiliate-partnere lever i advertisers.ts; købsguider og
// kategori-FAQ i categoryContent.ts. Farver skiftes i styles/global.css.

/** Ikon-nøgler peger på Lucide-stier i lucideIcon() (icons.ts). */
export interface TrustBadge {
  icon: string;
  label: string;
}

export interface TopPick {
  /** Kort, konkret titel på anbefalingen. */
  title: string;
  /** Kategori-slug — kortet linker til /{slug}/ med de rigtige, live produkter. */
  categorySlug: string;
  /** Foto (selvhostet i /public/images/ — kan udskiftes med Unsplash-URL). */
  image: string;
  /** Redaktionel bedømmelse 0-5 (vises som stjerner). */
  rating: number;
  /** Lille mærkat øverst på kortet. */
  tag: string;
  /** 1-2 sætningers begrundelse. */
  blurb: string;
  /** Vejledende "fra"-pris. */
  priceFrom: string;
  cta: string;
}

export interface Step {
  title: string;
  body: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface HomeFaq {
  q: string;
  a: string;
}

export const hero = {
  eyebrow: "Din guide til friluftsliv",
  title: "Find det rigtige friluftsudstyr — uden at gætte",
  lead: "Uvildige guides, ærlige anbefalinger og opdaterede priser fra danske outdoor-butikker. Vi hjælper dig med at vælge det grej, der holder til turen.",
  image: "/images/categories/rygsaekke.webp",
  imageAlt: "To vandrere med rygsække på vej mod snedækkede bjerge",
  primaryCta: { label: "Find dit udstyr", href: "#shop" },
  secondaryCta: { label: "Læs vores guides", href: "/artikler/" },
  badge: { title: "100+ dybdegående guides", subtitle: "skrevet af friluftsfolk" },
};

export const trustBadges: TrustBadge[] = [
  { icon: "shield-check", label: "Uvildige anbefalinger" },
  { icon: "tag", label: "Opdaterede priser fra danske butikker" },
  { icon: "book-open", label: "100+ guides til friluftsliv" },
  { icon: "leaf", label: "Kurateret af friluftsfolk" },
];

// "Bedst i test" — redaktionelle anbefalinger pr. kategori. Kortene linker til
// kategorisiden, hvor de rigtige, live produkter med aktuelle priser vises.
export const topPicks: TopPick[] = [
  {
    title: "Bedste letvægtstelt til to",
    categorySlug: "telte",
    image: "/images/categories/telte.webp",
    rating: 4.5,
    tag: "Bedst i test",
    blurb:
      "Lav vægt, høj vandsøjle og to indgange. Et solidt 3-sæsonstelt, du kan bære langt uden at gå på kompromis med en tør nattesøvn.",
    priceFrom: "fra 1.499 kr.",
    cta: "Se telte",
  },
  {
    title: "Bedste vandrestøvle til dansk terræn",
    categorySlug: "fodtoej",
    image: "/images/categories/fodtoej.webp",
    rating: 4.5,
    tag: "Redaktionens valg",
    blurb:
      "God ankelstøtte, gribende Vibram-sål og en pasform, der føles rigtig fra første skridt. Bygget til mudder, rødder og lange dage.",
    priceFrom: "fra 899 kr.",
    cta: "Se fodtøj",
  },
  {
    title: "Bedste 3-sæsons sovepose",
    categorySlug: "soveposer",
    image: "/images/categories/soveposer.webp",
    rating: 4,
    tag: "Bedste værdi",
    blurb:
      "Varm ned til de kølige nætter, pakker småt og holder på isoleringen — også når teltet dugger. Et sikkert valg til det danske klima.",
    priceFrom: "fra 499 kr.",
    cta: "Se soveposer",
  },
  {
    title: "Bedste skaljakke til alt vejr",
    categorySlug: "beklaedning",
    image: "/images/categories/beklaedning.webp",
    rating: 4.5,
    tag: "Bedst i test",
    blurb:
      "Vand- og vindtæt membran, tapede sømme og ventilation under armene. Yderlaget, der holder dig tør, når vejret vender.",
    priceFrom: "fra 1.199 kr.",
    cta: "Se beklædning",
  },
];

export const guideSteps: Step[] = [
  {
    title: "Start med behovet",
    body: "Dagstur eller flerdages? Sommer eller vinter? Turen afgør, hvor let, varmt og robust dit grej skal være — ikke omvendt.",
  },
  {
    title: "Prioritér de tre store",
    body: "Telt, sovepose og rygsæk fylder mest i både vægt og budget. Få dem rigtige først, og byg resten op over tid.",
  },
  {
    title: "Sammenlign og køb klogt",
    body: "Vi samler udvalget fra flere danske butikker, så du kan sammenligne kvalitet og pris ét sted, før du trykker køb.",
  },
];

export const stats: Stat[] = [
  { value: "100+", label: "Dybdegående guides" },
  { value: "8", label: "Udstyrskategorier" },
  { value: "25", label: "Danske forhandlere" },
  { value: "0 kr.", label: "Ekstra for dig" },
];

export const homeFaq: HomeFaq[] = [
  {
    q: "Hvordan tjener I penge?",
    a: "Livetoutdoor.dk er gratis at bruge. Når du klikker videre til en butik og køber, kan vi modtage en kommission via affiliate-links. Det koster dig ikke ekstra og påvirker aldrig prisen.",
  },
  {
    q: "Er jeres anbefalinger uvildige?",
    a: "Ja. Vi vælger produkter og butikker ud fra, hvad vi mener er bedst for dig — ikke efter hvem der betaler mest. Kommissionen ændrer ikke vores vurdering af, hvad der er godt grej.",
  },
  {
    q: "Hvor kommer priserne fra?",
    a: "Priser og produkter hentes automatisk fra vores danske partnerbutikker og opdateres løbende. Den endelige pris ser du altid hos butikken, inden du køber.",
  },
  {
    q: "Hvem står bag guiderne?",
    a: "Indholdet skrives af friluftsfolk med praktisk erfaring fra telt, trail og lejr. Vi opdaterer guiderne, så råd og anbefalinger følger med udstyr og sæson.",
  },
];
