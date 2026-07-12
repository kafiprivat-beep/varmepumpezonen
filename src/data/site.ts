// Central brand- og site-konfiguration for Varmepumpezonen.dk
// -----------------------------------------------------------------------------
// Varmepumpezonen.dk er et dansk leadgen-site om varmepumper. Vi hjælper
// boligejere med at forstå typer, priser, tilskud og besparelser — og sætter
// dem i kontakt med lokale VVS'ere via "Få 3 gratis tilbud".

export const SITE = {
  brand: "Varmepumpezonen",
  domain: "varmepumpezonen.dk",
  url: "https://varmepumpezonen.dk",
  /** Standard meta-description til forsiden. */
  description:
    "Uvildig guide til varmepumper i Danmark: priser inkl. montering, tilskud 2026, besparelser og de bedste mærker. Find den rette varmepumpe — og få 3 gratis tilbud.",
  tagline: "Din uvildige guide til varmepumper",
} as const;

/** Hovedmenu i header. */
export const NAV: { label: string; href: string }[] = [
  { label: "Varmepumpe-guide", href: "/varmepumpe-guide/" },
  { label: "Priser", href: "/artikler/varmepumpe-pris-montering-2026/" },
  { label: "Tilskud 2026", href: "/artikler/varmepumpe-tilskud-fradrag-2026/" },
  { label: "Bedste mærker", href: "/artikler/bedste-varmepumpe-maerker/" },
  { label: "Artikler", href: "/artikler/" },
];
