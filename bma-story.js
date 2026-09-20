// Self-contained enhancement for the existing BMA homepage. No network submissions.
const host = document.querySelector('bma-story');
if (host && !host.shadowRoot) {
 const shadow = host.attachShadow({mode:'open'});
 const style = document.createElement('link');
 style.rel='stylesheet';style.href=new URL('./bma-story.css?v=20260920-bma-skin-2',import.meta.url).href;
 shadow.append(style);
 const template=document.createElement('template');
 template.innerHTML="<section class=\"journey\" aria-label=\"Build, Maintain, Attract\"><div class=\"journey-copy\"><article class=\"chapter\" id=\"build\" data-step=\"0\"><p class=\"eyebrow\"><span class=\"chapter-number\">01</span> BUILD</p><h2>Een website die laat zien waarom klanten voor jou kiezen.</h2><p>Jouw vakmanschap verdient een heldere website. We brengen je verhaal, diensten en contact samen in een ontwerp dat bij je zaak past.</p><a class=\"text-link\" href=\"./portfolio.html\">Bekijk wat we bouwen <span aria-hidden=\"true\">\u2197</span></a></article>\n<article class=\"chapter\" id=\"maintain\" data-step=\"1\"><p class=\"eyebrow\"><span class=\"chapter-number\">02</span> MAINTAIN</p><h2>Mooi op elk scherm. En door ons onderhouden.</h2><p>Van een snelle blik op de smartphone tot rustig vergelijken op de laptop. Je website blijft verzorgd, met updates en opvolging door BMA Studio.</p><a class=\"text-link\" href=\"./diensten.html\">Meer over onderhoud <span aria-hidden=\"true\">\u2197</span></a></article>\n<article class=\"chapter\" id=\"attract\" data-step=\"2\"><p class=\"eyebrow\"><span class=\"chapter-number\">03</span> ATTRACT</p><h2>Maak van interesse een eerste gesprek.</h2><p>Een duidelijke volgende stap op je website. Herkenbare content op je socials. Zo help je mensen om je zaak te ontdekken \u00e9n contact op te nemen.</p><a class=\"text-link\" href=\"./contact.html?pakket=prototype\">Wat kunnen we voor jou doen? <span aria-hidden=\"true\">\u2197</span></a></article>\n</div>\n<div class=\"visual-track\"><div class=\"visual-sticky\"><div class=\"demo-glow\" aria-hidden=\"true\"></div><div class=\"demo-caption\"><span>VAN EERSTE IDEE TOT EERSTE CONTACT</span><span aria-hidden=\"true\">\u2198</span></div>\n<div class=\"device\" id=\"device\"><div class=\"browser-bar\"><div class=\"window-dots\" aria-hidden=\"true\"><i></i><i></i><i></i></div><span class=\"address\"><svg width=\"10\" height=\"12\" viewBox=\"0 0 10 12\" fill=\"none\" aria-hidden=\"true\"><rect x=\"1\" y=\"5\" width=\"8\" height=\"6\" rx=\"2\" stroke=\"currentColor\"/><path d=\"M3 5V3a2 2 0 0 1 4 0v2\" stroke=\"currentColor\"/></svg> atelier-noor.voorbeeld</span><span class=\"browser-more\" aria-hidden=\"true\">+</span></div>\n<div class=\"example-site\"><div class=\"example-nav assemble\"><span class=\"noor-logo\">noor<span>atelier voor groen</span></span><span class=\"example-nav-links\">Onze aanpak <b>Contact \u2197</b></span><span class=\"example-menu\" aria-hidden=\"true\">\u2630</span></div><div class=\"example-main\"><p class=\"example-kicker assemble\">TUINONTWERP MET AANDACHT</p><h3 class=\"assemble\">Buiten begint<br>bij jou.</h3><p class=\"example-description assemble\">Een groene plek om thuis te komen.<br>Ontworpen op jouw ritme.</p><button class=\"example-button assemble\" id=\"demo-contact\">Vertel ons je plannen <span aria-hidden=\"true\">\u2197</span></button><div class=\"garden-art assemble\" aria-label=\"Abstracte illustratie in groene en gele vlakken\" role=\"img\"><div class=\"art-orbit\"></div><div class=\"art-sun\"></div><div class=\"art-arch\"></div><div class=\"art-lines\"></div><span>Ruimte om te groeien.</span><span class=\"art-symbol\" aria-hidden=\"true\">\u2733</span></div></div><div class=\"example-footer\"><span>Tuinontwerp</span><span>Beplanting</span><span>Een plek voor jou</span></div></div></div>\n<div class=\"maintenance\" id=\"maintenance\"><span class=\"check\" aria-hidden=\"true\">\u2713</span><div>Alles weer up-to-date<span>Onderhoud door BMA Studio</span></div></div>\n<div class=\"notification\" id=\"notification\" role=\"status\" aria-live=\"polite\"><div class=\"notification-heading\"><span class=\"message-icon\" aria-hidden=\"true\">\u2197</span><b>Een eerste gesprek</b><span>DEMO</span></div><p>Ik wil graag een offerte aanvragen.</p><small>Voorbeeldmelding \u00b7 geen echte aanvraag</small><button id=\"close-demo\" aria-label=\"Sluit de voorbeeldmelding\">\u00d7</button></div>\n<div class=\"demo-bottom\"><p>Fictieve voorbeeldwebsite <span>\u00b7</span> Atelier Noor</p><div class=\"stage-labels\" aria-label=\"Hoofdstukken\"><button type=\"button\" data-chapter=\"0\" class=\"active\">Build</button><button type=\"button\" data-chapter=\"1\">Maintain</button><button type=\"button\" data-chapter=\"2\">Attract</button></div></div></div></div>\n</section>\n";
 shadow.append(template.content.cloneNode(true));
  const root = host;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width: 760px)');
  const chapters = [...shadow.querySelectorAll('.chapter')];
  const stageLinks = [...shadow.querySelectorAll('.stage-labels button')];
  const maintenance = shadow.getElementById('maintenance');
  const notification = shadow.getElementById('notification');
  const contact = shadow.getElementById('demo-contact');
  let currentStage = 0, manualDemo = false, dismissed = false, ticking = false;
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
    if (stage !== currentStage) { dismissed = false; currentStage = stage; }
    root.style.setProperty('--mobile', progress.toFixed(3));
    root.style.setProperty('--progress', (mobileProgress + attractProgress).toFixed(3));
    const full = shadow.querySelector('.visual-sticky').clientWidth;
    root.style.setProperty('--device-width', `${Math.round(full + (Math.min(290, full) - full) * progress)}px`);
    maintenance.classList.toggle('visible', !mobile.matches && stage === 1);
    const show = (stage === 2 || manualDemo) && !dismissed;
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
  contact.addEventListener('click', () => { manualDemo = true; dismissed = false; render(); });
  function closeDemo() { manualDemo = false; dismissed = true; render(); contact.focus({preventScroll:true}); }
  shadow.getElementById('close-demo').addEventListener('click', closeDemo);
  shadow.addEventListener('keydown', e => { if(e.key === 'Escape' && notification.classList.contains('visible')) closeDemo(); });

  stageLinks.forEach((button,i)=>button.addEventListener('click',()=>chapters[i].scrollIntoView({behavior:'instant',block:'center'})));
  const observer = new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){host.setAttribute('data-started','');observer.disconnect();}},{threshold:.1});
  observer.observe(host);
  render();


 // Follow the existing NL/EN switch without altering the site's translation code.
 const translations = {
 'Een website die laat zien waarom klanten voor jou kiezen.':'A website that shows why customers choose you.',
 'Jouw vakmanschap verdient een heldere website. We brengen je verhaal, diensten en contact samen in een ontwerp dat bij je zaak past.':'Your expertise deserves a clear website. We bring your story, services and contact details together in a design that fits your business.',
 'Bekijk wat we bouwen':'See what we build',
 'Mooi op elk scherm. En door ons onderhouden.':'Great on every screen. Maintained by us.',
 'Van een snelle blik op de smartphone tot rustig vergelijken op de laptop. Je website blijft verzorgd, met updates en opvolging door BMA Studio.':'From a quick glance on a phone to browsing on a laptop. Your website stays in good shape, with updates and support from BMA Studio.',
 'Meer over onderhoud':'More about maintenance',
 'Maak van interesse een eerste gesprek.':'Turn interest into a first conversation.',
 'Een duidelijke volgende stap op je website. Herkenbare content op je socials. Zo help je mensen om je zaak te ontdekken én contact op te nemen.':'A clear next step on your website. Recognisable content on social media. Help people discover your business and get in touch.',
 'Wat kunnen we voor jou doen?':'How can we help you?',
 'VAN EERSTE IDEE TOT EERSTE CONTACT':'FROM FIRST IDEA TO FIRST CONTACT',
 'atelier voor groen':'garden design studio','Onze aanpak':'Our approach','Contact ↗':'Contact ↗',
 'TUINONTWERP MET AANDACHT':'THOUGHTFUL GARDEN DESIGN','Buiten begint':'The outdoors','bij jou.':'starts with you.',
 'Een groene plek om thuis te komen.':'A green space to come home to.','Ontworpen op jouw ritme.':'Designed around your life.',
 'Vertel ons je plannen':'Tell us your plans','Ruimte om te groeien.':'Room to grow.',
 'Tuinontwerp':'Garden design','Beplanting':'Planting','Een plek voor jou':'A place for you',
 'Alles weer up-to-date':'Everything up to date','Onderhoud door BMA Studio':'Maintained by BMA Studio',
 'Een eerste gesprek':'A first conversation','Ik wil graag een offerte aanvragen.':'I would like to request a quote.',
 'Voorbeeldmelding · geen echte aanvraag':'Demo notification · not a real enquiry',
 'Fictieve voorbeeldwebsite':'Fictional example website'
 };
 const textNodes=[];
 const walker=document.createTreeWalker(shadow,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){const node=walker.currentNode;if(translations[node.textContent.trim()])textNodes.push([node,node.textContent]);}
 function translate(){const english=document.documentElement.lang.startsWith('en');for(const [node,original] of textNodes)node.textContent=english?original.replace(original.trim(),translations[original.trim()]):original;shadow.getElementById('close-demo').setAttribute('aria-label',english?'Close demo notification':'Sluit de voorbeeldmelding');}
 new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 translate();

 style.addEventListener('load',render);
}
