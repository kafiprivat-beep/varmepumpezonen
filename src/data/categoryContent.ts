// Unikt, dansk SEO-indhold pr. kategori: meta-tekster, kort blurb til
// forsiden, købsguide (300-500 ord) og FAQ (4-5 spørgsmål) med FAQPage-schema.
// Holdes adskilt fra advertisers.ts så copy kan redigeres uden at røre data.

export interface Faq {
  q: string;
  a: string;
}

export interface CategoryContent {
  /** Meta title uden brand-suffix (tilføjes automatisk i BaseLayout). */
  metaTitle: string;
  /** Meta description, max ~155 tegn. */
  metaDescription: string;
  /** 1-2 sætninger til kategorikort på forsiden. */
  cardBlurb: string;
  /** H2 over købsguiden. */
  guideHeading: string;
  /** Brødtekst-afsnit til købsguiden. */
  guideParagraphs: string[];
  /** FAQ nederst på siden (markeres med FAQPage JSON-LD). */
  faq: Faq[];
}

export const categoryContent: Record<string, CategoryContent> = {
  telte: {
    metaTitle: "Telte til vandring og camping – købsguide",
    metaDescription:
      "Find det rette telt til tur eller familiecamping. Sammenlign 1-, 2- og 4-personers telte på vægt, vandsøjle og pris, og læs vores købsguide.",
    cardBlurb:
      "Fra letvægts trekkingtelte til rummelige familietelte — find det rette ly til turen.",
    guideHeading: "Sådan vælger du det rigtige telt",
    guideParagraphs: [
      "Det vigtigste valg er, hvordan du skal bruge teltet. Skal det bæres på ryggen over lange distancer, tæller hvert gram, og et letvægtstelt på 1-2 kg til én eller to personer er oplagt. Skal familien på campingtur med bilen tæt på, kan du prioritere plads, ståhøjde og komfort frem for vægt — her giver et tunneltelt eller kuppeltelt med fortelt langt mere plads for pengene.",
      "Vandsøjle fortæller, hvor meget vand materialet holder tæt for. Til danske forhold bør ydersejlet have mindst 2.000-3.000 mm, og bunden gerne 3.000-5.000 mm, da du ligger og lægger tryk på den. Kig også efter tapede sømme, en god flyverdug (ydersejl) der når helt ned til jorden, og myggenet i indertelt og ventilationsåbninger, så der ikke dannes kondens.",
      "Årstiden afgør konstruktionen. Et 3-sæsonstelt dækker forår, sommer og efterår og er det de fleste har brug for. Skal du ud i sne og hård vind, kræver det et kraftigere 4-sæsonstelt med flere stænger og lavere profil. Antal indgange og apsider (overdækket forrum til grej og madlavning) betyder meget for komforten — to indgange gør det nemt at komme ud uden at kravle over hinanden.",
      "Prismæssigt får du et brugbart begyndertelt fra 500-1.000 kr., mens solide 3-sæsons trekkingtelte typisk ligger i 1.500-3.500 kr. Ultralette telte i silnylon eller Dyneema samt store familietelte kan koste 4.000 kr. og opefter. Sæt dit budget efter, hvor ofte du kommer afsted: bruger du teltet mange nætter om året, tjener kvaliteten sig hurtigt hjem i holdbarhed og en tør nattesøvn.",
    ],
    faq: [
      {
        q: "Hvilken vandsøjle skal et telt have i Danmark?",
        a: "Til dansk vejr anbefales mindst 2.000-3.000 mm på ydersejlet og 3.000-5.000 mm på bunden. Højere vandsøjle på bunden er vigtig, fordi din kropsvægt presser vandet op nedefra.",
      },
      {
        q: "Hvad er forskellen på et 3-sæsons og et 4-sæsons telt?",
        a: "Et 3-sæsonstelt er bygget til forår, sommer og efterår og har god ventilation. Et 4-sæsonstelt er kraftigere, har flere stænger og lavere profil, så det kan modstå sne og hård vind om vinteren.",
      },
      {
        q: "Hvor meget må et telt veje til vandring?",
        a: "Til rygsæksvandring bør et 2-personers telt helst veje under 2 kg, og ultralette modeller kommer ned under 1,2 kg. Til bilcamping er vægten mindre vigtig, og du kan vælge plads og komfort til.",
      },
      {
        q: "Hvordan undgår jeg kondens i teltet?",
        a: "Sørg for god ventilation ved at åbne luftåbninger og lade ydersejlet nå jorden. Undgå at lave mad inde i teltet, og hold god afstand mellem inder- og ydertelt, så fugten kan slippe ud.",
      },
      {
        q: "Skal jeg bruge teltunderlag (footprint)?",
        a: "Et underlag beskytter teltbunden mod sten, grene og slid og forlænger teltets levetid. Det er ikke et krav, men en billig forsikring — særligt hvis du ofte camperer på hårdt eller ujævnt underlag.",
      },
    ],
  },

  soveposer: {
    metaTitle: "Soveposer – komfortzoner, dun og syntetisk",
    metaDescription:
      "Vælg den rette sovepose efter komforttemperatur, dun eller syntetisk fyld og vægt. Sammenlign modeller til sommer, 3-sæson og vinter, og find bedste pris.",
    cardBlurb:
      "Dun og syntetisk i alle komfortzoner — hold varmen fra sommernætter til vinterbivuak.",
    guideHeading: "Sådan finder du den rette sovepose",
    guideParagraphs: [
      "En soveposes vigtigste tal er komforttemperaturen. Producenterne oplyser typisk tre værdier efter EN/ISO 23537: komfort (hvor en gennemsnitlig kvinde sover godt), limit (hvor en gennemsnitlig mand lige holder varmen) og ekstrem (ren overlevelse). Vælg altid efter komfortværdien, og læg en buffer på 5 grader, hvis du fryser let eller skal sove i fugtigt vejr.",
      "Fyldet er det næste store valg. Dun har det bedste forhold mellem varme og vægt, pakker meget lille og holder mange år, men mister isolering, hvis det bliver vådt, og koster mere. Syntetisk fyld er billigere, isolerer stadig når det er fugtigt og er nemt at vaske — til gengæld vejer og fylder det mere. Til danske somre og fugtige forhold er syntetisk et sikkert valg; til lette ture og kulde vinder dun.",
      "Faconen påvirker både varme og komfort. En mumiepose sidder tæt om kroppen, har hætte og isolerer bedst, mens en rektangulær pose giver mere plads at bevæge sig i, men taber varme. Kig efter en velisoleret hætte, en aftrækskrave om skuldrene og en skærm bag lynlåsen, som alle hindrer varmetab. Mange poser kan lynes sammen to og to til en dobbeltpose.",
      "Prisen følger fyld og temperatur. En simpel sommersovepose fås fra 200-400 kr., en god syntetisk 3-sæsonspose ligger typisk i 500-900 kr., og letvægts dunposer til køligere ture koster fra 1.200 kr. og opefter. Husk et liggeunderlag med en passende R-værdi — uden isolering fra jorden hjælper selv den varmeste sovepose ikke, fordi kulden trænger op nedefra.",
    ],
    faq: [
      {
        q: "Hvilken komforttemperatur skal jeg vælge?",
        a: "Vælg efter komfortværdien, ikke limit- eller ekstremværdien. Til danske somre rækker 8-12 grader, mens forår og efterår kræver 0-5 grader. Læg 5 graders buffer til, hvis du er kuldskær.",
      },
      {
        q: "Er dun eller syntetisk bedst?",
        a: "Dun er lettest, pakker mindst og holder længst, men er dyrere og mister varme, når det bliver vådt. Syntetisk isolerer stadig i fugt, er billigere og nemmere at vaske, men vejer og fylder mere.",
      },
      {
        q: "Hvorfor er et liggeunderlag vigtigt sammen med soveposen?",
        a: "Soveposen mister sin isolering, hvor du ligger og trykker fyldet fladt. Liggeunderlagets R-værdi isolerer mod kulden fra jorden — uden det fryser du, uanset hvor varm posen er.",
      },
      {
        q: "Hvordan opbevarer jeg min sovepose?",
        a: "Opbevar den løst i en stor opbevaringspose eller hængende, aldrig sammenpresset i pakposen. Konstant kompression ødelægger fyldets evne til at loft'e og isolere over tid.",
      },
      {
        q: "Kan man vaske en sovepose?",
        a: "Ja. Syntetiske poser tåler skånevask ved 30 grader. Dunposer kræver et særligt dunvaskemiddel og tørretumbling med tørrebolde, så dunet ikke klumper. Følg altid vaskemærket.",
      },
    ],
  },

  rygsaekke: {
    metaTitle: "Rygsække – daypacks til ekspeditionssække",
    metaDescription:
      "Find den rette rygsæk efter liter, bæresystem og brug. Guide til daypacks, vandrerygsække og store trekkingsække — sammenlign og find bedste pris.",
    cardBlurb:
      "Daypacks, vandrerygsække og ekspeditionssække med god bæring og smart opbevaring.",
    guideHeading: "Sådan vælger du den rette rygsæk",
    guideParagraphs: [
      "Start med volumen, der måles i liter og bør matche turens længde. En daypack på 15-30 liter rækker til en dagstur med mad, vand og en ekstra lag tøj. Til weekendture med telt og sovepose passer 40-55 liter, mens flerdages- og ekspeditionsture typisk kræver 60-80 liter. Køb ikke større end nødvendigt — en halvtom sæk bærer dårligt, og pladsen frister til at pakke for tungt.",
      "Bæresystemet afgør komforten, når sækken er fyldt. En god vandrerygsæk flytter det meste af vægten fra skuldrene ned på hofterne via et polstret hoftebælte — som tommelfingerregel skal 70-80 % af vægten hvile på hofterne. Mange sække fås i forskellige ryglængder eller med justerbar ryg, så systemet passer til netop din torso. Prøv altid sækken med vægt i, hvis du kan.",
      "Detaljerne gør hverdagen på turen nemmere. Kig efter en ventileret rygplade i varmt vejr, adgang til hovedrummet både fra top og front, lommer til drikkedunk eller vandreservoir, kompressionsstropper der stabiliserer lasten, og et regnslag. Fastgørelsespunkter til vandrestave og liggeunderlag er praktiske, og en aftagelig topklap kan bruges som lille taske i lejren.",
      "Prisniveauet spænder bredt. En enkel daypack fås fra 200-500 kr., en solid vandrerygsæk med ordentligt bæresystem ligger typisk i 800-1.800 kr., og store ekspeditionssække fra kendte mærker koster 1.800-3.000 kr. Investér i bæresystemet frem for antallet af lommer — en sæk, der sidder rigtigt, sparer din ryg og gør lange dage på stien markant mere behagelige.",
    ],
    faq: [
      {
        q: "Hvor mange liter skal min rygsæk være?",
        a: "Dagsture klares med 15-30 liter, weekendture med telt kræver 40-55 liter, og flerdagesture 60-80 liter. Vælg efter den længste tur, du realistisk pakker til, men ikke større end nødvendigt.",
      },
      {
        q: "Hvordan skal en vandrerygsæk sidde?",
        a: "Hoftebæltet skal hvile på hoftekammen og bære 70-80 % af vægten, mens skulderstropperne blot holder sækken ind til kroppen. Ryglængden skal passe til din torso, ikke din højde.",
      },
      {
        q: "Hvad er forskellen på herre- og damerygsække?",
        a: "Damemodeller har typisk kortere ryglængde, smallere skulderstropper og formede hoftebælter, der passer bedre til en kvindekrop. Mange mærker laver også unisex-sække med justerbar ryg.",
      },
      {
        q: "Er en rygsæk vandtæt?",
        a: "De færreste rygsække er helt vandtætte i sømme og lynlåse. Brug det medfølgende regnslag eller pak vigtige ting i vandtætte poser (dry bags) for at holde grejet tørt i regnvejr.",
      },
      {
        q: "Hvordan pakker jeg rygsækken rigtigt?",
        a: "Læg let og sjældent brugt grej i bunden, tungt grej som mad og vand tæt på ryggen i midten, og let tilgængeligt udstyr øverst. En balanceret pakning holder tyngdepunktet tæt på kroppen.",
      },
    ],
  },

  beklaedning: {
    metaTitle: "Outdoor beklædning – lag på lag og skaljakker",
    metaDescription:
      "Klæd dig rigtigt på til naturen med lag-på-lag. Guide til baselag, isolering og skaljakker i uld og membran — sammenlign og find bedste pris på tøjet.",
    cardBlurb:
      "Lag-på-lag systemer, skaljakker og uld der holder dig tør og varm i alt vejr.",
    guideHeading: "Sådan bygger du det rette lag-på-lag system",
    guideParagraphs: [
      "Nøglen til at holde sig tør og varm i naturen er lag-på-lag frem for ét tykt stykke tøj. Systemet består af tre lag: et baselag mod huden, der transporterer sved væk, et mellemlag der isolerer, og et yderlag (skal) der beskytter mod vind og regn. Fordelen er fleksibilitet — du tager lag af og på, så du hverken sveder eller fryser, når vejret og aktivitetsniveauet skifter.",
      "Baselaget er vigtigere, end mange tror. Undgå bomuld, som suger vand til sig og køler dig ned, når det bliver vådt. Merinould isolerer selv i fugt, lugter minimalt og føles behageligt mod huden, mens syntetiske baselag tørrer hurtigere og er billigere. Mellemlaget kan være en fleece, en uldtrøje eller en let dunjakke — vælg efter hvor koldt der bliver, og hvor lidt det skal fylde i rygsækken.",
      "Yderlaget skal matche vejret. En hardshell med vand- og vindtæt membran (fx Gore-Tex eller tilsvarende) holder regn ude og har typisk en åndbarhed målt i mm vandsøjle og g/m²/24 t. Til tørt, koldt vejr kan en softshell være mere behagelig og åndbar. Kig efter tapede sømme, en justerbar hætte, ventilationslynlåse under armene og en god pasform, der giver plads til lagene indenunder.",
      "Prismæssigt fås gode merino baselag fra 300-600 kr., fleece og isoleringslag i 400-1.000 kr., og en ordentlig membranjakke koster typisk 1.200-3.000 kr. afhængigt af mærke og membran. Vedligehold tøjet med imprægnering (DWR), så vandet perler af, og vask det med specialvaskemiddel — velholdt outdoortøj holder både varmen og formen i mange sæsoner.",
    ],
    faq: [
      {
        q: "Hvad er lag-på-lag princippet?",
        a: "Det er en metode, hvor du kombinerer et sveddtransporterende baselag, et isolerende mellemlag og et beskyttende yderlag. Ved at tilføje eller fjerne lag regulerer du temperaturen efter vejr og aktivitet.",
      },
      {
        q: "Er merinould bedre end syntetisk baselag?",
        a: "Merinould isolerer i fugt, lugter minimalt og føles blødt, men er dyrere og tørrer langsommere. Syntetisk tørrer hurtigt og koster mindre, men optager lugt. Mange vælger merino til flerdagesture.",
      },
      {
        q: "Hvorfor skal jeg undgå bomuld i naturen?",
        a: "Bomuld suger sved og regn til sig og mister al isolering, når det bliver vådt. Det køler kroppen kraftigt ned og tørrer langsomt — i koldt vejr kan det være direkte farligt.",
      },
      {
        q: "Hvad betyder vandsøjle på en jakke?",
        a: "Vandsøjlen angiver, hvor stort vandtryk membranen holder tæt for, målt i millimeter. En jakke bør have mindst 10.000 mm for at holde til vedvarende regn, og gerne 15.000-20.000 mm til hårdt vejr.",
      },
      {
        q: "Hvordan vedligeholder jeg en membranjakke?",
        a: "Vask jakken med et specialvaskemiddel uden skyllemiddel, og genopfrisk imprægneringen (DWR) med et pålægs- eller vaskeprodukt. Varme fra tørretumbler eller strygejern aktiverer imprægneringen igen.",
      },
    ],
  },

  fodtoej: {
    metaTitle: "Vandrestøvler og outdoor fodtøj – guide",
    metaDescription:
      "Find de rette vandrestøvler eller trailsko efter terræn, støtte og membran. Guide til pasform og valg af outdoor fodtøj — sammenlign og find bedste pris.",
    cardBlurb:
      "Vandrestøvler, trailløbesko og sandaler med greb og støtte til terrænet.",
    guideHeading: "Sådan vælger du det rigtige fodtøj",
    guideParagraphs: [
      "Valget af fodtøj starter med terrænet og lasten. Til lette dagsture på jævne stier er en lav vandresko eller trailsko fleksibel og hurtig at gå til. Til ujævnt terræn med en tung rygsæk giver en støvle med højt skaft ekstra ankelstøtte og stabilitet, som mindsker risikoen for forstuvninger. Jo tungere du pakker, og jo mere teknisk stien er, jo mere støtte og stivhed har du brug for.",
      "Membran eller ej er et vigtigt spørgsmål. Et vandtæt fodtøj med membran (fx Gore-Tex) holder fødderne tørre i vådt græs, mudder og let regn, men er varmere og tørrer langsomt, hvis vand først kommer ind over skaftet. I varmt, tørt vejr foretrækker mange en ventileret model uden membran, der ånder bedre. Sålens greb (fx Vibram) betyder meget: dybe knopper giver fæste i mudder og på løst underlag.",
      "Pasform er altafgørende og bør prioriteres over mærke og udseende. Prøv altid sko sidst på dagen, hvor foden er størst, og med de vandresokker du faktisk bruger. Der skal være cirka en tommelfingerbredde foran tæerne, så de ikke støder ned ad bakke, og hælen må ikke løfte sig. En god støvle skal føles behagelig med det samme — regn ikke med, at den bliver bedre af at gå til.",
      "Prismæssigt fås trailsko fra 500-900 kr., solide vandrestøvler i læder eller tekstil ligger typisk i 900-1.800 kr., og stive støvler til tungt terræn og vinterbrug koster fra 1.800 kr. og op. Investér i gode sokker uden bomuld og gå støvlerne til på korte ture først. Vedligehold læder med imprægnering og rens sålerne, så grebet holder — godt fodtøj er den bedste forsikring mod vabler og ømme fødder.",
    ],
    faq: [
      {
        q: "Skal jeg vælge støvler med højt eller lavt skaft?",
        a: "Højt skaft giver ankelstøtte og egner sig til ujævnt terræn og tung oppakning. Lavt skaft er lettere og mere fleksibelt og passer til dagsture på jævne stier med let bagage.",
      },
      {
        q: "Er vandtætte vandrestøvler altid bedst?",
        a: "Ikke nødvendigvis. Membran holder fødderne tørre i vådt og køligt vejr, men er varmere og tørrer langsomt indeni. I tørt, varmt vejr ånder en model uden membran bedre og køler fødderne.",
      },
      {
        q: "Hvilken størrelse vandrestøvle skal jeg vælge?",
        a: "Vælg ofte en halv til en hel størrelse større end dine hverdagssko. Der skal være cirka en tommelfingerbredde foran tæerne, så de ikke rammer skoen, når du går ned ad bakke.",
      },
      {
        q: "Hvordan undgår jeg vabler på vandreturen?",
        a: "Brug vandresokker uden bomuld, sørg for korrekt pasform uden gnid, og gå støvlerne til inden turen. Ved begyndende hedeplet kan du sætte tape eller et blisterplaster på med det samme.",
      },
      {
        q: "Hvor længe holder et par vandrestøvler?",
        a: "Typisk 800-1.500 kilometer afhængigt af terræn og vedligehold. Slidt sål med udjævnede knopper og sammentrykt dæmpning er tegn på, at det er tid til et nyt par.",
      },
    ],
  },

  madlavning: {
    metaTitle: "Trangia, stormkøkken og outdoor madlavning",
    metaDescription:
      "Vælg det rette stormkøkken, brænder og kogegrej til turen. Guide til gas, sprit og multifuel samt frysetørret mad — sammenlign og find bedste pris.",
    cardBlurb:
      "Trangiaer, gasbrændere, kogegrej og frysetørret mad til lejren.",
    guideHeading: "Sådan sammensætter du dit turkøkken",
    guideParagraphs: [
      "Brændstoftypen er det første valg og former hele køkkenet. Gasbrændere er lette, hurtige og nemme at regulere — perfekte til de fleste ture i tempereret vejr, men gassen bliver træg i kulde. Spritbrændere som den klassiske Trangia er driftssikre, lydløse og har intet at gå i stykker, men koger langsommere. Multifuel-brændere kører på benzin og petroleum og er de mest robuste til vinter og lange ekspeditioner i udlandet.",
      "Kogegrejet skal passe til antal personer og retter. Til soloture rækker en enkelt kedel på 0,7-1 liter, mens et sæt på 1,5-2,5 liter dækker to til fire personer. Titanium er let og dyrt, aluminium er billigt og leder varmen godt, og rustfrit stål er robust men tungt. Et system med integreret varmeveksler (fx en all-in-one kedel) koger vand hurtigt og sparer brændstof, hvis du mest laver frysetørret mad.",
      "Maden afgør, hvor avanceret et køkken du har brug for. Skal du bare tilberede frysetørrede retter og kaffe, behøver du kun at koge vand, og et minimalt system er nok. Vil du lave rigtig mad med flere gryder, kræver det en stabil brænder, vindskærm og gerne en stegepande. Husk altid en tændkilde, en let vindskærm der sparer meget brændstof, og bestik samt en kop.",
      "Prismæssigt fås en simpel gasbrænder fra 150-400 kr., et komplet Trangia-sæt i 500-900 kr., og integrerede kogesystemer eller multifuel-brændere fra 700-1.500 kr. Frysetørret turmad koster typisk 40-70 kr. pr. portion. Beregn dit gasforbrug efter turens længde — cirka 20-30 gram gas pr. person pr. dag til at koge vand — og tag altid en smule ekstra brændstof med som buffer.",
    ],
    faq: [
      {
        q: "Gas, sprit eller multifuel — hvad skal jeg vælge?",
        a: "Gas er let og hurtig til de fleste ture. Sprit (Trangia) er driftssikker og lydløs, men langsom. Multifuel er bedst til vinter og ekspeditioner, hvor gas svigter i kulde eller ikke kan skaffes.",
      },
      {
        q: "Hvor meget gas bruger jeg på en tur?",
        a: "Regn med cirka 20-30 gram gas pr. person pr. dag, hvis du mest koger vand til frysetørret mad og kaffe. Rigtig madlavning med flere gryder bruger mere. Tag altid lidt ekstra med som buffer.",
      },
      {
        q: "Virker gasbrændere i kulde?",
        a: "Almindelig butangas bliver træg under cirka 5 grader. Vælg en vintergas med propan/isobutan, vend dåsen, eller skift til multifuel eller sprit, hvis du ofte er ude i frostvejr.",
      },
      {
        q: "Hvilket materiale er bedst til kogegrej?",
        a: "Titanium er letvægtsmesteren, men dyr og fordeler varmen ujævnt. Aluminium leder varmen godt og er billigt. Rustfrit stål er robust og ridsefast, men tungt. Vælg efter vægt kontra brug.",
      },
      {
        q: "Må man tænde stormkøkken i naturen?",
        a: "På offentlige naturarealer i Danmark må du bruge friluftskøkken med forsigtighed, men åben ild kræver ofte tilladelse eller bålplads. Følg altid lokale afmærkninger og undgå brug i tørkeperioder.",
      },
    ],
  },

  navigation: {
    metaTitle: "Navigation – GPS, kompas og pandelamper",
    metaDescription:
      "Find vej i naturen med det rette udstyr. Guide til GPS-ure, kompas, kort og pandelamper — så du finder vej, også når det bliver mørkt. Sammenlign priser.",
    cardBlurb:
      "GPS, kompas, kort og pandelamper så du finder vej — også når det bliver mørkt.",
    guideHeading: "Sådan vælger du dit navigationsudstyr",
    guideParagraphs: [
      "God navigation bygger på flere lag, der bakker hinanden op. Et kort og et kompas kræver ingen batterier og svigter aldrig — derfor bør de altid være med i rygsækken som grundlag. Et GPS-ur eller en håndholdt GPS gør det nemt at følge en rute og se din præcise position, men bør ses som et supplement, ikke en erstatning. Lær at bruge kort og kompas, før du stoler blindt på elektronikken.",
      "GPS-ure er blevet allemandseje og fungerer godt til vandring, løb og cykling. Kig efter batterilevetid i GPS-tilstand (fra få timer til flere døgn), understøttelse af flere satellitsystemer (GPS, Galileo, GLONASS) for præcision, samt mulighed for at indlæse ruter og topografiske kort. Et indbygget barometer og højdemåler er nyttigt i bjergterræn, og en robust, vandtæt konstruktion er et must udendørs.",
      "Pandelampen er uundværlig, når mørket falder på. Lysstyrke måles i lumen: 100-200 lumen rækker til lejr og sti, mens 300 lumen og op er rart til løb og teknisk terræn. Vær opmærksom på lysbilledet (spredt nærlys kontra fokuseret fjernlys), batteritype (genopladeligt USB kontra AAA), en rød lystilstand der bevarer nattesynet, og vægt samt komfort på hovedet under lange ture.",
      "Prismæssigt fås et godt spejlkompas fra 150-400 kr., en brugbar pandelampe i 200-600 kr., og GPS-ure spænder fra 1.000 kr. for basismodeller til 4.000-6.000 kr. for avancerede multisportsure med kort. Uanset udstyr: tag altid ekstra batterier eller en powerbank med, hold kortet tørt i en pose, og fortæl nogen om din planlagte rute, før du tager afsted.",
    ],
    faq: [
      {
        q: "Kan jeg nøjes med GPS i stedet for kort og kompas?",
        a: "Nej, ikke helt. GPS kan løbe tør for strøm, gå i stykker eller miste signal. Kort og kompas kræver ingen batterier og er din backup. Lær at bruge begge dele, og hav altid analog navigation med.",
      },
      {
        q: "Hvor mange lumen skal en pandelampe have?",
        a: "Til lejr og gang på sti rækker 100-200 lumen. Til løb, cykling eller teknisk terræn i mørke er 300 lumen og op rart. Husk, at højere lysstyrke dræner batteriet hurtigere.",
      },
      {
        q: "Hvad skal jeg kigge efter i et GPS-ur til vandring?",
        a: "Prioritér lang batterilevetid i GPS-tilstand, understøttelse af topografiske kort og ruteoplægning, flere satellitsystemer for præcision, samt barometer og højdemåler til bjergterræn.",
      },
      {
        q: "Hvorfor har pandelamper en rød lystilstand?",
        a: "Rødt lys bevarer nattesynet, så dine øjne ikke skal vænne sig til mørket igen, hver gang du slukker. Det blænder heller ikke medvandrere i lejren og bruger mindre strøm end hvidt lys.",
      },
      {
        q: "Virker kompasset det samme overalt i verden?",
        a: "Nej. Kompasnålens hældning varierer med jordens magnetfelt, så kompasser fås i zoner. Der er også en misvisning mellem magnetisk og geografisk nord, som du skal korrigere for på kortet.",
      },
    ],
  },

  sikkerhed: {
    metaTitle: "Sikkerhed – førstehjælp, knive og survival",
    metaDescription:
      "Vær forberedt i naturen med det rette sikkerhedsudstyr. Guide til førstehjælpskasse, multitool, kniv og nødsignaler — sammenlign og find bedste pris.",
    cardBlurb:
      "Førstehjælp, nødsignaler, multitools og survival-grej til den uventede situation.",
    guideHeading: "Sådan sammensætter du dit sikkerhedsgrej",
    guideParagraphs: [
      "Sikkerhedsudstyr handler om at kunne håndtere det uventede, uden at rygsækken bliver urimeligt tung. Fundamentet er en førstehjælpskasse tilpasset turens længde og antal deltagere. Den bør som minimum indeholde plastre og blisterplastre, sterile kompresser, elastikbind, tape, en saks, pincet, engangshandsker og eventuel personlig medicin. Lær grundlæggende førstehjælp — udstyret gør kun gavn, hvis du ved, hvordan det bruges.",
      "En god kniv eller et multitool er blandt de mest brugte redskaber på tur. Til friluftsliv er en fast kniv med fuldtange robust til bushcraft og madlavning, mens en foldekniv er lettere at have i lommen. Et multitool med tang, skruetrækkere og saks løser utallige småopgaver og reparationer i felten. Vælg rustfrit stål, der er nemt at vedligeholde, og hold æggen skarp — en sløv kniv er farligere end en skarp.",
      "Nødsignaler og lys kan blive afgørende, hvis noget går galt. En fløjte bærer meget længere end din stemme og vejer intet, en nødtæppe (spaceblanket) holder på varmen ved uheld, og en ekstra lyskilde er uundværlig efter mørkets frembrud. På afsides ture uden mobildækning kan en satellit-kommunikator eller nødsender (PLB) tilkalde hjælp — overvej det til fjeld, sø og hav.",
      "Prismæssigt fås en solid førstehjælpskasse til friluftsliv fra 200-500 kr., en god friluftskniv i 300-800 kr., og multitools fra kendte mærker i 400-1.200 kr. Nødtæpper og fløjter koster småpenge og hører til i enhver pakning. Fortæl altid nogen, hvor du tager hen og hvornår du er tilbage, tjek vejrudsigten, og pak efter det værst tænkelige vejr, ikke det bedste.",
    ],
    faq: [
      {
        q: "Hvad skal en førstehjælpskasse til friluftsliv indeholde?",
        a: "Som minimum plastre og blisterplastre, sterile kompresser, elastikbind, tape, saks, pincet, engangshandsker og din personlige medicin. Tilpas indholdet efter turens længde og antal deltagere.",
      },
      {
        q: "Fast kniv eller foldekniv til friluftsliv?",
        a: "En fast kniv med fuldtange er stærkest og bedst til bushcraft, bål og madlavning. En foldekniv er lettere og mere kompakt til hverdag og lette ture. Mange vælger fast kniv til længere ophold i naturen.",
      },
      {
        q: "Hvornår har jeg brug for en nødsender eller satellitkommunikator?",
        a: "På afsides ture uden mobildækning — fjeld, hav, øde vandreruter — kan en PLB eller satellitkommunikator tilkalde hjælp, når telefonen svigter. Til almindelige danske skovture er det sjældent nødvendigt.",
      },
      {
        q: "Må man bære kniv i naturen i Danmark?",
        a: "Du må medbringe kniv til et anerkendt formål som friluftsliv, jagt og fiskeri, mens transporten sker forsvarligt. Det er forbudt at bære kniv uden grund på offentlige steder — kend reglerne, før du tager afsted.",
      },
      {
        q: "Hvad er det vigtigste sikkerhedsråd før en tur?",
        a: "Fortæl altid nogen, hvor du tager hen, og hvornår du forventer at være tilbage. Tjek vejrudsigten, pak efter det værst tænkelige vejr, og sørg for at have førstehjælp, lys og en måde at tilkalde hjælp på.",
      },
    ],
  },
};

export function getCategoryContent(slug: string): CategoryContent | undefined {
  return categoryContent[slug];
}
