// Artikel-/guide-indhold til livetoutdoor.dk.
// Holdt som simpelt data-array (body som HTML) så vi undgår ekstra
// content-collection-konfiguration. Kan migreres til content collections senere.

export interface Article {
  slug: string;
  title: string;
  /** Kort manchet til oversigt og meta-description */
  excerpt: string;
  /** ISO-dato (YYYY-MM-DD) */
  date: string;
  author: string;
  /** Relateret kategori-slug (valgfrit) */
  category?: string;
  /** Brødtekst som HTML */
  body: string;
}

export const articles: Article[] = [
  {
    slug: "begynderguide-til-vandreudstyr",
    title: "Begynderguide til vandreudstyr: Sådan kommer du i gang",
    excerpt:
      "Skal du på din første flerdagstur? Her er det grundlæggende udstyr du har brug for — uden at sprænge budgettet.",
    date: "2026-06-20",
    author: "Redaktionen",
    category: "rygsaekke",
    body: `
      <p>At komme i gang med vandring behøver hverken være dyrt eller kompliceret. Det vigtigste er, at du har styr på de tre store: <strong>ly, søvn og bæring</strong>.</p>
      <h2>De tre store</h2>
      <p>Telt, sovepose og rygsæk udgør størstedelen af både vægt og budget. Prioriter dem først — resten kan du bygge op over tid.</p>
      <h2>Lagdeling af tøj</h2>
      <p>Brug et lag-på-lag-system: et svedtransporterende baselag, et isolerende mellemlag og et vind- og vandtæt skallag. Så kan du regulere temperaturen undervejs.</p>
      <h2>Start småt</h2>
      <p>Tag på en enkelt overnatning tæt på hjemmet før den store tur. Du lærer hurtigt, hvad du faktisk bruger — og hvad der bare fylder i rygsækken.</p>
    `,
  },
  {
    slug: "dun-eller-syntetisk-sovepose",
    title: "Dun eller syntetisk sovepose? Sådan vælger du rigtigt",
    excerpt:
      "Dun er let og pakker lille, syntetisk holder varmen når den er fugtig. Vi gennemgår fordele og ulemper.",
    date: "2026-06-12",
    author: "Redaktionen",
    category: "soveposer",
    body: `
      <p>Valget mellem dun og syntetisk fyld er et af de klassiske dilemmaer, når man skal købe sovepose.</p>
      <h2>Dun</h2>
      <p>Dun har det bedste forhold mellem vægt og varme og pakker meget lille. Ulempen er prisen og at dun mister isolering, hvis det bliver vådt.</p>
      <h2>Syntetisk</h2>
      <p>Syntetisk fyld isolerer stadig når det er fugtigt, tørrer hurtigt og er billigere. Til gengæld vejer og fylder det mere.</p>
      <h2>Vores anbefaling</h2>
      <p>Tørt klima og fokus på lav vægt? Vælg dun. Fugtige forhold eller stramt budget? Syntetisk er det sikre valg.</p>
    `,
  },
  {
    slug: "5-fejl-naar-du-koeber-vandrestoevler",
    title: "5 fejl du skal undgå når du køber vandrestøvler",
    excerpt:
      "Forkert pasform er den hyppigste årsag til vabler og ømme fødder. Undgå de klassiske faldgruber.",
    date: "2026-06-03",
    author: "Redaktionen",
    category: "fodtoej",
    body: `
      <p>Et godt par vandrestøvler kan gøre eller ødelægge din tur. Her er de fejl, vi oftest ser.</p>
      <h2>1. Du prøver dem om morgenen</h2>
      <p>Fødderne hæver i løbet af dagen. Prøv altid støvler sidst på dagen for den rigtige pasform.</p>
      <h2>2. Du springer indløbningen over</h2>
      <p>Gå støvlerne til på korte ture, før du tager dem med på flerdagsturen.</p>
      <h2>3. Du vælger for stiv en sål</h2>
      <p>Match støvlens stivhed til terrænet. Stive bjergstøvler er overkill til skovstier.</p>
      <h2>4. Du glemmer sokkerne</h2>
      <p>Prøv altid støvler med de sokker, du faktisk vil bruge på tur.</p>
      <h2>5. Du går på pris alene</h2>
      <p>Pasform slår pris hver gang. Den dyreste støvle er ikke god, hvis den ikke passer din fod.</p>
    `,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Artikler nyeste først. */
export function getArticlesSorted(): Article[] {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date));
}
