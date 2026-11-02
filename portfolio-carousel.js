/* Homepage portfolio as a 3D ring: the front card is the largest, the others sit angled and blurred
   behind it. Cycles on its own; arrows, dots, keys, swipe and sideways scroll also work. */
(() => {
  const grid = document.querySelector('.home-portfolio-grid');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.home-portfolio-card')];
  const count = cards.length;
  if (count < 3) return;

  const section = grid.closest('.home-portfolio-section');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const narrow = matchMedia('(max-width: 767px)');
  const INTERVAL = 4800;
  const reach = Math.floor(count / 2);
  let index = 0;
  let timer = 0;
  let inView = true;
  let hovering = false;
  let focused = false;
  let dragging = false;
  let width = cards[0].offsetWidth;
  const previous = new Map();

  const english = () => document.documentElement.lang.startsWith('en');
  const text = {
    nl: { prev: 'Vorig project', next: 'Volgend project', show: 'Toon project', group: 'Projecten', slide: 'project' },
    en: { prev: 'Previous project', next: 'Next project', show: 'Show project', group: 'Projects', slide: 'project' },
  };
  const t = key => text[english() ? 'en' : 'nl'][key];

  cards.forEach(card => {
    card.classList.remove('reveal', 'will-reveal', 'is-visible', 'hover-lift');
    card.setAttribute('role', 'group');
    card.setAttribute('aria-roledescription', t('slide'));
  });
  grid.classList.add('is-carousel');
  grid.setAttribute('aria-roledescription', 'carousel');
  section.classList.add('has-carousel');

  const arrow = (direction) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'pc-arrow';
    button.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${direction < 0 ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}"/></svg>`;
    button.addEventListener('click', () => go(index + direction, true));
    return button;
  };
  const controls = document.createElement('div');
  controls.className = 'pc-controls';
  controls.setAttribute('role', 'group');
  const prevButton = arrow(-1);
  const nextButton = arrow(1);
  const dotWrap = document.createElement('div');
  dotWrap.className = 'pc-dots';
  const dots = cards.map((card, k) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'pc-dot';
    dot.addEventListener('click', () => go(k, true));
    dotWrap.append(dot);
    return dot;
  });
  controls.append(prevButton, dotWrap, nextButton);
  grid.after(controls);

  const names = cards.map(card => card.querySelector('h3')?.textContent.trim() || '');
  const labels = () => {
    controls.setAttribute('aria-label', t('group'));
    prevButton.setAttribute('aria-label', t('prev'));
    nextButton.setAttribute('aria-label', t('next'));
    dots.forEach((dot, k) => dot.setAttribute('aria-label', `${t('show')} ${names[k]}`));
    cards.forEach((card, k) => card.setAttribute('aria-label', `${k + 1} / ${count}`));
  };

  const offsetOf = k => {
    let d = (k - index) % count;
    if (d > reach) d -= count;
    if (d < -reach) d += count;
    return d;
  };

  const place = () => {
    const step = narrow.matches ? 37 : 31;
    const radius = width * (narrow.matches ? 1.02 : 1.18);
    cards.forEach((card, k) => {
      const d = offsetOf(k);
      const far = Math.abs(d);
      const angle = d * step * Math.PI / 180;
      const rotate = -Math.max(-44, Math.min(44, d * step * 0.92));
      const opacity = far === 0 ? 1 : far === 1 ? 0.94 : far === 2 ? (narrow.matches ? 0 : 0.62) : 0;
      const blur = far === 0 ? 0 : far === 1 ? 2.6 : 5.2;
      const jumped = previous.has(card) && Math.abs(d - previous.get(card)) > reach;
      if (jumped) card.classList.add('pc-jump');
      card.style.setProperty('--x', `${(Math.sin(angle) * radius).toFixed(1)}px`);
      card.style.setProperty('--z', `${((Math.cos(angle) - 1) * radius * 1.1).toFixed(1)}px`);
      card.style.setProperty('--r', `${rotate.toFixed(1)}deg`);
      card.style.setProperty('--o', String(opacity));
      card.style.setProperty('--b', `${blur}px`);
      card.style.setProperty('--br', String(far === 0 ? 1 : far === 1 ? 0.96 : 0.9));
      card.style.setProperty('--z-index', String(20 - far * 4));
      const active = d === 0;
      card.classList.toggle('is-active', active);
      if (active) card.removeAttribute('aria-hidden');
      else card.setAttribute('aria-hidden', 'true');
      card.querySelector('.home-portfolio-link')?.setAttribute('tabindex', active ? '0' : '-1');
      previous.set(card, d);
      if (jumped) {
        void card.offsetWidth;
        requestAnimationFrame(() => card.classList.remove('pc-jump'));
      }
    });
    dots.forEach((dot, k) => dot.setAttribute('aria-current', String(k === index)));
  };

  const go = (target, manual = false) => {
    index = ((target % count) + count) % count;
    place();
    if (manual) restart();
  };

  const running = () => !reduced.matches && inView && !hovering && !focused && !dragging && !document.hidden;
  const stop = () => { clearInterval(timer); timer = 0; };
  const restart = () => {
    stop();
    if (running()) timer = setInterval(() => go(index + 1), INTERVAL);
  };

  // Click a side card to bring it to the front; the front card's own link works normally.
  grid.addEventListener('click', event => {
    if (grid.dataset.moved === '1') { event.preventDefault(); event.stopPropagation(); return; }
    const card = event.target.closest('.home-portfolio-card');
    if (!card || card.classList.contains('is-active')) return;
    event.preventDefault();
    event.stopPropagation();
    go(cards.indexOf(card), true);
  }, true);

  // Swipe or drag sideways.
  let startX = 0;
  let startY = 0;
  let pointer = null;
  grid.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointer = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    grid.dataset.moved = '0';
  });
  grid.addEventListener('pointermove', event => {
    if (event.pointerId !== pointer) return;
    const dx = event.clientX - startX;
    if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(event.clientY - startY)) {
      dragging = true;
      grid.classList.add('is-dragging');
      grid.dataset.moved = '1';
    }
  });
  const release = event => {
    if (event.pointerId !== pointer) return;
    const dx = event.clientX - startX;
    pointer = null;
    grid.classList.remove('is-dragging');
    const wasDragging = dragging;
    dragging = false;
    if (wasDragging && Math.abs(dx) > 42) go(index + (dx < 0 ? 1 : -1), true);
    else restart();
    setTimeout(() => { grid.dataset.moved = '0'; }, 60);
  };
  grid.addEventListener('pointerup', release);
  grid.addEventListener('pointercancel', release);

  // Sideways trackpad scroll moves the ring; vertical scrolling is left alone.
  let wheelLock = 0;
  grid.addEventListener('wheel', event => {
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) || Math.abs(event.deltaX) < 14) return;
    event.preventDefault();
    const now = performance.now();
    if (now - wheelLock < 650) return;
    wheelLock = now;
    go(index + (event.deltaX > 0 ? 1 : -1), true);
  }, { passive: false });

  grid.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') go(index + 1, true);
    else if (event.key === 'ArrowLeft') go(index - 1, true);
    else if (event.key === 'Home') go(0, true);
    else if (event.key === 'End') go(count - 1, true);
    else return;
    event.preventDefault();
  });

  const pauseTargets = [grid, controls];
  pauseTargets.forEach(target => {
    target.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovering = true; stop(); } });
    target.addEventListener('pointerleave', () => { hovering = false; restart(); });
    target.addEventListener('focusin', () => {
      focused = !!document.activeElement?.matches(':focus-visible');
      if (focused) stop();
    });
    target.addEventListener('focusout', () => { focused = false; restart(); });
  });

  new IntersectionObserver(entries => {
    inView = entries[entries.length - 1].isIntersecting;
    restart();
  }, { threshold: 0.25 }).observe(grid);
  document.addEventListener('visibilitychange', restart);
  reduced.addEventListener('change', restart);
  narrow.addEventListener('change', place);
  window.addEventListener('bma-language-change', () => {
    cards.forEach(card => card.setAttribute('aria-roledescription', t('slide')));
    labels();
  });
  new ResizeObserver(() => {
    const next = cards[0].offsetWidth;
    if (next && Math.abs(next - width) > 1) { width = next; place(); }
  }).observe(grid);

  labels();
  width = cards[0].offsetWidth;
  // The first placement is instant, so the cards do not fly out of the middle on page load.
  grid.classList.add('pc-static');
  place();
  void grid.offsetWidth;
  setTimeout(() => grid.classList.remove('pc-static'), 60);
  restart();
})();
