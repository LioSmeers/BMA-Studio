/* Local pointer feedback: no document-wide geometry scan on every mouse move. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)');
  document.querySelectorAll('.mi-faq').forEach((details, index) => {
    const summary = details.querySelector('summary');
    const answer = details.querySelector('.mi-answer');
    const button = document.createElement('button');
    const box = document.createElement('div');
    button.className = 'mi-question';
    button.type = 'button';
    button.append(...summary.childNodes);
    button.id = `mi-q-${index}`;
    answer.id = `mi-a-${index}`;
    button.setAttribute('aria-controls', answer.id);
    answer.setAttribute('aria-labelledby', button.id);
    let open = details.open;
    box.className = `${details.className} is-enhanced`;
    box.append(button, answer);
    details.replaceWith(box);
    const update = () => {
      button.setAttribute('aria-expanded', String(open));
      box.classList.toggle('is-open', open);
      answer.inert = !open;
    };
    update();
    button.addEventListener('click', () => { open = !open; update(); });
  });
  const resetters = [];
  const targets = new Set(document.querySelectorAll('[data-spotlight], .primary-button, .pill-button, [data-magnetic]'));
  targets.forEach(element => {
    const spotlight = element.hasAttribute('data-spotlight');
    if (!spotlight) element.setAttribute('data-magnetic', '');
    let bounds, frame = 0, point;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      bounds = null;
      element.classList.remove('mi-lit');
      element.style.removeProperty('--mag-x');
      element.style.removeProperty('--mag-y');
    };
    resetters.push(reset);
    element.addEventListener('pointerenter', event => {
      if (!fine.matches || reduced.matches || event.pointerType !== 'mouse') return;
      bounds = element.getBoundingClientRect();
      if (spotlight) element.classList.add('mi-lit');
    });
    element.addEventListener('pointermove', event => {
      if (!bounds || !fine.matches || reduced.matches) return;
      point = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!bounds) return;
        if (spotlight) {
          element.style.setProperty('--mouse-x', `${point.x}px`);
          element.style.setProperty('--mouse-y', `${point.y}px`);
        } else {
          element.style.setProperty('--mag-x', `${Math.max(-4, Math.min(4, (point.x - bounds.width / 2) * .04))}px`);
          element.style.setProperty('--mag-y', `${Math.max(-4, Math.min(4, (point.y - bounds.height / 2) * .04))}px`);
        }
      });
    }, { passive: true });
    element.addEventListener('pointerleave', reset);
  });
  const resetAll = () => resetters.forEach(reset => reset());
  addEventListener('blur', resetAll);
  addEventListener('scroll', resetAll, { passive: true });
  addEventListener('resize', resetAll, { passive: true });
  reduced.addEventListener('change', resetAll);
  fine.addEventListener('change', resetAll);
})();
