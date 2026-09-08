const reviews = [
  { name: 'Manu Moeskops', initials: 'MM', stars: 5, tone: 'mint', lang: 'nl', title: 'Perfecte samen werking gehad met Berend...', text: 'Perfecte samen werking gehad met Berend om een website te bouwen.\n\nDuidelijke afspraken nagekomen en prachtig resultaat!', excerpt: 'Duidelijke afspraken nagekomen en prachtig resultaat!' },
  { name: 'azdin bhdz', initials: 'ab', stars: 5, tone: 'blue', lang: 'fr', title: 'Ils ont fait un très bon site', text: "Ils ont fait un très bon site, ils ont appliqué tout ce dont j’ai demandé et sont disponibles 24h/24. Je suis très satisfait et je vous le recommande.", excerpt: 'Je suis très satisfait et je vous le recommande.' },
  { name: 'Noémi Hurkens', initials: 'NH', stars: 4, tone: 'cream', lang: 'nl', title: 'Mooie website gemaakt', text: 'Mooie website gemaakt, precies gedaan wat ik gevraagd heb. Er was een goed contact, maar de oplevering duurde ietsjes langer dan verwacht, maar was geen probleem. Verder was alles prima.', excerpt: 'Mooie website gemaakt, precies gedaan wat ik gevraagd heb.' },
  { name: 'robyn atkins', initials: 'ra', stars: 5, tone: 'lavender', lang: 'nl', title: 'professionele en vlotte service !', text: 'professionele en vlotte service !\nBMA Studio heeft mij goed geholpen met het creëren van een sterke uitstraling voor mijn bedrijf. De communicatie was duidelijk en professioneel. Ze luisteren goed naar de behoeften van hun klanten en sturen bij waar nodig om tot het perfecte eindresultaat te komen. Ik ben zeer tevreden over de samenwerking!', excerpt: 'Ik ben zeer tevreden over de samenwerking!' }
];
const stars = n => `<span class="stars" role="img" aria-label="${n} van 5 sterren"><span aria-hidden="true">${'★'.repeat(n)}<span class="empty-star">${'★'.repeat(5 - n)}</span></span></span>`;
const avatar = r => `<span class="avatar ${r.tone}" aria-hidden="true">${r.initials}</span>`;
const author = r => `<div class="author">${avatar(r)}<div><strong>${r.name}</strong><span>Review op Trustpilot</span></div></div>`;
const paragraphs = r => r.text.split('\n').filter(Boolean).map(p => `<p>${p}</p>`).join('');

const themeButton = document.querySelector('.theme-toggle');
let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
try { const saved = localStorage.getItem('bma-review-concepts-theme'); if (saved) dark = saved === 'dark'; } catch {}
function setTheme(value) {
  document.body.dataset.theme = value ? 'dark' : 'light';
  themeButton.setAttribute('aria-pressed', String(value));
  document.querySelector('.theme-label').textContent = value ? 'Dagmodus' : 'Nachtmodus';
  document.querySelector('meta[name="theme-color"]').content = value ? '#080e19' : '#f5f8fc';
}
setTheme(dark);
themeButton.addEventListener('click', () => {
  dark = !dark; setTheme(dark);
  try { localStorage.setItem('bma-review-concepts-theme', dark ? 'dark' : 'light'); } catch {}
});

const tabs = document.querySelector('.customer-tabs');
tabs.innerHTML = reviews.map((r, i) => `<button type="button" role="tab" id="customer-${i}" aria-controls="spotlight-content" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${avatar(r)}<span><strong>${r.name}</strong><small>${r.stars} / 5 sterren</small></span><span class="tab-arrow" aria-hidden="true">↗</span></button>`).join('');
function selectReview(index, focus = false) {
  const r = reviews[index];
  const panel = document.querySelector('#spotlight-content');
  panel.setAttribute('aria-labelledby', `customer-${index}`);
  panel.innerHTML = `<div class="quote-aside"><span class="quote-mark" aria-hidden="true">“</span>${stars(r.stars)}<span class="quote-count">0${index + 1} / 04</span></div><div class="quote-main"><blockquote lang="${r.lang}">“${r.excerpt}”</blockquote><details class="full-review"><summary>Lees de volledige review <span aria-hidden="true">+</span></summary><div lang="${r.lang}">${paragraphs(r)}</div></details></div>`;
  tabs.querySelectorAll('button').forEach((button, i) => { button.setAttribute('aria-selected', String(i === index)); button.tabIndex = i === index ? 0 : -1; });
  if (focus) tabs.children[index].focus();
}
tabs.addEventListener('click', event => { const button = event.target.closest('[role="tab"]'); if (button) selectReview([...tabs.children].indexOf(button)); });
tabs.addEventListener('keydown', event => {
  const current = [...tabs.children].indexOf(document.activeElement);
  if (current < 0) return;
  let next;
  if (event.key === 'ArrowRight') next = (current + 1) % reviews.length;
  if (event.key === 'ArrowLeft') next = (current + reviews.length - 1) % reviews.length;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = reviews.length - 1;
  if (next !== undefined) { event.preventDefault(); selectReview(next, true); }
});
selectReview(0);

document.querySelector('.mosaic-grid').insertAdjacentHTML('beforeend', reviews.map((r, i) => `<article class="mosaic-card mosaic-${i} ${r.tone}"><div class="card-top">${stars(r.stars)}<span class="small-quote" aria-hidden="true">“</span></div><h3 lang="${r.lang}">${r.title}</h3><blockquote lang="${r.lang}">${paragraphs(r)}</blockquote>${author(r)}</article>`).join(''));

document.querySelector('.journal-track').innerHTML = reviews.map((r, i) => `<article class="journal-card ${r.tone}"><div class="postcard-top"><span>BMA / KLANTVERHAAL</span><span class="postcard-number">0${i + 1}</span></div>${stars(r.stars)}<h3 lang="${r.lang}">${r.title}</h3><blockquote lang="${r.lang}">${paragraphs(r)}</blockquote><div class="postcard-bottom">${author(r)}<span class="stamp" aria-hidden="true">BMA<br>STUDIO</span></div></article>`).join('');
const track = document.querySelector('.journal-track');
function updateArrows() {
  document.querySelector('[data-direction="-1"]').disabled = track.scrollLeft < 3;
  document.querySelector('[data-direction="1"]').disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 3;
}
document.querySelectorAll('[data-direction]').forEach(button => button.addEventListener('click', () => {
  const step = track.querySelector('article').getBoundingClientRect().width + 24;
  track.scrollBy({ left: Number(button.dataset.direction) * step, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}));
track.addEventListener('scroll', updateArrows, { passive: true });
window.addEventListener('resize', updateArrows);
updateArrows();

document.querySelector('.voice-list').innerHTML = reviews.map((r, i) => `<details class="voice" ${i === 0 ? 'open' : ''}><summary><span class="voice-number">0${i + 1}</span><span class="voice-heading"><strong>${r.name}</strong><span lang="${r.lang}">${r.title}</span></span>${stars(r.stars)}<span class="expand-icon" aria-hidden="true">+</span></summary><div class="voice-body"><blockquote lang="${r.lang}">${paragraphs(r)}</blockquote><span class="voice-source">GEPLAATST OP TRUSTPILOT</span></div></details>`).join('');
