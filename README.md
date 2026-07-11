# Varmepumpezonen.dk

Dansk leadgen-site om varmepumper, bygget med [Astro](https://astro.build) som
statisk site. Indhold: én stor pillar-guide + 10 supportartikler om typer,
priser, tilskud (2026), besparelser og drift — med interne links (pillar ↔
support) og "Få 3 gratis tilbud"-CTA'er til leadgenerering.

## Struktur

```text
src/
├── components/
│   ├── ArticleView.astro    # Fælles artikel-renderer (pillar + support)
│   ├── LeadCta.astro        # "Få 3 gratis tilbud" med data-affiliate-slot
│   └── Photo.astro          # Wikimedia Special:FilePath + onerror-fallback
├── data/
│   ├── articles.ts          # Pillar + 10 supportartikler (indhold)
│   └── site.ts              # Brand + navigation
├── layouts/BaseLayout.astro # <head>, schema (Article/FAQPage/Breadcrumb), nav/footer
├── pages/
│   ├── index.astro          # Forside
│   ├── varmepumpe-guide/     # Pillar-guide
│   └── artikler/             # Oversigt + dynamiske support-sider ([slug].astro)
└── styles/global.css        # Energi-tema (grøn + varm orange)
```

## Kommandoer

| Kommando          | Handling                                    |
| :---------------- | :------------------------------------------ |
| `npm install`     | Installér afhængigheder                     |
| `npm run dev`     | Start dev-server på `localhost:4321`        |
| `npm run build`   | Byg til statiske filer i `./dist/`          |
| `npm run preview` | Forhåndsvis produktions-build lokalt        |

## Billeder

Fotos hentes fra Wikimedia Commons via `Special:FilePath`. Hvis en fil ikke kan
hentes, falder `onerror` tilbage til den brandede `/images/fallback.svg`, så
layoutet aldrig knækker.

## Affiliate / leads

`LeadCta.astro` udsender bokse med `data-affiliate-slot`-placeholders. Det
rigtige lead-/affiliate-link (3byggetilbud-type) sættes ind pr. slot senere.
