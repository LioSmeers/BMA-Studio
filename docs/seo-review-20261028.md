# SEO-controle BMA Studio — 28 oktober 2026

## Status

De SEO-update is op 28 oktober 2026 gecommit en gepusht naar GitHub Pages (commit `8063687`). De nieuwe homepage-metadata en sitemap zijn live gecontroleerd. Alle 12 canonieke sitemap-URL’s geven HTTP 200 zonder redirect en met een overeenkomende canonical.

Succesvol ingediende sitemap voor Google Search Console: https://bmastudio.be/sitemap.xml

## Uitgevoerd

- Relevante, unieke titels en beschrijvingen voor de indexeerbare pagina’s. Bestaande unieke metadata van privacy-, fout- en bedankpagina behouden; de doorverwijspagina kreeg een eigen beschrijving en titel.
- Open Graph, Twitter en WebPage-gegevens afgestemd op de nieuwe metadata.
- Standaardtaal `nl-BE`, ook na terugschakelen vanuit het Engels. Nieuwe metadata en aangepaste tekst hebben Engelse vertalingen. Het bestaande URL- en canonicalgedrag blijft behouden: er is geen aparte Engelstalige indexeerbare URL.
- Eén H1 op elke inhoudelijke pagina; de noindex-doorverwijzing heeft bewust geen extra H1. De bestaande homepage-slogan en het ontwerp blijven behouden.
- Bestaande zichtbare kerntekst, H1 en toon van de Limburg-pagina behouden. Toegevoegde zoekwoordvragen teruggedraaid; lokale relevantie komt uit de bestaande informatie over Riemst en echte projecten. SEO-focus verwerkt in metadata en technische structuur.
- Verouderde verwijzing naar het Fleur-concept vervangen door het bestaande project Thor Smeers. Directe projectlinks toegevoegd voor Moeskops Gevelwerken, AGV Smeers en Thor Smeers. Sunplanet Heusden-Zolder blijft als bestaand lokaal voorbeeld staan.
- FAQ-schema gelijkgetrokken met de vijf zichtbare vragen en antwoorden; breadcrumb-gegevens toegevoegd. De oorspronkelijke prijsuitleg behouden; de verwijzing naar verouderde pakketten in het gratis-adviesantwoord verwijderd.
- Geen bedragen toegevoegd: de huidige publieke pagina’s werken met een offerte op maat. Oude, ongebruikte pakketprijzen uit JavaScript zijn niet opnieuw als actueel aanbod gepubliceerd. Geen klantresultaten, reviews, adressen of locaties verzonnen.
- Sitemap herbouwd met de 12 bestaande indexeerbare canonieke pagina’s. Verouderde `lastmod`-waarden verwijderd; geen onbetrouwbare wijzigingsdatums opgenomen. Foutpagina, bedankpagina, doorverwijzing, queryparameters en fragmenten uitgesloten.
- `robots.txt` gecontroleerd en ongewijzigd behouden: bestaande regels en `Sitemap: https://bmastudio.be/sitemap.xml` stonden al correct.
- Alle afbeeldingen hebben een alt-attribuut. Lege alt-teksten in de herhaalde logostrook zijn bewust behouden: die kopie staat in een `aria-hidden` en `inert` container.

## Aangepaste bestanden

| Bestand | Titel | Indexeerbaar |
| --- | --- | --- |
| `index.html` | Webdesign Limburg voor bedrijven — BMA Studio | Ja |
| `project-kevin-claes.html` | Website voor Dakwerken Kevin Claes — BMA Studio | Ja |
| `contact.html` | Contact en offerte voor je website — BMA Studio | Ja |
| `over-ons.html` | Webdesignstudio in Riemst: Lio Smeers — BMA Studio | Ja |
| `project-thor-smeers.html` | Webdesign voor Thor Smeers — BMA Studio | Ja |
| `404.html` | Pagina niet gevonden — BMA Studio | Nee |
| `project-moeskops-gevelwerken.html` | Website voor Moeskops Gevelwerken — BMA Studio | Ja |
| `bedankt.html` | Bedankt voor je aanvraag — BMA Studio | Nee |
| `diensten.html` | Webdesign, apps en AI-automatisering — BMA Studio | Ja |
| `project-agv-smeers.html` | Website voor AGV Smeers — BMA Studio | Ja |
| `project-sunplanet-heusden.html` | Website voor Sunplanet Heusden-Zolder — BMA Studio | Ja |
| `privacy.html` | Privacyverklaring — BMA Studio | Ja |
| `portfolio.html` | Webdesignrealisaties voor bedrijven — BMA Studio | Ja |
| `pakketten.html` | Doorverwijzing naar onze diensten — BMA Studio | Nee |
| `diensten/index.html` | Doorverwijzing naar diensten — BMA Studio | Nee |
| `website-laten-maken-limburg/index.html` | Website laten maken in Limburg — BMA Studio | Ja |

De oude URL `pakketten.html` kwam in Search Console nog voor maar gaf live 404. Er is een directe HTML/JavaScript-doorverwijzing toegevoegd naar `/diensten.html#websites`, met de canonical van de dienstenpagina en `noindex`. GitHub Pages ondersteunt in deze repository geen instelbare HTTP-301; deze HTML-doorverwijzing wordt daarom gebruikt. De redirect staat niet in de sitemap.

Verder aangepast: `main.js` (vertalingen en taalcode), `sitemap.xml` (canonieke URL-lijst). Dit rapport is toegevoegd als `docs/seo-review-20261028.md`. Geen CSS, prijzen, contactwerking of chatbotlogica aangepast.

## Controles

- Sitemap parseert als XML met de sitemap-namespace en 12 unieke absolute HTTPS-URL’s.
- Sitemap komt exact overeen met de lokale indexeerbare pagina-inventaris; iedere URL heeft een bestaand HTML-bestand en een overeenkomende canonical.
- Alle 16 publieke HTML-bestanden hebben een unieke titel en description, de juiste taal en een canonical. De vier noindex-uitzonderingen zijn `404.html`, `bedankt.html`, `diensten/index.html` en `pakketten.html`.
- Interne links, lokale fragmentdoelen en afbeeldingspaden gecontroleerd: geen ontbrekende doelen gevonden.
- JSON-LD parseert; de vijf FAQ-antwoorden stemmen overeen met de zichtbare inhoud.
- `node --check main.js` slaagt.
- Limburg-pagina bekeken op desktop (1280 px) en mobiel (390 px). Mobiele documentbreedte en scrollbreedte zijn beide 390 px. Engelse titel, description, H1 en canonical in de browser gecontroleerd.

### Live URL-controle

| URL | HTTP | Redirect | Canonical |
| --- | --- | --- | --- |
| https://bmastudio.be/ | 200 | Geen | Komt overeen |
| https://bmastudio.be/diensten.html | 200 | Geen | Komt overeen |
| https://bmastudio.be/portfolio.html | 200 | Geen | Komt overeen |
| https://bmastudio.be/over-ons.html | 200 | Geen | Komt overeen |
| https://bmastudio.be/contact.html | 200 | Geen | Komt overeen |
| https://bmastudio.be/privacy.html | 200 | Geen | Komt overeen |
| https://bmastudio.be/project-thor-smeers.html | 200 | Geen | Komt overeen |
| https://bmastudio.be/project-moeskops-gevelwerken.html | 200 | Geen | Komt overeen |
| https://bmastudio.be/project-agv-smeers.html | 200 | Geen | Komt overeen |
| https://bmastudio.be/project-kevin-claes.html | 200 | Geen | Komt overeen |
| https://bmastudio.be/project-sunplanet-heusden.html | 200 | Geen | Komt overeen |
| https://bmastudio.be/website-laten-maken-limburg/ | 200 | Geen | Komt overeen |

## Google Search Console — uitvoering via Chrome

- De bestaande geverifieerde domeinproperty `bmastudio.be` gebruikt.
- `https://bmastudio.be/sitemap.xml` opnieuw ingediend en Google bevestigde **Sitemap ingediend**.
- Het sitemaprapport toont **Succesvol**, verzonden en laatst gelezen op **28 oktober 2026**, met **12 ontdekte pagina’s**.
- De live test van de dienstenpagina meldt **URL is beschikbaar voor Google** en **Pagina kan worden geïndexeerd**.
- Na een tijdelijke verbindingsfout met Googles reCAPTCHA-service is de pagina herladen. De volgende indexeringsaanvragen zijn daarna geaccepteerd.
- Negen unieke URL’s zijn bevestigd met **Indexering aangevraagd** en toegevoegd aan de prioriteitscrawlwachtrij.
- Bij de contactpagina meldde Google **Quotum overschreden**: de resterende handmatige aanvragen moeten na de dagelijkse reset opnieuw. Er is geen omweg via een ander account of property gebruikt.

| URL | Laatste vastgestelde actie/status |
| --- | --- |
| https://bmastudio.be/website-laten-maken-limburg/ | Indexering aangevraagd; prioriteitscrawlwachtrij |
| https://bmastudio.be/diensten.html | Indexering aangevraagd; prioriteitscrawlwachtrij |
| https://bmastudio.be/project-kevin-claes.html | Indexering aangevraagd; prioriteitscrawlwachtrij |
| https://bmastudio.be/project-thor-smeers.html | Indexering aangevraagd; prioriteitscrawlwachtrij |
| https://bmastudio.be/project-agv-smeers.html | Indexering aangevraagd; prioriteitscrawlwachtrij |
| https://bmastudio.be/project-moeskops-gevelwerken.html | Indexering aangevraagd; prioriteitscrawlwachtrij |
| https://bmastudio.be/project-sunplanet-heusden.html | Indexering aangevraagd; prioriteitscrawlwachtrij |
| https://bmastudio.be/ | Indexering aangevraagd; prioriteitscrawlwachtrij |
| https://bmastudio.be/portfolio.html | Indexering aangevraagd; prioriteitscrawlwachtrij |
| https://bmastudio.be/contact.html | Reeds geïndexeerd; nieuwe crawl geblokkeerd door dagquotum |
| https://bmastudio.be/over-ons.html | Reeds geïndexeerd; nieuwe crawl niet aangevraagd wegens dagquotum |
| https://bmastudio.be/privacy.html | Gevonden, nog niet geïndexeerd; in sitemap opgenomen; handmatige aanvraag uitgesteld wegens dagquotum |

### Nog te doen na de dagelijkse reset

1. Nieuwe crawl aanvragen voor `https://bmastudio.be/contact.html` (reeds geïndexeerd).
2. Nieuwe crawl aanvragen voor `https://bmastudio.be/over-ons.html` (reeds geïndexeerd).
3. Indexering aanvragen voor `https://bmastudio.be/privacy.html` (gevonden, momenteel niet geïndexeerd).

Alle drie staan al in de succesvol verwerkte sitemap. Deze resterende handmatige stappen blokkeren de automatische ontdekking via de sitemap niet. Een geaccepteerd verzoek is geen bewijs van voltooide indexering of een hogere positie; Google bepaalt dat na verwerking.

`robots.txt` is live beschikbaar met HTTP 200 en `text/plain`; de sitemap met HTTP 200 en `application/xml`. Robots.txt wordt door crawlers gelezen en wordt niet als inhoudelijke pagina ter indexering ingediend.

Schermafbeeldingen van de sitemapbevestiging, aanvraagbevestiging en quotummelding zijn lokaal bewaard buiten de publieke repository.


## Latere opschoning op 28 oktober 2026

De niet-gelinkte noindex-bedankpagina is na verwijdering van het formulier op verzoek opgeruimd. De bovenstaande tabel beschrijft de eerdere SEO-controle; de sitemap en de twee redirects blijven behouden.
