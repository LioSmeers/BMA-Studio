const packageDetails = {
	"onepage-onetime": {
		title: "BMA Visibility Sprint - One-page Website (eenmalig)",
		price: "€399 eenmalig",
		description:
			"Een professionele one-page website met contactformulier en Google Maps. Kies voor een eenmalige aankoop of start zonder opstartkost met een abonnement.",
		benefits: [
			"1 jaar hosting en .be-domeinnaam inbegrepen",
			"Geen onderhoud",
			"Eigendom vanaf oplevering",
			"Vanaf jaar 2: €59/jaar",
		],
		inquiryMessage:
			"Hallo BMA Studio,\n\nIk wil graag een offerte aanvragen voor BMA Visibility Sprint - One-page Website van €399 eenmalig. Ik lever zelf teksten en foto's aan en wil graag een contactformulier en Google Maps.\n\nAlvast bedankt!",
	},
	"onepage-subscription": {
		title: "BMA Visibility Sprint - One-page Website (abonnement)",
		price: "€0 opstart + €59/mnd",
		description:
			"Professionele one-page met hosting, domeinnaam en klein onderhoud via 1 aanvraag per maand.",
		benefits: [
			"Minimum 12 maanden",
			"Hosting en .be-domeinnaam zolang abonnement actief is",
			"Eigendom na betaling van 12 maanden",
			"Klein · 1 aanvraag/mnd",
			"Minimum 12 maanden · totale minimumprijs €708",
			"Na de eerste 12 maanden maandelijks opzegbaar met één maand opzegtermijn",
		],
		inquiryMessage:
			"Hallo BMA Studio,\n\nIk wil graag een offerte aanvragen voor BMA Visibility Sprint - One-page Website met abonnement: €0 opstart + €59 per maand, minimum 12 maanden.\n\nAlvast bedankt!",
	},
	business: {
		title: "Business Website",
		badge: "Aanbevolen voor lokale bedrijven",
		price: "€699 opstartkost + €59/mnd",
		description:
			"Voor lokale bedrijven die meerdere pagina's, structuurhulp en gemiddeld maandelijks onderhoud willen.",
		benefits: [
			"Totale kost bij 12 maanden: €1.407",
			"3 tot 4 pagina's",
			"Hulp met teksten en structuur",
			"Contactformulier en Google Maps",
			"2 revisierondes",
			"Hosting en .be-domeinnaam zolang het abonnement actief is",
			"Gemiddeld · 2 aanvragen/mnd",
			"Eigendom vanaf oplevering",
			"Geen minimumlooptijd",
			"Maandelijks opzegbaar met één maand opzegtermijn",
		],
		inquiryMessage:
			"Hallo BMA Studio,\n\nIk wil graag een offerte aanvragen voor de Business Website van €699 opstartkost + €59 per maand. Ik wil graag 3 tot 4 pagina's, hulp met teksten en structuur, een contactformulier, Google Maps, hosting, domeinnaam en gemiddeld onderhoud met 2 aanvragen per maand.\n\nAlvast bedankt!",
	},
	content: {
		title: "Website + Content",
		price: "€899 opstartkost + €149/mnd",
		description:
			"Voor ondernemers die naast hun website ook maandelijks korte socialmediavideo's willen publiceren.",
		benefits: [
			"Totale kost bij 12 maanden: €2.687",
			"4 tot 5 pagina's",
			"Alles uit Business",
			"Groot · 4 aanvragen/mnd",
			"2 korte socialmediavideo's per maand",
			"BMA verzorgt montage; klant levert beeldmateriaal",
			"1 correctieronde per video",
			"Eigendom vanaf oplevering",
			"Geen minimumlooptijd",
			"Maandelijks opzegbaar met één maand opzegtermijn",
		],
		inquiryMessage:
			"Hallo BMA Studio,\n\nIk wil graag een offerte aanvragen voor Website + Content van €899 opstartkost + €149 per maand. Ik wil graag 4 tot 5 pagina's, groot onderhoud met 4 aanvragen per maand en 2 korte socialmediavideo's per maand waarbij ik het beeldmateriaal aanlever.\n\nAlvast bedankt!",
	},
	prototype: {
		title: "Gratis websiteprototype",
		description:
			"Vrijblijvend eerste prototype voor een nieuwe website.",
		benefits: ["Gratis aanvraag", "Eerste visuele richting", "Vrijblijvend vervolg"],
		inquiryMessage:
			"Hallo BMA Studio,\n\nIk wil graag een gratis prototype aanvragen voor mijn website. Ik vertel graag kort wat mijn bedrijf doet en welke richting ik online uit wil.\n\nAlvast bedankt!",
	},
};

const englishPackageDetails = {
	"onepage-onetime": {
		title: "BMA Visibility Sprint - One-page Website (one-time)",
		price: "€399 one-time",
		description:
			"A professional one-page website with a contact form and Google Maps. Choose a one-time purchase or start without a setup fee with a subscription.",
		benefits: [
			"1 year of hosting and .be domain name included",
			"No maintenance",
			"Ownership from delivery",
			"From year 2: €59/year",
		],
		inquiryMessage:
			"Hello BMA Studio,\n\nI would like to request a quote for BMA Visibility Sprint - One-page Website at €399 one-time. I will provide the text and photos myself and would like a contact form and Google Maps.\n\nThank you!",
	},
	"onepage-subscription": {
		title: "BMA Visibility Sprint - One-page Website (subscription)",
		price: "€0 setup + €59/month",
		description:
			"A professional one-page website with hosting, domain name and small maintenance through 1 request per month.",
		benefits: [
			"Minimum 12 months",
			"Hosting and .be domain name while the subscription is active",
			"Ownership after 12 months have been paid",
			"Small · 1 request/month",
			"Minimum 12 months · total minimum price €708",
			"After the first 12 months, cancellable monthly with one month's notice",
		],
		inquiryMessage:
			"Hello BMA Studio,\n\nI would like to request a quote for BMA Visibility Sprint - One-page Website subscription: €0 setup + €59 per month, minimum 12 months.\n\nThank you!",
	},
	business: {
		title: "Business Website",
		badge: "Recommended for local businesses",
		price: "€699 setup fee + €59/month",
		description:
			"For local businesses that want multiple pages, help with structure and medium monthly maintenance.",
		benefits: [
			"Total cost over 12 months: €1,407",
			"3 to 4 pages",
			"Help with text and structure",
			"Contact form and Google Maps",
			"2 revision rounds",
			"Hosting and .be domain name while the subscription is active",
			"Medium · 2 requests/month",
			"Ownership from delivery",
			"No minimum term",
			"Cancellable monthly with one month's notice",
		],
		inquiryMessage:
			"Hello BMA Studio,\n\nI would like to request a quote for the Business Website at €699 setup fee + €59 per month. I would like 3 to 4 pages, help with text and structure, a contact form, Google Maps, hosting, domain name and medium maintenance with 2 requests per month.\n\nThank you!",
	},
	content: {
		title: "Website + Content",
		price: "€899 setup fee + €149/month",
		description:
			"For business owners who want to publish short monthly social media videos alongside their website.",
		benefits: [
			"Total cost over 12 months: €2,687",
			"4 to 5 pages",
			"Everything from Business",
			"Large · 4 requests/month",
			"2 short social media videos per month",
			"BMA handles editing; client provides footage",
			"1 correction round per video",
			"Ownership from delivery",
			"No minimum term",
			"Cancellable monthly with one month's notice",
		],
		inquiryMessage:
			"Hello BMA Studio,\n\nI would like to request a quote for Website + Content at €899 setup fee + €149 per month. I would like 4 to 5 pages, large maintenance with 4 requests per month and 2 short social media videos per month, with footage provided by me.\n\nThank you!",
	},
	prototype: {
		title: "Free website prototype",
		description:
			"No-obligation first prototype for a new website.",
		benefits: ["Free request", "First visual direction", "No-obligation next step"],
		inquiryMessage:
			"Hello BMA Studio,\n\nI would like to request a free prototype for my website. I can briefly explain what my business does and which online direction I have in mind.\n\nThank you!",
	},
};

const portfolioProjectDetails = {
	moeskops: {
		number: "01",
		title: "Moeskops Gevelwerken — Business Website",
		badges: [{ label: "Klantproject", className: "portfolio-badge-client" }],
		summary:
			"Website voor een ervaren vakman in voegwerken en gevelrenovatie, gericht op vertrouwen en offerteaanvragen.",
		caption: "Live preview van de klantwebsite.",
		previewUrl: "https://moeskopsgevelwerken.be/",
		previewTitle: "Live preview van Moeskops Gevelwerken",
		link: "https://moeskopsgevelwerken.be/",
		linkLabel: "Bekijk Moeskops Gevelwerken",
		tags: ["Klantwebsite", "Live website"],
		details: [
			["Projecttype", "Klantproject"],
			["Sector", "Voegwerken en gevelrenovatie"],
			["Dienst", "Business Website"],
			["Uitdaging", "Een ervaren vakman online betrouwbaar positioneren en bezoekers vlot naar een offerteaanvraag sturen."],
			["Oplossing", "Een duidelijke bedrijfswebsite met diensten, bewijs van vakmanschap en contactmomenten op logische plaatsen."],
			["Belangrijkste functies", "Dienstenoverzicht, vertrouwen, offertefocus en mobiele contactknoppen."],
		],
	},
	gate26: {
		number: "02",
		title: "Gate26 - Garage & Detailing",
		badges: [{ label: "Klantproject", className: "portfolio-badge-client" }],
		summary:
			"One-page klantwebsite voor een garage en detailingzaak, met focus op diensten, realisaties en afspraken.",
		caption: "Live preview van de klantwebsite.",
		previewUrl: "https://gate26.be/",
		previewTitle: "Live preview van Gate26",
		link: "https://gate26.be/",
		linkLabel: "Bekijk Gate26",
		tags: ["Klantwebsite", "Live website", "One-page website"],
		details: [
			["Projecttype", "Klantproject"],
			["Sector", "Garage, detailing en kleine herstellingen"],
			["Dienst", "One-page website"],
			["Uitdaging", "Een garage duidelijk voorstellen met onderhoud, herstellingen, poetsbeurten en realisaties op een compacte pagina."],
			["Oplossing", "Een one-page website met sterke eerste indruk, duidelijke dienstenblokken, realisaties, aanpak en afspraakmomenten."],
			["Belangrijkste functies", "Live one-page structuur, dienstenoverzicht, realisaties, filterbare werkbeelden en afspraakformulier."],
		],
	},
	vergoot: {
		number: "03",
		title: "Vergoot - Business Website",
		badges: [{ label: "Conceptwebsite", className: "portfolio-badge-concept" }],
		summary:
			"Conceptwebsite voor een lokale dakwerker, bedoeld om vertrouwen, diensten en offerte-aanvragen duidelijk te tonen.",
		image: "./public/portfolio-vergoot-result.png",
		imageAlt: "Hero screenshot van Vergoot dakwerken conceptwebsite",
		imageWidth: 1896,
		imageHeight: 990,
		caption: "Screenshot van de tijdelijke demonstratieomgeving.",
		hideModalMedia: true,
		link: "https://liosmeers.github.io/dakwerken-vergoot/",
		linkLabel: "Bekijk Vergoot",
		tags: ["Concept", "Tijdelijke demo via GitHub Pages"],
		details: [
			["Projecttype", "Conceptwebsite"],
			["Sector", "Dakwerken en renovatie"],
			["Dienst", "Business Website"],
			["Uitdaging", "Een dienstverlener snel betrouwbaar laten overkomen en bezoekers naar een aanvraag sturen."],
			["Oplossing", "Een duidelijke bedrijfswebsite met diensten, vertrouwen en contactmomenten op logische plaatsen."],
			["Belangrijkste functies", "Dienstenoverzicht, offertefocus, mobiele opbouw en contactknoppen."],
		],
	},
	fleur: {
		number: "04",
		title: "Fleur - Website + Content",
		badges: [{ label: "Conceptwebsite", className: "portfolio-badge-concept" }],
		summary:
			"Conceptwebsite voor een beautyzaak, bedoeld om een warme stijl, diensten en contentmogelijkheden te tonen.",
		image: "./public/portfolio-fleura-result.png",
		imageAlt: "Hero screenshot van Fleur beauty clinic conceptwebsite",
		imageWidth: 1901,
		imageHeight: 987,
		caption: "Conceptwebsite in een tijdelijke demonstratieomgeving.",
		hideModalMedia: true,
		link: "https://liosmeers.github.io/Beauty-clinic-fleura/",
		linkLabel: "Bekijk Fleur",
		tags: ["Concept", "Tijdelijke demo via GitHub Pages"],
		details: [
			["Projecttype", "Conceptwebsite"],
			["Sector", "Beauty en verzorging"],
			["Dienst", "Website + Content"],
			["Uitdaging", "Een visuele stijl tonen die zacht, professioneel en overzichtelijk blijft."],
			["Oplossing", "Een meerlagige conceptsite met diensten, sfeer, navigatie en duidelijke contactmomenten."],
			["Belangrijkste functies", "Meerdere pagina's, dienstpresentatie, visuele sfeer en call-to-action."],
		],
	},
	nova: {
		number: "05",
		title: "Nova - BMA Visibility Sprint - One-page Website",
		badges: [{ label: "Conceptwebsite", className: "portfolio-badge-concept" }],
		summary:
			"Compacte conceptwebsite, bedoeld om te tonen hoe een eenvoudige eerste online basis eruit kan zien.",
		image: "./public/portfolio-nova-result.png",
		imageAlt: "Hero screenshot van de Nova basis conceptwebsite",
		imageWidth: 1917,
		imageHeight: 982,
		caption: "Conceptwebsite in een tijdelijke demonstratieomgeving.",
		hideModalMedia: true,
		link: "https://liosmeers.github.io/Nova-website/",
		linkLabel: "Bekijk Nova",
		tags: ["Concept", "Tijdelijke demo via GitHub Pages"],
		details: [
			["Projecttype", "Conceptwebsite"],
			["Sector", "Kleine zelfstandige"],
			["Dienst", "BMA Visibility Sprint - One-page Website"],
			["Uitdaging", "Met weinig pagina's toch snel duidelijk maken wat het bedrijf doet."],
			["Oplossing", "Een compacte pagina met een sterke eerste indruk, kerninformatie en directe call-to-action."],
			["Belangrijkste functies", "Hero, korte uitleg, duidelijke CTA en mobiele basisstructuur."],
		],
	},
	walk: {
		number: "06",
		title: "Walk Brussels",
		badges: [
			{ label: "UX-project", className: "portfolio-badge-ux" },
			{ label: "Schoolproject", className: "portfolio-badge-school" },
		],
		summary:
			"UX- en schoolproject waarin een bestaande rapportageflow mobieler, korter en duidelijker werd uitgewerkt.",
		image: "./public/portfolio-walk-brussels-result.png",
		imageAlt: "Mobiele Walk Brussels registratieflow",
		imageWidth: 486,
		imageHeight: 987,
		caption: "UX- en schoolproject in een tijdelijke demonstratieomgeving.",
		hideModalMedia: true,
		link: "https://ehb-mct.github.io/fullprojects2-walk-walk4/",
		linkLabel: "Bekijk Walk Brussels",
		tags: ["Mobiele app-flow", "Tijdelijke demo via GitHub Pages"],
		details: [
			["Projecttype", "UX-project en schoolproject"],
			["Sector", "Mobiliteit en stadsbeleving"],
			["Dienst", "UX-flow en digitaal ontwerp"],
			["Uitdaging", "Een rapportageflow duidelijker maken op kleine schermen."],
			["Oplossing", "Een mobiele stappenstructuur met korte schermen en duidelijke keuzes per stap."],
			["Belangrijkste functies", "Mobiele flow, stapsgewijze invoer, overzichtelijke schermen en visuele feedback."],
		],
	},
};

const translations = {
	"Home": "Home",
	"Pakketten": "Packages",
	"Diensten": "Services",
	"Portfolio": "Portfolio",
	"Over ons": "About us",
	"Contact": "Contact",
	"Privacy": "Privacy",
	"LinkedIn": "LinkedIn",
	"BMA Studio": "BMA Studio",
	"★": "★",
	"BMA Studio logo": "BMA Studio logo",
	"Ga naar de homepage": "Go to the homepage",
	"Hoofdnavigatie": "Main navigation",
	"Open menu": "Open menu",
	"Voordelen": "Benefits",
	"Taal kiezen": "Choose language",
	"Snelle zekerheden": "Quick assurances",
	"Belangrijkste voordelen": "Key benefits",
	"Trustpilot reviews": "Trustpilot reviews",
	"Trustpilot review van Manu Moeskops: Perfecte samenwerking gehad met Berend.": "Trustpilot review by Manu Moeskops: Perfect collaboration with Berend.",
	"Trustpilot review van azdin bhdz: Ils ont fait un tres bon site.": "Trustpilot review by azdin bhdz: They made a very good site.",
	"Trustpilot review van berendluypaert: Perfect!": "Trustpilot review by berendluypaert: Perfect!",
	"Trustpilot review van Noemi Hurkens: Mooie website gemaakt": "Trustpilot review by Noemi Hurkens: Beautiful website made",
	"Trustpilot review van robyn atkins: professionele en vlotte service": "Trustpilot review by robyn atkins: professional and smooth service",
	"Vraag info aan": "Request info",
	"Bekijk pakketten": "View packages",
	"Bekijk voorbeelden": "View examples",
	"Vraag advies": "Ask for advice",
	"Bekijk diensten": "View services",
	"Bekijk portfolio": "View portfolio",
	"Maak kennis": "Get to know us",
	"Bekijk werk": "View work",
	"Naar pakketten": "Go to packages",
	"Terug naar home": "Back to home",
	"Contacteer BMA Studio": "Contact BMA Studio",
	"Bespreek je project": "Discuss your project",
	"Vergelijk pakketten": "Compare packages",
	"Meer info": "More info",
	"Build • Maintain • Attract": "Build • Maintain • Attract",
	"BMA Studio · Lio Smeers. Alle rechten voorbehouden.": "BMA Studio · Lio Smeers. All rights reserved.",
	"Ondernemingsnummer: 1040.082.401": "Enterprise number: 1040.082.401",
	"De online basis voor lokale bedrijven.": "The online foundation for local businesses.",
	"BMA Studio helpt lokale ondernemingen met duidelijke websites, maandelijks onderhoud en social media content die vertrouwen opbouwen en klanten sneller laten contact opnemen.": "BMA Studio helps local businesses with clear websites, monthly maintenance and social media content that builds trust and makes it easier for customers to get in touch.",
	"BMA Studio helpt lokale ondernemingen met duidelijke websites, maandelijks onderhoud en social media content die vertrouwen opbouwen en klanten sneller laten contact opnemen. Je kan ook gratis een websiteanalyse of eerste websiteprototype aanvragen.": "BMA Studio helps local businesses with clear websites, monthly maintenance and social media content that builds trust and makes it easier for customers to get in touch. You can also request a free website analysis or first website prototype.",
	"Je kan ook gratis een websiteanalyse of eerste websiteprototype aanvragen.": "You can also request a free website analysis or first website prototype.",
	"Gratis analyse aanvragen": "Request a free analysis",
	"Persoonlijk contact": "Personal contact",
	"Antwoord binnen dezelfde dag": "Reply the same day",
	"Websites voor lokale ondernemers": "Websites for local business owners",
	"Basis": "Foundation",
	"Gebouwd voor ondernemers die vooruit willen.": "Built for business owners who want to move forward.",
	"We maken websites die duidelijk zijn, snel laden en meteen tonen waarom klanten voor jou moeten kiezen.": "We build websites that are clear, fast and immediately show why customers should choose you.",
	"Online": "Online",
	"100% mobile-first": "100% mobile-first",
	"Voor klanten die zoeken, vergelijken en boeken via hun smartphone.": "For customers who search, compare and book on their smartphone.",
	"Website vanaf €399": "Website from €399",
	"Betaal eenmalig of start zonder opstartkost voor €59/mnd, inclusief hosting, .be-domeinnaam en onderhoud.": "Pay once or start without a setup fee for €59/month, including hosting, a .be domain name and maintenance.",
	"Voor lokale zaken": "For local businesses",
	"Vakmannen, horeca, salons, handelszaken, trainers en creatieve ondernemers.": "Tradespeople, hospitality, salons, shops, trainers and creative entrepreneurs.",
	"Werkwijze": "Approach",
	"Strak, persoonlijk en zonder gedoe.": "Clean, personal and hassle-free.",
	"We denken mee over je aanbod, houden je website netjes bij en reageren dezelfde dag op je aanvraag.": "We think along with your offer, keep your website tidy and reply to your request the same day.",
	"Recent werk in één oogopslag.": "Recent work at a glance.",
	"Gratis start": "Free start",
	"Vraag een gratis websiteanalyse of prototype aan.": "Request a free website analysis or prototype.",
	"We bekijken je huidige online basis of maken een eerste richting voor een nieuwe website, zodat je meteen ziet wat beter kan.": "We review your current online foundation or create a first direction for a new website, so you immediately see what can improve.",
	"Bekijk gratis opties": "View free options",
	"Portfolio previews": "Portfolio previews",
	"Live preview van Moeskops Gevelwerken": "Live preview of Moeskops Gevelwerken",
	"Moeskops Gevelwerken": "Moeskops Gevelwerken",
	"Website voor een ervaren vakman in voegwerken en gevelrenovatie, gericht op vertrouwen en offerteaanvragen.": "Website for an experienced craftsman in pointing and facade renovation, focused on trust and quote requests.",
	"Live preview van Gate26": "Live preview of Gate26",
	"Gate26 - Garage & Detailing": "Gate26 - Garage & Detailing",
	"One-page klantwebsite voor een garage en detailingzaak, met focus op diensten, realisaties en afspraken.": "One-page client website for a garage and detailing business, focused on services, work examples and appointments.",
	"Bekijk details": "View details",
	"Live preview van de Vergoot conceptwebsite": "Live preview of the Vergoot concept website",
	"Concept": "Concept",
	"Conceptwebsite": "Concept website",
	"Vergoot - Business Website": "Vergoot - Business Website",
	"Conceptwebsite voor een lokale dakwerker met duidelijke diensten, vertrouwen en offertefocus.": "Concept website for a local roofer with clear services, trust and quote focus.",
	"Conceptwebsite voor een lokale dakwerker, bedoeld om vertrouwen, diensten en offerte-aanvragen duidelijk te tonen.": "Concept website for a local roofer, designed to clearly show trust, services and quote requests.",
	"Bekijk project": "View project",
	"Live preview van de Fleur conceptwebsite": "Live preview of the Fleur concept website",
	"Fleur - Website + Content": "Fleur - Website + Content",
	"Conceptwebsite voor een beautyzaak met een warme stijl, diensten en contentmogelijkheden.": "Concept website for a beauty business with a warm style, services and content possibilities.",
	"Conceptwebsite voor een beautyzaak, bedoeld om een warme stijl, diensten en contentmogelijkheden te tonen.": "Concept website for a beauty business, designed to show a warm style, services and content possibilities.",
	"Live preview van de Nova conceptwebsite": "Live preview of the Nova concept website",
	"Nova - BMA Visibility Sprint - One-page Website": "Nova - BMA Visibility Sprint - One-page Website",
	"Compacte conceptwebsite, bedoeld om te tonen hoe een eenvoudige eerste online basis eruit kan zien.": "Compact concept website, designed to show what a simple first online foundation can look like.",
	"Bekijk alle projecten": "View all projects",
	"Kies je route": "Choose your route",
	"Ga meteen naar wat je zoekt.": "Go straight to what you need.",
	"Pakketten vergelijken": "Compare packages",
	"Bekijk snel welke websiteformule past bij je bedrijf, budget en groeifase.": "Quickly see which website formula fits your business, budget and growth stage.",
	"Diensten begrijpen": "Understand the services",
	"Lees hoe websites, onderhoud en content samen een sterke online basis vormen.": "Read how websites, maintenance and content work together to build a strong online foundation.",
	"Voorbeelden bekijken": "View examples",
	"Bekijk concrete projecten en voorbeeldsites op de aparte portfoliopagina.": "View concrete projects and example sites on the separate portfolio page.",
	"Volgende stap": "Next step",
	"Begin bij pakketten, eindig met een gerichte aanvraag.": "Start with the packages, end with a focused request.",
	"Vergelijk eerst de formules en stuur daarna gericht door wat je bedrijf nodig heeft.": "Compare the formulas first, then send a focused request with what your business needs.",
	"Review us on Trustpilot": "Review us on Trustpilot",
	"Kies sneller wat bij je bedrijf past.": "Choose what fits your business faster.",
	"Drie duidelijke keuzes, van een compacte one-page tot een website met maandelijkse content.": "Three clear choices, from a compact one-page website to a website with monthly content.",
	"Keuzehulp": "Decision guide",
	"BMA Visibility Sprint - One-page Website als je snel professioneel online wil met één duidelijke pagina.": "BMA Visibility Sprint - One-page Website if you want to get online professionally with one clear page.",
	"Business Website als je meerdere pagina's, structuurhulp en klein onderhoud nodig hebt.": "Business Website if you need multiple pages, help with structure and small maintenance.",
	"Website + Content als je ook maandelijks zichtbaar wil blijven met korte video's.": "Website + Content if you also want to stay visible every month with short videos.",
	"Vergelijk": "Compare",
	"Drie duidelijke keuzes.": "Three clear choices.",
	"Een professionele one-page website met contactformulier en Google Maps. Kies voor een eenmalige aankoop of start zonder opstartkost met een abonnement.": "A professional one-page website with a contact form and Google Maps. Choose a one-time purchase or start without a setup fee with a subscription.",
	"In beide formules inbegrepen:": "Included in both formulas:",
	"EENMALIG": "ONE-TIME",
	"BMA Visibility Sprint - One-page Website": "BMA Visibility Sprint - One-page Website",
	"ABONNEMENT": "SUBSCRIPTION",
	"Beste als je website weinig verandert en je liever één keer betaalt.": "Best if your website rarely changes and you prefer to pay once.",
	"Beste als je zonder opstartkost wilt beginnen en kleine wijzigingen door BMA wilt laten uitvoeren.": "Best if you want to start without a setup fee and have BMA handle small changes.",
	"Voor lokale bedrijven met meerdere diensten, projecten of belangrijke informatie.": "For local businesses with multiple services, projects or important information.",
	"Voor bedrijven die hun website én sociale media maandelijks actief willen houden.": "For businesses that want to keep both their website and social media active every month.",
	"€0 opstart + €59/mnd": "€0 setup + €59/month",
	"Professionele one-page website": "Professional one-page website",
	"1 jaar hosting en .be-domeinnaam inbegrepen": "1 year of hosting and .be domain name included",
	"Geen onderhoud": "No maintenance",
	"Vanaf jaar 2: €59/jaar": "From year 2: €59/year",
	"Extra aanpassingen: €50/uur na akkoord": "Extra changes: €50/hour after approval",
	"Minimum 12 maanden": "Minimum 12 months",
	"Minimum 12 maanden · totale minimumprijs €708": "Minimum 12 months · total minimum price €708",
	"Klein · 1 aanvraag/mnd": "Small · 1 request/month",
	"Gemiddeld · 2 aanvragen/mnd": "Medium · 2 requests/month",
	"Groot · 4 aanvragen/mnd": "Large · 4 requests/month",
	"Hosting en .be-domeinnaam zolang abonnement actief is": "Hosting and .be domain name while the subscription is active",
	"Na betaling van 12 maanden": "After 12 months have been paid",
	"Na de eerste 12 maanden maandelijks opzegbaar met één maand opzegtermijn": "After the first 12 months, cancellable monthly with one month's notice",
	"Maandelijks opzegbaar met één maand opzegtermijn": "Cancellable monthly with one month's notice",
	"Vraag One-page eenmalig aan": "Request One-page one-time",
	"Vraag One-page abonnement aan": "Request One-page subscription",
	"€399 eenmalig": "€399 one-time",
	"Vraag een gratis prototype aan": "Request a free prototype",
	"Gratis websiteprototype": "Free website prototype",
	"Klant levert teksten en foto's aan": "Client provides text and photos",
	"1 revisieronde": "1 revision round",
	"2 revisierondes": "2 revision rounds",
	"Business Website": "Business Website",
	"Aanbevolen voor lokale bedrijven": "Recommended for local businesses",
	"€699 opstartkost + €59/mnd": "€699 setup fee + €59/month",
	"Totale kost bij 12 maanden: €1.407": "Total cost over 12 months: €1,407",
	"Looptijd": "Term",
	"Onderhoud": "Maintenance",
	"Eigendom": "Ownership",
	"Geen abonnement": "No subscription",
	"Geen minimumlooptijd": "No minimum term",
	"Vanaf oplevering": "From delivery",
	"Hulp met teksten en structuur": "Help with text and structure",
	"Contactformulier": "Contact form",
	"3 tot 4 pagina's": "3 to 4 pages",
	"Contactformulier en Google Maps": "Contact form and Google Maps",
	"Hosting en .be-domeinnaam zolang het abonnement actief is": "Hosting and .be domain name while the subscription is active",
	"Vraag Business Website aan": "Request Business Website",
	"Website + Content": "Website + Content",
	"€899 opstartkost + €149/mnd": "€899 setup fee + €149/month",
	"Totale kost bij 12 maanden: €2.687": "Total cost over 12 months: €2,687",
	"4 tot 5 pagina's": "4 to 5 pages",
	"Alles uit Business": "Everything from Business",
	"2 korte socialmediavideo's per maand": "2 short social media videos per month",
	"BMA verzorgt montage; klant levert beeldmateriaal": "BMA handles editing; client provides footage",
	"1 correctieronde per video": "1 correction round per video",
	"Vraag Website + Content aan": "Request Website + Content",
	"FAQ": "FAQ",
	"Veelgestelde vragen over de pakketten": "Frequently asked questions about the packages",
	"Wanneer krijg ik een eerste versie?": "When will I receive a first version?",
	"Na je aanvraag bepalen we samen de scope en timing. De termijn start zodra alle nodige teksten, foto's en informatie ontvangen zijn. Meestal sturen we binnen 2 tot 3 werkdagen een eerste prototype. Daarna hangt de oplevertijd af van de omvang van het project en hoe snel feedback wordt gegeven. De definitieve website staat meestal binnen 5 tot 7 werkdagen klaar.": "After your request, we define the scope and timing together. The timeline starts once all required text, photos and information have been received. Usually, we send a first prototype within 2 to 3 business days. After that, delivery depends on the size of the project and how quickly feedback is provided. The final website is usually ready within 5 to 7 business days.",
	"Hoe werken betaling en pakketprijzen?": "How do payment and package prices work?",
	"De prijs staat duidelijk bij elk pakket. BMA Visibility Sprint - One-page Website kan eenmalig aan €399 of als abonnement aan €0 opstart + €59 per maand met minimum 12 maanden. Business Website kost €699 opstartkost + €59 per maand. Website + Content kost €899 opstartkost + €149 per maand.": "The price is clearly shown with each package. BMA Visibility Sprint - One-page Website is available at €399 one-time or as a subscription at €0 setup + €59 per month with a 12-month minimum. Business Website costs a €699 setup fee + €59 per month. Website + Content costs a €899 setup fee + €149 per month.",
	"Hoe werken revisierondes?": "How do revision rounds work?",
	"De BMA Visibility Sprint bevat 1 revisieronde. Business Website en Website + Content bevatten elk 2 revisierondes voor de website. Voor de maandelijkse video’s is 1 correctieronde per video inbegrepen. Een revisieronde is één feedbackmoment waarin je alle kleine aanpassingen samen doorgeeft. Nieuwe pagina’s, grote wijzigingen en een volledig nieuw ontwerp vallen hier niet onder.": "The BMA Visibility Sprint includes 1 revision round. Business Website and Website + Content each include 2 revision rounds for the website. For the monthly videos, 1 correction round per video is included. A revision round is one feedback moment where you send all small changes together. New pages, major changes and a completely new design are not included.",
	"Wat is inbegrepen voor hosting en domeinnaam?": "What is included for hosting and the domain name?",
	"Bij het One-page Abonnement, Business Website en Website + Content blijven hosting en één .be-domeinnaam inbegrepen zolang het abonnement actief is. Bij de eenmalige BMA Visibility Sprint is het eerste jaar inbegrepen en betaal je vanaf jaar 2 €59 per jaar. Professionele e-mailadressen zijn niet standaard inbegrepen.": "With the One-page Subscription, Business Website and Website + Content, hosting and one .be domain name remain included while the subscription is active. With the one-time BMA Visibility Sprint, the first year is included and from year 2 you pay €59 per year. Professional email addresses are not included by default.",
	"Wie is eigenaar van de website en domeinnaam?": "Who owns the website and domain name?",
	"De eenmalige BMA Visibility Sprint, Business Website en Website + Content zijn vanaf oplevering eigendom van de klant. Het One-page Abonnement wordt eigendom van de klant na betaling van de eerste 12 maanden. De domeinnaam wordt op naam van de klant geregistreerd en blijft eigendom van de klant.": "The one-time BMA Visibility Sprint, Business Website and Website + Content belong to the client from delivery. The One-page Subscription becomes the client's property after the first 12 months have been paid. The domain name is registered in the client's name and remains the client's property.",
	"Wat houdt onderhoud per pakket in?": "What does maintenance include per package?",
	"Klein onderhoud — One-page Abonnement: 1 aanvraag/mnd": "Small maintenance — One-page Subscription: 1 request/month",
	"Kleine wijzigingen aan bestaande teksten, foto's, openingsuren, contactgegevens of links.": "Small changes to existing text, photos, opening hours, contact details or links.",
	"Gemiddeld onderhoud — Business Website: 2 aanvragen/mnd": "Medium maintenance — Business Website: 2 requests/month",
	"Meerdere kleine wijzigingen, een uitgebreidere wijziging aan een bestaande pagina of een nieuwe sectie.": "Several small changes, a more extensive change to an existing page or a new section.",
	"Groot onderhoud — Website + Content: 4 aanvragen/mnd": "Large maintenance — Website + Content: 4 requests/month",
	"Grotere aanpassingen, nieuwe secties of maximaal één nieuwe standaardpagina per maand binnen de bestaande stijl.": "Larger changes, new sections or up to one new standard page per month within the existing style.",
	"Een nieuwe pagina gebruikt de 4 maandelijkse aanvragen. De klant levert teksten en foto's aan.": "A new page uses the 4 monthly requests. The client provides text and photos.",
	"Wat telt als één onderhoudsaanvraag?": "What counts as one maintenance request?",
	"Eén onderhoudsaanvraag is één duidelijk afgebakende wijziging. Kleine en gemiddelde aanvragen gebeuren binnen bestaande pagina’s of onderdelen. Bij Website + Content kan één nieuwe standaardpagina binnen de bestaande stijl worden toegevoegd; deze gebruikt de 4 maandelijkse aanvragen. BMA laat vooraf weten hoeveel aanvragen een wijziging gebruikt. Nieuwe functies, een redesign en maatwerk gebeuren alleen na akkoord aan €50 per uur.": "One maintenance request is one clearly defined change. Small and medium requests happen within existing pages or elements. With Website + Content, one new standard page can be added within the existing style; this uses the 4 monthly requests. BMA will let you know in advance how many requests a change uses. New features, a redesign and custom work are only carried out after approval at €50 per hour.",
	"Hoe kan ik mijn abonnement stopzetten?": "How can I cancel my subscription?",
	"Het One-page Abonnement heeft een minimumlooptijd van 12 maanden. Bij vroegtijdige stopzetting blijven de resterende maandbedragen verschuldigd. Business Website en Website + Content zijn maandelijks opzegbaar met één maand opzegtermijn. Na afloop van de contract- of opzegtermijn kan de klant hosting bij BMA behouden voor €59 per jaar zonder onderhoud, de website en domeinnaam laten overdragen naar eigen beheer, of alles kosteloos laten stopzetten. Bij volledige stopzetting gaat de website offline en wordt de domeinnaam niet meer verlengd.": "The One-page Subscription has a minimum term of 12 months. If cancelled early, the remaining monthly amounts remain due. Business Website and Website + Content can be cancelled monthly with one month's notice. After the contract or notice period ends, the client can keep hosting with BMA for €59 per year without maintenance, have the website and domain name transferred to their own management, or stop everything free of charge. With full cancellation, the website goes offline and the domain name is no longer renewed.",
	"Pakketvoorwaarden": "Package terms",
	"Onderhoudsaanvragen:": "Maintenance requests:",
	"Iedere aanvraag is één duidelijk afgebakende wijziging. BMA laat vooraf weten hoeveel aanvragen een wijziging gebruikt.": "Each request is one clearly defined change. BMA will let you know in advance how many requests a change uses.",
	"Niet-overdraagbaar:": "Not transferable:",
	"Ongebruikte aanvragen en video-edits vervallen aan het einde van de maand.": "Unused requests and video edits expire at the end of the month.",
	"Uitvoering:": "Turnaround:",
	"Kleine en gemiddelde aanvragen worden normaal binnen 5 werkdagen uitgevoerd nadat alle informatie ontvangen is. Voor grote wijzigingen en nieuwe pagina’s wordt de timing vooraf afgesproken.": "Small and medium requests are normally completed within 5 business days after all information has been received. For large changes and new pages, timing is agreed in advance.",
	"One-page Abonnement:": "One-page Subscription:",
	"Minimumlooptijd van 12 maanden. Bij vroegtijdige stopzetting blijven de resterende maandbedragen verschuldigd.": "Minimum term of 12 months. If cancelled early, the remaining monthly amounts remain due.",
	"Business Website en Website + Content:": "Business Website and Website + Content:",
	"Geen minimumlooptijd en maandelijks opzegbaar met 1 maand opzegtermijn.": "No minimum term and cancellable monthly with 1 month's notice.",
	"Eigendom:": "Ownership:",
	"De eenmalige BMA Visibility Sprint, Business Website en Website + Content zijn vanaf oplevering eigendom van de klant. Het One-page Abonnement wordt eigendom van de klant na betaling van de eerste 12 maanden.": "The one-time BMA Visibility Sprint, Business Website and Website + Content belong to the client from delivery. The One-page Subscription becomes the client's property after the first 12 months have been paid.",
	"Extra werk:": "Extra work:",
	"Nieuwe functies, maatwerk en werk buiten het pakket worden alleen na akkoord uitgevoerd aan €50/uur.": "New features, custom work and work outside the package are only carried out after approval at €50/hour.",
	"Na stopzetting:": "After cancellation:",
	"Hosting en domeinnaam kunnen bij BMA blijven voor €59/jaar zonder onderhoud, worden overgedragen naar eigen beheer, of kosteloos worden stopgezet. Bij volledige stopzetting gaat de website offline en wordt de domeinnaam niet meer verlengd.": "Hosting and the domain name can stay with BMA for €59/year without maintenance, be transferred to your own management, or be stopped free of charge. With full cancellation, the website goes offline and the domain name is no longer renewed.",
	"Overdracht:": "Transfer:",
	"Een standaardoverdracht van de domeinnaam en websitebestanden is inbegrepen. Extra migratiewerk of ondersteuning bij een externe hostingprovider gebeurt alleen na akkoord aan €50 per uur.": "A standard transfer of the domain name and website files is included. Extra migration work or support with an external hosting provider is only carried out after approval at €50 per hour.",
	"Niet inbegrepen:": "Not included:",
	"Professionele mailboxen, betaalde software, premiumlicenties, fotografie en video-opnames, tenzij anders afgesproken.": "Professional mailboxes, paid software, premium licences, photography and video recordings, unless agreed otherwise.",
	"Btw:": "VAT:",
	"Alle prijzen zijn eindprijzen. BMA Studio rekent geen btw aan wegens de bijzondere vrijstellingsregeling kleine ondernemingen.": "All prices are final prices. BMA Studio does not charge VAT under the special exemption scheme for small businesses.",
	"Twijfel je?": "Not sure?",
	"Stuur je vraag door, dan kiezen we samen.": "Send your question and we will choose together.",
	"Een korte omschrijving van je bedrijf is genoeg om gericht advies te geven.": "A short description of your business is enough for focused advice.",
	"Een professionele online basis, zonder omwegen.": "A professional online foundation, without detours.",
	"We combineren webdesign, onderhoud en content zodat lokale ondernemers sneller vertrouwen opbouwen en meer aanvragen uit hun website halen.": "We combine web design, maintenance and content so local business owners build trust faster and get more enquiries from their website.",
	"We combineren webdesign, onderhoud en content zodat lokale ondernemers sneller vertrouwen opbouwen en meer aanvragen uit hun website halen. Je kan ook gratis een websiteanalyse of eerste websiteprototype aanvragen.": "We combine web design, maintenance and content so local business owners build trust faster and get more enquiries from their website. You can also request a free website analysis or first website prototype.",
	"Gratis analyse of prototype": "Free analysis or prototype",
	"Userflow": "User flow",
	"Jij vertelt wat je bedrijf nodig heeft.": "You tell us what your business needs.",
	"We kiezen de juiste structuur en aanpak.": "We choose the right structure and approach.",
	"Je krijgt een duidelijke website die klaar is om klanten te ontvangen.": "You get a clear website that is ready to welcome customers.",
	"Gratis websiteanalyse en gratis prototype.": "Free website analysis and free prototype.",
	"Nog niet zeker wat je website nodig heeft? We geven je vrijblijvend richting voordat je een pakket kiest.": "Not sure what your website needs yet? We give you no-obligation direction before you choose a package.",
	"Gratis 01": "Free 01",
	"Websiteanalyse": "Website analysis",
	"We bekijken je huidige website of online aanwezigheid en geven concrete verbeterpunten voor structuur, vertrouwen, mobiel gebruik en contactmomenten.": "We review your current website or online presence and give concrete improvements for structure, trust, mobile use and contact moments.",
	"Gratis 02": "Free 02",
	"Websiteprototype": "Website prototype",
	"Je krijgt een eerste visuele richting voor een nieuwe website, zodat je sneller voelt welke stijl, opbouw en inhoud bij je zaak passen.": "You get a first visual direction for a new website, so you can quickly feel which style, structure and content fit your business.",
	"Vrijblijvend vervolg": "No-obligation next step",
	"Daarna beslis je rustig of je verder wil met een one-page website, Business Website of Website + Content.": "After that, you calmly decide whether you want to continue with a one-page website, Business Website or Website + Content.",
	"Stap 03": "Step 03",
	"Vraag gratis analyse of prototype aan": "Request a free analysis or prototype",
	"Wat we doen": "What we do",
	"Drie onderdelen die elkaar versterken.": "Three parts that strengthen each other.",
	"Websites": "Websites",
	"Duidelijke, mobiele websites die tonen wie je bent, wat je aanbiedt en hoe klanten je bereiken.": "Clear mobile websites that show who you are, what you offer and how customers can reach you.",
	"Mobile-first ontwerp": "Mobile-first design",
	"Heldere pagina-opbouw": "Clear page structure",
	"SEO-basis en contactflow": "SEO basics and contact flow",
	"Onderhoud": "Maintenance",
	"Maandelijkse updates, kleine aanpassingen en technische controle zodat je site netjes blijft werken.": "Monthly updates, small changes and technical checks so your site keeps working properly.",
	"Content aanpassen": "Content changes",
	"Technische controle": "Technical check",
	"Snelle opvolging": "Fast follow-up",
	"Content": "Content",
	"Korte video's, visuals en social content die je bedrijf herkenbaar maken en je website ondersteunen.": "Short videos, visuals and social content that make your business recognizable and support your website.",
	"Social visuals": "Social visuals",
	"Korte edits": "Short edits",
	"Content in jouw stijl": "Content in your style",
	"Aanpak": "Approach",
	"Een flow die duidelijk blijft.": "A flow that stays clear.",
	"Stap 1": "Step 1",
	"Intake": "Intake",
	"We bespreken je bedrijf, doelgroep, aanbod en wat bezoekers snel moeten begrijpen.": "We discuss your business, audience, offer and what visitors need to understand quickly.",
	"Stap 2": "Step 2",
	"Structuur": "Structure",
	"We bepalen welke pagina's nodig zijn en hoe bezoekers logisch naar contact gaan.": "We decide which pages are needed and how visitors logically move toward contact.",
	"Stap 3": "Step 3",
	"Launch": "Launch",
	"We bouwen, testen mobiel en zorgen dat de website professioneel online staat.": "We build, test on mobile and make sure the website is professionally online.",
	"Wil je weten welk pakket past?": "Want to know which package fits?",
	"Bekijk eerst de pakketten of stuur meteen kort door wat je bedrijf nodig heeft.": "First view the packages or immediately send a short note about what your business needs.",
	"Voorbeelden van websites voor lokale ondernemers.": "Examples of websites for local business owners.",
	"Een selectie van klantprojecten, conceptwebsites en digitale ontwerpen.": "A selection of client projects, concept websites and digital designs.",
	"Bekijk hoe BMA Visibility Sprint - One-page Website, Business Website of Website + Content eruit kan zien.": "See what BMA Visibility Sprint - One-page Website, Business Website or Website + Content can look like.",
	"Kijkrichting": "What to look for",
	"Bekijk welk voorbeeld het dichtst bij jouw zaak ligt.": "See which example is closest to your business.",
	"Kies daarna een pakket dat past bij je nodige pagina's.": "Then choose a package that fits the pages you need.",
	"Stuur je aanvraag door met die richting als startpunt.": "Send your request with that direction as a starting point.",
	"Projecten": "Projects",
	"Werk en voorbeeldsites.": "Work and example sites.",
	"Relevante voorbeelden voor lokale bedrijven.": "Relevant examples for local businesses.",
	"Deze websites en conceptwebsites tonen stijl, structuur en mogelijkheden voor verschillende soorten ondernemers. Links naar GitHub Pages zijn tijdelijke demonstratieomgevingen.": "These websites and concept websites show style, structure and possibilities for different types of business owners. GitHub Pages links are temporary demo environments.",
	"Klantproject": "Client project",
	"Moeskops Gevelwerken — Business Website": "Moeskops Gevelwerken — Business Website",
	"Website voor een ervaren vakman in voegwerken en gevelrenovatie, gericht op vertrouwen en offerteaanvragen.": "Website for an experienced craftsman in jointing and facade renovation, focused on trust and quote requests.",
	"Klantwebsite": "Client website",
	"Live website": "Live website",
	"One-page website": "One-page website",
	"Live preview van de klantwebsite.": "Live preview of the client website.",
	"Gate26 - Garage & Detailing": "Gate26 - Garage & Detailing",
	"One-page klantwebsite voor een garage en detailingzaak, met focus op diensten, realisaties en afspraken.": "One-page client website for a garage and detailing business, focused on services, work examples and appointments.",
	"Conceptwebsite": "Concept website",
	"Conceptwebsite voor een lokale dakwerker, bedoeld om vertrouwen, diensten en offerte-aanvragen duidelijk te tonen.": "Concept website for a local roofer, designed to clearly show trust, services and quote requests.",
	"Conceptwebsite voor een beautyzaak, bedoeld om een warme stijl, diensten en contentmogelijkheden te tonen.": "Concept website for a beauty business, designed to show a warm style, services and content possibilities.",
	"Compacte conceptwebsite, bedoeld om te tonen hoe een eenvoudige eerste online basis eruit kan zien.": "Compact concept website, designed to show what a simple first online foundation can look like.",
	"Concept": "Concept",
	"Tijdelijke demo via GitHub Pages": "Temporary demo via GitHub Pages",
	"Live preview van de tijdelijke demonstratieomgeving.": "Live preview of the temporary demo environment.",
	"UX en digitaal ontwerp": "UX and digital design",
	"Andere digitale projecten.": "Other digital projects.",
	"Minder gericht op lokale bedrijfswebsites, maar wel relevant als voorbeeld van structuur, gebruiksflow en mobiele interfacekeuzes.": "Less focused on local business websites, but still relevant as examples of structure, user flow and mobile interface choices.",
	"UX-project": "UX project",
	"Schoolproject": "School project",
	"UX- en schoolproject waarin een bestaande rapportageflow mobieler, korter en duidelijker werd uitgewerkt.": "UX and school project in which an existing reporting flow was made more mobile, shorter and clearer.",
	"Een bestaande rapportageflow werd mobieler, korter en duidelijker gemaakt.": "An existing reporting flow was made more mobile, shorter and clearer.",
	"Mobiele app-flow": "Mobile app flow",
	"Stappenstructuur": "Step structure",
	"Bekijk Walk Brussels": "View Walk Brussels",
	"Mobiele stappenflow in bestaande huisstijl.": "Mobile step flow in the existing brand style.",
	"Nova - BMA Visibility Sprint - One-page Website": "Nova - BMA Visibility Sprint - One-page Website",
	"Een compacte voorbeeldsite met een duidelijke eerste indruk en snelle call-to-action.": "A compact example site with a clear first impression and quick call to action.",
	"BMA Visibility Sprint - One-page Website pakket": "BMA Visibility Sprint - One-page Website package",
	"Compacte website": "Compact website",
	"Bekijk Nova": "View Nova",
	"Voorbeeld van BMA Visibility Sprint - One-page Website.": "Example of BMA Visibility Sprint - One-page Website.",
	"Vergoot - Business Website": "Vergoot - Business Website",
	"Een lokale bedrijfswebsite met focus op vertrouwen, diensten en offerte-aanvragen.": "A local business website focused on trust, services and quote requests.",
	"Offertegericht": "Quote-focused",
	"Bekijk Vergoot": "View Vergoot",
	"Voorbeeld van een Business Website.": "Example of a Business Website.",
	"Bekijk Moeskops Gevelwerken": "View Moeskops Gevelwerken",
	"Voegwerken en gevelrenovatie": "Jointing and facade renovation",
	"Een ervaren vakman online betrouwbaar positioneren en bezoekers vlot naar een offerteaanvraag sturen.": "Position an experienced craftsman as trustworthy online and guide visitors smoothly toward a quote request.",
	"Een duidelijke bedrijfswebsite met diensten, bewijs van vakmanschap en contactmomenten op logische plaatsen.": "A clear business website with services, proof of craftsmanship and contact moments in logical places.",
	"Dienstenoverzicht, vertrouwen, offertefocus en mobiele contactknoppen.": "Service overview, trust, quote focus and mobile contact buttons.",
	"Live preview van Moeskops Gevelwerken": "Live preview of Moeskops Gevelwerken",
	"Bekijk Gate26": "View Gate26",
	"Garage, detailing en kleine herstellingen": "Garage, detailing and small repairs",
	"Een garage duidelijk voorstellen met onderhoud, herstellingen, poetsbeurten en realisaties op een compacte pagina.": "Clearly present a garage with maintenance, repairs, detailing and work examples on one compact page.",
	"Een one-page website met sterke eerste indruk, duidelijke dienstenblokken, realisaties, aanpak en afspraakmomenten.": "A one-page website with a strong first impression, clear service sections, work examples, process and appointment moments.",
	"Live one-page structuur, dienstenoverzicht, realisaties, filterbare werkbeelden en afspraakformulier.": "Live one-page structure, service overview, work examples, filterable project images and appointment form.",
	"Live preview van Gate26": "Live preview of Gate26",
	"Fleur - Website + Content": "Fleur - Website + Content",
	"Een rijker voorbeeld voor een zaak die warm, professioneel en herkenbaar wil overkomen.": "A richer example for a business that wants to feel warm, professional and recognizable.",
	"5 pagina's": "5 pages",
	"Bekijk Fleur": "View Fleur",
	"Voorbeeld van Website + Content.": "Example of Website + Content.",
	"Projecttype": "Project type",
	"Sector": "Sector",
	"Dienst": "Service",
	"Uitdaging": "Challenge",
	"Oplossing": "Solution",
	"Belangrijkste functies": "Key features",
	"Dakwerken en renovatie": "Roofing and renovation",
	"Business Website": "Business Website",
	"Een dienstverlener snel betrouwbaar laten overkomen en bezoekers naar een aanvraag sturen.": "Make a service provider feel trustworthy quickly and guide visitors toward an enquiry.",
	"Een duidelijke bedrijfswebsite met diensten, vertrouwen en contactmomenten op logische plaatsen.": "A clear business website with services, trust signals and contact moments in logical places.",
	"Dienstenoverzicht, offertefocus, mobiele opbouw en contactknoppen.": "Service overview, quote focus, mobile structure and contact buttons.",
	"Beauty en verzorging": "Beauty and care",
	"Een visuele stijl tonen die zacht, professioneel en overzichtelijk blijft.": "Show a visual style that stays soft, professional and clear.",
	"Een meerlagige conceptsite met diensten, sfeer, navigatie en duidelijke contactmomenten.": "A layered concept site with services, atmosphere, navigation and clear contact moments.",
	"Meerdere pagina's, dienstpresentatie, visuele sfeer en call-to-action.": "Multiple pages, service presentation, visual atmosphere and call to action.",
	"Kleine zelfstandige": "Small independent business",
	"Met weinig pagina's toch snel duidelijk maken wat het bedrijf doet.": "Quickly make clear what the business does with only a few pages.",
	"Een compacte pagina met een sterke eerste indruk, kerninformatie en directe call-to-action.": "A compact page with a strong first impression, core information and direct call to action.",
	"Hero, korte uitleg, duidelijke CTA en mobiele basisstructuur.": "Hero, short explanation, clear CTA and mobile-first basic structure.",
	"UX-project en schoolproject": "UX project and school project",
	"Mobiliteit en stadsbeleving": "Mobility and city experience",
	"UX-flow en digitaal ontwerp": "UX flow and digital design",
	"Een rapportageflow duidelijker maken op kleine schermen.": "Make a reporting flow clearer on small screens.",
	"Een mobiele stappenstructuur met korte schermen en duidelijke keuzes per stap.": "A mobile step-by-step structure with short screens and clear choices per step.",
	"Mobiele flow, stapsgewijze invoer, overzichtelijke schermen en visuele feedback.": "Mobile flow, step-by-step input, clear screens and visual feedback.",
	"Screenshot van de tijdelijke demonstratieomgeving.": "Screenshot of the temporary demo environment.",
	"Conceptwebsite in een tijdelijke demonstratieomgeving.": "Concept website in a temporary demo environment.",
	"UX- en schoolproject in een tijdelijke demonstratieomgeving.": "UX and school project in a temporary demo environment.",
	"Een directe partner voor je online basis.": "A direct partner for your online foundation.",
	"BMA Studio helpt starters en lokale ondernemers met websites, onderhoud en online zichtbaarheid. Je werkt rechtstreeks met Lio, zonder accountmanagers of onnodige tussenpersonen.": "BMA Studio helps starters and local business owners with websites, maintenance and online visibility. You work directly with Lio, without account managers or unnecessary middlemen.",
	"Direct contact met de persoon die je website bouwt.": "Direct contact with the person building your website.",
	"Een duidelijke structuur voor inhoud, planning en opvolging.": "A clear structure for content, planning and follow-up.",
	"Oplossingen die passen bij je bedrijf en je fase.": "Solutions that fit your business and its stage.",
	"Websites en onderhoud voor ondernemers die helder online willen staan.": "Websites and maintenance for business owners who want to be clearly present online.",
	"BMA Studio bouwt websites die snel duidelijk maken wie je bent, wat je aanbiedt en hoe klanten je kunnen bereiken. Daarnaast helpen we met onderhoud en online zichtbaarheid, zodat je website niet stilvalt na de oplevering.": "BMA Studio builds websites that quickly make clear who you are, what you offer and how customers can reach you. We also help with maintenance and online visibility, so your website does not stand still after delivery.",
	"De aanpak blijft bewust overzichtelijk: eerst begrijpen wat je bedrijf nodig heeft, daarna kiezen welke pagina's, inhoud en opvolging daarbij horen.": "The approach stays deliberately clear: first we understand what your business needs, then we choose which pages, content and follow-up belong with it.",
	"Wie achter BMA Studio zit": "Who is behind BMA Studio",
	"Oprichter en webdesigner": "Founder and web designer",
	"Als klant werk je rechtstreeks met mij samen. Dat houdt de communicatie kort en duidelijk: je weet wie je aanspreekt, waar we mee bezig zijn en welke stap daarna volgt.": "As a client, you work directly with me. That keeps communication short and clear: you know who you are talking to, what we are working on and which step comes next.",
	"Ik denk mee over structuur, inhoud en praktische keuzes, met focus op wat jouw zaak echt nodig heeft. Geen onnodige lagen, wel een website die professioneel aanvoelt en begrijpelijk blijft.": "I think along about structure, content and practical choices, with a focus on what your business really needs. No unnecessary layers, just a website that feels professional and stays understandable.",
	"Een vaste aanpak die rustig en duidelijk blijft.": "A fixed approach that stays calm and clear.",
	"Luisteren": "Listen",
	"We bespreken je bedrijf, je doelgroep en wat bezoekers snel moeten begrijpen.": "We discuss your business, your audience and what visitors need to understand quickly.",
	"Structuur bepalen": "Define the structure",
	"We kiezen de juiste pagina's, inhoud en contactflow voor jouw situatie.": "We choose the right pages, content and contact flow for your situation.",
	"Bouwen en opvolgen": "Build and follow up",
	"De website wordt uitgewerkt, mobiel nagekeken en nadien netjes opgevolgd.": "The website is built, checked on mobile and followed up neatly afterwards.",
	"Kernwaarden": "Core values",
	"Waar de samenwerking op steunt.": "What the collaboration is built on.",
	"Duidelijke communicatie": "Clear communication",
	"Je krijgt heldere uitleg, realistische keuzes en een duidelijk zicht op de volgende stap.": "You get clear explanation, realistic choices and a clear view of the next step.",
	"Overzichtelijke structuur": "Clear structure",
	"We maken websites die logisch lezen, makkelijk navigeerbaar zijn en praktisch blijven in onderhoud.": "We create websites that read logically, are easy to navigate and stay practical to maintain.",
	"Passend bij je bedrijf": "Fitting your business",
	"Geen standaardverhaal om het standaardverhaal. De oplossing moet kloppen met je zaak, budget en doelen.": "No standard story for the sake of it. The solution has to fit your business, budget and goals.",
	"Werkgebied": "Service area",
	"Actief vanuit Limburg en Brussel, voor ondernemingen in België.": "Active from Limburg and Brussels, for businesses in Belgium.",
	"BMA Studio werkt voor starters, zelfstandigen en lokale bedrijven in België. Veel overleg kan vlot online, maar de aanpak blijft persoonlijk en praktisch.": "BMA Studio works for starters, independent professionals and local businesses in Belgium. A lot of consultation can happen smoothly online, while the approach stays personal and practical.",
	"Limburg": "Limburg",
	"Brussel": "Brussels",
	"Ondernemingen in België": "Businesses in Belgium",
	"Wil je weten wat je website nodig heeft?": "Want to know what your website needs?",
	"Stuur kort door wie je bent, wat je doet en waar je online naartoe wil.": "Send a short note about who you are, what you do and where you want to go online.",
	"Start een gesprek": "Start a conversation",
	"Duidelijk, bereikbaar en betrokken.": "Clear, reachable and involved.",
	"BMA Studio helpt lokale ondernemers online sterker overkomen met websites, onderhoud en content die helder aanvoelen. Je werkt rechtstreeks met ons samen, met duidelijke afspraken en snelle opvolging.": "BMA Studio helps local business owners make a stronger impression online with websites, maintenance and content that feel clear. You work directly with us, with clear agreements and fast follow-up.",
	"Waar je op kan rekenen": "What you can count on",
	"Betrouwbare afspraken en transparante prijzen.": "Reliable agreements and transparent prices.",
	"Bereikbaar voor vragen, feedback en opvolging.": "Reachable for questions, feedback and follow-up.",
	"Klantgericht advies dat past bij jouw zaak.": "Customer-focused advice that fits your business.",
	"Vertel kort wat je nodig hebt.": "Tell us briefly what you need.",
	"Je hoeft nog geen volledige briefing te hebben. Een korte uitleg over je bedrijf, je doel en je timing is genoeg om het gesprek goed te starten.": "You do not need a full brief yet. A short explanation of your business, your goal and your timing is enough to start the conversation well.",
	"Reactie": "Reply",
	"We lezen je aanvraag dezelfde dag.": "We read your request the same day.",
	"Je krijgt een gerichte reactie met de volgende stap.": "You receive a focused reply with the next step.",
	"Daarna bepalen we scope, timing en pakket.": "After that we decide the scope, timing and package.",
	"Direct": "Direct",
	"Klaar voor een sterkere online basis?": "Ready for a stronger online foundation?",
	"Mail rechtstreeks of gebruik het formulier. We bekijken welk pakket het best past.": "Email us directly or use the form. We will see which package fits best.",
	"Mail:": "Email:",
	"Reactietijd: dezelfde dag": "Response time: same day",
	"Voor lokale ondernemers, starters en kleine bedrijven": "For local business owners, starters and small businesses",
	"Naam": "Name",
	"Bedrijf": "Company",
	"E-mail": "Email",
	"Pakket": "Package",
	"Nog niet zeker": "Not sure yet",
	"BMA Visibility Sprint - One-page Website - €399 eenmalig": "BMA Visibility Sprint - One-page Website - €399 one-time",
	"BMA Visibility Sprint - One-page Website abonnement - €0 opstart + €59/mnd": "BMA Visibility Sprint - One-page Website subscription - €0 setup + €59/month",
	"Business Website - €699 opstartkost + €59/mnd": "Business Website - €699 setup fee + €59/month",
	"Website + Content - €899 opstartkost + €149/mnd": "Website + Content - €899 setup fee + €149/month",
	"Bericht": "Message",
	"Verstuur aanvraag": "Send request",
	"Bedankt. Je aanvraag is verzonden.": "Thank you. Your request has been sent.",
	"404": "404",
	"Pagina niet gevonden.": "Page not found.",
	"Deze pagina bestaat niet of is verplaatst. Ga terug naar een bestaande pagina of stuur ons je vraag.": "This page does not exist or has moved. Go back to an existing page or send us your question.",
	"Verder zoeken": "Keep looking",
	"Bekijk de websitepakketten.": "View the website packages.",
	"Bekijk webdesignprojecten.": "View web design projects.",
	"Vraag advies aan.": "Ask for advice.",
	"Aanvraag ontvangen": "Request received",
	"Bedankt, je bericht is onderweg.": "Thank you, your message is on its way.",
	"We bekijken je aanvraag en reageren zo snel mogelijk. Meestal doen we dat dezelfde dag.": "We will review your request and reply as soon as possible. Usually we do that the same day.",
	"Wat nu?": "What now?",
	"We lezen je vraag.": "We read your question.",
	"We bekijken welk pakket logisch is.": "We see which package makes sense.",
	"Je krijgt een duidelijk antwoord met volgende stap.": "You get a clear answer with the next step.",
	"Privacyverklaring.": "Privacy statement.",
	"BMA Studio gaat zorgvuldig om met persoonsgegevens die je via deze website of per e-mail met ons deelt.": "BMA Studio handles personal data that you share via this website or by email with care.",
	"Kort samengevat": "In short",
	"We gebruiken je gegevens om je aanvraag te beantwoorden.": "We use your data to answer your request.",
	"We verkopen je gegevens niet door.": "We do not sell your data.",
	"Je kan altijd vragen om je gegevens te bekijken of te verwijderen.": "You can always ask to view or delete your data.",
	"Wie verwerkt je gegevens?": "Who processes your data?",
	"Deze website is van BMA Studio, beheerd door Lio Smeers. Voor privacyvragen kan je contact opnemen via": "This website belongs to BMA Studio, managed by Lio Smeers. For privacy questions you can contact us via",
	"Welke gegevens verzamelen we?": "Which data do we collect?",
	"Wanneer je het contactformulier invult, kunnen we je naam, bedrijfsnaam, e-mailadres en bericht verwerken. Als je rechtstreeks mailt, verwerken we de gegevens die je zelf in je e-mail deelt.": "When you fill in the contact form, we may process your name, company name, email address and message. If you email us directly, we process the data you share in your email.",
	"Waarom gebruiken we die gegevens?": "Why do we use that data?",
	"We gebruiken je gegevens alleen om je vraag te beantwoorden, je project te bespreken, een voorstel op te maken of onze samenwerking op te volgen. De verwerking gebeurt op basis van je aanvraag, een mogelijke overeenkomst en ons gerechtvaardigd belang om professioneel te communiceren.": "We only use your data to answer your question, discuss your project, prepare a proposal or follow up on our collaboration. Processing is based on your request, a possible agreement and our legitimate interest in communicating professionally.",
	"Met wie delen we gegevens?": "Who do we share data with?",
	"We delen je gegevens niet met derden voor marketing. Het contactformulier kan technisch verwerkt worden via FormSubmit, zodat je bericht veilig bij ons terechtkomt. Verder gebruiken we je gegevens alleen voor onze eigen opvolging.": "We do not share your data with third parties for marketing. The contact form may be processed technically through FormSubmit so your message reaches us safely. Otherwise we only use your data for our own follow-up.",
	"Hoe lang bewaren we gegevens?": "How long do we keep data?",
	"We bewaren contactgegevens niet langer dan nodig is voor de opvolging van je aanvraag of samenwerking. Als er geen samenwerking volgt, verwijderen we je aanvraag normaal binnen 12 maanden.": "We do not keep contact details longer than necessary to follow up on your request or collaboration. If no collaboration follows, we normally delete your request within 12 months.",
	"Je rechten": "Your rights",
	"Je kan vragen om je persoonsgegevens in te kijken, te corrigeren, te laten verwijderen of de verwerking ervan te beperken. Stuur daarvoor een e-mail naar": "You can ask to view, correct or delete your personal data, or to restrict its processing. Send an email to",
	"Cookies en externe links": "Cookies and external links",
	"Deze website gebruikt geen trackingcookies voor advertenties. De site bevat wel externe links, zoals LinkedIn en portfolio-links. Die websites hebben hun eigen privacybeleid.": "This website does not use advertising tracking cookies. The site does contain external links, such as LinkedIn and portfolio links. Those websites have their own privacy policies.",
	"Wijzigingen": "Changes",
	"Deze privacyverklaring kan worden aangepast wanneer de website, onze werkwijze of wettelijke verplichtingen veranderen. Laatste update: 23 juni 2026.": "This privacy statement may be updated when the website, our way of working or legal obligations change. Last update: June 23, 2026.",
};

const titleTranslations = {
	"BMA Studio - Websites voor lokale ondernemers": "BMA Studio - Websites for local business owners",
	"Webdesign voor lokale ondernemers | BMA Studio": "Web design for local business owners | BMA Studio",
	"BMA Studio bouwt duidelijke, professionele websites voor lokale ondernemers in Limburg en België, inclusief hosting, onderhoud en content.": "BMA Studio builds clear, professional websites for local business owners in Limburg and Belgium, including hosting, maintenance and content.",
	"Pakketten - BMA Studio": "Packages - BMA Studio",
	"Website pakketten voor ondernemers | BMA Studio": "Website packages for business owners | BMA Studio",
	"Pakketten en prijzen voor websites | BMA Studio": "Website packages and prices | BMA Studio",
	"Bekijk drie duidelijke website pakketten voor zelfstandigen en lokale ondernemers die snel een professionele online basis willen.": "View three clear website packages for independent professionals and local business owners who want a professional online foundation quickly.",
	"Vergelijk de websitepakketten van BMA Studio: BMA Visibility Sprint, Business Website en Website + Content voor lokale ondernemers in Limburg en België.": "Compare BMA Studio's website packages: BMA Visibility Sprint, Business Website and Website + Content for local business owners in Limburg and Belgium.",
	"Diensten - BMA Studio": "Services - BMA Studio",
	"Webdesign, onderhoud en content | BMA Studio": "Web design, maintenance and content | BMA Studio",
	"BMA Studio helpt lokale ondernemers met professionele websites, betrouwbaar websiteonderhoud en herkenbare content voor sociale media.": "BMA Studio helps local business owners with professional websites, reliable website maintenance and recognizable content for social media.",
	"Portfolio - BMA Studio": "Portfolio - BMA Studio",
	"Website voorbeelden voor ondernemers | BMA Studio": "Website examples for business owners | BMA Studio",
	"Webdesignprojecten en realisaties | BMA Studio": "Web design projects and work | BMA Studio",
	"Bekijk webdesignprojecten en voorbeeldwebsites van BMA Studio voor lokale ondernemers en zelfstandigen.": "View BMA Studio web design projects and example websites for local business owners and independent professionals.",
	"Over ons - BMA Studio": "About us - BMA Studio",
	"Over BMA Studio | Webdesign voor lokale ondernemers": "About BMA Studio | Web design for local business owners",
	"Maak kennis met BMA Studio, de webdesignstudio van Lio Smeers voor lokale ondernemers in Limburg en België.": "Get to know BMA Studio, Lio Smeers' web design studio for local business owners in Limburg and Belgium.",
	"Contact - BMA Studio": "Contact - BMA Studio",
	"Contacteer BMA Studio | Website laten maken": "Contact BMA Studio | Have a website made",
	"Ben je lokale ondernemer en wil je een website laten maken of onderhouden? Contacteer BMA Studio voor een duidelijk voorstel.": "Are you a local business owner who wants a website made or maintained? Contact BMA Studio for a clear proposal.",
	"Bedankt - BMA Studio": "Thank you - BMA Studio",
	"Bedankt voor je aanvraag | BMA Studio": "Thank you for your request | BMA Studio",
	"Bedankpagina van BMA Studio na het versturen van een contactaanvraag.": "BMA Studio thank-you page after submitting a contact request.",
	"Privacyverklaring - BMA Studio": "Privacy statement - BMA Studio",
	"Privacyverklaring | BMA Studio": "Privacy statement | BMA Studio",
	"Lees hoe BMA Studio persoonsgegevens verwerkt bij contactaanvragen, offertes en samenwerking via bmastudio.be.": "Read how BMA Studio processes personal data for contact requests, proposals and collaboration via bmastudio.be.",
	"Pagina niet gevonden | BMA Studio": "Page not found | BMA Studio",
	"Deze pagina bestaat niet of is verplaatst. Ga terug naar de homepage, pakketten of contactpagina van BMA Studio.": "This page does not exist or has moved. Go back to the BMA Studio homepage, packages or contact page.",
};

const header = document.querySelector(".site-header");
const progressBar = document.querySelector(".scroll-progress");
const heroSection = document.querySelector(".hero-section");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const navButtons = document.querySelectorAll(
	"header [data-target], .hero-section [data-target], .founder-section [data-target]",
);
const packageCards = document.querySelectorAll("[data-package]");
const spotlight = document.querySelector(".package-spotlight");
const spotlightCard = document.querySelector(".spotlight-card");
const spotlightClose = document.querySelector(".spotlight-close");
const spotlightBack = document.querySelector(".spotlight-back");
const portfolioToggle = document.querySelector("[data-portfolio-toggle]");
const portfolioProjects = document.querySelector("#portfolio-projects");
const portfolioCards = document.querySelectorAll("[data-portfolio-project]");
const portfolioTriggers = document.querySelectorAll("[data-portfolio-trigger]");
const portfolioModal = document.querySelector(".portfolio-modal");
const portfolioModalCard = document.querySelector(".portfolio-modal-card");
const portfolioModalClose = document.querySelector(".portfolio-modal-close");
const contactForm = document.querySelector(".contact-form");
const contactSubmit = contactForm?.querySelector("[type='submit']");
const contactStatus = contactForm?.querySelector(".success-message");
const year = document.querySelector("#year");
let activePackageKey = "";
let activePortfolioProjectKey = "";
let previousPortfolioFocus = null;
let scrollUpdateQueued = false;
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
let currentLanguage = ["nl", "en"].includes(requestedLanguage)
	? requestedLanguage
	: localStorage.getItem("bma-language") || "nl";
const originalTextByNode = new WeakMap();
const originalAttributeByElement = new WeakMap();
const originalMetadataByElement = new WeakMap();
const translatableAttributes = ["aria-label", "alt", "title"];
const livePreviewWidth = 1280;
const livePreviewHeight = 800;
const untranslatedText = new Set();

if (year) year.textContent = new Date().getFullYear();

function normalizeText(value) {
	return value.replace(/\s+/g, " ").trim();
}

function preserveSpacing(original, replacement) {
	const leading = original.match(/^\s*/)?.[0] || "";
	const trailing = original.match(/\s*$/)?.[0] || "";
	return `${leading}${replacement}${trailing}`;
}

function getPackageDetails(packageKey) {
	const details =
		currentLanguage === "en" ? englishPackageDetails : packageDetails;
	return details[packageKey];
}

function translateTextNode(node) {
	const originalNormalized =
		originalTextByNode.get(node) || normalizeText(node.nodeValue);

	if (!originalNormalized) return;
	if (!originalTextByNode.has(node)) originalTextByNode.set(node, originalNormalized);

	const nextText =
		currentLanguage === "en"
			? translations[originalNormalized] || originalNormalized
			: originalNormalized;

	node.nodeValue = preserveSpacing(node.nodeValue, nextText);
}

function translateValue(value) {
	return currentLanguage === "en" ? translations[value] || value : value;
}

function translateAttributes() {
	document.querySelectorAll("[aria-label], img[alt], iframe[title]").forEach((element) => {
		let originalAttributes = originalAttributeByElement.get(element);
		if (!originalAttributes) {
			originalAttributes = {};
			originalAttributeByElement.set(element, originalAttributes);
		}

		translatableAttributes.forEach((attribute) => {
			const currentValue = element.getAttribute(attribute);
			if (!currentValue) return;
			if (!originalAttributes[attribute]) originalAttributes[attribute] = currentValue;

			const originalValue = originalAttributes[attribute];
			element.setAttribute(
				attribute,
				currentLanguage === "en"
					? translations[originalValue] || originalValue
					: originalValue,
			);
		});
	});
}

function translateMetadataContent(selector) {
	const element = document.querySelector(selector);
	if (!element) return;

	const originalValue = originalMetadataByElement.get(element) || element.getAttribute("content");
	if (!originalValue) return;
	originalMetadataByElement.set(element, originalValue);

	element.setAttribute(
		"content",
		currentLanguage === "en"
			? titleTranslations[originalValue] || originalValue
			: originalValue,
	);
}

function updateLanguageMetadataLinks() {
	const canonical = document.querySelector("link[rel='canonical']");
	const ogLocale = document.querySelector("meta[property='og:locale']");
	const ogUrl = document.querySelector("meta[property='og:url']");
	if (!canonical) return;

	const originalCanonical =
		document.documentElement.dataset.originalCanonical || canonical.href;
	document.documentElement.dataset.originalCanonical = originalCanonical;
	const languageCanonical =
		currentLanguage === "en" ? `${originalCanonical}?lang=en` : originalCanonical;

	canonical.href = languageCanonical;
	if (ogUrl) ogUrl.setAttribute("content", languageCanonical);
	if (ogLocale) ogLocale.setAttribute("content", currentLanguage === "en" ? "en_BE" : "nl_BE");
}

function shouldSkipTranslation(node) {
	const parent = node.parentElement;
	if (!parent) return true;
	if (parent.closest("script, style, .language-switcher, .brand-lockup, [data-no-translate]")) {
		return true;
	}
	return untranslatedText.has(normalizeText(node.nodeValue));
}

function translateStaticText() {
	const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
		acceptNode(node) {
			if (!normalizeText(node.nodeValue)) return NodeFilter.FILTER_REJECT;
			if (shouldSkipTranslation(node)) {
				return NodeFilter.FILTER_REJECT;
			}
			return NodeFilter.FILTER_ACCEPT;
		},
	});

	let node = walker.nextNode();
	while (node) {
		translateTextNode(node);
		node = walker.nextNode();
	}

	const originalTitle =
		document.documentElement.dataset.originalTitle || document.title;
	document.documentElement.dataset.originalTitle = originalTitle;
	document.title =
		currentLanguage === "en"
			? titleTranslations[originalTitle] || originalTitle
			: originalTitle;
	document.documentElement.lang = currentLanguage === "en" ? "en" : "nl";
	translateMetadataContent("meta[name='description']");
	translateMetadataContent("meta[property='og:title']");
	translateMetadataContent("meta[property='og:description']");
	translateMetadataContent("meta[name='twitter:title']");
	translateMetadataContent("meta[name='twitter:description']");
	updateLanguageMetadataLinks();
	translateAttributes();
}

function updateLanguageSwitcher() {
	document.querySelectorAll("[data-language-option]").forEach((button) => {
		const isActive = button.dataset.languageOption === currentLanguage;
		button.classList.toggle("is-active", isActive);
		button.setAttribute("aria-pressed", String(isActive));
	});
}

function setLanguage(language) {
	currentLanguage = language;
	localStorage.setItem("bma-language", language);
	translateStaticText();
	updateLanguageSwitcher();

	if (activePortfolioProjectKey && portfolioModal && !portfolioModal.hidden) {
		renderPortfolioModal(activePortfolioProjectKey, { keepFocus: true });
	}

	if (contactForm?.dataset.prefilledPackage) {
		fillPackageMessage(contactForm.dataset.prefilledPackage);
	}
}

function setupLanguageSwitcher() {
	const headerActions = document.querySelector(".header-actions");
	if (!headerActions || headerActions.querySelector(".language-switcher")) return;

	const switcher = document.createElement("div");
	switcher.className = "language-switcher";
	switcher.setAttribute("aria-label", "Taal kiezen");
	switcher.innerHTML = `
		<button class="language-option" type="button" data-language-option="nl" aria-pressed="true">NL</button>
		<button class="language-option" type="button" data-language-option="en" aria-pressed="false">EN</button>
	`;

	headerActions.prepend(switcher);
	switcher.addEventListener("click", (event) => {
		const button = event.target.closest("[data-language-option]");
		if (!button) return;
		setLanguage(button.dataset.languageOption);
	});

	translateStaticText();
	updateLanguageSwitcher();
}

function clampNumber(value, min, max) {
	return Math.min(max, Math.max(min, value));
}

function scrollToSection(id) {
	const section = document.getElementById(id);
	if (!section) return;

	const runScroll = () =>
		section.scrollIntoView({ behavior: "smooth", block: "start" });

	if (mobileMenu?.classList.contains("is-open")) {
		closeMenu();
		window.setTimeout(runScroll, 230);
		return;
	}

	runScroll();
}

function updateScrollState() {
	const maxScroll =
		document.documentElement.scrollHeight - document.documentElement.clientHeight;
	const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

	header?.classList.toggle("is-scrolled", window.scrollY > 14);
	document.documentElement.style.setProperty(
		"--scroll-progress",
		String(clampNumber(progress, 0, 1)),
	);
	updateHeroTransition();

	const activeId = ["diensten", "over-ons", "portfolio", "pakketten", "contact", "reviews"].reduce(
		(current, id) => {
			const section = document.getElementById(id);
			return section && section.getBoundingClientRect().top <= 180
				? id
				: current;
		},
		"",
	);

	document.querySelectorAll(".nav-link[data-target], .mobile-nav-link[data-target]").forEach((link) => {
		link.classList.toggle("is-active", link.dataset.target === activeId);
	});
}

function scheduleScrollStateUpdate() {
	if (scrollUpdateQueued) return;

	scrollUpdateQueued = true;
	window.requestAnimationFrame(() => {
		scrollUpdateQueued = false;
		updateScrollState();
	});
}

function updateHeroTransition() {
	if (!heroSection) return;

	const fadeDistance = clampNumber(heroSection.offsetHeight * 0.82, 360, 680);
	const fadeProgress = clampNumber((window.scrollY - 45) / fadeDistance, 0, 1);
	const opacity = 1 - fadeProgress;

	heroSection.style.setProperty("--hero-fade-opacity", opacity.toFixed(3));
	heroSection.style.setProperty(
		"--hero-fade-blur",
		`${(fadeProgress * 10).toFixed(2)}px`,
	);
	heroSection.style.setProperty(
		"--hero-fade-y",
		`${(-fadeProgress * 1.4).toFixed(2)}rem`,
	);
}

function closeMenu() {
	if (!menuToggle || !mobileMenu) return;

	menuToggle.classList.remove("is-open");
	menuToggle.setAttribute("aria-expanded", "false");
	mobileMenu.classList.remove("is-open");
	document.body.classList.remove("menu-open");
}

function openSpotlight(packageKey) {
	const item = getPackageDetails(packageKey);
	if (!item || !spotlight) return;

	activePackageKey = packageKey;
	spotlight.querySelector("#spotlight-title").textContent = item.title;
	spotlight.querySelector(".spotlight-price").textContent = item.price;
	spotlight.querySelector(".spotlight-description").textContent =
		item.description;

	const badge = spotlight.querySelector(".spotlight-badge");
	badge.hidden = !item.badge;
	badge.textContent = item.badge || "";

	const benefitList = spotlight.querySelector(".spotlight-benefits");
	benefitList.innerHTML = item.benefits
		.map(
			(benefit) =>
				`<li><span class="checkmark">✓</span><span>${benefit}</span></li>`,
		)
		.join("");

	spotlight.hidden = false;
	document.body.style.overflow = "hidden";
}

function closeSpotlight() {
	if (!spotlight) return;

	spotlight.hidden = true;
	document.body.style.overflow = "";
}

function renderPortfolioModal(projectKey, options = {}) {
	const item = portfolioProjectDetails[projectKey];
	if (!item || !portfolioModal) return;

	activePortfolioProjectKey = projectKey;
	if (!options.keepFocus) previousPortfolioFocus = document.activeElement;
	portfolioModal.querySelector(".portfolio-modal-number").textContent = item.number;
	portfolioModal.querySelector("#portfolio-modal-title").textContent =
		translateValue(item.title);
	portfolioModal.querySelector(".portfolio-modal-summary").textContent =
		translateValue(item.summary);

	const image = portfolioModal.querySelector(".portfolio-modal-media img");
	const media = portfolioModal.querySelector(".portfolio-modal-media");
	const livePreview = portfolioModal.querySelector(".portfolio-modal-live-preview");
	const liveFrame = livePreview?.querySelector("iframe");
	const hideModalMedia = Boolean(item.hideModalMedia);
	portfolioModal.classList.toggle("has-live-preview", Boolean(item.previewUrl));
	portfolioModal.classList.toggle("no-modal-media", hideModalMedia);

	if (hideModalMedia) {
		media.hidden = true;
		livePreview.hidden = true;
		if (liveFrame) {
			liveFrame.src = "";
			liveFrame.title = "";
		}
		image.hidden = true;
		image.removeAttribute("src");
		image.alt = "";
	} else if (item.previewUrl && livePreview && liveFrame) {
		media.hidden = false;
		image.hidden = true;
		image.removeAttribute("src");
		image.alt = "";
		livePreview.hidden = false;
		liveFrame.src = item.previewUrl;
		liveFrame.title = translateValue(item.previewTitle || item.title);
	} else {
		media.hidden = false;
		livePreview.hidden = true;
		if (liveFrame) {
			liveFrame.src = "";
			liveFrame.title = "";
		}
		image.hidden = false;
		image.src = item.image;
		image.alt = translateValue(item.imageAlt);
		image.width = item.imageWidth || 1200;
		image.height = item.imageHeight || 630;
		image.loading = "lazy";
	}

	portfolioModal.querySelector(".portfolio-modal-media figcaption").textContent =
		translateValue(item.caption);

	portfolioModal.querySelector(".portfolio-modal-badges").innerHTML = item.badges
		.map(
			(badge) =>
				`<span class="portfolio-badge ${badge.className}">${translateValue(badge.label)}</span>`,
		)
		.join("");

	portfolioModal.querySelector(".portfolio-modal-details").innerHTML = item.details
		.map(
			([label, value]) => `
				<div>
					<h4>${translateValue(label)}</h4>
					<p>${translateValue(value)}</p>
				</div>
			`,
		)
		.join("");

	portfolioModal.querySelector(".portfolio-modal-tags").innerHTML = item.tags
		.map((tag) => `<span class="tag">${translateValue(tag)}</span>`)
		.join("");

	const link = portfolioModal.querySelector(".portfolio-modal-link");
	link.href = item.link;
	link.textContent = translateValue(item.linkLabel);

	portfolioModal.hidden = false;
	document.body.style.overflow = "hidden";
	updateLiveSitePreviews();
	if (!options.keepFocus) portfolioModalClose?.focus({ preventScroll: true });
}

function closePortfolioModal() {
	if (!portfolioModal || portfolioModal.hidden) return;

	portfolioModal.hidden = true;
	document.body.style.overflow = "";
	previousPortfolioFocus?.focus?.({ preventScroll: true });
	previousPortfolioFocus = null;
	activePortfolioProjectKey = "";
}

function updateLiveSitePreviews() {
	document.querySelectorAll(".live-site-preview").forEach((preview) => {
		if (preview.hidden) return;

		const frame = preview.querySelector("iframe");
		const frameWidth = Number(frame?.getAttribute("width")) || livePreviewWidth;
		const frameHeight = Number(frame?.getAttribute("height")) || livePreviewHeight;
		const width = preview.getBoundingClientRect().width;
		if (!width) return;

		const scale = width / frameWidth;
		preview.style.setProperty("--iframe-width", `${frameWidth}px`);
		preview.style.setProperty("--iframe-height", `${frameHeight}px`);
		preview.style.setProperty("--preview-scale", scale.toFixed(4));
		preview.style.setProperty("--preview-height", `${frameHeight * scale}px`);
	});
}

function fillPackageMessage(packageKey) {
	const item = getPackageDetails(packageKey);
	const messageField = contactForm?.elements.message;
	const packageField = contactForm?.elements.package;
	if (!item || !messageField) return;

	messageField.value = item.inquiryMessage;
	if (packageField) packageField.value = packageDetails[packageKey]?.title || item.title;
	contactForm.dataset.prefilledPackage = packageKey;
	setError("message", "");
	hideContactStatus();

	window.setTimeout(() => {
		messageField.focus({ preventScroll: true });
	}, 220);
}

function setError(field, message) {
	if (!contactForm) return;

	const input = contactForm.elements[field];
	const error = contactForm.querySelector(`[data-error-for="${field}"]`);

	if (!input || !error) return;

	input.setAttribute("aria-invalid", message ? "true" : "false");
	error.textContent = message;
}

function hideContactStatus() {
	if (!contactStatus) return;

	contactStatus.hidden = true;
	contactStatus.classList.remove("is-error");
}

function showContactStatus(message, type = "success") {
	if (!contactStatus) return;

	contactStatus.textContent = message;
	contactStatus.classList.toggle("is-error", type === "error");
	contactStatus.hidden = false;
}

function validateForm() {
	if (!contactForm) return false;

	const name = contactForm.elements.name.value.trim();
	const email = contactForm.elements.email.value.trim();
	const message = contactForm.elements.message.value.trim();
	let isValid = true;

	setError("name", "");
	setError("email", "");
	setError("message", "");

	if (!name) {
		setError("name", currentLanguage === "en" ? "Enter your name." : "Vul je naam in.");
		isValid = false;
	}

	if (!email) {
		setError(
			"email",
			currentLanguage === "en" ? "Enter your email address." : "Vul je e-mailadres in.",
		);
		isValid = false;
	} else if (!/^\S+@\S+\.\S+$/.test(email)) {
		setError(
			"email",
			currentLanguage === "en" ? "Enter a valid email address." : "Vul een geldig e-mailadres in.",
		);
		isValid = false;
	}

	if (!message) {
		setError(
			"message",
			currentLanguage === "en" ? "Briefly tell us what you need." : "Vertel kort wat je nodig hebt.",
		);
		isValid = false;
	}

	return isValid;
}

function setupReveal() {
	const revealItems = document.querySelectorAll(".reveal");
	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	if (prefersReducedMotion) {
		revealItems.forEach((item) => item.classList.add("is-visible"));
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.target.classList.contains("phone-reveal")) {
					entry.target.classList.toggle("is-visible", entry.isIntersecting);
					return;
				}

				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.16 },
	);

	revealItems.forEach((item) => observer.observe(item));
}

function setupPhonePointerEffect() {
	const phone = document.querySelector(".iphone-shell");
	const phoneSection = document.querySelector(".phone-section");
	const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	if (!phone || !phoneSection || !canHover || prefersReducedMotion) return;

	const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

	const resetPhone = () => {
		phone.classList.remove("is-pointer-active");
		phone.style.setProperty("--phone-press", "0px");
		phone.style.setProperty("--phone-tilt-x", "0deg");
		phone.style.setProperty("--phone-tilt-y", "0deg");
		phone.style.setProperty("--phone-glow", "0");
	};

	const movePhone = (event) => {
		const sectionRect = phoneSection.getBoundingClientRect();
		const isSectionVisible =
			sectionRect.top < window.innerHeight && sectionRect.bottom > 0;

		if (!isSectionVisible) {
			resetPhone();
			return;
		}

		const rect = phone.getBoundingClientRect();
		const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
		const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
		const tiltY = (x - 0.5) * 5;
		const tiltX = (0.5 - y) * 4;

		phone.classList.add("is-pointer-active");
		phone.style.setProperty("--phone-press", "4px");
		phone.style.setProperty("--phone-tilt-x", `${tiltX.toFixed(2)}deg`);
		phone.style.setProperty("--phone-tilt-y", `${tiltY.toFixed(2)}deg`);
		phone.style.setProperty("--phone-light-x", `${Math.round(x * 100)}%`);
		phone.style.setProperty("--phone-light-y", `${Math.round(y * 100)}%`);
		phone.style.setProperty("--phone-glow", "1");
	};

	window.addEventListener("pointermove", movePhone, { passive: true });
	window.addEventListener("mousemove", movePhone, { passive: true });
	window.addEventListener("pointerleave", resetPhone);
	window.addEventListener("blur", resetPhone);
}

function setupPagePressure() {
	const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	if (!canHover || prefersReducedMotion) return;

	let activeTarget = null;
	const pressureSelector = [
		".card",
		".contact-info-card",
		".trustpilot-strip",
		".phone-info",
		"button",
		"a",
	].join(", ");

	const resetTarget = () => {
		if (!activeTarget) return;

		activeTarget.classList.remove("is-pressure-active");
		activeTarget.style.removeProperty("--surface-press");
		activeTarget.style.removeProperty("--surface-tilt-x");
		activeTarget.style.removeProperty("--surface-tilt-y");
		activeTarget = null;
	};

	window.addEventListener(
		"pointermove",
		(event) => {
			const targetElement =
				event.target instanceof Element ? event.target : null;

			if (targetElement?.closest(".contact-section, .portfolio-section, .pricing-layout, .pricing-note-card")) {
				resetTarget();
				return;
			}

			if (targetElement?.closest(".language-switcher")) {
				resetTarget();
				return;
			}

			if (targetElement?.closest(".package-faq-card")) {
				resetTarget();
				return;
			}

			const target = targetElement?.closest(pressureSelector);

			if (!target) {
				resetTarget();
				return;
			}

			if (activeTarget && activeTarget !== target) resetTarget();

			activeTarget = target;
			const rect = activeTarget.getBoundingClientRect();
			const x = (event.clientX - rect.left) / rect.width;
			const y = (event.clientY - rect.top) / rect.height;
			const tiltX = (0.5 - y) * 4;
			const tiltY = (x - 0.5) * 5;

			activeTarget.classList.add("is-pressure-active");
			activeTarget.style.setProperty("--surface-press", "2px");
			activeTarget.style.setProperty("--surface-tilt-x", `${tiltX.toFixed(2)}deg`);
			activeTarget.style.setProperty("--surface-tilt-y", `${tiltY.toFixed(2)}deg`);
		},
		{ passive: true },
	);

	window.addEventListener("pointerdown", () => {
		if (activeTarget) activeTarget.style.setProperty("--surface-press", "4px");
	});

	window.addEventListener("pointerup", () => {
		if (activeTarget) activeTarget.style.setProperty("--surface-press", "2px");
	});

	window.addEventListener("pointerleave", resetTarget);
	window.addEventListener("blur", resetTarget);
}

function setupCursorGlow() {
	const glow = document.querySelector(".cursor-glow");
	const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	if (!glow || !canHover || prefersReducedMotion) return;

	let pointerX = window.innerWidth / 2;
	let pointerY = window.innerHeight / 2;
	let glowX = pointerX;
	let glowY = pointerY;
	let animationFrame = 0;

	const renderGlow = () => {
		glowX += (pointerX - glowX) * 0.2;
		glowY += (pointerY - glowY) * 0.2;
		glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate3d(-50%, -50%, 0)`;
		animationFrame = window.requestAnimationFrame(renderGlow);
	};

	window.addEventListener(
		"pointermove",
		(event) => {
			pointerX = event.clientX;
			pointerY = event.clientY;
			document.body.classList.add("has-cursor-glow");

			if (!animationFrame) renderGlow();
		},
		{ passive: true },
	);

	window.addEventListener("pointerleave", () => {
		document.body.classList.remove("has-cursor-glow");
	});

	window.addEventListener("blur", () => {
		document.body.classList.remove("has-cursor-glow");
	});
}

function setupPortfolioToggle() {
	if (!portfolioToggle || !portfolioProjects) return;

	portfolioToggle.addEventListener("click", () => {
		const isOpen = !portfolioProjects.hidden;

		portfolioProjects.hidden = isOpen;
		portfolioToggle.setAttribute("aria-expanded", String(!isOpen));
		portfolioToggle.textContent = isOpen ? "Bekijk projecten" : "Verberg projecten";

		if (!isOpen) {
			portfolioProjects.querySelectorAll(".reveal").forEach((item) => {
				item.classList.add("is-visible");
			});
		}
	});
}

function setupPackageQueryPrefill() {
	if (!contactForm) return;

	const packageKey = new URLSearchParams(window.location.search).get("pakket");
	if (!packageKey || !getPackageDetails(packageKey)) return;

	fillPackageMessage(packageKey);
}

document.querySelector("[data-scroll-top]")?.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

menuToggle?.addEventListener("click", () => {
	const isOpen = !mobileMenu.classList.contains("is-open");
	menuToggle.classList.toggle("is-open", isOpen);
	menuToggle.setAttribute("aria-expanded", String(isOpen));
	mobileMenu.classList.toggle("is-open", isOpen);
	document.body.classList.toggle("menu-open", isOpen);
});

navButtons.forEach((button) => {
	button.addEventListener("click", () =>
		scrollToSection(button.dataset.target),
	);
});

if (spotlight) {
	packageCards.forEach((card) => {
		card.addEventListener("click", () => openSpotlight(card.dataset.package));
	});

	spotlight.addEventListener("click", closeSpotlight);
	spotlightCard?.addEventListener("click", (event) => event.stopPropagation());
	spotlightClose?.addEventListener("click", closeSpotlight);
	spotlightBack?.addEventListener("click", closeSpotlight);

	spotlight
		.querySelector("[data-target='contact']")
		?.addEventListener("click", () => {
			const selectedPackageKey = activePackageKey;
			closeSpotlight();
			fillPackageMessage(selectedPackageKey);
			window.setTimeout(() => scrollToSection("contact"), 120);
		});
}

if (portfolioModal) {
	portfolioTriggers.forEach((button) => {
		button.addEventListener("click", () =>
			renderPortfolioModal(button.dataset.portfolioTrigger),
		);
	});

	portfolioModal.addEventListener("click", closePortfolioModal);
	portfolioModalCard?.addEventListener("click", (event) => event.stopPropagation());
	portfolioModalClose?.addEventListener("click", closePortfolioModal);
}

document.addEventListener("click", (event) => {
	if (event.target.closest(".portfolio-modal-close")) {
		closePortfolioModal();
	}
});

window.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && spotlight && !spotlight.hidden) closeSpotlight();
	if (event.key === "Escape" && portfolioModal && !portfolioModal.hidden) {
		closePortfolioModal();
	}
});

window.addEventListener("scroll", scheduleScrollStateUpdate, { passive: true });
window.addEventListener("resize", () => {
	updateScrollState();
	updateLiveSitePreviews();
});

window.addEventListener("load", updateLiveSitePreviews);
window.requestAnimationFrame(updateLiveSitePreviews);

contactForm?.addEventListener("input", (event) => {
	if (event.target.name) setError(event.target.name, "");
	if (event.target.name === "message") delete contactForm.dataset.prefilledPackage;
	hideContactStatus();
});

contactForm?.elements.package?.addEventListener("change", (event) => {
	const selectedKey = Object.entries(packageDetails).find(
		([, details]) => details.title === event.target.value,
	)?.[0];

	if (selectedKey) fillPackageMessage(selectedKey);
});

contactForm?.addEventListener("submit", async (event) => {
	event.preventDefault();

	if (!validateForm()) return;

	hideContactStatus();
	contactSubmit.disabled = true;
	contactSubmit.textContent = currentLanguage === "en" ? "Sending..." : "Versturen...";

	try {
		const response = await fetch(contactForm.dataset.endpoint, {
			method: "POST",
			body: new FormData(contactForm),
			headers: {
				Accept: "application/json",
			},
		});

		if (!response.ok) {
			throw new Error("Contact form submission failed");
		}

		contactForm.reset();
		showContactStatus(
			currentLanguage === "en"
				? "Thank you. Your request has been sent."
				: "Bedankt. Je aanvraag is verzonden.",
		);
	} catch (error) {
		showContactStatus(
			currentLanguage === "en"
				? "Sending failed. Email us directly at info@bmastudio.be."
				: "Versturen lukt niet. Mail ons rechtstreeks via info@bmastudio.be.",
			"error",
		);
	} finally {
		contactSubmit.disabled = false;
		contactSubmit.textContent =
			currentLanguage === "en" ? "Send request" : "Verstuur aanvraag";
	}
});

setupLanguageSwitcher();
setupReveal();
setupPhonePointerEffect();
setupPagePressure();
setupCursorGlow();
setupPortfolioToggle();
setupPackageQueryPrefill();
updateScrollState();
