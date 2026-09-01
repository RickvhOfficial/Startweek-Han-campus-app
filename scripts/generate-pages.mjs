import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "pages");
mkdirSync(dir, { recursive: true });

function page(title, crumb, inner) {
  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | HAN Campus App</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/src/css/main.css" />
</head>
<body data-title="${title}">
  <div class="map-bg" aria-hidden="true"></div>
  <div class="map-overlay" aria-hidden="true"></div>
  <div id="header-slot"></div>
  <main class="page-main">
    <header class="page-hero">
      <nav class="crumb"><a href="/index.html">Home</a><span>›</span><span>${crumb}</span></nav>
      <h1>${title}</h1>
    </header>
    ${inner}
  </main>
  <script type="module" src="/src/js/app.js"></script>
</body>
</html>`;
}

const pages = {
  "informatie.html": page(
    "Belangrijke informatie",
    "Belangrijke informatie",
    `<p class="page-hero"><span></span></p>
    <section class="panel">
      <div class="accent-bar accent-orange"></div>
      <p>Alles wat je als student dagelijks nodig hebt: roosters, mededelingen, tentamens en de digitale tools van de HAN.</p>
      <div class="link-grid">
        <a class="mini-card" href="/pages/roosters.html"><strong>Roosters</strong><span>MyX en lokale wijzigingen</span></a>
        <a class="mini-card" href="/pages/mededelingen.html"><strong>Mededelingen</strong><span>Wat speelt er nu</span></a>
        <a class="mini-card" href="/pages/tentamens.html"><strong>Tentamens</strong><span>Inschrijven en regels</span></a>
        <a class="mini-card" href="/pages/nieuws.html"><strong>Nieuws</strong><span>HAN-updates</span></a>
        <a class="mini-card" href="/pages/tools.html"><strong>Digitale tools</strong><span>Brightspace tot MyX</span></a>
        <a class="mini-card" href="/pages/studiepunten.html"><strong>Studiepunten</strong><span>EC, BSA/PSA en normen</span></a>
        <a class="mini-card" href="/pages/hulplijnen.html"><strong>Hulplijnen</strong><span>Hulp bij problemen</span></a>
      </div>
    </section>`
  ),
  "tools.html": page(
    "Digitale tools",
    "Tools",
    `<section class="panel">
      <div class="accent-bar accent-han"></div>
      <p>Met één HANaccount log je in op alle onderwijssystemen. Hieronder de verplichte tools met een korte uitleg.</p>
      <div class="tool-grid">
        <a class="mini-card" href="/pages/brightspace.html"><strong>Brightspace</strong><span>Online leeromgeving</span></a>
        <a class="mini-card" href="/pages/osiris.html"><strong>Osiris</strong><span>Cijfers en inschrijvingen</span></a>
        <a class="mini-card" href="/pages/teams.html"><strong>Teams</strong><span>Les en samenwerking</span></a>
        <a class="mini-card" href="/pages/outlook.html"><strong>Outlook</strong><span>HAN-mail</span></a>
        <a class="mini-card" href="/pages/isas.html"><strong>iSAS</strong><span>Stage en afstuderen</span></a>
        <a class="mini-card" href="/pages/ans.html"><strong>ANS</strong><span>Digitale toetsen</span></a>
        <a class="mini-card" href="/pages/myx.html"><strong>MyX</strong><span>Jouw rooster</span></a>
      </div>
    </section>`
  ),
  "brightspace.html": page(
    "Brightspace",
    "Brightspace",
    `<section class="panel">
      <div class="accent-bar accent-orange"></div>
      <p>Brightspace is de online leeromgeving van de HAN en de basis van het Digitaal Leerplatform. Per cursus vind je literatuur, opdrachten, quizzes, aankondigingen en inleverpunten.</p>
      <h3>Korte uitleg</h3>
      <p>Je ziet alleen cursussen waar jij in Osiris aan gekoppeld bent. Schrijf je dus eerst in voor onderwijs in Osiris, anders blijft Brightspace leeg.</p>
      <div class="steps">
        <div class="step"><b>1</b><div>Ga naar <a href="https://leren.han.nl" target="_blank" rel="noreferrer">leren.han.nl</a></div></div>
        <div class="step"><b>2</b><div>Log in met je HANaccount en Authenticator.</div></div>
        <div class="step"><b>3</b><div>Open je cursus, check Content, Assignments en Announcements.</div></div>
      </div>
      <div class="notice">Tip: zet meldingen aan zodat je deadlines niet mist. Handleidingen staan achter de Help-knop in Brightspace.</div>
    </section>`
  ),
  "osiris.html": page(
    "Osiris",
    "Osiris",
    `<section class="panel">
      <div class="accent-bar accent-navy"></div>
      <p>Osiris is het studentinformatiesysteem. Hier bewaar je je studievoortgang: resultaten, tentamens, herkansingen en afspraken met je begeleider.</p>
      <h3>Korte uitleg</h3>
      <ul>
        <li>Cijfers in Osiris zijn leidend, ook als je ergens anders een indicatie ziet.</li>
        <li>Zonder inschrijving in Osiris kun je vaak niet deelnemen aan een tentamen.</li>
        <li>Je kunt Osiris in de browser gebruiken of via de app (Android/iOS).</li>
      </ul>
      <div class="notice">Plan je herkansingen op tijd. Volle toetsmomenten sluiten soms eerder.</div>
    </section>`
  ),
  "teams.html": page(
    "Microsoft Teams",
    "Teams",
    `<section class="panel">
      <div class="accent-bar accent-navy"></div>
      <p>Teams is het kanaal voor online lessen, projectgroepen, chats met klasgenoten en soms spreekuren met docenten.</p>
      <h3>Korte uitleg</h3>
      <p>Teams zit in Office 365 van de HAN. Open <a href="https://office365.han.nl" target="_blank" rel="noreferrer">office365.han.nl</a> of de Teams-app en log in met je HAN-mailadres. Leslinks staan meestal in Brightspace of in je agenda.</p>
      <div class="notice">Microfoon uit in grote colleges, camera aan als de docent dat vraagt, en check of je in het juiste team/kanaal zit.</div>
    </section>`
  ),
  "outlook.html": page(
    "Outlook",
    "Outlook",
    `<section class="panel">
      <div class="accent-bar accent-han"></div>
      <p>Outlook is je officiële HAN-mailbox. Opleidingen sturen roosters, intro-info en belangrijke wijzigingen naar dit adres.</p>
      <h3>Korte uitleg</h3>
      <ul>
        <li>Open mail via <a href="https://office365.han.nl" target="_blank" rel="noreferrer">office365.han.nl</a> of de Outlook-app.</li>
        <li>Inloggen: HAN-mail + wachtwoord + Microsoft Authenticator.</li>
        <li>Mails over Studielink/(her)inschrijven gaan naar je privé/Studielink-adres.</li>
      </ul>
      <div class="notice">Rond de start van je studie: check Outlook dagelijks. Wachtwoord: han.nl/wachtwoordvergeten</div>
    </section>`
  ),
  "isas.html": page(
    "iSAS",
    "iSAS",
    `<section class="panel">
      <div class="accent-bar accent-pink"></div>
      <p>iSAS is het internshipsysteem dat veel HAN-opleidingen gebruiken voor stages, leerwerkplekken en afstuderen.</p>
      <h3>Korte uitleg</h3>
      <p>Je legt er je stageplek vast, uploadt contracten en volgt beoordelingen. De startmomenten en eisen (uren, leeruitkomsten, begeleider) staan in het opleidingsstatuut en op Insite van jouw academie.</p>
      <div class="steps">
        <div class="step"><b>1</b><div>Check in Brightspace/Insite of jouw opleiding iSAS gebruikt.</div></div>
        <div class="step"><b>2</b><div>Overleg je leerdoelen met de stagedocent vóór je tekent.</div></div>
        <div class="step"><b>3</b><div>Rond goedkeuring af voordat je stage-uren maakt.</div></div>
      </div>
    </section>`
  ),
  "ans.html": page(
    "ANS",
    "ANS",
    `<section class="panel">
      <div class="accent-bar accent-orange"></div>
      <p>ANS is het digitale toetssysteem van de HAN. Vaak in combinatie met Schoolyear, zodat je veilig op je eigen laptop (BYOD) kunt toetsen.</p>
      <h3>Korte uitleg</h3>
      <ul>
        <li>Gebruikt voor kennis-, inzicht- en toepassingstoetsen (formatief én summatief).</li>
        <li>Doe de laptopcheck/Schoolyear op tijd, niet pas in de toetszaal.</li>
        <li>Oefentoetsen in ANS helpen je voorbereiden; de summatieve toets telt voor je cijfer in Osiris.</li>
      </ul>
      <div class="notice">Neem een opgeladen laptop, identiteitsbewijs en eventuele toegestane hulpmiddelen mee. Details staan bij het tentamen in Osiris.</div>
    </section>`
  ),
  "myx.html": page(
    "MyX",
    "MyX",
    `<section class="panel">
      <div class="accent-bar accent-navy"></div>
      <p>MyX (My Xedule) is dé roosterapp van de HAN. Hier zie je lessen, lokalen en wijzigingen.</p>
      <h3>Korte uitleg</h3>
      <p>Log in met je HANaccount. Zet pushmeldingen aan: in de eerste weken schuiven groepen en lokalen regelmatig. Het lokaal in MyX kun je opzoeken via <a href="/pages/zoek-lokaal.html">Zoek een lokaal</a>.</p>
    </section>`
  ),
  "studiepunten.html": page(
    "Studiepunten en normen",
    "Studiepunten",
    `<section class="panel">
      <div class="accent-bar accent-han"></div>
      <p>Op het hbo werk je met studiepunten (EC). Ze maken zichtbaar hoeveel je hebt afgerond en of je mag doorstromen.</p>
      <h3>Korte uitleg</h3>
      <ul>
        <li>1 studiejaar = 60 EC. De hele bachelor is 240 EC, een Ad 120 EC.</li>
        <li>Vaak krijg je punten per blok: alle onderdelen van dat blok moeten binnen zijn.</li>
        <li>Alle punten van jaar 1 = propedeuse.</li>
        <li>Einde jaar 1: studieadvies. Nu nog vaak BSA; de HAN stapt over op een persoonlijk studieadvies (PSA) plus doorstroomnorm (vaak 30–45 EC).</li>
      </ul>
      <div class="notice">De exacte norm van jóuw opleiding staat in het opleidingsstatuut (OS/OER). Die telt, niet een algemeen getal van een andere klas.</div>
      <p>Vragen over je voortgang? Plan een afspraak met je leerteamcoach via Osiris of kijk bij <a href="/pages/hulplijnen.html">hulplijnen</a>.</p>
    </section>`
  ),
  "campus.html": page(
    "Locatie op de campus",
    "Campus",
    `<section class="panel">
      <div class="accent-bar accent-navy"></div>
      <p>De HAN heeft campussen in Nijmegen en Arnhem. Deze app zoomt in op Nijmegen, Kapittelweg.</p>
      <h3>Korte uitleg</h3>
      <ul>
        <li>Adres Nijmegen: Kapittelweg 33, 6525 EN Nijmegen.</li>
        <li>Ook gebouwen aan de Laan van Scheut. Loopafstand van station Nijmegen Heyendaal.</li>
        <li>Gebouwen hebben letters: B, C, D, E, F, G. De hoofdingang en Entree E staan op de kaart.</li>
        <li>Wifi: eduroam (GetEduroam-app). Gasten: HANguest.</li>
        <li>Studiecentrum/bibliotheek: Kapittelweg 33. Grote kantine met warme maaltijden daar ook.</li>
      </ul>
      <div class="building-map">
        <a class="building" href="/pages/gebouwen.html">B <small>Onderwijs</small></a>
        <a class="building" href="/pages/gebouwen.html">C <small>Onderwijs</small></a>
        <a class="building" href="/pages/gebouwen.html">D <small>Onderwijs</small></a>
        <a class="building" href="/pages/gebouwen.html">E <small>Entree E</small></a>
        <a class="building" href="/pages/gebouwen.html">F <small>Onderwijs</small></a>
        <a class="building" href="/pages/gebouwen.html">G <small>Onderwijs</small></a>
      </div>
    </section>`
  ),
  "hulplijnen.html": page(
    "Hulplijnen / hulp bij problemen",
    "Hulplijnen",
    `<section class="panel">
      <div class="accent-bar accent-han"></div>
      <p>Studeren is intensief. Praktische vragen, studiezorgen of persoonlijke problemen: er is altijd een loket. Je hoeft het niet alleen te doen.</p>
      <div class="help-block">
        <h3>ASK HAN</h3>
        <p>Eerste hulp bij inloggen, HANaccount, campusvragen en doorverwijzing.</p>
        <a href="tel:0243530500">024 353 0500</a> · werkdagen 08:00–17:00
      </div>
      <div class="help-block">
        <h3>Studieloopbaan</h3>
        <p>Je leerteamcoach of studiebegeleider helpt bij planning, twijfel over je opleiding en studiepunten. Afspraak via Osiris.</p>
      </div>
      <div class="help-block">
        <h3>Decaan, studentpsycholoog, pastoraat</h3>
        <p>Bij geldzorgen, functiebeperkingen, faalangst of mentale klachten. Aanvragen via Insite of ASK HAN.</p>
      </div>
      <div class="help-block">
        <h3>Vertrouwenspersoon</h3>
        <p>Bij ongewenst gedrag of een onveilige situatie. Gesprekken zijn vertrouwelijk. Je mag zelf kiezen met wie je spreekt.</p>
      </div>
      <div class="help-block">
        <h3>Klacht of bezwaar</h3>
        <p>Bureau Klachten en Geschillen: <a href="mailto:Bureau.klachtengeschil@han.nl">Bureau.klachtengeschil@han.nl</a></p>
      </div>
      <div class="notice">Acute nood: bel 113 (zelfmoordpreventie) of 112 bij direct gevaar. Je mag ook ’s nachts hulp vragen.</div>
    </section>`
  ),
  "roosters.html": page(
    "Roosters",
    "Roosters",
    `<section class="panel">
      <div class="accent-bar accent-orange"></div>
      <p>Je actuele lesrooster staat in <a href="/pages/myx.html">MyX</a>. Deze pagina legt uit hoe je storingen en wijzigingen opvangt.</p>
      <ul>
        <li>Kies je klas/groep goed: parallelgroepen hebben andere lokalen.</li>
        <li>Een X door een les in MyX = uitval of verplaatst.</li>
        <li>Projectdagen staan soms als zelfstudie; check Brightspace voor de opdracht.</li>
      </ul>
    </section>`
  ),
  "mededelingen.html": page(
    "Mededelingen",
    "Mededelingen",
    `<section class="panel">
      <div class="accent-bar accent-orange"></div>
      <div class="notif"><strong>Startweek</strong><time>Vandaag</time><p>Welkom op de campus. Haal je HAN-card op als je die nog niet hebt en check Brightspace voor je introprogramma.</p></div>
      <div class="notif"><strong>Wifi</strong><time>Deze week</time><p>Installeer GetEduroam vóór je eerste les. HANguest is alleen voor bezoekers.</p></div>
      <div class="notif"><strong>Osiris</strong><time>Let op</time><p>Schrijf je in voor blokonderwijs en toetsen. Zonder inschrijving geen toegang tot Brightspace-cursussen.</p></div>
    </section>`
  ),
  "tentamens.html": page(
    "Tentameninformatie",
    "Tentamens",
    `<section class="panel">
      <div class="accent-bar accent-orange"></div>
      <p>Tentamens regel je in Osiris. Digitale kennistoetsen lopen vaak via ANS (+ Schoolyear). Producten lever je soms in via Handin.</p>
      <h3>Korte checklist</h3>
      <ul>
        <li>Inschrijven in Osiris binnen de inschrijfperiode.</li>
        <li>Bekijk toegestane hulpmiddelen en toetsvorm (schriftelijk, ANS, mondeling).</li>
        <li>Neem ID mee. Kom 15 minuten eerder.</li>
        <li>Uitslag en inzage staan in Osiris; bezwaartermijnen staan in de OER.</li>
      </ul>
    </section>`
  ),
  "nieuws.html": page(
    "Nieuws van de HAN",
    "Nieuws",
    `<section class="panel">
      <div class="accent-bar accent-orange"></div>
      <div class="notif"><strong>BSA wordt persoonlijk studieadvies</strong><p>De HAN schaft het bindend studieadvies gefaseerd af en werkt met PSA plus doorstroomnorm. Lees meer op de pagina Studiepunten.</p></div>
      <div class="notif"><strong>Campus leven</strong><p>Kantines, studieplekken en sport: zie Leuke locaties. Officieel nieuws: han.nl/nieuws.</p></div>
    </section>`
  ),
  "opleidingen.html": page(
    "Kies je opleiding",
    "Opleidingen",
    `<section class="panel">
      <div class="accent-bar accent-navy"></div>
      <p>Een selectie van opleidingen op de HAN. Tik door voor een korte intro en welke tools je gebruikt.</p>
      <div class="link-grid">
        <a class="mini-card" href="/pages/opleiding-informatica.html"><strong>Informatica</strong><span>Software, projecten, Nijmegen</span></a>
        <a class="mini-card" href="/pages/opleiding-cmd.html"><strong>CMD</strong><span>Design, media, interactie</span></a>
        <a class="mini-card" href="/pages/opleiding-hbo-ict.html"><strong>HBO-ICT</strong><span>Breed ICT-profiel</span></a>
        <a class="mini-card" href="/pages/opleiding-werktuigbouwkunde.html"><strong>Werktuigbouwkunde</strong><span>Techniek &amp; ontwerp</span></a>
        <a class="mini-card" href="/pages/opleiding-verpleegkunde.html"><strong>Verpleegkunde</strong><span>Zorg op hbo-niveau</span></a>
        <a class="mini-card" href="/pages/opleiding-bedrijfskunde.html"><strong>Bedrijfskunde</strong><span>Organisatie &amp; strategie</span></a>
        <a class="mini-card" href="/pages/opleiding-social-work.html"><strong>Social Work</strong><span>Samenleving &amp; begeleiding</span></a>
      </div>
    </section>`
  ),
};

const opleiding = (file, naam, tekst) => {
  pages[file] = page(
    naam,
    naam,
    `<section class="panel">
      <div class="accent-bar accent-navy"></div>
      <p>${tekst}</p>
      <h3>Wat gebruik je als student?</h3>
      <p>Brightspace (lesstof), Osiris (punten), MyX (rooster), Teams/Outlook (contact), later vaak iSAS (stage) en ANS (toetsen).</p>
      <p><a href="/pages/opleidingen.html">← Alle opleidingen</a></p>
    </section>`
  );
};

opleiding("opleiding-informatica.html", "Informatica", "Je leert software ontwerpen en bouwen in projecten, met veel praktijk op de campus in Nijmegen. Denk aan programmeren, databases, UX en samenwerken in sprints.");
opleiding("opleiding-cmd.html", "Communication & Multimedia Design", "CMD draait om ontwerp, storytelling en digitale producten. Je werkt in studio’s en projectruimtes en presenteert veel.");
opleiding("opleiding-hbo-ict.html", "HBO-ICT", "Een brede ICT-bachelor met uitstroomprofielen (development, infrastructure, business). Eerste jaar orienterend, daarna specialiseren.");
opleiding("opleiding-werktuigbouwkunde.html", "Werktuigbouwkunde", "Machines, constructies en duurzaam ontwerp. Labs en werkplaatsen zitten in de technische gebouwen; softwarelicenties (o.a. SolidWorks) via de HAN.");
opleiding("opleiding-verpleegkunde.html", "Verpleegkunde", "Hbo-verpleegkunde combineert theorie, vaardigheidsonderwijs en stages in de zorg. iSAS of het stagesysteem van je academie is hier essentieel.");
opleiding("opleiding-bedrijfskunde.html", "Bedrijfskunde", "Organisaties begrijpen, verbeteren en leiden. Veel groepsopdrachten, cases en later een stage via het stagesysteem van de academie.");
opleiding("opleiding-social-work.html", "Social Work", "Begeleiden van mensen en groepen in de samenleving. Stages vormen een groot deel van de opleiding; check Insite voor het juiste systeem.");

Object.assign(pages, {
  "navigatie.html": page(
    "Navigatie",
    "Navigatie",
    `<section class="panel">
      <div class="accent-bar accent-navy"></div>
      <p>Vind lokalen, gebouwen en faciliteiten op de Nijmeegse campus.</p>
      <div class="link-grid">
        <a class="mini-card" href="/pages/zoek-lokaal.html"><strong>Zoek een lokaal</strong><span>Bijv. E2.10</span></a>
        <a class="mini-card" href="/pages/gebouwen.html"><strong>Gebouwen</strong><span>B t/m G</span></a>
        <a class="mini-card" href="/pages/faciliteiten.html"><strong>Faciliteiten</strong><span>Kantine, print, bibliotheek</span></a>
        <a class="mini-card" href="/pages/binnen-buiten.html"><strong>Binnen &amp; buiten</strong><span>Routes en entrees</span></a>
        <a class="mini-card" href="/pages/campus.html"><strong>Campusinfo</strong><span>Adres en wifi</span></a>
      </div>
    </section>`
  ),
  "zoek-lokaal.html": page(
    "Zoek een lokaal",
    "Zoek een lokaal",
    `<section class="panel">
      <div class="accent-bar accent-navy"></div>
      <p>Lokalen zijn opgebouwd als <strong>gebouw + verdieping + nummer</strong>. E2.10 = gebouw E, verdieping 2, ruimte 10.</p>
      <form class="search-box" id="room-form">
        <input id="room-q" placeholder="Typ een lokaal, bijv. C1.04" />
        <button type="submit">Zoek</button>
      </form>
      <div class="result-list" id="room-out"></div>
    </section>
    <script type="module">
      const rooms = {
        "e2.10": "Gebouw E, 2e verdieping. Volg Entree E, trap of lift naar 2, gang rechts.",
        "c1.04": "Gebouw C, 1e verdieping. Vanaf de binnenplaats de C-vleugel in.",
        "d0.12": "Gebouw D, begane grond. Dicht bij de doorgang naar B.",
        "g3.21": "Gebouw G, 3e verdieping. Lift in de G-hal.",
        "b1.08": "Gebouw B, 1e verdieping. Richting Kapittelweg-zijde."
      };
      document.getElementById("room-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const q = document.getElementById("room-q").value.trim().toLowerCase().replace(/\\s/g,"");
        const hit = rooms[q];
        document.getElementById("room-out").innerHTML = hit
          ? '<div class="result-item"><span>'+q.toUpperCase()+' — '+hit+'</span></div>'
          : '<div class="result-item"><span>Geen exacte match. Probeer E2.10, C1.04, D0.12, G3.21 of B1.08. Of open Gebouwen.</span></div>';
      });
    </script>`
  ),
  "gebouwen.html": page(
    "Vind een gebouw",
    "Gebouwen",
    `<section class="panel">
      <div class="accent-bar accent-navy"></div>
      <p>Op de luchtfoto van de campus staan de letters op de daken. Tik een gebouw voor de plek.</p>
      <div class="building-map">
        <div class="building">B<small>Westzijde, onderwijs</small></div>
        <div class="building">C<small>Naast B, lokalen</small></div>
        <div class="building">D<small>Centraal blok</small></div>
        <div class="building">E<small>Entree E, hoofdstroom</small></div>
        <div class="building">F<small>Zuidzijde</small></div>
        <div class="building">G<small>Oost, hogere vleugel</small></div>
      </div>
      <p style="margin-top:14px"><a href="/pages/verkennen.html">Open de verken-kaart</a></p>
    </section>`
  ),
  "faciliteiten.html": page(
    "Route naar faciliteiten",
    "Faciliteiten",
    `<section class="panel">
      <div class="accent-bar accent-navy"></div>
      <div class="help-block"><h3>Studiecentrum / bibliotheek</h3><p>Kapittelweg 33. Boeken, stilteruimtes, hulp bij zoeken.</p></div>
      <div class="help-block"><h3>Printen</h3><p>Met je HAN-card bij de multifunctionals in de gangen. Saldo via de printvoorziening op Insite.</p></div>
      <div class="help-block"><h3>ASK HAN-balie</h3><p>Hoofdingang / centrale hal. Voor accounts, kaarten en doorverwijzing.</p></div>
      <div class="help-block"><h3>Kantine</h3><p>Elk gebouw heeft horeca; warme maaltijd vooral Kapittelweg 33.</p></div>
    </section>`
  ),
  "binnen-buiten.html": page(
    "Binnen- en buitennavigatie",
    "Binnen & buiten",
    `<section class="panel">
      <div class="accent-bar accent-navy"></div>
      <p><strong>Buiten:</strong> volg Kapittelweg tot HAN Hoofdingang of loop naar Entree E. Station Heyendaal is een paar minuten lopen.</p>
      <p><strong>Binnen:</strong> gekleurde bewegwijzering en gebouwletters bij trappenhuizen. Verdiepingen zijn 0 (begane grond), 1, 2, 3.</p>
      <p>Bij een ontruiming: volg de groene borden, niet de lift.</p>
    </section>`
  ),
  "locaties.html": page(
    "Leuke locaties",
    "Leuke locaties",
    `<section class="panel">
      <div class="accent-bar accent-pink"></div>
      <div class="link-grid">
        <a class="mini-card" href="/pages/studieplekken.html"><strong>Studieplekken</strong><span>Stil, overleg, bibliotheek</span></a>
        <a class="mini-card" href="/pages/kantine.html"><strong>Kantine &amp; horeca</strong><span>Koffie tot warme lunch</span></a>
        <a class="mini-card" href="/pages/rustruimtes.html"><strong>Rustruimtes</strong><span>Even opladen</span></a>
        <a class="mini-card" href="/pages/ontmoetingsplekken.html"><strong>Ontmoeten</strong><span>Plein en lounges</span></a>
        <a class="mini-card" href="/pages/sport.html"><strong>Sport</strong><span>Sportfaciliteiten HAN</span></a>
      </div>
    </section>`
  ),
  "studieplekken.html": page(
    "Studieplekken",
    "Studieplekken",
    `<section class="panel"><div class="accent-bar accent-pink"></div><p>Het studiecentrum op Kapittelweg 33 is de grootste stille werkplek. In gangen van C, D en G staan lounge-tafels voor groepswerk. In tentamenweken is het druk: kom vroeg of reserveer een overlegruimte via de voorziening van je academie.</p></section>`
  ),
  "kantine.html": page(
    "Kantine & horeca",
    "Kantine",
    `<section class="panel"><div class="accent-bar accent-pink"></div><p>Elk groter gebouw heeft een kantine of coffee corner. De grote kantine aan Kapittelweg 33 biedt warme maaltijden, vegetarische en allergie-opties. Pin is de norm. Tussen 12:00 en 13:00 is het piekdrukte.</p></section>`
  ),
  "rustruimtes.html": page(
    "Rustruimtes",
    "Rustruimtes",
    `<section class="panel"><div class="accent-bar accent-pink"></div><p>Er zijn stille ruimtes en stilte-/gebedsruimtes op de campus. Vraag bij ASK HAN of Insite de actuele locatie, zodat je een rustige plek hebt tussen colleges door. Respecteer stilte en eettijd-vrij beleid in deze kamers.</p></section>`
  ),
  "ontmoetingsplekken.html": page(
    "Ontmoetingsplekken",
    "Ontmoeten",
    `<section class="panel"><div class="accent-bar accent-pink"></div><p>Het binnenplein tussen de gebouwen is de sociale hotspot bij mooi weer. Binnen: zitkuilen en brede trappen bij Entree E. Verenigingen en intro-activiteiten starten vaak daar — ideaal om klasgenoten te vinden.</p></section>`
  ),
  "sport.html": page(
    "Sportfaciliteiten",
    "Sport",
    `<section class="panel"><div class="accent-bar accent-pink"></div><p>HAN Sports en partnerlocaties in Nijmegen/Arnhem bieden lessen, toernooien en soms studententarieven. Info en inschrijving via Insite of de sportpagina van de HAN. Een korte wandeling of ronde om de campus tussendoor helpt ook.</p></section>`
  ),
  "meldingen.html": page(
    "Meldingen",
    "Meldingen",
    `<section class="panel">
      <div class="notif"><strong>2 nieuwe meldingen</strong><time>Nu</time></div>
      <div class="notif"><strong>Roosterupdate</strong><time>09:12</time><p>Les Informatica verplaatst naar C1.04. Check MyX.</p></div>
      <div class="notif"><strong>Brightspace</strong><time>gisteren</time><p>Nieuwe aankondiging in je startmodule. Open Brightspace.</p></div>
    </section>`
  ),
  "profiel.html": page(
    "Profiel",
    "Profiel",
    `<section class="panel">
      <div class="profile-head">
        <div class="avatar">RV</div>
        <div><h2>Student</h2><p>HAN-account · Campus Nijmegen</p></div>
      </div>
      <h3>Snel naar</h3>
      <div class="link-grid">
        <a class="mini-card" href="/pages/outlook.html"><strong>HAN-mail</strong><span>Outlook</span></a>
        <a class="mini-card" href="/pages/osiris.html"><strong>Mijn resultaten</strong><span>Osiris</span></a>
        <a class="mini-card" href="/pages/hulplijnen.html"><strong>Hulp nodig?</strong><span>Hulplijnen</span></a>
      </div>
    </section>`
  ),
  "verkennen.html": page(
    "Start verkennen",
    "Verkennen",
    `<section class="panel">
      <div class="accent-bar accent-navy"></div>
      <p>Begin hier: kies wat je nú nodig hebt. De chatbot rechtsonder beantwoordt gerichte vragen.</p>
      <div class="link-grid">
        <a class="mini-card" href="/pages/tools.html"><strong>1. Tools</strong><span>Brightspace tot MyX</span></a>
        <a class="mini-card" href="/pages/campus.html"><strong>2. Campus</strong><span>Waar ben je</span></a>
        <a class="mini-card" href="/pages/zoek-lokaal.html"><strong>3. Lokaal</strong><span>Eerste les vinden</span></a>
        <a class="mini-card" href="/pages/studiepunten.html"><strong>4. Punten</strong><span>Normen kennen</span></a>
        <a class="mini-card" href="/pages/hulplijnen.html"><strong>5. Hulp</strong><span>Als het tegenzit</span></a>
      </div>
    </section>`
  ),
});

for (const [name, html] of Object.entries(pages)) {
  writeFileSync(join(dir, name), html);
}
console.log(`Wrote ${Object.keys(pages).length} pages`);
