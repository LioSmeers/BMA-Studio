// Self-contained enhancement for the existing BMA homepage. No network submissions.
const host = document.querySelector('bma-story');
if (host && !host.shadowRoot) {
 const shadow = host.attachShadow({mode:'open'});
 const style = document.createElement('link');
 style.rel='stylesheet';style.href=new URL('./bma-story.css?v=20261009-copy',import.meta.url).href;
 shadow.append(style);
 const template=document.createElement('template');
 template.innerHTML="<section class=\"journey\" aria-label=\"Build, Maintain, Attract\"><div class=\"journey-copy\"><article class=\"chapter\" id=\"build\" data-step=\"0\"><p class=\"eyebrow\"><span class=\"chapter-number\">01</span> BUILD</p><h2>Websites en apps bouwen.</h2><p>Een website om je aanbod te tonen, een boekingssysteem om afspraken vast te leggen of een klantenportaal om gegevens te delen. We bouwen de functies die je nodig hebt.</p><a class=\"text-link\" href=\"./portfolio.html\">Bekijk ons werk <span aria-hidden=\"true\">↗</span></a></article>\n<article class=\"chapter\" id=\"maintain\" data-step=\"1\"><p class=\"eyebrow\"><span class=\"chapter-number\">02</span> MAINTAIN</p><h2>Je website of app bijhouden.</h2><p>We voeren updates uit en passen teksten, pagina’s of functies aan. Vooraf spreken we af welk onderhoud inbegrepen is en wat apart wordt aangerekend.</p><a class=\"text-link\" href=\"./diensten.html#onderhoud\">Meer over onderhoud <span aria-hidden=\"true\">↗</span></a></article>\n<article class=\"chapter\" id=\"attract\" data-step=\"2\"><p class=\"eyebrow\"><span class=\"chapter-number\">03</span> ATTRACT</p><h2>Content, sociale media en campagnes.</h2><p>We maken beelden, video’s en posts voor jouw bedrijf. We plannen content, beheren je sociale kanalen en werken advertenties uit rond je aanbod.</p><a class=\"text-link\" href=\"./contact.html\">Bespreek je campagne <span aria-hidden=\"true\">↗</span></a></article>\n</div>\n<div class=\"visual-track\"><div class=\"visual-sticky\"><div class=\"demo-glow\" aria-hidden=\"true\"></div><div class=\"demo-caption\"><span>VAN WEBSITE NAAR PRAKTISCHE APP</span><span aria-hidden=\"true\">↘</span></div>\n<div class=\"demo-views\" aria-label=\"Voorbeeldweergave\"><button type=\"button\" data-view=\"website\">Website</button><button type=\"button\" data-view=\"app\">App</button></div><div class=\"device\" id=\"device\"><div class=\"browser-bar\"><div class=\"window-dots\" aria-hidden=\"true\"><i></i><i></i><i></i></div><span class=\"address\"><svg width=\"10\" height=\"12\" viewBox=\"0 0 10 12\" fill=\"none\" aria-hidden=\"true\"><rect x=\"1\" y=\"5\" width=\"8\" height=\"6\" rx=\"2\" stroke=\"currentColor\"/><path d=\"M3 5V3a2 2 0 0 1 4 0v2\" stroke=\"currentColor\"/></svg> atelier-noor.voorbeeld</span><span class=\"browser-more\" aria-hidden=\"true\">+</span></div>\n<div class=\"example-site\"><div class=\"example-nav assemble\"><span class=\"noor-logo\">noor<span>atelier voor groen</span></span><span class=\"example-nav-links\">Onze aanpak <b>Contact ↗</b></span><span class=\"example-menu\" aria-hidden=\"true\">☰</span></div><div class=\"example-main\"><p class=\"example-kicker assemble\">TUINONTWERP MET AANDACHT</p><h3 class=\"assemble\">Buiten begint<br>bij jou.</h3><p class=\"example-description assemble\">Een groene plek om thuis te komen.<br>Ontworpen op jouw ritme.</p><button class=\"example-button assemble\" id=\"demo-contact\">Bekijk de Noor-app <span aria-hidden=\"true\">↗</span></button><div class=\"garden-art assemble\" aria-label=\"Abstracte illustratie in groene en gele vlakken\" role=\"img\"><div class=\"art-orbit\"></div><div class=\"art-sun\"></div><div class=\"art-arch\"></div><div class=\"art-lines\"></div><span>Ruimte om te groeien.</span><span class=\"art-symbol\" aria-hidden=\"true\">✳</span></div></div><div class=\"example-footer\"><span>Tuinontwerp</span><span>Beplanting</span><span>Een plek voor jou</span></div></div><section class=\"noor-app\" aria-label=\"Noor-app voorbeeld\">\n<div class=\"app-header\"><span class=\"noor-logo\">noor<span>jouw tuinproject</span></span><span class=\"app-avatar\" aria-hidden=\"true\">JD</span></div>\n<div class=\"app-panel\" data-panel=\"project\"><p class=\"app-kicker\">WELKOM TERUG, JULIE</p><h3>Jouw tuin,<br>in beeld.</h3><div class=\"app-project\"><span class=\"app-project-art\" aria-hidden=\"true\">✳</span><div><b>Een groene stadstuin</b><span>Jouw ontwerp krijgt vorm</span></div></div><div class=\"app-progress-label\"><span>Projectstatus</span><b>Ontwerpfase</b></div><div class=\"app-progress\" aria-hidden=\"true\"><i></i></div><ol class=\"app-timeline\"><li><span aria-hidden=\"true\">✓</span><div>Kennismaking<small>Afgerond</small></div></li><li><span aria-hidden=\"true\">02</span><div>Tuinontwerp<small>In uitvoering</small></div></li><li><span aria-hidden=\"true\">03</span><div>Oplevering<small>Volgende stap</small></div></li></ol></div>\n<div class=\"app-panel\" data-panel=\"afspraken\" hidden><p class=\"app-kicker\">SAMEN VOORUIT</p><h3>Plan je<br>volgende stap.</h3><div class=\"app-info-card\"><b>Je ontwerp bespreken</b><p>Een halfuur met Noor om je tuinplan samen te bekijken.</p><span>Voorbeeldtijdstip · dinsdag, 10:00</span><button type=\"button\" id=\"demo-book\">Plan dit gesprek <span aria-hidden=\"true\">↗</span></button><p class=\"app-booked\" id=\"demo-booked\" role=\"status\" hidden>Gesprek ingepland. Dit is een voorbeeldboeking.</p></div></div>\n<div class=\"app-panel\" data-panel=\"berichten\" hidden><p class=\"app-kicker\">DIRECT CONTACT</p><h3>Alles op<br>één plek.</h3><div class=\"app-chat\"><b>Noor</b><p>Je eerste tuinontwerp staat klaar. We bespreken het graag samen tijdens onze volgende afspraak.</p><span>Voorbeeldbericht</span></div><div class=\"app-chat app-chat-reply\"><b>Julie</b><p>Mooi, ik kijk ernaar uit!</p></div></div>\n<nav class=\"app-tabs\" aria-label=\"Noor-app navigatie\"><button type=\"button\" data-panel-target=\"project\" aria-pressed=\"true\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" aria-hidden=\"true\"><rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"2\"/><path d=\"M8 8h8M8 12h8M8 16h5\"/></svg>Project</button><button type=\"button\" data-panel-target=\"afspraken\" aria-pressed=\"false\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M7 3v4M17 3v4M3 11h18M7 15h3M14 15h3\"/></svg>Afspraken</button><button type=\"button\" data-panel-target=\"berichten\" aria-pressed=\"false\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" aria-hidden=\"true\"><path d=\"M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z\"/><path d=\"M7 9h10M7 13h6\"/></svg>Berichten</button></nav>\n</section></div>\n<div class=\"maintenance\" id=\"maintenance\"><span class=\"check\" aria-hidden=\"true\">✓</span><div>Alles weer up-to-date<span>Onderhoud door BMA Studio</span></div></div>\n<div class=\"notification\" id=\"notification\" role=\"status\" aria-live=\"polite\"><div class=\"notification-heading\"><span class=\"message-icon\" aria-hidden=\"true\">↗</span><b>Een nieuwe projectaanvraag</b><span>DEMO</span></div><p>Kunnen jullie ook mijn tuin ontwerpen?</p><small>Voorbeeldmelding · geen echte aanvraag</small><button id=\"close-demo\" aria-label=\"Sluit de voorbeeldmelding\">×</button></div>\n<div class=\"demo-bottom\"><p>Fictieve website & app <span>·</span> Atelier Noor</p><div class=\"stage-labels\" aria-label=\"Hoofdstukken\"><button type=\"button\" data-chapter=\"0\" class=\"active\">Build</button><button type=\"button\" data-chapter=\"1\">Maintain</button><button type=\"button\" data-chapter=\"2\">Attract</button></div></div></div></div>\n</section>\n";
 shadow.append(template.content.cloneNode(true));
  const root = host;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width: 760px)');
  const chapters = [...shadow.querySelectorAll('.chapter')];
  const stageLinks = [...shadow.querySelectorAll('.stage-labels button')];
  const maintenance = shadow.getElementById('maintenance');
  const notification = shadow.getElementById('notification');
  const contact = shadow.getElementById('demo-contact');
  const device = shadow.getElementById('device');
  const website = shadow.querySelector('.example-site');
  const app = shadow.querySelector('.noor-app');
  const viewButtons = [...shadow.querySelectorAll('[data-view]')];
  let currentStage = 0, viewOverride = null, dismissed = false, ticking = false;
  const clamp = n => Math.min(1, Math.max(0, n));
  const ease = n => n * n * (3 - 2 * n);
  function render() {
    ticking = false;
    const height = innerHeight;
    const maintain = chapters[1].getBoundingClientRect();
    const attract = chapters[2].getBoundingClientRect();
    const mobileProgress = mobile.matches ? 0 : ease(clamp((height * .88 - maintain.top) / (height * .65)));
    const attractProgress = mobile.matches ? 0 : ease(clamp((height * .8 - attract.top) / (height * .45)));
    const progress = reduced.matches ? (mobileProgress > .5 ? 1 : 0) : mobileProgress;
    const stage = attractProgress > .55 ? 2 : mobileProgress > .5 ? 1 : 0;
    if (stage !== currentStage) { dismissed = false; viewOverride = null; currentStage = stage; }
    root.style.setProperty('--mobile', progress.toFixed(3));
    root.style.setProperty('--progress', (mobileProgress + attractProgress).toFixed(3));
    const full = shadow.querySelector('.visual-sticky').clientWidth;
    root.style.setProperty('--device-width', `${Math.round(full + (Math.min(290, full) - full) * progress)}px`);
    maintenance.classList.toggle('visible', !mobile.matches && stage === 1);
    const showApp = viewOverride === null ? (mobile.matches || stage >= 1) : viewOverride === 'app';
    device.setAttribute('data-app', String(showApp));
    website.inert = showApp;
    website.setAttribute('aria-hidden', String(showApp));
    app.inert = !showApp;
    app.setAttribute('aria-hidden', String(!showApp));
    viewButtons.forEach(button => button.setAttribute('aria-pressed', String((button.dataset.view === 'app') === showApp)));
    const show = stage === 2 && !dismissed;
    notification.classList.toggle('visible', show);
    notification.inert = !show;
    contact.style.boxShadow = stage === 2 ? '0 0 0 5px #afc09880' : '';
    stageLinks.forEach((link, i) => {
      link.classList.toggle('active', stage === i);
      if (stage === i) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });
  }
  function queue() { if (!ticking) { ticking = true; requestAnimationFrame(render); } }
  addEventListener('scroll', queue, {passive:true});
  addEventListener('resize', queue);
  reduced.addEventListener('change', queue);
  mobile.addEventListener('change', queue);
  contact.addEventListener('click', () => { viewOverride = 'app'; render(); });
  viewButtons.forEach(button => button.addEventListener('click', () => { viewOverride = button.dataset.view; render(); }));
  shadow.querySelectorAll('[data-panel-target]').forEach(button => button.addEventListener('click', () => {
    shadow.querySelectorAll('[data-panel]').forEach(panel => panel.hidden = panel.dataset.panel !== button.dataset.panelTarget);
    shadow.querySelectorAll('[data-panel-target]').forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
  }));
  shadow.getElementById('demo-book').addEventListener('click', () => { shadow.getElementById('demo-booked').hidden = false; shadow.getElementById('demo-book').hidden = true; });
  function closeDemo() { dismissed = true; render(); contact.focus({preventScroll:true}); }
  shadow.getElementById('close-demo').addEventListener('click', closeDemo);
  shadow.addEventListener('keydown', e => { if(e.key === 'Escape' && notification.classList.contains('visible')) closeDemo(); });

  stageLinks.forEach((button,i)=>button.addEventListener('click',()=>{viewOverride=null;chapters[i].scrollIntoView({behavior:'instant',block:'center'});queue();}));
  const observer = new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){host.setAttribute('data-started','');observer.disconnect();}},{threshold:.1});
  observer.observe(host);
  render();


 // Follow the existing NL/EN switch without altering the site's translation code.
 const translations = {
"Websites en apps bouwen.":"Build websites and apps.",
"Een website om je aanbod te tonen, een boekingssysteem om afspraken vast te leggen of een klantenportaal om gegevens te delen. We bouwen de functies die je nodig hebt.":"A website to show your services, a booking system to arrange appointments or a customer portal to share information. We build the features you need.",
"Je website of app bijhouden.":"Maintain your website or app.",
"We voeren updates uit en passen teksten, pagina’s of functies aan. Vooraf spreken we af welk onderhoud inbegrepen is en wat apart wordt aangerekend.":"We perform updates and change text, pages or features. We agree in advance on which maintenance is included and what is charged separately.",
"Content, sociale media en campagnes.":"Content, social media and campaigns.",
"We maken beelden, video’s en posts voor jouw bedrijf. We plannen content, beheren je sociale kanalen en werken advertenties uit rond je aanbod.":"We make images, videos and posts for your business. We plan content, manage your social channels and create ads around your services or products.",
"Bekijk ons werk":"View our work",
"Bespreek je campagne":"Discuss your campaign",

"jouw tuinproject":"your garden project",
"WELKOM TERUG, JULIE":"WELCOME BACK, JULIE",
"Jouw tuin,":"Your garden,",
"in beeld.":"at a glance.",
"Een groene stadstuin":"A green city garden",
"Jouw ontwerp krijgt vorm":"Your design is taking shape",
"Projectstatus":"Project status",
"Ontwerpfase":"Design phase",
"Kennismaking":"Introduction",
"Afgerond":"Completed",
"In uitvoering":"In progress",
"Oplevering":"Delivery",
"Volgende stap":"Next step",
"SAMEN VOORUIT":"MOVING FORWARD TOGETHER",
"Plan je":"Plan your",
"volgende stap.":"next step.",
"Je ontwerp bespreken":"Discuss your design",
"Een halfuur met Noor om je tuinplan samen te bekijken.":"Half an hour with Noor to review your garden plan together.",
"Voorbeeldtijdstip · dinsdag, 10:00":"Example slot \u00b7 Tuesday, 10:00",
"Plan dit gesprek":"Book this conversation",
"Gesprek ingepland. Dit is een voorbeeldboeking.":"Conversation booked. This is a demo booking.",
"DIRECT CONTACT":"DIRECT CONTACT",
"Alles op":"Everything in",
"één plek.":"one place.",
"Je eerste tuinontwerp staat klaar. We bespreken het graag samen tijdens onze volgende afspraak.":"Your first garden design is ready. Let\u2019s review it together at our next appointment.",
"Voorbeeldbericht":"Example message",
"Mooi, ik kijk ernaar uit!":"Lovely, I look forward to it!",
"Project":"Project",
"Afspraken":"Appointments",
"Berichten":"Messages",
"App":"App",
"Website":"Website",

 "Websites en applicaties bouwen.":"Build websites and applications.",
 "Van een heldere website tot een praktische webapp. We bouwen een digitale oplossing die past bij je bedrijf en het gebruik door je klanten.":"From a clear website to a practical web app. We build a digital solution that fits your business and how your customers use it.",
 "Onderhouden en blijven verbeteren.":"Maintain and keep improving.",
 "We volgen je website of applicatie technisch op, voeren updates uit en passen inhoud of functies aan volgens de afspraken van je project.":"We provide technical follow-up for your website or application, perform updates and adjust content or features as agreed for your project.",
 "Aandacht trekken voor jouw bedrijf.":"Draw attention to your business.",
 "Met content, sociale media, campagnes en advertenties brengen we je bedrijf en aanbod onder de aandacht van je doelgroep.":"With content, social media, campaigns and advertising, we bring your business and offer to your audience’s attention.",

 'Bekijk wat we bouwen':'See what we build',
 'Meer over onderhoud':'More about maintenance',
 'Een duidelijke volgende stap op je website. Herkenbare content op je socials. Zo help je mensen om je zaak te ontdekken én contact op te nemen.':'A clear next step on your website. Recognisable content on social media. Help people discover your business and get in touch.',
 'Wat kunnen we voor jou doen?':'How can we help you?',
 'VAN WEBSITE NAAR PRAKTISCHE APP':'FROM WEBSITE TO PRACTICAL APP',
 'atelier voor groen':'garden design studio','Onze aanpak':'Our approach','Contact ↗':'Contact ↗',
 'TUINONTWERP MET AANDACHT':'THOUGHTFUL GARDEN DESIGN','Buiten begint':'The outdoors','bij jou.':'starts with you.',
 'Een groene plek om thuis te komen.':'A green space to come home to.','Ontworpen op jouw ritme.':'Designed around your life.',
 'Bekijk de Noor-app':'Explore the Noor app','Ruimte om te groeien.':'Room to grow.',
 'Tuinontwerp':'Garden design','Beplanting':'Planting','Een plek voor jou':'A place for you',
 'Alles weer up-to-date':'Everything up to date','Onderhoud door BMA Studio':'Maintained by BMA Studio',
 'Een nieuwe projectaanvraag':'A new project enquiry','Kunnen jullie ook mijn tuin ontwerpen?':'Could you design my garden too?',
 'Voorbeeldmelding · geen echte aanvraag':'Demo notification · not a real enquiry',
 'Fictieve website & app':'Fictional website & app'
 };
 const textNodes=[];
 const walker=document.createTreeWalker(shadow,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){const node=walker.currentNode;if(translations[node.textContent.trim()])textNodes.push([node,node.textContent]);}
 function translate(){const english=document.documentElement.lang.startsWith('en');for(const [node,original] of textNodes)node.textContent=english?original.replace(original.trim(),translations[original.trim()]):original;shadow.getElementById('close-demo').setAttribute('aria-label',english?'Close demo notification':'Sluit de voorbeeldmelding');app.setAttribute('aria-label',english?'Noor app example':'Noor-app voorbeeld');shadow.querySelector('.demo-views').setAttribute('aria-label',english?'Example view':'Voorbeeldweergave');shadow.querySelector('.app-tabs').setAttribute('aria-label',english?'Noor app navigation':'Noor-app navigatie');}
 new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 translate();

 style.addEventListener('load',render);
}
