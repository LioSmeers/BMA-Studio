const packageDetails = {
	visibility: {
		title: "BMA Local Visibility Sprint",
		badge: "Instappakket",
		price: "€249 eenmalig",
		description:
			"Voor ondernemers die eerst lokaal zichtbaar willen worden met een compacte online basis, zonder maandelijkse betaling of onderhoud.",
		benefits: [
			"Compacte one-page website",
			"Klant levert teksten en foto's aan",
			"1 revisieronde",
			"1 jaar hosting + .be-domeinnaam inbegrepen",
			"Geen maandelijkse betaling of onderhoud",
		],
		inquiryMessage:
			"Hallo BMA Studio,\n\nIk ben geïnteresseerd in de BMA Local Visibility Sprint van €249. Ik wil graag lokaal zichtbaarder worden met een kleine HTML-basiswebsite met de belangrijkste info, zonder maandelijkse betaling of onderhoudskost.\n\nAlvast bedankt!",
	},
	starter: {
		title: "Starter Website",
		price: "€299 setup + €29/mnd",
		description:
			"Voor kleine zelfstandigen die snel professioneel online willen staan, met hulp bij opbouw, teksten en maandelijks onderhoud.",
		benefits: [
			"Persoonlijk one-page ontwerp",
			"Hulp bij structuur en teksten",
			"Contactformulier",
			"1 jaar hosting + .be-domeinnaam inbegrepen",
			"30 minuten onderhoud per maand",
		],
		inquiryMessage:
			"Hallo BMA Studio,\n\nIk ben geïnteresseerd in het Starter Website pakket. Ik wil graag meer informatie over de opstart, de maandelijkse kost en wat jullie nodig hebben om te beginnen.\n\nAlvast bedankt!",
	},
	local: {
		title: "Local Business Website",
		badge: "Aanbevolen",
		price: "Vanaf €499 setup + €59/mnd",
		description:
			"Voor lokale bedrijven die een duidelijke bedrijfswebsite nodig hebben.",
		benefits: [
			"3 tot 4 pagina's",
			"Contactformulier en Google Maps",
			"1 jaar hosting + .be-domeinnaam inbegrepen",
			"1 uur onderhoud per maand",
		],
		inquiryMessage:
			"Hallo BMA Studio,\n\nIk ben geïnteresseerd in het Local Business Website pakket. Ik wil graag bespreken hoe jullie mijn bedrijf online kunnen zetten met meerdere pagina's, een contactformulier en Google Maps.\n\nAlvast bedankt!",
	},
	content: {
		title: "Website + Content",
		price: "Vanaf €699 setup + €129/mnd",
		description:
			"Voor bedrijven die naast een website ook sterker zichtbaar willen zijn op sociale media.",
		benefits: [
			"4 tot 5 pagina's",
			"2 korte social media edits per maand",
			"1 jaar hosting + .be-domeinnaam inbegrepen",
			"2 uur onderhoud per maand",
		],
		inquiryMessage:
			"Hallo BMA Studio,\n\nIk ben geïnteresseerd in het Website + Content pakket. Ik wil graag meer informatie over een website in combinatie met social media content en maandelijks onderhoud.\n\nAlvast bedankt!",
	},
};

const englishPackageDetails = {
	visibility: {
		title: "BMA Local Visibility Sprint",
		badge: "Starter package",
		price: "€249 one-time",
		description:
			"For business owners who first want to become locally visible with a compact online foundation, without a monthly payment or maintenance.",
		benefits: [
			"Compact one-page website",
			"Client provides text and photos",
			"1 revision round",
			"1 year of hosting + .be domain name included",
			"No monthly payment or maintenance",
		],
		inquiryMessage:
			"Hello BMA Studio,\n\nI am interested in the BMA Local Visibility Sprint for €249. I would like to become more visible locally with a small HTML starter website with the most important info, without a monthly payment or maintenance fee.\n\nThank you!",
	},
	starter: {
		title: "Starter Website",
		price: "€299 setup + €29/month",
		description:
			"For small independent businesses that want to look professional online quickly, with help on structure, copy and monthly maintenance.",
		benefits: [
			"Personal one-page design",
			"Help with structure and copy",
			"Contact form",
			"1 year of hosting + .be domain name included",
			"30 minutes of maintenance per month",
		],
		inquiryMessage:
			"Hello BMA Studio,\n\nI am interested in the Starter Website package. I would like more information about the setup, monthly cost and what you need to get started.\n\nThank you!",
	},
	local: {
		title: "Local Business Website",
		badge: "Recommended",
		price: "From €499 setup + €59/month",
		description:
			"For local businesses that need a clear company website.",
		benefits: [
			"3 to 4 pages",
			"Contact form and Google Maps",
			"1 year of hosting + .be domain name included",
			"1 hour of maintenance per month",
		],
		inquiryMessage:
			"Hello BMA Studio,\n\nI am interested in the Local Business Website package. I would like to discuss how you can put my business online with multiple pages, a contact form and Google Maps.\n\nThank you!",
	},
	content: {
		title: "Website + Content",
		price: "From €699 setup + €129/month",
		description:
			"For businesses that want stronger social media visibility alongside their website.",
		benefits: [
			"4 to 5 pages",
			"2 short social media edits per month",
			"1 year of hosting + .be domain name included",
			"2 hours of maintenance per month",
		],
		inquiryMessage:
			"Hello BMA Studio,\n\nI am interested in the Website + Content package. I would like more information about a website combined with social media content and monthly maintenance.\n\nThank you!",
	},
};

const portfolioProjectDetails = {
	vergoot: {
		number: "01",
		title: "Vergoot - Local Business",
		badges: [{ label: "Conceptwebsite", className: "portfolio-badge-concept" }],
		summary:
			"Conceptwebsite voor een lokale dakwerker, bedoeld om vertrouwen, diensten en offerte-aanvragen duidelijk te tonen.",
		image: "./public/portfolio-vergoot-result.png",
		imageAlt: "Hero screenshot van Vergoot dakwerken conceptwebsite",
		caption: "Screenshot van de tijdelijke demonstratieomgeving.",
		hideModalMedia: true,
		link: "https://liosmeers.github.io/dakwerken-vergoot/",
		linkLabel: "Bekijk Vergoot",
		tags: ["Concept", "Tijdelijke demo via GitHub Pages"],
		details: [
			["Projecttype", "Conceptwebsite"],
			["Sector", "Dakwerken en renovatie"],
			["Dienst", "Local Business Website"],
			["Uitdaging", "Een dienstverlener snel betrouwbaar laten overkomen en bezoekers naar een aanvraag sturen."],
			["Oplossing", "Een duidelijke bedrijfswebsite met diensten, vertrouwen en contactmomenten op logische plaatsen."],
			["Belangrijkste functies", "Dienstenoverzicht, offertefocus, mobiele opbouw en contactknoppen."],
		],
	},
	fleur: {
		number: "02",
		title: "Fleur - Website + Content",
		badges: [{ label: "Conceptwebsite", className: "portfolio-badge-concept" }],
		summary:
			"Conceptwebsite voor een beautyzaak, bedoeld om een warme stijl, diensten en contentmogelijkheden te tonen.",
		image: "./public/portfolio-fleura-result.png",
		imageAlt: "Hero screenshot van Fleur beauty clinic conceptwebsite",
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
			["Oplossing", "Een uitgebreidere conceptsite met diensten, sfeer, navigatie en duidelijke contactmomenten."],
			["Belangrijkste functies", "Meerdere pagina's, dienstpresentatie, visuele sfeer en call-to-action."],
		],
	},
	nova: {
		number: "03",
		title: "Nova - Starter Website",
		badges: [{ label: "Conceptwebsite", className: "portfolio-badge-concept" }],
		summary:
			"Compacte conceptwebsite voor een starter, bedoeld om te tonen hoe een eenvoudige eerste online basis eruit kan zien.",
		image: "./public/portfolio-nova-result.png",
		imageAlt: "Hero screenshot van de Nova starter conceptwebsite",
		caption: "Conceptwebsite in een tijdelijke demonstratieomgeving.",
		hideModalMedia: true,
		link: "https://liosmeers.github.io/Nova-website/",
		linkLabel: "Bekijk Nova",
		tags: ["Concept", "Tijdelijke demo via GitHub Pages"],
		details: [
			["Projecttype", "Conceptwebsite"],
			["Sector", "Starter of kleine zelfstandige"],
			["Dienst", "Starter Website"],
			["Uitdaging", "Met weinig pagina's toch snel duidelijk maken wat het bedrijf doet."],
			["Oplossing", "Een compacte pagina met een sterke eerste indruk, kerninformatie en directe call-to-action."],
			["Belangrijkste functies", "Hero, korte uitleg, duidelijke CTA en mobiele basisstructuur."],
		],
	},
	walk: {
		number: "04",
		title: "Walk Brussels",
		badges: [
			{ label: "UX-project", className: "portfolio-badge-ux" },
			{ label: "Schoolproject", className: "portfolio-badge-school" },
		],
		summary:
			"UX- en schoolproject waarin een bestaande rapportageflow mobieler, korter en duidelijker werd uitgewerkt.",
		image: "./public/portfolio-walk-brussels-result.png",
		imageAlt: "Mobiele Walk Brussels registratieflow",
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
	"Bespreek je project": "Discuss your project",
	"Vergelijk pakketten": "Compare packages",
	"Meer info": "More info",
	"Websites · Maintain · Content": "Websites · Maintain · Content",
	"BMA Studio · Lio Smeers. Alle rechten voorbehouden.": "BMA Studio · Lio Smeers. All rights reserved.",
	"De online basis voor lokale bedrijven.": "The online foundation for local businesses.",
	"BMA Studio helpt lokale ondernemingen met duidelijke websites, maandelijks onderhoud en social media content die vertrouwen opbouwen en klanten sneller laten contact opnemen.": "BMA Studio helps local businesses with clear websites, monthly maintenance and social media content that builds trust and makes it easier for customers to get in touch.",
	"Persoonlijk contact met Lio": "Personal contact with Lio",
	"Antwoord binnen dezelfde dag": "Reply the same day",
	"Websites voor lokale ondernemers": "Websites for local business owners",
	"Basis": "Foundation",
	"Gebouwd voor ondernemers die vooruit willen.": "Built for business owners who want to move forward.",
	"We maken websites die duidelijk zijn, snel laden en meteen tonen waarom klanten voor jou moeten kiezen.": "We build websites that are clear, fast and immediately show why customers should choose you.",
	"Online": "Online",
	"100% mobile-first": "100% mobile-first",
	"Voor klanten die zoeken, vergelijken en boeken via hun smartphone.": "For customers who search, compare and book on their smartphone.",
	"Vanaf €25/mnd": "From €25/month",
	"Alleen voor onderhoud: vaste pakketten zodat je website actueel blijft.": "Maintenance only: fixed packages to keep your website up to date.",
	"Voor lokale zaken": "For local businesses",
	"Vakmannen, horeca, salons, handelszaken, trainers en creatieve ondernemers.": "Tradespeople, hospitality, salons, shops, trainers and creative entrepreneurs.",
	"Werkwijze": "Approach",
	"Strak, persoonlijk en zonder gedoe.": "Clean, personal and hassle-free.",
	"We denken mee over je aanbod, houden je website netjes bij en reageren dezelfde dag op je aanvraag.": "We think along with your offer, keep your website tidy and reply to your request the same day.",
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
	"Elk pakket heeft een duidelijk doel, van sneller lokaal zichtbaar worden tot een volledige website.": "Each package has a clear goal, from becoming visible locally faster to getting a full website.",
	"Keuzehulp": "Decision guide",
	"Visibility Sprint als je eerst laagdrempelig zichtbaar wil worden met een kleine basiswebsite.": "Visibility Sprint if you first want an accessible way to become visible with a small starter website.",
	"Starter als je snel professioneel online wil.": "Starter if you want to look professional online quickly.",
	"Local Business als je meerdere pagina's en aanvragen nodig hebt.": "Local Business if you need multiple pages and enquiries.",
	"Website + Content als je ook maandelijks zichtbaar wil blijven.": "Website + Content if you also want monthly visibility.",
	"Vergelijk": "Compare",
	"Vier duidelijke routes.": "Four clear routes.",
	"BMA Local Visibility Sprint": "BMA Local Visibility Sprint",
	"Instappakket": "Starter package",
	"€249 eenmalig": "€249 one-time",
	"Voor starters die eerst lokaal zichtbaar willen worden met een compacte online basis, zonder maandelijkse betaling of onderhoud.": "For starters who first want to become locally visible with a compact online foundation, without a monthly payment or maintenance.",
	"Compacte one-page website": "Compact one-page website",
	"Klant levert teksten en foto's aan": "Client provides text and photos",
	"1 revisieronde": "1 revision round",
	"1 jaar hosting + .be-domeinnaam inbegrepen": "1 year of hosting + .be domain name included",
	"Geen maandelijkse betaling of onderhoud": "No monthly payment or maintenance",
	"Vraag Visibility Sprint aan": "Request Visibility Sprint",
	"Starter Website": "Starter Website",
	"€299 setup + €29/mnd": "€299 setup + €29/month",
	"Voor kleine zelfstandigen die snel professioneel online willen staan, met hulp bij opbouw, teksten en maandelijks onderhoud.": "For small independent businesses that want to look professional online quickly, with help on structure, copy and monthly maintenance.",
	"Persoonlijk one-page ontwerp": "Personal one-page design",
	"Hulp bij structuur en teksten": "Help with structure and copy",
	"Contactformulier": "Contact form",
	"30 minuten onderhoud per maand": "30 minutes of maintenance per month",
	"Vraag Starter aan": "Request Starter",
	"Local Business Website": "Local Business Website",
	"Aanbevolen": "Recommended",
	"Vanaf €499 setup + €59/mnd": "From €499 setup + €59/month",
	"Voor lokale bedrijven die een duidelijke bedrijfswebsite nodig hebben.": "For local businesses that need a clear company website.",
	"3 tot 4 pagina's": "3 to 4 pages",
	"Contactformulier en Google Maps": "Contact form and Google Maps",
	"1 uur onderhoud per maand": "1 hour of maintenance per month",
	"Vraag Local Business aan": "Request Local Business",
	"Vanaf €699 setup + €129/mnd": "From €699 setup + €129/month",
	"Voor bedrijven die naast een website ook sterker zichtbaar willen zijn op sociale media.": "For businesses that want stronger social media visibility alongside their website.",
	"4 tot 5 pagina's": "4 to 5 pages",
	"2 korte social media edits per maand": "2 short social media edits per month",
	"2 uur onderhoud per maand": "2 hours of maintenance per month",
	"Vraag Content pakket aan": "Request Content package",
	"Vanaf het tweede jaar gelden verlengingskosten, die vooraf worden gecommuniceerd.": "From the second year onwards, renewal costs apply and will be communicated in advance.",
	"Twijfel je?": "Not sure?",
	"Stuur je vraag door, dan kiezen we samen.": "Send your question and we will choose together.",
	"Een korte omschrijving van je bedrijf is genoeg om gericht advies te geven.": "A short description of your business is enough for focused advice.",
	"Een professionele online basis, zonder omwegen.": "A professional online foundation, without detours.",
	"We combineren webdesign, onderhoud en content zodat lokale ondernemers sneller vertrouwen opbouwen en meer aanvragen uit hun website halen.": "We combine web design, maintenance and content so local business owners build trust faster and get more enquiries from their website.",
	"Userflow": "User flow",
	"Jij vertelt wat je bedrijf nodig heeft.": "You tell us what your business needs.",
	"We kiezen de juiste structuur en aanpak.": "We choose the right structure and approach.",
	"Je krijgt een duidelijke website die klaar is om klanten te ontvangen.": "You get a clear website that is ready to welcome customers.",
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
	"Bekijk hoe een starter website, lokale bedrijfswebsite of website met content eruit kan zien.": "See what a starter website, local business website or website with content can look like.",
	"Kijkrichting": "What to look for",
	"Bekijk welk voorbeeld het dichtst bij jouw zaak ligt.": "See which example is closest to your business.",
	"Kies daarna een pakket dat past bij je nodige pagina's.": "Then choose a package that fits the pages you need.",
	"Stuur je aanvraag door met die richting als startpunt.": "Send your request with that direction as a starting point.",
	"Projecten": "Projects",
	"Werk en voorbeeldsites.": "Work and example sites.",
	"Relevante voorbeelden voor lokale bedrijven.": "Relevant examples for local businesses.",
	"Deze conceptwebsites tonen stijl, structuur en mogelijkheden voor verschillende soorten ondernemers. Links naar GitHub Pages zijn tijdelijke demonstratieomgevingen.": "These concept websites show style, structure and possibilities for different types of business owners. GitHub Pages links are temporary demo environments.",
	"Conceptwebsite": "Concept website",
	"Conceptwebsite voor een lokale dakwerker, bedoeld om vertrouwen, diensten en offerte-aanvragen duidelijk te tonen.": "Concept website for a local roofer, designed to clearly show trust, services and quote requests.",
	"Conceptwebsite voor een beautyzaak, bedoeld om een warme stijl, diensten en contentmogelijkheden te tonen.": "Concept website for a beauty business, designed to show a warm style, services and content possibilities.",
	"Compacte conceptwebsite voor een starter, bedoeld om te tonen hoe een eenvoudige eerste online basis eruit kan zien.": "Compact concept website for a starter, designed to show what a simple first online foundation can look like.",
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
	"Nova - Starter Website": "Nova - Starter Website",
	"Een compacte voorbeeldsite met een duidelijke eerste indruk en snelle call-to-action.": "A compact example site with a clear first impression and quick call to action.",
	"Starter pakket": "Starter package",
	"Compacte website": "Compact website",
	"Bekijk Nova": "View Nova",
	"Voorbeeld van een Starter Website.": "Example of a Starter Website.",
	"Vergoot - Local Business": "Vergoot - Local Business",
	"Een lokale bedrijfswebsite met focus op vertrouwen, diensten en offerte-aanvragen.": "A local business website focused on trust, services and quote requests.",
	"Offertegericht": "Quote-focused",
	"Bekijk Vergoot": "View Vergoot",
	"Voorbeeld van een Local Business Website.": "Example of a Local Business Website.",
	"Fleur - Website + Content": "Fleur - Website + Content",
	"Een uitgebreider voorbeeld voor een zaak die warm, professioneel en herkenbaar wil overkomen.": "A more extensive example for a business that wants to feel warm, professional and recognizable.",
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
	"Local Business Website": "Local Business Website",
	"Een dienstverlener snel betrouwbaar laten overkomen en bezoekers naar een aanvraag sturen.": "Make a service provider feel trustworthy quickly and guide visitors toward an enquiry.",
	"Een duidelijke bedrijfswebsite met diensten, vertrouwen en contactmomenten op logische plaatsen.": "A clear business website with services, trust signals and contact moments in logical places.",
	"Dienstenoverzicht, offertefocus, mobiele opbouw en contactknoppen.": "Service overview, quote focus, mobile structure and contact buttons.",
	"Beauty en verzorging": "Beauty and care",
	"Een visuele stijl tonen die zacht, professioneel en overzichtelijk blijft.": "Show a visual style that stays soft, professional and clear.",
	"Een uitgebreidere conceptsite met diensten, sfeer, navigatie en duidelijke contactmomenten.": "A more extensive concept site with services, atmosphere, navigation and clear contact moments.",
	"Meerdere pagina's, dienstpresentatie, visuele sfeer en call-to-action.": "Multiple pages, service presentation, visual atmosphere and call to action.",
	"Starter of kleine zelfstandige": "Starter or small independent business",
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
	"Bericht": "Message",
	"Verstuur aanvraag": "Send request",
	"Bedankt. Je aanvraag is verzonden.": "Thank you. Your request has been sent.",
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
	"BMA Studio | Webdesign voor starters en ondernemers": "BMA Studio | Web design for starters and business owners",
	"Pakketten - BMA Studio": "Packages - BMA Studio",
	"Website pakketten voor starters | BMA Studio": "Website packages for starters | BMA Studio",
	"Diensten - BMA Studio": "Services - BMA Studio",
	"Webdesign, branding en marketing | BMA Studio": "Web design, branding and marketing | BMA Studio",
	"Portfolio - BMA Studio": "Portfolio - BMA Studio",
	"Website voorbeelden voor ondernemers | BMA Studio": "Website examples for business owners | BMA Studio",
	"Over ons - BMA Studio": "About us - BMA Studio",
	"Over BMA Studio | Webdesign en marketing": "About BMA Studio | Web design and marketing",
	"Contact - BMA Studio": "Contact - BMA Studio",
	"Contacteer BMA Studio | Website laten maken": "Contact BMA Studio | Have a website made",
	"Bedankt - BMA Studio": "Thank you - BMA Studio",
	"Privacyverklaring - BMA Studio": "Privacy statement - BMA Studio",
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
let currentLanguage = localStorage.getItem("bma-language") || "nl";
const originalTextByNode = new WeakMap();
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
	if (!item || !messageField) return;

	messageField.value = item.inquiryMessage;
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

			if (targetElement?.closest(".contact-section, .portfolio-section")) {
				resetTarget();
				return;
			}

			if (targetElement?.closest(".language-switcher")) {
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
