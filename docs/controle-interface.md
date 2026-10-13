# Interfacecontrole BMA Studio — 9 oktober 2026

De aparte pakkettenpagina is verwijderd. De hoofdroute is nu: diensten ontdekken, werk bekijken en een project bespreken. De bestaande branding, projecten, reviews, prijzen en voorwaarden zijn behouden.

## 1. Home en navigatie — goed

Het hoofdmenu toont Home, Diensten, Portfolio, Over ons en Contact. Het bestaande klantenportaal blijft bereikbaar. De routekaarten op Home sluiten hierbij aan; geen knop verwijst naar de verwijderde pagina. Op mobiel sluiten de menuknop, Escape en een gekozen link het menu. Verborgen links krijgen geen toetsenbordfocus. De actieve pagina heeft `aria-current`.

![Hoofdmenu op desktop](/Users/liosmeers/.codex/visualizations/2026/10/09/01a120fa-be11-7421-a646-c0e1ea1cb9c0/website-update/interface-check/01-home-desktop.jpg)
![Hoofdmenu op mobiel](/Users/liosmeers/.codex/visualizations/2026/10/09/01a120fa-be11-7421-a646-c0e1ea1cb9c0/website-update/interface-check/04-menu-mobile.jpg)

## 2. Diensten en websiteprijzen — goed

De kortere titel en vijf directe dienstlinks maken het aanbod sneller scanbaar. Iedere dienst heeft concrete voorbeelden en een contactknop. Websiteprijzen staan in een native uitklapbaar onderdeel. De bestaande prijstabel, FAQ en contractuele voorwaarden zijn letterlijk overgenomen. Een prijslink opent dat onderdeel automatisch. Eenmalig/abonnement wisselen en voorinvulling van de gekozen formule zijn gecontroleerd. Op 320 px staan de prijstegels onder elkaar en blijft de pagina binnen de schermbreedte.

![Diensten met directe links](/Users/liosmeers/.codex/visualizations/2026/10/09/01a120fa-be11-7421-a646-c0e1ea1cb9c0/website-update/interface-check/02-diensten-overzicht.jpg)
![Optionele websiteprijzen](/Users/liosmeers/.codex/visualizations/2026/10/09/01a120fa-be11-7421-a646-c0e1ea1cb9c0/website-update/interface-check/03-websiteprijzen-desktop.jpg)
![Websiteprijzen op 320 px](/Users/liosmeers/.codex/visualizations/2026/10/09/01a120fa-be11-7421-a646-c0e1ea1cb9c0/website-update/interface-check/06-websiteprijzen-mobile.jpg)

## 3. Portfolio, Over ons en webdesign Limburg — goed

Kortere koppen houden de uitleg en knoppen op mobiel sneller in beeld. De oorspronkelijke projecten en het persoonlijke verhaal van Lio blijven staan. Portfolio leidt naar Diensten of Contact. De Limburg-pagina blijft gericht op websites; de adviesknop selecteert de dienst Websites en verplicht geen specifieke formule.

![Portfolio op mobiel](/Users/liosmeers/.codex/visualizations/2026/10/09/01a120fa-be11-7421-a646-c0e1ea1cb9c0/website-update/interface-check/07-portfolio-mobile.jpg)
![Over ons op mobiel](/Users/liosmeers/.codex/visualizations/2026/10/09/01a120fa-be11-7421-a646-c0e1ea1cb9c0/website-update/interface-check/08-over-ons-mobile.jpg)

## 4. Contact — goed

De dienstkeuze werkt. Alleen bij Websites verschijnt een optionele websiteformule met korte namen en een link naar prijzen en afspraken. De oorspronkelijke gegevens voor verzending en prijsvoorinvulling zijn behouden. Bij een onvolledige aanvraag zijn fouten zichtbaar en gekoppeld aan de invoervelden. De focus gaat naar de eerste fout. Automatisch verspringen naar het berichtveld is verwijderd.

![Foutmelding en focus in het formulier](/Users/liosmeers/.codex/visualizations/2026/10/09/01a120fa-be11-7421-a646-c0e1ea1cb9c0/website-update/interface-check/05-contact-mobile.jpg)

## Controle en grenzen

- 15 HTML-pagina’s en 338 lokale links gecontroleerd; geen verwijzingen naar `pakketten.html` en geen ontbrekende lokale ankertjes.
- IDs, JSON-LD, sitemap en JavaScript-syntax gecontroleerd.
- Mobiele schermen van 320 en 390 px en desktop van 1440 px bekeken. Nieuwe interfacekoppen, prijsdetails en labels hebben Engelse vertalingen; de taalwisseling is gecontroleerd.
- De oude pakkettenroute heeft een doorstuurregel in de bestaande 404-pagina. Het script is getest; de werking op de live hosting is niet getest.
- Formulierkeuzes, voorinvulling en validatie zijn getest. Er is geen echte aanvraag verzonden, dus e-mailbezorging is niet opnieuw getest.
- Dit is geen volledige WCAG-certificering of externe audit van de klantprojecten, het klantenportaal en gekoppelde websites.

De wijzigingen zijn lokaal en nog niet gepubliceerd.
