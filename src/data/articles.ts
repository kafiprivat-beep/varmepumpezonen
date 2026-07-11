// Indhold til Varmepumpezonen.dk
// -----------------------------------------------------------------------------
// 1 pillar-guide + 10 supportartikler. Body holdes som HTML-strenge, så vi
// undgår ekstra content-collection-opsætning. Al intern linking (pillar ↔
// support) sker via slugs, der resolves til URL'er af helperne nederst.
//
// Priser, tilskud og besparelser er research'et pr. 2026 (se pillar-guiden).
// Tallene er vejledende og skal altid tjekkes mod aktuelt tilbud.

export interface Faq {
  q: string;
  a: string;
}

export interface Article {
  slug: string;
  /** Ren SERP-titel UDEN brand-suffix. */
  title: string;
  description: string;
  /** Kort emne-label til kort og brødkrummer. */
  category: string;
  hero: { file: string; alt: string };
  /** ISO-dato (YYYY-MM-DD). */
  updated: string;
  readMinutes: number;
  /** Kort manchet til oversigtskort. */
  excerpt: string;
  /** Brødtekst som HTML. */
  body: string;
  faq: Faq[];
  /** Slugs på relaterede artikler (support ↔ pillar). */
  related: string[];
  pillar?: boolean;
}

/** In-body figur fra Wikimedia Commons med onerror-fallback. */
function fig(file: string, alt: string, caption: string): string {
  const src = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    file,
  )}?width=1200`;
  return `<figure><img src="${src}" alt="${alt}" width="1200" height="800" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='/images/fallback.svg';this.classList.add('photo--fallback')"/><figcaption>${caption}</figcaption></figure>`;
}

const PILLAR_LINK =
  '<a href="/varmepumpe-guide/">den store varmepumpe-guide</a>';

// ===========================================================================
// PILLAR
// ===========================================================================
const pillar: Article = {
  slug: "varmepumpe-guide",
  pillar: true,
  title: "Varmepumpe 2026: Komplet guide til typer, pris og tilskud",
  description:
    "Alt om varmepumper i 2026: luft-luft, luft-vand og jordvarme, priser inkl. montering, årlige besparelser vs. gas og olie, tilskud (27.000 kr.) og størrelsesguide.",
  category: "Guide",
  hero: {
    file: "Heat Pump.jpg",
    alt: "Udendørs varmepumpe monteret ved facaden på et dansk parcelhus",
  },
  updated: "2026-07-11",
  readMinutes: 14,
  excerpt:
    "Den komplette guide til varmepumper i 2026 — typer, priser inkl. montering, besparelser, tilskud og dimensionering samlet ét sted.",
  faq: [
    {
      q: "Hvad koster en varmepumpe i 2026?",
      a: "En luft-til-luft varmepumpe koster typisk 12.000–25.000 kr. inkl. montering. En luft-til-vand varmepumpe til et parcelhus ligger oftest på 90.000–150.000 kr. inkl. montering, og jordvarme på 120.000–180.000 kr. Prisen afhænger af husets størrelse, varmebehov og eksisterende varmesystem.",
    },
    {
      q: "Hvor meget kan jeg spare med en varmepumpe?",
      a: "De fleste sparer 5.000–10.000 kr. om året ved at skifte fra gas, og markant mere ved skifte fra olie eller elvarme — helt op til 15.000–25.000 kr. årligt. Besparelsen svarer typisk til 40–60 % af varmeregningen.",
    },
    {
      q: "Hvor meget er tilskuddet til varmepumpe i 2026?",
      a: "Varmepumpepuljen giver i 2026 et fast tilskud på 27.000 kr. til at udskifte olie- eller gasfyr med en luft-til-vand varmepumpe eller jordvarme. Derudover kan du bruge håndværkerfradraget på op til 9.000 kr. pr. voksen — men ikke på samme arbejde som puljetilskuddet.",
    },
    {
      q: "Hvilken varmepumpe er bedst til mit hus?",
      a: "Har du vandbårne radiatorer eller gulvvarme, er en luft-til-vand varmepumpe oftest det rette valg. Har du elvarme eller vil supplere, er luft-til-luft billigst. Jordvarme giver den højeste effektivitet, men kræver plads og en større investering.",
    },
  ],
  related: [
    "luft-til-luft-vs-luft-til-vand",
    "varmepumpe-pris-montering-2026",
    "varmepumpe-tilskud-fradrag-2026",
    "dimensionering-af-varmepumpe",
    "bedste-varmepumpe-maerker",
    "faa-3-tilbud-tjekliste",
  ],
  body: `
<p class="lead">En varmepumpe er i 2026 en af de bedste investeringer, du kan lave i dit hus. Den halverer typisk varmeregningen, øger boligens værdi og skærer markant i CO₂-udledningen. Men hvilken type skal du vælge, hvad koster det, og hvor meget kan du få i tilskud? Denne guide samler det hele — så du kan træffe et oplyst valg, før du henter tilbud.</p>

<p>Interessen for varmepumper er større end nogensinde i 2026. Stigende og svingende priser på olie og gas, den grønne omstilling og et forhøjet statstilskud har fået titusindvis af danske husstande til at skifte de seneste år. For de fleste boligejere med olie- eller gasfyr er spørgsmålet ikke længere <em>om</em> de skal skifte til varmepumpe, men <em>hvornår</em> og <em>hvilken</em>. Denne guide giver dig svaret — trin for trin.</p>

<h2 id="hvad-er-en-varmepumpe">Hvad er en varmepumpe — og hvorfor er den så effektiv?</h2>
<p>En varmepumpe flytter varme fra omgivelserne (udeluft, jord eller grundvand) ind i huset frem for at skabe varme ved forbrænding. Den bruger el til at drive en kompressor, men leverer langt mere varme, end den bruger strøm. Forholdet mellem afgivet varme og forbrugt el kaldes <strong>COP</strong> (Coefficient of Performance). En årsgennemsnitlig værdi kaldes <strong>SCOP</strong>.</p>
<p>En moderne varmepumpe har typisk en SCOP på 3–5. Det betyder, at for hver kilowatt-time strøm, den bruger, giver den 3–5 kWh varme retur. Til sammenligning giver et elradiator-panel præcis 1 kWh varme pr. kWh strøm. Det er den effektivitet, der gør varmepumpen så billig i drift.</p>
<p>Teknisk set fungerer en varmepumpe som et omvendt køleskab. Et kølemiddel cirkulerer i et lukket kredsløb gennem fire dele: en <strong>fordamper</strong>, en <strong>kompressor</strong>, en <strong>kondensator</strong> og en <strong>ekspansionsventil</strong>. Kølemidlet optager varme fra omgivelserne i fordamperen — selv ved minusgrader er der energi i luften — fordamper, komprimeres til høj temperatur og afgiver så varmen til huset i kondensatoren. Nyere pumper bruger i stigende grad det naturlige kølemiddel R290 (propan), der har en meget lav klimapåvirkning og klarer høje fremløbstemperaturer godt. Effektiviteten falder, jo koldere det er ude, og jo varmere vand pumpen skal levere — derfor er både korrekt dimensionering og en lav fremløbstemperatur afgørende for økonomien.</p>
${fig("Heat pump unit.webp", "Nærbillede af udedelen på en luft-til-vand varmepumpe", "Udedelen optager varme fra udeluften — selv ved frostgrader er der energi at hente.")}

<h2 id="typer">De tre typer varmepumper</h2>
<p>Der findes tre hovedtyper. Valget afhænger af, hvordan dit hus varmes op i dag, hvor meget plads du har, og hvor stor en investering du er klar til.</p>

<h3 id="luft-luft">1. Luft-til-luft varmepumpe</h3>
<p>Optager varme fra udeluften og blæser den ind i boligen som varm luft via en eller flere indedele. Den er billigst i indkøb og hurtig at installere, men varmer kun de rum, hvor der sidder en indedel, og kan ikke lave varmt brugsvand. Ideel som supplement i huse med elvarme eller brændeovn, og til sommerhuset. Læs mere om forskellen i vores guide til <a href="/artikler/luft-til-luft-vs-luft-til-vand/">luft-til-luft vs. luft-til-vand</a>.</p>

<h3 id="luft-vand">2. Luft-til-vand varmepumpe</h3>
<p>Optager også varme fra udeluften, men afgiver den til husets vandbårne varmesystem — radiatorer og gulvvarme — og laver samtidig varmt brugsvand. Det er den mest solgte type i Danmark og det naturlige valg, når du udskifter et olie- eller gasfyr. En luft-til-vand varmepumpe dækker hele husets opvarmning året rundt.</p>

<h3 id="jordvarme">3. Jordvarme (væske-til-vand)</h3>
<p>Henter varme fra jorden via slanger gravet ned i haven (eller en boring). Jordens temperatur er stabil året rundt, så jordvarme har den højeste effektivitet (SCOP ofte 4–5) og de laveste driftsudgifter. Til gengæld er investeringen størst, og det kræver haveareal til jordslangerne — typisk 250–400 m² for et parcelhus.</p>
<p>Kort fortalt kan du bruge disse fordele og ulemper til at indsnævre valget:</p>
<ul>
<li><strong>Luft-til-luft:</strong> + billigst og hurtigst at installere, god som supplement · − ingen varmt vand, varmer kun de rum, hvor der sidder en indedel.</li>
<li><strong>Luft-til-vand:</strong> + dækker hele huset og varmt vand, berettiget til tilskud, moderat investering · − lidt lavere effektivitet end jordvarme, udedel afgiver støj.</li>
<li><strong>Jordvarme:</strong> + højeste effektivitet og laveste drift, ingen synlig udedel, lang levetid · − dyrest, kræver stort haveareal eller boring, mere gravearbejde.</li>
</ul>

<figure><table>
<thead><tr><th>Type</th><th>SCOP</th><th>Pris inkl. montering</th><th>Varmt vand?</th><th>Bedst til</th></tr></thead>
<tbody>
<tr><td>Luft-til-luft</td><td>4–5</td><td>12.000–25.000 kr.</td><td>Nej</td><td>Supplement, elvarme, sommerhus</td></tr>
<tr><td>Luft-til-vand</td><td>3–4</td><td>90.000–150.000 kr.</td><td>Ja</td><td>Udskiftning af olie/gas i parcelhus</td></tr>
<tr><td>Jordvarme</td><td>4–5</td><td>120.000–180.000 kr.</td><td>Ja</td><td>Store huse, lavt varmebehov, stor grund</td></tr>
</tbody>
</table><figcaption>Vejledende sammenligning af de tre varmepumpetyper (2026-priser).</figcaption></figure>

<h2 id="pris">Varmepumpe pris 2026 — inkl. montering</h2>
<p>Prisen på en varmepumpe afhænger af type, effekt, mærke og hvor meget tilpasning dit hus kræver. Herunder er de typiske prisintervaller <em>inklusive</em> montering i 2026. Vi går i dybden i vores artikel om <a href="/artikler/varmepumpe-pris-montering-2026/">varmepumpe pris inkl. montering</a>.</p>
<ul>
<li><strong>Luft-til-luft:</strong> 12.000–25.000 kr. En enkelt indedel i den lave ende, flere indedele (multisplit) i den høje.</li>
<li><strong>Luft-til-vand:</strong> 90.000–150.000 kr. for et typisk parcelhus på 130–160 m². Selve pumpen udgør 40.000–70.000 kr., resten er installation, buffertank, rørføring og el-arbejde.</li>
<li><strong>Jordvarme:</strong> 120.000–180.000 kr. Nedgravning af jordslanger eller boring er den store meromkostning i forhold til luft-til-vand.</li>
</ul>
<p>Prisen drives især af tre ting: husets varmebehov (og dermed pumpens effekt), hvor let det gamle anlæg kan nedtages og kobles fra, og hvor meget dit varmesystem eventuelt skal tilpasses. Skal enkelte radiatorer opgraderes, eller skal der etableres gulvvarme i udvalgte rum, lægges det oveni. Vær også opmærksom på, at den annoncerede "fra"-pris sjældent er den, du ender med — bed altid om en samlet, specificeret pris inkl. montering, så du kan sammenligne tilbud ærligt. Vores guide til <a href="/artikler/varmepumpe-pris-montering-2026/">pris inkl. montering</a> gennemgår hver post i regningen.</p>
<p>Husk, at tilskud på 27.000 kr. og håndværkerfradrag kan trække den reelle pris betydeligt ned — mere om det længere nede.</p>

<h2 id="besparelse">Årlige besparelser vs. gas, olie og elvarme</h2>
<p>Den helt store gevinst er driftsbesparelsen. Hvor meget du sparer, afhænger af, hvad du skifter <em>fra</em>. Jo dyrere og mindre effektiv din nuværende varmekilde er, desto større er besparelsen.</p>
<figure><table>
<thead><tr><th>Skifter fra</th><th>Typisk årlig varmeudgift før</th><th>Efter varmepumpe</th><th>Årlig besparelse</th></tr></thead>
<tbody>
<tr><td>Oliefyr</td><td>22.000–30.000 kr.</td><td>8.000–12.000 kr.</td><td>~14.000–20.000 kr.</td></tr>
<tr><td>Gasfyr</td><td>16.000–22.000 kr.</td><td>8.000–11.000 kr.</td><td>~7.000–12.000 kr.</td></tr>
<tr><td>Elvarme (panelovne)</td><td>25.000–35.000 kr.</td><td>9.000–13.000 kr.</td><td>~15.000–25.000 kr.</td></tr>
</tbody>
</table><figcaption>Vejledende besparelser for et gennemsnitligt parcelhus. De faktiske tal afhænger af varmebehov, elpris og pumpens effektivitet.</figcaption></figure>
<p>Med tilskud og de årlige besparelser er den typiske <strong>tilbagebetalingstid 5–10 år</strong> for en luft-til-vand varmepumpe. Derefter er der ren besparelse i resten af pumpens levetid på 15–20 år.</p>
<p><strong>Et konkret regneeksempel:</strong> En familie i et parcelhus på 150 m² med oliefyr bruger ca. 26.000 kr. om året på varme. De installerer en luft-til-vand varmepumpe til 120.000 kr., får 27.000 kr. i tilskud fra varmepumpepuljen og trækker yderligere ca. 9.000 kr. fra i håndværkerfradrag — så den reelle investering er ca. 84.000 kr. Efter skiftet falder varmeudgiften til ca. 10.000 kr. om året, altså en årlig besparelse på ~16.000 kr. Investeringen er dermed tjent hjem på lidt over fem år, hvorefter familien sparer omkring 16.000 kr. hvert eneste år. Tallene er vejledende, men illustrerer, hvorfor så mange skifter netop nu.</p>

<h2 id="tilskud">Tilskud og fradrag i 2026</h2>
<p>Der er to store ordninger, du bør kende. Vi uddyber begge — inkl. ansøgning og betingelser — i guiden om <a href="/artikler/varmepumpe-tilskud-fradrag-2026/">varmepumpe tilskud og fradrag</a>.</p>
<h3 id="varmepumpepuljen">Varmepumpepuljen 2026</h3>
<p>Energistyrelsens varmepumpepulje giver i 2026 et <strong>fast tilskud på 27.000 kr.</strong> til at udskifte et olie- eller gasfyr med en luft-til-vand varmepumpe eller jordvarme. Det er en forhøjelse fra 17.000 kr. i 2025, og beløbet er nu det samme uanset pumpetype. Puljen åbnede 5. februar 2026, blev midlertidigt opbrugt i maj, og genåbnede 2. juli 2026 efter en ekstra bevilling på 200 mio. kr. Ansøgninger behandles efter først-til-mølle, så tjek altid puljens aktuelle status, inden du regner med tilskuddet.</p>
<h3 id="haandvaerkerfradrag">Håndværkerfradraget</h3>
<p>Håndværkerfradraget er tilbage og gælder til og med 2027. I 2026 kan hver voksen i husstanden trække op til <strong>9.000 kr.</strong> fra i skat for <em>arbejdslønnen</em> ved installation af en varmepumpe (ikke materialer). Vær opmærksom: du kan ikke bruge både varmepumpepuljen og håndværkerfradraget på det <em>samme</em> arbejde — men et par kan tilsammen få op til 18.000 kr. i fradrag på den del, puljen ikke dækker.</p>

<h2 id="stoerrelse">Størrelsesguide: hvilken effekt skal du vælge?</h2>
<p>En varmepumpe skal dimensioneres efter husets faktiske varmebehov. Vælger du for lille, kan den ikke følge med på de koldeste dage. Vælger du for stor, "takter" den unødigt og slider på kompressoren. En tommelfingerregel for et rimeligt isoleret parcelhus:</p>
<ul>
<li><strong>Under 120 m²:</strong> typisk 4–6 kW varmepumpe.</li>
<li><strong>120–180 m²:</strong> typisk 6–9 kW.</li>
<li><strong>Over 180 m² eller ældre/dårligt isoleret hus:</strong> 9–12 kW eller mere.</li>
</ul>
<p>Det præcise behov beregnes ud fra husets varmetabsberegning, isoleringsstand og ønsket fremløbstemperatur. En dygtig installatør laver altid en konkret dimensionering — læs hvorfor det er afgørende i vores guide til <a href="/artikler/dimensionering-af-varmepumpe/">dimensionering af varmepumpe</a>.</p>
<p>Effekten hænger tæt sammen med, hvor varmt vand pumpen skal levere. Kan dit varmesystem nøjes med en lav fremløbstemperatur på 35–45 °C — for eksempel med gulvvarme eller rigeligt dimensionerede radiatorer — arbejder pumpen mest effektivt, og du kan ofte vælge en mindre og billigere model. Kræver huset derimod 55–65 °C, stiger både effektbehov og driftsudgift. En korrekt dimensioneret buffertank hjælper desuden pumpen med at køre længe og jævnt ad gangen frem for at tænde og slukke konstant, hvilket forlænger kompressorens levetid.</p>

<h2 id="fjernvarme">Varmepumpe eller fjernvarme?</h2>
<p>Bor du et sted, hvor der er — eller snart kommer — fjernvarme, bør du sammenligne de to løsninger, før du beslutter dig. Fjernvarme kræver ingen investering i eget anlæg og næsten ingen vedligeholdelse, men du er bundet til fjernvarmeselskabets priser og skal betale tilslutningsbidrag. En varmepumpe giver dig fuld kontrol over din egen varmeforsyning og er ofte billigst i drift, men kræver en større investering og lidt vedligehold. Er der ikke udsigt til fjernvarme i dit område inden for en overskuelig årrække, er en varmepumpe næsten altid det rette valg, hvis du skal væk fra olie eller gas. Er fjernvarme lige om hjørnet, kan det betale sig at vente — men husk, at ventetiden også koster på den dyre, gamle varmekilde.</p>

<h2 id="vaelg">Sådan vælger du den rigtige varmepumpe</h2>
<ol>
<li><strong>Kortlæg dit varmesystem.</strong> Har du vandbårne radiatorer/gulvvarme (→ luft-til-vand eller jordvarme) eller elvarme (→ luft-til-luft eller luft-til-vand)?</li>
<li><strong>Vurder din grund og plads.</strong> Jordvarme kræver haveareal; luft-baserede løsninger kræver plads til en udedel, der støjer lidt.</li>
<li><strong>Sæt et budget — og medregn tilskud.</strong> 27.000 kr. fra puljen ændrer regnestykket markant.</li>
<li><strong>Vælg mærke og effekt sammen med en installatør.</strong> Se vores oversigt over <a href="/artikler/bedste-varmepumpe-maerker/">bedste varmepumpe-mærker</a>.</li>
<li><strong>Hent altid mindst tre tilbud.</strong> Priser og løsningsforslag varierer meget — brug vores <a href="/artikler/faa-3-tilbud-tjekliste/">tjekliste til 3 tilbud</a>.</li>
</ol>

<h2 id="installation">Sådan foregår installationen</h2>
<p>En luft-til-vand installation tager typisk 1–3 arbejdsdage. Forløbet ser normalt sådan ud:</p>
<ol>
<li><strong>Besigtigelse og dimensionering.</strong> Installatøren gennemgår husets varmesystem, isolering og radiatorer og beregner det rette effektbehov. Det er her, grundlaget for en effektiv drift lægges.</li>
<li><strong>Ansøgning om tilskud.</strong> Søg varmepumpepuljen og få tilsagn, <em>inden</em> arbejdet går i gang — mange installatører hjælper med ansøgningen.</li>
<li><strong>Nedtagning af det gamle fyr.</strong> Olie- eller gasfyret og eventuelt olietanken fjernes og bortskaffes.</li>
<li><strong>Opstilling.</strong> Udedelen placeres på et fundament eller vægbeslag, og indedel/buffertank og varmtvandsbeholder monteres inde.</li>
<li><strong>Tilslutning og indregulering.</strong> Pumpen kobles til varmesystemet og el, fyldes, og varmekurven finjusteres, så fremløbstemperaturen bliver så lav som muligt.</li>
</ol>
<p>Selve indreguleringen er ofte undervurderet: en pumpe, der er sat op korrekt og kører med en lav, jævn fremløbstemperatur, kan let bruge 15–20 % mindre strøm end den samme pumpe, der er sjusket indstillet. Bed derfor altid om, at installatøren dokumenterer den indstillede varmekurve.</p>

<h2 id="driftsoekonomi">Driftsøkonomi: elpris, afgifter og smart styring</h2>
<p>Fordi en varmepumpe kører på strøm, betyder elprisen meget for driftsøkonomien. Elafgiften til opvarmning er reduceret, hvilket gør varmepumpevarme billigere, end den ellers ville være. Du kan yderligere sænke regningen ved at udnytte, at elprisen svinger over døgnet:</p>
<ul>
<li><strong>Timeafregning (spotpris):</strong> Med en variabel elaftale kan pumpen med fordel producere mest varme, når strømmen er billigst — typisk om natten og midt på dagen.</li>
<li><strong>Smart styring:</strong> Mange moderne varmepumper kan styre driften efter elprisen automatisk og "lade" husets og buffertankens varme op i de billige timer.</li>
<li><strong>Egen solcelleproduktion:</strong> Har du solceller, kan pumpen prioritere at køre, når solen leverer gratis strøm.</li>
</ul>
<p>Samlet set er den typiske tilbagebetalingstid for en luft-til-vand varmepumpe 5–10 år, når du medregner tilskud og de årlige besparelser. Med en levetid på 15–20 år er der mange års ren besparelse tilbage, efter investeringen er tjent hjem.</p>

<h2 id="stoej-placering">Støj, placering og nabohensyn</h2>
<p>Luft-baserede varmepumper har en udedel med en ventilator, der laver lyd. Moderne modeller er blevet markant mere lydsvage, men placeringen er afgørende. Hold god afstand til skel og til soveværelsesvinduer — både dine egne og naboens — og undgå at rette udedelen mod en hård mur, der reflekterer lyden. I boligområder gælder vejledende støjgrænser ved naboskel, som kommunen håndhæver. Vælg gerne en model med "silent mode" til natdrift, og monter udedelen på vibrationsdæmpende fødder. Vi går i dybden i guiden om <a href="/artikler/stoej-fra-varmepumpe/">støj fra varmepumpe</a>.</p>

<h2 id="vedligehold">Vedligeholdelse og levetid</h2>
<p>En varmepumpe kræver kun lidt vedligehold. På en luft-til-luft varmepumpe renser du selv indedelens filtre nogle gange om året, og på alle typer holder du udedelen fri for blade, sne og is. Derudover bør anlægget have et professionelt servicetjek hvert 1.–2. år, hvor teknikeren kontrollerer kølemiddeltryk, kompressor og indregulering. Et velvedligeholdt anlæg bevarer sin høje effektivitet og dermed den lave driftsudgift i hele levetiden. Se den fulde tjekliste i vores guide til <a href="/artikler/varmepumpe-drift-vedligehold/">drift og vedligehold</a>.</p>

<h2 id="vaerdi">Boligværdi, energimærke og finansiering</h2>
<p>En varmepumpe er ikke kun en driftsbesparelse — den løfter typisk også boligens energimærke og dermed dens værdi ved et salg. Køberne kigger i stigende grad på de forventede varmeudgifter, og et hus med en moderne varmepumpe fremstår billigere og mere fremtidssikret end et med olie- eller gasfyr. Har du ikke hele investeringen liggende, tilbyder mange banker og realkreditinstitutter grønne lån til energiforbedringer, ofte til en favorabel rente. Regn på totaløkonomien: den månedlige ydelse på et grønt lån er for mange lavere end den besparelse, varmepumpen giver på varmeregningen — så projektet kan reelt være udgiftsneutralt fra dag ét.</p>

<h2 id="fejl">5 typiske fejl — og hvordan du undgår dem</h2>
<ol>
<li><strong>At vælge efter pris alene.</strong> Det billigste tilbud er sjældent det bedste, hvis pumpen er forkert dimensioneret eller sjusket indstillet. Se på den samlede løsning — ikke kun tallet nederst.</li>
<li><strong>At overdimensionere.</strong> En for stor pumpe "takter" og slider på kompressoren. Bed om at se varmetabsberegningen bag effektvalget — læs mere om <a href="/artikler/dimensionering-af-varmepumpe/">dimensionering</a>.</li>
<li><strong>At glemme fremløbstemperaturen.</strong> Særligt i <a href="/artikler/varmepumpe-i-gamle-huse/">ældre huse</a> kan for små radiatorer tvinge fremløbet i vejret og æde besparelsen. Opgradér de mindste radiatorer, hvor det er nødvendigt.</li>
<li><strong>At søge tilskud for sent.</strong> Du skal have tilsagn fra varmepumpepuljen, <em>før</em> arbejdet begynder. Søger du bagud, mister du tilskuddet.</li>
<li><strong>At nøjes med ét tilbud.</strong> Priser og løsninger varierer meget. Hent altid mindst tre — brug vores <a href="/artikler/faa-3-tilbud-tjekliste/">tjekliste til 3 tilbud</a>.</li>
</ol>

<h2 id="konklusion">Konklusion</h2>
<p>En varmepumpe er i 2026 både en økonomisk og klimamæssig gevinst for de fleste danske boligejere. Skal du udskifte olie eller gas, er luft-til-vand det oplagte valg; har du elvarme eller søger et supplement, er luft-til-luft billigst; og har du plads og et lavt varmebehov, giver jordvarme den laveste driftsudgift. Uanset hvad afhænger den rigtige løsning af netop dit hus — dets varmesystem, isolering og dine radiatorer. Sæt dig ind i typer, priser og tilskud, og få så en fagmand ud og sammenlign flere tilbud, før du beslutter dig. Så ender du med den løsning, der både passer til huset og til din økonomi — og med en varmeregning, der er markant lavere end i dag.</p>
`,
};

// ===========================================================================
// SUPPORT-ARTIKLER
// ===========================================================================
const supports: Article[] = [
  {
    slug: "luft-til-luft-vs-luft-til-vand",
    title: "Luft-til-luft vs. luft-til-vand varmepumpe: Hvad skal du vælge?",
    description:
      "Luft-til-luft eller luft-til-vand varmepumpe? Se forskellen på pris, opvarmning, varmt vand og hvilken type der passer til dit hus.",
    category: "Typer",
    hero: {
      file: "Heat pump unit.webp",
      alt: "Udedel på en luft-baseret varmepumpe monteret på husmur",
    },
    updated: "2026-07-11",
    readMinutes: 6,
    excerpt:
      "De to luft-baserede typer forveksles ofte. Her er den klare forskel — og hvem der bør vælge hvad.",
    related: ["varmepumpe-guide", "varmepumpe-pris-montering-2026", "dimensionering-af-varmepumpe"],
    faq: [
      {
        q: "Kan en luft-til-luft varmepumpe lave varmt vand?",
        a: "Nej. En luft-til-luft varmepumpe afgiver kun varm luft til rummet og kan ikke producere varmt brugsvand. Det kan en luft-til-vand varmepumpe derimod.",
      },
      {
        q: "Er luft-til-luft nok til at opvarme hele huset?",
        a: "Sjældent alene. Den varmer bedst de rum, hvor indedelene sidder. I åbne planløsninger kan den dække meget, men lukkede værelser og badeværelser kræver ofte supplerende varme.",
      },
    ],
    body: `
<p class="lead">De to typer lyder næsten ens, men gør noget helt forskelligt. Kort fortalt: luft-til-luft varmer <em>luften</em> i et rum, mens luft-til-vand varmer <em>vandet</em> i husets radiatorer og haner. Her er forskellen — og hvem der bør vælge hvad.</p>

<h2>Sådan virker de</h2>
<p>Begge typer henter varme fra udeluften. Forskellen ligger i, hvordan varmen afgives:</p>
<ul>
<li><strong>Luft-til-luft</strong> blæser varm luft direkte ind i rummet via en indedel på væggen. Ingen tilslutning til vandbårne radiatorer eller varmtvandsbeholder.</li>
<li><strong>Luft-til-vand</strong> sender varmen ind i husets centralvarmesystem — radiatorer og gulvvarme — og laver også varmt brugsvand.</li>
</ul>
${fig("Rooftop Packaged Units.JPG", "Varmepumpe-udedele installeret udendørs", "Begge typer har en udedel, der optager varme fra luften — også ved frost.")}

<h2>Pris og installation</h2>
<p>Luft-til-luft er langt billigst: typisk 12.000–25.000 kr. inkl. montering og installeres på en enkelt dag. Luft-til-vand koster 90.000–150.000 kr. inkl. montering, fordi den kobles på hele varmesystemet. Til gengæld er luft-til-vand berettiget til <a href="/artikler/varmepumpe-tilskud-fradrag-2026/">varmepumpepuljens tilskud på 27.000 kr.</a>, hvilket luft-til-luft ikke er.</p>

<h2>Hvem bør vælge hvad?</h2>
<p><strong>Vælg luft-til-luft, hvis</strong> du har elvarme eller brændeovn og vil sænke varmeregningen billigt, eller skal varme et <a href="/artikler/varmepumpe-til-sommerhus/">sommerhus</a> op. <strong>Vælg luft-til-vand, hvis</strong> du udskifter et olie- eller gasfyr og har vandbårne radiatorer — så dækker den hele husets varme og varmt vand.</p>
<p>Er du i tvivl om, hvad dit hus egner sig til, giver ${PILLAR_LINK} det fulde overblik over alle tre typer.</p>
`,
  },
  {
    slug: "varmepumpe-til-sommerhus",
    title: "Varmepumpe til sommerhus: Guide til den rette løsning",
    description:
      "Varmepumpe til sommerhus: Sådan vælger du mellem luft-til-luft og luft-til-vand, hvad det koster, og hvordan du undgår fugt og frostskader.",
    category: "Anvendelse",
    hero: {
      file: "Tuppenny Barn heat pump unit.jpg",
      alt: "Varmepumpe monteret ved et træhus i naturskønne omgivelser",
    },
    updated: "2026-07-11",
    readMinutes: 5,
    excerpt:
      "En varmepumpe holder sommerhuset frostfrit og lunt — og skærer i elregningen. Her er den rette løsning.",
    related: ["varmepumpe-guide", "luft-til-luft-vs-luft-til-vand", "stoej-fra-varmepumpe"],
    faq: [
      {
        q: "Hvilken varmepumpe er bedst til et sommerhus?",
        a: "For de fleste sommerhuse er en luft-til-luft varmepumpe det bedste valg. Den er billig, nem at installere og perfekt til at holde huset frostfrit og hurtigt varmt ved ankomst.",
      },
      {
        q: "Kan en varmepumpe stå tændt i sommerhuset, når det er tomt?",
        a: "Ja. Mange kører varmepumpen på en lav frostvagt-temperatur (fx 8–10 °C), når huset er tomt. Det holder huset tørt og frostfrit og sparer strøm, fremfor at varme op fra koldt hver gang.",
      },
    ],
    body: `
<p class="lead">Et sommerhus har andre behov end en helårsbolig: det står ofte tomt, skal kunne holdes frostfrit om vinteren og varmes hurtigt op ved ankomst. En varmepumpe løser alle tre dele — hvis du vælger den rigtige type.</p>

<h2>Luft-til-luft er som regel det rette valg</h2>
<p>De fleste sommerhuse opvarmes med elvarme, og her giver en <a href="/artikler/luft-til-luft-vs-luft-til-vand/">luft-til-luft varmepumpe</a> mest værdi for pengene. Den koster typisk 12.000–20.000 kr. inkl. montering, sænker elforbruget til opvarmning med op mod 60 % og varmer huset hurtigt op, når I ankommer. Har sommerhuset vandbårne radiatorer og bruges meget om vinteren, kan en luft-til-vand løsning komme på tale — men det er sjældent rentabelt til lejlighedsvis brug.</p>

<h2>Frostvagt og fugtsikring</h2>
<p>En stor fordel er "frostvagt": Du lader pumpen holde en lav grundtemperatur, mens huset står tomt. Det forhindrer frostsprængte rør og holder fugt og skimmel væk. Vælg en model, der kan styres via app, så du kan skrue op for varmen, allerede inden du kører hjemmefra.</p>
${fig("Heat Pump.jpg", "Udedel på en varmepumpe ved et sommerhus", "En udedel kræver lidt fri plads og afstand til skel — tænk på naboer og støj.")}

<h2>Husk støj og placering</h2>
<p>I tætbebyggede sommerhusområder er <a href="/artikler/stoej-fra-varmepumpe/">støj fra varmepumpen</a> værd at tænke over. Placér udedelen væk fra skel og soveværelsesvinduer, og tjek de lokale afstandskrav. Vil du se hele billedet af typer og priser, så start med ${PILLAR_LINK}.</p>
`,
  },
  {
    slug: "varmepumpe-pris-montering-2026",
    title: "Varmepumpe pris inkl. montering 2026",
    description:
      "Hvad koster en varmepumpe inkl. montering i 2026? Se priser for luft-til-luft, luft-til-vand og jordvarme — og hvad der påvirker den endelige pris.",
    category: "Pris",
    hero: {
      file: "Heat pump unit.webp",
      alt: "Installatør monterer en luft-til-vand varmepumpe ved et hus",
    },
    updated: "2026-07-11",
    readMinutes: 6,
    excerpt:
      "Fuldt prisoverblik for 2026 — hvad pumpen koster, hvad monteringen koster, og hvad der driver prisen op.",
    related: ["varmepumpe-guide", "varmepumpe-tilskud-fradrag-2026", "faa-3-tilbud-tjekliste"],
    faq: [
      {
        q: "Hvad koster en luft-til-vand varmepumpe inkl. montering i 2026?",
        a: "Typisk 90.000–150.000 kr. inkl. montering for et almindeligt parcelhus. Selve pumpen udgør 40.000–70.000 kr., resten er installation, buffertank, rør og el-arbejde.",
      },
      {
        q: "Er montering med i prisen?",
        a: "Ikke altid i annoncerede priser. Bed altid om en samlet pris inkl. montering, buffertank, nedtagning af gammelt fyr og el-tilslutning, så du kan sammenligne tilbud korrekt.",
      },
    ],
    body: `
<p class="lead">Prisen på en varmepumpe består af to dele: selve pumpen og monteringen. Monteringen kan sagtens udgøre halvdelen af regningen på en luft-til-vand løsning, så det er afgørende at sammenligne <em>samlede</em> priser, når du henter tilbud.</p>

<h2>Priser i 2026 inkl. montering</h2>
<ul>
<li><strong>Luft-til-luft:</strong> 12.000–25.000 kr. Én indedel i den lave ende; multisplit med flere indedele i den høje.</li>
<li><strong>Luft-til-vand:</strong> 90.000–150.000 kr. for et parcelhus på 130–160 m².</li>
<li><strong>Jordvarme:</strong> 120.000–180.000 kr. — nedgravning af jordslanger er den store meromkostning.</li>
</ul>

<h2>Hvad indgår i monteringsprisen?</h2>
<p>På en luft-til-vand installation dækker monteringen typisk: opstilling af ude- og indedel, buffertank/varmtvandsbeholder, rørføring til det eksisterende varmesystem, el-arbejde, nedtagning af gammelt olie-/gasfyr, indregulering og idriftsættelse. Alle disse poster bør stå specificeret i tilbuddet.</p>
${fig("Rooftop Packaged Units.JPG", "Teknisk installation af varmepumpe", "Rørføring, buffertank og el-arbejde er en stor del af monteringsprisen.")}

<h2>Hvad påvirker prisen?</h2>
<ul>
<li><strong>Husets varmebehov</strong> og dermed pumpens effekt (kW) — se <a href="/artikler/dimensionering-af-varmepumpe/">dimensionering</a>.</li>
<li><strong>Fremløbstemperatur:</strong> gamle huse med små radiatorer kræver højere fremløb og dermed større pumpe. Læs om <a href="/artikler/varmepumpe-i-gamle-huse/">varmepumpe i gamle huse</a>.</li>
<li><strong>Mærke og model</strong> — se <a href="/artikler/bedste-varmepumpe-maerker/">bedste mærker</a>.</li>
<li><strong>Tilslutningsforhold</strong> og hvor let det gamle fyr kan nedtages.</li>
</ul>

<h2>Husk tilskud og fradrag</h2>
<p>Den reelle pris bliver ofte 27.000–45.000 kr. lavere, når du medregner <a href="/artikler/varmepumpe-tilskud-fradrag-2026/">varmepumpepuljen og håndværkerfradraget</a>. Se det fulde regnestykke i ${PILLAR_LINK}.</p>
`,
  },
  {
    slug: "varmepumpe-tilskud-fradrag-2026",
    title: "Varmepumpe tilskud og fradrag 2026: Få op til 27.000 kr.",
    description:
      "Varmepumpepuljen giver 27.000 kr. i tilskud i 2026, og håndværkerfradraget op til 9.000 kr. pr. voksen. Se betingelser, beløb og hvordan du søger.",
    category: "Tilskud",
    hero: {
      file: "Euro banknotes.jpg",
      alt: "Penge og opsparing — symbol på tilskud til varmepumpe",
    },
    updated: "2026-07-11",
    readMinutes: 6,
    excerpt:
      "Varmepumpepuljen, håndværkerfradraget og reglerne for at kombinere dem — alt om tilskud i 2026.",
    related: ["varmepumpe-guide", "varmepumpe-pris-montering-2026", "faa-3-tilbud-tjekliste"],
    faq: [
      {
        q: "Hvor meget er varmepumpetilskuddet i 2026?",
        a: "Varmepumpepuljen giver i 2026 et fast tilskud på 27.000 kr. til at udskifte olie- eller gasfyr med en luft-til-vand varmepumpe eller jordvarme — samme beløb uanset type.",
      },
      {
        q: "Kan jeg få både tilskud og håndværkerfradrag?",
        a: "Ja, men ikke på det samme arbejde. Du kan ikke få håndværkerfradrag for den del af installationen, som varmepumpepuljen allerede dækker. Fradraget kan bruges på øvrigt arbejde.",
      },
      {
        q: "Er varmepumpepuljen åben lige nu?",
        a: "Puljen behandles efter først-til-mølle og kan være opbrugt i perioder. I 2026 genåbnede den 2. juli efter en ekstra bevilling. Tjek altid Energistyrelsens aktuelle status, før du regner med tilskuddet.",
      },
    ],
    body: `
<p class="lead">Tilskud kan skære titusindvis af kroner af prisen på en varmepumpe. I 2026 er der to ordninger, du skal kende: varmepumpepuljen og håndværkerfradraget. Her er beløb, betingelser og reglerne for at kombinere dem.</p>

<h2>Varmepumpepuljen 2026 — 27.000 kr.</h2>
<p>Energistyrelsens varmepumpepulje giver i 2026 et <strong>fast tilskud på 27.000 kr.</strong> til boligejere, der skifter olie- eller gasfyr ud med en <a href="/artikler/luft-til-luft-vs-luft-til-vand/">luft-til-vand varmepumpe</a> eller jordvarme. Det er en klar forhøjelse fra 17.000 kr. i 2025, og beløbet er nu det samme uanset pumpetype. Reglerne er samtidig blevet enklere.</p>
<p>Vigtige betingelser:</p>
<ul>
<li>Du skal <strong>søge og få tilsagn, før arbejdet går i gang</strong> — søg aldrig bagud.</li>
<li>Det gamle fyr skal være olie eller gas (ikke allerede fjernvarme).</li>
<li>Installationen skal udføres af en momsregistreret virksomhed.</li>
<li>Ansøgninger behandles <strong>først-til-mølle</strong>. Puljen åbnede 5. februar 2026, blev opbrugt i maj og genåbnede 2. juli 2026 efter en ekstra bevilling på 200 mio. kr.</li>
</ul>

<h2>Håndværkerfradraget 2026 — op til 9.000 kr. pr. voksen</h2>
<p>Håndværkerfradraget er tilbage og gælder til og med 2027. I 2026 kan hver voksen i husstanden trække op til <strong>9.000 kr.</strong> fra i skat for <em>arbejdslønnen</em> (ikke materialer) ved installation af en varmepumpe. Et par kan altså tilsammen få op til 18.000 kr. i fradrag.</p>

<h2>Kan man kombinere dem?</h2>
<p>Ja — men <strong>ikke på det samme arbejde</strong>. Du kan ikke få håndværkerfradrag for den del af installationen, som varmepumpepuljen allerede dækker. I praksis bruger mange puljetilskuddet på hovedinstallationen og håndværkerfradraget på eventuelt øvrigt arbejde. Din installatør kan hjælpe med at fordele posterne korrekt.</p>
${fig("Solar panels on a roof.jpg", "Energirenovering af bolig", "Tilskud og fradrag gør energirenovering med varmepumpe markant billigere.")}

<h2>Sådan kommer du videre</h2>
<p>Start med at få et konkret tilbud, så du kender prisen — og dermed hvor meget tilskud og fradrag betyder for netop din installation. Se det fulde overblik i ${PILLAR_LINK}, eller brug vores <a href="/artikler/faa-3-tilbud-tjekliste/">tjekliste til 3 tilbud</a>.</p>
`,
  },
  {
    slug: "bedste-varmepumpe-maerker",
    title: "Bedste varmepumpe-mærker 2026: Sådan vælger du",
    description:
      "Hvilket mærke varmepumpe er bedst? Se hvad du skal se efter — effektivitet (SCOP), støj, garanti og service — og hvordan du sammenligner mærker.",
    category: "Mærker",
    hero: {
      file: "Heat Pump.jpg",
      alt: "Varmepumpe fra et kendt mærke monteret ved en husfacade",
    },
    updated: "2026-07-11",
    readMinutes: 6,
    excerpt:
      "Der er intet enkelt 'bedste mærke' — men der er klare kriterier. Sådan vurderer du kvaliteten.",
    related: ["varmepumpe-guide", "stoej-fra-varmepumpe", "varmepumpe-drift-vedligehold"],
    faq: [
      {
        q: "Hvilket mærke varmepumpe er bedst?",
        a: "Der er ikke ét bedste mærke til alle huse. De mest anerkendte producenter har alle effektive og driftssikre modeller. Vælg ud fra SCOP, støjniveau, garanti og lokal service — og lad effektbehovet styre modelvalget.",
      },
      {
        q: "Betyder mærket mere end installationen?",
        a: "Nej. En korrekt dimensioneret og indreguleret installation betyder ofte mere for effektivitet og driftssikkerhed end selve mærket. En god installatør er mindst lige så vigtig som et godt mærke.",
      },
    ],
    body: `
<p class="lead">Mange spørger, hvilket mærke der er "bedst". Sandheden er, at de førende producenter alle laver effektive, driftssikre varmepumper — og at den rigtige model afhænger mere af dit hus end af logoet. Her er de kriterier, der faktisk betyder noget.</p>

<h2>De vigtigste kvalitetskriterier</h2>
<ul>
<li><strong>Effektivitet (SCOP):</strong> Jo højere SCOP, desto lavere driftsudgift. Sammenlign SCOP ved samme fremløbstemperatur — ellers sammenligner du æbler og pærer.</li>
<li><strong>Støjniveau:</strong> Udedelens lydeffekt (dB) er vigtig i tæt bebyggelse. Se vores guide til <a href="/artikler/stoej-fra-varmepumpe/">støj fra varmepumpe</a>.</li>
<li><strong>Effektområde:</strong> Pumpen skal passe til husets <a href="/artikler/dimensionering-af-varmepumpe/">varmebehov</a> — hverken for lille eller for stor.</li>
<li><strong>Garanti og reservedele:</strong> Tjek garantiperiode på kompressor og tilgængelighed af reservedele.</li>
<li><strong>Lokal service:</strong> En forhandler med serviceteknikere i nærheden er guld værd, hvis noget svigter.</li>
</ul>
${fig("Heat pump unit.webp", "Typeskilt og udedel på en moderne varmepumpe", "Sammenlign SCOP og støjniveau på databladet — ikke kun prisen.")}

<h2>Kølemiddel og fremtidssikring</h2>
<p>Nyere varmepumper bruger i stigende grad naturlige kølemidler som R290 (propan), der har lav klimapåvirkning og gode ydelser ved høj fremløbstemperatur. Det er især relevant i <a href="/artikler/varmepumpe-i-gamle-huse/">ældre huse</a> med radiatorer, der kræver varmt fremløb.</p>

<h2>Installatøren er halvdelen af kvaliteten</h2>
<p>Selv det bedste mærke yder dårligt, hvis det er forkert dimensioneret eller sjusket indreguleret. Prioritér derfor en erfaren installatør lige så højt som mærket. Få det fulde overblik i ${PILLAR_LINK}, og hent flere tilbud med vores <a href="/artikler/faa-3-tilbud-tjekliste/">tjekliste</a>.</p>
`,
  },
  {
    slug: "stoej-fra-varmepumpe",
    title: "Støj fra varmepumpe: Regler, dB og sådan undgår du gener",
    description:
      "Hvor meget støjer en varmepumpe? Se de danske støjgrænser ved skel, hvad dB-tallene betyder, og hvordan placering og indstilling mindsker støjen.",
    category: "Drift",
    hero: {
      file: "Tuppenny Barn heat pump unit.jpg",
      alt: "Udedel på en varmepumpe placeret ved en havemur",
    },
    updated: "2026-07-11",
    readMinutes: 5,
    excerpt:
      "En varmepumpe støjer — men sjældent meget. Her er reglerne ved skel og de tricks, der holder naboen glad.",
    related: ["varmepumpe-guide", "varmepumpe-til-sommerhus", "bedste-varmepumpe-maerker"],
    faq: [
      {
        q: "Hvor meget må en varmepumpe støje ved naboskel?",
        a: "I boligområder er den vejledende grænse typisk 35–40 dB(A) ved naboens opholdsareal/skel om aftenen og natten. Kommunen kan håndhæve grænseværdier, så tjek de lokale krav ved placering.",
      },
      {
        q: "Hvordan mindsker jeg støjen fra varmepumpen?",
        a: "Placér udedelen væk fra skel og soveværelsesvinduer, undgå at rette den mod en reflekterende mur, brug vibrationsdæmpende fødder og vælg evt. en model med lav natdrift/silent mode.",
      },
    ],
    body: `
<p class="lead">Alle luft-baserede varmepumper har en udedel med en ventilator og en kompressor, der laver lyd. Moderne modeller er blevet langt mere lydsvage, men placering og indstilling afgør, om støjen bliver et problem — især i forhold til naboen.</p>

<h2>Hvad siger reglerne?</h2>
<p>Varmepumpens støj er reguleret af Miljøstyrelsens vejledende grænseværdier for ekstern støj. I rene boligområder ligger grænsen typisk på <strong>35–40 dB(A)</strong> ved naboens opholdsareal om aftenen og natten. Kommunen er myndighed og kan kræve dokumentation eller afhjælpning, hvis en nabo klager. Tjek derfor de lokale krav, inden udedelen placeres.</p>

<h2>Sådan holder du støjen nede</h2>
<ul>
<li><strong>Placering:</strong> Hold god afstand til skel og til dine egne og naboens soveværelsesvinduer.</li>
<li><strong>Undgå refleksion:</strong> En udedel, der blæser mod en hård mur eller ind i et hjørne, forstærker lyden.</li>
<li><strong>Vibrationsdæmpning:</strong> Monter udedelen på vibrationsdæmpende fødder eller vægbeslag med gummi.</li>
<li><strong>Natdrift:</strong> Mange modeller har en "silent mode", der sænker ventilatorhastigheden om natten.</li>
<li><strong>Afskærmning:</strong> En akustikskærm kan hjælpe — men må ikke blokere luftind- og udtag.</li>
</ul>
${fig("Rooftop Packaged Units.JPG", "Placering af varmepumpe-udedel", "Rigtig placering er den billigste og mest effektive støjdæmpning.")}

<h2>Vælg en lydsvag model</h2>
<p>Støjniveauet står i databladet som lydeffekt i dB(A). Tag det med i din vurdering af <a href="/artikler/bedste-varmepumpe-maerker/">mærke og model</a> — det er især vigtigt ved <a href="/artikler/varmepumpe-til-sommerhus/">sommerhuse</a> og på små grunde. Se hele billedet i ${PILLAR_LINK}.</p>
`,
  },
  {
    slug: "varmepumpe-i-gamle-huse",
    title: "Varmepumpe i gamle huse: Virker det — og hvad kræver det?",
    description:
      "Kan man have varmepumpe i et gammelt hus? Ja — men fremløbstemperatur, radiatorstørrelse og isolering afgør effektiviteten. Se hvad du skal være opmærksom på.",
    category: "Anvendelse",
    hero: {
      file: "Solar panels on a roof.jpg",
      alt: "Ældre murstenshus, der energirenoveres",
    },
    updated: "2026-07-11",
    readMinutes: 6,
    excerpt:
      "Varmepumper virker fint i ældre huse — men fremløbstemperatur og radiatorer skal passe. Sådan gør du.",
    related: ["varmepumpe-guide", "dimensionering-af-varmepumpe", "varmepumpe-pris-montering-2026"],
    faq: [
      {
        q: "Kan man have varmepumpe i et gammelt, dårligt isoleret hus?",
        a: "Ja. Det kræver blot, at pumpen dimensioneres til husets højere varmebehov, og at fremløbstemperaturen kan holdes rimelig — evt. ved at opgradere de mindste radiatorer. Efterisolering forbedrer altid økonomien.",
      },
      {
        q: "Skal jeg skifte radiatorer for at få en varmepumpe?",
        a: "Ikke nødvendigvis alle. Ofte er det nok at udskifte de få underdimensionerede radiatorer, så systemet kan køre med lavere fremløbstemperatur, hvor varmepumpen er mest effektiv.",
      },
    ],
    body: `
<p class="lead">Der er en sejlivet myte om, at varmepumper ikke egner sig til gamle huse. Det passer ikke — men ældre huse stiller krav til fremløbstemperatur og radiatorer, som du skal have styr på for at få en effektiv drift.</p>

<h2>Fremløbstemperaturen er nøglen</h2>
<p>En varmepumpe er mest effektiv, når den kan varme vandet til en <em>lav</em> fremløbstemperatur — gerne 35–45 °C. Gamle huse med små radiatorer er ofte designet til 60–70 °C. Jo højere fremløb, desto lavere SCOP og desto dyrere drift. Løsningen er sjældent at skifte alt: ofte rækker det at udskifte de få underdimensionerede radiatorer med større paneler eller supplere med gulvvarme i udvalgte rum.</p>

<h2>Isolering betaler sig først</h2>
<p>Et velisoleret hus har et lavere varmebehov, så du kan nøjes med en mindre — og billigere — varmepumpe. Efterisolering af loft og fokus på tætning omkring vinduer og døre er blandt de mest rentable tiltag, du kan lave <em>før</em> installationen. Det forbedrer både <a href="/artikler/dimensionering-af-varmepumpe/">dimensioneringen</a> og driftsøkonomien.</p>
${fig("Heat Pump.jpg", "Varmepumpe ved et ældre parcelhus", "Med korrekt dimensionering og lave fremløbstemperaturer kører varmepumper også fint i ældre huse.")}

<h2>Vælg det rette kølemiddel og effekt</h2>
<p>Til huse, der kræver højere fremløb, er modeller med kølemidlet R290 (propan) ofte et godt valg, fordi de leverer varmt vand mere effektivt. Sørg for, at pumpen dimensioneres til husets reelle varmebehov — hellere en tand for stor buffer end en pumpe, der ikke kan følge med på årets koldeste dage.</p>

<h2>Regn på det samlede projekt</h2>
<p>I gamle huse skal du medregne eventuelle radiator- og isoleringsopgraderinger i <a href="/artikler/varmepumpe-pris-montering-2026/">den samlede pris</a>. Til gengæld er besparelsen ofte størst netop her, fordi udgangspunktet — olie eller gas — er dyrt. Læs hele overblikket i ${PILLAR_LINK}.</p>
`,
  },
  {
    slug: "varmepumpe-drift-vedligehold",
    title: "Varmepumpe: Drift og vedligehold, der forlænger levetiden",
    description:
      "Sådan vedligeholder du din varmepumpe: rengøring af filtre og udedel, årligt servicetjek, kontrol af tryk og indstillinger — og hvornår du bør tilkalde en tekniker.",
    category: "Drift",
    hero: {
      file: "Heat pump unit.webp",
      alt: "Serviceeftersyn af en varmepumpes udedel",
    },
    updated: "2026-07-11",
    readMinutes: 5,
    excerpt:
      "Lidt vedligehold holder effektiviteten oppe og levetiden lang. Her er, hvad du selv gør — og hvad teknikeren gør.",
    related: ["varmepumpe-guide", "bedste-varmepumpe-maerker", "dimensionering-af-varmepumpe"],
    faq: [
      {
        q: "Hvor ofte skal en varmepumpe efterses?",
        a: "En luft-til-vand varmepumpe eller jordvarme bør have et professionelt servicetjek ca. hvert 1–2 år. Filtre og udedel på en luft-til-luft varmepumpe bør du selv rense flere gange om året.",
      },
      {
        q: "Hvad kan jeg selv gøre for at vedligeholde varmepumpen?",
        a: "Rens indedelens filtre regelmæssigt, hold udedelen fri for blade, sne og is, og hold luftind- og udtag frie. Tjek jævnligt, at systemtrykket og indstillingerne ser normale ud.",
      },
    ],
    body: `
<p class="lead">En varmepumpe holder typisk 15–20 år — men kun hvis den passes. Heldigvis er vedligeholdet enkelt. Noget klarer du selv på få minutter, og resten ordner en tekniker ved det årlige eftersyn.</p>

<h2>Det klarer du selv</h2>
<ul>
<li><strong>Rens filtrene:</strong> På en luft-til-luft varmepumpe bør indedelens filtre renses hver 4.–8. uge i fyringssæsonen. Snavsede filtre sænker både effektivitet og luftkvalitet.</li>
<li><strong>Hold udedelen fri:</strong> Fjern blade, græs, sne og is, og sørg for fri luftpassage rundt om udedelen.</li>
<li><strong>Tjek indstillingerne:</strong> Hold øje med, at fremløbstemperatur og driftsindstillinger ser normale ud — pludselige udsving kan være et tidligt varsel.</li>
<li><strong>Lyt efter unormal lyd:</strong> Nye vibrationer eller støj kan betyde løse dele. Se også <a href="/artikler/stoej-fra-varmepumpe/">støj fra varmepumpe</a>.</li>
</ul>
${fig("Rooftop Packaged Units.JPG", "Rengøring og eftersyn af varmepumpe", "Regelmæssig rengøring af filtre og udedel holder effektiviteten oppe.")}

<h2>Det klarer teknikeren</h2>
<p>Ved det årlige servicetjek kontrollerer teknikeren kølemiddeltryk, gennemgår kompressor og elektronik, efterser buffertank og cirkulationspumpe og finjusterer indreguleringen. På anlæg med et vist kølemiddelfyld er periodisk tæthedskontrol desuden lovpligtig.</p>

<h2>Vedligehold beskytter besparelsen</h2>
<p>Et velvedligeholdt anlæg bevarer sin høje SCOP og dermed den lave driftsudgift, du købte varmepumpen for. Det forlænger også levetiden og reducerer risikoen for dyre nedbrud. Se hele overblikket over drift og økonomi i ${PILLAR_LINK}.</p>
`,
  },
  {
    slug: "dimensionering-af-varmepumpe",
    title: "Dimensionering af varmepumpe: Vælg den rigtige effekt (kW)",
    description:
      "Hvor stor en varmepumpe skal du have? Sådan beregnes effektbehovet ud fra husets størrelse, isolering og varmetab — og hvorfor korrekt dimensionering er afgørende.",
    category: "Guide",
    hero: {
      file: "Heat Pump.jpg",
      alt: "Varmepumpe dimensioneret til et parcelhus",
    },
    updated: "2026-07-11",
    readMinutes: 5,
    excerpt:
      "For lille pumpe fryser dig; for stor slider sig selv op. Sådan rammer du den rigtige effekt.",
    related: ["varmepumpe-guide", "varmepumpe-i-gamle-huse", "varmepumpe-pris-montering-2026"],
    faq: [
      {
        q: "Hvor stor en varmepumpe skal jeg have til mit hus?",
        a: "Som tommelfingerregel bruger et rimeligt isoleret parcelhus 4–6 kW under 120 m², 6–9 kW ved 120–180 m² og 9–12 kW derover. Det præcise behov beregnes ud fra husets varmetab og ønsket fremløbstemperatur.",
      },
      {
        q: "Hvad sker der, hvis varmepumpen er for stor?",
        a: "En overdimensioneret varmepumpe 'takter' — tænder og slukker for ofte — hvilket sænker effektiviteten og slider på kompressoren. En let underdimensioneret pumpe med god buffer er ofte bedre end en for stor.",
      },
    ],
    body: `
<p class="lead">Dimensionering handler om at vælge den rette effekt (kW) til dit hus. Det er en af de vigtigste beslutninger i hele projektet — og den, der oftest går galt, hvis man kun ser på pris.</p>

<h2>Sådan beregnes behovet</h2>
<p>Effektbehovet afhænger af husets <strong>varmetab</strong>: jo dårligere isolering og jo koldere dimensionerende udetemperatur, desto mere effekt kræves. En seriøs installatør laver en varmetabsberegning frem for blot at gætte ud fra kvadratmeter. Som groft udgangspunkt:</p>
<ul>
<li><strong>Under 120 m² (rimeligt isoleret):</strong> 4–6 kW</li>
<li><strong>120–180 m²:</strong> 6–9 kW</li>
<li><strong>Over 180 m² eller ældre/dårligt isoleret hus:</strong> 9–12 kW eller mere</li>
</ul>

<h2>Hverken for lille eller for stor</h2>
<p>En <strong>for lille</strong> pumpe kan ikke dække varmebehovet på årets koldeste dage og må supplere med dyr eltilskudsvarme. En <strong>for stor</strong> pumpe "takter" — tænder og slukker for ofte — hvilket sænker effektiviteten og slider på kompressoren. Målet er en pumpe, der kører jævnt og længe ad gangen ved lav fremløbstemperatur.</p>
${fig("Heat pump unit.webp", "Dimensionering af varmepumpens effekt", "Effekten (kW) skal matche husets varmetab — ikke bare kvadratmeterne.")}

<h2>Fremløbstemperatur og buffer</h2>
<p>Dimensioneringen hænger tæt sammen med fremløbstemperaturen. I <a href="/artikler/varmepumpe-i-gamle-huse/">ældre huse</a> med små radiatorer kræves højere fremløb, hvilket påvirker både effektbehov og valg af model. En korrekt buffertank hjælper pumpen med at køre stabilt.</p>

<h2>Lad fagfolk regne — og sammenlign</h2>
<p>Bed altid om at se dimensioneringsgrundlaget i tilbuddet. Forskellige installatører kan foreslå forskellige effekter til samme hus — derfor betaler det sig at <a href="/artikler/faa-3-tilbud-tjekliste/">hente flere tilbud</a>. Se hele sammenhængen i ${PILLAR_LINK}.</p>
`,
  },
  {
    slug: "faa-3-tilbud-tjekliste",
    title: "Få 3 tilbud på varmepumpe: Tjekliste, så du vælger rigtigt",
    description:
      "Sådan får du 3 gode tilbud på varmepumpe og sammenligner dem rigtigt. Tjekliste med de spørgsmål og poster, hvert tilbud skal indeholde.",
    category: "Guide",
    hero: {
      file: "Heat pump unit.webp",
      alt: "Boligejer sammenligner tilbud på varmepumpe",
    },
    updated: "2026-07-11",
    readMinutes: 5,
    excerpt:
      "Priserne svinger med titusinder. Med denne tjekliste sammenligner du tre tilbud æble-til-æble.",
    related: ["varmepumpe-guide", "varmepumpe-pris-montering-2026", "dimensionering-af-varmepumpe"],
    faq: [
      {
        q: "Hvorfor bør jeg hente tre tilbud på en varmepumpe?",
        a: "Priser og løsningsforslag varierer ofte med 20–40 % fra installatør til installatør for det samme hus. Tre tilbud giver dig et realistisk prisleje og et bedre forhandlingsgrundlag.",
      },
      {
        q: "Hvad skal et godt varmepumpetilbud indeholde?",
        a: "En samlet pris inkl. montering, valgt mærke/model og effekt (kW), dimensioneringsgrundlag, buffertank/varmtvandsbeholder, el-arbejde, nedtagning af gammelt fyr, garanti- og servicevilkår samt håndtering af tilskud.",
      },
    ],
    body: `
<p class="lead">Det samme hus kan få vidt forskellige tilbud — i pris, effekt og løsning. At hente tre tilbud er den enkleste måde at sikre både en fair pris og den rigtige tekniske løsning. Her er tjeklisten, der gør dem sammenlignelige.</p>

<h2>Sådan får du sammenlignelige tilbud</h2>
<p>Giv alle installatører det samme udgangspunkt: husets størrelse, byggeår, isoleringsstand, nuværende varmekilde og dit forbrug. Så sammenligner du løsninger til det samme behov — ikke tre forskellige antagelser.</p>

<h2>Tjekliste — det skal hvert tilbud indeholde</h2>
<ul>
<li><strong>Samlet pris inkl. montering</strong> — ingen skjulte poster.</li>
<li><strong>Mærke, model og effekt (kW)</strong> samt <a href="/artikler/dimensionering-af-varmepumpe/">dimensioneringsgrundlag</a>.</li>
<li><strong>Buffertank/varmtvandsbeholder</strong> og rørføring.</li>
<li><strong>El-arbejde</strong> og eventuel opgradering af tavle.</li>
<li><strong>Nedtagning og bortskaffelse</strong> af gammelt olie-/gasfyr.</li>
<li><strong>Håndtering af tilskud</strong> — hjælper de med ansøgning til <a href="/artikler/varmepumpe-tilskud-fradrag-2026/">varmepumpepuljen</a>?</li>
<li><strong>Garanti og service</strong> — periode og hvad der er dækket.</li>
<li><strong>Forventet SCOP</strong> og estimeret årlig driftsudgift.</li>
</ul>
${fig("Rooftop Packaged Units.JPG", "Sammenligning af varmepumpetilbud", "Bed om samme oplysninger fra alle tre installatører, så tilbuddene kan sammenlignes direkte.")}

<h2>Spørgsmål, du bør stille</h2>
<ul>
<li>Er I autoriserede/momsregistrerede, og har I lokale serviceteknikere?</li>
<li>Hvilken fremløbstemperatur regner I med — og skal nogen radiatorer opgraderes?</li>
<li>Hvordan sikrer I, at pumpen ikke bliver over- eller underdimensioneret?</li>
<li>Hvad er den forventede leveringstid?</li>
</ul>

<h2>Kom godt i gang</h2>
<p>Når du har styr på typer og priser fra ${PILLAR_LINK}, er næste skridt at indhente tilbuddene. Brug boksen "Få 3 gratis tilbud" her på siden — det er gratis og uforpligtende, og du vælger selv, om du vil gå videre.</p>
`,
  },
];

// ===========================================================================
// EKSPORT + HELPERS
// ===========================================================================
export const allArticles: Article[] = [pillar, ...supports];

export function getPillar(): Article {
  return pillar;
}

export function getSupportArticles(): Article[] {
  return supports;
}

export function getArticle(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

/** Permalink for en artikel (pillar ligger på top-niveau). */
export function articleUrl(a: Pick<Article, "slug" | "pillar">): string {
  return a.pillar ? `/varmepumpe-guide/` : `/artikler/${a.slug}/`;
}

/** Resolve related-slugs til hele artikler (kun dem, der findes). */
export function relatedArticles(a: Article): Article[] {
  return a.related
    .map((slug) => getArticle(slug))
    .filter((x): x is Article => Boolean(x));
}
