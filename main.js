const packageDetails = {
	"onepage-onetime": {
		"title": "BMA Visibility Sprint - One-page Website (eenmalig)",
		"description": "Een website met je aanbod en contactgegevens op één pagina. Je betaalt eenmalig.",
		"benefits": [
			"1 jaar hosting en .be-domeinnaam inbegrepen",
			"Geen onderhoud",
			"Eigendom vanaf oplevering",
			"Vanaf jaar 2: €59/jaar"
		],
		"inquiryMessage": "Hallo Lio,\n\nIk wil graag een voorstel op maat voor BMA Visibility Sprint - One-page Website (eenmalig).\n\nAlvast bedankt."
	},
	"onepage-subscription": {
		"title": "BMA Visibility Sprint - One-page Website (abonnement)",
		"description": "Een one-page met hosting, domeinnaam en klein onderhoud via 1 aanvraag per maand.",
		"benefits": [
			"Minimum 12 maanden",
			"Hosting en .be-domeinnaam zolang abonnement actief is",
			"Eigendom na betaling van 12 maanden",
			"Klein · 1 aanvraag/mnd",
			"Na de eerste 12 maanden maandelijks opzegbaar met één maand opzegtermijn"
		],
		"inquiryMessage": "Hallo Lio,\n\nIk wil graag een voorstel op maat voor BMA Visibility Sprint - One-page Website (abonnement).\n\nAlvast bedankt."
	},
	"business": {
		"title": "Business Website",
		"badge": "Aanbevolen voor lokale bedrijven",
		"description": "Een website van 3 tot 4 pagina’s, met hulp bij de inhoud en 2 onderhoudsaanvragen per maand.",
		"benefits": [
			"3 tot 4 pagina's",
			"Hulp met teksten en structuur",
			"Contactformulier en Google Maps",
			"2 revisierondes",
			"Hosting en .be-domeinnaam zolang het abonnement actief is",
			"Gemiddeld · 2 aanvragen/mnd",
			"Eigendom vanaf oplevering",
			"Geen minimumlooptijd",
			"Maandelijks opzegbaar met één maand opzegtermijn"
		],
		"inquiryMessage": "Hallo Lio,\n\nIk wil graag een voorstel op maat voor Business Website.\n\nAlvast bedankt."
	},
	"content": {
		"title": "Website + Content",
		"description": "Een website van 4 tot 5 pagina’s, met 2 korte socialmediavideo’s en 4 onderhoudsaanvragen per maand.",
		"benefits": [
			"4 tot 5 pagina's",
			"Alles uit Business",
			"Groot · 4 aanvragen/mnd",
			"2 korte socialmediavideo's per maand",
			"BMA verzorgt montage; klant levert beeldmateriaal",
			"1 correctieronde per video",
			"Eigendom vanaf oplevering",
			"Geen minimumlooptijd",
			"Maandelijks opzegbaar met één maand opzegtermijn"
		],
		"inquiryMessage": "Hallo Lio,\n\nIk wil graag een voorstel op maat voor Website + Content.\n\nAlvast bedankt."
	},
	"prototype": {
		"title": "Gratis websiteprototype",
		"description": "Een eerste ontwerpvoorstel voor je website, gratis en vrijblijvend.",
		"benefits": [
			"Gratis aanvraag",
			"Eerste visuele richting",
			"Vrijblijvend vervolg"
		],
		"inquiryMessage": "Hallo Lio,\n\nIk wil een gratis websiteprototype aanvragen voor mijn bedrijf.\n\nAlvast bedankt."
	}
};

const englishPackageDetails = {
	"onepage-onetime": {
		"title": "BMA Visibility Sprint - One-page Website (one-time)",
		"description": "A website with your services and contact details on one page. You pay once.",
		"benefits": [
			"1 year of hosting and .be domain name included",
			"No maintenance",
			"Ownership from delivery",
			"From year 2: €59/year"
		],
		"inquiryMessage": "Hello Lio,\n\nI would like a tailored proposal for BMA Visibility Sprint - One-page Website (one-time).\n\nThank you."
	},
	"onepage-subscription": {
		"title": "BMA Visibility Sprint - One-page Website (subscription)",
		"description": "A one-page site with hosting, a domain name and small maintenance through 1 request per month.",
		"benefits": [
			"Minimum 12 months",
			"Hosting and .be domain name while the subscription is active",
			"Ownership after 12 months have been paid",
			"Small · 1 request/month",
			"After the first 12 months, cancellable monthly with one month's notice"
		],
		"inquiryMessage": "Hello Lio,\n\nI would like a tailored proposal for BMA Visibility Sprint - One-page Website (subscription).\n\nThank you."
	},
	"business": {
		"title": "Business Website",
		"badge": "Recommended for local businesses",
		"description": "A website with 3 to 4 pages, help with content and 2 maintenance requests per month.",
		"benefits": [
			"3 to 4 pages",
			"Help with text and structure",
			"Contact form and Google Maps",
			"2 revision rounds",
			"Hosting and .be domain name while the subscription is active",
			"Medium · 2 requests/month",
			"Ownership from delivery",
			"No minimum term",
			"Cancellable monthly with one month's notice"
		],
		"inquiryMessage": "Hello Lio,\n\nI would like a tailored proposal for Business Website.\n\nThank you."
	},
	"content": {
		"title": "Website + Content",
		"description": "A website with 4 to 5 pages, 2 short social media videos and 4 maintenance requests per month.",
		"benefits": [
			"4 to 5 pages",
			"Everything from Business",
			"Large · 4 requests/month",
			"2 short social media videos per month",
			"BMA handles editing; client provides footage",
			"1 correction round per video",
			"Ownership from delivery",
			"No minimum term",
			"Cancellable monthly with one month's notice"
		],
		"inquiryMessage": "Hello Lio,\n\nI would like a tailored proposal for Website + Content.\n\nThank you."
	},
	"prototype": {
		"title": "Free website prototype",
		"description": "An initial design for your website, free and without obligation.",
		"benefits": [
			"Free request",
			"First visual direction",
			"No-obligation next step"
		],
		"inquiryMessage": "Hello Lio,\n\nI would like to request a free website prototype for my business.\n\nThank you."
	}
};

const visibilitySprintOptions = {
	"nl": {
		"onetime": {
			"description": "Voor een bedrijf dat zijn aanbod op één pagina kan uitleggen.",
			"price": "€499 eenmalig",
			"ctaLabel": "Vraag een offerte",
			"ctaHref": "./contact.html?pakket=onepage-onetime",
			"benefits": [
				"Professionele one-page website",
				"Contactformulier en Google Maps",
				"1 revisieronde",
				"1 jaar hosting en .be-domeinnaam inbegrepen"
			],
			"facts": {
				"term": "Geen abonnement",
				"maintenance": "Geen onderhoud",
				"ownership": "Vanaf oplevering",
				"hosting": "1 jaar hosting en .be-domeinnaam inbegrepen. Vanaf jaar 2: €59/jaar.",
				"revisions": "1 revisieronde voor de website."
			},
			"details": [
				"Klant levert teksten en foto's aan.",
				"Contactformulier en Google Maps inbegrepen."
			]
		},
		"subscription": {
			"description": "Dezelfde one-page website, met klein onderhoud en maandelijkse betaling.",
			"price": "€0 opstart + €59/mnd",
			"ctaLabel": "Vraag een offerte",
			"ctaHref": "./contact.html?pakket=onepage-subscription",
			"benefits": [
				"Professionele one-page website",
				"Geen opstartkost",
				"Hosting en .be-domeinnaam zolang abonnement actief is",
				"Klein onderhoud inbegrepen"
			],
			"facts": {
				"term": "Minimumlooptijd van 12 maanden",
				"maintenance": "Klein · 1 aanvraag/mnd",
				"ownership": "Na betaling van 12 maanden",
				"hosting": "Hosting en één .be-domeinnaam inbegrepen zolang het abonnement actief is.",
				"revisions": "1 revisieronde voor de website."
			},
			"details": [
				"Klant levert teksten en foto's aan.",
				"Contactformulier en Google Maps inbegrepen.",
				"Na de eerste 12 maanden maandelijks opzegbaar met één maand opzegtermijn."
			]
		}
	},
	"en": {
		"onetime": {
			"description": "For a business that can explain its services or products on one page.",
			"price": "€499 one-time",
			"ctaLabel": "Request a quote",
			"ctaHref": "./contact.html?pakket=onepage-onetime",
			"benefits": [
				"Professional one-page website",
				"Contact form and Google Maps",
				"1 revision round",
				"1 year of hosting and .be domain name included"
			],
			"facts": {
				"term": "No subscription",
				"maintenance": "No maintenance",
				"ownership": "From delivery",
				"hosting": "1 year of hosting and .be domain name included. From year 2: €59/year.",
				"revisions": "1 revision round for the website."
			},
			"details": [
				"Client provides text and photos.",
				"Contact form and Google Maps included."
			]
		},
		"subscription": {
			"description": "The same one-page website, with small maintenance and monthly payments.",
			"price": "€0 setup + €59/month",
			"ctaLabel": "Request a quote",
			"ctaHref": "./contact.html?pakket=onepage-subscription",
			"benefits": [
				"Professional one-page website",
				"No setup fee",
				"Hosting and .be domain name while the subscription is active",
				"Small maintenance included"
			],
			"facts": {
				"term": "Minimum term of 12 months",
				"maintenance": "Small · 1 request/month",
				"ownership": "After 12 months have been paid",
				"hosting": "Hosting and one .be domain name included while the subscription is active.",
				"revisions": "1 revision round for the website."
			},
			"details": [
				"Client provides text and photos.",
				"Contact form and Google Maps included.",
				"After the first 12 months, cancellable monthly with one month's notice."
			]
		}
	}
};

const portfolioProjectDetails = {
	thor: {
		number: "01",
		title: "Thor Smeers — Business Website",
		badges: [],
		summary:
			"Business Website voor vastgoedfotografie, videografie en socialmediacontent, met een sterke visuele portfolio, duidelijke diensten en eenvoudige contactmogelijkheden.",
		caption: "Schermafbeelding van de website.",
		image: "./assets/site-previews/thor-smeers.jpg",
		imageAlt: "Schermafbeelding van de website van Thor Smeers",
		imageWidth: 1440,
		imageHeight: 821,
		link: "https://thorsmeers.be",
		linkLabel: "Bekijk Thor Smeers",
		tags: ["Klantwebsite", "Live website", "Business Website"],
		details: [
			["Projecttype", "Klantproject"],
			["Sector", "Vastgoedfotografie, videografie en socialmediacontent"],
			["Dienst", "Business Website"],
			["Uitdaging", "Een sterke visuele portfolio combineren met duidelijke diensten en een eenvoudige contactflow."],
			["Oplossing", "Een visuele bedrijfswebsite die het aanbod helder presenteert en bezoekers vlot naar contact leidt."],
			["Belangrijkste functies", "Visuele portfolio, dienstenoverzicht, socialmediacontent en eenvoudige contactflow."],
		],
	},
	moeskops: {
		number: "02",
		title: "Moeskops Gevelwerken — Visibility Sprint",
		badges: [],
		summary:
			"One-page website binnen de BMA Visibility Sprint voor een vakman in voegwerken en gevelrenovatie. Diensten, vakmanschap en contactmogelijkheden komen samen op één overzichtelijke pagina, gericht op offerteaanvragen.",
		caption: "Schermafbeelding van de website.",
		image: "./assets/site-previews/moeskops-gevelwerken.jpg",
		imageAlt: "Schermafbeelding van de website van Moeskops Gevelwerken",
		imageWidth: 1440,
		imageHeight: 821,
		link: "https://moeskopsgevelwerken.be/",
		linkLabel: "Bekijk Moeskops Gevelwerken",
		tags: ["Klantwebsite", "Live website", "Gevelwerken", "Visibility Sprint", "One-page website"],
		details: [
			["Projecttype", "Klantproject"],
			["Sector", "Voegwerken en gevelrenovatie"],
			["Dienst", "Visibility Sprint"],
			["Websitevorm", "One-page website"],
			["Uitdaging", "Een ervaren vakman online betrouwbaar positioneren en bezoekers vlot naar een offerteaanvraag sturen."],
			["Oplossing", "Een one-page website met diensten, bewijs van vakmanschap en duidelijke contactmogelijkheden op één pagina."],
			["Belangrijkste functies", "Dienstenoverzicht, vertrouwen, offertefocus en mobiele contactknoppen."],
		],
	},
	agv: {
		number: "04",
		title: "AGV Smeers — Visibility Sprint",
		badges: [],
		summary:
			"One-page website binnen de BMA Visibility Sprint voor voegwerken, gevelrenovatie en verbouwingswerken. Diensten, realisaties en werkwijze staan op één pagina, met duidelijke contactmogelijkheden voor een offerteaanvraag.",
		caption: "Schermafbeelding van de website.",
		image: "./assets/site-previews/agv-smeers.jpg",
		imageAlt: "Schermafbeelding van de website van AGV Smeers",
		imageWidth: 1440,
		imageHeight: 821,
		link: "https://agvsmeers.be/",
		linkLabel: "Bekijk AGV Smeers",
		tags: ["Klantwebsite", "Live website", "Gevelrenovatie", "Visibility Sprint", "One-page website"],
		details: [
			["Projecttype", "Klantproject"],
			["Sector", "Voegwerken, gevelrenovatie en verbouwingswerken"],
			["Dienst", "Visibility Sprint"],
			["Websitevorm", "One-page website"],
			["Uitdaging", "Meer dan 30 jaar vakervaring online helder en betrouwbaar presenteren."],
			["Oplossing", "Een one-page website die diensten, realisaties, werkwijze en offerteaanvragen samenbrengt."],
			["Belangrijkste functies", "Live website, dienstenoverzicht, realisaties, lokale positionering en offerte-aanvraag."],
		],
	},
	sunplanet: {
		number: "03",
		title: "Sunplanet Heusden — Visibility Sprint",
		badges: [],
		summary:
			"One-page website binnen de BMA Visibility Sprint voor zonnestudio Sunplanet in Heusden-Zolder. Zonnebanken, openingsuren en contact- en routemogelijkheden staan samen op één overzichtelijke pagina.",
		caption: "Schermafbeelding van de klantwebsite.",
		image: "./assets/site-previews/sunplanet-heusden.jpg",
		imageAlt: "Schermafbeelding van de website van Sunplanet Heusden",
		imageWidth: 1440,
		imageHeight: 821,
		link: "https://sunplanet-heusden.be/",
		linkLabel: "Bekijk Sunplanet Heusden",
		tags: ["Klantwebsite", "Live website", "Zonnestudio", "Visibility Sprint", "One-page website"],
		details: [
			["Projecttype", "Klantproject"],
			["Sector", "Zonnestudio"],
			["Dienst", "Visibility Sprint"],
			["Websitevorm", "One-page website"],
			["Belangrijkste functies", "Overzicht van zonnebanken, openingsuren, contactknoppen en route naar de studio."],
		],
	},
	"kevin-claes": {
		number: "05",
		title: "Kevin Claes — Algemene Dakwerken",
		badges: [],
		summary:
			"Website voor Algemene Dakwerken Kevin Claes, met dakrenovatie, Velux, zinkwerk, isolatie en zolderinrichting helder in beeld. De grote dakfoto zet het vakwerk centraal; de gratis-offerteknop maakt contact direct bereikbaar.",
		caption: "Schermafbeelding van de website.",
		image: "./assets/site-previews/kevin-claes.jpg",
		imageAlt: "Schermafbeelding van de website van Kevin Claes — Algemene Dakwerken",
		imageWidth: 1440,
		imageHeight: 820,
		link: "./project-kevin-claes.html",
		linkLabel: "Bekijk Kevin Claes",
		tags: ["Klantwebsite", "Live website", "Dakwerken", "Website"],
		details: [
			["Projecttype", "Klantproject"],
			["Sector", "Algemene dakwerken"],
			["Projectfocus", "Dakrenovatie, Velux, zinkwerk, rustieke dakbedekking, isolatie en zolderinrichting."],
			["Uitdaging", "De verschillende dakdiensten helder uitleggen en bezoekers snel naar een offerteaanvraag leiden."],
			["Oplossing", "Een beeldgerichte homepage met een overzichtelijke navigatie, een korte uitleg van de diensten en een opvallende offerteknop."],
			["Belangrijkste functies", "Navigatie naar diensten en realisaties, een kernboodschap over dakvakmanschap en een directe CTA voor een gratis offerte."],
		],
	},
};

const translations = {
	"Onze diensten": "Our services",
	"Meer uitleg": "More details",
	"Minder uitleg": "Less detail",
	"Bekijk websites": "Explore websites",
	"Bekijk applicaties": "Explore applications",
	"Bekijk content en sociale media": "Explore content and social media",
	"Bekijk campagnes": "Explore campaigns",
	"Bekijk onderhoud": "Explore maintenance",
	"We bouwen een website waarop klanten je aanbod bekijken, je werk zien en contact opnemen. Kies voor één overzichtelijke pagina of geef elke dienst meer ruimte.": "We build a website where customers can explore your services, see your work and get in touch. Choose one clear page or give each service more room.",
	"Een webapp geeft klanten of je team handige functies in de browser. We bepalen samen wat past, zoals afspraken boeken, betalen of documenten bekijken.": "A web app gives your customers or team useful features in the browser. We decide together what fits, such as booking appointments, making payments or viewing documents.",
	"We maken beelden, video’s en posts in jouw huisstijl. We kunnen ook helpen met contentplanning en het beheer van je sociale media.": "We create images, videos and posts in your brand style. We can also help plan content and manage your social media.",
	"We werken campagnes uit voor je bedrijf, een actie of een nieuw aanbod. We bespreken samen de content, kanalen en het budget.": "We create campaigns for your business, a promotion or a new offer. We discuss the content, channels and budget together.",
	"We voeren updates en technische controles uit en passen je website of app aan wanneer er iets verandert. De afspraken over onderhoud leggen we vooraf vast.": "We carry out updates and technical checks, and adapt your website or app when things change. We agree on the maintenance in advance.",
	"Toon je aanbod en laat bezoekers makkelijk contact opnemen.": "Show your services and make it easy for visitors to get in touch.",
	"Laat klanten boeken, betalen of documenten bekijken.": "Let customers book, pay or view documents.",
	"Beelden, video’s en posts voor je kanalen.": "Images, videos and posts for your channels.",
	"Breng je aanbod onder de aandacht met campagnes.": "Bring your services to people's attention with campaigns.",
	"Updates en aanpassingen voor je website of app.": "Updates and changes for your website or app.",
	"Fictief voorbeeld: ontdek hoe website, onderhoud en content samenwerken bij Atelier Noor.": "Fictional example: see how a website, maintenance and content work together at Atelier Noor.",
	"Build: maak je website of app. Maintain: houd alles up-to-date. Attract: bereik klanten met content en campagnes.": "Build: create your website or app. Maintain: keep it up to date. Attract: reach customers with content and campaigns.",

	"Reviews pauzeren": "Pause reviews",
	"We bouwen websites en apps, maken content en houden je digitale werk bij. Rechtstreeks met Lio.": "We build websites and apps, create content and keep your digital work up to date. Directly with Lio.",
	"Websites & apps": "Websites & apps",
	"Content & campagnes": "Content & campaigns",
	"Je aanbod tonen, afspraken boeken of informatie delen.": "Show your services, book appointments or share information.",
	"Beelden, video’s en advertenties voor je bedrijf.": "Images, videos and ads for your business.",
	"Updates, wijzigingen en technische controles.": "Updates, changes and technical checks.",
	"Ontdek wat mogelijk is": "Explore what is possible",
	"Bekijk de mogelijkheden": "Explore the options",
	"Zo houden we alles bij": "How we keep things up to date",
	"BMA Studio — Riemst, België": "BMA Studio — Riemst, Belgium",
	"Meer over onze projecten": "More about our projects",
	"Een eerste idee is genoeg. Vertel Lio wat je nodig hebt; samen bekijken we de aanpak.": "An initial idea is enough. Tell Lio what you need and we will work out the approach together.",
	"BMA staat voor Build, Maintain en Attract. We maken je website, app of content, houden die bij en helpen je bedrijf zichtbaar worden.": "BMA stands for Build, Maintain and Attract. We create your website, app or content, keep it up to date and help your business gain visibility.",
	"Je werkt rechtstreeks": "You work directly",
	"met Lio.": "with Lio.",
	"Je bespreekt je plannen met de persoon die je project uitwerkt. Van de eerste vraag tot de laatste aanpassing weet je met wie je contact hebt.": "You discuss your plans with the person building your project. From the first question to the last adjustment, you know who you are speaking with.",
	"Een website, app of content voor je bedrijf: we bekijken samen wat je nodig hebt en leggen de inhoud, planning en prijs vooraf vast.": "A website, app or content for your business: we discuss what you need and agree on scope, timing and price before we begin.",
	"Vanuit Riemst werken we voor bedrijven in heel België. Kennismaken kan ook online.": "Based in Riemst, we work for businesses throughout Belgium. We can also meet online.",
	"Duidelijk voor we beginnen.": "Clear before we begin.",
	"Wat we maken": "What we create",
	"Wat we nodig hebben": "What we need",
	"Wat er daarna gebeurt": "What happens afterwards",
	"De pagina’s, functies of content, met duidelijke afspraken over feedback en aanpassingen.": "The pages, features or content, with clear agreements on feedback and changes.",
	"Welke teksten, beelden en bedrijfsgegevens je aanlevert en waarmee we je kunnen helpen.": "Which texts, images and business details you supply and where we can help.",
	"Wie je website of app bijhoudt en hoe je later wijzigingen aanvraagt.": "Who maintains your website or app and how to request changes later.",
	"Vertel wat je wil laten maken. Lio denkt met je mee.": "Tell us what you want to create. Lio will help you work it out.",
	"Van een nieuwe website tot content voor je sociale media. Kies wat je nodig hebt; we denken mee over de rest.": "From a new website to social media content. Choose what you need and we will help you with the rest.",
	"Waar kunnen we je mee helpen?": "How can we help you?",

	"Nog niet zeker? Beschrijf je idee hieronder; we denken met je mee.": "Not sure yet? Describe your idea below and we will help you work it out.",
	"Bv. een website voor je bedrijf, een boekingssysteem of video’s voor je sociale media.": "E.g. a website for your business, a booking system or videos for your social media.",

	"Websites, apps en content voor bedrijven. We bouwen, onderhouden en helpen je zichtbaar worden met sociale media en campagnes.": "Websites, apps and content for businesses. We build, maintain and help you gain visibility through social media and campaigns.",
	"Direct": "Direct",
	"Contact met Lio": "Contact with Lio",
	"Bouwen. Bijhouden. Zichtbaar maken.": "Build. Maintain. Get noticed.",
	"Fictief voorbeeld: Atelier Noor combineert een website met onderhoud en content.": "Fictional example: Atelier Noor combines a website with maintenance and content.",
	"Website voor vastgoedfotografie en video, met een visueel portfolio en duidelijke contactmogelijkheden.": "A website for property photography and video, with a visual portfolio and clear contact options.",
	"One-page website voor voegwerken en gevelrenovatie, met diensten en contactmogelijkheden voor offerteaanvragen.": "A one-page website for pointing and facade renovation, with services and contact options for quote requests.",
	"One-page website met zonnebanken, openingsuren, contactgegevens en route-informatie.": "A one-page website with sunbeds, opening hours, contact details and directions.",
	"One-page website voor voegwerken, gevelrenovatie en verbouwingen, met realisaties en contactmogelijkheden.": "A one-page website for pointing, facade renovation and building work, with projects and contact options.",
	"Vertel Lio wat je wil laten maken. Samen bespreken we de inhoud, functies en timing van je project.": "Tell Lio what you would like to create. Together, we discuss your project’s scope, features and timing.",
	"Voor bedrijven van elke grootte, in heel België": "For businesses of every size, across Belgium",
	"BMA Studio is het digitale en creatieve bureau van Lio Smeers. We maken websites, apps en content voor bedrijven in België en verzorgen ook sociale media, campagnes en onderhoud.": "BMA Studio is Lio Smeers’s digital and creative agency. We build websites, apps and content for businesses in Belgium and also provide social media, campaigns and maintenance.",

	"Een voorstel op maat.": "A tailored proposal.",
	"Voor een website, app, video, socialmediabeheer of campagne maken we een offerte. De prijs hangt af van wat je nodig hebt; we spreken de inhoud en timing vooraf af.": "We prepare a tailored quote for a website, app, video, social media management or campaign. The price depends on your needs; we agree on the scope and timing in advance.",
	"Je hoeft nog geen formule te kiezen. We bespreken samen wat bij je project past.": "You do not need to choose a plan yet. We will discuss what suits your project together.",
	"De prijs hangt af van de inhoud en functies die je nodig hebt. Bespreek je project met BMA Studio voor een voorstel op maat.": "The price depends on the content and features you need. Discuss your project with BMA Studio for a tailored proposal.",
	"Lees meer over": "Read more about",

	"404": "404",
	"Website + Content": "Website + Content",
	"Business Website": "Business Website",
	"One-page (abonnement)": "One-page (subscription)",
	"One-page (eenmalig)": "One-page (one-time)",
	"Website laten maken in Limburg.": "Have a website made in Limburg.",
	"Digitaal, creatief en persoonlijk.": "Digital, creative and personal.",
	"Websites voor lokale bedrijven.": "Websites for local businesses.",
	"Digitale en creatieve diensten.": "Digital and creative services.",
	"Van websites en apps tot content, campagnes en onderhoud. Eén aanspreekpunt voor je online werk.": "From websites and apps to content, campaigns and maintenance. One point of contact for your digital work.",
	"Kies wat je nodig hebt.": "Choose what you need.",
	"Navigeer tussen diensten": "Navigate between services",
	"Scroll om te ontdekken": "Scroll to explore",
	"Aanbod": "Services",
	"Realisaties": "Projects",
	"Contactinformatie": "Contact details",
	"Boekingen": "Bookings",
	"Betalingen": "Payments",
	"Klantenportaal": "Customer portal",
	"Foto’s": "Photos",
	"Video’s": "Videos",
	"Posts": "Posts",
	"Nieuw aanbod": "New offering",
	"Beelden": "Images",
	"Teksten": "Copy",
	"Updates": "Updates",
	"Technische controles": "Technical checks",
	"Aanpassingen": "Changes",
	"Een website die je aanbod, realisaties en contactinformatie helder samenbrengt.": "A website that clearly brings together your services, projects and contact details.",
	"Vraag gratis een websiteprototype aan.": "Request a free website prototype.",
	"Webapps voor boekingen, betalingen of een klantenportaal, afgestemd op wat je bedrijf nodig heeft.": "Web apps for bookings, payments or a customer portal, tailored to your business.",
	"Foto’s, video’s en posts in je huisstijl. We kunnen ook de contentplanning en het beheer van je kanalen verzorgen.": "Photos, videos and posts in your brand style. We can also handle content planning and manage your channels.",
	"Campagnes en advertenties voor een actie of nieuw aanbod, met de beelden, video’s en teksten die erbij horen.": "Campaigns and ads for a promotion or new offering, with the images, videos and copy to go with them.",
	"Updates, technische controles en aanpassingen aan je website of app. We spreken vooraf af welk onderhoud inbegrepen is.": "Updates, technical checks and changes to your website or app. We agree in advance on the included maintenance.",
	"Bespreek je idee.": "Discuss your idea.",
	"Vertel wat je wil laten maken. We bespreken welke dienst past en spreken vooraf werk, timing en prijs af.": "Tell us what you want to make. We’ll discuss which service fits and agree on scope, timing and price up front.",
	"Bekijk websiteprijzen": "View website prices",
	"Duidelijke websiteprijzen.": "Clear website prices.",
	"Een one-page, een businesswebsite of een website met content. Bekijk de bestaande formules en afspraken, of bespreek eerst wat je nodig hebt.": "A one-page site, a business website or a website with content. View the existing plans and terms, or discuss your needs first.",
	"Bekijk websiteformules, prijzen en voorwaarden": "View website plans, prices and terms",
	"Een voorstel voor jouw project.": "A proposal for your project.",
	"Voor applicaties, content, socialmediabeheer en campagnes spreken we de scope, timing en het budget vooraf af. Eén losse dienst of een combinatie: jij kiest wat je nodig hebt.": "For applications, content, social media management and campaigns, we agree on scope, timing and budget in advance. Choose one service or a combination that fits your needs.",
	"Vraag een voorstel aan": "Request a proposal",
	"Ontdek onze diensten": "Explore our services",
	"Websites, applicaties, content, campagnes en onderhoud: kies wat jouw bedrijf nodig heeft.": "Websites, applications, content, campaigns and maintenance: choose what your business needs.",
	"Bekijk ons werk": "View our work",
	"Bekijk bestaande projecten en ontdek welke aanpak bij jouw bedrijf past.": "Explore existing projects and find an approach that fits your business.",
	"Bespreek je project": "Discuss your project",
	"Vertel Lio over je plannen. We bespreken vrijblijvend de mogelijkheden.": "Tell Lio about your plans. We discuss the possibilities without obligation.",
	"Ontdek welke diensten bij jouw plannen passen.": "Discover which services fit your plans.",
	"Ontdek onze digitale en creatieve diensten.": "Explore our digital and creative services.",
	"Websiteformule (optioneel)": "Website plan (optional)",
	"Nog geen keuze nodig.": "No need to choose yet.",
	"Bekijk prijzen en afspraken": "View prices and terms",
	"Websiteformules voor lokale bedrijven.": "Website plans for local businesses.",
	"Bekijk alle websiteprijzen en voorwaarden": "View all website prices and terms",
	"Vul je naam in.": "Enter your name.",
	"Vul je e-mailadres in.": "Enter your email address.",
	"Vul een geldig e-mailadres in.": "Enter a valid email address.",
	"Schrijf kort wat je nodig hebt.": "Tell us briefly what you need.",
	"Websites": "Websites",
	"Snelle, mobielvriendelijke websites op maat.": "Fast, mobile-friendly websites tailored to your business.",
	"Een duidelijke website die laat zien wie je bent, wat je aanbiedt en hoe klanten je bereiken. Van een compacte one-page tot een website met meerdere pagina’s.": "A clear website showing who you are, what you offer and how customers can reach you. From a compact one-page site to a website with multiple pages.",
	"Een one-page voor je zaak": "A one-page website for your business",
	"Een website met diensten en realisaties": "A website with services and completed projects",
	"Een contactformulier en vindbare contactgegevens": "A contact form and easy-to-find contact details",
	"Applicaties": "Applications",
	"Praktische webapps met bijvoorbeeld boekingen, betalingen en klantenportalen.": "Practical web apps with features such as bookings, payments and customer portals.",
	"Een webapp die een praktische taak voor je bedrijf of klanten eenvoudiger maakt. We bepalen samen welke functies nodig zijn en bouwen een oplossing op maat.": "A web app that simplifies a practical task for your business or customers. Together we define the features you need and build a tailored solution.",
	"Een boekings- of reservatiesysteem": "A booking or reservation system",
	"Online betalingen": "Online payments",
	"Een klantenportaal of intern dashboard": "A customer portal or internal dashboard",
	"Content & sociale media": "Content & social media",
	"Visuals, video’s en posts in jouw huisstijl.": "Visuals, videos and posts in your brand style.",
	"Herkenbare content voor je website en sociale kanalen. Je kan losse visuals of video’s laten maken, of ons inschakelen voor de planning en het beheer van je sociale media.": "Recognisable content for your website and social channels. Commission individual visuals or videos, or ask us to plan and manage your social media.",
	"Visuals en posts in je huisstijl": "Visuals and posts in your brand style",
	"Korte video’s en montage": "Short videos and editing",
	"Contentplanning en socialmediabeheer": "Content planning and social media management",
	"Campagnes & advertenties": "Campaigns & advertising",
	"Gerichte campagnes om jouw bedrijf en aanbod onder de aandacht te brengen.": "Focused campaigns to bring attention to your business and what you offer.",
	"Breng je bedrijf, een actie of een nieuw aanbod onder de aandacht. We stemmen de boodschap, content en kanalen af op je doelgroep en bespreken vooraf de aanpak en het budget.": "Bring attention to your business, a promotion or a new offer. We tailor the message, content and channels to your audience and discuss the approach and budget in advance.",
	"Een campagne voor een nieuw aanbod": "A campaign for a new offer",
	"Advertenties op sociale media": "Social media advertising",
	"Campagnemateriaal en opvolging": "Campaign materials and follow-up",
	"Onderhoud": "Maintenance",
	"Technische opvolging, updates en aanpassingen.": "Technical follow-up, updates and changes.",
	"Houd je website of applicatie verzorgd en bruikbaar. We spreken af welke technische opvolging, updates en aanpassingen passen bij je project, los of binnen een websitepakket.": "Keep your website or application in good shape and easy to use. We agree on the technical follow-up, updates and changes your project needs, separately or within a website package.",
	"Teksten, foto’s en pagina’s aanpassen": "Update text, photos and pages",
	"Technische controles en updates": "Technical checks and updates",
	"Bestaande functies blijven verbeteren": "Keep improving existing features",
	"BMA Studio | Digitaal en creatief bureau voor lokale bedrijven": "BMA Studio | Digital and creative agency for local businesses",
	"BMA Studio versterkt lokale bedrijven met websites, applicaties, content, sociale media en campagnes. Eén aanspreekpunt voor je online aanwezigheid.": "BMA Studio supports local businesses with websites, applications, content, social media and campaigns. One point of contact for your online presence.",
	"Websites, applicaties, content en campagnes | BMA Studio": "Websites, applications, content and campaigns | BMA Studio",
	"Ontdek de diensten van BMA Studio: websites, applicaties, content en sociale media, campagnes en advertenties, en onderhoud. Ook als losse dienst.": "Discover BMA Studio’s services: websites, applications, content and social media, campaigns and advertising, and maintenance. Also available individually.",
	"Over BMA Studio | Digitaal en creatief bureau": "About BMA Studio | Digital and creative agency",
	"Maak kennis met BMA Studio, het digitale en creatieve bureau van Lio Smeers voor lokale bedrijven. Persoonlijke samenwerking en rechtstreeks contact.": "Meet BMA Studio, Lio Smeers’ digital and creative agency for local businesses. Personal collaboration and direct contact.",
	"Vertel ons over je project | BMA Studio": "Tell us about your project | BMA Studio",
	"Bespreek je website, applicatie, content, sociale media of campagne met Lio van BMA Studio. Vertel ons vrijblijvend wat je bedrijf nodig heeft.": "Discuss your website, application, content, social media or campaign with Lio at BMA Studio. Tell us what your business needs, with no obligation.",
	"Websitepakketten en diensten op maat | BMA Studio": "Website packages and tailored services | BMA Studio",
	"Vergelijk de bestaande websitepakketten en prijzen van BMA Studio. Applicaties, content, socialmediabeheer en campagnes werken we op maat uit.": "Compare BMA Studio’s website packages and prices. Applications, content, social media management and campaigns are tailored to your needs.",
	"Jouw bedrijf.": "Your business.",
	"Digitaal sterker.": "Digitally stronger.",
	"BMA Studio bouwt websites en applicaties, maakt content en zet campagnes op. Eén aanspreekpunt voor de online aanwezigheid van jouw bedrijf.": "BMA Studio builds websites and applications, creates content and sets up campaigns. One point of contact for your business’s online presence.",
	"Scroll naar onze diensten": "Scroll to our services",
	"Onze diensten": "Our services",
	"Digitaal en creatief, op jouw maat.": "Digital and creative, tailored to you.",
	"Build: websites en applicaties bouwen. Maintain: onderhouden en blijven verbeteren. Attract: aandacht trekken met content, sociale media en campagnes.": "Build: create websites and applications. Maintain: maintain and keep improving. Attract: draw attention with content, social media and campaigns.",
	"Van een website of applicatie tot content en campagnes: we stemmen de aanpak af op wat jouw bedrijf nodig heeft. Eén losse dienst of een samenwerking op meerdere vlakken.": "From a website or application to content and campaigns: we tailor the approach to what your business needs. Choose a single service or work with us across several areas.",
	"Een gerichte aanpak": "A focused approach",
	"We bespreken je doel, kiezen de passende diensten en maken heldere afspraken over de uitvoering.": "We discuss your goal, choose the right services and agree on how to deliver them.",
	"Praktisch in gebruik": "Practical to use",
	"Websites en applicaties die werken op de schermen die jouw klanten gebruiken.": "Websites and applications that work on the screens your customers use.",
	"Blijvende opvolging": "Ongoing follow-up",
	"Updates en aanpassingen volgens de afspraken van je websitepakket of voorstel op maat.": "Updates and changes as agreed in your website package or tailored proposal.",
	"Je werkt rechtstreeks met Lio, van je eerste vraag tot de opvolging van je project.": "You work directly with Lio, from your first question to the follow-up of your project.",
	"Ontdek onze websites, applicaties, content, sociale media, campagnes en onderhoud.": "Explore our websites, applications, content, social media, campaigns and maintenance.",
	"Wat heeft jouw bedrijf nodig?": "What does your business need?",
	"Vertel ons over je plannen. We bespreken vrijblijvend welke digitale of creatieve dienst daarbij past.": "Tell us about your plans. We discuss which digital or creative service fits, with no obligation.",
	"Plan een vrijblijvend gesprek": "Arrange a no-obligation conversation",
	"15 minuten, online met Lio.": "15 minutes online with Lio.",
	"Websites, applicaties en creatieve zichtbaarheid": "Websites, applications and creative visibility",
	"BMA Studio is je digitale en creatieve bureau voor websites, applicaties, content, sociale media en campagnes. Kies één losse dienst of combineer wat jouw bedrijf nodig heeft.": "BMA Studio is your digital and creative agency for websites, applications, content, social media and campaigns. Choose one individual service or combine what your business needs.",
	"Samenwerken": "Working together",
	"Vertel wat je bedrijf nodig heeft.": "Tell us what your business needs.",
	"We kiezen de diensten en aanpak die daarbij passen.": "We choose the services and approach that fit.",
	"Je krijgt heldere afspraken over scope, timing en budget.": "You receive clear agreements on scope, timing and budget.",
	"Wat we doen": "What we do",
	"Vijf diensten. Eén aanspreekpunt.": "Five services. One point of contact.",
	"Je hoeft geen volledig traject af te nemen. Ook voor één website, applicatie, video, campagne of onderhoudsvraag kan je bij ons terecht.": "You do not need to commit to a full project. You can also come to us for a single website, application, video, campaign or maintenance request.",
	"Alleen voor websites: vraag vrijblijvend een": "For websites only: request a",
	"gratis websiteprototype": "free website prototype",
	"Bekijk websitepakketten": "View website packages",
	"of lees meer over": "or read more about",
	"Vrijblijvend kennismaken": "A no-obligation introduction",
	"Nog niet zeker waar je moet beginnen?": "Not sure where to start?",
	"Een kort gesprek helpt om je vraag helder te krijgen. Daarna kies je zelf of en hoe we samenwerken.": "A short conversation helps clarify your request. You then decide whether and how we work together.",
	"Websitepakketten": "Website packages",
	"Op maat": "Tailored to you",
	"Een voorstel dat past bij jouw project.": "A proposal that fits your project.",
	"Voor applicaties, content, socialmediabeheer en campagnes bepalen we samen de scope, timing en het budget. Je kan één losse dienst kiezen of meerdere diensten combineren.": "For applications, content, social media management and campaigns, we define the scope, timing and budget together. Choose a single service or combine several services.",
	"Van een boekingssysteem tot een klantenportaal, afgestemd op jouw werking.": "From a booking system to a customer portal, tailored to how you work.",
	"Losse visuals, video’s en posts, of een samenhangende reeks in jouw huisstijl.": "Individual visuals, videos and posts, or a cohesive series in your brand style.",
	"Socialmediabeheer": "Social media management",
	"Een passende planning en opvolging van je sociale kanalen.": "Suitable planning and management of your social channels.",
	"Campagnes en advertenties": "Campaigns and advertising",
	"Een gerichte aanpak voor jouw boodschap, doelgroep en beschikbare budget.": "A focused approach for your message, audience and available budget.",
	"Jouw digitale en creatieve bureau, met direct contact": "Your digital and creative agency, with direct contact",
	"BMA Studio is een digitaal en creatief bureau voor starters, zelfstandigen en lokale bedrijven in België. Van websites en applicaties tot content, sociale media en campagnes: je werkt rechtstreeks met Lio, zonder onnodige tussenpersonen.": "BMA Studio is a digital and creative agency for start-ups, independent professionals and local businesses in Belgium. From websites and applications to content, social media and campaigns: you work directly with Lio, without unnecessary intermediaries.",
	"Rechtstreeks contact met Lio over je project.": "Direct contact with Lio about your project.",
	"Een sterkere online aanwezigheid, van idee tot opvolging.": "A stronger online presence, from idea to follow-up.",
	"BMA Studio brengt digitaal werk en creatieve communicatie samen. We bouwen websites en applicaties, maken content en zetten sociale media, campagnes en advertenties in om je bedrijf en aanbod onder de aandacht te brengen.": "BMA Studio brings digital work and creative communication together. We build websites and applications, create content and use social media, campaigns and advertising to bring attention to your business and what you offer.",
	"diensten, inhoud en opvolging daarbij horen.": "services, content and follow-up fit.",
	"Oprichter van BMA Studio": "Founder of BMA Studio",
	"onnodige lagen, wel digitale en creatieve oplossingen die professioneel aanvoelen en praktisch blijven.": "unnecessary layers, just digital and creative solutions that feel professional and stay practical.",
	"We bespreken je bedrijf, je doelgroep en wat je wil bereiken.": "We discuss your business, your audience and what you want to achieve.",
	"Aanpak bepalen": "Define the approach",
	"We kiezen de passende diensten, inhoud en uitvoering voor jouw situatie.": "We choose the services, content and delivery that fit your situation.",
	"Uitwerken en opvolgen": "Create and follow up",
	"We werken je project uit, controleren de uitvoering en spreken af hoe we het opvolgen.": "We create your project, check the delivery and agree on how to follow it up.",
	"We houden je project overzichtelijk, van de eerste keuzes tot de uitvoering en opvolging.": "We keep your project clear, from the first decisions to delivery and follow-up.",
	"Vertel ons over je plannen.": "Tell us about your plans.",
	"De aanpak blijft bewust overzichtelijk: eerst begrijpen wat je bedrijf nodig heeft, daarna kiezen welke diensten, inhoud en opvolging daarbij horen.": "Our approach stays clear: first understand what your business needs, then choose the services, content and follow-up that fit.",
	"Ik denk mee over structuur, inhoud en praktische keuzes, met focus op wat jouw zaak echt nodig heeft. Geen onnodige lagen, wel digitale en creatieve oplossingen die professioneel aanvoelen en praktisch blijven.": "I help you think through structure, content and practical choices, focusing on what your business really needs. No unnecessary layers, just digital and creative solutions that feel professional and stay practical.",
	"Vertel ons over je project": "Tell us about your project",
	"Daarna bepalen we de diensten, scope en timing.": "Then we define the services, scope and timing.",
	"Je spreekt rechtstreeks met Lio. Vertel wat je bedrijf nodig heeft; we bespreken vrijblijvend welke dienst of combinatie past.": "You speak directly with Lio. Tell us what your business needs; we discuss which service or combination fits, with no obligation.",
	"Dienst": "Service",
	"Meerdere diensten": "Several services",
	"Ik weet het nog niet": "I am not sure yet",
	"Websitepakket (optioneel)": "Website package (optional)",
	"We bekijken welke aanpak bij je project past.": "We consider which approach fits your project.",
	"Websites en applicaties bouwen.": "Build websites and applications.",
	"Van een heldere website tot een praktische webapp. We bouwen een digitale oplossing die past bij je bedrijf en het gebruik door je klanten.": "From a clear website to a practical web app. We build a digital solution that fits your business and how your customers use it.",
	"Onderhouden en blijven verbeteren.": "Maintain and keep improving.",
	"We volgen je website of applicatie technisch op, voeren updates uit en passen inhoud of functies aan volgens de afspraken van je project.": "We provide technical follow-up for your website or application, perform updates and adjust content or features as agreed for your project.",
	"Aandacht trekken voor jouw bedrijf.": "Draw attention to your business.",
	"Met content, sociale media, campagnes en advertenties brengen we je bedrijf en aanbod onder de aandacht van je doelgroep.": "With content, social media, campaigns and advertising, we bring your business and offer to your audience’s attention.",
	"Voor Sunplanet in Heusden-Zolder bouwden we een one-page website met zonnebanken, openingsuren en contact- en routemogelijkheden.": "For Sunplanet in Heusden-Zolder, we built a one-page website featuring tanning beds, opening hours, contact details and directions.",
	"Bekijk het project voor Sunplanet Heusden.": "View the Sunplanet Heusden project.",
	"BMA Studio is de webdesignstudio van Lio Smeers in Riemst. We bouwen websites voor zelfstandigen en lokale bedrijven in Limburg en België, met onderhoud en social content na de lancering.": "BMA Studio is the web design studio of Lio Smeers in Riemst. We build websites for independent professionals and local businesses in Limburg and Belgium, with maintenance and social content after launch.",
	"Bekijk het project": "View the project",
	"Bekijk de klantwebsite": "Visit the client website",
	"Bespreek een vergelijkbaar project": "Discuss a similar project",
	"Een website die past bij je aanbod": "A website that fits your services",
	"Dit project laat zien hoe BMA Studio diensten en contactmogelijkheden samenbrengt in een website voor een lokale onderneming.": "This project shows how BMA Studio brings services and contact options together in a website for a local business.",
	"Bekijk onze diensten": "View our services",
	"Andere klantprojecten": "Other client projects",
	"Wanneer is een one-page website voldoende?": "When is a one-page website enough?",
	"Een one-page website past bij een helder aanbod dat je op één pagina kunt uitleggen, met je diensten, voorbeelden en contactgegevens. Heb je meerdere diensten die elk uitgebreide uitleg vragen, dan biedt een Business Website meer ruimte.": "A one-page website suits a clear offering that can be explained on a single page, including services, examples and contact details. If multiple services each need detailed explanations, a Business Website offers more room.",
	"Bekijk klantprojecten met beide websitevormen.": "Explore client projects using both website formats.",
	"Wat valt buiten het maandelijkse onderhoud?": "What falls outside monthly maintenance?",
	"Nieuwe functies, maatwerk en werk buiten je pakket vallen niet onder de inbegrepen onderhoudsaanvragen. We bespreken dit vooraf en voeren extra werk alleen na akkoord uit aan €50 per uur. Ongebruikte aanvragen vervallen aan het einde van de maand.": "New features, custom development and work outside your package are not included in maintenance requests. We discuss these in advance and only carry out additional work with your approval at €50 per hour. Unused requests expire at the end of the month.",
	"Wat gebeurt er met mijn website bij opzegging?": "What happens to my website when I cancel?",
	"Je kunt hosting en domeinnaam bij BMA Studio houden voor €59 per jaar zonder onderhoud, overdragen naar eigen beheer of volledig stopzetten. Bij volledige stopzetting gaat je website offline en wordt de domeinnaam niet verlengd. Een standaardoverdracht van domeinnaam en websitebestanden is inbegrepen. Voor het One-page Abonnement gaat het eigendom over na betaling van de eerste 12 maanden. De volledige afspraken staan bij de pakketvoorwaarden hieronder.": "You can keep hosting and your domain with BMA Studio for €59 per year without maintenance, transfer them to your own provider, or discontinue them entirely. If discontinued, your website goes offline and the domain is not renewed. A standard transfer of the domain and website files is included. Ownership of the One-page Subscription transfers after the first 12 months have been paid. See the package terms below for the full conditions.",

	"Business Website voor vastgoedfotografie, videografie en socialmediacontent, met een sterke visuele portfolio, duidelijke diensten en eenvoudige contactmogelijkheden.": "Business Website for real estate photography, videography and social media content, with a strong visual portfolio, clear services and easy contact options.",
	"Thor Smeers — Business Website": "Thor Smeers — Business Website",
	"Een one-page website met diensten, bewijs van vakmanschap en duidelijke contactmogelijkheden op één pagina.": "A one-page website bringing services, proof of craftsmanship and clear contact options together on a single page.",
	"One-page website binnen de BMA Visibility Sprint voor een vakman in voegwerken en gevelrenovatie. Diensten, vakmanschap en contactmogelijkheden komen samen op één overzichtelijke pagina, gericht op offerteaanvragen.": "One-page website created as part of the BMA Visibility Sprint for a specialist in jointing and facade renovation. Services, craftsmanship and contact options come together on one clear page, focused on quote requests.",
	"Moeskops Gevelwerken — Visibility Sprint": "Moeskops Gevelwerken — Visibility Sprint",
	"One-page website binnen de BMA Visibility Sprint voor zonnestudio Sunplanet in Heusden-Zolder. Zonnebanken, openingsuren en contact- en routemogelijkheden staan samen op één overzichtelijke pagina.": "One-page website created as part of the BMA Visibility Sprint for Sunplanet tanning studio in Heusden-Zolder. Tanning beds, opening hours, contact options and directions are presented together on one clear page.",
	"Sunplanet Heusden — Visibility Sprint": "Sunplanet Heusden — Visibility Sprint",
	"Een one-page website die diensten, realisaties, werkwijze en offerteaanvragen samenbrengt.": "A one-page website bringing together services, completed projects, the process and quote requests.",
	"One-page website binnen de BMA Visibility Sprint voor voegwerken, gevelrenovatie en verbouwingswerken. Diensten, realisaties en werkwijze staan op één pagina, met duidelijke contactmogelijkheden voor een offerteaanvraag.": "One-page website created as part of the BMA Visibility Sprint for jointing, facade renovation and renovation work. Services, completed projects and the process are presented on one page, with clear contact options for quote requests.",
	"AGV Smeers — Visibility Sprint": "AGV Smeers — Visibility Sprint",
	"Visibility Sprint": "Visibility Sprint",
	"One-page website": "One-page website",
	"Websitevorm": "Website format",
	"Zonnestudio": "Tanning studio",
	"Overzicht van zonnebanken, openingsuren, contactknoppen en route naar de studio.": "Overview of tanning beds, opening hours, contact buttons and directions to the studio.",
	"Schermafbeelding van de website.": "Website screenshot.",
	"Schermafbeelding van de klantwebsite.": "Screenshot of the client website.",
	"Schermafbeelding van de website van Thor Smeers": "Screenshot of the Thor Smeers website",
	"Schermafbeelding van de website van Moeskops Gevelwerken": "Screenshot of the Moeskops Gevelwerken website",
	"Schermafbeelding van de website van AGV Smeers": "Screenshot of the AGV Smeers website",
	"Schermafbeelding van de website van Sunplanet Heusden": "Screenshot of the Sunplanet Heusden website",
	"Bekijk Sunplanet Heusden": "View Sunplanet Heusden",
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
	"Sluit menu": "Close menu",
	"Kies een dienst": "Choose a service",
	"Voordelen": "Benefits",
	"Taal kiezen": "Choose language",
	"Snelle zekerheden": "Quick assurances",
	"Belangrijkste voordelen": "Key benefits",
	"Trustpilot reviews": "Trustpilot reviews",
	"Goed werk. Blije klanten.": "Good work. Happy clients.",
	"Alle reviews": "All reviews",
	"Reviews pauzeren": "Pause reviews",
	"Reviews hervatten": "Resume reviews",
	"Trustpilot review van Manu Moeskops: Perfecte samenwerking gehad met Berend.": "Trustpilot review by Manu Moeskops: Perfect collaboration with Berend.",
	"Trustpilot review van azdin bhdz: Ils ont fait un tres bon site.": "Trustpilot review by azdin bhdz: They made a very good site.",
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
	"Vergelijk pakketten": "Compare packages",
	"Meer info": "More info",
	"Build • Maintain • Attract": "Build • Maintain • Attract",
	"BMA Studio · Lio Smeers. Alle rechten voorbehouden.": "BMA Studio · Lio Smeers. All rights reserved.",
	"Ondernemingsnummer: 1040.082.401": "Enterprise number: 1040.082.401",
	"De online basis voor lokale bedrijven.": "The online foundation for local businesses.",
	"Professionele websites voor lokale bedrijven in België": "Professional websites for local businesses in Belgium",
	"De online basis voor lokale bedrijven. BMA Studio helpt lokale ondernemingen met duidelijke websites, maandelijks onderhoud en social media content die vertrouwen opbouwen en klanten sneller laten contact opnemen. Je kan ook gratis een websiteanalyse of eerste websiteprototype aanvragen.": "The online foundation for local businesses. BMA Studio helps local companies with clear websites, monthly maintenance and social media content that build trust and help customers get in touch faster. You can also request a free website analysis or first website prototype.",
	"BMA Studio helpt lokale ondernemingen met duidelijke websites, maandelijks onderhoud en social media content die vertrouwen opbouwen en klanten sneller laten contact opnemen.": "BMA Studio helps local businesses with clear websites, monthly maintenance and social media content that builds trust and makes it easier for customers to get in touch.",
	"BMA Studio helpt lokale ondernemingen met duidelijke websites, maandelijks onderhoud en social media content die vertrouwen opbouwen en klanten sneller laten contact opnemen. Je kan ook gratis een websiteanalyse of eerste websiteprototype aanvragen.": "BMA Studio helps local businesses with clear websites, monthly maintenance and social media content that builds trust and makes it easier for customers to get in touch. You can also request a free website analysis or first website prototype.",
	"Je kan ook gratis een websiteanalyse of eerste websiteprototype aanvragen.": "You can also request a free website analysis or first website prototype.",
	"Gratis analyse aanvragen": "Request a free analysis",
	"Gratis prototype aanvragen": "Request a free prototype",
	"Vertrouwd door lokale ondernemers in België": "Trusted by local business owners in Belgium",
	"Sterke websites voor": "Strong websites for",
	"lokale": "local",
	"ondernemers.": "business owners.",
	"Wij bouwen websites die werken. Maandelijks onderhoud en social content, zodat jij je kunt focussen op wat je het beste doet: ondernemen.": "We build websites that work. Monthly maintenance and social content, so you can focus on what you do best: running your business.",
	"Scroll naar meer informatie": "Scroll for more information",
	"Tevreden klanten": "Happy clients",
	"Focus op lokale ondernemers": "Focus on local business owners",
	"Persoonlijk contact": "Personal contact",
	"Antwoord binnen dezelfde dag": "Reply the same day",
	"Websites voor lokale ondernemers": "Websites for local business owners",
	"Basis": "Foundation",
	"Gebouwd voor ondernemers die vooruit willen.": "Built for business owners who want to move forward.",
	"We maken websites die duidelijk zijn, snel laden en meteen tonen waarom klanten voor jou moeten kiezen.": "We build websites that are clear, fast and immediately show why customers should choose you.",
	"Online": "Online",
	"100% mobile-first": "100% mobile-first",
	"Voor klanten die zoeken, vergelijken en boeken via hun smartphone.": "For customers who search, compare and book on their smartphone.",
	"Website vanaf €499": "Website from €499",
	"Betaal eenmalig of start zonder opstartkost voor €59/mnd, inclusief hosting, .be-domeinnaam en onderhoud.": "Pay once or start without a setup fee for €59/month, including hosting, a .be domain name and maintenance.",
	"Voor lokale zaken": "For local businesses",
	"Vakmannen, horeca, salons, handelszaken, trainers en creatieve ondernemers.": "Tradespeople, hospitality, salons, shops, trainers and creative entrepreneurs.",
	"Werkwijze": "Approach",
	"Strak, persoonlijk en zonder gedoe.": "Clean, personal and hassle-free.",
	"We denken mee over je aanbod, houden je website netjes bij en reageren dezelfde dag op je aanvraag.": "We think along with your offer, keep your website tidy and reply to your request the same day.",
	"Recent werk in één oogopslag.": "Recent work at a glance.",
	"Waarom BMA Studio": "Why BMA Studio",
	"Een online basis waar je op kan bouwen.": "An online foundation you can build on.",
	"Geen sjabloonpraat: we bouwen websites die duidelijk zijn, snel laden en gemaakt worden om klanten sneller contact te laten opnemen.": "No template talk: we build websites that are clear, fast and made to help customers get in touch faster.",
	"Snel online": "Online fast",
	"Eerste prototype meestal binnen 2 tot 3 werkdagen, definitieve website vaak al binnen een week.": "First prototype usually within 2 to 3 business days, final website often ready within a week.",
	"Onderhoud inbegrepen": "Maintenance included",
	"Hosting, .be-domeinnaam en maandelijkse updates zonder dat je er zelf naar moet omkijken.": "Hosting, a .be domain name and monthly updates without you having to worry about it.",
	"Rechtstreeks contact met wie je website bouwt, met reactie dezelfde dag.": "Direct contact with the person building your website, with a reply the same day.",
	"Nog niet zeker wat je nodig hebt?": "Not sure yet what you need?",
	"Vraag een gratis analyse of prototype aan": "Request a free analysis or prototype",
	"Bekijk gratis opties": "View free options",
	"Portfolio previews": "Portfolio previews",
	"Scroll opzij voor meer projecten": "Scroll sideways for more projects",
	"Moeskops Gevelwerken": "Moeskops Gevelwerken",
	"Website voor een ervaren vakman in voegwerken en gevelrenovatie, gericht op vertrouwen en offerteaanvragen.": "Website for an experienced craftsman in jointing and facade renovation, focused on trust and quote requests.",
	"AGV Smeers": "AGV Smeers",
	"Klantwebsite voor een specialist in voegwerken en gevelrenovatie, met focus op vakmanschap, vertrouwen en offerteaanvragen.": "Client website for a specialist in jointing and facade renovation, focused on craftsmanship, trust and quote requests.",
	"Bekijk details": "View details",
	"Concept": "Concept",
	"Conceptwebsite": "Concept website",
	"Bekijk project": "View project",
	"Conceptwebsite voor een beautyzaak met een warme stijl, diensten en contentmogelijkheden.": "Concept website for a beauty business with a warm style, services and content possibilities.",
	"Conceptwebsite voor een beautyzaak, bedoeld om een warme stijl, diensten en contentmogelijkheden te tonen.": "Concept website for a beauty business, designed to show a warm style, services and content possibilities.",
	"Bekijk alle projecten": "View all projects",
	"Kies je route": "Choose your route",
	"Ga meteen naar wat je zoekt.": "Go straight to what you need.",
	"Pakketten vergelijken": "Compare packages",
	"Bekijk snel welke websiteformule past bij je bedrijf, budget en groeifase.": "Quickly see which website formula fits your business, budget and growth stage.",
	"Diensten begrijpen": "Understand the services",
	"Lees hoe websites, onderhoud en content samen een sterke online basis vormen.": "Read how websites, maintenance and content work together to build a strong online foundation.",
	"Voorbeelden bekijken": "View examples",
	"Bekijk concrete projecten en voorbeeldsites op de aparte portfoliopagina.": "View concrete projects and example sites on the separate portfolio page.",
	"Website laten maken Limburg": "Have a website made in Limburg",
	"Volgende stap": "Next step",
	"Klaar voor een website die voor je werkt?": "Ready for a website that works for you?",
	"Vergelijk eerst de pakketten of stuur meteen door wat je bedrijf nodig heeft — we reageren dezelfde dag.": "Compare the packages first or send straight away what your business needs — we reply the same day.",
	"Klanten aan het woord": "Customers speak up",
	"Wat lokale ondernemers over ons zeggen.": "What local business owners say about us.",
	"Review us on Trustpilot": "Review us on Trustpilot",
	"Beoordeel ons op Trustpilot": "Review us on Trustpilot",
	"Veeg opzij voor meer reviews": "Swipe for more reviews",
	"Kies sneller wat bij je bedrijf past.": "Choose what fits your business faster.",
	"Website laten maken met duidelijke pakketten en prijzen": "Have a website made with clear packages and prices",
	"Drie duidelijke keuzes, van een compacte one-page tot een website met maandelijkse content.": "Three clear choices, from a compact one-page website to a website with monthly content.",
	"Drie duidelijke keuzes voor zelfstandigen en lokale bedrijven, van een compacte one-page tot een professionele website met maandelijkse content.": "Three clear choices for independent professionals and local businesses, from a compact one-page to a professional website with monthly content.",
	"Keuzehulp": "Decision guide",
	"BMA Visibility Sprint - One-page Website als je snel professioneel online wil met één duidelijke pagina.": "BMA Visibility Sprint - One-page Website if you want to get online professionally with one clear page.",
	"Business Website als je meerdere pagina's, structuurhulp en klein onderhoud nodig hebt.": "Business Website if you need multiple pages, help with structure and small maintenance.",
	"Website + Content als je ook maandelijks zichtbaar wil blijven met korte video's.": "Website + Content if you also want to stay visible every month with short videos.",
	"Vergelijk": "Compare",
	"Drie duidelijke keuzes.": "Three clear choices.",
	"Kies uit drie pakketten: een snelle one-page, een complete businesswebsite of een website met maandelijkse content.": "Choose from three packages: a fast one-page website, a complete business website or a website with monthly content.",
	"Kies uit drie pakketten: een snelle one-page, een complete businesswebsite of een website met maandelijkse content. Voor lokale aanvragen kan je ook onze pagina over": "Choose from three packages: a fast one-page website, a complete business website or a website with monthly content. For local requests, you can also view our page about",
	"website laten maken in Limburg": "having a website made in Limburg",
	"Een professionele one-page website met contactformulier en Google Maps. Kies voor een eenmalige aankoop of start zonder opstartkost met een abonnement.": "A professional one-page website with a contact form and Google Maps. Choose a one-time purchase or start without a setup fee with a subscription.",
	"In beide formules inbegrepen:": "Included in both formulas:",
	"Kies betaalformule voor BMA Visibility Sprint": "Choose payment option for BMA Visibility Sprint",
	"Eenmalig": "One-time",
	"Abonnement": "Subscription",
	"Voor ondernemers die snel professioneel online willen met één duidelijke pagina.": "For business owners who want to get online quickly with one clear page.",
	"Voor ondernemers die zonder opstartkost willen beginnen en kleine wijzigingen willen laten uitvoeren.": "For business owners who want to start without a setup fee and have small changes handled.",
	"EENMALIG": "ONE-TIME",
	"BMA Visibility Sprint - One-page Website": "BMA Visibility Sprint - One-page Website",
	"ABONNEMENT": "SUBSCRIPTION",
	"Beste als je website weinig verandert en je liever één keer betaalt.": "Best if your website rarely changes and you prefer to pay once.",
	"Beste als je zonder opstartkost wilt beginnen en kleine wijzigingen door BMA wilt laten uitvoeren.": "Best if you want to start without a setup fee and have BMA handle small changes.",
	"Voor lokale bedrijven met meerdere diensten, projecten of belangrijke informatie.": "For local businesses with multiple services, projects or important information.",
	"Voor bedrijven die hun website én sociale media maandelijks actief willen houden.": "For businesses that want to keep both their website and social media active every month.",
	"€0 opstart + €59/mnd": "€0 setup + €59/month",
	"Professionele one-page website": "Professional one-page website",
	"Geen opstartkost": "No setup fee",
	"Klein onderhoud inbegrepen": "Small maintenance included",
	"1 jaar hosting en .be-domeinnaam inbegrepen": "1 year of hosting and .be domain name included",
	"Geen onderhoud": "No maintenance",
	"Vanaf jaar 2: €59/jaar": "From year 2: €59/year",
	"Minimum 12 maanden": "Minimum 12 months",
	"Klein · 1 aanvraag/mnd": "Small · 1 request/month",
	"Gemiddeld · 2 aanvragen/mnd": "Medium · 2 requests/month",
	"Groot · 4 aanvragen/mnd": "Large · 4 requests/month",
	"Hosting en .be-domeinnaam zolang abonnement actief is": "Hosting and .be domain name while the subscription is active",
	"Na betaling van 12 maanden": "After 12 months have been paid",
	"Na de eerste 12 maanden maandelijks opzegbaar met één maand opzegtermijn": "After the first 12 months, cancellable monthly with one month's notice",
	"Maandelijks opzegbaar met één maand opzegtermijn": "Cancellable monthly with one month's notice",
	"Vraag One-page eenmalig aan": "Request One-page one-time",
	"Vraag One-page abonnement aan": "Request One-page subscription",
	"€499 eenmalig": "€499 one-time",
	"Bekijk alle details": "View all details",
	"Vraag een gratis prototype aan": "Request a free prototype",
	"Gratis websiteprototype": "Free website prototype",
	"Klant levert teksten en foto's aan": "Client provides text and photos",
	"1 revisieronde": "1 revision round",
	"2 revisierondes": "2 revision rounds",
	"Aanbevolen voor lokale bedrijven": "Recommended for local businesses",
	"€699 opstartkost + €59/mnd": "€699 setup fee + €59/month",
	"Looptijd": "Term",
	"Eigendom": "Ownership",
	"Hosting": "Hosting",
	"Revisies": "Revisions",
	"Geen abonnement": "No subscription",
	"Geen minimumlooptijd": "No minimum term",
	"Minimumlooptijd van 12 maanden": "Minimum term of 12 months",
	"Vanaf oplevering": "From delivery",
	"1 jaar hosting en .be-domeinnaam inbegrepen. Vanaf jaar 2: €59/jaar.": "1 year of hosting and .be domain name included. From year 2: €59/year.",
	"1 revisieronde voor de website.": "1 revision round for the website.",
	"2 revisierondes voor de website.": "2 revision rounds for the website.",
	"2 revisierondes voor de website en 1 correctieronde per video.": "2 revision rounds for the website and 1 correction round per video.",
	"Contactformulier en Google Maps inbegrepen.": "Contact form and Google Maps included.",
	"Hosting en één .be-domeinnaam inbegrepen zolang het abonnement actief is.": "Hosting and one .be domain name included while the subscription is active.",
	"Hulp met teksten en structuur": "Help with text and structure",
	"Contactformulier": "Contact form",
	"3 tot 4 pagina's": "3 to 4 pages",
	"Contactformulier en Google Maps": "Contact form and Google Maps",
	"Hosting en .be-domeinnaam zolang het abonnement actief is": "Hosting and .be domain name while the subscription is active",
	"Vraag Business Website aan": "Request Business Website",
	"€899 opstartkost + €149/mnd": "€899 setup fee + €149/month",
	"4 tot 5 pagina's": "4 to 5 pages",
	"Alles uit Business": "Everything from Business",
	"2 korte socialmediavideo's per maand": "2 short social media videos per month",
	"BMA verzorgt montage; klant levert beeldmateriaal": "BMA handles editing; client provides footage",
	"BMA verzorgt de montage; de klant levert beeldmateriaal aan.": "BMA handles editing; the client provides footage.",
	"1 correctieronde per video": "1 correction round per video",
	"Eerst zien wat we voor je kunnen maken?": "Want to see what we can make for you first?",
	"De belangrijkste details staan bij elk pakket; hieronder vind je de contractuele afspraken gebundeld.": "The most important details are shown with each package; below you will find the contractual agreements bundled.",
	"Bekijk pakketvoorwaarden": "View package terms",
	"Vraag Website + Content aan": "Request Website + Content",
	"FAQ": "FAQ",
	"Veelgestelde vragen over de pakketten": "Frequently asked questions about the packages",
	"Wanneer krijg ik een eerste versie?": "When will I receive a first version?",
	"Na je aanvraag bepalen we samen de scope en timing. De termijn start zodra alle nodige teksten, foto's en informatie ontvangen zijn. Meestal sturen we binnen 2 tot 3 werkdagen een eerste prototype. Daarna hangt de oplevertijd af van de omvang van het project en hoe snel feedback wordt gegeven. De definitieve website staat meestal binnen 5 tot 7 werkdagen klaar.": "After your request, we define the scope and timing together. The timeline starts once all required text, photos and information have been received. Usually, we send a first prototype within 2 to 3 business days. After that, delivery depends on the size of the project and how quickly feedback is provided. The final website is usually ready within 5 to 7 business days.",
	"Hoe werken betaling en pakketprijzen?": "How do payment and package prices work?",
	"De prijs staat duidelijk bij elk pakket. BMA Visibility Sprint - One-page Website kan eenmalig aan €499 of als abonnement aan €0 opstart + €59 per maand met minimum 12 maanden. Business Website kost €699 opstartkost + €59 per maand. Website + Content kost €899 opstartkost + €149 per maand.": "The price is clearly shown with each package. BMA Visibility Sprint - One-page Website is available at €499 one-time or as a subscription at €0 setup + €59 per month with a 12-month minimum. Business Website costs a €699 setup fee + €59 per month. Website + Content costs a €899 setup fee + €149 per month.",
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
	"Webdesign, onderhoud en content voor lokale bedrijven": "Web design, maintenance and content for local businesses",
	"We combineren webdesign, onderhoud en content zodat lokale ondernemers sneller vertrouwen opbouwen en meer aanvragen uit hun website halen.": "We combine web design, maintenance and content so local business owners build trust faster and get more enquiries from their website.",
	"We combineren webdesign, onderhoud en content zodat lokale ondernemers sneller vertrouwen opbouwen en meer aanvragen uit hun website halen. Je kan ook gratis een websiteanalyse of eerste websiteprototype aanvragen.": "We combine web design, maintenance and content so local business owners build trust faster and get more enquiries from their website. You can also request a free website analysis or first website prototype.",
	"We combineren webdesign, onderhoud en content zodat zelfstandigen en lokale ondernemers in België sneller vertrouwen opbouwen en meer aanvragen uit hun website halen. Je kan ook gratis een websiteanalyse of eerste websiteprototype aanvragen.": "We combine web design, maintenance and content so independent professionals and local business owners in Belgium build trust faster and get more enquiries from their website. You can also request a free website analysis or first website prototype.",
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
	"Daarna beslis je rustig of je verder wil met een one-page website, Business Website, Website + Content of onze aanpak voor": "After that, you calmly decide whether you want to continue with a one-page website, Business Website, Website + Content or our approach to",
	"webdesign in Limburg": "web design in Limburg",
	"Stap 03": "Step 03",
	"Vraag gratis analyse of prototype aan": "Request a free analysis or prototype",
	"Drie onderdelen die elkaar versterken.": "Three parts that strengthen each other.",
	"Duidelijke, mobiele websites die tonen wie je bent, wat je aanbiedt en hoe klanten je bereiken.": "Clear mobile websites that show who you are, what you offer and how customers can reach you.",
	"Mobile-first ontwerp": "Mobile-first design",
	"Heldere pagina-opbouw": "Clear page structure",
	"SEO-basis en contactflow": "SEO basics and contact flow",
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
	"Website realisaties voor lokale ondernemers en zelfstandigen": "Website work for local business owners and independent professionals",
	"Een selectie van klantprojecten, conceptwebsites en digitale ontwerpen.": "A selection of client projects, concept websites and digital designs.",
	"Een selectie van klantprojecten, conceptwebsites en digitale ontwerpen, met telkens het type bedrijf en de geleverde webdesign-dienst.": "A selection of client projects, concept websites and digital designs, each with the business type and delivered web design service.",
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
	"Business Website voor een vakman in voegwerken en gevelrenovatie, gericht op vertrouwen en offerteaanvragen.": "Business Website for a tradesperson in jointing and facade renovation, focused on trust and quote requests.",
	"Business Website voor een specialist in voegwerken en gevelrenovatie, met focus op vakmanschap, vertrouwen en offerteaanvragen.": "Business Website for a specialist in jointing and facade renovation, focused on craftsmanship, trust and quote requests.",
	"Klantwebsite": "Client website",
	"Live website": "Live website",
	"Gevelwerken": "Facade work",
	"Gevelrenovatie": "Facade renovation",
	"Bekijk Thor Smeers": "View Thor Smeers",
	"Kevin Claes — Algemene Dakwerken": "Kevin Claes — General Roofing",
	"Website voor Algemene Dakwerken Kevin Claes, met dakrenovatie, Velux, zinkwerk, isolatie en zolderinrichting helder in beeld. De grote dakfoto zet het vakwerk centraal; de gratis-offerteknop maakt contact direct bereikbaar.": "Website for Kevin Claes General Roofing, presenting roof renovation, Velux windows, zinc work, insulation and attic conversion. A large roof photo puts the craftsmanship front and centre, while the free-quote button makes it easy to get in touch.",
	"Dakrenovatie, Velux, zinkwerk, rustieke dakbedekking, isolatie en zolderinrichting staan helder in beeld. De grote dakfoto zet het vakwerk centraal en de gratis-offerteknop houdt contact dichtbij.": "Roof renovation, Velux windows, zinc work, traditional roofing, insulation and attic conversion are presented clearly. A large roof photo puts the craftsmanship front and centre, with a direct route to a free quote.",
	"Websitefocus": "Website focus",
	"Diensten en realisaties helder presenteren en bezoekers snel naar een gratis offerteaanvraag leiden.": "Present services and completed projects clearly and guide visitors toward a free quote.",
	"Websitepreview voor Algemene Dakwerken Kevin Claes.": "Website preview for Kevin Claes General Roofing.",
	"Website van Kevin Claes — Algemene Dakwerken, met een dakrenovatie in beeld": "Kevin Claes General Roofing website showing a roof renovation.",
	"De homepage brengt dakvakmanschap, de belangrijkste diensten en realisaties samen, met een directe route naar een gratis offerteaanvraag.": "The homepage brings roofing craftsmanship, key services and completed projects together, with a direct route to a free quote.",
	"Dakwerken": "Roofing",
	"Websiteontwerp": "Website design",
	"Algemene dakwerken": "General roofing",
	"Projectfocus": "Project focus",
	"Dakrenovatie, Velux, zinkwerk, rustieke dakbedekking, isolatie en zolderinrichting.": "Roof renovation, Velux windows, zinc work, traditional roofing, insulation and attic conversion.",
	"De verschillende dakdiensten helder uitleggen en bezoekers snel naar een offerteaanvraag leiden.": "Clearly explain the different roofing services and guide visitors toward a quote request.",
	"Een beeldgerichte homepage met een overzichtelijke navigatie, een korte uitleg van de diensten en een opvallende offerteknop.": "An image-led homepage with clear navigation, concise service descriptions and a prominent quote button.",
	"Navigatie naar diensten en realisaties, een kernboodschap over dakvakmanschap en een directe CTA voor een gratis offerte.": "Navigation to services and projects, a clear message about roofing craftsmanship, and a direct call to request a free quote.",
	"Schermafbeelding van de website van Kevin Claes — Algemene Dakwerken": "Screenshot of the Kevin Claes General Roofing website",
	"Bekijk Kevin Claes": "View Kevin Claes",
	"Vastgoedfotografie, videografie en socialmediacontent": "Real estate photography, videography and social media content",
	"Een sterke visuele portfolio combineren met duidelijke diensten en een eenvoudige contactflow.": "Combine a strong visual portfolio with clear services and a simple contact flow.",
	"Een visuele bedrijfswebsite die het aanbod helder presenteert en bezoekers vlot naar contact leidt.": "A visual business website that presents the offer clearly and guides visitors smoothly toward contact.",
	"Visuele portfolio, dienstenoverzicht, socialmediacontent en eenvoudige contactflow.": "Visual portfolio, service overview, social media content and simple contact flow.",
	"Beautyzaak": "Beauty business",
	"Conceptwebsite voor een lokale dakwerker, bedoeld om vertrouwen, diensten en offerte-aanvragen duidelijk te tonen.": "Concept website for a local roofer, designed to clearly show trust, services and quote requests.",
	"Compacte conceptwebsite, bedoeld om te tonen hoe een eenvoudige eerste online basis eruit kan zien.": "Compact concept website, designed to show what a simple first online foundation can look like.",
	"Tijdelijke demo via GitHub Pages": "Temporary demo via GitHub Pages",
	"Live preview van de tijdelijke demonstratieomgeving.": "Live preview of the temporary demo environment.",
	"BMA Visibility Sprint - One-page Website pakket": "BMA Visibility Sprint - One-page Website package",
	"Compacte website": "Compact website",
	"Offertegericht": "Quote-focused",
	"Voorbeeld van een Business Website.": "Example of a Business Website.",
	"Bekijk Moeskops Gevelwerken": "View Moeskops Gevelwerken",
	"Voegwerken en gevelrenovatie": "Jointing and facade renovation",
	"Een ervaren vakman online betrouwbaar positioneren en bezoekers vlot naar een offerteaanvraag sturen.": "Position an experienced craftsman as trustworthy online and guide visitors smoothly toward a quote request.",
	"Dienstenoverzicht, vertrouwen, offertefocus en mobiele contactknoppen.": "Service overview, trust, quote focus and mobile contact buttons.",
	"Bekijk AGV Smeers": "View AGV Smeers",
	"Voegwerken, gevelrenovatie en verbouwingswerken": "Jointing, facade renovation and renovation works",
	"Meer dan 30 jaar vakervaring online helder en betrouwbaar presenteren.": "Present more than 30 years of professional experience clearly and reliably online.",
	"Live website, dienstenoverzicht, realisaties, lokale positionering en offerte-aanvraag.": "Live website, service overview, work examples, local positioning and quote request.",
	"Een rijker voorbeeld voor een zaak die warm, professioneel en herkenbaar wil overkomen.": "A richer example for a business that wants to feel warm, professional and recognizable.",
	"5 pagina's": "5 pages",
	"Voorbeeld van Website + Content.": "Example of Website + Content.",
	"Projecttype": "Project type",
	"Sector": "Sector",
	"Uitdaging": "Challenge",
	"Oplossing": "Solution",
	"Belangrijkste functies": "Key features",
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
	"Een directe webdesigner voor je online basis": "A direct web designer for your online foundation",
	"BMA Studio helpt starters en lokale ondernemers met websites, onderhoud en online zichtbaarheid. Je werkt rechtstreeks met Lio, zonder accountmanagers of onnodige tussenpersonen.": "BMA Studio helps starters and local business owners with websites, maintenance and online visibility. You work directly with Lio, without account managers or unnecessary middlemen.",
	"BMA Studio helpt starters, zelfstandigen en lokale ondernemers in België met websites, onderhoud en online zichtbaarheid. Je werkt rechtstreeks met Lio, zonder accountmanagers of onnodige tussenpersonen.": "BMA Studio helps starters, independent professionals and local business owners in Belgium with websites, maintenance and online visibility. You work directly with Lio, without account managers or unnecessary middlemen.",
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
	"BMA Studio werkt voor starters, zelfstandigen en lokale bedrijven in België. Voor ondernemers die specifiek zoeken naar": "BMA Studio works for starters, independent professionals and local businesses in Belgium. For business owners specifically looking for",
	"is er een aparte pagina met aanpak, prijzen en veelgestelde vragen. Veel overleg kan vlot online, maar de aanpak blijft persoonlijk en praktisch.": "there is a separate page with approach, prices and frequently asked questions. A lot of consultation can happen smoothly online, while the approach stays personal and practical.",
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
	"Contacteer BMA Studio voor je website": "Contact BMA Studio for your website",
	"Je hoeft nog geen volledige briefing te hebben. Een korte uitleg over je bedrijf, je doel en je timing is genoeg om het gesprek goed te starten.": "You do not need a full brief yet. A short explanation of your business, your goal and your timing is enough to start the conversation well.",
	"Je hoeft nog geen volledige briefing te hebben. Een korte uitleg over je bedrijf, je regio, je doel en je timing is genoeg om het gesprek goed te starten.": "You do not need a full brief yet. A short explanation of your business, your region, your goal and your timing is enough to start the conversation well.",
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
	"Voor lokale ondernemers, starters en kleine bedrijven in België en Limburg": "For local business owners, starters and small businesses in Belgium and Limburg",
	"Naam": "Name",
	"Bedrijf": "Company",
	"E-mail": "Email",
	"Pakket": "Package",
	"Nog niet zeker": "Not sure yet",
	"BMA Visibility Sprint - One-page Website - €499 eenmalig": "BMA Visibility Sprint - One-page Website - €499 one-time",
	"BMA Visibility Sprint - One-page Website abonnement - €0 opstart + €59/mnd": "BMA Visibility Sprint - One-page Website subscription - €0 setup + €59/month",
	"Business Website - €699 opstartkost + €59/mnd": "Business Website - €699 setup fee + €59/month",
	"Website + Content - €899 opstartkost + €149/mnd": "Website + Content - €899 setup fee + €149/month",
	"Bericht": "Message",
	"Verstuur aanvraag": "Send request",
	"Bedankt. Je aanvraag is verzonden.": "Thank you. Your request has been sent.",
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
	"Bespreek je website": "Discuss your website",
	"Vraag een offerte": "Request a quote",
	"Digitaal en creatief bureau": "Digital and creative agency",
	"We bouwen websites en apps voor lokale bedrijven, maken content en video’s en beheren sociale media. Ook voor campagnes, advertenties en onderhoud kan je bij ons terecht.": "We build websites and apps for local businesses, create content and videos, and manage social media. You can also come to us for campaigns, advertising and maintenance.",
	"Wat we doen.": "What we do.",
	"Je aanbod, realisaties en contactgegevens op een website die ook op je gsm werkt.": "Your services, work and contact details on a website that works on your phone too.",
	"Een webapp waarmee klanten afspraken boeken, betalen of hun gegevens bekijken.": "A web app where customers book appointments, pay or view their details.",
	"Beelden, video’s en posts voor je website en sociale media.": "Images, videos and posts for your website and social media.",
	"Een campagne rond je aanbod, met advertenties op de kanalen die je klanten gebruiken.": "A campaign around your services or products, with ads on the channels your customers use.",
	"Updates, technische controles en wijzigingen aan je website of app.": "Updates, technical checks and changes to your website or app.",
	"Zo werken we samen.": "How we work together.",
	"We bespreken wat je wil laten maken en leggen vast wat erbij hoort. Tijdens het project werk je rechtstreeks met Lio.": "We discuss what you want us to make and agree on what is included. During the project, you work directly with Lio.",
	"Afspraken vooraf": "Agreed in advance",
	"Je weet wat we maken, welke informatie we nodig hebben en hoeveel het kost.": "You know what we are making, what information we need and what it costs.",
	"Nakijken voor oplevering": "Checked before delivery",
	"We kijken de pagina’s en functies na op mobiel en desktop.": "We check pages and features on mobile and desktop.",
	"Onderhoud en wijzigingen": "Maintenance and changes",
	"We spreken af welke updates en wijzigingen inbegrepen zijn en hoe je extra werk kan aanvragen.": "We agree on which updates and changes are included and how to request additional work.",
	"Rechtstreeks met Lio": "Direct contact with Lio",
	"Je bespreekt je vragen en feedback met de persoon die je project uitwerkt.": "You discuss your questions and feedback with the person working on your project.",
	"Wat we maakten": "What we made",
	"Meer bekijken": "Explore further",
	"Diensten, werk en contact.": "Services, work and contact.",
	"Lees wat we maken en waarvoor je het kan gebruiken.": "Read what we make and what you can use it for.",
	"Bekijk websites voor klanten en fictieve voorbeeldsites.": "View websites for clients and fictional example sites.",
	"Stuur je vraag naar Lio of neem rechtstreeks contact op.": "Send Lio your question or contact him directly.",
	"Wat wil je laten maken?": "What would you like us to make?",
	"Een nieuwe website, een boekingssysteem of content voor je zaak? Vertel ons wat je nodig hebt, dan bespreken we de inhoud en timing.": "A new website, a booking system or content for your business? Tell us what you need and we will discuss the content and timing.",
	"Reviews van klanten.": "Reviews from clients.",
	"Websites, apps": "Websites, apps",
	"en content.": "and content.",
	"We maken websites, apps, content en video’s. We beheren ook sociale media, werken campagnes en advertenties uit en houden je website of app bij. Je kan één dienst kiezen of meerdere opdrachten bij ons leggen.": "We make websites, apps, content and videos. We also manage social media, create campaigns and ads, and maintain your website or app. You can choose one service or ask us to handle several projects.",
	"Vertel wat je wil laten maken.": "Tell us what you want us to make.",
	"We bespreken de inhoud, functies en timing.": "We discuss the content, features and timing.",
	"We leggen het werk en de prijs vast in een voorstel.": "We set out the work and price in a proposal.",
	"Wat we maken en bijhouden.": "What we make and maintain.",
	"Je kan ons inschakelen voor een website, maar ook voor een losse video, een app of het beheer van je sociale media. Hieronder lees je wat elke dienst inhoudt.": "You can ask us to build a website, create a single video or app, or manage your social media. Below you can read what each service includes.",
	"We bouwen een website waarop klanten je aanbod bekijken, je werk zien en contact opnemen. Een one-page zet alles op één pagina; een grotere website geeft elke dienst of onderwerp meer ruimte.": "We build a website where customers view your services or products, see your work and contact you. A one-page site puts everything on one page; a larger website gives each service or topic more space.",
	"Je diensten en contactgegevens op één pagina": "Your services and contact details on one page",
	"Aparte pagina’s voor diensten en realisaties": "Separate pages for services and completed work",
	"Een formulier voor vragen of offerteaanvragen": "A form for questions or quote requests",
	"Een webapp is een applicatie die je in je browser gebruikt. Klanten kunnen er bijvoorbeeld zelf een afspraak boeken, betalen of documenten bekijken. We spreken af welke functies jouw bedrijf nodig heeft.": "A web app is an application you use in your browser. Customers can use it to book an appointment, pay or view documents. We agree on the features your business needs.",
	"Een boekingssysteem voor afspraken of reservaties": "A booking system for appointments or reservations",
	"Een betaalfunctie voor je klanten": "A payment feature for your customers",
	"Een klantenportaal of overzicht voor je team": "A customer portal or an overview for your team",
	"We maken beelden, video’s en posts in jouw huisstijl. Je kan een losse video of een reeks posts aanvragen. We kunnen ook de contentplanning en het beheer van je sociale media verzorgen.": "We create images, videos and posts in your brand style. You can request a single video or a series of posts. We can also handle content planning and social media management.",
	"Beelden en posts in je huisstijl": "Images and posts in your brand style",
	"Video’s en montage voor je sociale media": "Videos and editing for your social media",
	"We werken een campagne uit rond je bedrijf, een actie of een nieuw aanbod. Daarvoor maken we de content en advertenties. We bespreken op welke kanalen ze verschijnen en welk budget je wil inzetten.": "We create a campaign around your business, a promotion or a new service or product. We make the content and ads for it, and discuss which channels they will appear on and the budget you want to use.",
	"Een campagne voor een actie of nieuw aanbod": "A campaign for a promotion or new service or product",
	"Beelden, video’s en teksten voor je campagne": "Images, videos and text for your campaign",
	"We voeren updates en technische controles uit en passen je website of app aan wanneer er iets verandert. Denk aan nieuwe openingsuren, een extra dienst of een aangepaste functie. Het onderhoud spreken we vooraf met je af.": "We perform updates and technical checks, and change your website or app when needed. For example, new opening hours, an additional service or an updated feature. We agree on maintenance with you in advance.",
	"Functies aanpassen of uitbreiden": "Change or extend features",
	"Prijzen voor websites.": "Website prices.",
	"Hieronder vind je de prijzen voor een one-page, een Business Website en een Website + Content. Bij elke formule staat wat inbegrepen is.": "Below you will find prices for a one-page site, a Business Website and Website + Content. Each plan lists what is included.",
	"Voor een bedrijf dat zijn aanbod op één pagina kan uitleggen.": "For a business that can explain its services or products on one page.",
	"Een website van 3 tot 4 pagina’s voor je diensten, realisaties en contactgegevens.": "A website with 3 to 4 pages for your services, work and contact details.",
	"Een website van 4 tot 5 pagina’s, met elke maand 2 korte video’s voor je sociale media.": "A website with 4 to 5 pages, plus 2 short social media videos every month.",
	"Wil je eerst een ontwerpvoorstel zien?": "Would you like to see an initial design first?",
	"Vraag een gratis websiteprototype": "Request a free website prototype",
	"Vragen over de websiteformules": "Questions about website plans",
	"Prijzen voor ander werk.": "Prices for other work.",
	"Voor een app, video, socialmediabeheer of campagne maken we een offerte. De prijs hangt af van wat je nodig hebt; we spreken de inhoud en timing vooraf af.": "We prepare a quote for an app, video, social media management or campaign. The price depends on what you need; we agree on the content and timing in advance.",
	"Heb je een vraag over een dienst?": "Do you have a question about a service?",
	"Vertel wat je wil laten maken of aanpassen. We bespreken welke dienst erbij past en wat we van je nodig hebben.": "Tell us what you want us to make or change. We discuss which service fits and what we need from you.",
	"BMA Studio en Lio Smeers.": "BMA Studio and Lio Smeers.",
	"BMA Studio is het digitale en creatieve bureau van Lio Smeers. We maken websites, apps en content voor lokale bedrijven in België en verzorgen ook sociale media, campagnes en onderhoud.": "BMA Studio is Lio Smeers’ digital and creative agency. We make websites, apps and content for local businesses in Belgium, and also handle social media, campaigns and maintenance.",
	"Afspraken over wat we maken, de timing en de prijs.": "Agreements on what we make, the timing and the price.",
	"Je kan één dienst kiezen of meerdere opdrachten combineren.": "You can choose one service or combine several projects.",
	"Wat je bij BMA kan laten maken.": "What you can ask BMA to make.",
	"Een website om je aanbod te tonen, een app om afspraken te beheren of video’s voor je sociale media: we maken het werk dat je voor jouw bedrijf nodig hebt.": "A website to show your services, an app to manage appointments or videos for your social media: we make what your business needs.",
	"We bespreken waarvoor je het wil gebruiken en wat er gemaakt moet worden. Zo kunnen we de inhoud, functies en planning afspreken voor we beginnen.": "We discuss how you want to use it and what needs to be made. That lets us agree on content, features and planning before starting.",
	"Bij BMA Studio werk je rechtstreeks met Lio Smeers. Je bespreekt je plannen met de persoon die je project uitwerkt.": "At BMA Studio, you work directly with Lio Smeers. You discuss your plans with the person working on your project.",
	"Lio denkt met je mee over de pagina’s, inhoud en functies. Tijdens het project weet je wat er klaar is en waar we nog aan werken.": "Lio helps you think through the pages, content and features. During the project, you know what is ready and what we are still working on.",
	"Van je vraag tot de oplevering.": "From your enquiry to delivery.",
	"Je project bespreken": "Discuss your project",
	"Je vertelt wat je bedrijf doet en wat je wil laten maken. We bespreken wie het zal gebruiken of bekijken.": "You tell us what your business does and what you want us to make. We discuss who will use or view it.",
	"Inhoud en afspraken": "Content and agreements",
	"We leggen vast wat we maken, welke informatie we nodig hebben en hoeveel het kost.": "We agree on what we make, what information we need and what it costs.",
	"Maken en nakijken": "Make and review",
	"We werken je project uit en verwerken je feedback volgens de afspraken. Daarna bespreken we wat er aan opvolging nodig is.": "We work on your project and handle your feedback as agreed. Then we discuss what follow-up is needed.",
	"Afspraken": "Agreements",
	"Wat we vooraf afspreken.": "What we agree on in advance.",
	"Wat inbegrepen is": "What is included",
	"Welke pagina’s, functies of content we maken, hoeveel revisies inbegrepen zijn en wat apart wordt aangerekend.": "Which pages, features or content we make, how many revisions are included and what is charged separately.",
	"Wat je aanlevert": "What you provide",
	"Welke teksten, beelden en bedrijfsgegevens we van je nodig hebben om aan het project te beginnen.": "Which text, images and business details we need from you to start the project.",
	"Wat er na oplevering gebeurt": "What happens after delivery",
	"Wie de website of app bijhoudt en hoe je later wijzigingen kan aanvragen.": "Who maintains the website or app and how you can request changes later.",
	"We werken voor bedrijven in België.": "We work for businesses in Belgium.",
	"BMA Studio is gevestigd in Riemst en werkt voor bedrijven in Limburg, Brussel en de rest van België. Lees meer over": "BMA Studio is based in Riemst and works with businesses in Limburg, Brussels and the rest of Belgium. Read more about",
	"of bespreek je project online met ons.": "or discuss your project with us online.",
	"Heb je een project in gedachten?": "Do you have a project in mind?",
	"Vertel wat je bedrijf doet en wat je wil laten maken. We bespreken je vraag met je.": "Tell us what your business does and what you want us to make. We will discuss your enquiry with you.",
	"Websites en concepten.": "Websites and concepts.",
	"Hier zie je websites voor klanten en fictieve voorbeeldsites. Bij elk project staat wat we hebben gemaakt.": "Here you can see websites for clients and fictional example sites. Each project explains what we made.",
	"Wat je hier ziet": "What you will find here",
	"Websites die voor klanten werden gemaakt.": "Websites made for clients.",
	"Conceptsites om stijl en indeling te tonen.": "Concept sites showing style and layout.",
	"Projectpagina’s met de geleverde diensten.": "Project pages with the services delivered.",
	"Klantprojecten en voorbeeldsites.": "Client projects and example sites.",
	"Websites die we maakten.": "Websites we made.",
	"Websites voor klanten | BMA Studio": "Client websites | BMA Studio",
	"Bekijk websites die BMA Studio voor klanten maakte, van vastgoedfotografie tot dakwerken. Ontdek het werk achter elk project.": "Explore websites BMA Studio made for clients, from property photography to roofing. Discover the work behind each project.",
	"Van vastgoedfotografie tot dakwerken. Bekijk de websites die we voor onze klanten maakten.": "From property photography to roofing. Explore the websites we made for our clients.",
	"Dakwerken, isolatie en zolderinrichting in beeld, met realisaties en een korte weg naar een offerte.": "Roofing, insulation and attic conversions, with completed projects and a simple way to request a quote.",
	"Vastgoedfotografie & video": "Property photography & video",
	"Voegwerken & gevelrenovatie": "Pointing & facade renovation",
	"Gevelwerken & verbouwingen": "Facade work & renovations",
	"Algemene dakwerken": "Roofing services",
	"Websites voor onze klanten": "Websites for our clients",
	"De klantprojecten tonen opgeleverd werk. De conceptsites laten zien hoe een website er voor een bepaald type bedrijf kan uitzien en zijn demonstraties.": "Client projects show delivered work. Concept sites demonstrate what a website could look like for a particular type of business.",
	"Vertel kort wat je bedrijf doet en wat je wil laten maken. Als je nog twijfelt over de aanpak, bespreken we dat samen.": "Briefly tell us what your business does and what you want us to make. If you are unsure about the approach, we can discuss it together.",
	"We bekijken wat je nodig hebt.": "We look at what you need.",
	"We bespreken de inhoud en timing met je.": "We discuss the content and timing with you.",
	"Je krijgt een voorstel voor het afgesproken werk.": "You receive a proposal for the agreed work.",
	"Contact met Lio.": "Contact Lio.",
	"Stuur je vraag via het formulier of neem rechtstreeks contact op. Lio bekijkt je bericht en bespreekt met je wat er mogelijk is.": "Send your question through the form or contact us directly. Lio reads your message and discusses what is possible with you.",
	"Reactie: meestal dezelfde dag": "Response: usually the same day",
	"Je hoeft nog geen formule te kiezen.": "You do not need to choose a plan yet.",
	"Verstuur je bericht": "Send your message",
	"Je bericht is verzonden. We nemen contact met je op.": "Your message has been sent. We will contact you.",
	"Na je bericht": "After your message",
	"Bedrijf (optioneel)": "Company (optional)",
	"E-mailadres": "Email address",
	"Bv. een website voor je zaak, een boekingssysteem of video’s voor je sociale media.": "For example, a website for your business, a booking system or videos for your social media.",
	"We hebben je bericht ontvangen.": "We have received your message.",
	"Bedankt voor je bericht. We bekijken je vraag en nemen contact met je op, meestal dezelfde dag.": "Thank you for your message. We will read your enquiry and contact you, usually the same day.",
	"We bekijken wat je wil laten maken.": "We look at what you want us to make.",
	"We leggen het afgesproken werk vast in een voorstel.": "We set out the agreed work in a proposal.",
	"We bouwen websites voor zelfstandigen en lokale bedrijven in Limburg. Je klanten vinden er je aanbod, realisaties en contactgegevens, op hun gsm of computer.": "We build websites for independent professionals and local businesses in Limburg. Customers find your services, work and contact details on their phone or computer.",
	"Een website voor je bedrijf in Limburg.": "A website for your business in Limburg.",
	"We bespreken welke informatie jouw klanten zoeken. Dat kunnen je diensten, openingsuren, prijzen of realisaties zijn. We geven die informatie een plaats op je website en maken contact opnemen eenvoudig.": "We discuss what information your customers look for. This could be your services, opening hours, prices or completed work. We give that information a place on your website and make it easy to contact you.",
	"BMA Studio is gevestigd in Riemst. We werken voor bedrijven in Limburg en de rest van België; overleg over je website kan ook online.": "BMA Studio is based in Riemst. We work with businesses in Limburg and the rest of Belgium; we can also discuss your website online.",
	"Wat we op je website zetten.": "What we put on your website.",
	"We maken een one-page of een website met meerdere pagina’s. Je aanbod en contactgegevens krijgen een plaats die bezoekers makkelijk vinden.": "We make a one-page site or a website with multiple pages. Visitors can easily find your services and contact details.",
	"We ordenen je diensten, realisaties en praktische informatie en bepalen waar een contactknop of formulier nodig is.": "We organise your services, work and practical information, and decide where a contact button or form is needed.",
	"We kunnen na oplevering teksten en beelden aanpassen en technische updates uitvoeren, volgens de afspraken bij je website.": "After delivery, we can update text and images and perform technical updates, as agreed for your website.",
	"Hoe we je website maken.": "How we make your website.",
	"Je website bespreken": "Discuss your website",
	"Je vertelt wat je bedrijf doet en welke informatie je klanten op de website moeten vinden.": "You tell us what your business does and what information customers should find on the website.",
	"We spreken de pagina’s en inhoud af en bekijken welke teksten, beelden en bedrijfsgegevens nodig zijn.": "We agree on pages and content, and look at the text, images and business details needed.",
	"We bouwen de pagina’s, kijken de website na op mobiel en desktop en zetten hem online na je akkoord.": "We build the pages, check the website on mobile and desktop, and publish it with your approval.",
	"Klantprojecten en een conceptsite.": "Client projects and a concept site.",
	"Hieronder zie je twee klantprojecten en een fictieve voorbeeldsite.": "Below you can see two client projects and a fictional example site.",
	"Voor zelfstandigen, starters en lokale bedrijven die hun aanbod, werk en contactgegevens op een website willen tonen.": "For independent professionals, startups and local businesses that want to show their services, work and contact details on a website.",
	"Ja. We voorzien paginatitels, beschrijvingen en interne links en verwerken je bedrijfsgegevens en werkgebied op de relevante pagina’s. Dat helpt zoekmachines om de inhoud te begrijpen.": "Yes. We add page titles, descriptions and internal links, and include your business details and service area on relevant pages. This helps search engines understand the content.",
	"Hieronder vind je de prijzen voor One-page Website, Business Website en Website + Content. Bij elke formule staat wat inbegrepen is.": "Below you will find prices for One-page Website, Business Website and Website + Content. Each plan lists what is included.",
	"Zelfstandigen die hun diensten willen tonen.": "Independent professionals who want to show their services.",
	"Bedrijven die realisaties en contactgegevens willen bundelen.": "Businesses that want to bring their work and contact details together.",
	"Bedrijven die hun website willen laten bijhouden.": "Businesses that want someone to maintain their website.",
	// Current page copy: keep English complete as the site evolves.
	"Naar inhoud": "Skip to content",
	"One-page website voor de zonnestudio, met zonnebanken, openingsuren en contactmogelijkheden.": "A one-page website for the tanning studio, with tanning beds, opening hours and contact details.",
	"One-page website voor voegwerken, gevelrenovatie en verbouwingen, met duidelijke contactmogelijkheden.": "A one-page website for pointing, facade renovation and building renovations, with clear contact options.",
	"Vertrouwde partners": "Trusted partners",
	"“Duidelijke afspraken nagekomen en prachtig resultaat!”": "“Clear agreements delivered on and a wonderful result!”",
	"“Je suis très satisfait et je vous le recommande.”": "“I am very satisfied and would recommend them.”",
	"“Er was een goed contact, maar de oplevering duurde ietsjes langer dan verwacht, maar was geen probleem.”": "“Communication was good. Delivery took a little longer than expected, but that was not a problem.”",
	"“De communicatie was duidelijk en professioneel.”": "“Communication was clear and professional.”",
	"“Super tevreden over BMA Studios! Ze hebben voor mij een prachtige en professionele website gemaakt die helemaal aansluit bij wat ik voor ogen had.”": "“Really happy with BMA Studios! They created a beautiful, professional website that matches exactly what I had in mind.”",
	"Lees volledige review": "Read full review",
	"Sluiten": "Close",
	"Review van Thor Smeers": "Review by Thor Smeers",
	"“Super tevreden over BMA Studios! Ze hebben voor mij een prachtige en professionele website gemaakt die helemaal aansluit bij wat ik voor ogen had.": "“Really happy with BMA Studios! They created a beautiful, professional website that matches exactly what I had in mind.",
	"De communicatie verliep heel vlot, er werd goed geluisterd naar mijn wensen en alles werd tot in de puntjes afgewerkt.": "Communication was very smooth, they listened carefully to what I wanted and every detail was taken care of.",
	"Het eindresultaat ziet er modern, overzichtelijk en professioneel uit. Je merkt echt dat ze oog hebben voor detail en weten waar ze mee bezig zijn. Ook aanpassingen en vragen werden snel opgevolgd.": "The result looks modern, clear and professional. You can tell they have an eye for detail and know what they are doing. Changes and questions were handled quickly too.",
	"Heel blij met het resultaat en absoluut een aanrader voor iedereen die op zoek is naar een professionele website!”": "I am very happy with the result and would absolutely recommend them to anyone looking for a professional website!”",
	"Contactgegevens BMA Studio": "BMA Studio contact details",
	"Broodkruimels": "Breadcrumbs",
	"Websitepreview": "Website preview",
	"Over het project": "About the project",
	"Sluit projectinfo": "Close project information",
	"Je wordt doorgestuurd naar de boekingspagina.": "You are being redirected to the booking page.",
	"Vastgoedfotografie, video en social content. De website toont het werk en maakt het aanbod en contact helder.": "Property photography, video and social content. The website showcases the work and makes the services and contact details clear.",
	"Websitepreview van Thor Smeers met vastgoedfotografie in beeld": "Preview of Thor Smeers’ website featuring property photography",
	"Websitepreview voor Thor Smeers.": "Website preview for Thor Smeers.",
	"Vastgoedmedia": "Property media",
	"Portfolio, diensten en contact helder samenbrengen.": "Bringing the portfolio, services and contact details together clearly.",
	"Laat je werk voor zich spreken": "Let your work speak for itself",
	"Een heldere portfolio helpt bezoekers je werk en diensten te ontdekken.": "A clear portfolio helps visitors discover your work and services.",
	"Voegwerken en gevelrenovatie voor woningen. De website brengt de diensten en het vakwerk samen met een duidelijke route naar contact.": "Pointing and facade renovation for homes. The website brings the services and craftsmanship together with a clear way to get in touch.",
	"Websitepreview van Moeskops Gevelwerken met een gerenoveerde gevel in beeld": "Preview of the Moeskops Gevelwerken website featuring a renovated facade",
	"Websitepreview voor Moeskops Gevelwerken.": "Website preview for Moeskops Gevelwerken.",
	"Diensten en vakwerk tonen en contact eenvoudig maken.": "Showcasing services and craftsmanship and making contact easy.",
	"Maak je vakwerk zichtbaar": "Showcase your craftsmanship",
	"Breng je diensten en realisaties samen op één duidelijke plek.": "Bring your services and completed projects together in one clear place.",
	"Websites en apps die werken.": "Websites and apps that work.",
	"Van websites en webapps tot content, campagnes en onderhoud. Alles voor je online werk, met één aanspreekpunt.": "From websites and web apps to content, campaigns and maintenance. Everything for your online presence, with one point of contact.",
	"Een duidelijke plek voor je verhaal.": "A clear home for your story.",
	"Overzicht": "Overview",
	"Handige tools die werk uit handen nemen.": "Practical tools that take work off your hands.",
	"IN BEELD": "IN FOCUS",
	"Jouw verhaal,": "Your story,",
	"in beweging.": "in motion.",
	"Foto, video en posts in één herkenbare stijl.": "Photos, video and posts in one recognisable style.",
	"NU TE ONTDEKKEN": "DISCOVER WHAT’S NEW",
	"Nieuw": "New",
	"aanbod.": "offer.",
	"BEKIJK DE MOGELIJKHEDEN": "EXPLORE THE OPTIONS",
	"Campagne": "Campaign",
	"Beeld": "Visuals",
	"Tekst": "Copy",
	"Bereik": "Reach",
	"Één verhaal,": "One story,",
	"op de juiste plek.": "in the right place.",
	"Van eerste idee tot zichtbare campagne.": "From the first idea to a visible campaign.",
	"PERIODIEKE CHECK": "REGULAR CHECK",
	"Software bijgewerkt": "Software updated",
	"Controle": "Check",
	"Alles werkt zoals verwacht": "Everything works as expected",
	"Aanpassing": "Adjustment",
	"In overleg uitgevoerd": "Carried out as agreed",
	"Je site blijft in goede staat.": "Keep your website in good shape.",
	"Een vaste afspraak voor zorg na oplevering.": "An agreed plan for support after launch.",
	"Gevelwerken en verbouwingen door AGV Smeers. De website brengt diensten, realisaties en contact op één plek.": "Facade work and renovations by AGV Smeers. The website brings services, completed projects and contact details together.",
	"Websitepreview van AGV Smeers met gevelwerken in beeld": "Preview of the AGV Smeers website featuring facade work",
	"Websitepreview voor AGV Smeers.": "Website preview for AGV Smeers.",
	"Gevelwerken en verbouwingen": "Facade work and renovations",
	"Diensten en realisaties tonen, met contact binnen handbereik.": "Showcasing services and completed projects, with contact details close at hand.",
	"Gevelwerken helder in beeld": "Facade work clearly presented",
	"Een duidelijke presentatie brengt diensten, realisaties en contact samen.": "A clear presentation brings services, completed projects and contact details together.",
	"Een overzichtelijke website voor Sunplanet in Heusden-Zolder. Bezoekers vinden snel informatie over zonnebanken, openingsuren en contact.": "A clear website for Sunplanet in Heusden-Zolder. Visitors can quickly find information on tanning beds, opening hours and contact details.",
	"Websitepreview van Sunplanet Heusden-Zolder met de zonnestudio in beeld": "Preview of the Sunplanet Heusden-Zolder website featuring the tanning studio",
	"Websitepreview voor Sunplanet Heusden-Zolder.": "Website preview for Sunplanet Heusden-Zolder.",
	"Zonnebanken, openingsuren en contact op één plek.": "Tanning beds, opening hours and contact details in one place.",
	"Een helder online vertrekpunt": "A clear online starting point",
	"Belangrijke studio-informatie en contact staan overzichtelijk bij elkaar.": "Essential studio information and contact details, clearly organised in one place.",
	"Volledige privacyverklaring": "Full privacy statement",
	"Deze website gebruikt geen trackingcookies voor advertenties. De site bevat wel externe links, zoals LinkedIn en portfolio-links. Daarnaast gebruiken we Cloudflare Web Analytics om anonieme bezoek- en prestatiestatistieken te meten. Externe websites hebben hun eigen privacybeleid.": "This website does not use advertising tracking cookies. It does contain external links, such as LinkedIn and portfolio links. We also use Cloudflare Web Analytics to measure anonymous visitor and performance statistics. External websites have their own privacy policies.",
	"Een portfolio voor vastgoedfotografie, video en social content, met het werk en de diensten centraal.": "A portfolio for property photography, video and social content, focused on the work and services.",
	"Voegwerken en gevelrenovatie, met diensten en vakwerk helder in beeld.": "Pointing and facade renovation, with services and craftsmanship clearly presented.",
	"Een zonnestudio met zonnebanken, openingsuren en contact op één overzichtelijke plek.": "A tanning studio with tanning beds, opening hours and contact details in one clear place.",
	"Gevelwerken en verbouwingen, met diensten, realisaties en contact helder bij elkaar.": "Facade work and renovations, with services, completed projects and contact details clearly brought together.",
	"Websitevoorbeeld": "Website preview",
	"Webdesign Limburg": "Web design in Limburg",
	"Bekijk realisaties": "View completed projects",
	"Lokale SEO": "Local SEO",
	"Website laten maken": "Have a website built",
	"Webdesign en structuur": "Web design and structure",
	"Onderhoud en content": "Maintenance and content",
	"Structuur en inhoud": "Structure and content",
	"Bouw en lancering": "Build and launch",
	"Website voor een vakman in voegwerken en gevelrenovatie.": "A website for a specialist in pointing and facade renovation.",
	"Bekijk in portfolio": "View in portfolio",
	"Website voor een specialist in voegwerken, gevelrenovatie en verbouwingen.": "A website for a specialist in pointing, facade renovation and building renovations.",
	"Conceptwebsite voor een beautyzaak, bedoeld om stijl, diensten en contentmogelijkheden te tonen.": "A concept website for a beauty business, showcasing style, services and content possibilities.",
	"Veelgestelde vragen over webdesign in Limburg": "Frequently asked questions about web design in Limburg",
	"Voor wie maakt BMA Studio websites in Limburg?": "Who does BMA Studio build websites for in Limburg?",
	"Wat kost een website laten maken?": "How much does a website cost?",
	"Kan BMA Studio ook buiten Limburg werken?": "Can BMA Studio work outside Limburg too?",
	"Ja. BMA Studio werkt voor lokale bedrijven in Limburg en ondernemingen in de rest van België. Overleg kan vlot online.": "Yes. BMA Studio works with local businesses in Limburg and companies across Belgium. Meetings can easily take place online.",
	"Wordt lokale SEO meegenomen?": "Is local SEO included?",
	"Kan ik eerst gratis advies krijgen?": "Can I get free advice first?",
	"Ja. Je kan gratis een websiteanalyse of eerste websiteprototype aanvragen voordat je een pakket kiest.": "Yes. You can request a free website review or initial website prototype before choosing a package.",
	"Wil je een website laten maken in Limburg?": "Need a website built in Limburg?",
	"Stuur kort door wat je bedrijf doet, welke pagina's je nodig hebt en wanneer je online wil staan.": "Briefly tell us what your business does, which pages you need and when you want to launch.",
	"Achter BMA staat Lio.": "Lio is the person behind BMA.",
	"Websites, apps en content voor bedrijven. Van het eerste idee tot de oplevering werk je rechtstreeks met Lio Smeers.": "Websites, apps and content for businesses. From the first idea to launch, you work directly with Lio Smeers.",
	"Kort op de bal.": "Personal contact.",
	"Direct met de maker.": "Directly with the maker.",
	"Je bespreekt je plannen met de persoon die ze uitwerkt. Samen bepalen we wat nodig is, wat het kost en hoe we het aanpakken.": "You discuss your plans with the person who brings them to life. Together, we agree on what you need, what it costs and how to approach it.",
	"Vanuit Riemst werken we voor bedrijven in heel België. Kennismaken kan gewoon online.": "Based in Riemst, we work with businesses across Belgium. We can meet online.",
	"Bekijk het werk": "Explore the work",
	"Wat BMA Studio doet": "What BMA Studio does",
	"Websites en apps die passen bij je bedrijf.": "Websites and apps that fit your business.",
	"Updates, aanpassingen en technische opvolging.": "Updates, adjustments and technical support.",
	"Content, sociale media en campagnes.": "Content, social media and campaigns.",
	"Duidelijk, van begin tot verder.": "Clear, from the start and beyond.",
	"Je idee bespreken.": "Discuss your idea.",
	"Wat wil je maken, voor wie en met welk doel?": "What do you want to make, who is it for, and what should it achieve?",
	"Maken en afstemmen.": "Create and refine.",
	"We spreken inhoud, timing en prijs af en werken je feedback uit.": "We agree on content, timing and price, then work through your feedback.",
	"Goed verder kunnen.": "Ready for what comes next.",
	"Voor de oplevering leggen we vast wie opvolgt en wat onderhoud inhoudt.": "Before launch, we agree on who handles follow-up and what maintenance includes.",
	"Een idee?": "Have an idea?",
	"Laten we praten.": "Let’s talk.",
	"Laten we kennismaken.": "Let’s get acquainted.",
	"Vertel Lio wat je wil laten maken. In een vrijblijvend gesprek van 15 minuten bekijken we samen de mogelijkheden.": "Tell Lio what you would like to make. We will explore the options together in a 15-minute, no-obligation call.",
	"15 minuten · online": "15 minutes · online",
	"John wijst naar de kalender": "John pointing towards the calendar",
	"Liever een offerte per mail?": "Prefer a quote by email?",
	"Vertel kort wat je wil laten maken en voor welk bedrijf.": "Briefly describe what you would like to make and which business it is for.",
	"Vraag een offerte aan": "Request a quote",
	"Mail je offerteaanvraag": "Email your quote request",
	"Opent je mailprogramma.": "Opens your email app.",
	"Kies een moment dat past.": "Choose a time that suits you.",
	"De kalender toont de beschikbare momenten van Lio.": "The calendar shows Lio’s available times.",
	"Kalender wordt geladen…": "Loading calendar…",
	"Boekingskalender van BMA Studio": "BMA Studio booking calendar",
	"Laadt de kalender niet?": "Calendar not loading?",
	"Open de kalender apart": "Open the calendar separately",
	"Schakel JavaScript in om de kalender te gebruiken, of": "Enable JavaScript to use the calendar, or",
	"open de boekingspagina": "open the booking page",
	"Plan een vrijblijvend gesprek van 15 minuten met Lio Smeers of vraag per mail een offerte aan voor je website, app of content.": "Book a 15-minute, no-obligation call with Lio Smeers or request a quote by email for your website, app or content.",
	"Plan je gesprek met BMA Studio": "Plan your call with BMA Studio",

};

const titleTranslations = {
  "Kevin Claes — Algemene Dakwerken | BMA Studio": "Kevin Claes — Roofing Services | BMA Studio",
  "Thor Smeers — Vastgoedfotografie | BMA Studio": "Thor Smeers — Property Photography | BMA Studio",
  "Plan een vrijblijvend gesprek | BMA Studio": "Plan a no-obligation call | BMA Studio",
	"We maken websites, apps, content en video’s voor bedrijven. Ook socialmediabeheer, campagnes, advertenties en onderhoud.": "We make websites, apps, content and videos for businesses. Also social media management, campaigns, advertising and maintenance.",
	"BMA Studio is het digitale en creatieve bureau van Lio Smeers. Lees wat we maken voor bedrijven en hoe je met ons samenwerkt.": "BMA Studio is Lio Smeers’s digital and creative agency. Discover what we create for businesses and how we work together.",

	"Wat kan BMA Studio voor je maken? Websites, webapps, beelden en video’s, sociale media en campagnes. Bespreek je project en het gewenste onderhoud.": "What can BMA Studio make for you? Websites, web apps, images and videos, social media and campaigns. Discuss your project and maintenance needs.",
	"We bouwen websites voor lokale bedrijven in Limburg. Bekijk de werkwijze, mogelijkheden en klantprojecten van BMA Studio in Riemst.": "We build websites for local businesses in Limburg. Explore the process, options and client projects of BMA Studio in Riemst.",

	"BMA Studio | Digitaal en creatief bureau voor lokale bedrijven": "BMA Studio | Digital and creative agency for local businesses",
	"BMA Studio versterkt lokale bedrijven met websites, applicaties, content, sociale media en campagnes. Eén aanspreekpunt voor je online aanwezigheid.": "BMA Studio supports local businesses with websites, applications, content, social media and campaigns. One point of contact for your online presence.",
	"Websites, applicaties, content en campagnes | BMA Studio": "Websites, applications, content and campaigns | BMA Studio",
	"Ontdek de diensten van BMA Studio: websites, applicaties, content en sociale media, campagnes en advertenties, en onderhoud. Ook als losse dienst.": "Discover BMA Studio’s services: websites, applications, content and social media, campaigns and advertising, and maintenance. Also available individually.",
	"Over BMA Studio | Digitaal en creatief bureau": "About BMA Studio | Digital and creative agency",
	"Maak kennis met BMA Studio, het digitale en creatieve bureau van Lio Smeers voor lokale bedrijven. Persoonlijke samenwerking en rechtstreeks contact.": "Meet BMA Studio, Lio Smeers’ digital and creative agency for local businesses. Personal collaboration and direct contact.",
	"Vertel ons over je project | BMA Studio": "Tell us about your project | BMA Studio",
	"Bespreek je website, applicatie, content, sociale media of campagne met Lio van BMA Studio. Vertel ons vrijblijvend wat je bedrijf nodig heeft.": "Discuss your website, application, content, social media or campaign with Lio at BMA Studio. Tell us what your business needs, with no obligation.",
	"Websitepakketten en diensten op maat | BMA Studio": "Website packages and tailored services | BMA Studio",
	"Vergelijk de bestaande websitepakketten en prijzen van BMA Studio. Applicaties, content, socialmediabeheer en campagnes werken we op maat uit.": "Compare BMA Studio’s website packages and prices. Applications, content, social media management and campaigns are tailored to your needs.",
	"BMA Studio - Websites voor lokale ondernemers": "BMA Studio - Websites for local business owners",
	"Webdesign voor lokale ondernemers | BMA Studio": "Web design for local business owners | BMA Studio",
	"BMA Studio bouwt duidelijke, professionele websites voor lokale ondernemers in Limburg en België, inclusief hosting, onderhoud en content.": "BMA Studio builds clear, professional websites for local business owners in Limburg and Belgium, including hosting, maintenance and content.",
	"Website laten maken voor lokale bedrijven | BMA Studio": "Have a website made for local businesses | BMA Studio",
	"Laat je website maken door BMA Studio: professionele websites voor lokale bedrijven in België, met focus op Limburg, onderhoud en content zonder gedoe.": "Have your website made by BMA Studio: professional websites for local businesses in Belgium, with a focus on Limburg, maintenance and content.",
	"Pakketten - BMA Studio": "Packages - BMA Studio",
	"Website pakketten voor ondernemers | BMA Studio": "Website packages for business owners | BMA Studio",
	"Pakketten en prijzen voor websites | BMA Studio": "Website packages and prices | BMA Studio",
	"Website laten maken: pakketten en prijzen | BMA Studio": "Have a website made: packages and prices | BMA Studio",
	"Bekijk drie duidelijke website pakketten voor zelfstandigen en lokale ondernemers die snel een professionele online basis willen.": "View three clear website packages for independent professionals and local business owners who want a professional online foundation quickly.",
	"Vergelijk de websitepakketten van BMA Studio: BMA Visibility Sprint, Business Website en Website + Content voor lokale ondernemers in Limburg en België.": "Compare BMA Studio's website packages: BMA Visibility Sprint, Business Website and Website + Content for local business owners in Limburg and Belgium.",
	"Vergelijk prijzen en pakketten om een professionele website te laten maken: one-page, Business Website of Website + Content voor lokale bedrijven.": "Compare prices and packages to have a professional website made: one-page, Business Website or Website + Content for local businesses.",
	"Diensten - BMA Studio": "Services - BMA Studio",
	"Webdesign, onderhoud en content | BMA Studio": "Web design, maintenance and content | BMA Studio",
	"Webdesign en websiteonderhoud | BMA Studio": "Web design and website maintenance | BMA Studio",
	"BMA Studio helpt lokale ondernemers met professionele websites, betrouwbaar websiteonderhoud en herkenbare content voor sociale media.": "BMA Studio helps local business owners with professional websites, reliable website maintenance and recognizable content for social media.",
	"Webdesign, websiteonderhoud en content voor zelfstandigen en lokale bedrijven in België. BMA Studio helpt je professioneel online groeien.": "Web design, website maintenance and content for independent professionals and local businesses in Belgium. BMA Studio helps you grow professionally online.",
	"Portfolio - BMA Studio": "Portfolio - BMA Studio",
	"Website voorbeelden voor ondernemers | BMA Studio": "Website examples for business owners | BMA Studio",
	"Webdesignprojecten en realisaties | BMA Studio": "Web design projects and work | BMA Studio",
	"Website realisaties voor lokale bedrijven | BMA Studio": "Website work for local businesses | BMA Studio",
	"Bekijk webdesignprojecten en voorbeeldwebsites van BMA Studio voor lokale ondernemers en zelfstandigen.": "View BMA Studio web design projects and example websites for local business owners and independent professionals.",
	"Bekijk SEO-vriendelijke webdesignrealisaties van BMA Studio: websites en concepten voor zelfstandigen, vakmannen en lokale bedrijven.": "View SEO-friendly web design work by BMA Studio: websites and concepts for independent professionals, tradespeople and local businesses.",
	"Over ons - BMA Studio": "About us - BMA Studio",
	"Over BMA Studio | Webdesign voor lokale ondernemers": "About BMA Studio | Web design for local business owners",
	"Over BMA Studio | Webdesigner voor lokale bedrijven": "About BMA Studio | Web designer for local businesses",
	"Maak kennis met BMA Studio, de webdesignstudio van Lio Smeers voor lokale ondernemers in Limburg en België.": "Get to know BMA Studio, Lio Smeers' web design studio for local business owners in Limburg and Belgium.",
	"Maak kennis met BMA Studio: webdesigner voor zelfstandigen en lokale bedrijven in België, met persoonlijke aanpak vanuit Limburg en Brussel.": "Get to know BMA Studio: web designer for independent professionals and local businesses in Belgium, with a personal approach from Limburg and Brussels.",
	"Contact - BMA Studio": "Contact - BMA Studio",
	"Contacteer BMA Studio | Website laten maken": "Contact BMA Studio | Have a website made",
	"Ben je lokale ondernemer en wil je een website laten maken of onderhouden? Contacteer BMA Studio voor een duidelijk voorstel.": "Are you a local business owner who wants a website made or maintained? Contact BMA Studio for a clear proposal.",
	"Wil je een professionele website laten maken of onderhouden? Contacteer BMA Studio voor webdesignadvies voor zelfstandigen in België en Limburg.": "Want to have a professional website made or maintained? Contact BMA Studio for web design advice for independent professionals in Belgium and Limburg.",
	"Bedankt - BMA Studio": "Thank you - BMA Studio",
	"Bedankt voor je aanvraag | BMA Studio": "Thank you for your request | BMA Studio",
	"Bedankpagina van BMA Studio na het versturen van een contactaanvraag.": "BMA Studio thank-you page after submitting a contact request.",
	"Privacyverklaring - BMA Studio": "Privacy statement - BMA Studio",
	"Privacyverklaring | BMA Studio": "Privacy statement | BMA Studio",
	"Lees hoe BMA Studio persoonsgegevens verwerkt bij contactaanvragen, offertes en samenwerking via bmastudio.be.": "Read how BMA Studio processes personal data for contact requests, proposals and collaboration via bmastudio.be.",
	"Pagina niet gevonden | BMA Studio": "Page not found | BMA Studio",
	"Deze pagina bestaat niet of is verplaatst. Ga terug naar de homepage, diensten of contactpagina van BMA Studio.": "This page does not exist or has moved. Go back to the BMA Studio homepage, services or contact page.",
	"BMA Studio | Websites, apps en content": "BMA Studio | Websites, apps and content",
	"We maken websites, apps, content en video’s voor lokale bedrijven. Ook socialmediabeheer, campagnes, advertenties en onderhoud.": "We make websites, apps, content and videos for local businesses. Also social media management, campaigns, advertising and maintenance.",
	"Websites, apps, content en onderhoud | BMA Studio": "Websites, apps, content and maintenance | BMA Studio",
	"Wat kan BMA Studio voor je maken? Websites, webapps, beelden en video’s, sociale media en campagnes. Bekijk ook de websiteprijzen en onderhoud.": "What can BMA Studio make for you? Websites, web apps, images and videos, social media and campaigns. View website prices and maintenance too.",
	"Over BMA Studio en Lio Smeers": "About BMA Studio and Lio Smeers",
	"BMA Studio is het digitale en creatieve bureau van Lio Smeers. Lees wat we maken voor lokale bedrijven en hoe je met ons samenwerkt.": "BMA Studio is Lio Smeers’ digital and creative agency. Read what we make for local businesses and how you work with us.",
	"Websites en concepten | BMA Studio": "Websites and concepts | BMA Studio",
	"Websites voor klanten | BMA Studio": "Client websites | BMA Studio",
	"Bekijk websites die BMA Studio voor klanten maakte en fictieve conceptsites. Bij elk project vind je informatie over het werk dat we leverden.": "View websites BMA Studio made for clients and fictional concept sites. Each project explains the work we delivered.",
	"Bespreek je project met Lio | BMA Studio": "Discuss your project with Lio | BMA Studio",
	"Wil je een website, app, video of campagne laten maken? Stuur je vraag naar Lio van BMA Studio via het formulier, per e-mail of telefonisch.": "Would you like a website, app, video or campaign? Send your enquiry to Lio at BMA Studio using the form, by email or by phone.",
	"Website laten maken in Limburg | BMA Studio": "Have a website made in Limburg | BMA Studio",
	"We bouwen websites voor lokale bedrijven in Limburg. Bekijk de werkwijze, websiteprijzen en klantprojecten van BMA Studio in Riemst.": "We build websites for local businesses in Limburg. View the process, website prices and client projects of BMA Studio in Riemst."
};

const header = document.querySelector(".site-header");
const progressBar = document.querySelector(".scroll-progress");
const mobileViewport = window.matchMedia("(max-width: 767px)");
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
const reviewModal = document.querySelector("[data-review-modal]");
const reviewModalClose = reviewModal?.querySelector("[data-review-close]");
const reviewTriggers = document.querySelectorAll("[data-review-trigger]");
const contactForm = document.querySelector(".contact-form");
const contactSubmit = contactForm?.querySelector("[type='submit']");
const contactStatus = contactForm?.querySelector(".success-message");
const year = document.querySelector("#year");
const campaignParameterNames = [
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_content",
	"utm_term",
	"gclid",
];
const campaignStorageKey = "bma-campaign-params";
let activePackageKey = "";

let activePortfolioProjectKey = "";
let previousReviewFocus = null;
let previousPortfolioFocus = null;
let scrollUpdateQueued = false;
let isContactSubmitting = false;
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
let currentLanguage = ["nl", "en"].includes(requestedLanguage)
	? requestedLanguage
	: localStorage.getItem("bma-language") === "en" ? "en" : "nl";
if (["nl", "en"].includes(requestedLanguage)) localStorage.setItem("bma-language", currentLanguage);
const originalTextByNode = new WeakMap();
const originalAttributeByElement = new WeakMap();
const originalMetadataByElement = new WeakMap();
const translatableAttributes = ["aria-label", "alt", "title", "placeholder"];
const untranslatedText = new Set();

function syncPortfolioNumbers() {
	portfolioCards.forEach((card, index) => {
		const number = String(index + 1).padStart(2, "0");
		card.querySelector(".service-number")?.replaceChildren(number);
		const project = portfolioProjectDetails[card.dataset.portfolioProject];
		if (project) project.number = number;
	});
}

if (year) year.textContent = new Date().getFullYear();
storeCampaignParameters();
syncPortfolioNumbers();

function normalizeText(value) {
	return value.replace(/\s+/g, " ").trim();
}

function preserveSpacing(original, replacement) {
	const leading = original.match(/^\s*/)?.[0] || "";
	const trailing = original.match(/\s*$/)?.[0] || "";
	return `${leading}${replacement}${trailing}`;
}

function readStoredCampaignParameters() {
	try {
		const storedParameters = JSON.parse(sessionStorage.getItem(campaignStorageKey) || "{}");
		const parameters = new URLSearchParams();

		campaignParameterNames.forEach((name) => {
			const value = storedParameters[name];
			if (typeof value === "string" && value.trim()) parameters.set(name, value);
		});

		return parameters;
	} catch (error) {
		return new URLSearchParams();
	}
}

function storeCampaignParameters() {
	const currentParameters = new URLSearchParams(window.location.search);
	const campaignParameters = {};

	campaignParameterNames.forEach((name) => {
		const value = currentParameters.get(name);
		if (value) campaignParameters[name] = value;
	});

	if (!Object.keys(campaignParameters).length) return;

	try {
		sessionStorage.setItem(campaignStorageKey, JSON.stringify(campaignParameters));
	} catch (error) {
		// Form submission still works when sessionStorage is unavailable.
	}
}

function addCampaignParametersToUrl(url) {
	readStoredCampaignParameters().forEach((value, name) => {
		url.searchParams.set(name, value);
	});
	return url;
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
	document.querySelectorAll("[aria-label], img[alt], [title], [placeholder]").forEach((element) => {
		if (element.closest("[data-no-translate]")) return;
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

	canonical.href = originalCanonical;
	if (ogUrl) ogUrl.setAttribute("content", originalCanonical);
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
	updateMenuLabel();
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
	const languageUrl = new URL(window.location.href);
	if (languageUrl.searchParams.has('lang')) {
		languageUrl.searchParams.set('lang', language);
		history.replaceState(history.state, '', languageUrl);
	}
	localStorage.setItem("bma-language", language);
	translateStaticText();
	updateLanguageSwitcher();
	updateVisibilitySprintCard();

	if (activePortfolioProjectKey && portfolioModal && !portfolioModal.hidden) {
		renderPortfolioModal(activePortfolioProjectKey, { keepFocus: true });
	}

	if (contactForm?.dataset.prefilledPackage) {
		fillPackageMessage(contactForm.dataset.prefilledPackage);
	}

	window.dispatchEvent(new CustomEvent("bma-language-change", { detail: { language } }));
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

	const isScrolled = window.scrollY > 14;
	header?.classList.toggle("is-scrolled", isScrolled);
	header?.classList.toggle("is-on-dark", document.body.dataset.pageTheme === "dark");
	document.documentElement.style.setProperty(
		"--scroll-progress",
		String(clampNumber(progress, 0, 1)),
	);

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

function updateMenuLabel() {
 if (!menuToggle) return;
 const open = menuToggle.getAttribute("aria-expanded") === "true";
 menuToggle.setAttribute("aria-label", currentLanguage === "en" ? (open ? "Close menu" : "Open menu") : (open ? "Sluit menu" : "Open menu"));
}

function setMenuOpen(open) {
 if (!menuToggle || !mobileMenu) return;
 menuToggle.classList.toggle("is-open", open);
 menuToggle.setAttribute("aria-expanded", String(open));
 mobileMenu.classList.toggle("is-open", open);
 mobileMenu.inert = !open;
 mobileMenu.setAttribute("aria-hidden", String(!open));
 document.body.classList.toggle("menu-open", open);
 updateMenuLabel();
}

function closeMenu() { setMenuOpen(false); }

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

	const media = portfolioModal.querySelector(".portfolio-modal-media");
	let image = media.querySelector("img");
	const hideModalMedia = Boolean(item.hideModalMedia);
	portfolioModal.classList.toggle("no-modal-media", hideModalMedia);

	if (hideModalMedia) {
		media.hidden = true;
		image?.removeAttribute("src");
		if (image) {
			image.hidden = true;
			image.alt = "";
		}
	} else {
		media.hidden = false;
		if (!image) {
			image = document.createElement("img");
			image.className = "site-preview-image";
			media.prepend(image);
		}
		image.hidden = false;
		image.src = item.image;
		image.alt = translateValue(item.imageAlt);
		image.classList.toggle("is-contained", item.imageFit === "contain");
		image.width = item.imageWidth || 1200;
		image.height = item.imageHeight || 630;
		image.loading = "eager";
		image.decoding = "async";
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

function closeReviewModal() {
	if (!reviewModal || reviewModal.hidden) return;
	reviewModal.hidden = true;
	document.body.style.overflow = "";
	previousReviewFocus?.focus?.({ preventScroll: true });
	previousReviewFocus = null;
}

if (reviewModal) {
	reviewTriggers.forEach((trigger) => trigger.addEventListener("click", () => {
		previousReviewFocus = trigger;
		reviewModal.hidden = false;
		document.body.style.overflow = "hidden";
		reviewModalClose?.focus({ preventScroll: true });
	}));
	reviewModal.addEventListener("click", (event) => {
		if (event.target === reviewModal) closeReviewModal();
	});
	reviewModalClose?.addEventListener("click", closeReviewModal);
	reviewModal.addEventListener("keydown", (event) => {
		if (event.key !== "Tab") return;
		const controls = [...reviewModal.querySelectorAll('button, a[href], [tabindex="0"]')]
			.filter((control) => !control.disabled && control.getClientRects().length);
		const first = controls[0];
		const last = controls[controls.length - 1];
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault(); last?.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault(); first?.focus();
		}
	});
}

const reviewPause = document.querySelector("[data-review-pause]");
reviewPause?.addEventListener("click", () => {
	const paused = reviewPause.getAttribute("aria-pressed") !== "true";
	reviewPause.setAttribute("aria-pressed", String(paused));
	document.querySelector(".reviews-section")?.classList.toggle("is-paused", paused);
});

function fillPackageMessage(packageKey) {
	const item = getPackageDetails(packageKey);
	const messageField = contactForm?.elements.message;
	if (!item || !messageField) return;

	messageField.value = item.inquiryMessage;
	if (contactForm.elements.service) contactForm.elements.service.value = "websites";

	contactForm.dataset.prefilledPackage = packageKey;
	setError("message", "");
	hideContactStatus();

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

function setupHeroPixelReveal() {
	const headline = document.querySelector(".hero-headline");
	if (!headline || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	const reveal = document.createElement("span");
	reveal.className = "hero-pixel-reveal";
	reveal.setAttribute("aria-hidden", "true");
	reveal.dataset.heroPixelReveal = "";

	const totalCells = 18 * 6;
	const accents = new Set();
	while (accents.size < 10) accents.add(Math.floor(Math.random() * totalCells));
	let finishedCells = 0;

	for (let index = 0; index < totalCells; index += 1) {
		const cell = document.createElement("span");
		cell.className = accents.has(index)
			? "hero-pixel-cell hero-pixel-cell--accent"
			: "hero-pixel-cell";
		cell.style.setProperty("--pixel-delay", `${Math.round(Math.random() * 400)}ms`);
		cell.addEventListener("animationend", () => {
			finishedCells += 1;
			if (finishedCells === totalCells) reveal.remove();
		}, { once: true });
		reveal.append(cell);
	}

	headline.append(reveal);
	window.setTimeout(() => {
		if (!reveal.isConnected) return;
		reveal.classList.add("is-revealing");
	}, 820);
	window.setTimeout(() => reveal.remove(), 1850);
}

function setupHomeServiceCards() {
	const cards = document.querySelectorAll(".agency-service-summary");
	const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
	const useTapAccordion = window.matchMedia("(max-width: 767px)").matches || !canHover;
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	if (!cards.length) return;
	const panelStates = new WeakMap();
	cards.forEach((card) => panelStates.set(card, { panel: card.querySelector(".service-more"), motion: 0 }));
	const closeTapCard = (card) => {
		const state = panelStates.get(card);
		if (!state?.panel || !card.open || card.classList.contains("is-closing")) return;
		const motion = ++state.motion;
		if (reduceMotion) {
			card.classList.remove("is-closing");
			card.open = false;
			state.panel.style.height = "0px";
			return;
		}
		card.classList.add("is-closing");
		state.panel.style.height = `${state.panel.getBoundingClientRect().height}px`;
		void state.panel.offsetHeight;
		requestAnimationFrame(() => {
			if (motion !== state.motion || !card.open || !card.classList.contains("is-closing")) return;
			state.panel.style.height = "0px";
		});
	};

	cards.forEach((card) => {
		let openedByHover = false;
		let pinnedByClick = false;
		let pointerInside = false;
		let closeAfterFocus = false;
		const summary = card.querySelector("summary");
		const morePanel = card.querySelector(".service-more");
		if (useTapAccordion) {
			const state = panelStates.get(card);
			morePanel?.addEventListener("transitionend", (event) => {
				if (event.target !== morePanel || event.propertyName !== "height") return;
				if (card.classList.contains("is-closing")) {
					card.classList.remove("is-closing");
					card.open = false;
					morePanel.style.height = "0px";
				} else if (card.open) morePanel.style.height = "auto";
			});
			summary?.addEventListener("click", (event) => {
				event.preventDefault();
				if (!morePanel) {
					card.open = !card.open;
					return;
				}

				const wasOpen = card.open;
				const wasClosing = card.classList.contains("is-closing");
				if (wasOpen && !wasClosing) {
					closeTapCard(card);
					return;
				}

				const motion = ++state.motion;
				card.classList.remove("is-closing");
				if (!wasOpen) {
					card.open = true;
					morePanel.style.height = "0px";
				} else {
					morePanel.style.height = `${morePanel.getBoundingClientRect().height}px`;
					void morePanel.offsetHeight;
				}
				cards.forEach((otherCard) => {
					if (otherCard !== card) closeTapCard(otherCard);
				});
				if (reduceMotion) {
					morePanel.style.height = "auto";
					return;
				}
				requestAnimationFrame(() => {
					if (motion !== state.motion || !card.open || card.classList.contains("is-closing")) return;
					morePanel.style.height = `${morePanel.scrollHeight}px`;
				});
			});
			return;
		}

		card.addEventListener("pointerenter", (event) => {
			if (event.pointerType !== "mouse") return;
			pointerInside = true;
			if (card.open) return;

			cards.forEach((otherCard) => {
				if (otherCard !== card) otherCard.open = false;
			});
			openedByHover = true;
			card.open = true;
		});

		morePanel?.addEventListener("click", (event) => {
			if (event.target.closest("a, button") || !card.open) return;
			card.open = false;
			openedByHover = false;
			pinnedByClick = false;
			closeAfterFocus = false;
		});

		summary?.addEventListener("click", (event) => {
			// A mouse click on a card already opened by hover should pin it open,
			// rather than immediately toggling it shut. Keyboard activation stays native.
			if (event.detail === 0) return;

			if (openedByHover && card.open) {
				event.preventDefault();
				openedByHover = false;
				pinnedByClick = true;
				closeAfterFocus = false;
				return;
			}

			if (pinnedByClick && card.open) {
				event.preventDefault();
				card.open = false;
				pinnedByClick = false;
			}
		});

		card.addEventListener("pointerleave", (event) => {
			if (event.pointerType !== "mouse") return;
			pointerInside = false;
			if (!openedByHover) return;

			if (card.contains(document.activeElement)) {
				closeAfterFocus = true;
				return;
			}

			card.open = false;
			openedByHover = false;
			closeAfterFocus = false;
		});

		card.addEventListener("focusout", (event) => {
			if (event.relatedTarget && card.contains(event.relatedTarget)) return;
			if (!closeAfterFocus || pointerInside) return;

			card.open = false;
			openedByHover = false;
			closeAfterFocus = false;
		});

		card.addEventListener("toggle", () => {
			if (!card.open) {
				openedByHover = false;
				pinnedByClick = false;
				closeAfterFocus = false;
			}
		});
	});
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

			if (targetElement?.closest(".contact-section, .portfolio-section, .pricing-layout, .package-card-grid, .pricing-note-card")) {
				resetTarget();
				return;
			}

			if (targetElement?.closest(".language-switcher, [data-magnetic], [data-spotlight], .mi-faq")) {
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

function renderBenefitItems(benefits) {
	return benefits
		.map(
			(benefit) =>
				`<li><span class="checkmark">✓</span><span>${benefit}</span></li>`,
		)
		.join("");
}

let planAnimations = [];

function updateVisibilitySprintCard(event) {
	const card = document.querySelector("[data-visibility-card]");
	if (!card) return;

	planAnimations.forEach(animation => animation.cancel());
	planAnimations = [];
	const previousHeight = card.getBoundingClientRect().height;
	const selectedOption =
		card.querySelector("input[name='visibility-plan']:checked")?.value || "onetime";
	const option =
		visibilitySprintOptions[currentLanguage]?.[selectedOption] ||
		visibilitySprintOptions.nl[selectedOption];

	card.querySelector("[data-visibility-description]").textContent =
		option.description;
	card.querySelector("[data-visibility-price]").textContent = option.price;
	card.querySelector("[data-visibility-cta]").textContent = option.ctaLabel;
	card.querySelector("[data-visibility-cta]").href = option.ctaHref;
	card.querySelector("[data-visibility-benefits]").innerHTML = renderBenefitItems(
		option.benefits,
	);
	card.querySelector("[data-visibility-term]").textContent = option.facts.term;
	card.querySelector("[data-visibility-maintenance]").textContent =
		option.facts.maintenance;
	card.querySelector("[data-visibility-ownership]").textContent =
		option.facts.ownership;
	card.querySelector("[data-visibility-hosting]").textContent = option.facts.hosting;
	card.querySelector("[data-visibility-revisions]").textContent =
		option.facts.revisions;
	card.querySelector("[data-visibility-detail-list]").innerHTML = option.details
		.map((detail) => `<li>${detail}</li>`)
		.join("");
	if (event?.type === "change" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		const motion = getComputedStyle(document.documentElement);
		const easing = motion.getPropertyValue("--mi-ease").trim() || "ease-out";
		const duration = parseFloat(motion.getPropertyValue("--mi-duration")) || 520;
		const nextHeight = card.getBoundingClientRect().height;
		if (Math.abs(nextHeight - previousHeight) > 1) {
			planAnimations.push(card.animate([{height: `${previousHeight}px`}, {height: `${nextHeight}px`}], {duration, easing}));
		}
		card.querySelectorAll("[data-visibility-description], [data-visibility-price], [data-visibility-benefits] li, [data-visibility-cta], .package-details-body").forEach((element, index) => {
			planAnimations.push(element.animate([
				{opacity: 0, transform: "translateY(9px)"},
				{opacity: 1, transform: "translateY(0)"}
			], {duration: 340, delay: Math.min(index * 25, 125), easing, fill: "backwards"}));
		});
	}

}

function setupVisibilitySprintToggle() {
	const card = document.querySelector("[data-visibility-card]");
	if (!card) return;

	card.querySelectorAll("input[name='visibility-plan']").forEach((input) => {
		input.addEventListener("change", updateVisibilitySprintCard);
	});

	updateVisibilitySprintCard();
}

function setupWebsitePricing() {
 const disclosure = document.querySelector(".website-pricing-disclosure");
 if (!disclosure) return;
 const openFromHash = () => {
  const target = document.getElementById(window.location.hash.slice(1));
  if (target && (target.id === "websiteprijzen" || disclosure.contains(target))) disclosure.open = true;
 };
 openFromHash();
 window.addEventListener("hashchange", openFromHash);
 document.querySelectorAll('a[href="#websiteprijzen"]').forEach(link => link.addEventListener("click", () => { disclosure.open = true; }));
}

function setupContactService() {
	const field = contactForm?.elements.service;
	if (!field) return;
	const query = new URLSearchParams(window.location.search);
	const service = query.get("dienst");
	if (!contactForm.dataset.prefilledPackage && Array.from(field.options).some(option => option.value === service)) {
		field.value = service;
	}
	field.addEventListener("change", () => {
		if (field.value !== "websites") {
			const packageKey = contactForm.dataset.prefilledPackage;
			// Clear generated website text only; keep anything the visitor has written.
			if (packageKey && contactForm.elements.message.value === getPackageDetails(packageKey)?.inquiryMessage) {
				contactForm.elements.message.value = "";
			}
			delete contactForm.dataset.prefilledPackage;
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
 setMenuOpen(!mobileMenu.classList.contains("is-open"));
});
mobileMenu?.addEventListener("click", event => {
 if (event.target.closest("a")) closeMenu();
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
	if (mobileMenu?.classList.contains("is-open") && !header.contains(event.target)) closeMenu();
	if (event.target.closest(".portfolio-modal-close")) {
		closePortfolioModal();
	}
});

window.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && mobileMenu?.classList.contains("is-open")) {
		closeMenu();
		menuToggle.focus({ preventScroll: true });
	}
	if (event.key === "Escape" && spotlight && !spotlight.hidden) closeSpotlight();
	if (event.key === "Escape" && portfolioModal && !portfolioModal.hidden) {
		closePortfolioModal();
	}
	if (event.key === "Escape" && reviewModal && !reviewModal.hidden) {
		closeReviewModal();
	}
});

window.addEventListener("scroll", scheduleScrollStateUpdate, { passive: true });
window.addEventListener("resize", () => {
	if (window.innerWidth >= 1200) closeMenu();
	updateScrollState();
});

contactForm?.addEventListener("input", (event) => {
	if (event.target.name) setError(event.target.name, "");
	if (event.target.name === "message") delete contactForm.dataset.prefilledPackage;
	hideContactStatus();
});

contactForm?.addEventListener("submit", async (event) => {
	event.preventDefault();

	if (isContactSubmitting) return;
	if (!validateForm()) {
  contactForm.querySelector('[aria-invalid="true"]')?.focus();
  return;
 }

	hideContactStatus();
	isContactSubmitting = true;
	contactSubmit.disabled = true;
	contactSubmit.textContent = currentLanguage === "en" ? "Sending..." : "Bericht versturen...";

	try {
		const response = await fetch(contactForm.dataset.endpoint, {
			method: "POST",
			body: new FormData(contactForm),
			headers: {
				Accept: "application/json",
			},
		});
		const formSubmitResult = await response.json();
		const wasSubmitted =
			formSubmitResult?.success === true || formSubmitResult?.success === "true";

		if (!response.ok || !wasSubmitted) {
			throw new Error("Contact form submission failed");
		}

		contactForm.reset();
		const thankYouUrl = new URL("bedankt.html", window.location.href);
		if (currentLanguage === "en") thankYouUrl.searchParams.set("lang", "en");
		addCampaignParametersToUrl(thankYouUrl);
		window.location.assign(thankYouUrl.href);
	} catch (error) {
		showContactStatus(
			currentLanguage === "en"
				? "Sending failed. Email us directly at info@bmastudio.be."
				: "Versturen lukt niet. Mail ons rechtstreeks via info@bmastudio.be.",
			"error",
		);
		isContactSubmitting = false;
		contactSubmit.disabled = false;
		contactSubmit.textContent =
			currentLanguage === "en" ? "Send your message" : "Verstuur je bericht";
	}
});

closeMenu();
setupLanguageSwitcher();
setupReveal();
setupHeroPixelReveal();
setupHomeServiceCards();
// Shared component motion replaces the older global tilt and cursor effects.
setupPortfolioToggle();
setupVisibilitySprintToggle();
setupPackageQueryPrefill();
setupContactService();
setupWebsitePricing();
updateScrollState();

