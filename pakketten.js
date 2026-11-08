(() => {
  // PLACEHOLDER-PRIJZEN — vervang door echte bedragen voor publicatie.
  const PACKAGES = {
    Websites: { careLabel: 'Hosting, updates & kleine aanpassingen', intro: 'Een website die je aanbod, realisaties en contactinformatie helder samenbrengt.', packages: [
      { name: 'One-page', price: 500, care: 19, lead: 'Eén overzichtelijke pagina voor je aanbod en contact.', items: ['Eén pagina met je diensten', 'Contactformulier', 'Responsive op gsm en tablet', 'Basis-SEO'] },
      { name: 'Website', price: 850, care: 29, lead: 'Meer ruimte voor elke dienst en je realisaties.', items: ["Tot 5 pagina's", 'Realisaties of portfolio', 'Contactformulier', 'Lokale SEO'], featured: true },
      { name: 'Website+', price: 1500, care: 49, lead: 'Voor bedrijven met veel diensten of inhoud.', items: ["Tot 12 pagina's", 'Zelf nieuws of realisaties toevoegen', 'Meertalig (NL/FR)', 'Lokale SEO'] }] },
    Applicaties: { careLabel: 'Hosting, updates & kleine aanpassingen', intro: 'Een webapp die klanten of je team handige functies in de browser geeft.', packages: [
      { name: 'Webapp', price: 2950, care: 59, lead: 'Eén duidelijke functie, zoals afspraken boeken.', items: ['Eén kernfunctie (bv. boeken)', 'Login voor klanten', 'Beheerscherm voor jou', 'Mailmeldingen'] },
      { name: 'Webapp op maat', price: 5950, care: 99, lead: 'Meerdere functies, betalingen en koppelingen.', items: ['Meerdere functies', 'Online betalen', 'Koppeling met je tools', 'Beheerscherm voor jou'], featured: true }] },
    'AI-assistenten': { careRequired: true, careLabel: 'AI-gebruik, hosting & updates', intro: 'Een AI-assistent die vragen over je bedrijf, aanbod of werkwijze beantwoordt, op je website of aan de telefoon.', packages: [
      { name: 'Assistent', price: 450, care: 25, lead: 'Beantwoordt vragen op je website met jouw informatie.', items: ['Chat op je website', 'Getraind op jouw info', 'Tot 300 gesprekken per maand', 'Doorverwijzen naar jou'] },
      { name: 'Assistent+', price: 1450, care: 59, lead: 'Plant afspraken en geeft aanvragen door.', items: ['Alles van Assistent', 'Tot 1.000 gesprekken per maand', 'Afspraken inplannen', 'Aanvragen doorsturen'], featured: true },
      { name: 'Voicemail-assistent', price: 950, care: 79, lead: 'Neemt de telefoon op als jij niet kan.', items: ['Beantwoordt bellers met jouw info', 'Noteert naam, nummer en vraag', 'Samenvatting per mail', 'Tot 200 belminuten per maand'] }] }
  };
  const COMPARE = {
    Websites: [["Pagina's", '1', 'tot 5', 'tot 12'], ['Contactformulier', true, true, true], ['Realisaties / portfolio', false, true, true], ['Zelf inhoud toevoegen', false, false, true], ['Meertalig (NL/FR)', false, false, true], ['Lokale SEO', 'basis', true, true]],
    Applicaties: [['Kernfuncties', '1', 'meerdere'], ['Login voor klanten', true, true], ['Beheerscherm', true, true], ['Online betalen', false, true], ['Koppelingen', false, true]],
    'AI-assistenten': [['Kanaal', 'website-chat', 'website-chat', 'telefoon'], ['Gebruik per maand', '300 gesprekken', '1.000 gesprekken', '200 belminuten'], ['Getraind op jouw info', true, true, true], ['Doorverwijzen naar jou', true, true, true], ['Afspraken inplannen', false, true, false], ['Samenvatting per mail', false, false, true], ['Koppelingen', false, true, false]]
  };
  const FAQ = [
    ['Waarom staat er "vanaf"?', 'Elk project is anders. De vanaf-prijs geldt voor het pakket zoals beschreven. Na een kort gesprek krijg je een vaste prijs, zodat je vooraf weet waar je aan toe bent.'],
    ['Wat zit er in onderhoud?', 'Hosting, updates, back-ups en kleine aanpassingen. Voor websites en apps is onderhoud optioneel. Een AI-assistent heeft altijd een abonnement, omdat elk gesprek AI-gebruik kost. Je betaalt per maand of per jaar; per jaar krijg je 2 maanden gratis.'],
    ['Hoe werkt de voicemail-assistent?', 'Kan je de telefoon niet opnemen, dan neemt de assistent op. Hij beantwoordt eenvoudige vragen met jouw informatie en noteert naam, nummer en vraag. Jij krijgt meteen een samenvatting per mail en belt terug wanneer het past.'],
    ['Wat als mijn assistent meer gesprekken heeft?', 'Je krijgt een seintje voor je de limiet van gesprekken of belminuten bereikt. Dan bekijken we samen of een groter pakket beter past. Je assistent valt niet zomaar stil.'],
    ['Kan ik later uitbreiden?', "Ja. Je kan starten met een kleiner pakket en later pagina's of functies toevoegen. We bespreken dan wat het extra kost."],
    ['Kan ik zonder onderhoud?', 'Voor websites en apps wel. Dan krijg je alles opgeleverd en regel je hosting en updates zelf. Een AI-assistent werkt alleen met abonnement, omdat elk gesprek AI-gebruik kost.'],
    ['Zijn de prijzen inclusief btw?', 'Ja. Er komt geen btw bij: de prijs die je ziet, is de prijs die je betaalt.']
  ];

  const eur = n => '€' + n.toLocaleString('nl-BE');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const services = Object.keys(PACKAGES);
  const state = { svc: services[0], yearly: false, care: {} };
  const $ = id => document.getElementById(id);
  const per = () => (state.yearly ? 'jaar' : 'mnd');
  const careAmt = c => eur(state.yearly ? c * 10 : c);

  function renderSwitch(el, options, value, label) {
    el.setAttribute('role', 'tablist');
    el.setAttribute('aria-label', label);
    el.innerHTML = options.map(o => `<button type="button" role="tab" aria-selected="${o === value}" data-v="${esc(o)}">${esc(o)}</button>`).join('');
  }

  function card(p, d, i) {
    const on = d.careRequired || state.care[state.svc + i];
    const sub = on ? `+ ${careAmt(p.care)} per ${state.yearly ? 'jaar' : 'maand'} · incl. btw` : 'eenmalig · incl. btw';
    const care = d.careRequired
      ? `<div class="pk-care is-fixed"><span><b>Abonnement inbegrepen</b><small>${esc(d.careLabel)}</small></span><b><em>+${careAmt(p.care)}/${per()}</em></b></div>`
      : `<label class="pk-care${on ? ' is-on' : ''}"><span><b>Met onderhoud <em>+${careAmt(p.care)}/${per()}</em></b><small>${esc(d.careLabel)}</small></span><input type="checkbox" data-care="${i}"${on ? ' checked' : ''}><span class="pk-track" aria-hidden="true"></span></label>`;
    return `<article class="card hover-lift pk-card${p.featured ? ' is-featured' : ''}">
      <div><h3>${esc(p.name)}</h3><p class="pk-lead">${esc(p.lead)}</p></div>
      <div class="pk-price"><small>vanaf</small><strong>${eur(p.price)}</strong><span>${sub}</span></div>
      <ul class="pk-items">${p.items.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      <div class="pk-actions">${care}<a class="${p.featured ? 'primary-button' : 'secondary-button'}" href="/contact.html">Bespreek ${esc(p.name)}</a></div>
    </article>`;
  }

  function table(d) {
    const cell = v => v === true ? '<span class="pk-yes" aria-label="ja">✓</span>' : v === false ? '<span class="pk-no" aria-label="nee">—</span>' : `<strong>${esc(v)}</strong>`;
    return `<table class="pk-table"><thead><tr><th scope="col">${esc(state.svc)}</th>${d.packages.map(p => `<th scope="col">${esc(p.name)}<small>vanaf ${eur(p.price)}</small></th>`).join('')}</tr></thead><tbody>
      ${COMPARE[state.svc].map(([l, ...v]) => `<tr><th scope="row">${esc(l)}</th>${v.map(x => `<td>${cell(x)}</td>`).join('')}</tr>`).join('')}
      <tr class="pk-care-row"><th scope="row">${d.careRequired ? 'Abonnement' : 'Onderhoud (optioneel)'}</th>${d.packages.map(p => `<td>+${careAmt(p.care)}/${per()}</td>`).join('')}</tr></tbody></table>`;
  }

  function render() {
    const d = PACKAGES[state.svc];
    renderSwitch($('pk-service'), services, state.svc, 'Soort project');
    renderSwitch($('pk-billing'), ['Per maand', 'Per jaar'], state.yearly ? 'Per jaar' : 'Per maand', 'Facturatie onderhoud');
    $('pk-badge').hidden = !state.yearly;
    $('pk-intro').textContent = d.intro;
    $('pk-grid').innerHTML = d.packages.map((p, i) => card(p, d, i)).join('');
    $('pk-note').textContent = d.careRequired
      ? 'Alle prijzen incl. btw. Een AI-assistent heeft altijd een abonnement voor het AI-gebruik.'
      : 'Alle prijzen incl. btw. Onderhoud is optioneel; per jaar krijg je 2 maanden gratis.';
    $('pk-table').innerHTML = table(d);
  }

  $('pk-service').addEventListener('click', e => { const b = e.target.closest('button'); if (b) { state.svc = b.dataset.v; render(); } });
  $('pk-billing').addEventListener('click', e => { const b = e.target.closest('button'); if (b) { state.yearly = b.dataset.v === 'Per jaar'; render(); } });
  $('pk-grid').addEventListener('change', e => {
    const i = e.target.dataset.care;
    if (i === undefined) return;
    state.care[state.svc + i] = e.target.checked;
    const c = e.target.closest('.pk-card');
    const p = PACKAGES[state.svc].packages[i];
    c.querySelector('.pk-care').classList.toggle('is-on', e.target.checked);
    c.querySelector('.pk-price span').textContent = e.target.checked ? `+ ${careAmt(p.care)} per ${state.yearly ? 'jaar' : 'maand'} · incl. btw` : 'eenmalig · incl. btw';
  });
  $('pk-faq').innerHTML = FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
  render();
})();
